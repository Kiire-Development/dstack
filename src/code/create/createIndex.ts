import { name, language, colorGreen, colorReset, colorRed } from "../..";
import { exec } from "child_process";
import { platform } from "os";
import fs from "fs";
export const betriebsystem = platform();
export let createBefehl: string;
if (betriebsystem == "win32") {
  // ToDo: Befehl aufschreiben
  createBefehl = "";
} else {
  createBefehl = "touch";
}

export const makeShellCall = (command: string) => {
  exec(`${command}`, (error, stdout, stderr) => {
    if (error) {
      console.clear();
      console.log(
        colorRed +
          "[error] we couldn't create a folder and install the required dependencies, the error: " +
          error.message +
          colorReset
      );
      process.exit(1);
    }
    if (stderr) {
      console.clear();
      console.log(
        colorRed +
          "[error] we couldn't create a folder and install the required dependencies, the error: " +
          stderr +
          colorReset
      );
      process.exit(1);
    }
  });
};

export const createIndex = () => {
  makeShellCall(`mkdir ${name}`);


  const packageJsonFile = {
    name: `${name}`,
    version: "0.0.1",
    description: "",
    main: `src/index.${language}`,
    scripts: {
      dev: `nodemon src/index.${language}`
    },
    keywords: [],
    author: "",
    license: "",
    dependencies: {
    },
    devDependencies: {
    }
  }
  
  // create Package.json an write the right content in there
  makeShellCall(`cd ${name} && ${createBefehl} package.json && echo "${JSON.stringify(packageJsonFile)}" > package.json`)

  // create a .env file an write "TOKEN=" in there
  makeShellCall(`cd ${name} && ${createBefehl} .env && echo ${
    betriebsystem === "win32" ? `TOKEN=` : '"TOKEN="'
  } > .env`)

  // create the src directory and create the index file
  makeShellCall(`cd ${name} && mkdir src && cd src && ${createBefehl} index.${language}  && echo "import {Client} from 'discord.js'\nimport dotenv from "dotnev"\nconst client${language == "ts"? ": string": ""} = new Client({\nintents:[]}) > index.ts`)

};
