const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/lolice', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'error.png', '🚔🚨Lolicons you only belong in jail🚨🚔', m);
};
handler.help = ['lolice'];
handler.tags = ['maker'];
handler.command = /^(lolice)$/i;
handler.register = true
handler.premium = true
export default handler;
