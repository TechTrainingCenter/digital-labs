git pull
lsof -ti:8080 | xargs kill
./mvnw clean install -Dmaven.test.skip=true
java -jar target/digital-labs-0.0.1-SNAPSHOT.jar &