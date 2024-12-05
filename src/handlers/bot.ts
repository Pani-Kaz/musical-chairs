import { Client } from "discord.js";
import { config } from "../config/config";

import fs from 'fs';
import path from "path";
import { pathToFileURL } from 'url';

export class Bot {
    bot: Client;
    private token: string | undefined;
    constructor (bot: Client) {
        this.bot = bot;
        this.token = config.TOKEN;
        this._init();
    }

    _init () {
        console.log('Staring bot...');
        this.bot.login(this.token);
        this.commands();
        this.events();
    };

    async commands() {
        const commands = [];
        const commandsDir = fs.readdirSync('./src/commands/');
        
        for (const dir of commandsDir) {
            const files = fs.readdirSync(`./src/commands/${dir}`);

            for (const file of files) {
                const filePath = path.join(__dirname, `../commands/${dir}/${file}`);
                const fileUrl = pathToFileURL(filePath).href;
                const command = await import(fileUrl);
                commands.push(command);
            }
        }

       return commands;
    }

    async events() {
        const eventsDir = fs.readdirSync('./src/events/');
        
        for (const dir of eventsDir) {
            const files = fs.readdirSync(`./src/events/${dir}`);

            for (const file of files) {
                const filePath = path.join(__dirname, `../events/${dir}/${file}`);
                const fileUrl = pathToFileURL(filePath).href;
                const event = (await import(fileUrl)).default;
                this.bot.on(event.name, (...args) => event.execute(this.bot, ...args));
            }
        }
    }
}
