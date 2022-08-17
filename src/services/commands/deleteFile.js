import {unlink} from "fs/promises";
import {constants} from "../../constants/index.js";
import {getCurrentDirectory, getWorkingDirectory} from "../../utils/utils.js";

export const deleteFile = async (source) => {

    if (source.length - 1 !== 1 || source.includes('')) {
        return console.log(constants.invalidInput);
    }

    try {
        await unlink(getWorkingDirectory(source[1]));
        getCurrentDirectory();
    } catch (error) {
        console.log(constants.operationFailed);
    }
}
