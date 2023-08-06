import { Client, GatewayIntentBits } from "discord.js";\n\n
import dotenv from "dotenv"\n
dotenv.config()\n
const client = new Client({\n
    intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildInvites, GatewayIntentBits.DirectMessages]\n
})
\n
client.login(process.env.TOKEN || "")