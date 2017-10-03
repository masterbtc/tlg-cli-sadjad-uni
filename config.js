const path = require('path');

module.exports = {
    telegram_cli_path: '/usr/bin/telegram-cli', //path to tg-cli (see https://github.com/vysheng/tg)
    telegram_cli_socket_path: path.join(__dirname, 'socket'), // path for socket file
    server_publickey_path: '/etc/telegram-cli/server.pub' // path to server key (traditionally, in %tg_cli_path%/tg-server.pub)
}
