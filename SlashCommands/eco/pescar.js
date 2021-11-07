const Discord = require("discord.js")
const c = require("../../infs.js")
module.exports = {
    name: "pescar",
    description: "Pesque.",
    type: 'CHAT_INPUT',
run: async (client, interaction, args, ms) => {
let user = interaction.user;
const firebase = require('firebase');
const database = firebase.database();
let usera = interaction.user;
let dx = database.ref(`eco/${usera.id}`)
let dcx = database.ref(`cooldown/${usera.id}`)
database.ref(`eco/${usera.id}`)
.once('value').then(async function(db) {
database.ref(`cooldown/${usera.id}`)
.once('value').then(async function(cl) {



const cc = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(` <:er2:891445091686834216> **\`|\` Erro!**\n \`Você não possui uma vara de pescar. Tente comprar uma usando o comando de /loja\``)
.setThumbnail(c.thumb)
const cc2 = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(` <:er2:891445091686834216> **\`|\` Erro!**\n \`Você precisa ter acima de 5 iscas para poder pescar. Tente comprar uma usando o comando de /loja\``)
.setThumbnail(c.thumb)

if(db.val().vara < 1) return interaction.followUp({embeds: [cc]})
if(db.val().iscas < 5) return interaction.followUp({embeds: [cc2]})


let timeout = 40000;
let author = await cl.val().pescar

if(author !== null && timeout - (Date.now() - author) > 0){
let time = ms(timeout - (Date.now() - author));

const cooldown = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`:star: Ajeitando a vara de pescar...\nEspere **${time.seconds}** segundo(s).`)

return interaction.followUp({embeds: [cooldown]})
} else {

dcx.update({
pescar: Date.now()
})
let rand = Math.floor(Math.random() * 190) +10
let footer = "Lucro. -5 Iscas."
if(rand < 40){
footer = "Você pescou uma bota.\n-5 Iscas."
rand = 0
}

if(rand > 40 && rand < 60){
footer = "Você pescou uma bota.\nSua vara de pescar quebrou.\n-5 Iscas."
dx.update({
vara: db.val().vara - 1
})
rand = 0
}

dx.update({
iscas: db.val().iscas - 5,
peixes: db.val().peixes + rand
})

const xx = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`:star:** ${user} Você pescou e conseguiu [\`${rand}\`] Peixes. :fish:\n<:noti:891443887170781184> Status da pesca: \`${footer}\`**`)
.setThumbnail("https://cdn.discordapp.com/attachments/857372576036683776/892440807192289330/4363753.png")
interaction.followUp({embeds: [xx]})

}
let eu_inf = database.ref(`eco/profi/${interaction.user.id}`)
  database.ref(`eco/profi/${interaction.user.id}`)
.once('value').then(async function(pro) {

eu_inf.update({
pescas: pro.val().pescas +1
})
})
})
})
}
}