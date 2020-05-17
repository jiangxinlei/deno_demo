// 同步复制文件内容到另一个文件中
Deno.copyFileSync('./assets/read.txt', './assets/copySync.txt');

// 异步复制文件内容到另一个文件中
async function copy() {
  await Deno.copyFile('./assets/read.txt', './assets/copy.txt');
}
copy();



