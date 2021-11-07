
const Discord = require("discord.js");
const config = require("../../infs.js")
const moment = require("moment");
moment.locale('pt-BR')
module.exports = {
    name: "userinfo",
    description: "Veja as informações de um usuário",
    type: 'CHAT_INPUT',
  options: [{
        name: 'membro',
        type: 'USER',
        description: 'Selecione um membro para ver as informações.',
        required: false,
    }],

    run: async (client, interaction, args) => {
  
 let user1 = interaction.options.getUser('membro') 
 if(!user1)user1 = interaction.user
 
   let membro1 = user1;
 
   let avatar = membro1.displayAvatarURL({format: "png"})
     const embed = new Discord.MessageEmbed()
   .setAuthor(`Informaçõe de ${membro1.username}`,`https://cdn.discordapp.com/emojis/891443887170781184.png?size=96`)
   .setThumbnail(avatar)
   .setColor(config.color)
   .addField('<:pin:891444950879854652> Nome:', `\`${membro1.tag}\``)
   .addField(`<:config:891454877287452672> Conta criada em:`,`\`${moment.utc(membro1.createdAt).format("LLL")}\``, true)
.addField(`<:info:891445188290027662> ID`, `\`${membro1.id}\``, true)

   interaction.followUp({embeds: [embed]});
    },
};