const { args, env, isatty, pid, stdin, stdout, stderr, build } = Deno;

// args 是在运行当前脚本时所添加的参数，例如：
// deno run --allow-all ./index.ts /jxl
console.log(args); // [ "/jxl" ]


// env 是环境变量信息，包含三个方法
// 1、set - 设置一个环境变量，key-value 形式
env.set('name', 'jxl');

// 2、get - 获取环境变量信息，不存在返回 undefined
const _name = env.get('name');
console.log(_name);  // jxl

// 3、toObject - 返回调用时的环境变量的快照
const _nameObj = env.toObject();
console.log(_nameObj);

// isatty 判断是否在 terminal 控制台中
const _tty = isatty(0);
console.log(_tty);  // true

// pid - 进程ID
const _pid = pid;
console.log(_pid);

// stdin - 是否为标准输入
const _stdin = stdin;
console.log(_stdin);  // Stdin { rid: 0 }

// stdout - 是否为标准输出
const _stdout = stdout;
console.log(_stdout);  // Stdout { rid: 1 }

// stdout - 是否为标准错误
const _stderr = stderr;
console.log(_stderr);  // Stderr { rid: 2 }

/*
{
  // 操作系统的CPU 架构，例如 x64是64位
  arch: "x64";

  // 操作系统的平台名称
  // darwin: 苹果Mac OS系统
  // win: Windows 系统
  // linux: Linux 系统
  os: "darwin" | "linux" | "windows";
}
*/
/* 
  以下输出
{
  target: "x86_64-apple-darwin",
  arch: "x86_64", 操作系统的 CPU 架构
  os: "darwin",   操作系统的平台名称
  vendor: "apple",
  env: undefined
 } */
const _build = build;
console.log(_build);