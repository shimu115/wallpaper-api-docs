# docker 构建与部署
## 构建 docker 镜像
**使用命令**
~~~ bash
docker build -t wallpaper-api:latest .
~~~
可以查看下项目中的 application.yml 文件，如果想更改配置，可以再 `ENTRYPOINT` 这一行加上对应的配置参数
例：
~~~
# 刷新数据默认为 1 小时刷新一次，若改为每天凌晨 3 点刷新一次可以添加 -Dtask.wallpaper.cron="0 0 3 */1 * ?"
ENTRYPOINT ["java", "-Xms256m", "-Xmx512m", "-Dtask.wallpaper.cron=\"0 0 3 */1 * ?\"", "-jar", "/workspace/wallpaper-api.jar"]
~~~
具体怎么用可以自行搜索
## 创建容器
**docker cli 创建容器**
~~~bash
docker run -d \
  -p 9123:9123 \
  --name wallpaper-api \
  --restart=unless-stopped \
  wallpaper-api:latest
~~~
**docker compose 创建容器**
~~~yaml
services:
  wallpaper-api:
    image: wallpaper-api:latest
    container_name: wallpaper-api
    ports:
      - 9123:9123
    restart: unless-stopped
~~~