// initial solution

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false
    }
    
    // have an array with all characters of s
    letters = s.split("")

    // iterate through t string and remove the char from the array
    for (let j = 0; j < t.length; j++) {
        if (letters.includes(t[j])) {
            let index = letters.indexOf(t[j])
            letters.splice(index, 1);
        }
    }
    // if the length of the array after is 0 return true
    // else return false
    return letters.length == 0 
};

// cleaned solution 

var isAnagramCleaned = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    // iterate through t string and remove the char from the array
    for (let i = 0; i < s.length; i++) {
        if (t.includes(s[i])) {
            t = t.replace(s[i], "");
        } else {
            return false;
        }
    }
    // if the length of the array after is 0 return true
    // else return false
    return t.length == 0 
};

// fancy way

const isAnagramFancy = function(s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let sortedS = s.split('').sort().toString();
    let sortedT = t.split('').sort().toString();

    return sortedS = sortedT;
}

