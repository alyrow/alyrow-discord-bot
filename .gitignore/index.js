//const Discord = require('discord.js');
//const client = new Discord.Client();

const Commando : require('discord.js-commando');
const client = new Commando.Client();


client.registry.registerGroup('test', 'Test')
client.registry.registerCommandsIn(__dirname + "/commands");
client.registry.registryDefaults();





client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
 
 
});


  

client.login(process.env.TOKEN);
