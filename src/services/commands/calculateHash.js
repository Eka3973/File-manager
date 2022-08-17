import {createReadStream} from 'fs';
import {createHash} from 'crypto';
import {stat} from "fs/promises";
import {getCurrentDirectory, getWorkingDirectory} from "../../utils/utils.js";
import {constants} from "../../constants/index.js";


export const calculateHash = async (source) => {

    try {
        if (source.length - 1 !== 1 || source.includes('')) {
            return console.log(constants.invalidInput);
        }

        await stat(getWorkingDirectory(source[1]));

        const readable = createReadStream(getWorkingDirectory(source[1]));
        const hash = createHash(constants.sha1).setEncoding(constants.hex);

        readable.on(constants.end, () => {
            hash.end();
            console.log(hash.read());
            getCurrentDirectory();
        });
        readable.on(constants.error, (error) => error);

        await readable.pipe(hash);

    } catch (error) {
        console.log(constants.operationFailed)
    }
}
