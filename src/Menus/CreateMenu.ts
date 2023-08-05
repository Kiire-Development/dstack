import {  createInterface } from "readline"
import {exec} from "child_process"
import { colorRed, colorReset, name, sleep } from "..";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})


export const DisplayCreateMenu = async () => {
    return new Promise<void>((resolve) => {
    const menuOptions: any = {
        1: 'create a standart index file',
        2: 'create a standart event handler',
        3: 'create a standart event handler an command handler',
        4: 'create a standart project with a express api',
    };
      
    function displayCreateMenu() {
        console.log('choose:');
        for (const key in menuOptions) {
          console.log(`${key}: ${menuOptions[key]}`);
        }
    }
      
    async function handleSelection(selection: any) {
        const option = parseInt(selection);
        switch (option) {
          case 1:
            exec(`mkdir ${name} `)
            exec(`cp https://`)
            
            resolve()
            break;
          case 2:
            console.log('Du hast Option 2 ausgewählt.');
            resolve()
            break;
          case 3:
            console.log('Du hast Option 3 ausgewählt.');
            resolve()
            break;
          case 4:
            console.log('Du hast Option 4 ausgewählt.');
            resolve()
            break;
          default:
            console.log(colorRed + '[error] wrong selection. Please try again!'+ colorReset);
            break;
        }

        if (option !== 5) {
            await sleep(1500)
            console.clear()
            displayCreateMenu();
            rl.question('> ', handleSelection);
        }
    }
    displayCreateMenu()
    rl.question("> ", handleSelection)
    })
}
