
![Build](https://github.com/tylangesmith-organisation/iam-entities/actions/workflows/deploy.yml/badge.svg?branch=master)

# IAM Entities

This repo is used to deploy and maintain various IAM entities. 

For our current use case however, we only deploy an IAM user and it's policy for usage when deploying from Github Actions.

## Bootstrapping

As you are probably thinking 🤔... _"How can you deploy the IAM deployer user without the IAM deploy user?"_.

Ahh yes, the ol' chicken 🐓 and the egg 🥚 problem.

To get around this we'll first need to manually create an IAM user and attach a policy that allows us to deploy the resources we require. 

Once we have that we'll then be able to go ahead and create the access keys and use them to be able to deploy this stack.

Once deployed we'll then be able to go ahead and remove the manually created user and create the access keys against the new user.

## Deployment

To deploy this repository there are a few repository secrets that we need to set. To add secrets against the repository checkout the [official documentation](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) on how to achieve this.

These secret variables are:

| Variable              | Description                    |
|-----------------------|--------------------------------|
| ACCOUNT_ID            | The AWS Account ID             |
| AWS_ACCESS_KEY_ID     | The IAM user Access Key ID     |
| AWS_SECRET_ACCESS_KEY | The IAM user Secret Access Key |

## Danger

As you can probably see the IAM policy for the deployer role is extremely open 🚨

For my use case however, Github Actions is used to deploy. This CI / CD pipeline will only ever be triggered by myself as no other users have write access.

Each of the sensitive values are all encapsulated behind Github secrets which are automatically _redacted_ from the CI / CD logs. Obviously there are ways to get around this but again I will be the only person that is able to run the CI / CD against this project and all projects in this organisation 🤞

If we ever wanted to allow outside contributors we'd have to rethink how we achieve this CI / CD. We _may_ be able to implement and enforce a more fine grained permission set on a project by project level along with only deploying resources on the master branch requiring rigid code reviews before merging. 🤔
