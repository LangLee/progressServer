#!/bin/bash  
  
# MongoDB 容器名称  
MONGO_CONTAINER=mongodb

# 备份目录  
BACKUP_DIR="./backup"
DATE=$(date +%Y-%m-%d_%H-%M-%S)
BACKUP_FILE="$BACKUP_DIR/mongodb-backup-$DATE.gz"
# 创建备份目录
mkdir -p $BACKUP_DIR
# 使用 docker exec 在 MongoDB 容器内执行 mongodump  
# 注意：确保你的 MongoDB 容器中的 mongodump 路径是正确的  
docker exec -it $MONGO_CONTAINER mongodump --archive=$BACKUP_DIR/mongodb-backup-$DATE.gz --gzip
#docker exec -it $MONGO_CONTAINER mongodump -d progress  --out=$BACKUP_DIR/mongodb-backup-$DATE --gzip
docker cp mongodb:$BACKUP_DIR/mongodb-backup-$DATE.gz $BACKUP_DIR/mongodb-backup-$DATE.gz
# 或者，如果你希望备份到具体目录（需要MongoDB在容器内有一个共享目录），则：  
# docker exec -it $MONGO_CONTAINER sh -c 'mongodump -o /data/backup/$(date +\%Y-\%m-\%d_\%H-\%M-\%S)'  
# 注意：这种情况下，你需要确保/data/backup目录在MongoDB容器内是可写的，且MongoDB用户有权限写入  

# 如果需要，可以添加将备份文件压缩的命令  
# tar -czvf $BACKUP_FILE -C $BACKUP_DIR/ mongodb-backup-$DATE  

echo "Backup completed: $BACKUP_FILE"