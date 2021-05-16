import { App } from '@aws-cdk/core';
import IamEntities from './stack';

const app = new App()
new IamEntities(app, {
  stackName: `iam-entities-${process.env.BRANCH_NAME}`
})
