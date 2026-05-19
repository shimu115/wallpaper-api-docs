# 环境变量字段说明

| application.properties | 默认值 | 说明 |
|---|---|---|
| `server.port` | `9123` | 服务端口 |
| `spring.datasource.url` | `jdbc:sqlite:./bing-wallpaper.db` | 数据库连接 |
| `spring.datasource.driver-class-name` | `org.sqlite.JDBC` | 数据库驱动，暂只支持 sqlite |
| `task.wallpaper.cron` | `0 0 */1 * * ?` | 更新定时 cron |
| `task.wallpaper.enable` | `true` | 启用定时任务 |
| `mirror.retry-count` | `3` | 重试次数（最大 10） |