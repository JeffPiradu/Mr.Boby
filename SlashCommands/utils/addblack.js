const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const c = require("../../infs")
module.exports = {
    name: "addblack",
    description: "Adicione alguém na minha lista negra.",
    type: 'CHAT_INPUT',
  options: [{
        name: 'membro',
        type: 'USER',
        description: 'Selecione um membro para adicionar na minha black-list.',
        required: true,
    },
    {
        name: 'motivo',
        type: 'STRING',
        description: 'Motivo.',
        required: true,
    },
    ],

run: async (client, interaction, args) => {
  
const user = interaction.options.getUser('membro') || interaction.user
const motivo = interaction.options.getString('motivo') || 'Sem motivo'

if(interaction.user.id !== '857360582158974987')return interaction.followUp(":book: Somente meu dono pode usar esse comando.")
const firebase = require('firebase');
const database = firebase.database();
 
let pessoal = database.ref(`pessoal/${user.id}`)
database.ref(`pessoal/${user.id}`)
.once('value').then(async function(pas) {

pessoal.update({
  black: 10,
  motivBlack: `${motivo}`
})

interaction.followUp(`**:star: Usuário adicionado na minha lista negra.:book:**`)
})

    },
};
