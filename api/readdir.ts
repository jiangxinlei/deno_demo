// 同步读取相对当前目录 ./assets 的位置
// 返回 类型为 Iterable<DirEntry> 的文件信息接迭代器
//  DirEntry 包含了判断是否为目录isFile，是否为文件isFile的属性
const { readDirSync, readDir } = Deno;

const readDS = readDirSync("./assets");
for (const dirEntry of readDS) {
  // 将目录下的文件打印出来，包含文件夹
  console.log(dirEntry.name);
}

async function readdir() {
  const readD = await readDir("./assets");
  console.log(readD);
}
readdir();