const Discord = require("discord.js");
const c = require("../../infs")
const Canvas = require("canvas")
module.exports = {
name: "bobyata",
description: "Cria um meme comigo vendo a foto de perfil do usuário citado dentro de um computador.",
type: 'CHAT_INPUT',
options: [{
name: 'membro',
type: 'USER',
description: 'Selecione um membro.',
required: false,
}],

run: async (client, interaction, args) => {

const canvas = Canvas.createCanvas(1050, 1050)
const ctx = canvas.getContext("2d")
 let user = interaction.options.getUser('membro') || interaction.user


let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
const TargetAvatar = await Canvas.loadImage(`${avatar}`)
ctx.drawImage(TargetAvatar, 400, 12, 700, 700)


const avatara = await 
Canvas.loadImage("https://cdn.discordapp.com/attachments/900458136949882890/900458222589190155/oie_transparent.png")
ctx.drawImage(avatara, 0, 0, canvas.width, canvas.height)


const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'ata.png')
return interaction.followUp({files: [attachment]})


},
};