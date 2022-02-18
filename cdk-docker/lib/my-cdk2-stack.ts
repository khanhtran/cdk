import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { DockerImageFunction, DockerImageCode } from 'aws-cdk-lib/aws-lambda';
import { Repository } from "aws-cdk-lib/aws-ecr";

export class MyCdk2Stack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new DockerImageFunction(this, 'function', {
        functionName: 'my-function',
        code: DockerImageCode.fromEcr(
            Repository.fromRepositoryArn(
              this,
              'my-repo',
              'arn:aws:ecr:us-east-2:657641750194:repository/my-repo'
            ),
            { tag: 'v1' }
          )
    });
    
  }
}

    
