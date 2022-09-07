const Discord = require('discord.js');
const { MessageEmbed, MessageCollector, Collection } = require("discord.js");
const { get } = require('request-promise-native');
const User = require('../../models/user.js');
const Guild = require('../../models/guild.js');
const ms = require("ms");
const webhook1 = new Discord.WebhookClient('1012193410750349352', process.env.report)
module.exports = {
  name: "report",
  description: "Reportar un usuario",
  category: "GettingStarted",
  args: true,
  usage: ["report <@usuario, razon y pruebas>"],
  cooldown: 15,
  aliases: [],

   execute: async (client, message, args, prefix, guild, color, channel) => {

    if (!args[0]) return message.reply('Por favor añada el usuario y motivo a reportar!')

    message.reply(`✉ | ${message.author.username} Gracias por el reporte. Recuerda que imagenes deben enviarse en link y también recuerda haber enviado pruebas en links de mensajes con el link del servidor! :)`)

    const bugReportEmbed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${message.author.username}#${message.author.discriminator} (${message.author.id}) reporte:`)
      .setDescription(`${args}`)
      .addField("En el servidor:", `${message.guild.name}`)
      .addField("Servidor ID:", `${message.guild.id}`)
     

    webhook1.send(bugReportEmbed)


  }
}