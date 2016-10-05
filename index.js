var i18n = require("i18n");

i18n.configure({
    objectNotation: true,
    directory: __dirname + '/locales'
});

module.exports = i18n;
