let handler = async(m, { conn }) => {
let revoke = await conn.groupRevokeInvite(m.chat)
await conn.reply(m.chat, `🔹️ _El enlace del grupo se restauró exitosamente.._\n♾ • Nuevo enlace: ${'https://chat.whatsapp.com/' + revoke}`, m)}
handler.command = ['resetlink', 'revoke']
handler.botAdmin = true
handler.admin = true
handler.group = true
handler.register = true
export default handler
