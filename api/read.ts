// 同步读取文件
// Deno.readFileSync 返回一个 Uint8Array 类型的数据流，需要经过解码
const bytes = Deno.readFileSync('./assets/read.txt');
// 内容是字符串，就需要解码处理
const text = new TextDecoder().decode(bytes);
console.log(text);


// 异步读取文件
async function read() {
  const bytes = await Deno.readFile('./assets/read.txt');
  const text = new TextDecoder().decode(bytes);
  console.log(text);
}
read();