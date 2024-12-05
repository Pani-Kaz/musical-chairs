import { Client } from "discord.js";

export default {
    name: 'ready',
    execute: async (bot: Client) => {
        console.log(`${bot.user?.username} Online!`)
        bot.user?.setPresence({
            status: 'dnd',
            activities: [
                {
                    name: 'Roubando sua cadeira 😋'
                }
            ]
        })
    }
}