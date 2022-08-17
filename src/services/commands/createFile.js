import {writeFile} from "fs";
import {getCurrentDirectory, getWorkingDirectory} from "../../utils/utils.js";
import {constants} from "../../constants/index.js";

export const createFile = async (source) => {

    if (source.length - 1 !== 1 ||  source.includes('')) {
        return console.log(constants.invalidInput);
    }

    try {
        await writeFile(getWorkingDirectory(source[1]),
            '',
            {flag: constants.flagWx},
            (error) => error)
        getCurrentDirectory();
    } catch (error) {
        console.log(constants.operationFailed)
    }
}
