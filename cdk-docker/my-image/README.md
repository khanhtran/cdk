docker build -t 657641750194.dkr.ecr.us-east-2.amazonaws.com/my-repo:v1 .
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 657641750194.dkr.ecr.us-east-2.amazonaws.com
docker push 657641750194.dkr.ecr.us-east-2.amazonaws.com/my-repo:v1

aws lambda update-function-code --function-name my-function --image-uri 657641750194.dkr.ecr.us-east-2.amazonaws.com/my-repo:v1