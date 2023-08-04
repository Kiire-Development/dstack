import {exec} from "child_process"
import chalk from "chalk"
import readline from "readline"

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const colorReset = '\x1b[0m';
const colorRed = '\x1b[31m';
const colorGreen = '\x1b[32m';
const colorYellow = '\x1b[33m';
const colorBlue = '\x1b[34m';


console.log("DStack - a cli for your Discord-bot")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
// Das Auswahlmenü definieren
const menuOptions: any = {
    1: 'create only index.ts',
    2: 'create a index.ts with events',
    3: "option 2 with a command handler",
    4: 'option 3 with a api',
    5: 'close'
};
  
function displayMenu() {
    console.log('Wähle eine Option:');
    for (const key in menuOptions) {
      console.log(`${key}. ${menuOptions[key]}`);
    }
}
  
async  function handleSelection(selection: any) {
    const option = parseInt(selection);
    switch (option) {
      case 1:
        exec("mkdir lol", (error, stdout, stderr) => {
            if (error) {
              console.error(`Fehler beim Ausführen des Befehls: ${error.message}`);
              return;
            }
            if (stderr) {
              console.error(`Befehl fehlgeschlagen: ${stderr}`);
              return;
            }
            console.log(`Befehl erfolgreich ausgeführt: ${stdout}`);
        });
        console.log(colorGreen + "[sucess] code generated!" + colorReset)
        break;
      case 2:
        console.log('Du hast Option 2 ausgewählt.');
        break;
      case 3:
        console.log('Du hast Option 3 ausgewählt.');
        break;
      case 4:
        console.log('Du hast Option 4 ausgewählt.');
        break;
      case 5:
        console.log('The programm will be closed.');
        process.exit(1)
      default:

        // Farbigen Text ausgeben
        console.log(colorRed + '[error] wrong input, please try again!' + colorReset);

        break;
    }
    if (option !== 5) {
        await sleep(1500)
        displayMenu();
        rl.question('> ', handleSelection);
    }
  }
  
  // Menü anzeigen und Auswahl behandeln
  displayMenu();
  rl.question('> ', handleSelection);