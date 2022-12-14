
const getArgv = () => process.argv[2].split('=')[1];

export const constants = {
    invalidInput: 'Invalid input',
    operationFailed: 'Operation failed',
    position: 'You are currently in ',
    welcome: `Welcome to the File Manager, ${getArgv()}!`,
    goodbye: `Thank you for using File Manager, ${getArgv()}!`,
    exit: '.exit',
    up: 'up',
    ls: 'ls',
    cd: 'cd',
    cat: 'cat',
    add: 'add',
    rn: 'rn',
    cp: 'cp',
    mv: 'mv',
    rm: 'rm',
    hash: 'hash',
    compress: 'compress',
    decompress: 'decompress',
    os: 'os',
    sha1: 'sha1',
    hex: 'hex',
    end: 'end',
    error: 'error',
    finish: 'finish',
    done: 'done',
    utf8: 'utf8',
    br: '.br',
    flagWx: 'wx+',
    close: 'close',
    data: 'data',
}
