#!/usr/bin/env bash

set -euo pipefail

BRANCH_NAME=${GITHUB_REF##*/}

# Install our npm dependencies
echo "--- 🚀 Installing npm dependencies..."
npm i

# Deploy the cdk stack
echo "--- 🚀 Deploying CDK stack..."
npx cdk \
  --require-approval never \
  --trace \
  --verbose \
  --execute true \
  --app "ts-node ./src/index.ts" \
  deploy
