const Discord = require("discord.js");
const c = require("../../infs")
module.exports = {
    name: "loja",
    description: "Compre itens da loja",
    
    run: async (client, interaction, args, ms) => {

const firebase = require('firebase'); const database = firebase.database();



database.ref(`cooldown/${interaction.user.id}`).once('value').then(async function(cl) {
let timeout = 180000;
let author = await cl.val().c1
if(author !== null && timeout - (Date.now() - author) > 0){
let time = ms(timeout - (Date.now() - author));

const cooldown = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(interaction.user.tag, interaction.user.displayAvatarURL())
.setDescription(`**:star: A loja se fechou! :book:\nEspere: \`[${time.minutes}] Minuto(s)\` e \`[${time.seconds}] Segundo(s)\` para comprar novamente.**`)
return interaction.followUp({embeds: [cooldown]})
} else {
let cla = database.ref(`cooldown/${interaction.user.id}`)
cla.update({
c1: Date.now()
})
const embed = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`**🎉 Loja\n\n**🪠 Vara de pescar [\`400G$\`]\n🔨 Enxada [\`200G$\`]\n🍬 Sementes [\`100G$\`]\n🪱 Isca pra pesca [\`50G$\`]\n🐷 Porco [\`500G$\`]\n🐔 Galinha [\`500G$\`]\n🎉 Up Nível fazenda[\`2.00G$\`]`)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())



interaction.followUp({embeds: [embed]}).then(msg => {
msg.react('🪠')
msg.react('🔨')
msg.react('🍬')
msg.react('🪱')
msg.react('🐷')
msg.react('🐔')
msg.react('🎉')

let user = interaction.user

let filtro_1 = (r, u) => r.emoji.name === '🪠' && u.id === user.id; 
let vara = msg.createReactionCollector({ filter: filtro_1});

let filtro_2 = (r, u) => r.emoji.name === '🔨' && u.id === user.id; 
let enxada = msg.createReactionCollector({ filter: filtro_2});

let filtro_3 = (r, u) => r.emoji.name === '🍬' && u.id === user.id; 
let semente = msg.createReactionCollector({ filter: filtro_3});

let filtro_4 = (r, u) => r.emoji.name === '🪱' && u.id === user.id; 
let isca = msg.createReactionCollector({ filter: filtro_4});

let filtro_5 = (r, u) => r.emoji.name === '🐷' && u.id === user.id; 
let porco = msg.createReactionCollector({ filter: filtro_5});

let filtro_6 = (r, u) => r.emoji.name === '🐔' && u.id === user.id; 
let galinha = msg.createReactionCollector({ filter: filtro_6});

let filtro_7 = (r, u) => r.emoji.name === '🎉' && u.id === user.id; 
let up = msg.createReactionCollector({ filter: filtro_7});


vara.on("collect", (x) => {
vara.stop()
 
let usery = interaction.options.getUser('membro')
let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {

const sucess_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sucesso! :tada:\n\n:book: Você comprou [\`1\`] vara de pesca por [\`400\`] Garfos. :paperclip:**`)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())

const sem_din_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sem garfos\n\n**\`Você precisa ter acima de 400 garfos para comprar uma vara de pescar.\``)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
if(db.val().garfos < 400)return msg.edit({embeds: [sem_din_1]})
eu.update({
  garfos: db.val().garfos - 400,
  vara: db.val().vara + 1
})

msg.edit({embeds: [sucess_1]})

})
})

enxada.on("collect", (x) => {
enxada.stop()

let usery = interaction.options.getUser('membro')
let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {

const sucess_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sucesso! :tada:\n\n:book: Você comprou [\`1\`] enxada por [\`200\`] Garfos. :paperclip:**`)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())

const sem_din_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sem garfos\n\n**\`Você precisa ter acima de 200 garfos para comprar uma enxada.\``)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
if(db.val().garfos < 200)return msg.edit({embeds: [sem_din_1]})
eu.update({
  garfos: db.val().garfos - 200,
  enxadas: db.val().enxadas + 1
})

msg.edit({embeds: [sucess_1]})
})
})

semente.on("collect", (x) => {
semente.stop()

let usery = interaction.options.getUser('membro')
let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {

const sucess_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sucesso! :tada:\n\n:book: Você comprou [\`20\`] sementes por [\`100\`] Garfos. :paperclip:**`)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())

const sem_din_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sem garfos\n\n**\`Você precisa ter acima de 100 garfos para comprar sementes.\``)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
if(db.val().garfos < 100)return msg.edit({embeds: [sem_din_1]})
eu.update({
  garfos: db.val().garfos - 100,
  sementes: db.val().sementes + 20
})

msg.edit({embeds: [sucess_1]})
})
})

isca.on("collect", (x) => {
isca.stop()

let usery = interaction.options.getUser('membro')
let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {

const sucess_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sucesso! :tada:\n\n:book: Você comprou [\`10\`] iscas por [\`50\`] Garfos. :paperclip:**`)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())

const sem_din_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sem garfos\n\n**\`Você precisa ter acima de 50 garfos para comprar iscas de pesca.\``)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
if(db.val().garfos < 50)return msg.edit({embeds: [sem_din_1]})
eu.update({
  garfos: db.val().garfos - 50,
  iscas: db.val().iscas + 10
})

msg.edit({embeds: [sucess_1]})
})
})

porco.on("collect", (x) => {
porco.stop()

let usery = interaction.options.getUser('membro')
let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {

const sucess_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sucesso! :tada:\n\n:book: Você comprou [\`1\`] porco por [\`500\`] Garfos. :paperclip:**`)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())

const sem_din_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sem garfos\n\n**\`Você precisa ter acima de 500 garfos para comprar um porco.\``)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
if(db.val().garfos < 500)return msg.edit({embeds: [sem_din_1]})
eu.update({
  garfos: db.val().garfos - 500,
  porcos: db.val().porcos + 1
})

msg.edit({embeds: [sucess_1]})
})
})
galinha.on("collect", (x) => {
galinha.stop()

let usery = interaction.options.getUser('membro')
let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {

const sucess_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sucesso! :tada:\n\n:book: Você comprou [\`1\`] galinha por [\`500\`] Garfos. :paperclip:**`)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())

const sem_din_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sem garfos\n\n**\`Você precisa ter acima de 500 garfos para comprar uma galinha.\``)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
if(db.val().garfos < 500)return msg.edit({embeds: [sem_din_1]})
eu.update({
  garfos: db.val().garfos - 500,
  galinhas: db.val().galinhas + 1
})

msg.edit({embeds: [sucess_1]})
})
})

up.on("collect", (x) => {
up.stop()

let usery = interaction.options.getUser('membro')
let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {

const sucess_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sucesso! :tada:\n\n:book: Você upou sua fazendo por [\`2.000\`] Garfos. :paperclip:**`)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())

const sem_din_1 = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**:star: Sem garfos\n\n**\`Você precisa ter acima de 2.000 garfos para upar sua fazenda.\``)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
if(db.val().garfos < 2000)return msg.edit({embeds: [sem_din_1]})
eu.update({
  garfos: db.val().garfos - 2000,
  fazenda: db.val().fazenda + 1
})
msg.edit({embeds: [sucess_1]})
})
})

})
}
})
}
}