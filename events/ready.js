const Discord = require('discord.js');
var clc = require("cli-colors");
var queuefile = require('../commands/music/m/queue.js');
const config = require("../config.json");
let voiceban = require("../voiceban.json");
var index = require('../index.js');
let queue = queuefile.getqueue;
const client = new Discord.Client();

module.exports = (client) => {
    console.log(clc.cyan(`${client.user.tag} działa`));
    client.user.setStatus(config.status);
    module.exports.emojiguild = client.guilds.get("488293188247879680");
    client.guilds.forEach(g => {
        if (!queue.hasOwnProperty(g.id)) queue[g.id] = {}, queue[g.id].playing = false, queue[g.id].songs = [], queue[g.id].song = {}, queue[g.id].volume = 100;
        queuefile.update(queue);
        if (!voiceban.hasOwnProperty(g.id)) voiceban[g.id] = {}, voiceban[g.id].banned = [];
    });
}