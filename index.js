const commando = require("discord.js-commando");
const Discord = require("discord.js");
const bot = new commando.Client();
const newUsers = new Discord.Collection();

bot.registry.registerGroup("random", "Random");
bot.registry.registerGroup("peenis", "peenis");
bot.registry.registerGroup("pall", "Pall");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

var isReady = true;

bot.on("guildMemberAdd", (member) => {
  newUsers.set(member.id, member.user);
});

bot.on("guildMemberRemove", (member) => {
  if(newUsers.has(member.id)) newUsers.delete(member.id);
});

bot.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  newUsers.set(member.id, member.user);

  if (newUsers.size > 10) {
    const defaultChannel = guild.channels.find(c=> c.permissionsFor(guild.me).has("SEND_MESSAGES"));
    const userlist = newUsers.map(u => u.toString()).join(" ");
    defaultChannel.send("jou fagott\n" + userlist);
    newUsers.clear();
  }
});

bot.on('message', msg => {

    if (msg.content === 'Jott') {
      msg.reply('käi kanni.');
    }
    if (msg.content === 'Jott minecrafti pelad?') {
        msg.reply('ikka mis seal siis valesti on tra?');
      }
      if (msg.content === 'Jott on pede') {
        msg.reply('ise oled tra');
      }
      if (msg.content === 'Jott on kääbik') {
        msg.reply('käi kanni meeter 20 pole kääbik.');
        
      }
      if (msg.content === 'Käi kanni') {
        msg.channel.send('Käi ise kanni, kährik.');
      }
      if (msg.content === '??') {
        msg.channel.send('Jott, Jott minecrafti pelad?, Jott on pede, Jott on kääbik, Käi kanni, Kes ei pühi siin majas perset?, Kes on boss?, LOL on sitt mäng, Jott on sitt, Gardo?, Eesnahk?, (Valss1, Valss2, Valss3, Valss4, Täis valss), Aitab,Kevin millal load saad?,Jott mis kevini koerast sai?,Mis on su lemmik multikategelane?,Unine?,Roblox?,Kevin?');
      }
      if (msg.content === 'Kes ei pühi siin majas perset?') {
        msg.channel.send("See mees:", {file: "https://cdn.discordapp.com/attachments/330463717252792323/373970479758704641/16933713_989937311138677_1983076949_n.jpg"});
      }
      if (msg.content === 'Kes on boss?') {
        msg.channel.send('Tema', {file: "https://cdn.discordapp.com/attachments/330463717252792323/374173066730668032/Snapchat-21088747232.jpg"});
      }  
      if (msg.content === 'LOL on sitt mäng') {
        msg.channel.send('Ise oled kährikloom siuke');
      }  
      if (msg.content === 'Jott on sitt') {
        msg.channel.send('you are sucking yes?');
      }  
      if (msg.content === 'Gardo?') {
        msg.channel.send({file: "https://cdn.discordapp.com/attachments/330463717252792323/374261994297229315/unknown.png"}); 
      }
      if (msg.content === 'Eesnahk?') {
        msg.channel.send({file: "https://cdn.discordapp.com/attachments/330463717252792323/374264976958947339/unknown.png"}); 
      }
      if (msg.content === 'Kevin millal load saad?') {
        msg.channel.send('See küll lube ei saa',{file: "https://cdn.discordapp.com/attachments/330463717252792323/375031119587966977/unknown.png"});
      }
      if (msg.content === 'Jott mis kevini koerast sai?') {
        msg.channel.send('Pmst..',{file: "https://cdn.discordapp.com/attachments/375745937571840000/376730248349483008/1478743387848.png"});
      }
      if (msg.content === 'Mis on su lemmik multikategelane?') {
        msg.channel.send('see',{file: "https://cdn.discordapp.com/attachments/330463717252792323/375032817815650305/22711425_1582200161828353_1915094558_n.jpg"});
      }
      if (msg.content === 'Unine?') {
        msg.channel.send('Jah',{file: "https://cdn.discordapp.com/attachments/330463717252792323/375034986870341646/IMG_20160514_040843.jpg"});
      }      
      if (msg.content === 'Roblox?') {
        msg.channel.send('Jah',{file: "https://cdn.discordapp.com/attachments/330463717252792323/375035971458301952/22119080_1119570274854721_350863066_n.png"});
      }
      if (msg.content === 'Kevin?') {
        msg.channel.send('Jah',{file: "https://cdn.discordapp.com/attachments/330463717252792323/376780033014104064/19415727_258557101293750_621094761_n.jpg"});
      }
      if (isReady && msg.content === 'Valss1')
      {
      isReady = false;
      var voiceChannel = msg.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.playFile('./Valss1.wav');
         dispatcher.on("end", end => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));
       isReady = true;
      }
      if (isReady && msg.content === 'Valss2')
      {
      isReady = false;
      var voiceChannel = msg.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.playFile('./Valss2.wav');
         dispatcher.on("end", end => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));
       isReady = true;
      }
      if (isReady && msg.content === 'Valss3')
      {
      isReady = false;
      var voiceChannel = msg.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.playFile('./Valss3.wav');
         dispatcher.on("end", end => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));
       isReady = true;
      }
      if (isReady && msg.content === 'Valss4')
      {
      isReady = false;
      var voiceChannel = msg.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.playFile('./Valss4.wav');
         dispatcher.on("end", end => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));
       isReady = true;
      }
      if (isReady && msg.content === 'Täis valss')
      {
      isReady = false;
      var voiceChannel = msg.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.playFile('./Valss.mp3');
         dispatcher.on("end", end => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));
       isReady = true;
      }
      if (isReady && msg.content === 'Aitab')
      {
      isReady = false;
      var voiceChannel = msg.member.voiceChannel;
      voiceChannel.join().then(connection =>
      {
         const dispatcher = connection.playFile();
         dispatcher.on("end", end => {
           voiceChannel.leave();
           });
       }).catch(err => console.log(err));
       isReady = true;
      }
  });

bot.login("MzczNTcwODg1MzM0MDczMzQ0.DNaMLw.NXoq_KgvElTPrOx9qGPhpog6ug8");
