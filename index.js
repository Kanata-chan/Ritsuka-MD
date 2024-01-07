process.on("uncaughtException", console.error)
require('./connect/settings')
const { default: RitsukaConnect, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const chalk = require('chalk')
const figlet = require("figlet");
const lolcatjs = require('lolcatjs')
const FileType = require('file-type')
const path = require('path')
const moment = require("moment-timezone")
const _ = require('lodash')
const axios = require('axios')
const { infolog, mylog, color, bgcolor } = require('./lib/color')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}

const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const pickRandom = (arr) => {
	        return arr[Math.floor(Math.random() * arr.length)]
		    }	


const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`src/database.json`)
)
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
 users: {},
 pasangan: {},
 chats: {},
 game: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()

// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)

       async function startRitsuka() {
	   const { state, saveCreds } = await useMultiFileAuthState(`${sessionName}`)
       const Ritsuka = RitsukaConnect({
  logger: pino({ level: 'silent' }),
  printQRInTerminal: true, // display QR in terminal
  syncFullHistory: true, // receive full history
  markOnlineOnConnect: true, // keep the bot offline; set to true if you want it always on
  connectTimeoutMs: 60000, // set connection timeout duration
  defaultQueryTimeoutMs: 0, // set query timeout duration (0: no limit)
  keepAliveIntervalMs: 10000, // set WS interval
  generateHighQualityLinkPreview: true, // increase thumbnail preview quality
  // patch below for additional fixes if hydrate/list not working
  patchMessageBeforeSending: (message) => {
    const requiresPatch = !!(
      message.buttonsMessage ||
      message.templateMessage ||
      message.listMessage
    );
    if (requiresPatch) {
      message = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadataVersion: 2,
              deviceListMetadata: {},
            },
            ...message,
          },
        },
      };
    }
    return message;
  },
  getMessage: async (key) => {
    if (store) {
      const msg = await store.loadMessage(key.remoteJid, key.id);
      return msg.message || undefined;
    }
    return {
      conversation: "Hello, Ritsuka Disini",
    };
  },
  browser: ['Tayo', 'Safari', ''],
  auth: state,
});
        console.clear()
	    console.log(color(figlet.textSync('Ritsuka - MD', {
		font: 'Big',
		horizontalLayout: 'default',
		verticalLayout: 'default',
		width: 80,
		whitespaceBreak: true
		}), 'green'))
		console.log(chalk.yellowBright('[ WHATSAPP BOT ] '))
	    console.log(color('• WIB'))
        lolcatjs.fromString(`${time}`),
        console.log(color('• WITA'))
        lolcatjs.fromString(`${wita}`),
        console.log(color('• WIT'))
        lolcatjs.fromString(`${wit}`)

    store.bind(Ritsuka.ev) 
    
    // anticall auto block
    Ritsuka.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await Ritsuka.sendContact(callerId, global.owner)
    Ritsuka.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
    await sleep(8000)
    await Ritsuka.updateBlockStatus(callerId, "block")
    }
    })

    Ritsuka.ev.on('messages.upsert', async (chatUpdate) => {
        try {
          const mek = chatUpdate.messages[0];
          if (!mek.message) return;
          mek.message = Object.keys(mek.message)[0] === 'ephemeralMessage' ? mek.message.ephemeralMessage.message : mek.message;
          if (mek.key && mek.key.remoteJid === 'status@broadcast') return;
          if (!Ritsuka.public && !mek.key.fromMe && chatUpdate.type === 'notify') return;
          if (['BAE5', '3EB0', 'B24E'].some((prefix) => mek.key.id.startsWith(prefix))) return;
          const m = smsg(Ritsuka, mek, store);
          require('./connect/case')(Ritsuka, m, chatUpdate, store);
        } catch (err) {
          console.log(err);
        }
      })      
    
    // Group Update
    Ritsuka.ev.on('groups.update', async pea => {
    //console.log(pea)
    try {
    for(let ciko of pea) {
    // Get Profile Picture Group
       try {
       ppgc = await Ritsuka.profilePictureUrl(ciko.id, 'image')
       } catch {
       ppgc = 'https://tinyurl.com/yx93l6da'
       }
       let wm_fatih = { url : ppgc }
	   let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: `999`,status: 200, thumbnail: await Ritsuka.reSize(wm_fatih, 100, 100), surface: 200, message: `Group Settings Change Message`, orderTitle: 'Tio', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
       if (ciko.announce == true) {
       Ritsuka.sendMessage(ciko.id, { caption:`「 Group Settings Change 」\n\nGroup telah ditutup oleh admin, Sekarang hanya admin yang dapat mengirim pesan !`, footer:`Group Settings Change Message`, image:wm_fatih },{quoted:ftroli})
       } else if (ciko.announce == false) {
       Ritsuka.sendMessage(ciko.id, { caption:`「 Group Settings Change 」\n\nGroup telah dibuka oleh admin, Sekarang peserta dapat mengirim pesan !`, footer:`Group Settings Change Message`, image:wm_fatih },{quoted:ftroli})
       } else if (ciko.restrict == true) {
       Ritsuka.sendMessage(ciko.id, { caption:`「 Group Settings Change 」\n\nInfo group telah dibatasi, Sekarang hanya admin yang dapat mengedit info group !`, footer:`Group Settings Change Message`, image:wm_fatih },{quoted:ftroli})
       } else if (ciko.restrict == false) {
       Ritsuka.sendMessage(ciko.id, { caption: `「 Group Settings Change 」\n\nInfo group telah dibuka, Sekarang peserta dapat mengedit info group !`, footer:`Group Settings Change Message`, image:wm_fatih },{quoted:ftroli})
       } else {
       Ritsuka.sendMessage(ciko.id, { caption:`「 Group Settings Change 」\n\nGroup Subject telah diganti menjadi *${ciko.subject}*`, footer:`Group Settings Change Message`, image:wm_fatih },{quoted:ftroli})
     }
    }
    } catch (err){
    console.log(err)
    }
    })

    
    
    Ritsuka.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await Ritsuka.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                welcome = `┌─❖\n│「 𝗛𝗶 👋 」\n└┬❖ 「 @${num.split("@")[0]}  」\n   │✑  𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 \n   │✑  ${metadata.subject}\n   │✑  *Intro Dulu*\n   │✑  Nama : \n   │✑  Umur : \n   │✑  Gender : \n   └───────────────┈ ⳹`
                bye = `┌─❖\n│「 𝗚𝗼𝗼𝗱𝗯𝘆𝗲 👋 」\n└┬❖ 「 @${num.split("@")[0]}   」\n   │✑  𝗟𝗲𝗳𝘁 from\n   │✑  ${metadata.subject}\n   └───────────────┈ ⳹`
                // Get Profile Picture User
                try {
                    ppuser = await Ritsuka.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = erorurl
                }

                if (anu.action == 'add') {
                Ritsuka.sendMessage(anu.id, { text: `${welcome}`, contextInfo: {
				mentionedJid: [num],
                externalAdReply: {
                    title: `Welcome to ${metadata.subject}`,
                    body: "",
                    thumbnailUrl: ppuser,
                    sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
                } else if (anu.action == 'remove') {
                    Ritsuka.sendMessage(anu.id, { text: `${bye}`, contextInfo: {
				mentionedJid: [num],
                externalAdReply: {
                    title: `Left from ${metadata.subject}`,
                    body: "",
                    thumbnailUrl: ppuser,
                    sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
                } else if (anu.action == 'promote') {
                    Ritsuka.sendMessage(anu.id, { text: `@${num.split('@')[0]} Promote From ${metadata.subject}`, contextInfo: {
				mentionedJid: [num],
                externalAdReply: {
                    title: `Yey, Promote From ${metadata.subject}`,
                    body: "",
                    thumbnailUrl: ppuser,
                    sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
                } else if (anu.action == 'demote') {
                    Ritsuka.sendMessage(anu.id, { text: `@${num.split('@')[0]} Demote From ${metadata.subject}`, contextInfo: {
				mentionedJid: [num],
                externalAdReply: {
                    title: `Awokwokwok, Demote From ${metadata.subject}`,
                    body: "",
                    thumbnailUrl: ppuser,
                    sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
              }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
	
    // Setting
    Ritsuka.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    Ritsuka.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = Ritsuka.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    Ritsuka.getName = (jid, withoutContact  = false) => {
        id = Ritsuka.decodeJid(jid)
        withoutContact = Ritsuka.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = Ritsuka.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === Ritsuka.decodeJid(Ritsuka.user.id) ?
            Ritsuka.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    Ritsuka.sendContact = async (jid, kon, quoted = '', opts = {}) => {
        let list = []
        for (let i of kon) {
            let name = await Ritsuka.getName(`${i}@s.whatsapp.net`) || 'Tidak Diketahui'
            list.push({
                displayName: name,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${name}\nFN:${name}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            })
        }
        Ritsuka.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    
    Ritsuka.setStatus = (status) => {
        Ritsuka.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    Ritsuka.public = true

    Ritsuka.serializeM = (m) => smsg(Ritsuka, m, store)
    Ritsuka.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        try {
          // Handle different disconnection reasons
          if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) {
              console.log(`Bad Session File, Please Delete Session and Scan Again`);
              startRitsuka();
            } else if (reason === DisconnectReason.connectionClosed) {
              console.log("Connection closed, reconnecting....");
              startRitsuka();
            } else if (reason === DisconnectReason.connectionLost) {
              console.log("Connection Lost from Server, reconnecting...");
              startRitsuka();
            } else if (reason === DisconnectReason.connectionReplaced) {
              console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
            } else if (reason === DisconnectReason.loggedOut) {
              console.log(`Device Logged Out, Please Scan Again And Run.`);
              process.exit();
            } else if (reason === DisconnectReason.restartRequired) {
              console.log("Restart Required, Restarting...");
              startRitsuka();
            } else if (reason === DisconnectReason.timedOut) {
              console.log("Connection TimedOut, Reconnecting...");
              startRitsuka();
            } else Ritsuka.end(`Unknown DisconnectReason: ${reason}|${connection}`)
          }
          // Handle connection update events
          if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
            lolcatjs.fromString(`Connecting...`)
          }
          if (update.connection == "open" || update.receivedPendingNotifications == "true") {
            lolcatjs.fromString(`⏳ Mengkoneksikan Ke >>> WhatsApp Web`)
            lolcatjs.fromString(`✅ Berhasil Tersambung Ke ` + JSON.stringify(Ritsuka.user, null, 2))
            global.stared = ['6281233649676']
            let txtown = `✅ Berhasil Tersambung Ke ` + JSON.stringify(Ritsuka.user, null, 2)
            lolcatjs.fromString('Sukses Mengirim Pesan Ke Owner ☑️')
            Ritsuka.sendMessage(global.stared+'@s.whatsapp.net', { text: txtown, contextInfo: {
                externalAdReply: {
                    title: 'Connected To WhatsApp Web',
                    body: "",
                    thumbnailUrl: 'https://i.ibb.co/Ykgyrgm/image-X0r-Vv-Kru-transformed.png',
                    sourceUrl: 'https://chat.whatsapp.com/D7Tj6n26CE92PKs2CbhEu4',
                    mediaType: 1,
                    showAdAttribution: true,
                    renderLargerThumbnail: true
                }
            } })
          }
        } catch (err) {
          console.log(err)
          startRitsuka();
        }
      })      
    

    Ritsuka.ev.on('creds.update', saveCreds)
      /** Resize Image
      *
      * @param {Buffer} Buffer (Only Image)
      * @param {Numeric} Width
      * @param {Numeric} Height
      */
      Ritsuka.reSize = async (image, width, height) => {
       let jimp = require('jimp')
       var oyy = await jimp.read(image);
       var kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
       return kiyomasa
      }
      // Siapa yang cita-citanya pakai resize buat keliatan thumbnailnya
      
      /** Send Button 5 Location
       *
       * @param {*} jid
       * @param {*} text
       * @param {*} footer
       * @param {*} location
       * @param [*] button
       * @param {*} options
       */
      Ritsuka.send5ButLoc = async (jid , text = '' , footer = '', lok, but = [], options = {}) =>{
       let resize = await Ritsuka.reSize(lok, 300, 150)
       var template = generateWAMessageFromContent(jid, {
       "templateMessage": {
       "hydratedTemplate": {
       "locationMessage": {
       "degreesLatitude": 0,
       "degreesLongitude": 0,
       "jpegThumbnail": resize
       },
       "hydratedContentText": text,
       "hydratedFooterText": footer,
       "hydratedButtons": but
       }
       }
       }, options)
       Ritsuka.relayMessage(jid, template.message, { messageId: template.key.id })
      }

      /**
      *
      * @param {*} jid
      * @param {*} url
      * @param {*} caption
      * @param {*} quoted
      * @param {*} options
      */
     Ritsuka.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return Ritsuka.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return Ritsuka.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return Ritsuka.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return Ritsuka.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return Ritsuka.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

    /** Send List Messaage
      *
      *@param {*} jid
      *@param {*} text
      *@param {*} footer
      *@param {*} title
      *@param {*} butText
      *@param [*] sections
      *@param {*} quoted
      */
        Ritsuka.sendListMsg = (jid, text = '', footer = '', title = '' , butText = '', sects = [], quoted) => {
        let sections = sects
        var listMes = {
        text: text,
        footer: footer,
        title: title,
        buttonText: butText,
        sections
        }
        Ritsuka.sendMessage(jid, listMes, { quoted: quoted })
        }

    /** Send Button 5 Message
     * 
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} button
     * @returns 
     */
        Ritsuka.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        Ritsuka.sendMessage(jid, templateMessage)
        }

    /** Send Button 5 Image
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    Ritsuka.send5ButImg = async (jid , text = '' , footer = '', img, but = [], buff, options = {}) =>{
        let resize = await Ritsuka.reSize(buff, 300, 150)
        let message = await prepareWAMessageMedia({ image: img, jpegThumbnail: resize }, { upload: Ritsuka.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Ritsuka.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Video
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Video
     * @param [*] button
     * @param {*} options
     * @returns
     */
    Ritsuka.send5ButVid = async (jid , text = '' , footer = '', vid, but = [], buff, options = {}) =>{
        let resize = await Ritsuka.reSize(buff, 300, 150)
        let message = await prepareWAMessageMedia({ video: vid, jpegThumbnail: resize }, { upload: Ritsuka.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Ritsuka.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /** Send Button 5 Gif
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} Gif
     * @param [*] button
     * @param {*} options
     * @returns
     */
    Ritsuka.send5ButGif = async (jid , text = '' , footer = '', gif, but = [], buff, options = {}) =>{
        let resize = await Ritsuka.reSize(buff, 300, 150)
        let a = [1,2]
        let b = a[Math.floor(Math.random() * a.length)]
        let message = await prepareWAMessageMedia({ video: gif, gifPlayback: true, jpegThumbnail: resize, gifAttribution: b}, { upload: Ritsuka.waUploadToServer })
        var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            Ritsuka.relayMessage(jid, template.message, { messageId: template.key.id })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} buttons 
     * @param {*} caption 
     * @param {*} footer 
     * @param {*} quoted 
     * @param {*} options 
     */
    Ritsuka.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        Ritsuka.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Ritsuka.sendText = (jid, text, quoted = '', options) => Ritsuka.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Ritsuka.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Ritsuka.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Ritsuka.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Ritsuka.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    Ritsuka.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await Ritsuka.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Ritsuka.sendTextWithMentions = async (jid, text, quoted, options = {}) => Ritsuka.sendMessage(jid, { text: text, mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'), ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Ritsuka.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await Ritsuka.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Ritsuka.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await Ritsuka.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    Ritsuka.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    Ritsuka.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    Ritsuka.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await Ritsuka.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
        try { throw { json: JSON.parse(file.toString()) } }
        catch (e) { if (e.json) throw e.json }
        }
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '', mimetype = type.mime, convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
        convert = await (ptt ? toPTT : toAudio)(file, type.ext),
        file = convert.data,
       pathFile = convert.filename,
       mtype = 'audio',
       mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'

        delete options.asSticker
        delete options.asLocation
        delete options.asVideo
        delete options.asDocument
        delete options.asImage

        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }
        let m
        try {
            m = await Ritsuka.sendMessage(jid, message, { ...opt, ...options })
        } catch (e) {
            console.error(e)
            m = null
        } finally {
            if (!m) m = await Ritsuka.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
            return m
        }
    }
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    Ritsuka.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await Ritsuka.getFile(path, true)
        let { mime, ext, res, data, filename } = types
        if (res && res.status !== 200 || file.length <= 65536) {
        try { throw { json: JSON.parse(file.toString()) } }
        catch (e) { if (e.json) throw e.json }
        }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await Ritsuka.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }

    /**
     * 
     * @param {*} jid 
     * @param {*} message 
     * @param {*} forceForward 
     * @param {*} options 
     * @returns 
     */
    Ritsuka.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await Ritsuka.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    Ritsuka.cMod = async (jid, message, text = '', sender = Ritsuka.user.jid, options = {}) => {
        if (options.mentions && !Array.isArray(options.mentions)) options.mentions = [options.mentions]
        let copy = message.toJSON()
        delete copy.message.messageContextInfo
        delete copy.message.senderKeyDistributionMessage
        let mtype = Object.keys(copy.message)[0]
        let msg = copy.message
        let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
        else if (content.caption) content.caption = text || content.caption
        else if (content.text) content.text = text || content.text
        if (typeof content !== 'string') {
            msg[mtype] = { ...content, ...options }
            msg[mtype].contextInfo = {
                ...(content.contextInfo || {}),
                mentionedJid: options.mentions || content.contextInfo?.mentionedJid || []
            }
        }
        if (copy.participant) sender = copy.participant = sender || copy.participant
        else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
        if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
        else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
        copy.key.remoteJid = jid
        copy.key.fromMe = areJidsSameUser(sender, Ritsuka.user.id) || false
        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    Ritsuka.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return Ritsuka
}

startRitsuka()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})