const TelegramAPI = require('tg-cli-node');
const config = require('./config');

const Client = new TelegramAPI(config);
var exec = require("child_process").exec;
var keywords = [];
var channel = '';
var id = '';

Client.connect(connection => {
    connection.on('message', msg => {
      if (msg.to.title == channel && msg.from.peer_id !== id) {
        for(var item in keywords){
           if(msg.text == null) {
             console.log(msg);
             msg.to.forward(msg.id);
           }
           else if(msg.text.includes(keywords[item])){
             console.log(msg);
             msg.to.forward(msg.id);
           }
        }
      }
    });

    connection.on('error', e => {
        console.log('Error from Telegram API:', e);
    });

    connection.on('disconnect', () => {
        console.log('Disconnected from Telegram API');
    });
});
