#!/usr/bin/env bash

set -euo pipefail

# Install our npm dependencies
echo "--- 🚀 Installing npm dependencies..."
npm i

# Deploy the cdk stack
echo "--- 🚀 Deploying CDK stack..."
npx cdk \
  --require-approval never \
  --verbose \
  --execute true \
  --force \
  --toolkit-stack-name "cdk-toolkit-master-${ACCOUNT_ID}" \
  --app "ts-node ./src/index.ts" \
  deploy
