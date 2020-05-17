/* 
  1、标准输入
    Deno.stdin.read() 异步标准输入
    Deno.stdin.readSync() 同步标准输入
  2、标准输出
    Deno.stdout.write() 异步标准输出
    Deno.stdout.writeSync() 同步标准输出

*/

async function sleep(time: number = 10): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}

function printNewLine() {
  Deno.stdout.writeSync(new TextEncoder().encode(`\x1b[0C \x1b[K\r\n`));
}

function clearLine(len: number)  {
  Deno.stdout.writeSync(new TextEncoder().encode(`\x1b[${len}D`));
}

export {
  sleep,
  printNewLine,
  clearLine
}