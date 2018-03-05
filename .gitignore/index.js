const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('ready', function () {
  console.log("Je suis connecté !")
})


bot.on('message', message => {

  client.user.setActivity("Fan de UNITED");

const embed = new Discord.MessageEmbed()

.setColor(0x64E01D)

.setDescription(':white_check_mark: Done, changes should now take effect! Sometimes, they might not.');

message.channel.send({ embed });


})
  

bot.login(process.env.TOKEN);
