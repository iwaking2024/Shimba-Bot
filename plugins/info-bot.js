import _0x5c69e8 from'fs';let handler=_0x3b0305=>_0x3b0305;handler['all']=async function(_0x387867){let _0x43c12c={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x387867['sender']['split']('@')[0x0]+':'+_0x387867['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'},_0x1b4da8='./lib/img/miku.mp3',_0x34fc6b=global['db']['data']['chats'][_0x387867['chat']];return/^bot$/i['test'](_0x387867['text'])&&!_0x34fc6b['isBanned']&&(conn['sendPresenceUpdate']('recording',_0x387867['chat']),await conn['reply'](_0x387867['chat'],'Hola,\x20dime\x20cómo\x20yo\x20puedo\x20ayudarte\x20',_0x43c12c,_0x387867),conn['sendMessage'](_0x387867['chat'],{'audio':{'url':_0x1b4da8},'fileName':'error.mp3','mimetype':'audio/mp4','seconds':'4556','ptt':!![]},{'quoted':_0x387867})),!0x0;};export default handler;