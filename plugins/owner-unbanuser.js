let handler = async (m, { conn, text}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `[❗]ENTER THE @tag OF SOME USER`, fkontak, m)
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return conn.reply(m.chat, `[❗]INTRODUCIR EL @tag De algun usuario`, fkontak, m)
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `[❗𝐈𝐍𝐅𝐎❗]EL USUARIO FUE DESVANECIDO EXITOSAMENTE\n EL USUARIO AHORA PUEDE USAR EL BOT`, fkontak, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.register = true
handler.rowner = true
export default handler
