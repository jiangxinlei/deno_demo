// 同步创建文件
Deno.createSync('./assets/createSync.txt');

// 异步创建文件
async function create() {
  await Deno.create('./assets/create.txt');
}