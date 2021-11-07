const Discord = require("discord.js");
const c = require("../../infs")
module.exports = {
    name: "apostar",
    description: "Aposte contra as pessoas.",
    type: 'CHAT_INPUT',
  options: [{
        name: 'membro',
        type: 'USER',
        description: 'Selecione um membro para apostar.',
        required: true,
    },
    {
        name: 'quântia',
        type: 'NUMBER',
        description: 'Selecione uma quântia para apostar.',
        required: true,
    },
],
    run: async (client, interaction, args) => {
      //return interaction.followUp(`:star: Infelizmente esse comando está em manutenção. Aguarde...`)

const firebase = require('firebase'); const database = firebase.database();
let usera = interaction.options.getUser('membro'); let user = usera

let din = interaction.options.getNumber('quântia');
if(din < 0 || din === 0){
  const er3 = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não se pode apostar valores abaixo ou igual a 0!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [er3]})

}

const err6 = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`😎 **${interaction.user} Não se pode apostar com um bot! Eu sei que é triste não ter amigos, mas regras são regras.**⭐`)
const erroz = new Discord.MessageEmbed()
.setTitle(`****⭐ \`|\` __Algo deu errado__****`)
.setColor("RED")
.setDescription(`**️️️️️️☄️ Tente usar:**\n\`/apotar <pessoa> <valor>\`\n**🍆 Ex:**\n\`/apostar @JeffinBR#7203 100 \`\n**🧰 Sobre esse comando:**\n\`Com esse comando você pode apostar Garfos com as pessoas! (Garfos são as moedas do MrBoby).\nComando criado em: 01/10/2021\`\n**🕯️ Aliases:**\n\`ap\`, \`bet\`, \`apostar\``)
if(!user) return interaction.followUp({embeds: [erroz]})
if(!din) return interaction.followUp({embeds: [erroz]})
if(isNaN(din)) return interaction.followUp({embeds: [erroz]})
if(usera.bot)return interaction.followUp({embeds: [err6]})
let ele = database.ref(`eco/${user.id}`)
let eu = database.ref(`eco/${interaction.user.id}`)
let clxp = database.ref(`cooldown/${interaction.user.id}`)
let clx = database.ref(`cooldown/${user.id}`)
database.ref(`pessoal/${user.id}`)
.once('value').then(async function(pas) {
database.ref(`eco/${interaction.user.id}`).once('value').then(async function(db) {
database.ref(`eco/${user.id}`).once('value').then(async function(dbx) {
database.ref(`cooldown/${interaction.user.id}`).once('value').then(async function(cx) {
database.ref(`cooldown/${user.id}`).once('value').then(async function(cl) {  

  if(dbx.val() == null){
  const embedu = new Discord.MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não é possível apostar com pessoas que nunca usaram meus comandos!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [embedu]})
}
if(pas.val().black > 1){
  const embeduu = new Diiscord.MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não é possível ver o inventário de pessoas levaram BobyBan!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [embeduu]})
}

const er1 = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`😎 **${interaction.user} Não se pode apostar valores abaixo de \`0 Garfos\`!**⭐`)
if(din < 0) return interaction.followUp({embeds: [er1]})
const err1 = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`😎 **${interaction.user} Parece que ${user} não possui \`${din} Garfos\`!**⭐`)


const err4 = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`😎 **${user} Parece que ${interaction.user} não possui \`${din} Garfos\`!**⭐`)
const err5 = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`😎 **${interaction.user} Não se pode apostar com si mesmo! Eu sei que é triste não ter amigos, mas regras são regras.**⭐`)
if(dbx.val().garfos < parseInt(din)) {
return interaction.followUp({embeds: [err1]})}
if(usera.id == interaction.user.id) return interaction.followUp({embeds: [err5]})

if(db.val().garfos < parseInt(din)){
return interaction.followUp({embeds: [err4]})}

if(parseInt(din) < 0){ 
return interaction.followUp({embeds: [erroz]})}

const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`**🎉 ${interaction.user} Esta chamando ${user} para apostar!\n\n** 💸 Valor da aposta: \`${din} Garfos\`\n🔖 Participantes: \`${interaction.user.tag}\` e \`${user.tag}\`\n:star: Basta \`${user.tag}\` apertar a reação para a aposta rolar.`)
.setThumbnail(c.thumb)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())



interaction.followUp({embeds: [embed]}).then(msg => {
msg.react('891443113225252876')

let usera = interaction.options.getUser('membro')

let filtro_6 = (r, u) => r.emoji.name === 'play' && u.id === usera.id; 
let coletor = msg.createReactionCollector({ filter: filtro_6});


coletor.on("collect", (x) => {
let usery = interaction.options.getUser('membro')


  let ele = database.ref(`eco/${usery.id}`)
let eu = database.ref(`eco/${interaction.user.id}`)
let clxp = database.ref(`cooldown/${interaction.user.id}`)
let clx = database.ref(`cooldown/${usery.id}`)
let ele_inf = database.ref(`eco/profi/${usery.id}`)
let eu_inf = database.ref(`eco/profi/${interaction.user.id}`)
 
database.ref(`pessoal/${usery.id}`)
.once('value').then(async function(pas) {
  database.ref(`eco/profi/${usery.id}`)
.once('value').then(async function(pro) {
  database.ref(`eco/profi/${interaction.user.id}`)
.once('value').then(async function(pro2) {

database.ref(`eco/${interaction.user.id}`).once('value').then(async function(dba) {
database.ref(`eco/${usery.id}`).once('value').then(async function(dby) {
database.ref(`cooldown/${interaction.user.id}`).once('value').then(async function(cx) {
database.ref(`cooldown/${usery.id}`).once('value').then(async function(cl) { 
const err2 = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`😎 **${interaction.user} Parece que ${user} não possui mais \`${din} Garfos\`!**⭐`)
const err3 = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`😎 **${user} Parece que ${interaction.user} não possui mais \`${din} Garfos\`!**⭐`)
if(dby.val().garfos < parseInt(din)) {
return interaction.followUp({embeds: [err2]})}
if(dba.val().garfos < parseInt(din)){
return interaction.followUp({embeds: [err3]})}
var list = ['2','1']
var rand = list[Math.floor(Math.random() * list.length)];

ele_inf.update({
  apostas: pro.val().apostas + 1
})
eu_inf.update({
  apostas: pro2.val().apostas + 1
})

if(rand === '1'){

ele.update({garfos: dby.val().garfos + parseInt(din)})
eu.update({garfos: dba.val().garfos - parseInt(din)})

const ele_ganhou = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`:tada: **${user} Saiu vitorioso na aposta de ${interaction.user}!**⭐`)
interaction.followUp({content: `:star: ${user} ${interaction.user}`,embeds: [ele_ganhou]}) } else {

ele.update({garfos: dby.val().garfos - parseInt(din)})
eu.update({garfos: dba.val().garfos + parseInt(din)})


const eu_ganhei = new Discord.MessageEmbed()
.setColor(c.color)
.setDescription(`:tada: **${interaction.user} Saiu vitorioso na aposta!**⭐`)
interaction.followUp({content: `:star: ${interaction.user} ${user}`,embeds: [eu_ganhei]})}
if(dby.val().garfos < 0){

ele.set({garfos: 0})}

if(dba.val().garfos < 0){

eu.set({garfos: 0})}

coletor.stop()

})})})})})})})
})})
})})})})})
}
}