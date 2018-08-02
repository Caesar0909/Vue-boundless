#!/bin/bash -xe

branch=${1:development}

declare -a production_environments=(production demo )
declare -a development_environments=(staging development master)

if [[ " ${production_environments[@]} " =~ " ${branch} " ]]; then
    export AWS_ACCESS_KEY_ID=$PRODUCTION_AWS_ACCESS_KEY_ID
    export AWS_SECRET_ACCESS_KEY=$PRODUCTION_AWS_SECRET_ACCESS_KEY

    environment=$branch
elif [[ " ${development_environments[@]} " =~ " ${branch} " ]]; then
    export AWS_ACCESS_KEY_ID=$DEVELOPMENT_AWS_ACCESS_KEY_ID
    export AWS_SECRET_ACCESS_KEY=$DEVELOPMENT_AWS_SECRET_ACCESS_KEY
    cloudfront_distribution_id=E1D0TD3FUWRW5F

    if [ "$branch" == "master" ]; then
      environment=development
    else
      environment=$branch
    fi

fi
echo "Settings environment to '$environment' with branch '$branch'"


if  [ -z "$environment" ]; then
  echo "No environment configured for deployment for branch '$branch'"
else
  echo "Deploying branch '$branch' to environment '$environment'"
  npm run $environment

  aws s3 cp dist s3://static-files-boundless-$environment/ --recursive
  aws cloudfront create-invalidation --distribution-id $cloudfront_distribution_id --paths / /index.html
fi
