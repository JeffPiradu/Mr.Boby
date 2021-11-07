const Discord = require("discord.js");
const c = require("../../infs")
module.exports = {
    name: "daily",
    description: "Pegue seus Garfos diários.",
    type: 'CHAT_INPUT',


    run: async (client, interaction, args) => {
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
let eu_inf = database.ref(`eco/profi/${interaction.user.id}`)



let timeout = 86400000;
let author = await cl.val().daily
if(author !== null && timeout - (Date.now() - author) > 0){
let time = ms(timeout - (Date.now() - author));
const cooldown = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`**> :star: Próximo daily em:\nHora(s): \`[${time.hours}]\`\nMinuto(s): \`[${time.minutes}]\`\nSegundo(s): \`[${time.seconds}]\` **`)

return interaction.followUp({embeds: [cooldown]})
} else {
let valor1 = 100
if(db.val().fazenda > 2 && db.val().fazenda < 4) valor1 = 200
if(db.val().fazenda > 5 && db.val().fazenda < 9) valor1 = 500
if(db.val().fazenda > 10 && db.val().fazenda < 20) valor1 = 1000
if(db.val().fazenda > 20) valor1 = 2000


dcx.update({
daily: Date.now()
})
let rand = Math.floor(Math.random() * 400) + valor1

dx.update({
  garfos: db.val().garfos + rand
})



const xx = new Discord.MessageEmbed()
.setColor(c.color)
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`:star: **${interaction.user} Você pegou seu daily e conseguiu [\`${rand}\`] Garfos.!**`)
.setThumbnail("https://cdn.discordapp.com/emojis/891457005133385748.png?size=2048")


interaction.followUp({embeds: [xx]})

  database.ref(`eco/profi/${interaction.user.id}`)
.once('value').then(async function(pro) {

eu_inf.update({
dailys: pro.val().dailys +1
})
})
}

})
})

    },
};