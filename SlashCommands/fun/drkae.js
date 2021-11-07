const Discord = require("discord.js");
const c = require("../../infs")
const Canvas = require("canvas")
module.exports = {
name: "drake",
description: "Cria um meme comigo vendo a foto de perfil do usuário citado dentro de um computador.",
type: 'CHAT_INPUT',
options: [{
name: 'membro',
type: 'USER',
description: 'Selecione um membro.',
required: false,
},
{
name: 'membro2',
type: 'USER',
description: 'Selecione outro membro.',
required: false,
},

],

run: async (client, interaction, args) => {

 let user = interaction.options.getUser('membro') || interaction.user
 let usera = interaction.options.getUser('membro2') || interaction.user
       const canvas = Canvas.createCanvas(550, 550)
    const ctx = canvas.getContext("2d")




let avatar = usera.avatarURL({ dynamic: true, format: "png", size: 1024 });
let avatar2 = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

    // a imagem de fundo
    const fundo = await 
    Canvas.loadImage("https://cdn.discordapp.com/attachments/900458136949882890/900460045710532668/drake.png")
    ctx.drawImage(fundo, 0, 0, canvas.width, canvas.height)



    const TargetAvatar = await Canvas.loadImage(`${avatar}`)
const TargetAvatar2 = await Canvas.loadImage(`${avatar2}`)


    ctx.drawImage(TargetAvatar, 278, 0, 270, 270)
ctx.drawImage(TargetAvatar2, 278, 278, 270, 270)
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'bobydrake.png')
        return interaction.followUp({files: [attachment]})
},
};