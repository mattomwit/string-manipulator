export default {

    /**
     * Return the number of visible words in a string.
     *
     * Words contain at least one alphanumeric character.
     *
     * @param {String} s
     */
    countWords: (s) => {
        s = s.replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
        s = s.replace(/[ ]{2,}/gi, " ");//2 or more space to 1
        s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
        return s.split(' ').filter(function (str) { return str != ""; }).length;
        //return s.split(' ').filter(String).length; - this can also be used
    },

    countWhiteSpace: (s) => {
        return s.split(" ").length - 1;
    },

    countNewLines: (s) => {
        return s.split(/\r\n|\r|\n/).length;
    },

    characterCount: (s, includeWhiteSpace) => {
        if (includeWhiteSpace) {
            return s.length - 1;
        } else {
            return s.split(' ').join('').length - 1;
        }
    },

    charaterOrWordCount: (s, stringToCount) => {
        return s.split(stringToCount).length - 1;
    },

    removeWhiteSpace: (s) => {
        return s.split(' ').join('');
    },

    removeNewLine: (s) => {
        return s.replace(/(\r\n|\n|\r)/gm, "");
    }
}


