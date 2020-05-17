/* 

Deno.run({ cmd:[], stdout: '' })
  - cmd 为字符串数组，拼接起来是子进程的执行命令
  - stdout 是输出方式，可选。
    - 如果设置了管道"piped"，打印输出的信息将会在 Deno.run({...}).stdout 输出数据流
    - stdout 输出数据流需要进行读取 await stdout.read(new Uint8Array(1024))
*/

// 用子进程启动 HTTP 服务
const process = Deno.run({
  cmd: [Deno.execPath(), "run", "--allow-net", "./server.ts"]
});

// 延时关闭HTTP服务
setTimeout(() => {
  process.close();
}, 1000 * 60)
