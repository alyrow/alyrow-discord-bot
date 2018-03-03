const Discord = require('discord.js')
const bot = new Discord.Client()


bot.on('ready', function () {
  console.log("Je suis connecté !")
})


bot.on('message', message => {

  if (message.content === 'how to embed') {

// We can create embeds using the MessageEmbed constructor

// Read more about all that you can do with the constructor

// over at https://discord.js.org/#/docs/main/master/class/MessageEmbed

const embed = new MessageEmbed()

// Set the title of the field

.setTitle('A slick little embed')

// Set the color of the embed

.setColor(0xFF0000)

// Set the main content of the embed

.setDescription('Hello, this is a slick embed!');

// Send the embed to the same channel as the message

message.channel.send(embed);

}



})
  

bot.login(process.env.TOKEN);
