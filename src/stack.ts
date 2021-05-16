import { App, Stack, StackProps } from '@aws-cdk/core';
import { createDeployerUser } from './users';

export interface Props extends StackProps { }

export default class IamEntities extends Stack {
  constructor(scope: App, props: Props) {
    super(scope, 'iamEntities', props);

    // Let's create the deployer users and their policies
    createDeployerUser({
      scope: this
    })

  }
}
