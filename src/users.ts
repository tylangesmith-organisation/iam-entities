import { Stack } from '@aws-cdk/core';
import { User } from '@aws-cdk/aws-iam';

export interface Props {
  scope: Stack;
}

export const createDeployerUser = (props: Props) => {
  const { scope } = props;

  new User(scope, 'githubActionsDeployerUser', {
    userName: `github-actions-deployer-${process.env.BRANCH_NAME}`
  })
}
