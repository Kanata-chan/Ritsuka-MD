process.on('uncaughtException', console.error) //Safe Log Error 
const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.owner = ['628811524907','6283825144098']
global.tesel = ['6281111111111']
global.ownerName = 'Tayo'
global.namaBot =  'Ritsuka Bot'
global.packname = '' 
global.author = 'Reisuke x Ritsuka'
global.prefa = ['','!','.','#','!']
global.sessionName = 'session'
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.doc7 = 'image/jpeg'
global.doc8 = 'audio/mpeg'
global.doc9 = 'video/mp4'
global.mylogo = ["https://telegra.ph/file/75a3b01da9934ead5890e.jpg","https://telegra.ph/file/38e0c6fcaa71551ed6407.jpg","https://telegra.ph/file/551ccaa299c0b37e80b59.jpg","https://telegra.ph/file/4feacc10e29b71072bc91.jpg","https://telegra.ph/file/05e2ab0424961897838e0.jpg","https://telegra.ph/file/8d25c175697d2dc40107a.jpg","https://telegra.ph/file/a0eab20252073b35a332f.jpg"]
global.aikey = [
    "sk-bq2v5nygdeudbsrexi89t3blbkfjhswmke797vtfuhhag3d5",
    "sk-mjnnvfw8qkhkgld9efdst3blbkfjitoqp8bkwfqffuuwqbvt",
    "sk-6zvuufmbkuydhfpgmv9xt3blbkfj2r2jon6vkwf70wnznd2c",
    "sk-uwd0pzmuybmn93ubzsgft3blbkfje0rj9b6ggpwrlf0urg77",
    "sk-d2or4gcwycd9uvo5fbggt3blbkfj4jtjhlcxkdssabubjs0e"
]
//Message Nya Ubah Disini
global.mess = {
admin: '*ᴏɴʟʏ ᴀᴅᴍɪɴ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
botAdmin: 'Fitur ini hanya bisa di gunakan ketika bot menjadi admin!',
botOwner: '*ᴏɴʟʏ ᴅᴇᴠᴇʟᴏᴘᴇʀ* • ᴄᴏᴍᴍᴀɴᴅ ɪɴɪ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ ʙᴏᴛ',
group: 'Perintah ini hanya bisa di gunakan dalam group!', 
private: 'Only Private Chat',
endLimit: 'Limit Harian Sudah Habis, Limit Akan Direset Besok',
wait: '[ WAIT ] Sedang di proses⏳ silahkan tunggu sebentar',
link: '[❗] Link yang anda kirim tidak valid!', 
link1: 'Link Yang Anda Gunakan Eror',
nsfw: 'Nsfw Belum Diaktifkan Di Group ini',
regis: 'Silakan Daftar terlebih dahulu dengan ketik #verifikasi nama.umur\nContoh : #verifikasi Night.19',
done: 'Done!',
}


//Sesuaikan
global.thumb = { url : 'https://telegra.ph/file/f43906608fc36faeb5acb.jpg'}
global.thumb1 = 'https://telegra.ph/file/f43906608fc36faeb5acb.jpg'
global.thumb2 = { url: 'https://telegra.ph/file/f43906608fc36faeb5acb.jpg'}
global.thumb3 = { url: 'https://telegra.ph/file/f43906608fc36faeb5acb.jpg'}
global.erorurl =  'https://telegra.ph/file/f43906608fc36faeb5acb.jpg'

    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
