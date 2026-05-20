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
## 手动创建容器
**docker cli 创建容器**
~~~bash
docker run -d \
  -p 9123:9123 \
  --name wallpaper-api \
  --restart=unless-stopped \
  -e TASK_WALLPAPER_CRON="0 0 3 */1 * ?" \
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
    environment:
      TASK_WALLPAPER_CRON: "0 0 3 */1 * ?"
    restart: unless-stopped
~~~
有更多的配置可查看 [application.yml](application.md)
## 本项目提供了构建与启动的脚本
脚本提供的是默认的配置进行部署，若想更改配置，请自行根据 [application.yml](application.md) 修改 docker-compose.yml 
### windows
* 双击运行 [build.bat](https://github.com/shimu115/wallpaper-api/blob/main/build.bat) 脚本进行构建
### linux
* 运行 [build.sh](https://github.com/shimu115/wallpaper-api/blob/main/build.sh) 脚本进行构建
  ~~~ bash
  # 给脚本权限
  chmod +x build.sh
  # 运行脚本
  ./build.sh
  ~~~