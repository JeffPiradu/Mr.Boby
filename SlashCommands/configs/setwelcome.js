const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const c = require("../../infs")
module.exports = {
    name: "setwelcome",
    description: "Selecione um canal para receber mensagens de boas vindas",
    type: 'CHAT_INPUT',
  options: [{
        name: 'canal',
        type: 'CHANNEL',
        channelTypes: ['GUILD_TEXT'],
        description: 'Selecione um canal para receber mensagens de boas vindas.',
        required: true,
    }],


run: async (client, interaction, args) => {
        if(!interaction.member.permissions.has("MANAGE_GUILD")) {
    return interaction.followUp("**:bookmark: Você não tem permissão para usar esse comando.**")
  }
const canal = interaction.options.getChannel('canal')
if(canal.type !== 'GUILD_TEXT') return interaction.followUp(`:star: Selecione um canal de texto.`)
const firebase = require('firebase');
const database = firebase.database();
 
let configs = database.ref(`configs-server/${interaction.guild.id}`)
database.ref(`configs-server/${interaction.guild.id}`)
.once('value').then(async function(db) {
if(db.val() == null) return interaction.followUp(`**:star: Algo deu errado! Tente usar esse comando novamente**`)

configs.update({
  welcome: `${canal.id}`
})

const sucess = new MessageEmbed()
.setColor(c.color)
.setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
.setTitle(`<:noti:891443887170781184> Configurações.`)
.setDescription(`**<:caixa:891453217936928808> Canal de boas vindas: ${canal}\n<:config:891454877287452672>  Aviso: Eu acabo de mandar uma mensagem de teste em ${canal}. Caso a mensagem não apareça, tente checar minha permissão de ver canal.**`)

const member = interaction.guild.members.cache.find(m => m.id === interaction.user.id)
client.emit("guildMemberAdd", member)

interaction.followUp({embeds: [sucess]})
})
  
    },
};
