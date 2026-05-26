const TelegramBot = require('node-telegram-bot-api');

const token = 'SEU_TOKEN_AQUI';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `
🔥 BOT DE ENTRADAS 🔥

⚽ Bem-vindo ao bot.

Hoje teremos:
✅ Over 1.5
✅ Ambas Marcam
✅ Escanteios
    `);
});

bot.on('message', (msg) => {
    console.log(msg.text);
});
