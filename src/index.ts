import { App } from '@aws-cdk/core';
import IamEntities from './stack';

console.log(process.env.BRANCH_NAME)
console.log(process.env)

const app = new App()
new IamEntities(app, {
  stackName: `iam-entities-${process.env.BRANCH_NAME}`
})
