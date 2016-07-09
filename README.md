# 获取 PBX 基本信息

- 系统启动时长, 通过 os.uptime()获取
- pm2启动时长  process.uptime()获取
- 系统存储空间  /root 分区大小, df -h | grep /dev/root
- 扩展存储空间, /var/asterisk/moniton 挂载大小, df -h | grep /var/spool/asterisk/monitor
- 系统内存使用, 通过 os.totalmem 和 os.freemem 获取
- 系统版本号, 通过AMI 读取指定路径获取