const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const c = require("../../infs")
module.exports = {
    name: "atm",
    description: "Veja seu inventário.",
    type: 'CHAT_INPUT',
  options: [{
        name: 'membro',
        type: 'USER',
        description: 'Selecione um membro para ver os itens.',
        required: false,
    }],

run: async (client, interaction, args) => {
  
const user = interaction.options.getUser('membro') || interaction.user

const firebase = require('firebase');
const database = firebase.database();
const embed2 = new MessageEmbed()
.setColor(c.color)

.setDescription(`:star: Usuário registrado no sistema de fazenda.\`\`\`diff\n+ Tente usar esse comando novamente.\`\`\``)
.setThumbnail(c.thumb)
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
.setDescription(`<:er2:891445091686834216> **Não é possível ver o inventário de pessoas que nunca usaram meus comandos!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [embedu]})
}
if(pas.val().black > 1){
  const embeduu = new MessageEmbed()
  .setColor(c.color)
.setDescription(`<:er2:891445091686834216> **Não é possível ver o inventário de pessoas levaram BobyBan!**:star:`)
.setAuthor(user.tag, user.displayAvatarURL())
  return interaction.followUp({embeds: [embeduu]})
}
const embed = new MessageEmbed()
.setColor(c.color)
.setThumbnail("https://cdn.discordapp.com/attachments/857372576036683776/892439891537977365/5635336.png")
.setAuthor(user.tag, user.displayAvatarURL())
.setDescription(`> 🪙 \`|\` Garfos:\`${db.val().garfos}\`\n> <:enxada:892450044555456562>  \`|\` Enxadas:\`${db.val().enxadas}\`\n> <:vara:892449282366504991> \`|\` Vara de pesca:\`${db.val().vara}\`\n> <:fazenda:891494843312910376> \`|\` Verduras:\`${db.val().verduras}\`\n> 🍬 \`|\` Sementes:\`${db.val().sementes}\`\n> <:mongodb:891444744222294056> \`|\` Fazenda nível:\`${db.val().fazenda}\`\n> 🐷 \`|\` Porcos:\`${db.val().porcos}\`\n> 🐔 \`|\` Galinhas:\`${db.val().galinhas}\`\n> 🪱 \`|\` Iscas:\`${db.val().iscas}\`\n> 🐠 \`|\` Peixes:\`${db.val().peixes}\``)
interaction.followUp({content: `<:pin:891444950879854652> **Inventário de** ${user}`, embeds: [embed]})
})
})
})
})

        


    },
};