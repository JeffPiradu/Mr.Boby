const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const c = require("../../infs")
module.exports = {
    name: "embed",
    description: "Cria um embed com o texto citado.",
    type: 'CHAT_INPUT',
  options: [{
        name: 'texto',
        type: 'STRING',
        description: 'Escreva um texto.',
        required: true,
    }],


run: async (client, interaction, args) => {
        if(!interaction.member.permissions.has("MANAGE_MESSAGES")) {
    return interaction.followUp("**:bookmark: Você não tem permissão para usar esse comando.**")
  }
const texto = interaction.options.getString('texto')
  if(texto.length > 400)  return interaction.followUp("**:bookmark: Coloque um texto menor.**")

const xx = new MessageEmbed()
.setColor(c.color)
.setFooter(interaction.user.username, interaction.user.displayAvatarURL())
.setDescription(`${texto}`)

interaction.followUp({embeds: [xx]})
    },
};
