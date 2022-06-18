let handler = async (m, { conn }) => {
let caption = `*Gw tau lu cuman tes jaringan doang🗿*`

conn.sendButton( m.chat, caption, `©️ putrabotz`, `BIASA PUTRA`, `.👍`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
