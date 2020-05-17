/* 
实现 HTTP 服务
原理：
利用Deno原生模块listen监听TCP地址来初始化对应的TCP服务
从TCP服务监听器中等待TCP的对话连接
等到建立对话连接后，可以从对话中读取对话连接信息，就是HTTP请求报文
对话写入对话连接数据，即HTTP响应报文
 */

/**
 * 创建响应内容
 * @param {string} bodyStr
 * @return {Uint8Array}
 */
function createResponse(bodyStr: string) {
  const CRLF = '\r\n';
  const encoder = new TextEncoder();
  const resLines = [
    `HTTP/1.1 200`,
    `content-length: ${bodyStr.length}`,
    `name: jxl`,
    '',
    bodyStr
  ];
  const res = encoder.encode(resLines.join(CRLF));
  return res;
}


/**
 * HTTP响应操作
 * @param conn {Conn}
 */
async function response(conn: Deno.Conn) {
  // 创建响应信息
  const res = createResponse('hello jxl');

  // TCP 连接写入响应信息
  await conn.write(res);
  conn.close();
}

/**
 * HTTP服务
 * @param opts {Deno.ListenOptions}
 */
async function server(opts: Deno.ListenOptions) {
  // 创建TCP服务
  const listener: Deno.Listener = Deno.listen(opts) as Deno.Listener;
  console.log(`🚀 server listen on ${opts.hostname}:${opts.port}`);

  // 死循环监听TCP请求
  while(true) {
    // 等待TCP连接
    const connection = await listener.accept();
    // 执行响应
    response(connection);
  }
}

server({
  hostname: '127.0.0.1',
  port: 3001
});