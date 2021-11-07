const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const Canvas = require("canvas")
const Discord = require("discord.js")
const c = require("../../infs")



module.exports = {
    name: "plantação",
    description: "Plante e colha verduras da sua fazenda.",
    type: 'CHAT_INPUT',
 

run: async (client, interaction, args) => {
  
const user = interaction.user

const firebase = require('firebase');
const database = firebase.database();

let eco = database.ref(`eco/${user.id}`)
database.ref(`eco/${user.id}`)
.once('value').then(async function(db) {
database.ref(`cooldown/${user.id}`)
.once('value').then(async function(clp) {

let desc = `<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>`

if(db.val().plant === "on"){
 desc = `<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n**:star: As mudas ainda estão nascendo.**`

}
let timeout = 280000;
let author = await clp.val().plant
if(author !== null && timeout - (Date.now() - author) > 0){
} else {
if(db.val().plant === "on"){
desc = `<:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744>\n<:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744>\n<:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744>\n <:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744><:terra:892056290627571744>\n<:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744>\n:star: **Plantação Madura**`
}
}

let embed_1 = new Discord.MessageEmbed()
.setColor(c.color)
.setTitle(`<:owner:897171072376528946> - Sua plantação`)
.setDescription(desc)
.setFooter(user.tag, user.displayAvatarURL())

let painel = new Discord.MessageActionRow().addComponents( new Discord.MessageSelectMenu()
.setCustomId('menu')
.setPlaceholder(`Plantar / Colher`) 
.addOptions([
{
label: 'Plantar',
emoji: '897168559342485527',
value: 'plantar',
},

{
label: `Colher`,
emoji: '897167771304091668',
value: 'colher',
},
{
label: `Voltar`,
emoji: '897171125233127424',
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






if (valor === 'plantar') {

 const user =  interaction.user
function ms(ms) {
const seconds = ~~(ms/1000)
const minutes = ~~(seconds/60)
const hours = ~~(minutes/60) 
const days = ~~(hours/24)

return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }
}




const firebase = require('firebase');
const database = firebase.database();
let usera = user
let dx = database.ref(`eco/${usera.id}`)
let dcx = database.ref(`cooldown/${usera.id}`)
database.ref(`eco/${usera.id}`)
.once('value').then(async function(db) {
  database.ref(`cooldown/${usera.id}`)
.once('value').then(async function(cl) {


  const cc = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`<:er2:891445091686834216> **Erro.** \`Você não possui uma enxada. Tente comprar uma usando o comando de loja.\``)


  const cc1 = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`<:er2:891445091686834216> **Erro**.\n\`Você só poderá plantar novamente quando coletar suas verduras no /colher.\``)


  const cc2 = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`<:er2:891445091686834216> **Erro**.\n\`Você precisa ter acima de 20 semmentes para plantar.\``)


if(db.val().plant === "on") return msg.edit({embeds: [cc1]})
if(db.val().sementes < 20) return msg.edit({embeds: [cc2]})
if(db.val().enxadas < 1) return msg.edit({embeds: [cc]})


dcx.update({
plant: Date.now()
})

dx.update({
  sementes: db.val().sementes - 20,
  plant: 'on'
})

let eu_inf = database.ref(`eco/profi/${interaction.user.id}`)
  database.ref(`eco/profi/${interaction.user.id}`)
.once('value').then(async function(pro) {

eu_inf.update({
planta: pro.val().planta +1
})
})


const xx = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n**:star: Você plantou [\`20\`] sementes.:tada:**`) 
msg.edit({embeds: [xx]})

 desc = `<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n**:star: As mudas ainda estão nascendo.**`

})

})

}
if (valor === 'colher') {
  
 const user =  interaction.user
function ms(ms) {
const seconds = ~~(ms/1000)
const minutes = ~~(seconds/60)
const hours = ~~(minutes/60) 
const days = ~~(hours/24)

return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }
}

  const cc = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`> <:er2:891445091686834216> **\`|\` Erro!.**\n\`É preciso ter uma enxada para colher verduras.\``)


const firebase = require('firebase');
const database = firebase.database();
let usera = user
let dx = database.ref(`eco/${usera.id}`)
let dcx = database.ref(`cooldown/${usera.id}`)
database.ref(`eco/${usera.id}`)
.once('value').then(async function(db) {
database.ref(`cooldown/${usera.id}`)
.once('value').then(async function(cl) {
let eu_inf = database.ref(`eco/profi/${interaction.user.id}`)


const cc1 = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`> <:er2:891445091686834216> ** Erro!.** :star:\n \`Você não plantou nenhuma semente em sua fazenda!\``)

if(db.val().enxada < 1) return msg.edit({embeds: [cc]})
if(db.val().plant === 'off') return msg.edit({embeds: [cc1]})


let timeout = 280000;
let author = await cl.val().plant
if(author !== null && timeout - (Date.now() - author) > 0){
let time = ms(timeout - (Date.now() - author));

const cooldown = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n**:star: A sua plantação está nascendo.\nEspere: \`[${time.minutes}] Minuto(s)\` e \`[${time.seconds}] Segundo(s)\`**`)
return msg.edit({embeds: [cooldown]})
} else {



if(db.val().enxadas < 1) return msg.edit({embeds: [cc]})
dcx.update({
plant: 0,
})



let valor1 = 30
let valor2 = 15
if(db.val().fazenda > 2 && db.val().fazenda < 6) {
  valor1 = 40,
  valor2 = 20
  
}
if(db.val().fazenda > 7 && db.val().fazenda < 15) {
  valor1 = 80,
  valor2 = 40
}

if(db.val().fazenda > 16 && db.val().fazenda < 25){
  valor1 = 120,
  valor2 = 80
  
}
if(db.val().fazenda > 27){
  valor1 = 240,
  valor2 = 120
}


let rand = Math.floor(Math.random() * 60) + valor1
let rand2 = Math.floor(Math.random() * 10) + valor2


dx.update({
  sementes: db.val().sementes + rand2,
  plant: 'off',
verduras: db.val().verduras + rand
})
let footer = "Você saiu lucrando nessa colheita!"
if(rand > 30 && rand < 60){
  footer = "Sua enxada quebrou."
dx.update({
enxadas: db.val().enxadas - 1 
})  
}
const xx = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`<:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744>\n<:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744>\n<:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744>\n <:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744><:terra:892056290627571744>\n<:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra1:892056169567371314><:terra:892056290627571744>\n**:tada: Você colheu sua plantação e ganhou:\n🍬 Sementes: \`[${rand2}]\`\n<:fazenda:891494843312910376> Verduras: \`[${rand}]\`\n<:caixa:891453217936928808> Status da colheita: \`${footer}\`**`)
msg.edit({embeds: [xx]})
desc = `<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>\n<:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744><:terra:892056290627571744>`


  database.ref(`eco/profi/${interaction.user.id}`)
.once('value').then(async function(pro) {

eu_inf.update({
planta: pro.val().planta + 1
})
})


}


})
})

}
if (valor === 'back') {
  let embed_11 = new Discord.MessageEmbed()
.setColor(c.color)
.setTitle(`<:owner:897171072376528946> - Sua plantação`)
.setDescription(desc)
.setFooter(user.tag, user.displayAvatarURL())
  msg.edit({embeds: [embed_11]})
  }
})
})






})
})
    },
};