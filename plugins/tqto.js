let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO
╭═══════════════════════
║╭──❉ 〔 TERIMAKASIH 〕 ❉──────
║│➸ *OWNER* : *_JAROT_*
║│➸ *BOT*: *_BOTZ OFFICIAL_*
║│➸ *_LAYANAN API_*
║│➸ *_ALYA_*
║│➸ *_BOTCAHX_*
  •BASE NURUTOMO
═════════════
`.trim(), watermark, 'TERIMAKASIH👋', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh
