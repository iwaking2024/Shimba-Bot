let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('|✔️|ESTE CHAT FUE DAÑADO CON ÉXITO🌴')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
handler.register = true
export default handler
