const Discord = require("discord.js");
const { MessageEmbed, MessageCollector, Collection } = require("discord.js");
const { get } = require('request-promise-native');
const User = require('../../models/user.js');
const Spawn = require('../../models/spawn.js');
const Guild = require('../../models/guild.js');
const Pokemon = require("../../Classes/Pokemon.js");
const { classToPlain } = require("class-transformer");
const Galar = require('../../db/galarians.js');
let gen8 = require('../../db/gen8.js')
const ms = require("ms");
const { capitalize, getlength } = require('../../functions.js');
const Canvas = require('canvas')
 const canvas = Canvas.createCanvas(1192,670);
          const ctx = canvas.getContext('2d')

module.exports = {
  name: "premiumspawn",
  description: "Dev commands",
  category: "Dev",
  args: true,
  usage: ["premium_spawn start"],
  cooldown: 3,
  permissions: [],
  aliases: ["ps"],
  execute: async (client, message, args, prefix, guild, color, channel) => {
    if (message.content.toLowerCase().startsWith((`${prefix.toLowerCase()}ps` || `${prefix.toLowerCase()}ps`))) return;

    let user = await User.findOne({ id: message.author.id });

    if (!user || !user.pokemons[0]) return message.channel.send("You need to pick a starter pokémon using the \`" + prefix + "start\` command before using this command!");

            var shiny = false
    //type = galarian
    gen = Math.floor(Math.random() * 16000);
    if (gen <= 10) shiny = true;
        let lvl = Math.floor(Math.random() * 50)
        let poke = new Pokemon({ shiny: shiny }, lvl);
        poke = await classToPlain(poke);
        let spawn = await Spawn.findOne({ id: message.channel.id });
        if (!spawn) await new Spawn({ id: message.channel.id }).save();
        spawn = await Spawn.findOne({ id: message.channel.id })
        spawn.pokemon = []
        spawn.pokemon.push(poke)
        spawn.time = Date.now() + 259200000
        await spawn.save()
        setTimeout(async () => {
            await scool.delete(message.channel.id)
        }, 50000)
        let bg = "https://media.discordapp.net/attachments/860885842359615559/861204903753678858/pokemon_swsh___route_2__night__by_phoenixoflight92_de2smhz-pre.jpg";
       ;
          const background = await Canvas.loadImage(bg)
          ctx.drawImage(background,0,0,canvas.width,canvas.height)
          const pk = await Canvas.loadImage(poke.url)
          ctx.drawImage(pk,300,100,550,550)
         const embed3 = new MessageEmbed()
            .setAuthor(`A Wild Pokémon has appeared!`)
            .setDescription(`Guess the Pokémon аnd type \`${guild.prefix}catch <pokémon name>\` to cаtch it!`)
            .attachFiles([{ name: "new.png", attachment: canvas.toBuffer() }])
            .setImage("attachment://" + "new.png")
            .setColor('#ffb6c2')
        await user.save();
        return message.channel.send(embed3)
      }}


        
              


