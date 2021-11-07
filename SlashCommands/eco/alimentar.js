const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Canvas = require("canvas")
const Discord = require("discord.js")
const c = require("../../infs")



module.exports = {
    name: "alimentar",
    description: "Alimente seus animais.",
    type: 'CHAT_INPUT',
 

run: async (client, interaction, args) => {
  
const user = interaction.user

const firebase = require('firebase');
const database = firebase.database();

let eco = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`)
.once('value').then(async function(db) {

let embed_1 = new Discord.MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:bookmark: Alimentação.**`)
.setDescription(`\n🐷 \`1\` Porco come \`40\` verduras.\n🐔 \`1\` Galinha come \`20\` sementes.`)

let painel = new Discord.MessageActionRow().addComponents( new Discord.MessageSelectMenu()
.setCustomId('menu')
.setPlaceholder(`Escolha um animal para alimentar.`) 
.addOptions([
{
label: 'Porco(s)',
emoji: '🐷',
value: 'porco',
},
{
label: `Galinha(s)`,
emoji: '🐔',
value: 'galinha',
},
{
label: `Voltar`,
emoji: '🛡️',
value: 'voltar',
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

if (valor === 'porco') {

let ec = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`)
.once('value').then(async function(dbx) {

let unit = parseInt(dbx.val().porcos * 40)

let err2 = new Discord.MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:bookmark: Erro.**`)
.setDescription(`\n:star: Você não possui nenhum porco.`)

let err1 = new Discord.MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:bookmark: Erro.**`)
.setDescription(`\n:star: Você precisa ter \`${unit}\` verduras para alimentar todos seus porcos.`)
if(dbx.val().verduras < unit) return msg.edit({embeds: [err1]})

if(dbx.val().porcos < 1) return msg.edit({embeds: [err2]})



let desc = `Um de seus porcos teve um filhote! +1 Porco em sua fazenda.`
let porcos =dbx.val().porcos
if(dbx.val().porcos < 2 ){
 desc = `Nenhum porco teve filhote.\nVocê precisa ter acima de 2 porcos para que eles se acasalem.`
  
} else{ 
  ec.update({
    porcos: dbx.val().porcos + 1,
    verduras: dbx.val().verduras - unit 
  })
  desc = `Um de seus porcos teve um filhote! +1 Porco em sua fazenda.`
}

let sucess = new Discord.MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:tada: Alimentação.**`)
.setDescription(`\n:star: Você alimentou \`${porcos}\` porcos e gastou \`${unit}\` verduras.\n:bookmark: Status: \`${desc}\``)
msg.edit({embeds: [sucess]})
})
}

if (valor === 'galinha') {

let user = interaction.user
let ec = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`)
.once('value').then(async function(dbx) {

let unit = parseInt(dbx.val().galinhas * 20)

let err2 = new Discord.MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:bookmark: Erro.**`)
.setDescription(`\n:star: Você não possui nenhuma galinha.`)

let err1 = new Discord.MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:bookmark: Erro.**`)
.setDescription(`\n:star: Você precisa ter \`${unit}\` sementes para alimentar todas suas galinhas.`)
if(dbx.val().sementes < unit) return msg.edit({embeds: [err1]})

if(dbx.val().galinhas < 1) return msg.edit({embeds: [err2]})



let desc = `Uma de suas galinhas chocou um pintinho! +1 Galinha em sua fazenda.`

let galinhas = dbx.val().galinhas
 
  ec.update({
    galinhas: dbx.val().galinhas + 1,
    sementes: dbx.val().sementes - unit 
  })

let sucess = new Discord.MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:tada: Alimentação.**`)
.setDescription(`\n:star: Você alimentou \`${galinhas}\` galinhas e gastou \`${unit}\` sementes.\n:bookmark: Status: \`${desc}\``)
msg.edit({embeds: [sucess]})
})
}

if (valor === 'voltar') {
  
let asas = new Discord.MessageEmbed()
.setColor(c.color)
.setFooter(user.tag, user.displayAvatarURL())
.setTitle(`**:bookmark: Alimentação.**`)
.setDescription(`\n🐷 \`1\` Porco come \`40\` verduras.\n🐔 \`1\` Galinha come \`20\` sementes.`)

msg.edit({embeds: [asas]})

}


})
})







})
    },
};