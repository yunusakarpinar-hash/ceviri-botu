const {
    Client,
    GatewayIntentBits,
    EmbedBuilder
} = require('discord.js');
const fs = require('fs');
const path = require('path');
const translate = require('@iamtraction/google-translate');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));
const TOKEN = config.TOKEN;
const PREFIX = config.PREFIX;
const KOMUTLAR = config.KOMUTLAR;
const MESAJLAR = config.MESAJLAR;
const EMBEDS = config.EMBEDS;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
    console.log(`Bot Hazir! Giris yapildi: ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.content.startsWith(PREFIX)) return;
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === KOMUTLAR.YARDIM) {
        const helpEmbed = new EmbedBuilder()
            .setColor(0x0099ff)
            .setTitle(EMBEDS.YARDIM_BASLIK)
            .setDescription(EMBEDS.YARDIM_ACIKLAMA)
            .addFields(
                { 
                    name: EMBEDS.YARDIM_KULLANIM_BASLIK, 
                    value: 
                    `\`${PREFIX}${KOMUTLAR.CEVIRI} <hedef_dil_kodu> <metin>\`\n` + 
                    `Ornek: \`${PREFIX}${KOMUTLAR.CEVIRI} en Merhaba dunya, nasilsin?\`\n\n` +
                    `Populer Dil Kodlari:\n tr (Turkce), en (Ingilizce), de (Almanca), fr (Fransizca), es (Ispanyolca)`, 
                    inline: false 
                }
            )
            .setTimestamp();

        return message.channel.send({ embeds: [helpEmbed] });
    }

    if (command === KOMUTLAR.CEVIRI) {
        if (args.length < 2) {
            return message.reply(MESAJLAR.CEVIRI_KULLANIM.replace('{prefix}', PREFIX).replace('{komut}', KOMUTLAR.CEVIRI));
        }

        const hedefDil = args[0].toLowerCase();
        const metin = args.slice(1).join(' ');

        try {
            const result = await translate(metin, { to: hedefDil });

            const sourceLang = result.from.language.iso;
            const translatedText = result.text;
            
            if (!translatedText || translatedText.trim() === metin.trim() && sourceLang === hedefDil) {
                 return message.reply(`Ceviri yapilamadi veya kaynak dil zaten hedef diliniz (${hedefDil}).`);
            }

            const ceviriEmbed = new EmbedBuilder()
                .setColor(0x2ecc71)
                .setTitle(`🌐 Ceviri Sonucu`)
                .addFields(
                    { name: `Kaynak Dil (${sourceLang})`, value: metin, inline: false },
                    { name: `Hedef Dil (${hedefDil})`, value: translatedText, inline: false }
                )
                .setFooter({ text: `Ceviriyi isteyen: ${message.author.tag}` })
                .setTimestamp();

            message.channel.send({ embeds: [ceviriEmbed] });

        } catch (error) {
            console.error('Ceviri API Hatasi:', error.message);
            if (error.message.includes('API')) {
                 return message.reply(MESAJLAR.HATA_API);
            }
            return message.reply(MESAJLAR.HATA_GENEL);
        }
    }
});

client.login(TOKEN);
