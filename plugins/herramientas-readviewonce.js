let { downloadContentFromMessage } = (await import('@whiskeysockets/baileys'));
let handler = async (m, { conn }) => {
if (!m.quoted) throw '*[❗] responder a un mensaje que se envió en vista una vez*'
if (m.quoted.mtype !== 'viewOnceMessageV2') throw '*[❗] El mensaje seleccionado no se ve una vez*'
let msg = m.quoted.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.mp4', msg[type].caption || '', m)
} else if (/image/.test(type)) {
return conn.sendFile(m.chat, buffer, 'error.jpg', msg[type].caption || '', m)
}}
handler.help = ['readvo']
handler.tags = ['tools']
handler.command = /^(readviewonce|read|revelar|readvo)$/i
handler.register = true
export default handler
