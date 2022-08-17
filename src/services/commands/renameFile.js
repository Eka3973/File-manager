import {rename} from "fs/promises";
import {getCurrentDirectory, getWorkingDirectory} from "../../utils/utils.js";
import {constants} from "../../constants/index.js";

export const renameFile = async (source) => {

    if (source.length - 1 !== 2) return console.log(constants.invalidInput)

    try {
        await rename(getWorkingDirectory(source[1]), source[2]);
        getCurrentDirectory()
    } catch (error) {
        console.log(constants.operationFailed);
    }
}
