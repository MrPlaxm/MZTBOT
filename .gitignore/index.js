const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("<")

function sendError(message, description) {
    message.channel.send({embed: {
        color: 15158332,
        description: ":x: " + description
    }});
}


bot.on('ready', function() {
    bot.user.setGame("");
    console.log("ready");
});

bot.login("NTEyMDA4OTgwMzExMTc5Mjg1.Dtndcw.laX_pgFnHSJI1NIvl-OAxQzIbmo");

bot.on('message', message => {
    if (message.content === prefix + 'play') {
    // Play files natively
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
    .then(connection => {
      const dispatcher = connection.playFile('C:/pas sup/MatchmakingMZT.wav');
    })
    .catch(console.error);

    }}})
