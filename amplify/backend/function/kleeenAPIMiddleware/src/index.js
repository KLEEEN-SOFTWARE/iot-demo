/**
 * IMPORTANT: this file is override durring the deployment process,
 * for local testing perform
 *
 * npm run build:api:prod
 * rm -rf amplify/backend/function/kleeenAPIMiddleware/src
 * cp dist/apps/api amplify/backend/function/kleeenAPIMiddleware/src
 * mv amplify/backend/function/kleeenAPIMiddleware/src/main.js amplify/backend/function/kleeenAPIMiddleware/src/index.js
 * mv amplify/backend/function/kleeenAPIMiddleware/src/main.js.map amplify/backend/function/kleeenAPIMiddleware/src/index.js.map
 */
exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  console.log(`CONTEXT: ${JSON.stringify(context)}`);
};
