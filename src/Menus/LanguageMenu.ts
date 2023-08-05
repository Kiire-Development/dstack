import { createInterface } from "readline";
import {colorGreen, colorRed, colorReset, sleep} from "../index"
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
})
export let defaultLanguage: string;
export const DisplayLanguageMenu =  () => {
    return new Promise<void>((resolve) => {
        const menu: any = {
            1: "use Javascript",
            2: "use Typescript"
        }
        function displayMenu() {
            console.log('choose:');
            for (const key in menu) {
              console.log(`${key}: ${menu[key]}`);
            }
        }
        async function handleSelection(selection: any) {
            const option = parseInt(selection);
            switch (option) {
              case 1:
                defaultLanguage = "Javascript"
                console.log(colorGreen + '[log] you choose Javascript' + colorReset);
                resolve()
                break;
              case 2:
                defaultLanguage = "Typescript"
                console.log(colorGreen + '[log] you choose Typescript' + colorReset);
                resolve()
                break;
              default:
                console.log(colorRed + '[error] wrong selection. Please try again!'+ colorReset);
                break;
            }
            if (option !== 2) {
                await sleep(1500)
                console.clear()
                displayMenu();
                rl.question('> ', handleSelection);
            }
        }
        displayMenu()
        rl.question('> ', handleSelection);
    })
}