// 监听并获取终端输入信息
const decoder = new TextDecoder();

class Input {
  private _tip: string;
  constructor(tip: string = 'Please input something: ') {
    this._tip = tip;
  }

  public async listenInput(): Promise<string> {
    let result: string = '';
    return new Promise(async (resolve) => {
      while(1) {
        this._print(this._tip);
        const text: string = await this._getInput();
        if (text.length > 0) {
          result = text;
          break;
        }
      }
      resolve(result);
    })
  }

  private _print(text: string): void {
    const encode = new TextEncoder();
    const chunk = encode.encode(`\x1b[0D \x1b[K ${text}`);
    Deno.stdout.writeSync(chunk);
  }

  private async _getInput(maxLen: number = 64): Promise<string> {
    const chunk = new Uint8Array(maxLen);
    const len: number = await Deno.stdin.read(chunk) as number;
    const text = decoder.decode(chunk.slice(0, len));
    return text;
  }
}


(async () => {
  const input = new Input('Please input your name: ');
  const text = await input.listenInput();
  console.log(`------------------------------`);
  console.log(`name = ${text}`);
})();