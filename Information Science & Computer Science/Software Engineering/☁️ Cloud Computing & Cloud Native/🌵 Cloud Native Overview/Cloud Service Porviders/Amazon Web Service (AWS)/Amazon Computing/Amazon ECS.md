# Amazon ECS

[TOC]



## Intro

Amazon Elastic Container Service (Amazon ECS) is a highly scalable and fast container management service. You can use it to run, stop, and manage containers on a cluster. With Amazon ECS, your containers are defined in a task definition that you use to run an individual task or task within a service. In this context, a service is a configuration that you can use to run and maintain a specified number of tasks simultaneously in a cluster. You can run your tasks and services on a serverless infrastructure that's managed by AWS Fargate. Alternatively, for more control over your infrastructure, you can run your tasks and services on a cluster of Amazon EC2 instances that you manage.



### Access Amazon ECS

You can create, access, and manage your Amazon ECS resources using any of the following interfaces:

- **AWS Management Console** — Provides a web interface that you can use to access your Amazon ECS resources.
- **AWS Command Line Interface (AWS CLI)** — Provides commands for a broad set of AWS services, including Amazon ECS. It's supported on Windows, Mac, and Linux. For more information, see [AWS Command Line Interface](https://aws.amazon.com/cli/).
- **AWS SDKs** — Provides language-specific APIs and takes care of many of the connection details. These include calculating signatures, handling request retries, and error handling. For more information, see [AWS SDKs](http://aws.amazon.com/tools/#SDKs).
- **AWS Copilot** — Provides an open-source tool for developers to build, release, and operate production ready containerized applications on Amazon ECS. For more information, see [AWS Copilot](https://github.com/aws/copilot-cli) on the GitHub website.
- **Amazon ECS CLI** — Provides a command line interface for you to run your applications on Amazon ECS and AWS Fargate using the Docker Compose file format. You can quickly provision resources, push and pull images using Amazon Elastic Container Registry, and monitor running applications on Amazon ECS or Fargate. You can also test containers that are running locally along with containers in the Cloud within the CLI. For more information, see [Amazon ECS CLI](https://github.com/aws/amazon-ecs-cli) on the GitHub website.
- **AWS CDK** — Provides an open-source software development framework that you can use to model and provision your cloud application resources using familiar programming languages. The AWS CDK provisions your resources in a safe, repeatable manner through AWS CloudFormation. For more information, see [Getting started with Amazon ECS using the AWS CDK](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/tutorial-ecs-web-server-cdk.html).

