# Release Notes

## v1.0.1 - latest (2025-10-11)

### 修改 `bing` 随机图片接口逻辑
`v1.0.0` 版本在刷新数据时只会向 `SQLite` 数据库中添加数据，并不是真正意义上的刷新数据，此次修改了这个问题

### 修改默认 `banner`
此次也修改了项目的默认启动 `banner`

### 日志调整
新增了一些日志输出

### 新增接口
* **手动刷新bing壁纸数据库**
  ~~~
  /bing/wallpaper/fresh_data
  ~~~

* **新增 acg 随机图片接口**
  ~~~
  /acg/wallpaper/random
  ~~~
  
**具体参数请查看文档**

## v1.0.0-alpha - Pre-release (2025-10-3)

### 新增 bing 壁纸 api
* 今日壁纸
  ~~~
  bing/wallpaper/today
  ~~~

* 随机壁纸
  ~~~
  bing/wallpaper/random
  ~~~

**接口详情见 readme.md 文档**

### release 文件
`wallpaper-api-1.0.0.jar` 为可执行 jar 包

`wallpaper-api-1.0.0-exec.jar` 为不带依赖的 jar 包
