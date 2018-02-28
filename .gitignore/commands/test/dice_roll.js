const Commando = require('discord.js-commando');



class DiceRollCommand extends Commando.Command {


}


module.exports = DiceRollCommand;

constructor(client) {

      super(client, {
        name: 'roll',
        group: 'test',
        memberName: 'roll',
        description: 'Loterie'

    });
}

async run(message, args){
var roll = Math.floor(Math.random() * 6) + 1;
  message.reply("Vous êtes tombé sur un" + roll);

}
