const TelegramBot = require('node-telegram-bot-api');
const token = '**************';
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"
  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
console.log(msg);
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Hello ${msg.chat.first_name} ${msg.chat.last_name} Welcome to Bengaluru`);
});
