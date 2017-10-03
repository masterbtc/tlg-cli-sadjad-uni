const TelegramAPI = require('tg-cli-node');
const config = require('./config');

const Client = new TelegramAPI(config);
var exec = require("child_process").exec;
var keywords = ['فوق العاده','امینیان','تشکیل نمیشود  '];
var channel = 'کانال دانشگاه تخمی';

Client.connect(connection => {
    connection.on('message', msg => {
      if (msg.to.title == channel && msg.from.peer_id !== 329393493) {
        for(var item in keywords){
           if(msg.text == null) {
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


// if (msg.from.peer_id !== 329393493) {
    // for(var item in keywords){
      // if(msg.text.includes(item))
      // exec("wget -q -O - http://localhost:8000/?msg="+(msg.text).toString());
      // console.log(msg);
// }
// Message {
//   service: false,
//   event: 'message',
//   reply_id: null,
//   id: '0500000098266e436d00000000000000da7c342a2742734d',
//   from:
//    Peer {
//      peer_id: 329393493,
//      id: '$010000005525a2136bb4986870c10d35',
//      phone: '989383701117',
//      peer_type: 'user',
//      flags: 720897,
//      first_name: 'Amir',
//      last_name: 'Bagh',
//      print_name: 'Amir_Bagh',
//      username: 'amirbagh75',
//      title: null,
//      members_num: null,
//      kicked_count: null,
//      participants_count: null,
//      admins_count: null,
//      forward: [Function],
//      send: [Function],
//      sendImage: [Function],
//      sendDocument: [Function],
//      sendTyping: [Function] },
//   to:
//    Peer {
//      peer_id: 1131292312,
//      id: '$0500000098266e43da7c342a2742734d',
//      phone: null,
//      peer_type: 'channel',
//      flags: 524353,
//      first_name: undefined,
//      last_name: undefined,
//      print_name: 'تست',
//      username: undefined,
//      title: 'تست',
//      members_num: null,
//      kicked_count: null,
//      participants_count: null,
//      admins_count: null,
//      forward: [Function],
//      send: [Function],
//      sendImage: [Function],
//      sendDocument: [Function],
//      sendTyping: [Function] },
//   flags: 258,
//   out: true,
//   unread: false,
//   date: 1507021203,
//   text: 'ب',
//   forward: [Function],
//   send: [Function],
//   reply: [Function],
//   sendImage: [Function],
//   sendDocument: [Function],
//   deleteMsg: [Function],
//   sendTyping: [Function]
// }
