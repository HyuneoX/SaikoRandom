const Discord = require("discord.js")
const bot = new Discord.Client()
const salut = require('./Commandes/salut')
const salut2 = require('./Commandes/salut2')
const PREFIX = "=";
const YTDL = require('ytdl-core')
const music = require('discord.js-music-v11');
var prefix = ("=");
var dispatcher;
var fs = require('fs');
var userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
var message = 
process.setMaxListeners(0);
function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var servers = {};
bot.login(process.env.TOKEN)

//Avatar, Status, Playing...
bot.on('ready', function () {
//bot.user.setAvatar('./pop.jpg').catch(console.error)
bot.user.setStatus('Online')
bot.user.setActivity('Final Fantasy XI')
})

//Musique
bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
            case "play":
                message.channel.send("Let's go~ ");
                if (!args[1]) {
                    message.channel.sendMessage("Please provide a link");
                    return;
                }

                if(!message.member.voiceChannel) {
                    message.channel.sendMessage("Il faut rejoindre un channel avant de pouvoir écouter de la musique.");
                    return;
                }

                if(!servers[message.guild.id]) servers[message.guild.id] = {
                    queue: []
                };

                var server = servers[message.guild.id];

                server.queue.push(args[1]);

                if(!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                    play(connection, message);
                });
                break;
            case "skip":
                message.channel.send("Music skipped~ !");
                var server = servers[message.guild.id];

                if (server.dispatcher) server.dispatcher.end();
            break;
            case "stop":
                message.channel.send("Bye Bye~");
                var server = servers[message.guild.id];

                if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
            break;
    }
});


//Bienvenue, Départ, Autorole
    bot.on('guildMemberAdd', member => {
        member.guild.channels.find("name", "general").send(`Un(e) nouvel(le) arrrivant(e) dans un monde random est descendu(e) du ciel. Veuillez guider ${member} dans ce monde dangereux (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧`)
    })
    bot.on("guildMemberRemove", member => {
        member.guild.channels.find("name", "general").send(`${member} nous a quitté, un ange partit trop tôt. o(TヘTo)`)       
})
    bot.on('guildMemberAdd', member => {
        var role = member.guild.roles.find('name', '🍜 - Clients');
        member.addRole(role)
    })
//Avatar des gens
bot.on("message", function (message){

    let user = message.mentions.users.first() || message.author; // User mention
    if(message.content === prefix + "avatar") {
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Avatar`)
    .setImage(user.displayAvatarURL) // User's avatar
    .setColor('RANDOM') // Generate random color
    message.channel.send(embed)
}});
//Commandes
bot.on("message", function (message){
    let commandUsed =
        salut.parse(message)
        salut2.parse(message)
})

//Help
bot.on("message", function(message){
    if (message.content === prefix + 'help')

    message.channel.send({embed:{
        title:"Listes des commandes de Saiko :",
        description:"Commandes accessibles à tous.",
        color: 0xffe993,
        fields:[
            {
                name:"Musique :",
                value:`**\`=play\`** suivi d'un URL YouTube pour ramener Saiko et la faire jouer de la musique.
**\`=skip\`** pour passer à la prochaine musique.
**\`=stop\`** pour faire quitter Saiko du salon audio.`,
                inline: true
            },
            {
                name:"Autorôle :",
                value:`**\`=rôles\`** vous donnera la liste des rôles que vous pouvez obtenir via une commande.`,
                inline:true
            },
            {
                name:"Autres :",
                value:`**\`=faq\`** suivi d'une question répondant par oui ou par non.
**\`=ping\`** vous montre la latence entre vous et le serveur.
**\`=gif\`** enverra un gif aléatoire.`,
                inline:true
            },
            {
                name:"Help :",
                value:`**\`=help\`** vous affichera ce tableau.`,
                inline: false
            }
        ],
        timestamp: new Date(),
        footer: {
            text: 'Saiko',
            icon_url: 'https://cdn.discordapp.com/attachments/301737485225164801/432544483205316608/pop_copie.jpg'
        }
    }})
})

//Random Images
gif1 = "./gif/gif1.gif"; gif2 = "./gif/gif2.gif"; gif3 = "./gif/gif3.gif"; gif4 = "./gif/gif4.gif"; gif5 = "./gif/gif5.gif"; gif6 = "./gif/gif6.gif"; gif7 = "./gif/gif7.gif"; gif8 = "./gif/gif8.gif"; gif9 = "./gif/gif9.gif"; gif10 = "./gif/gif10.gif"; gif11 = "./gif/gif11.gif"; gif12 = "./gif/gif12.gif"; gif13 = "./gif/gif13.gif"; gif14 = "./gif/gif14.gif"; gif15 = "./gif/gif15.gif"; gif16 = "./gif/gif16.gif"; gif17 = "./gif/gif17.gif"; gif18 = "./gif/gif18.gif"; gif19 = "./gif/gif19.gif"; gif20 = "./gif/gif20.gif"; gif21 = "./gif/gif21.gif";
bot.on('message', message => {
    if(message.content === prefix + "gif") {
    number = 3;
    var random = Math.floor(Math.random() * 19) + 1;
    switch (random) {
        case 1: message.channel.send ({ files: [gif1] });break;
        case 2: message.channel.send ({ files: [gif2] });break;
        case 3: message.channel.send ({ files: [gif3] });break;
        case 4: message.channel.send ({ files: [gif4] });break;
        case 5: message.channel.send ({ files: [gif5] });break;
        case 6: message.channel.send ({ files: [gif6] });break;
        case 7: message.channel.send ({ files: [gif7] });break;
        case 8: message.channel.send ({ files: [gif8] });break;
        case 9: message.channel.send ({ files: [gif9] });break;
        case 10: message.channel.send ({ files: [gif10] });break;
        case 11: message.channel.send ({ files: [gif11] });break;
        case 12: message.channel.send ({ files: [gif12] });break;
        case 13: message.channel.send ({ files: [gif13] });break;
        case 14: message.channel.send ({ files: [gif14] });break;
        case 15: message.channel.send ({ files: [gif15] });break;
        case 16: message.channel.send ({ files: [gif16] });break;
        case 17: message.channel.send ({ files: [gif17] });break;
        case 18: message.channel.send ({ files: [gif18] });break;
        case 19: message.channel.send ({ files: [gif19] });break;
    }
}})

//Faq
bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){
        case "roll":
            var roll = Math.floor(Math.random() * args[1]) +1;
            if (!roll) return message.reply("Entre un numéro")
            message.channel.send("Je choisis le numéro " + roll + " !");
            break;
            case "ping":
            message.channel.send('Temps de latence avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + 'ms`');
            break;
        case "faq":
        let args = message.content.split(" ").slice(1);
        let tte = args.join(" ")
        if (!tte){
            return message.reply("Merci de poser une question répondant par oui ou par non.")};

            var replys = [
                "Oui （*＾ワ＾*）",
                "Non (•ˋ _ ˊ•)",
                "Probablement (・ω・)b",
                "Je ne sais pas (´･ω･`)?",
                "H-hein?? Baka !! (/ω＼)",
                "Huh, O-oui pourquoi pas Σ(;Φ ω Φ)",
                "Perfect ʅʕ•ᴥ•ʔʃ",
                "fuis ε=ε=ε=ε=┌(;￣▽￣)┘",
                "Mmh.. ? Excuse moi.. mes biscuits sont plus important.. me dérange pas stp (っ˘ڡ˘ς)",
                "J'entends des sons.. non, une voix peut-être.. ? IMPOSSIBLE  se cache _(:c /∠)",
                "Pfff, tu m'épuises (。-ω-)zzz…",
                "Nah >-<",
                "JE SUIS UN COQUILLAGE, J'ENTENDS RIEN (ᗒᗩᗕ)",
                "Approche humaine à 12h, mettez-vous à couvert ! ─=≡Σ((( つ•̀o•́)つ",
                "Sûrement (〜￣∪￣)〜",
                "Je te laisse deviner (⇀_⇀)",
                "J'ai demandé à M6 il m'a dit oui ⊂(￣▽￣)⊃",
                "On me dit dans l'oreillette que tu perds ton temps ヽ(　￣д￣)ノ",
                "@:sushi: - Random,  venez vous occupez des invités svp..     <(￣ ﹌ ￣)>",
                "Je t'aime bien donc on va dire oui ~ヾ(・ω・)"
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .addField("Question", tte)
            .addField("Réponse", reponse)       
        message.channel.send(bembed)
}})

//Sondages
bot.on('message', message => {

    if(message.content === prefix + "infodiscord") {
        var embed = new Discord.RichEmbed()
        .setDescription("Information du Discord")
        .addField("nom du discord", message.guild.name)
        .addField("Crée le", message.guild.createdAt)
        .addField("Tu as rejoin le", message.member.JoinedAt)
        .addField("Utilisateurs sur le discord", message.guild.memberCount)
        .setColor("0x0000FF")
    message.channel.sendEmbed(embed)

    }

    if (message.content.startsWith(prefix + "sondage")) {
        if(message.author.id == "176257694716395520"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join (" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage")
                .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x:")
                .setColor("0xB40404")
                .setTimestamp()
            message.guild.channels.find("name", "sondages").send(embed)
            .then(function (message) {
                message.react("✅")
                message.react("❌")
            }).catch(function() {
            });
            }else{
                return message.reply("Tu n'as pas la permission.")
}}})

//Jem🖤Ped
bot.on('message', message => {
        if (message.content.includes(`🖤Jem27052018Ped🖤`))
        message.channel.send(`Since we're in a relationship, I can't stop thinkin' about you.
You're an amazing person, I'm so happy to be in love with you. I want so badly to see you right now... Sadly, I can't do that...
To be in love with you is incredibly amazing, you're a perfect girl to me.
We're in a relationship since 2months since yesterday and I'm sad to not be with you for thoses moments.
I'm really tryin' my best to be with you.
You asked me to proof my love to you, and there's my proof. I've take some time to do that, I hope you enjoyed it. 🖤 I really love you my sweetheart~ 🖤
🖤 Jem & Ped 🖤`)
})

//ԅ(¯﹃¯ԅ)
bot.on('message', message => {
    if (message.content.includes('🍏') || message.content.includes('🍎') || message.content.includes('🍐') || message.content.includes('🍊') || message.content.includes('🍋') || message.content.includes('🍌') || message.content.includes('🍉') || message.content.includes('🍇') || message.content.includes('🍓') || message.content.includes('🍈') || message.content.includes('🍒') || message.content.includes('🍑') || message.content.includes('🍍') || message.content.includes('🍅') || message.content.includes('🍆') || message.content.includes('🌶') || message.content.includes('🌽') || message.content.includes('🍠') || message.content.includes('🍯') || message.content.includes('🍞') || message.content.includes('🧀') || message.content.includes('🍗') || message.content.includes('🍖') || message.content.includes('🍤') || message.content.includes('🍳') || message.content.includes('🍳') || message.content.includes('🍔') || message.content.includes('🍟') || message.content.includes('🌭') || message.content.includes('🍕') || message.content.includes('🍝') || message.content.includes('🌮') || message.content.includes('🌯') || message.content.includes('🍜') || message.content.includes('🍲') || message.content.includes('🍥') || message.content.includes('🍣') || message.content.includes('🍱') || message.content.includes('🍛') || message.content.includes('🍙') || message.content.includes('🍚') || message.content.includes('🍘') || message.content.includes('🍢') || message.content.includes('🍡') || message.content.includes('🍧') || message.content.includes('🍨') || message.content.includes('🍦') || message.content.includes('🍰') || message.content.includes('🎂') || message.content.includes('🍮') || message.content.includes('🍬') || message.content.includes('🍭') || message.content.includes('🍫') || message.content.includes('🍿') || message.content.includes('🍩') || message.content.includes('🍪') || message.content.includes('🍺') || message.content.includes('🍻') || message.content.includes('🍷') || message.content.includes('🍸') || message.content.includes('🍹') || message.content.includes('🍾') || message.content.includes('🍶') || message.content.includes('🍵') || message.content.includes('☕') || message.content.includes('🍼') || message.content.includes('🍴') || message.content.includes('🍽') || message.content.includes('🥐') || message.content.includes('🥑') || message.content.includes('🥒') || message.content.includes('🥓') || message.content.includes('🥔') || message.content.includes('🥕') || message.content.includes('🥖') || message.content.includes('🥗') || message.content.includes('🥘') || message.content.includes('🥙') || message.content.includes('🥂') || message.content.includes('🥃') || message.content.includes('🥄') || message.content.includes('🥚') || message.content.includes('🥛') || message.content.includes('🥜') || message.content.includes('🥝') || message.content.includes('🥞')) {
      message.channel.send('ԅ(¯﹃¯ԅ)')
    }
  })
  
//Autorole
//Overwatch
bot.on('message', message => {
    var Over = message.guild.roles.find("name", "Overwatch")
    if(message.content === prefix + "Over")
        message.member.addRole(Over)
        
})
bot.on('message', message => {
    if(message.content === prefix + "Over")
    message.channel.send('Le rôle "Overwatch" a bien été rajouté !')
})
//League of Legends
bot.on('message', message => {
    var LoL = message.guild.roles.find("name", "League of Legends")
    if(message.content === prefix + "LoL")
        message.member.addRole(LoL)
        
})
bot.on('message', message => {
    if(message.content === prefix + "LoL")
    message.channel.send('Le rôle "League of Legends" a bien été rajouté !')
})
//Minecraft
bot.on('message', message => {
    var Minecraft = message.guild.roles.find("name", "Minecraft")
    if(message.content === prefix + "Minecraft")
        message.member.addRole(Minecraft)
        
})
bot.on('message', message => {
    if(message.content === prefix + "Minecraft")
    message.channel.send('Le rôle "Minecraft" a bien été rajouté !')
})
//Osu!
bot.on('message', message => {
    var Osu = message.guild.roles.find("name", "Osu!")
    if(message.content === prefix + "Osu!")
        message.member.addRole(Osu)
        
})
bot.on('message', message => {
    if(message.content === prefix + "Osu!")
    message.channel.send('Le rôle "Osu!" a bien été rajouté !')
})
//Elsword
bot.on('message', message => {
    var Elsword = message.guild.roles.find("name", "Elsword")
    if(message.content === prefix + "Elsword")
        message.member.addRole(Elsword)
        
})
bot.on('message', message => {
    if(message.content === prefix + "Elsword")
        message.channel.send('Le rôle "Elsword" a bien été rajouté !')
})
//Dofus
bot.on('message', message => {
    var Dofus = message.guild.roles.find("name", "Dofus")
    if(message.content === prefix + "Dofus")
        message.member.addRole(Dofus)
        
})
bot.on('message', message => {
    if(message.content === prefix + "Dofus")
        message.channel.send('Le rôle "Dofus" a bien été rajouté !')
})
//CounterStrike
bot.on('message', message => {
    var CS = message.guild.roles.find("name", "Counter Strike")
    if(message.content === prefix + "CS:GO")
        message.member.addRole(CS)
        
})
bot.on('message', message => {
    if(message.content === prefix + "CS:GO")
        message.channel.send('Le rôle "Counter Strike" a bien été rajouté !')
})

bot.on('message', message => {
    var SoulWorker = message.guild.roles.find("name", "SoulWorker")
    if(message.content === prefix + "SoulWorker")
        message.member.addRole(SoulWorker)

})
bot.on('message', message => {
    if(message.content === prefix + "SoulWorker")
        message.channel.send('Le rôle "SoulWorker" a bien été rajouté !')
})

//Listes des rôles
bot.on("message", function(message){
    if (message.content === prefix + 'rôles')

    message.channel.send({embed:{
        title:"Liste des rôles :",
        description:"Rôles accessibles à tous.",
        color: 0xffe993,
        fields:[
            {
                name:"Jeux :",
                value:`Il vous suffira d'écrire le suffix "=" suivis de l'un de ses jeux pour obtenir le rôle :
• Over
• LoL
• CS:GO
• Minecraft
• Osu!
• Elsword
• Dofus
• SoulWorker`,
                inline: true
            }
        ],
        timestamp: new Date(),
        footer: {
            text: 'Saiko',
            icon_url: 'https://cdn.discordapp.com/attachments/301737485225164801/432544483205316608/pop_copie.jpg'
        }
    }})
})
