import {getCurrentDirectory} from "../../utils/utils.js";
import {constants} from "../../constants/index.js";

export const goToFolder = (source) => {

    if (source.length - 1 !== 1) return console.log(constants.invalidInput);

    try {
        process.chdir(source[1]);
        getCurrentDirectory();
    } catch (err) {
        console.log(constants.operationFailed);
    }
}
