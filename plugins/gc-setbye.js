let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sBye = text
m.reply('[❗]MENSAJE DE ADIÓS CONFIGURADO CORRECTAMENTE PARA ESTE GRUPO ')
} else throw `[❗]INGRESA EL MENSAJE DE DESPEDIDA QUE QUIERES AGREGAR UTILIZAR: \n- @user (mención)`
}
handler.help = ['setbye <text>']
handler.tags = ['group']
handler.command = ['setbye'] 
handler.admin = true
handler.register = true
export default handler
