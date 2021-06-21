#!/bin/sh
set -e

updateBackendEnvironmentVariables () {
  echo 'Update backend environment variables'

  ENVIRONMENT_FILENAME=./libs/environment/src/environments/environment
  API_URL_LOCAL=http://localhost:3000

  API_URL_PROD=$(aws cloudformation describe-stacks --stack-name $PROTOTYPE_STACK_NAME --query 'Stacks[0].Outputs[?OutputKey==`ServiceEndpoint`].OutputValue' --output text)
  O="${API_URL_LOCAL}" N="${API_URL_PROD}" perl -pi -e's/\Q$ENV{O}/$ENV{N}/g' "${ENVIRONMENT_FILENAME}.ts"
  O="${API_URL_LOCAL}" N="${API_URL_PROD}" perl -pi -e's/\Q$ENV{O}/$ENV{N}/g' "${ENVIRONMENT_FILENAME}.prod.ts"

  cat "${ENVIRONMENT_FILENAME}.ts"
  cat "${ENVIRONMENT_FILENAME}.prod.ts"
}

export ACCOUNT_ID='ldjqmj5'
export ENV=${USER_BRANCH}
export PRODUCT_ID='r6vlayy'
export PROJECT_NAME=${ACCOUNT_ID}-${PRODUCT_ID}-${ENV}

echo 'Set environment variables'

export STACK_PREFIX=iot-demo-middleware
export API_NAME=${STACK_PREFIX}-${PROJECT_NAME}-api
API_URL_LOCAL=http://localhost:3000
export CL_DB_FILE_KEY=''
export EFS_ACCESS_POINT='arn:aws:elasticfilesystem:us-east-1:360070039770:access-point/fsap-0414f06a11dcc6bd0'
export EFS_MOUNT_PATH='/mnt/develop'
export LAMBDA_KAPI_DB_PATH=${EFS_MOUNT_PATH}/${ACCOUNT_ID}/${PRODUCT_ID}/
export LAMBDA_KAPI_NAME=${STACK_PREFIX}-${PROJECT_NAME}-lambda
export LAMBDA_BACKEND_NAME=${STACK_PREFIX}-${PROJECT_NAME}-backend-lambda
export PROTOTYPE_STACK_NAME=${STACK_PREFIX}-${PROJECT_NAME}-stack
export REGION=${USER_AWS_REGION}
export VPC_SECURITY_GROUP_ID='sg-037f0822c7abcbcc9'
export VPC_SUBNET_ID='subnet-0f3e375025cf395bd'


echo "Build backend"

npm run build:iot:prod

cd dist/apps/iot

echo "Zip IOT lambda function"

zip -qdgds 10m -r iot-demo-lambda.zip .

cd -


echo "Build Kleeen API middleware"

npm run build:api:prod

echo "Copy backend assets"

cd dist/apps/api
[ -d "apps/api/src/assets" ] && cp -a apps/api/src/assets dist/apps/api

echo "Zip and deploy backend to S3"

zip -qdgds 10m -r kapi-lambda.zip .

cd -

set +e
aws s3 rm s3://deploy-input-${ENV}/${CL_DB_FILE_KEY}
set -e

npx serverless deploy --config tools/build/middleware/middleware-serverless.yml

updateBackendEnvironmentVariables

echo 'Initialize and auto generate fake data'

# This call invoke the created lambda function to perform the database creation
curl --location --request POST \
    "${API_URL_PROD}/graphql?operationName=tryToCreateDatabase" \
    --header 'Auth: allow' \
    --header 'Content-Type: application/x-www-form-urlencoded' \
    --data-urlencode 'operations={}' \
    --data-urlencode 'source=deploy'
