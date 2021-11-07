const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Canvas = require("canvas")
const Discord = require("discord.js")
const c = require("../../infs")



module.exports = {
    name: "perfil",
    description: "Veja seu perfil.",
    type: 'CHAT_INPUT',
  options: [{
        name: 'membro',
        type: 'USER',
        description: 'Selecione um membro para ver o perfil.',
        required: false,
    }],

run: async (client, interaction, args) => {

    const canvas = Canvas.createCanvas(1000, 700)
    const ctx = canvas.getContext("2d")

  
const user = interaction.options.getUser('membro') || interaction.user

const firebase = require('firebase');
const database = firebase.database();
const embed2 = new MessageEmbed()

let us = interaction.guild.id;
let bref = database.ref(`eco/${user.id}`)
let dcx = database.ref(`cooldown/${user.id}`)
let pessoal = database.ref(`pessoal/${user.id}`)
let configs = database.ref(`configs-server/${us}`)
database.ref(`eco/${user.id}`)
.once('value').then(async function(db) {
database.ref(`cooldown/${user.id}`)
.once('value').then(async function(cl) {
database.ref(`pessoal/${user.id}`)
.once('value').then(async function(pas) {
database.ref(`configs-server/${us}`)
.once('value').then(async function(cf) {
if(db.val() == null){
  const embedu = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não é possível ver o perfil de pessoas que nunca usaram meus comandos!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [embedu]})
}
if(pas.val().black > 1){
  const embeduu = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não é possível ver o perfil de pessoas levaram BobyBan!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [embeduu]})
}








     // a imagem de fundo
    const fundo = await 
    Canvas.loadImage(pas.val().url)
    ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height)


    const layout = await 
    Canvas.loadImage("https://media.discordapp.net/attachments/900458136949882890/901193042541809684/layout.png?width=765&height=535")
    ctx.drawImage(layout, 0, 0, canvas.width, canvas.height)

    const badge = await 
    Canvas.loadImage(`${pas.val().urlBad}`)
    ctx.drawImage(badge, 805, 50, 150, 150)


let avatar = user.displayAvatarURL({ format: 'jpg' }); 

ctx.beginPath();
      ctx.arc(120, 140, 90, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

// coloca o avatar do user na imagem
const TargetAvatar = await Canvas.loadImage(`${avatar}`)
ctx.drawImage(TargetAvatar, 28, 40, 193, 193)


        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'xaa.png')
        interaction.followUp({files: [attachment]})

})
})
})
})

    },
};