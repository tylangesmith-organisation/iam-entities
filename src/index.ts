import { App } from '@aws-cdk/core';
import IamEntities from './stack';

const app = new App()
new IamEntities(app, {})
