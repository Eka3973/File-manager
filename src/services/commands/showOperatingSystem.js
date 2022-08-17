import {EOL, cpus, homedir, userInfo, arch} from 'os'
import {getCurrentDirectory} from "../../utils/utils.js";
import {constants} from "../../constants/index.js";

export const showOperatingSystem =  (argv) => {

    if (argv.length - 1 !== 1 || argv.includes('')) {
        return console.log(constants.invalidInput);
    }

          switch (argv[1]) {
              case '--EOL':  console.log(JSON.stringify(EOL));
                  break
              case  '--cpus':  console.log(cpus());
                  break
              case '--homedir':  console.log(homedir());
                  break
              case '--username':  console.log(userInfo().username);
                  break
              case '--architecture':  console.log(arch());
                  break
              default:   console.log(constants.invalidInput);
                  break
          }
          getCurrentDirectory();

}
