const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const prefix = settings.prefix;
const cr = require('cr.js')
/* const = הגדרת משתנה שאיאפשר לשנות
var = משתנה שאפשר לשנות באופן חד פעמי, משומש בתור הגדרת משנה בתוך פונקציה או אירוע
let = הגדרת משתנה שאפשר לשנות באופן רצוני(לשנות מתי שבא לך
*/

client.on('ready', () => {
  console.log("Ready in the 90's");
  client.user.setGame("Beta")
});


client.on('guildMemberAdd', (member) => {
  if (member.guild.id === '383991232583565313') {
    member.addRole('384420942010515466')
  }
  if (member.guild.id === '333689787267547146') {
    member.setNickname(`🤘🏼${member.user.username}`)
    member.addRole('363755786117316608')
  }
});

client.on('message', (message) => {

  if (message.content.startsWith(".cr")) {
    if (message.author.id === "215033436468019200") {
      message.channel.send('You fucking asshole you\'re not gonna touch me!')
    } else {

    }
  }

  if (message.content.startsWith("helo.")) {
    message.channel.send('Hey')
  }

  if (message.content.startsWith('.שלום')) {
    message.channel.send('היי ניבה')
  }
if (message.content.startsWith('.סהר')) {
  message.channel.send('הומו')
}
if (message.content.startsWith('.סני')) {
  message.channel.send('ילד רע')
}

if (message.content.startsWith('.איתי')) {
    message.channel.send('הוא הומו הוא לא עונה')
}

});

client.login(settings.token)
