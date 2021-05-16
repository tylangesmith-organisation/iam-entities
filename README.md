
![Build](https://github.com/tylangesmith-organisation/iam-entities/actions/workflows/deploy.yml/badge.svg?branch=master)

# IAM Entities




## Deployment

To deploy this repository there are a few repository secrets that we need to set. To add secrets against the repository checkout the [official documentation](https://docs.github.com/en/actions/reference/encrypted-secrets#creating-encrypted-secrets-for-a-repository) on how to achieve this.

These secret variables are:

| Variable              | Description                    |
|-----------------------|--------------------------------|
| ACCOUNT_ID            | The AWS Account ID             |
| AWS_ACCESS_KEY_ID     | The IAM user Access Key ID     |
| AWS_SECRET_ACCESS_KEY | The IAM user Secret Access Key |
