const isValid = function(s) {
    const stack = [];
    const map = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    };

    for(let i = 0; i < s.length; i++) {
        if(['(', '{', '['].includes(s[i])) {
            stack.push(s[i]);
        } else if(stack[stack.length-1] == map[s[i]]) {
            stack.pop()
        }
    }
    return stack.length == 0;
}

// more complex solution

const isValid2 = function(s) {
    let mapLeft = {
        "(" : "p",
        "[" : "b",
        "{" : "c"
    }, mapRight = {
        ")" : "p",
        "]" : "b",
        "}" : "c"
    };
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(mapLeft[s[i]]) {
            stack.push(s[i])
        } else if(!stack.length || mapRight[s[i]] != mapLeft[stack.pop()]) {
            return false;
        }
    }
    return stack.length ? false : true;
}