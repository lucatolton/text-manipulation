module.exports = {
    tiny: function(string) {
        if (typeof string !== "string") throw new TypeError('string expected');
        return string.replace(/\s/g, '');
    },

    small: function(string) {
        if (typeof string !== "string") throw new TypeError('string expected');
        return string.toLowerCase();
    },

    big: function(string) {
        if (typeof string !== "string") throw new TypeError('string expected');
        return string.toUpperCase();
    }
}