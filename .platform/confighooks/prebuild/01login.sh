USER=/opt/elasticbeanstalk/bin/get-config environment -k DOCKER_USER
/opt/elasticbeanstalk/bin/get-config environment -k DOCKER_TOKEN | docker login -u $USER --password-stdin
