const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5WV25KqOBSG3yW32sNZwKquGkTEE4qKok7NRSRBw9kQUXqX7z6F7p7uqn2YHq5SQP78a61vrXwDWU5KPME16H4DBSUVZLhZsrrAoAt6lzDEFLQBggyCLiBWWlsTUoWFjjf12Y4OUd8kiNGYrYblfBueVgNNcPw6Ll/BvQ2KyyEhwW8ERaXF2QG3EebRIdzUrkoT58aFnI/QyLb4Os5mXJSoZl9Yv4J7owgJJdnRKk44xRQmE1y7kNCv2YfT8apOvdDjtFIjuuv7lgFP3BkX893cP/cr04dKRXMy/KJ93fKut0vPEY/X+ZISjGE52wjsxjnOVS0T402XVK5j54ue87RfkmOG0QjhjBFWfznvrWkJ1dHVHE9iy11TZ726yfYmbYnHeHhenN1VeW4ZrnXxs/xrxjvjJe7b0/xWq6HlaV7UCVxX6Gn12xlP5oEH37LYXgQDUdp9Nu7Sd1bi/5P3tK9548E4uvG2WM3ghsOeulsn+tITyZtQ+JXBHaPDPjgNd1+zf7nVeu9UcNfaxPswiQRsx76/9XruZjPl/OECvs38nbsTr8aHfcgu9HcuD+ZgZtRkFQ3gNaPRynXokl2DwYbh6hyeUW8pqbfoHNZkHovzvcZH28Cw/E6wPxzRpGfSQjga5uBUke1N23h4vZS40/X1EVGM6xECXeHeBhQfSckoZCTPHu80tQ0gqlY4oJg90gt4ZxxIA5kbqmQ/qzwRD5YzxqdnTsqljau00CxOteAiYFi+gjYoaB7gssRoSEqW09rBZQmPuATdvx6VaoKmOM0ZHhPUYNtRVUHhdVkTtD/LP64nyEpYFH9kmIE2CGmeOhh0Gb3gNnhs0HjDNCx9oEk9sdPjZUswLU2VJUOQVFE35SbE9HmoR1JcMpgWoCuoMi/rHYXX7n+3QYZv7MlPE7UktEFIaMnW2aVIcoje4Xr/CIMgv2RsVWeB2SwwBd1PrzFjJDuWTWSXDNLgRCpsNnGAbgiTEt/bAOGKBLjRA/0oYnzdnyxWE93g54nhxb3tosncKc+evygdXleQIr2gUNNfZJ6XXzQBCS8IhQGPFAHzGIMmHc/Wbfb8kqTrejPPhsqbPyrhOnPftvNhPuXE3ULQHjQ8EcAUo/csH2AQXwovj3H2G11ulfiGaS1K75yHYo70mV6j3knkp4tPuk+0QPfbx7g0c9Toea7qmKqngqZazTk/0ND9gYf7vzlvNiDMIElK0AXmuBYYDYbW/KLpKm/bhnU0zKMBPmr03nNPphHVFTI8HlRlMAzYNbsQw1luRgeqZC0UxFqfTAaBimXxun79iQjogoSsx7Wyahkt9XZVcR06as9WF1ja26lfKAVXOQOp2PbH+9tIUYfG4hYOONmyDYfh7bJ/rhTBm8NtWhJxa7upoLfkqWm8Nqc9Wfl8WMEt+FSx49rHyOuMS32P6vPNrPUgqaJeJB1X4uJWqGlHivpZNo7J0ki3ciGarak24twykuuNzwxYCB2j6MWSN2pVZPGcBo9plHy/Bcj3Pn2SFRL8GKoZbCr0H7X5zDh/b3+S+D6lf8FRbws5vDvJdqu1XErTYKzmx761Wdmd1p7LtmPXkMlpO5cus3IA7k3zFglkYU7T5hLNEM0JAm2QwJIZH236s86X2yCtjaJYMcjeuxsYzWPu5+D+D0svCReACAAA',
    PREFIXE: process.env.PREFIX || ",",
    OWNER_NAME: process.env.OWNER_NAME || "سۣۗہيۣۗہفۣۗہ آلَقۣۗہآضۣۗہيۣۗ",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "967714585737",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'روبوت ذكاء اصطناعي خاص بــ،سۣۗہيۣۗہفۣۗہ آلَقۣۗہآضۣۗہيۣۗ',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

