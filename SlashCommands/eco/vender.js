const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Canvas = require("canvas")
const Discord = require("discord.js")
const c = require("../../infs")



module.exports = {
    name: "vender",
    description: "Venda seus itens.",
    type: 'CHAT_INPUT',
 

run: async (client, interaction, args) => {
  
let user = interaction.user

const firebase = require('firebase');
const database = firebase.database();

let eco = database.ref(`pessoal/${user.id}`)
database.ref(`pessoal/${user.id}`)
.once('value').then(async function(db) {

let embed_1 = new Discord.MessageEmbed()
.setColor(c.color)
.setTitle(`**:bookmark: Feira**`)
.setDescription(`\n🐟 \`1\` Peixe = \`3G$\`\n🍄 \`1\` Verdura = \`3G$\`\n🐓 \`1\` Galinha = \`300G$\`\n🐷 \`1\` Porco = \`400G$\``)
let painel = new Discord.MessageActionRow().addComponents( new Discord.MessageSelectMenu()
.setCustomId('menu')
.setPlaceholder(`Vender`) 
.addOptions([
{
label: 'Peixes',
emoji: '🐟',
value: 'peixes',
},
{
label: `Verduras`,
emoji: '891494843312910376',
value: 'verduras',
},
{
label: `Porcos`,
emoji: '🐷',
value: 'porcos',
},
{
label: `Galinhas`,
emoji: '🐔',
value: 'galinhas',
},
{
label: `Voltar`,
emoji: '⭐',
value: 'back',
},

])
);


interaction.followUp({ content: `${interaction.user}`, embeds: [embed_1], components: [painel] }).then(msg => {

const filtro = (interaction) => 
interaction.isSelectMenu()
const coletor = msg.createMessageComponentCollector({
filtro
});

coletor.on('collect', async (collected) => {
if(collected.user.id != interaction.user.id) return collected.reply({ content: `:x: \`|\` **Somente a pessoa que executou o comando (\`${interaction.user.tag}\`) pode interagir com ele.**`, ephemeral: true });
let valor = collected.values[0]
collected.deferUpdate()

if (valor === 'peixes') {

let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {


const err = new MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:x: Erro.**`)
.setDescription(`\n**:star: [\`${user.tag}\`] Parece que você não possui peixes para vender! :bookmark:**`)

if(db.val().peixes < 1) return msg.edit({embeds: [err]}) 

let din_ganho = db.val().peixes * 3
eu.update({
  peixes: 0,
  garfos: db.val().garfos + din_ganho
})

const sucess = new MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:star: Venda!**`)
.setDescription(`\n**:tada: [\`${user.tag}\`] Acaba de vender \`${db.val().peixes}\` peixe(s) por \`${din_ganho}\` Garfos! :bookmark:**`)
msg.edit({embeds: [sucess]})

})
}

if (valor === 'verduras') {

let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {


const err = new MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:x: Erro.**`)
.setDescription(`\n**:star: [\`${user.tag}\`] Parece que você não possui verduras para vender! :bookmark:**`)

if(db.val().verduras < 1) return msg.edit({embeds: [err]}) 

let din_ganho = db.val().verduras * 3
eu.update({
  verduras: 0,
  garfos: db.val().garfos + din_ganho
})

const sucess = new MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:star: Venda!**`)
.setDescription(`\n**:tada: [\`${user.tag}\`] Acaba de vender \`${db.val().verduras}\` verdura(s) por \`${din_ganho}\` Garfos! :bookmark:**`)
msg.edit({embeds: [sucess]})

})
}
if (valor === 'porcos') {

let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {


const err = new MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:x: Erro.**`)
.setDescription(`\n**:star: [\`${user.tag}\`] Parece que você não possui porcos para vender! :bookmark:**`)

if(db.val().porcos < 1) return msg.edit({embeds: [err]}) 

let din_ganho = db.val().porcos * 400
eu.update({
  porcos: 0,
  garfos: db.val().garfos + din_ganho
})

const sucess = new MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:star: Venda!**`)
.setDescription(`\n**:tada: [\`${user.tag}\`] Acaba de vender \`${db.val().porcos}\` porco(s) por \`${din_ganho}\` Garfos! :bookmark:**`)
msg.edit({embeds: [sucess]})

})
}
if (valor === 'galinhas') {

let eu = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`).once('value').then(async function(db) {


const err = new MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:x: Erro.**`)
.setDescription(`\n**:star: [\`${user.tag}\`] Parece que você não possui galinhas para vender! :bookmark:**`)

if(db.val().galinhas < 1) return msg.edit({embeds: [err]}) 

let din_ganho = db.val().galinhas * 300
eu.update({
 galinhas: 0,
  garfos: db.val().garfos + din_ganho
})

const sucess = new MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:star: Venda!**`)
.setDescription(`\n**:tada: [\`${user.tag}\`] Acaba de vender \`${db.val().galinhas}\` galinha(s) por \`${din_ganho}\` Garfos! :bookmark:**`)
msg.edit({embeds: [sucess]})

})
}


if(valor === 'back') {
let cu = new Discord.MessageEmbed()
.setColor(c.color)
.setTitle(`**:bookmark: Feira**`)
.setDescription(`\n🐟 \`1\` Peixe = \`3G$\`\n🍄 \`1\` Verdura = \`3G$\`\n🐓 \`1\` Galinha = \`300G$\`\n🐷 \`1\` Porco = \`400G$\``)

msg.edit({embeds: [cu]})

}

})
})
})
    },
};