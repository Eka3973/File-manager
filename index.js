import * as readline from 'readline';
import {getSaluteEnd, getSaluteStart} from "./src/utils/salute.js";
import {
    calculateHash,
    compressFile,
    copyFile,
    createFile,
    decompressFile,
    deleteFile,
    goToFolder,
    goUpper,
    listFiles,
    moveFile,
    readFile,
    renameFile,
    showOperatingSystem
} from "./src/services/index.js";

import {startDirectory} from "./src/utils/utils.js";
import {constants} from "./src/constants/index.js";


const {stdin: input, stdout: output} = process;


const start = async () => {

    await startDirectory()

    const rl = readline.createInterface({
        input,
        output,
    })


    const commands = {
        [constants.exit]: () => rl.close(),
        [constants.up]: (param) => goUpper(param),
        [constants.ls]: (param) => listFiles(param),
        [constants.cd]: (param) => goToFolder(param),
        [constants.cat]: (param) => readFile(param),
        [constants.add]: (param) => createFile(param),
        [constants.rn]: (param) => renameFile(param),
        [constants.cp]: (param) => copyFile(param),
        [constants.mv]: (param) => moveFile(param),
        [constants.rm]: (param) => deleteFile(param),
        [constants.hash]: (param) => calculateHash(param),
        [constants.compress]: (param) => compressFile(param),
        [constants.decompress]: (param) => decompressFile(param),
        [constants.os]: (param) => showOperatingSystem(param),

    };

    rl.on('line', (input) => {

        const command = input.split(' ');

        if (command[0] in commands) {
            commands[command[0]](command);
        } else {
            console.log(constants.invalidInput)
        }

    });
    rl.on('close', () => getSaluteEnd(rl));

    getSaluteStart();

}

start()
    .catch(error => console.log(constants.operationFailed));

