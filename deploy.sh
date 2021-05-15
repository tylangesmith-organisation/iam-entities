#!/usr/bin/env bash

set -euo pipefail

BRANCH_NAME=${GITHUB_REF##*/}
# TOOLKIT_STACK_NAME="cdk-toolkit-${BRANCH_NAME}-${ACCOUNT_ID}"
# BUCKET_NAME="${TOOLKIT_STACK_NAME}-${ACCOUNT_ID}"

# Install our npm dependencies
echo "--- 🚀 Installing npm dependencies..."
npm i

# # Bootstrap the cdk toolkit
# echo "--- 🚀 Bootstrapping CDK..."
# npx cdk bootstrap \
#   --toolkit-stack-name ${TOOLKIT_STACK_NAME} \
#   --toolkit-bucket-name ${BUCKET_NAME} \
#   aws://${ACCOUNT_ID}/${REGION}
