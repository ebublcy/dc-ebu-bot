//--Ebu--//
//--05.10.2020--//

const Discord = require('discord.js');
const client = new Discord.Client();

const settings = require('./settings.json');

client.login(settings.token);

var prefix = settings.prefix;


//--BOT ON READY--///////////////////////////////////////////////////////////////////

client.on('ready', () => {

  let status = 1;

  console.log(` << ${client.user.tag} Online>>`)

  // random status change
  function randomStatus() {
    let status = ["Snowball with Diana", "Snowball with Erica", "Snowball with Enzo"] // add more texts
    let rstatus = Math.floor(Math.random() * status.length);

    client.user.setActivity(status[rstatus], { type: "PLAYING" }) // PLAYING / WATCHING / LISTENING / STREAMING
      .then(presence => console.log(` << Activity changed to, "${presence.activities[0].name} - ${presence.activities[0].type}" >>`))
      .catch(console.error);
  }; setInterval(randomStatus, 20000)
});

//--MESSAGES--////////////////////////////////////////////////////////////////////////

client.on('message', msg => {

  const args = msg.content.split(' ');

  let dvrole = msg.guild.roles.cache.find(r => r.id === "795721613726580798");

  //maintedance system
  if (msg.content.startsWith(prefix + 'setstatus')) {
    if (msg.member.roles.cache.has(dvrole)) {
      if (args[1] === '0') {
        var status = 0;
        msg.channel.send("The bot is in maintenance mode.")
      }
      if (args[1] === '1') {
        var status = 1;
        msg.channel.send("The bot is out of maintenance mode.")
      }
      if (args[1] != '1' || args[1] != '0') {
        msg.channel.send("Correct usage -> .setstatus 1 / 0");
      }
    }
    else {
      msg.channel.send("❌ You do not have the necessary permissions to use this command!");
    }
  }

  //---Information Commands---//////////////////////////////////////////////////////////////////
  if (msg.content.toLowerCase() === prefix + 'team') {
    msg.channel.send(new Discord.MessageEmbed()
      .setTitle("**Name Team**")
      .setThumbnail("https://i.hizliresim.com/cYAIw4.png")
      .setColor("RANDOM")
      .addField("Ceo", "Enzo Greny")
      .addField("Chief of staff", "Erica Greny")
      .addField("Staff", "Diana Wolf | Destiny Diasy | Steffan Marshall")
      .addField("Client", "Andrew Hartman | Andree Sword")
      .addField("Guest", "-")
      .addField("Active Businesses", "Cafe Hedera | Lettuce Be")
      .setImage("https://i.hizliresim.com/otDKMh.png")
      .setTimestamp()
      .setFooter("Name Team ❤ Author"));
  }

  if (msg.content.toLowerCase() === prefix + 'help') {
    msg.channel.send(new Discord.MessageEmbed()
      .setTitle("**Command List**")
      .setThumbnail("https://i.hizliresim.com/cYAIw4.png")
      .setColor("RANDOM")
      .addField("Information", "Prefix -> . (dot) || .status")
      .addField("Useful Commands", ".team | .m [message]")
      .addField("Fun Commands", ".dont cry | .hüü | hadi bb | .geldim | haha | .pu | kim bu yarrak | kaç cm | kalktı | bırakın lan beni | .garı | hareketlere bak | hoşgeldin / hoşgeldiniz")
      .setImage("https://cdn.discordapp.com/attachments/792703124417937409/795275696648749086/Screenshot_522.png")
      .setTimestamp()
      .setFooter("Name Team ❤ Author"));
  }

  if (msg.content.toLowerCase() === prefix + 'updates') {
    msg.channel.send(new Discord.MessageEmbed()
      .setTitle("**Updates**")
      .setThumbnail("https://i.hizliresim.com/cYAIw4.png")
      .setColor("RANDOM")
      .addField("Date", "1.4.2021 - 9.20")
      .addField("Added - 2 New Command", "example | .example")
      .setImage("https://cdn.discordapp.com/attachments/792703124417937409/795275696648749086/Screenshot_522.png")
      .setTimestamp()
      .setFooter("Name Team ❤ Author"));
  }

  if (msg.content === 'prefix') {
    msg.reply('My prefix: "(.) (dot)"');
  }

  if (msg.content === prefix + 'status') {

    if (status === 1) {
      msg.channel.send(new Discord.MessageEmbed()
        .setTitle("**Status**")
        .setThumbnail("https://i.hizliresim.com/cYAIw4.png")
        .setColor("RANDOM")
        .addField("Bot Services Are Active 🔧", "👊")
        .addField("Bot Ping", `${client.ws.ping} ms`)
        .setTimestamp()
        .setFooter("Name Team ❤ Author"));
    }

    else if (status === 0) {
      msg.channel.send(new Discord.MessageEmbed()
        .setTitle("**Status**")
        .setThumbnail("https://i.hizliresim.com/cYAIw4.png")
        .setColor("RANDOM")
        .addField("Bot service is not active. The services are taken into care for a short time.", "⛔")
        .setTimestamp()
        .setFooter("Name Team ❤ Author"));
    }
  }

  //--Useful Commands--/////////////////////////////////////////////////////////////
  if (msg.content.toLowerCase() === "hi") {
    msg.reply("hi, welcome ^^");
  }

  // voting system
  if (args[0] === prefix + 'm') {
    if (msg.content.toLowerCase() === prefix + 'm') {
      msg.channel.send("Correct usage -> .m [message]");
    }
    else {
      msg.react('👍').then(() => msg.react('👎')).then(() => msg.react('🤷‍♂️'));
    }
  }

  // announcement / bold text system
  if (args[0] === prefix + 'b') {
    if (msg.content.toLowerCase() === prefix + 'b') {
      msg.channel.send("Correct usage -> .b [message]");
    }
    else {
      msg.channel.send(new Discord.MessageEmbed()
        .setTitle(`**${args.slice(1).join(" ").toUpperCase()}**`)
        .setThumbnail("https://i.hizliresim.com/KTOX5G.png")
        .setColor("RANDOM")
        .addField(msg.author.tag, 'contact.')
        .setTimestamp()
        .setFooter(msg.author.username));
    }
  }

  //--Fun Commands--///////////////////////////////////////////////////////////////////////////////////
  if (args[0] === 'shut' || args[0] === 'sht') {
    if (args[1] === 'up' || args[1] === 'p') {
      msg.channel.send('SHUT UP!');
    }
  }

  if (msg.content.toLowerCase() === prefix + 'dont cry' || msg.content.toLowerCase() === prefix + 'do not cry' || msg.content.toLowerCase() === prefix + "don't cry" || msg.content.toLowerCase() === prefix + "don' t cry") {
    msg.react('😢');
    msg.channel.send('https://tenor.com/view/dont-cry-dont-cry-cheer-dont-give-up-encourage-encouragement-gif-12458961');
  }

  if (args[0] === 'bye' || args[0] === 'bb') {
    msg.channel.send('Bye!');
  }

  if (msg.content.toLowerCase() === 'haha') {
    msg.channel.send('https://tenor.com/view/el-risitas-happy-laughing-gif-16530528');
  }

  if (msg.content.toLowerCase() === prefix + "pu") {
    msg.channel.send('PU!', {
      files: [
        "https://i.hizliresim.com/F46qp5.png" // example image
      ]
    });
  }

  if (msg.content.toLowerCase() === "welcome" || msg.content.toLowerCase() === "wellcome") {
    msg.channel.send('welcome..', {
      files: [
        "https://cdn.discordapp.com/attachments/783085174590144522/796047286785277982/AYKUT_ELMAS_HOSGELDINIZ.mp4"
      ]
    });
  }
});
