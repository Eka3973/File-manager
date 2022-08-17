import {createReadStream, createWriteStream} from "fs";
import {stat} from "fs/promises";
import {constants} from "../../constants/index.js";
import {getCurrentDirectory, getWorkingDirectory} from "../../utils/utils.js";

export const copyFile = async (source) => {

    if (source.length - 1 !== 2) return console.log(constants.invalidInput);

    try {
        await stat(getWorkingDirectory(source[1]));

        const readable = createReadStream(getWorkingDirectory(source[1]), constants.utf8);
        const writable = createWriteStream(getWorkingDirectory(source[2]));

        await readable.pipe(writable);

        writable.on(constants.finish, () => getCurrentDirectory())

    } catch (error) {
        console.log(constants.operationFailed);
    }
}
