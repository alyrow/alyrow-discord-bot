const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('ready', function () {
  console.log("Je suis connecté !")
})


bot.on('message', message => {

  bot.user.setActivity("Fan de UNITED");

var embed = new Discord.RichEmbed()

.addField("Name", message.member, true)

.addField("ID", message.author.id, true)

//.addField("Discord Join Date", joinedAtDate)

//.addField("Server Join Date", joinedServerAtDate)

.addField("Status", message.author.presence.status, true)

//.addField("Playing", game, true)

.setColor(0x00FFFF)

.setThumbnail(message.author.avatarURL)

message.channel.sendEmbed(embed);



})
  

bot.login(process.env.TOKEN);
