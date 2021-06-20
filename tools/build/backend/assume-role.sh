#!/bin/bash
set -e
role_arn=$USER_AWS_ROLE_ARN
session_name="DevOps-${AWS_APP_ID}-${AWS_JOB_ID}-`date +%Y%m%d`"

echo "${session_name}"

echo 'Assuming role...'
sts=( $(
    aws sts assume-role \
    --role-arn "$role_arn" \
    --role-session-name "$session_name" \
    --query 'Credentials.[AccessKeyId,SecretAccessKey,SessionToken]' \
    --output text
) )
export AWS_ACCESS_KEY_ID=${sts[0]}
export AWS_SECRET_ACCESS_KEY=${sts[1]}
export AWS_SESSION_TOKEN=${sts[2]}

echo 'Update default configuration...'
aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID}
aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}
aws configure set aws_session_token ${AWS_SESSION_TOKEN}
aws configure set default.region ${USER_AWS_REGION}
