import {homedir} from "os";
import {constants} from "../constants/index.js";

const {cwd, chdir} = process


const startDirectory = async () => chdir(homedir());

const getWorkingDirectory = (paramUrl) => `${cwd()}/${paramUrl}`;

const getCurrentDirectory = () => console.log(`${constants.position}${cwd()}`);


export {
    getCurrentDirectory,
    startDirectory,
    getWorkingDirectory
}
