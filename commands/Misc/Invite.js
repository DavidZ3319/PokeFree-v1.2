const Discord = require("discord.js");
const { MessageEmbed, MessageCollector, Collection } = require("discord.js");
const { get } = require('request-promise-native');
const User = require('../../models/user.js');
const Guild = require('../../models/guild.js');
const ms = require("ms");


module.exports = {
    name: "invite",
    description: "invite the bot to your server",
    category: "miscellaneous",
    args: false,
    usage: ["invite"],
    cooldown: 5,
    aliases: ["inv"],
    execute: async (client, message, args, prefix, guild, color, channel) => {

      
      let embed = new MessageEmbed()
      .setDescription(`**[Click aquí para invitarme](https://discord.com/oauth2/authorize?client_id=1008538206603595806&permissions=1644971949553&scope=bot%20applications.commands)**`)
     .setFooter("Actualmente hay un evento por invitar revisalo con p!invitevent")
      .setColor(color)
      message.channel.send(embed)

    }
}