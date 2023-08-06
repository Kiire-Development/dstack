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
export const createIndex = () => {
  exec(`mkdir ${name} `, (error, stdout, stderr) => {
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

  const indexFile: string = `import { Client, GatewayIntentBits } from "discord.js";\n\n
import dotenv from "dotenv"\n
dotenv.config()\n
const client = new Client({\n
    intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildInvites, GatewayIntentBits.DirectMessages]\n
})
\n
client.login(process.env.TOKEN || "")"import { Client, GatewayIntentBits } from "discord.js";\n\n
import dotenv from "dotenv"\n
dotenv.config()\n
const client = new Client({\n
    intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildInvites, GatewayIntentBits.DirectMessages]\n
})
\n
client.login(process.env.TOKEN || "")`;
  const packageJsonFile = `
  {
    "name": "${name}",
    "version": "0.0.1",
    "description": "",
    "main": "src/index.${language}",
    "scripts": {
      "dev": "nodemon src/index.${language}"
    },
    "keywords": [],
    "author": "",
    "license": "",
    "dependencies": {
    },
    "devDependencies": {
    }
  }
  
  `
  exec(
    `cd ${name} && ${createBefehl} package.json && ${betriebsystem == "win32"? packageJsonFile: `"${packageJsonFile}"`} && mkdir src && cd src && ${createBefehl} index.${language} && echo ${
      betriebsystem === "win32" ? `${indexFile}` : `"${indexFile}"`
    } > index.ts && cd .. &&  ${createBefehl} .env &&  echo ${
      betriebsystem === "win32" ? "TOKEN" : '"TOKEN="'
    } > .env &&npx init`,
    (error, stdout, stderr) => {
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
    }
  );
};
