import readline from "readline"
import { DisplayCreateMenu } from "./Menus/CreateMenu";
import { DisplayLanguageMenu } from "./Menus/LanguageMenu";
import {getName} from "./TextInputs/name"
// eine Sleep Function
export async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Farben für das Terminal
export const colorReset = '\x1b[0m';
export const colorRed = '\x1b[31m';
export const colorGreen = '\x1b[32m';
export const colorYellow = '\x1b[33m';
export const colorBlue = '\x1b[34m';


export let name: string;
export const setName = (newName: string) => {
  name = newName
}

export let language: string;
export const setLanguage = (newLanguage: string) => {
  language = newLanguage
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function logs() {
  console.log("DStack - a cli for your Discord-bot")
  await getName()
  console.clear()
  await DisplayLanguageMenu()
  console.clear()
  await DisplayCreateMenu().then(() => {
    console.log(colorGreen + "[log] all processes are completed!" + colorReset)
    console.log(`\ncd ${name}\nnpm i\nnpm run dev\n\n\n${colorBlue}We wish you much fun with your bot!${colorReset}
    `)
    console.log(rl.getCursorPos())
    process.exit(0)
  })

  
}
logs()