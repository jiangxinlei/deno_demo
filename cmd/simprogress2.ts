// 终端输出复杂进度条

import { sleep, printNewLine } from "./utils.ts";

const frame: string = "▊";

class Progress {

  public async run(time: number = 1000, percent: number = 100, modulo: number = 2) {
    const count = Math.floor(percent / modulo);
    for (let i = 0; i < count; i ++) {
      await sleep(time / count);
      this._print();
    }
    printNewLine();
  }

  private _print(): void {
    const encode = new TextEncoder();
    const chunk = encode.encode(`\x1b[K${frame}`);
    Deno.stdout.writeSync(chunk);
  }

}

const progress = new Progress();
progress.run(1000, 100);
