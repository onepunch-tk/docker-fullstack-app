USER=/opt/elasticbeanstalk/bin/get-config environment -k DOCK_HUB_USER
/opt/elasticbeanstalk/bin/get-config environment -k DOCK_HUB_TOKEN | docker login -u $USER --password-stdin
