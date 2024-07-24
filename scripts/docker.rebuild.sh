docker stop progress-server
docker rm progress-server
docker rmi progress-node
docker build -t progress-node .
docker run -d --restart always  --name progress-server -p 3000:3000 -p 3001:3001 progress-node
docker ps