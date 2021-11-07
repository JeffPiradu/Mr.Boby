const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const c = require("../../infs")
module.exports = {
    name: "pay",
    description: "Pague alguém.",
    type: 'CHAT_INPUT',
  options: [
    {
        name: 'membro',
        type: 'USER',
        description: 'Selecione um membro para pagar.',
        required: true,
    },
        {
        name: 'quântia',
        type: 'NUMBER',
        description: 'Selecione uma quântia.',
        required: true,
    },

    ],

run: async (client, interaction, args) => {

const user = interaction.options.getUser('membro')
const din = interaction.options.getNumber('quântia')
console.log(din)


const firebase = require('firebase');
const database = firebase.database();
const embed2 = new MessageEmbed()
.setColor(c.color)
.setDescription(`:star: Usuário registrado no sistema de fazenda.\`\`\`diff\n+ Tente usar esse comando novamente.\`\`\``)
.setThumbnail(c.thumb)


let ele = database.ref(`eco/${user.id}`)
let eu = database.ref(`eco/${interaction.user.id}`)

database.ref(`eco/${interaction.user.id}`)
.once('value').then(async function(db) {



database.ref(`eco/${user.id}`)
.once('value').then(async function(dbs) {

database.ref(`pessoal/${user.id}`)
.once('value').then(async function(pas) {


if(dbs.val() == null){
  const embedu = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não é possível pagar pessoas que nunca usaram meus comandos!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [embedu]})
}

if(pas.val().black > 1){
  const embeduu = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não é possível pagar pessoas que levaram BobyBan!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [embeduu]})
}
if(din < 100){
  const er1 = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não se pode pagar valores abaixo de \`100\`. Porque eu preciso cobrar 50 Garfos de taxa por pagamento.**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [er1]})
}
if(user.id === interaction.user.id){
  const er3 = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não é possível se pagar.:book:**`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [er3]})
}
if(db.val().garfos < din){
    const er2 = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Parece que você não possui \`${din}\` Garfos!**:star:`)
.setAuthor(interaction.user.tag, interaction.user.displayAvatarURL())
  return interaction.followUp({embeds: [er2]})
}
if(din < 0 || din === 0){
  const er3 = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não se pode pagar valores abaixo ou igual a 0!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [er3]})

}
eu.update({
  garfos: db.val().garfos - parseInt(din)
})
ele.update({
  garfos: db.val().garfos + parseInt(din)
})
const sucess = new MessageEmbed()
.setAuthor(user.tag, user.displayAvatarURL())
.setColor(c.color)
.setTitle(`💸 - Pagamento`)
.setDescription(`\n:tada: \`${interaction.user.tag}\` Pagou \`[${din - 50}] Garfos\` para \`${user.tag}\` :star:\n:book: Cada pagamento exige 50 garfos de taxa.`)

let eu_inf = database.ref(`eco/profi/${interaction.user.id}`)
  database.ref(`eco/profi/${interaction.user.id}`)
.once('value').then(async function(pro) {

eu_inf.update({
pagamentos: pro.val().pagamentos + 1,
})
})
interaction.followUp({embeds: [sucess]})

})
})
})



}
}