export default {
    // countWords: (inputString,stringToCount) => {
    //     console.log(inputString, stringToCount);
    //     let s = inputString.toString().replace(/(^\s*)|(\s*$)/gi, "");//exclude  start and end white-space
    //     console.log(s);
    //     if(s.length > 0){
    //         s = s.replace(/[ ]{2,}/gi, " ");//2 or more space to 1
    //         console.log(s);
    //         s = s.replace(/\n /, "\n"); // exclude newline with a start spacing
    //         console.log(s);
    //         if(typeof(stringToCount) !== undefined){
    //             let re = new RegExp('/'+stringToCount+'/g');
    //             return s.split(re).length;
    //         }
    //         return s.split(' ').filter(function (str) { return str != ""; }).length;
    //     }
    //     return "0";
    //     //return s.split(' ').filter(String).length; - this can also be used
    // },

    countWhiteSpace: (s) => {
        return s.split(" ").length - 1;
    },

    // newLinesCount: (s) => {
    //     return s.split(/\r\n|\r|\n/).length;
    // },

    // characterCount: (s, includeWhiteSpace) => {
    //     if (includeWhiteSpace) {
    //         return s.length;
    //     } else {
    //         return s.split(' ').join('').length;
    //     }
    // },

    removeWhiteSpace: (s) => {
        return s.split(' ').join('');
    },

    removeNewLine: (s) => {
        return s.replace(/(\r\n|\n|\r)/gm, "");
    },

    replace: (inputStr, valueToReplace, caseSensitive) => {
        return inputStr.replace(new RegExp(valueToReplace.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(!caseSensitive?"gi":"g")),(typeof(valueToReplace)=="string")?valueToReplace.replace(/\$/g,"$$$$"):valueToReplace);
    }
}


