
async function debugServer(opts: Deno.ListenOptions): Promise<void> {

  // 创建TCP服务
  const listener: Deno.Listener = Deno.listen(opts) as Deno.Listener;
  console.log(`🚀 server listen on ${opts.hostname}:${opts.port}`);

  // 死循环监听TCP请求
  while (true) {
    // 等待TCP连接
    const conn : Deno.Conn = await listener.accept();

    // 执行响应
    const CRLF = '\r\n';
    const bodyStr = 'hello world';
    const res = [
      `HTTP/1.1 200`,
      `content-length: ${bodyStr.length}`,
      '',
      `${bodyStr}`
    ].join(CRLF);

    // 将HTTP报文字符串转成 二进制数据流
    const encoder = new TextEncoder();

    // 将HTTP二进制数据流写入TCP连接
    await conn.write(encoder.encode(res));
    conn.close();
  }
}

debugServer({
  hostname: '127.0.0.1',
  port: 9901
})