const botReplies = {
    "alive": "Njan ivide undu... Sathanic Bot active aanu! 🔥",
    "ping": "Speed check: 10ms. Ellaathum set aanu bro.",
    "welcome": "SATHANIC WHATSAPP CHAT-LEKK SWAGATHAM!",
    "error": "Sshyo... entho kuzhappam undu. Onnu koodi nokku.",
    "cloud_save": "Ningalude file GitHub-il safe aayi lock cheythu vechu. 🔒"
};

function getMalayalamReply(command) {
    return botReplies[command] || "Enikk manasilayilla, onnu koodi parayu.";
}

