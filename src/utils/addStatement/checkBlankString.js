function isBlankString(str) {
    return !str || /^\s*$/.test(str);
}

module.exports = isBlankString