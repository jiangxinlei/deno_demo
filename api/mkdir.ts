// 同步创建文件夹，存在就会报错
Deno.mkdirSync('./assets/mkdirSync');

// 异步创建文件
async function mkdir() {
  await Deno.mkdir('./assets/mkdir');
}
mkdir();