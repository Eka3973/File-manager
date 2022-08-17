import {getCurrentDirectory, getWorkingDirectory} from "../../utils/utils.js";
import {createReadStream} from "fs";
import {stat} from "fs/promises";
import {constants} from "../../constants/index.js";

export const readFile = async (source) => {

    if (source.length - 1 !== 1 || source.includes('')) return console.log(constants.invalidInput)

    try {

        let data = ''

        await stat(getWorkingDirectory(source[1]));

        const readable = await createReadStream(getWorkingDirectory(source[1]));

        readable.on(constants.data, chunk => data += chunk);
        readable.on(constants.end, chunk => {
                console.log(data)
                getCurrentDirectory()
            }
        );
        readable.on(constants.error, error => error);


    } catch (err) {
        console.log(constants.operationFailed);
    }
}
