import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs-extra';
import * as program from 'commander';
import { BotConfig } from './BotConfig';
import * as readline from 'readline-sync';

interface InitArgs {
    id: string;
    name: string;
    port: number;
    quiet: boolean;
}

program
    .option('-n, --name <botname>', 'name of the bot')
    .option('-i, --id <id>', 'id of the bot')
    .option('-p, --port <port>', 'local portendpoint for the bot', parseInt)
    .option('-q, --quiet', 'do not prompt')
    .action((name, x) => {
        console.log(name);
    });

let args: InitArgs = <InitArgs><any>program.parse(process.argv);

if (!args.quiet) {

    while (!args.hasOwnProperty("name") || args.name.length == 0) {
        args.name = readline.question(`What name would you like for your bot? `);
    }

    while (!args.id || args.id.trim().length == 0) {
        if (!args.hasOwnProperty("name")) {
            args.id = readline.question(`What id would you like for your bot? `);
        }
        else {
            let id = args.name.replace(' ', '');
            args.id = readline.question(`What id would you like for your bot [${id}]? `);
            if (args.id.length == 0)
                args.id = id;
        }
    }

    while (!args.port || args.port == 0) {
        args.port = readline.questionInt(`What localhost port does your bot use for debugging [${args.port}]?`);
    }
}

let bot = new BotConfig();
bot.name = args.name;
if (args.id.length > 0)
    bot.id = args.id;

bot.endpoints.push({ name: `http://localhost:${args.port}`, url: `http://localhost:${args.port}/api/messages` });

let filename = bot.name + '.bot';
bot.Save(filename);
console.log(`${filename} created`);
