import {createReadStream, createWriteStream, unlink} from "fs";
import {stat} from "fs/promises";
import {getCurrentDirectory, getWorkingDirectory} from "../../utils/utils.js";
import {constants} from "../../constants/index.js";

export const moveFile = async (source) => {

    if (source.length - 1 !== 2) return console.log(constants.invalidInput);

    try {

        await stat(getWorkingDirectory(source[1]));

        const readable = createReadStream(getWorkingDirectory(source[1]), constants.utf8);
        const writable = createWriteStream(getWorkingDirectory(source[2]));

        await readable.pipe(writable);

        readable.on(constants.close, function () {
            unlink(getWorkingDirectory(source[1]), (error) => error)
        });

        writable.on(constants.error, error => error)

        writable.on(constants.finish, () => getCurrentDirectory())

    } catch (error) {
        console.log(constants.operationFailed);
    }
}
