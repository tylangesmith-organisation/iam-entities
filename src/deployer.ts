import { Stack } from '@aws-cdk/core';
import { Group, User, PolicyStatement, Effect } from '@aws-cdk/aws-iam';

export interface Props {
  scope: Stack;
}

export default (props: Props) => {
  const { scope } = props;

  // Create the deployer group
  const deployerGroup = new Group(scope, 'deployerGroup', {
    groupName: `deployers-${process.env.BRANCH_NAME}`,
  })

  // Create the deployer user
  const deployerUser = new User(scope, 'githubActionsDeployerUser', {
    userName: `github-actions-deployer-${process.env.BRANCH_NAME}`
  })

  // Create deployer user's policy statement
  deployerUser.addToPolicy(new PolicyStatement({
    effect: Effect.ALLOW,
    resources: ['*'],
    actions: ['*']
  }))

  deployerGroup.addUser(deployerUser);
}
