// 同步删除文件夹
// 当 recursive 设置为 true 时候，即使 path 路径下是非空目录，也会递归删除掉目录里的所有内容。
Deno.removeSync('./assets/renameSync', {recursive: false});

// 异步删除文件夹
async function remove() {
  await Deno.remove('./assets/rename');
}
remove();

// 同步删除文件
Deno.removeSync('./assets/rename.txt');
