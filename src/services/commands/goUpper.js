import {getCurrentDirectory} from "../../utils/utils.js";
import {parse} from "path";
import {constants} from "../../constants/index.js";

const {cwd, chdir} = process

export const goUpper = async (source) => {

    if (source.length > 1) return console.log(constants.invalidInput)

    try {
        if (parse(cwd()).root !== cwd()) {
            chdir('../');
        }
        getCurrentDirectory();

    } catch (error) {
        console.log(constants.operationFailed);
    }
}
