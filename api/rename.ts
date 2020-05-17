// 同步重命名文件夹，找不到则报错
Deno.renameSync('./assets/mkdirSync', './assets/renameSync');

// 异步重命名文件夹
async function rename() {
  await Deno.rename('./assets/mkdir', './assets/rename');
}
rename();

// 重命名文件
Deno.renameSync('./assets/read.txt', './assets/rename.txt');