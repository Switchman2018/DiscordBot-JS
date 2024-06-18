const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Provides info about the user'),
    async execute(interaction) {
        // interaction.user is the object representing the user who invoked the command
        // interaction.member is the object representing the guild member who invoked the command
        await interaction.reply('This command was invoked by '+ interaction.user.username);
    },
};