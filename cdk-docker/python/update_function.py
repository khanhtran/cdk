import boto3
client = boto3.client('lambda')
result = client.update_function_code(
    FunctionName='my-function',
    ImageUri='657641750194.dkr.ecr.us-east-2.amazonaws.com/my-repo:v1'
)

print(result)