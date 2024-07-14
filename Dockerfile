# 使用官方Node.js镜像作为基础镜像  
FROM node:latest  

# 设置工作目录  
WORKDIR /usr/src/app  

# 复制package.json文件到容器的工作目录  
COPY package*.json ./

# 安装项目依赖  
# RUN npm install --registry https://registry.npm.taobao.org
RUN npm install --registry https://mirrors.cloud.tencent.com/npm/
# 将当前目录下的文件复制到容器中的工作目录  
COPY . .  

# 暴露端口  
EXPOSE 3000
EXPOSE 3001  

# 定义容器启动时执行的命令  
CMD ["npm", "run", "server"]