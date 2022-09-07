const Discord = require("discord.js");
const { MessageEmbed, MessageCollector, Collection } = require("discord.js");
const { get } = require('request-promise-native')
const fs = require("fs");
const { classToPlain } = require("class-transformer");
const { getlength } = require("../../functions");
const Pokemon = require("./../../Classes/Pokemon");
let Spawn = require('../../models/spawn.js')
let Guild = require('../../models/guild.js')
const Canvas = require('canvas')
 const canvas = Canvas.createCanvas(1192,670);
          const ctx = canvas.getContext('2d')


module.exports = {
  name: "fish",
  description: "Hunt a wild pokemon every 1 minute.",
  category: "Pokemon",
  args: false,
  usage: ["fish"],
  cooldown: 60,
  permissions: [],
    aliases: ["f"],
    execute: async (client,message, args, prefix, guild, color, channel) => {
    let names = ["alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","seaking","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","octillery","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shellder","cloyster","clampearl","corsola","mantine","seel","dewgong","spheal","walrein","sharpedo","wailmer","wailord","bruxish","arctovish","dracovish","psyduck","dewgong","golduck","corphish","crawdaunt","krabby","kingler","alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","seaking","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","octillery","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shellder","cloyster","clampearl","corsola","mantine","seel","dewgong","spheal","walrein","sharpedo","wailmer","wailord","bruxish","arctovish","dracovish","psyduck","dewgong","golduck","corphish","crawdaunt","krabby","kingler","alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","seaking","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","octillery","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shellder","cloyster","clampearl","corsola","mantine","seel","dewgong","spheal","walrein","sharpedo","wailmer","wailord","bruxish","arctovish","dracovish","psyduck","dewgong","golduck","corphish","crawdaunt","krabby","kingler","alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","seaking","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","octillery","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shelder","cloyster","clampearl","corsola","mantine","seel","dewgong","spheal","walrein","sharpedo","wailmer","wailord","bruxish","arctovish","dracovish","psyduck","dewgong","golduck","corphish","crawdaunt","krabby","kingler","alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","seaking","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","octillery","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shellder","cloyster","clampearl","corsola","mantine","seel","dewgong","spheal","walrein","sharpedo","wailmer","wailord","bruxish","arctovish","dracovish","psyduck","dewgong","golduck","corphish","crawdaunt","krabby","kingler","alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","seaking","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","octillery","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shellder","cloyster","clampearl","corsola","mantine","seel","dewgong","spheal","walrein","sharpedo","wailmer","wailord","bruxish","arctovish","manaphy","psyduck","dewgong","golduck","corphish","crawdaunt","krabby","kingler","alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","seaking","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","octillery","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shellder","cloyster","clampearl","corsola","mantine","manaphy","dewgong","spheal","walrein","sharpedo","wailmer","wailord","bruxish","arctovish","dracovish","psyduck","dewgong","golduck","manaphy","crawdaunt","krabby","kingler","alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","seaking","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","octillery","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shellder","cloyster","clampearl","corsola","mantine","seel","dewgong","spheal","walrein","sharpedo","wailmer","wailord","bruxish","arctovish","dracovish","psyduck","dewgong","golduck","corphish","crawdaunt","krabby","kingler","alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","phione","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","kyogre","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shellder","cloyster","clampearl","corsola","mantine","seel","dewgong","spheal","walrein","sharpedo","wailmer","wailord","bruxish","phione","kyogre","psyduck","dewgong","golduck","corphish","crawdaunt","krabby","kingler","alomomola","basculin","carvanha","chinchou","eelektrik","eelektross","feebas","finneon","goldeen","gorebyss","huntail","lanturn","luvdisc","magikarp","qwilfish","seaking","stunfisk","tynamo","relicanth","horsea","seadra","remoraid","octillery","kingdra","seadra","tentacool","tentacruel","staryu","starmie","shellder","cloyster","clampearl","phione","mantine","seel","dewgong","spheal","walrein","sharpedo ","suicune","palkia","lugia","articuno","phione",]
    let name = names[Math.floor(Math.random() * names.length)]



    let ab = {
     url: `https://pokeapi.co/api/v2/pokemon/${name}`,
      json: true
    }    
    let embedx;
    await get(ab).then(async x => {
       let check = x.id.toString().length
        if (check === 1) {
            url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${x.id}.png`
          } else if (check === 2) {
            url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${x.id}.png`
          } else if (check === 3) {
            url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${x.id}.png`
          }
    var shiny = false
    //type = galarian
    gen = Math.floor(Math.random() * 8096);
    if (gen <= 10) shiny = true;
       let lvl = Math.floor(Math.random()*69) + 1
       let pokemon = new Pokemon({ name: x.name.toLowerCase(), id: x.id, shiny: shiny,  url: url }, lvl);

       pokemon = await classToPlain(pokemon)

       let imgname = 'new.png'
       let spawn = await Spawn.findOne({id: message.channel.id})
       if (!spawn) await new Spawn({ id: message.channel.id }).save();
       spawn = await Spawn.findOne({id: message.channel.id})
       spawn.pokemon = []
       spawn.pokemon.push(pokemon)
       spawn.time = 259200000 + Date.now()
       await spawn.save()

        let bg = "https://media.discordapp.net/attachments/794187043864313887/864585047242571776/underwater-near-ocean-surface-with-rising-bubbles-in-blue-sea-incredivfx.png?width=720&height=405";
       ;
         
          const background = await Canvas.loadImage(bg)
          ctx.drawImage(background,0,0,canvas.width,canvas.height)
          const pk = await Canvas.loadImage(pokemon.url)
          ctx.drawImage(pk,300,100,550,550)
           embedx = new Discord.MessageEmbed()
            .setAuthor(`Un nuevo pez ha aparecido`)
            .setDescription(`Adivina el pokemon y escribe \`${guild.prefix}catch <nombre de poke>\` para capturarlo`)
             .setColor('#add8e6')
             .attachFiles([{ name: "new.png", attachment: canvas.toBuffer() }])
            .setImage("attachment://" + "new.png")
    })
    return message.channel.send(embedx)
  
}
}