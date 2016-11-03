# 获取 PBX (运行 Asterisk 的 Linux 系统) 基本信息
虽然项目名为 PBX-info, 但是对于类 Linux 都可用。

## 系统启动时长
 通过 os.uptime()获取系统开机时长

## pm2启动时长
 web 应用通过 pm2 启动, process.uptime()获取当前应用启动时长
##  系统存储空间(Pbx 专用)  
  /root 分区大小 
  
  ```
  df -h | grep /dev/root
  ```
## 扩展存储空间 
/var/asterisk/moniton 挂载大小

```
df -h | grep /var/spool/asterisk/monitor
```

## 系统内存使用
  通过 os.totalmem 和 os.freemem 获取
## 系统版本号(Pbx 专用)
  通过AMI 读取指定路径获取