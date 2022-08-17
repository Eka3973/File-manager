import {createReadStream, createWriteStream} from 'fs';
import {stat} from "fs/promises";
import {pipeline} from "stream";
import {createBrotliDecompress} from "zlib";
import {getCurrentDirectory, getWorkingDirectory} from "../../utils/utils.js";
import {constants} from "../../constants/index.js";


export const decompressFile = async (source) => {

    if (source.length - 1 !== 2 || !source[1].includes(constants.br)) {
        return console.log(constants.invalidInput);
    }

    try {
        await stat(getWorkingDirectory(source[1]));

        await pipeline(
            createReadStream(getWorkingDirectory(source[1])),
            createBrotliDecompress(),
            createWriteStream(getWorkingDirectory(source[2])),
            (err) => err)
            .on(constants.finish, () => getCurrentDirectory());

    } catch (error) {
        console.log(constants.operationFailed)
    }
}
