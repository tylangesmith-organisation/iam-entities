import { App, Stack, StackProps } from '@aws-cdk/core';
import createDeployer from '@/deployer';

export interface Props extends StackProps { }

export default class IamEntities extends Stack {
  constructor(scope: App, props: Props) {
    super(scope, 'iamEntities', props);

    // Let's create the deployer user and it's policies
    createDeployer({
      scope: this
    })

  }
}
