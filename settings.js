//===============================//
// SC BUG BOT XHIRO GENERASI KE TIGA 
// BASE : ALWAYSXDAMR66 
// RECODE FULL : NOXXHIRO / XHIRO
// USAHAKAN GUNAKAN BOT SEBAIK MUNGKIN
// BUY NO ENC? SUNG KELEGRAM OWNER
// @PENULISCODEX

//GUNAKAN BOT SEWAJARNYA BIAR GAK KENA BANNED DAN JANGAN LUPA SUBSCRIBE YT ALWAYSXDAMR66 
//XHIRO BOT GENERASI 3

//INFO BOT XHIRO GEN 3
//BASE : ALWAYSXDAMR66 
//RECODE : XHIRO
//CREDITS : NOXXHIRO
//YOUTUBE : https://www.youtube.com/@penuliscodexx
//===============================//
require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "628895154319" // ADD NOMOR LU BIAR BISA AKSES FITUR BOT XHIRO
global.namaowner = "RIIXOS"

//======== Setting Bot & Link ========//
global.namabot = "ALWAYSXRIF66" 
global.namabot2 = "ALWAYSXRIF66"
global.ownerbot = "ALWAYSXRIF66"
global.foother = "© COPYRIGHT ALWAYSXRIF66++"
global.idsaluran = "-"
global.linkgc = '-'
global.linksaluran = "-"
global.apitokendo = '-' // API AKUN DIGITAL OCEAN ANDA
global.linkyt = 'https://www.youtube.com'
global.linktele = "https://t.me/"
global.packname = "CREATED BY ALWAYSXRIF66++"
global.author = "-"
global.footer2 = '©-XXXXX'
global.foter1 = 'ALWAYSXRIF66++'
global.foter2 = 'ALWAYSXRIF66++ XSENTRY 608HZ'

//========== Setting Event ==========//
global.welcome = true
global.autoread = true
global.anticall = true
global.owneroff = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "_"
global.apikey = "_"
global.capikey = "_"

//========== Setting Panell 2 ==========//
global.domain2 = "-"
global.apikey2 = "-"
global.capikey2 = "-"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "-"
global.gopay = "-"
global.ovo = "-"
global.qr = fs.readFileSync("./media/qr.jpg")
                             
//========== Api Domain 1 ===========//
global.zone1 = "-"
global.apitoken1 = "-"
global.tld1 = "-"
//========== Api Domain 2 ==========//
global.zone2 = "-";
global.apitoken2 = "-";
global.tld2 = "-";
//========== Api Domain 3 ==========//
global.zone3 = "-";
global.apitoken3 = "-";
global.tld3 = "-";
//========== Api Domain 4 ==========//
global.zone4 = "-";
global.apitoken4 = "-";
global.tld4 = "-";
//========== Api Domain 5 ==========//
global.zone5 = "-";
global.apitoken5 = "-";
global.tld5 = "-";
//========== Api Domain 6 ==========//
global.zone6 = "-";
global.apitoken6 = "-";
global.tld6 = "-";

//========= Setting Message =========//
global.msg = {
"error": "Error terjadi kesalahan SUBSCRIBE YT ALWAYSXDAMR66",
"done": "Done Bang ✅ YT ALWAYSXDAMR66", 
"wait": "Bot Sedang Memproses Tunggu Sebentar Jangan Lupa Subscribe AlwaysXdamr66. . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup Jangan Lupa Subscribe AlwaysXdamr66!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup Jangan Lupa Subscribe AlwaysXdamr66!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin Jangan Lupa Subscribe AlwaysXdamr66", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot! Jangan Lupa Subscribe AlwaysXdamr66", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer Jangan Lupa Subscriber AlwaysXdamr66"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})