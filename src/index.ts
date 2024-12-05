import { Client, GatewayIntentBits } from "discord.js";
import { Bot } from "./handlers/bot";

const bot = new Client({
    intents: [
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

export default new Bot(bot);