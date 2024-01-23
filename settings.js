// S C R I P T  O R I  B Y  ZYKO MD 🔭
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -

// • Zyko MD (me)
// • Aldi Lesmana
// • Wh Mods Dev
// • Danzz Coding
// • Adrian
// • XTRAM-TEAM

//[!] Jangan Lupa Ganti Ownernya

const fs = require("fs")
const chalk = require("chalk")
/*============== NOMOR ==============*/
global.owner = ['6285175463174']
global.premium = ['6285175463174']
global.namaowner = "Suns"
global.namakontak = 'Suns' //UBAH KE NAMA KALIAN AGAR PUSH KONTAK SAAT DI IMPORT ADA NAMA MU
global.namebot = "SunsPush"
global.sig = 'https://instagram.com'
global.sgc = 'https://chat.whatsapp.com/LGdeWLOZzqP91tARC9AN3b'
/*============== PAYMENT ==============*/
global.adana = '-'
global.agopay = '-'
global.aovo = '-'
/*============== WATERMARK ==============*/
global.v = 'Credits Thanks Help Me'
global.sessionName = 'sessions'
global.wm = '© SunsRead'
global.packname = ""
global.author = "Sticker By SunsRead"
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ sᴜɴspᴜsʜ ッ'
/*============== MESS ==============*/
global.mess = {
    success: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'zyko md Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Suns md',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor suns md',
    wait: 'Sabar ya suns md sedang proses',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
global.limitawal = {
	free: "100",
        premium: "unlimited"
}
//Thum
global.thumb = fs.readFileSync("./img/zyko.png")
let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
