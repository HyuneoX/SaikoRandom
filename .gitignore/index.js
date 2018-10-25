const Discord = require("discord.js")
const bot = new Discord.Client()
const salut = require('./Commandes/salut')
const salut2 = require('./Commandes/salut2')
const PREFIX = "=";
var prefix = ("=");
var dispatcher;
var fs = require('fs');
var userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
var message = 
process.setMaxListeners(20);

var servers = {};
bot.login(process.env.TOKEN)

//Rôle secret
bot.on('message', message => {
    var Secret = message.guild.roles.find("name", "🌼 - Secret")
    if(message.content === "I love secrets and flowers")
        message.member.addRole(Secret)
        
})
bot.on('message', message => {
    if(message.content === "I love secrets and flowers")
    message.author.send('Le rôle "🌼 - Secret" a bien été rajouté ! Bravo !')
})

//Avatar, Status, Playing...
    bot.on('ready', function () {
//bot.user.setAvatar('./pop.jpg').catch(console.error)
    bot.user.setStatus('Online')
    bot.user.setActivity('Final Fantasy XI')
})

//Bienvenue, Départ, Autorole
    bot.on('guildMemberAdd', member => {
        member.guild.channels.find("name", "general").send(``)
    })
    bot.on("guildMemberRemove", member => {
        member.guild.channels.find("name", "general").send(`${member}, la tribu a décidée de vous éliminer et leur sentence est irrévocable. pfuush`)       
})
    bot.on('guildMemberAdd', member => {
        var role = member.guild.roles.find('name', '🌸 - Visiteurs');
        member.addRole(role)
    })


//Avatar
    bot.on("message", function (message){
        if(message.content === prefix + "avatar") {
    if (message.author.bot) return undefined;

    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(' ');
    let command = args.shift().toLowerCase();


        let user = message.mentions.users.first() || message.author; // User mention

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
                name:"Autorôle :",
                value:`**\`=roles\`** vous donnera la liste des rôles que vous pouvez obtenir via une commande.`,
                inline:true
            },
            {
                name:"Autres :",
                value:`**\`=faq\`** suivi d'une question répondant par oui ou par non.
**\`=ping\`** vous montre la latence entre vous et le serveur.
**\`=gif\`** enverra un gif aléatoire.
**\`=avatar\`** votre avatar sera affiché en grand.`,
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
gif1 = "./gif/gif1.gif"; gif2 = "./gif/gif2.gif"; gif3 = "./gif/gif3.gif"; gif4 = "./gif/gif4.gif"; gif5 = "./gif/gif5.gif"; gif6 = "./gif/gif6.gif"; gif7 = "./gif/gif7.gif"; gif8 = "./gif/gif8.gif"; gif9 = "./gif/gif9.gif"; gif10 = "./gif/gif10.gif"; gif11 = "./gif/gif11.gif"; gif12 = "./gif/gif12.gif"; gif13 = "./gif/gif13.gif"; gif14 = "./gif/gif14.gif"; gif15 = "./gif/gif15.gif"; gif16 = "./gif/gif16.gif"; gif17 = "./gif/gif17.gif"; gif18 = "./gif/gif18.gif"; gif19 = "./gif/gif19.gif"; gif20 = "./gif/gif20.gif"; gif21 = "./gif/gif21.gif"; gif22 = "./gif/gif22.gif"; gif23 = "./gif/gif23.gif"; gif24 = "./gif/gif24.gif"; gif25 = "./gif/gif25.gif"; gif26 = "./gif/gif26.gif"; gif27 = "./gif/gif27.gif";
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
        case 20: message.channel.send ({ files: [gif20] });break;
        case 21: message.channel.send ({ files: [gif21] });break;
        case 22: message.channel.send ({ files: [gif22] });break;
        case 23: message.channel.send ({ files: [gif23] });break;
        case 24: message.channel.send ({ files: [gif24] });break;
        case 25: message.channel.send ({ files: [gif25] });break;
        case 26: message.channel.send ({ files: [gif26] });break;
        case 27: message.channel.send ({ files: [gif27] });break;

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
                "Je t'aime bien donc on va dire oui ~ヾ(・ω・)",
                "J'aime les fleurs et toi ? o(>ω<)o",
                "Parfois, il suffit de répondre et de ne pas poser de questions... Sinon j'aimes les fleurs et toi ? (ﾉ´ヮ`)ﾉ*: ･ﾟ"
            ];

            let reponse = (replys[Math.floor(Math.random() * replys.length)])
            var bembed = new Discord.RichEmbed()
            .addField("Question", tte)
            .addField("Réponse", reponse)       
        message.channel.send(bembed)
}})

//Sondages
bot.on('message', message => {
    if (message.content.startsWith(prefix + "sondage")) {
        
        if(message.author.id == "176257694716395520" || message.author.id == "240879027689226242" || message.author.id == "184383368924758016" || message.author.id == "244482258772295690"){
            let args = message.content.split(" ").slice(1);
            let thingToEcho = args.join (" ")
            var embed = new Discord.RichEmbed()
                .setDescription("Sondage :")
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
                return message.author.send("Tu n'as pas la permission.")
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
//SoulWorker
bot.on('message', message => {
    var SoulWorker = message.guild.roles.find("name", "SoulWorker")
    if(message.content === prefix + "SoulWorker")
        message.member.addRole(SoulWorker)

})
bot.on('message', message => {
    if(message.content === prefix + "SoulWorker")
        message.channel.send('Le rôle "SoulWorker" a bien été rajouté !')
})
//Rocket League
bot.on('message', message => {
    var RL = message.guild.roles.find("name", "Rocket League")
    if(message.content === prefix + "RL")
        message.member.addRole(RL)
        
})
bot.on('message', message => {
    if(message.content === prefix + "RL")
    message.channel.send('Le rôle "Rocket League" a bien été rajouté !')
})
//Yu-Gi-Oh
bot.on('message', message => {
    var Yugi = message.guild.roles.find("name", "Yu-Gi-Oh")
    if(message.content === prefix + "Yugi")
        message.member.addRole(Yugi)
        
})
bot.on('message', message => {
    if(message.content === prefix + "Yugi")
    message.channel.send('Le rôle "Yu-Gi-Oh" a bien été rajouté !')
})
//Trove
bot.on('message', message => {
    var Trove = message.guild.roles.find("name", "Trove")
    if(message.content === prefix + "Trove")
        message.member.addRole(Trove)
        
})
bot.on('message', message => {
    if(message.content === prefix + "Trove")
    message.channel.send('Le rôle "Trove" a bien été rajouté !')
})
//Fortnite
bot.on('message', message => {
    var Fortnite = message.guild.roles.find("name", "Fortnite")
    if(message.content === prefix + "Fortnite")
        message.member.addRole(Fortnite)
        
})
bot.on('message', message => {
    if(message.content === prefix + "Fortnite")
    message.channel.send('Le rôle "Fortnite" a bien été rajouté !')
})
//Blockade 3D
bot.on('message', message => {
    var Blockade = message.guild.roles.find("name", "Blockade 3D")
    if(message.content === prefix + "Blockade")
        message.member.addRole(Blockade)
        
})
bot.on('message', message => {
    if(message.content === prefix + "Blockade")
    message.channel.send('Le rôle "Blockade 3D" a bien été rajouté !')
})
//PUBG
bot.on('message', message => {
    var PUBG = message.guild.roles.find("name", "PUBG")
    if(message.content === prefix + "PUBG")
        message.member.addRole(PUBG)
        
})
bot.on('message', message => {
    if(message.content === prefix + "PUBG")
    message.channel.send('Le rôle "PUBG" a bien été rajouté !')
})
//Rainbow Six Siege
bot.on('message', message => {
    var R6 = message.guild.roles.find("name", "Rainbow Six Siege")
    if(message.content === prefix + "R6")
        message.member.addRole(R6)
        
})
bot.on('message', message => {
    if(message.content === prefix + "R6")
    message.channel.send('Le rôle "Rainbow Six Siege" a bien été rajouté !')
})
//World of Warcraft
bot.on('message', message => {
    var WoW = message.guild.roles.find("name", "World of Warcraft")
    if(message.content === prefix + "WoW")
        message.member.addRole(WoW)
        
})
bot.on('message', message => {
    if(message.content === prefix + "WoW")
    message.channel.send('Le rôle "World of Warcraft" a bien été rajouté !')
})
//Hearthstone
bot.on('message', message => {
    var HS = message.guild.roles.find("name", "Hearthstone")
    if(message.content === prefix + "HS")
        message.member.addRole(HS)
        
})
bot.on('message', message => {
    if(message.content === prefix + "HS")
    message.channel.send('Le rôle "Hearthstone" a bien été rajouté !')
})
//Listes des rôles
bot.on("message", function(message){
    if (message.content === prefix + 'roles')

    message.channel.send({embed:{
        title:"Liste des rôles :",
        description:"Rôles accessibles à tous.",
        color: 0xffe993,
        fields:[
            {
                name:"Jeux :",
                value:`Il vous suffira d'écrire le suffix "=" suivis de l'un de ses jeux pour obtenir le rôle :
• Over (Overwatch)
• LoL (League of Legends)
• CS:GO (Countre Strike)
• Minecraft
• Osu!
• Elsword
• Dofus
• SoulWorker
• RL (Rocket League)
• Yugi (Yu-Gi-Oh)
• Trove
• Fortnite
• Blockade 3D
• PUBG
• R6 (Rainbow Six Siege)
• WoW (Wolrd of Warcraft)
• HS (Hearthstone)`,
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
