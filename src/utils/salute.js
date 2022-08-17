import {getCurrentDirectory} from "./utils.js";
import {constants} from "../constants/index.js";


const getSaluteStart =  ()=> {
    console.log(constants.welcome);
    getCurrentDirectory();
}

const getSaluteEnd = (rl) => {
    console.log(constants.goodbye);
    rl.close();

}

export {getSaluteStart, getSaluteEnd}
