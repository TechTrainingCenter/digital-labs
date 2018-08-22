./mvnw clean install -Dmaven.test.skip=true
docker build -t techtrainigcenter/digital-labs:1.0 .
docker push techtrainigcenter/digital-labs:1.0