// 终端输出进度信息
import { sleep, printNewLine } from "./utils.ts";

class Output {
  private _beforeLength: number = 0;

  public print(text: string): void {
    const encode = new TextEncoder();
    const chunk = encode.encode(`\x1b[${this._beforeLength}D \x1b[K ${text}`);
    Deno.stdout.writeSync(chunk);
    this._beforeLength = chunk.length;
  }
}

async function main() {
  const output = new Output();
  for (let i = 0; i < 100; i ++) {
    await sleep(10);
    output.print(`${i}%`);
  }
  printNewLine();
}

main();