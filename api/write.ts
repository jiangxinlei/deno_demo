// 同步写文件
const data = new TextEncoder().encode("同步向文件写入文字");
Deno.writeFileSync("./assets/write.txt", data);

// 异步写文件
async function write() {
  const data = new TextEncoder().encode("异步向文件写入内容");
  await Deno.writeFile("./assets/write.txt", data);
}
write();

// 同步重写
Deno.writeTextFileSync("./assets/write.txt", "同步重新向文件写入内容");

// 异步重写
async function reWrite() {
  await Deno.writeTextFile("./assets/write.txt", "异步重新向文件写入内容");
}
reWrite();