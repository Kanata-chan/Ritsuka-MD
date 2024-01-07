process.on("uncaughtException", console.error)
require('./settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const { parseMention, smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, getRandom, generateProfilePicture, reSize} = require('../lib/myfunc')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const path = require('path')
const cheerio = require('cheerio')
const PhoneNumber = require('awesome-phonenumber')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const { createHash } = require('crypto')
const similarity = require('similarity')
const acrcloud = require('acrcloud')
const acr = new acrcloud({ host: "identify-ap-southeast-1.acrcloud.com", access_key: "b1cc283b4fb72483ebb6ea9c53512331", access_secret: "xyqJGTZRTrUotaraHEjji00WBClx7RpWozywdANq"})
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const hxz = require('hxz-api');
const fdl = require("caliph-api")
const {  kompas, latinToAksara, aksaraToLatin, jadwalsholat, tiktokdl, tiktokdlv3, tiktokdlv2, instagramdl, instagramdlv2, instagramdlv3, instagramdlv4, facebookdl, facebookdlv2, lyrics, lyricsv2, youtubedl, youtubedlv2, youtubeSearch } = require('@bochilteam/scraper')
const simple = require('../lib/myfunc')
const { mediafireDl } = require('../lib/mediafire')
const textpro = require('../lib/textpro')
const { pinterest, hentai, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bahasa, readme, channel, snk }= require('../connect/help.js')
const noapi = require('../lib/api') 
const api2 = require('../lib/api2') 
const { lann } = require('../lib/lann')
const { cerpen } = require('../lib/cerpen')
const { wikiSearch } = require('../lib/wiki');
const { toAudio, toPTT} = require('../lib/converter')
const { yta, ytv } = require('../lib/y2mate')
const { covid, copid } = require('../lib/copid.js')


module.exports = Ritsuka = async(Ritsuka, m, chatUpdate, store) => {
           try {
           const { type, quotedMsg, mentioned, now, fromMe } = m
           var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowI || m.text) : ''
           var budy = (typeof m.text == 'string' ? m.text : '')
           const prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#%^&./\\Â©^]/.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~+Ã—_*!#,|`Ã·?;:%abcdefghijklmnopqrstuvwxyz%^&./\\Â©^]/gi) : '#'
           const isCmd = body.startsWith(prefix)
           const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
           const args = body.trim().split(/ +/).slice(1)
           const pushname = m.pushName || "No Name"
           const botNumber = await Ritsuka.decodeJid(Ritsuka.user.id)
           const isOwner = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
           const itsMe = m.sender == botNumber ? true : false
           const text = args.join(" ")
           const q = args.join(" ")
           const quoted = m.quoted ? m.quoted : m
           const mime = (quoted.msg || quoted).mimetype || ''
           const qmsg = (quoted.msg || quoted)
           const isMedia = /image|video|sticker|audio/.test(mime)
           const from = m.key.remoteJid
           const isGroup = m.key.remoteJid.endsWith('@g.us')
           const groupMetadata = m.isGroup ? await Ritsuka.groupMetadata(m.chat).catch(e => {}) : ''
           const groupName = m.isGroup ? groupMetadata.subject : ''
           const participants = m.isGroup ? await groupMetadata.participants : ''
           const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
           const groupOwner = m.isGroup ? groupMetadata.owner : ''
           const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
           const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
           const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
           const isNumber = x => typeof x === 'number' && !isNaN(x)
           const time = moment().tz('asia/jakarta').format("hh:mm:ss")
           const wib = moment.tz('asia/jakarta').format('hh:mm:ss')
           const wita = moment.tz('asia/makassar').format("hh:mm:ss")
           const wit = moment.tz('asia/jayapura').format("hh:mm:ss")
           const hour_now = moment().format('hh:mm:ss')
            const totalFitur = () =>{
            var mytext = fs.readFileSync("./connect/case.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
		   //TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Tengah Malam Yang Dingin🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Malam Yang Sunyi🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Sore Yang Indah🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Siang Yang Terik🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Pagi Yang Indah🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Sudah Sholat Shubuh? 🌉'
 } 
 // redmor
 let readmore = String.fromCharCode(8206).repeat(4001)
 
 // ultah, puasa, tahun baru
        const HBD = new Date('December 09, 2024 06:00:00').getTime();
        const sekarang = new Date().getTime();
        const Selisih = HBD - sekarang;
        const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
        const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
        const menuju = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
        
        const puasa = new Date('Maret 10, 2024 06:00:00').getTime();
        const sekarang1 = new Date().getTime();
        const Selisih1 = puasa - sekarang;
        const jhari1 = Math.floor(Selisih1 / (1000 * 60 * 60 * 24));
        const jjam1 = Math.floor(Selisih1 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit1 = Math.floor(Selisih1 % (1000 * 60 * 60) / (1000 * 60));
        const ddetik1 = Math.floor(Selisih1 % (1000 * 60) / 1000);
        const menuju1 = `${jhari1}Hari ${jjam1}Jam ${mmmenit1}Menit ${ddetik1}Detik`
        
        const TahunBaru = new Date('Januari 01, 2025 00:01:00').getTime();
        const sekarang2 = new Date().getTime();
        const Selisih2 = TahunBaru - sekarang;
        const jhari2 = Math.floor(Selisih2 / (1000 * 60 * 60 * 24));
        const jjam2 = Math.floor(Selisih2 % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit2 = Math.floor(Selisih2 % (1000 * 60 * 60) / (1000 * 60));
        const ddetik2 = Math.floor(Selisih2 % (1000 * 60) / 1000);
        const menuju2 = `${jhari2}Hari ${jjam2}Jam ${mmmenit2}Menit ${ddetik2}Detik`

 // TANGGAL
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
             
           let user = db.data.users[m.sender]
            try {
            m = simple.smsg(Ritsuka, m) || m
            if (!m) return
            m.exp = 0  
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
            if (!isNumber(user.afkTime)) user.afkTime = -1
            if (!('afkReason' in user))
            user.afkReason = ''
            if (!('pasangan' in user))
            user.pasangan = ''
            if (!('registered' in user))
            user.registered = false
            if (!user.registered) {
            if (!('name' in user)) 
            user.name = Ritsuka.getName(m.sender)
            if (!isNumber(user.age))
            user.age = -1
            if (!isNumber(user.regTime))
            user.regTime = -1
            if (!isNumber(user.limit))
            user.limit = 100
            if (!isNumber(user.token))
            user.token = 5
            }
            if (!isNumber(user.level)) user.level = 0
            if (!('autolevelup' in user)) user.autolevelup = true
            if (!isNumber(user.exp)) user.exp = 0
            } else global.db.data.users[m.sender] = {
            afkTime: -1,
            afkReason: '',
            pasangan: '',
            registered: false,
            name: Ritsuka.getName(m.sender),
            age: -1,
            regTime: -1,
            limit: 100,
            token: 5,
            exp: 0,
            }
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
            if (!('antilink' in chats)) chats.antilink = false
            if (!('welcome' in chats)) chats.welcome = false
            if (!('maintenance' in chats)) chats.maintenance = false
            if (!('antivionce' in chats)) chats.antivionce = false
            } else global.db.data.chats[m.chat] = {
            antivionce: false,
            antilink: false,
            maintenance: false,
            }
            } catch (err) {
            console.error(err) 
            }
            function clockString(ms) {
            let h = Math.floor(ms / 3600000)
            let m = Math.floor(ms / 60000) % 60
            let s = Math.floor(ms / 1000) % 60
            console.log({ms,h,m,s})
            return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
            }
            function msToTime(duration) {
            var milliseconds = parseInt((duration % 1000) / 100),
            seconds = Math.floor((duration / 1000) % 60),
            minutes = Math.floor((duration / (1000 * 60)) % 60),
            hours = Math.floor((duration / (1000 * 60 * 60)) % 24)    
            hours = (hours < 10) ? "0" + hours : hours
            minutes = (minutes < 10) ? "0" + minutes : minutes
            seconds = (seconds < 10) ? "0" + seconds : seconds
            return hours + " jam " + minutes + " menit " + seconds + " detik"
            }
            const pickRandom = (arr) => {
	        return arr[Math.floor(Math.random() * arr.length)]
		    }
			
			//fakealldoc
let documents = [doc1,doc2,doc3,doc4,doc5,doc6,doc7,doc8,doc9]
let docs = pickRandom(documents)

//save data 5 menit

            //randomcolor
var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffffff'];
const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
     
if (global.db.data.chats[m.chat].antivionce && m.mtype === 'viewOnceMessage') {
  const teks = `「 *Anti ViewOnce Message* 」\n➯ Name : ${m.pushName}\n➯ User : @${m.sender.split("@")[0]}\n➯ Clock : ${moment.tz('Asia/Kolkata').format('HH:mm:ss')} \n➯ Date : ${moment.tz('Asia/Kolkata').format('DD/MM/YYYY')}\n➯ MessageType : ${m.mtype}`;
  Ritsuka.sendTextWithMentions(m.chat, teks, m);
  await sleep(5000);
  m.copyNForward(m.chat, true, { readViewOnce: true })
    .catch(_ => m.reply(`Maybe it's been opened by a bot`));
}
            if (global.db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
            if (!isBotAdmins) return m.reply(mess.botAdmin)
            var gclink = (`https://chat.whatsapp.com/`+await Ritsuka.groupInviteCode(m.chat))
            var isLinkThisGc = new RegExp(gclink, 'i')
            var isgclink = isLinkThisGc.test(m.text)
            if (isAdmins && isOwner) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
            if (isgclink) return m.reply(`Link Grup Lain Terdeteksi, Link Group Ini Ternyata 😆`)
            m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
            sleep(5000)
            Ritsuka.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
            }
            for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            Ritsuka.sendTextWithMentions(m.chat, `Jangan tag dia!Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`)
            }
            if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            Ritsuka.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''} Selama ${clockString(new Date - user.afkTime)}`)
            user.afkTime = -1
            user.afkReason = ''
            }
            if (m.message) {
  // push cmd, read, dan presence
  Ritsuka.readMessages([m.key]);    
  console.log(chalk.redBright('~>', '[CMD]'), chalk.green(command || m.mtype), chalk.blueBright('From:'), chalk.yellow(pushname || '<unknown>'), chalk.blueBright('In:'), chalk.yellow(groupName || 'private chat'), chalk.blueBright('Args:'), chalk.whiteBright(args.length));
}
	if (m.message) { // auto set bio
  const fovy = speed();
  const fyvo = fovy - speed();
  const uptime = runtime(process.uptime());
  await Ritsuka.updateProfileStatus(`${namaBot} disini | Ping: ${fyvo.toFixed(4)} ms | Runtime: ${runtime(process.uptime())} | Total User : ${Object.keys(global.db.data.users).length} ( ${formatp(await fs.statSync('./src/database.json').size)} ) | Dont forget follow my instagram @tohruoffc`);
}
            const qtod = m.quoted? "true":"false"
            let motiv = await fetchJson(`https://raw.githubusercontent.com/KilluaBot/Databes/main/Random%20Text/motivasi.json`)
const motiva = pickRandom(motiv)
const downloadMp4 = async (link) => {
  try {
    await ytdl.getInfo(link)
    const mp4FilePath = `./src/video.mp4`
    console.log('Downloading Video')
    ytdl(link, { filter: 'audioandvideo', quality: 'highestvideo' })
      .pipe(fs.createWriteStream(mp4FilePath))
      .on('finish', async () => {
        const videoFile = fs.readFileSync(mp4FilePath)
        await Ritsuka.sendMessage(m.chat, { video: videoFile, mimetype: 'video/mp4' }, { quoted: m })
      })
  } catch (err) {
    console.error(err)
    m.reply(String(err))
  }
}
const downloadMp3 = async (link) => {
  try {
    await ytdl.getInfo(link)
    const mp3FilePath = `./src/music.mp3`
    console.log('Downloading Audio')
    ytdl(link, { filter: 'audioonly' })
      .pipe(fs.createWriteStream(mp3FilePath))
      .on('finish', async () => {
        const audioFile = fs.readFileSync(mp3FilePath)
        await Ritsuka.sendMessage(m.chat, { audio: audioFile, mimetype: 'audio/mpeg' }, { quoted: m })
      })
  } catch (err) {
    m.reply(String(err))
  }
}

let fwait ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: `${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('DDMMYYYY')}`,status: 200, thumbnail: await Ritsuka.reSize(erorurl, 100, 100), surface: 200, message: `Wait a moment`, orderTitle: 'Tio', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
switch(command) {
case 'speed':
case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python3 speed.py --share')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
case 'runtime':
m.reply(runtime(process.uptime()))
break 
case 'stats':{
	let stat = await fetchJson(`https://api.betabotz.eu.org/main/statistic`)
	m.reply(util.format(stat))
}
break
case 'setppbot': {
            if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
            if (!quoted) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (!/image/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            if (/webp/.test(mime)) return m.reply(`Kirim.reply Image Dengan Caption ${prefix + command}`)
            var media = await Ritsuka.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
            var { img } = await generateProfilePicture(media)
            await Ritsuka.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            fs.unlinkSync(media)
            m.reply(`Sukses`)
            }
                break
   case 'menu':
   case 'help': {
   	try {
   	ppwong = await Ritsuka.profilePictureUrl(from, 'image')
   	} catch {
   	ppme = pickRandom(mylogo)
       ppwong = await getBuffer(ppme)
   	}
    // create a message for broadcasting
    const fmenu = {
  key: {
    fromMe: false,
    participant: "0@s.whatsapp.net",
    remoteJid: "status@broadcast"
  },
  message: {
    orderMessage: {
      itemCount: `${moment().tz('Asia/Jakarta').locale('id').format('DDMMYYYY')}`,
      status: 200,
      thumbnail: await Ritsuka.reSize(ppwong, 100, 100),
      surface: 200,
      message: `Don't forget to donate :)`,
      orderTitle: 'Mark Zuckerberg',
      sellerJid: '0@s.whatsapp.net'
    }
  }
};
  const contextInfo = {
    forwardingScore: 9999,
    isForwarded: false,
    mentionedJid: [m.sender],
    externalAdReply: {
      showAdAttribution: true,
      title: `${ucapanWaktu}, ${pushname} 👋`,
      body: 'Follow @tohruoffc for more updates',
      mediaType: 1,
      thumbnailUrl: 'https://telegra.ph/file/8cc4e0a12f153c6e31c91.mp4',
      sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
      mediaUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
      renderLargerThumbnail: true
    }
  };
  // send the text message with the buttons and context info
   //image: await Ritsuka.reSize(pickRandom(mylogo), 300, 150),
   let text =` ⎾❒${namaBot}❒⏌

┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
└┬─────────────┈❖
┌┤「 TENTANG BOT 」
│└─────────────┈❖
│• Saya ${global.namaBot}, Bot Ini Adalah
│  Beta Multi-Device WhatsApp.
│• Jika Kamu Menemukan Semacam
│  Bug Atau Kesalahan Mohon
│  Dimaklumi Dulu Ya,Ketik Owner
│  Untuk Lapor Owner Agar Segera
│  Diperbaiki Atau DiFix.
│• Ketik .listfitur untuk melihat fitur.
└┬─────────────┈❖
┌┤「 INFO USER 」
│└─────────────┈❖
│• Name : ${pushname}
│• Number : ${m.sender.split('@')[0]}
│• Umur : ${db.data.users[m.sender].age}
│• Teregistrasi : ${db.data.users[m.sender].registered ? 'Ya✅' : 'Tidak❎'}
│• Status : ${isOwner ? "Owner 👑️":"User ⚔️"}
│• Limit : ${isOwner ? 'Unlimited 👑' : `${db.data.users[m.sender].limit}`}
└┬─────────────┈❖
┌┤「 INFO BOT 」
│└─────────────┈❖
│• Name : ${global.namaBot}
│• Owner : ${global.ownerName}
│• Prefix : ( ${prefix} )
│• Mode : ${Ritsuka.public ? 'Public-Mode 👥' : 'Self-Mode 👤'}
│• Platform : ${os.platform()}
│• Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
│• Runtime : ${runtime(process.uptime())}
│• Language : Javascript
│• Lib : Baileys-md
└┬─────────────┈❖
┌┤「 INFO TIME 」
│└─────────────┈❖
│• Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
│• Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
│• Tahun Islam:  ${Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {day: 'numeric', month: 'long', year: 'numeric'}).format(new Date(new Date + 3600000))}
│• Menuju HBD Owner :
│  ${menuju}
│• Menuju Puasa Ramadhan :
│  ${menuju1}
│• Menuju Tahun Baru :
│  ${menuju2}
│• WIB : ${wib}
│• WITA : ${wita}
│• WIT : ${wit}
└┬─────────────┈❖
┌┤「 BIG THX TO  」
│└─────────────┈❖
│• Allah Subhanahu Wa Taala
│• Nabi Muhammad S.A.W
│• My parents
│• Me (Reisuke x Ritsuka)
│• Ilham
│• Erlan
│• Tio
│• Dika Ardnt
│• Penyedia panel
│• Penyedia Module
│• Dan Kalian Semua yang menggunakan
└─────────────┈❖

©Credits : Reisuke x Ritsuka
    
"${motiva}" 🍃\n${readmore}

`.trim()
await Ritsuka.sendMessage(m.chat, { video: {url :'https://telegra.ph/file/8cc4e0a12f153c6e31c91.mp4'}, caption : text }, {quoted:m})
}
break;

case 'listfitur' :
let fitur = ` ⎾❒${namaBot}❒⏌

┌────────┈❖
│「 Hi, ${pushname}👋 」
│「 ${ucapanWaktu} 」
│• Total Fitur : ${totalFitur()}
│• Total Pengguna : ${Object.keys(global.db.data.users).length}
└┬─────────────┈❖
┌┤「 LIST FITUR 」
│└─────────────┈❖
│• ${prefix}stats
│• ${prefix}ai
│• ${prefix}owner
│• ${prefix}donasi
│• ${prefix}menu / ${prefix}help / ${prefix}?
│• ${prefix}delete / ${prefix}del / ${prefix}d
│• ${prefix}setppbot (owner)
│• ${prefix}runtime
│• ${prefix}listpc
│• ${prefix}listgc
│• ${prefix}listonline
│• ${prefix}speedtest
│• ${prefix}s / ${prefix}sticker
│• ${prefix}yts
│• ${prefix}ytmp3
│• ${prefix}ytmp4
│• ${prefix}tiktokdl
│• ${prefix}fbdl
│• ${prefix}twdl
│• ${prefix}ig
│• ${prefix}tiktokmp3 / ${prefix}tiktokaudio
│• ${prefix}verifikasi
│• ${prefix}unreg
│• ${prefix}ceksn
│• ${prefix}couple / ${prefix}ppcp
│• ${prefix}swm
│• ${prefix}menfess / ${prefix}confess
│• ${prefix}balasmenfess / ${prefix}balasmenfes
│• ${prefix}tolakmenfess / ${prefix}tolakmenfes
│• ${prefix}stopmenfess / ${prefix}stopmenfes
└┬─────────────┈❖
┌┤「 NOTE 」
│└─────────────┈❖
│• Jika Kamu Bertanya Mengapa
│  Fitur nya sedikit?, Karena Owner
│  Sengaja membuat nya sedikit agar
│  Script Ini Tidak Di Perjual Belikan
└─────────────┈❖`
Ritsuka.sendMessage(m.chat, {image: {url:'https://telegra.ph/file/669ddb7555b61cd521bf1.jpg'}, caption: fitur}, {quoted:m})
break

// Download
case 'yts' : case 'ytsearch' : {
if (!text) throw 'Cari apa?'
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}* (${v.url})
Duration: ${v.timestamp}
Uploaded ${v.ago}
${v.views} views
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
_${v.subCountLabel} (${v.subCount}) Subscriber_
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n========================\n')
  m.reply(teks)
}
break
 case 'ytmp4': case 'ytavideo': {
if (!text) return m.reply(`Example : ${prefix + command} Lagu sad`)
const youtube = require("yt-search");
try {
var search = await youtube(text);
var convert = search.videos[0];
if (!convert) throw 'Video/Audio Tidak Ditemukan';
if (convert.seconds >= 3600) {
return newReply('Video is longer than 1 hour!') 
} else {
var videoUrl
try {
videoUrl = `https://aemt.me/youtube?url=${convert.url}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`
} catch (e) {
videoUrl = `https://aemt.me/youtube?url=${convert.url}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`} 
var caption = `∘ Title : ${convert.title}\n∘ Ext : Search\n∘ ID : ${convert.videoId}\n∘ Duration : ${convert.timestamp}\n∘ Viewers : ${convert.views}\n∘ Upload At : ${convert.ago}\n∘ Author : ${convert.author.name}\n∘ Channel : ${convert.author.url}\n∘ Url : ${convert.url}\n∘ Description : ${convert.description}\n∘ Thumbnail : ${convert.image}`;
var pesan = Ritsuka.relayMessage(m.chat, {
extendedTextMessage:{
text: caption, 
contextInfo: {
externalAdReply: {
title: "Powered by",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: convert.image,
sourceUrl: videoUrl
}
}, mentions: [m.sender]
}}, {})
Ritsuka.sendMessage(m.chat, {video: {url: videoUrl}},{quoted: m});
}
} catch (e) {
m.reply(`*Error*`);
}
}
break
 case 'ytmp3': case 'ytaudio': {
if (!text) return m.reply(`Example : ${prefix + command} Lagu sad`)
const youtube = require("yt-search");
try {
var search = await youtube(text);
var convert = search.videos[0];
if (!convert) throw 'Video/Audio Tidak Ditemukan';
if (convert.seconds >= 3600) {
return newReply('Video is longer than 1 hour!') 
} else {
var audioUrl
try {
audioUrl = `https://aemt.me/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
} catch (e) {
audioUrl = `https://aemt.me/youtube?url=${convert.url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`} 
var caption = `∘ Title : ${convert.title}\n∘ Ext : Search\n∘ ID : ${convert.videoId}\n∘ Duration : ${convert.timestamp}\n∘ Viewers : ${convert.views}\n∘ Upload At : ${convert.ago}\n∘ Author : ${convert.author.name}\n∘ Channel : ${convert.author.url}\n∘ Url : ${convert.url}\n∘ Description : ${convert.description}\n∘ Thumbnail : ${convert.image}`;
var pesan = Ritsuka.relayMessage(m.chat, {
extendedTextMessage:{
text: caption, 
contextInfo: {
externalAdReply: {
title: "Powered by",
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
thumbnailUrl: convert.image,
sourceUrl: audioUrl
}
}, mentions: [m.sender]
}}, {})
Ritsuka.sendMessage(m.chat, {audio: {url: audioUrl},mimetype: 'audio/mpeg'},{quoted: m});
}
} catch (e) {
m.reply(`*Error*`);
}
}
break
 case 'fbdown':
 case 'fb':
 case 'facebook':
 case 'fbdl':{
if (!args[0]) {
      throw m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://www.facebook.com/watch/?v=1393572814172251`);
    }
    try {
      m.reply(mess.wait);
      const response = await fetch(`https://aemt.me/download/fbdl?url=${args[0]}`);
      if (!response.ok) {
        throw await response.text();
      }
      const result = await response.json();
      if (!result.status) {
        throw result;
      }
      const { Normal_video, HD } = result.result;
      const fileToSend = Normal_video || HD;
      if (!fileToSend) {
        throw m.reply('Tidak dapat menemukan file video Facebook.');
      }
      await Ritsuka.sendMessage(m.chat, { document: {url:fileToSend}, mimetype: 'video/mp4', caption: args[0], fileName: command+'.mp4'},{quoted:m})
    } catch (err) {
      console.error(err);
      m.reply(util.format(err));
    }
 }
 break
case 'tt':
 case 'ttdl':
 case 'tiktokdl':
 case 'tiktoknowm':
 case 'tiktok':{
	 if (!args[0]) {
      throw m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://vt.tiktok.com/ZSeJ7P56G`);
    }
    try {
      m.reply(mess.wait);
      const response = await fetch(`https://aemt.me/download/tiktokdl?url=${args[0]}`);
      if (!response.ok) {
        throw await response.text();
      }
      const result = await response.json();
      if (!result.status) {
        throw result;
      }
      const { video, title } = result.result;
      const fileToSend = video
      if (!fileToSend) {
        throw m.reply('Tidak dapat menemukan file video Tiktok.');
      }
      await Ritsuka.sendMessage(m.chat, { document: {url:fileToSend}, mimetype: 'video/mp4', caption: title, fileName: command+'.mp4'},{quoted:m})
    } catch (err) {
      console.error(err);
      m.reply(util.format(err));
    }
 }
 break

 case 'twdl':
 case 'twitter':
 case 'twitterdl':{
	 if (!args[0]) {
      throw m.reply(`Masukkan URL!\n\ncontoh:\n${command} https://twitter.com/faqeeyaaz/status/1242789155173617664?s=20&t=DRgdl9U8MwTwpY0o1o-96g`);
    }
    try {
      m.reply(mess.wait);
      const response = await fetch(`https://aemt.me/twiterdl?url=${args[0]}`);
      if (!response.ok) {
        throw await response.text();
      }
      const result = await response.json();
      if (!result.status) {
        throw result;
      }
      const { HD, desc, SD } = result.result;
      const fileToSend = HD || SD 
      if (!fileToSend) {
        throw m.reply('Tidak dapat menemukan file video Twitter.');
      }
      await Ritsuka.sendMessage(m.chat, { document: {url:fileToSend}, mimetype: 'video/mp4', caption: `Description: ${desc}`, fileName: command+'.mp4'},{quoted:m})
    } catch (err) {
      console.error(err);
      m.reply(util.format(err));
    }
 }
 break
case 'instagramdl':
case 'instagram':
case 'ig':
case 'igreels':
     case'igmp4':
     case 'igvideo':{
  if (!q) return m.reply(`Use example ${command} https://www.instagram.com/p/CMeFrnTp8as`)
  if (!isUrl(q)) throw m.reply(mess.link) 
  if (!q.includes('instagram.com')) return m.reply(mess.link1)
  m.reply(mess.wait)
  try {
    const a = await instagramdlv2(q)
    await Ritsuka.sendMessage(m.chat, {
      document: {
        url: a[0].url.split("snapsave.app")[1]
      },
      mimetype: "video/mp4",
      fileName: 'instagram.mp4',
      caption: `${gre}Sukses...\nDont forget to donate${gre}`
    }, {
      quoted: m
    })
  } catch (err) {
    console.log(err)
    await Ritsuka.sendMessage(m.chat, {
      image: {
        url: global.erorurl
      },
      caption: util.format(err)
    }, {
      quoted: m
    })
  }
  }
  break;
  
  // Cek Cek 
  case 'listblock':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              await Ritsuka.fetchBlocklist().then(async data => {
		      let txt = `*「  Daftar Nomor Yang Diblokir  」*\n\n*Total:* ${data.length}\n\n┌─\n`
		      for (let i of data) {
			  txt += `├ @${i.split("@")[0]}\n`
		      }
		      txt += "└────"
		      return Ritsuka.sendTextWithMentions(m.chat, txt, m)
	          }).catch(err => {
		      console.log(err);
		      m.reply('tidak ada yang diblokir!')
	          })
              break
   case 'litsprivate': case 'listpc': {
     	     if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let abu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
              let tteks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${abu.length} Chat\n\n`
              for (let i of abu) {
              let nama = store.messages[i].array[0].pushName
              tteks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
              }
              Ritsuka.sendTextWithMentions(m.chat, tteks, m)
              }
              break
   case 'litsgroup': case 'listgc' :
      	    if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let jadin = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
              let tekps = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${jadin.length} Group\n\n`
              for (let i of jadin) {
              let metadata = await Ritsuka.groupMetadata(i)
              tekps += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
              }
              Ritsuka.sendTextWithMentions(m.chat, tekps, m)
              break
   case 'delete': case 'del':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!m.quoted) throw m.reply('reply pesnya') 
              let { chat, fromMe } = m.quoted
              Ritsuka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
              break
   case 'listonline': case 'liston': 
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
              online = [...Object.keys(store.presences[id]), botNumber]
              Ritsuka.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
              break
  // ai dll
  case 'verifikasi':
              let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
              if (user.registered === true) throw m.reply(`Anda sudah terdaftar\nMau daftar ulang? ${prefix}unreg <SN|SERIAL NUMBER>`)
              if (!Reg.test(text)) throw m.reply(`Format salah\n*${prefix}${command} nama.umur*`)
              let [_, name, splitter, age] = text.match(Reg)
              if (!name) throw m.reply( 'Name cannot be empty (Name)')
              if (!age) throw m.reply('Age cant be empty (Number)')
              age = parseInt(age)
              if (age > 30) throw m.reply('Age too old 😉')
              if (age < 5) throw m.reply('Babies can type according to the format  ._.')
              user.name = name.trim()
              user.age = age
              user.regTime = + new Date
              user.registered = true
              let sn = createHash('md5').update(m.sender).digest('hex')
              m.reply(`Daftar berhasil!\n\n╭─❒ You Info Registrasi \n├\n├❒ Nama: ${name}\n├❒ Umur: ${age} Tahun \n├\n╰❒〘 ${namaBot} 〙\n\n Jangan Lupa Donasi ke ${global.ownerName}\n\nNote Serial Number Jangan Sampai Lupa\nUntuk Menghapus Data Diri Anda Ketik\n${prefix}unreg [ no sn ]\n\nSERIAL NUMBER / SN\n*${sn}*`.trim())
              break
   case 'unreg':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              if (!args[0]) throw m.reply('Serial Number kosong')
              let spn = createHash('md5').update(m.sender).digest('hex')
              if (args[0] !== spn) throw m.reply('Serial Number salah')
              user.registered = false
              m.reply('```Succes Unreg !```')
              break
   case 'ceksn':
              if (!db.data.users[m.sender].registered) return m.reply(mess.regis)
              let Regg = /\|?(.*)([.|] *?)([0-9]*)$/i
              let jp = createHash('md5').update(m.sender).digest('hex')
              m.reply(`*❒ SN:* ${jp}`)
              break
              
  case 'ai': {
  if (!text) throw 'masukan query contoh : .ai siapa presiden indonesia'
  let aoi = await fetchJson(`https://aemt.me/openai?text=${text}`)
  Ritsuka.sendMessage(m.chat, {text:aoi.result}, {quoted:m})
  }
  break
  
case 'couple': case 'ppcp': {
                m.reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                Ritsuka.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                Ritsuka.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
	    
	    case 'tiktokmp3':
            case 'tiktokaudio': {
                if (!text) throw 'Link TikTok Ya Mana?'
                m.reply(mess.wait)
                let anu = await fdl.downloader.tiktok(text)
				let cap = `👤 *Author:* ${anu.author}\n📌 *Title:* ${anu.title}\n🔗 Download From ${text}`
				Ritsuka.sendMessage(m.chat, { caption: cap, image: { url: anu.thumbnail }})
				Ritsuka.sendMessage(m.chat, { audio: { url: anu.audio }, mimetype: 'audio/mpeg'}, { quoted: fkontak })
				}
				break
				
		// Sticker
		case 'sticker': case 's': case 'stickergif': case 'sgif': {
                 if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
                 m.reply(mess.wait)
                 if (/image/.test(mime)) {
                 let media = await quoted.download()
                 let encmedia = await Ritsuka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 await fs.unlinkSync(encmedia)
                 } else if (/video/.test(mime)) {
                 if ((quoted.msg || quoted).seconds > 15) return m.reply('Maksimal 10 detik!')
                 let media = await quoted.download()
                 let encmedia = await Ritsuka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                 await fs.unlinkSync(encmedia)
                 } else {
                 throw m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`) 
                 }
                 }
                 break
      case 'swm': case 'stickerwm':
       	     if (!args.join(" ")) return m.reply(`Example :\nswm Ritsuka | Gans`)
                const swn = args.join(" ")
                const pcknm = swn.split("|")[0];
                const atnm = swn.split("|")[1];
                m.reply(mess.wait)
                if (quoted.msg === true) {
                Ritsuka.downloadAndSaveMediaMessage(quoted, "gifee")
                Ritsuka.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
                } else if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await Ritsuka.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await Ritsuka.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
                await fs.unlinkSync(encmedia)
                } else {
                m.reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
                }
                break
				
	// Menfess
				case "confess": case 'menfes': case 'menfess':{
this.menfes = this.menfes ? this.menfes : {}
let roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (roof) return m.reply("Kamu masih berada dalam sesi menfess")
if (m.isGroup) return m.reply('Fitur Khusus Di private chat!')
if (!text) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if (!text.includes('|')) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|6292818802718|Menfes nih\n`)
let [namaNya, nomorNya, pesanNya] = text.split`|`
if (nomorNya.startsWith('0')) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
if(isNaN(nomorNya)) return m.reply(`Kirim Perintah ${prefix + command} nama|nomor|pesan\n\nContoh :\n${prefix + command} ${pushname}|628xxx|Menfes nih\n`)
var yoi = `Hi ada menfess nih buat kamu\n\nDari : ${namaNya}\nPesan : ${pesanNya}\n\nSilahkan ketik ${prefix}balasmenfess -- Untuk menerima menfess/confess\nSilahkan ketik ${prefix}tolakmenfess -- Untuk menolak menfess/confess\n\n_Pesan ini di tulis oleh seseorang pengguna bot, bot hanya menyampaikan saja_`
let tod = await getBuffer('https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg') 
let id = m.sender
this.menfes[id] = {
id,
a: m.sender,
b: nomorNya + "@s.whatsapp.net",
state: 'WAITING'
}
 await Ritsuka.sendMessage(nomorNya + '@s.whatsapp.net', {image: tod, caption:yoi }, {})
m.reply('Pesan berhasil dikirim ke nomor tujuan. Moga aja dibales coy')
}
break
case 'balasmenfess': case 'balasmenfes': {
let roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess")
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find.b = m.sender
find.state = 'CHATTING'
this.menfes[find.id] = {...find}
await Ritsuka.sendMessage(other, {text: `_@${m.sender.split("@")[0]} telah menerima menfess kamu, sekarang kamu bisa chat lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`, mentions: [m.sender]})
Ritsuka.sendMessage(m.chat, {text: `_Menfess telah diterima, sekarang kamu bisa chatan lewat bot ini_\n\n*NOTE :*\nJika ingin berhenti dari menfess, silahkan ketik .stopmenfess`})
}
break
 case 'tolakmenfess': case 'tolakmenfes': {
let roof = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!roof) return m.reply("Belum ada sesi menfess")
let room = Object.values(this.menfes).find(room => [room.a, room.b].includes(m.sender) && room.state === 'WAITING')
let other = [room.a, room.b].find(user => user !== m.sender)
find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
Ritsuka.sendMessage(other, {text: `_Uppsss... @${m.sender.split("@")[0]} Menolak menfess kamu_`, mentions: [m.sender]})
// await Ritsuka.sendMessage(find.a, {text: `_Uppsss... @${find.b.split("@")[0]} Menolak menfess kamu_`,mentions: [find.b]})
m.reply("Menfess berhasil di tolak 🤚")
delete this.menfes[roof.id]
}
break
 case "stopconfess": case 'stopmenfess': {
 //find = Object.values(this.menfes).find(menpes => menpes.state == 'WAITING')
let find = Object.values(this.menfes).find(menpes => [menpes.a, menpes.b].includes(m.sender))
if (!find) return m.reply("Belum ada sesi menfess")
const to = find.a == m.sender ? find.b : find.a
Ritsuka.sendMessage(to, {text: `_Teman chat telah menghentikan menfess ini_`, mentions:[m.sender]})
await m.reply("ok")
delete this.menfes[find.id]
}
 break
 
default:
if ((budy) && ["Assalamualaikum", "assalamualaikum","Assalamu'alaikum",].includes(budy) && !isCmd) {
m.reply('Waalaikumsalam warahmatullahi wabarakatuh')
}
  if (budy.startsWith('=>')) {
    if (!isOwner) return m.reply(mess.botOwner); 
    try {
    const result = await eval(`(async () => { return ${budy.slice(3)} })()`);
    const formattedResult = JSON.stringify(result, null, 2);
    return m.reply(formattedResult);
    } catch (error) {
    return m.reply(util.format(error));
    }
    }
 
  if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(util.format(err))}}

if (budy.startsWith("$")) {
  if (!isOwner) return m.reply(mess.botOwner)
  const command = budy.slice(1).trim();
  if (!command) return m.reply('Mohon masukkan perintah yang valid');
  const { exec } = require('child_process');
  exec(command, (error, stdout, stderr) => {
  if (error) return m.reply(util.format(error));
  if (stderr) return m.reply(util.format(stderr));
  if (stdout) return m.reply(util.format(stdout));
  });
  }

}
// Anti Tag ( FenZo||77+ )
const listTag = owner.map(number => `${number}@s.whatsapp.net`)
if (m.mtype === 'extendedTextMessage' && m.message.extendedTextMessage && m.message.extendedTextMessage.contextInfo && m.message.extendedTextMessage.contextInfo.participant) {
  const partiNum = m.message.extendedTextMessage.contextInfo.participant
  if (listTag.includes(partiNum)) {
    if (!m.isGroup) return
    if (m.key.fromMe) return
    Ritsuka.readMessages(m.chat, m.sender, [m.key.id])
    Ritsuka.sendVideoAsSticker(m.chat, `https://telegra.ph/file/9446324e0f9e8db826330.mp4`, m, {packname: packname, author: author})
  }
}
// Antitag Via Tag ( FenZo||77+ )
if (budy.includes(owner.map(number => `@${number}`))) {
if (!m.isGroup) return
if (m.key.fromMe) return
Ritsuka.readMessages(m.chat, m.sender, [m.key.id])
Ritsuka.sendVideoAsSticker(m.chat, `https://telegra.ph/file/9446324e0f9e8db826330.mp4`, m, {packname: packname, author: author})
}
} catch (err) { 
console.log(util.format(err))
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyanBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
