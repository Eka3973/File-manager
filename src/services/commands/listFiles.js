import {readdir} from 'fs/promises';
import {getCurrentDirectory} from "../../utils/utils.js";
import {constants} from "../../constants/index.js";


export const listFiles = async (source) => {

    if (source.length > 1) return console.log(constants.invalidInput)

    try {
        const files = await readdir(process.cwd())
        console.log(files);

        getCurrentDirectory();

    } catch (err) {
        console.log(constants.operationFailed);
    }

}
