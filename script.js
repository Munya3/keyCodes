
// Due to keyCode been deprecated i had to manually enter the keys.
const keyCodeMap = {
    "Enter": 13,
            "Space": 32,
            "Backspace": 8,
            "Tab": 9,
            "Shift": 16,
            "Control": 17,
            "Alt": 18,
            "CapsLock": 20,
            "Escape": 27,
            "ArrowUp": 38,
            "ArrowDown": 40,
            "ArrowLeft": 37,
            "ArrowRight": 39,
            "Insert": 45,
            "Delete": 46,
            "Home": 36,
            "End": 35,
            "PageUp": 33,
            "PageDown": 34,
            "NumLock": 144,
            "ScrollLock": 145,
            "Pause": 19,
            "PrintScreen": 44,

            // Function keys
            "!": 112,
            "@": 113,
            "#": 114,
            "$": 115,
            "%": 116,
            "^": 117,
            "&": 118,
            "*": 119,
            "(": 120,
            ")": 121,
            "_": 122,
            "+": 123,

            // Numbers
            "0": 48, "1": 49, "2": 50, "3": 51, "4": 52, 
            "5": 53, "6": 54, "7": 55, "8": 56, "9": 57,

            // Alphabet (lowercase and uppercase)
            "a": 65, "b": 66, "c": 67, "d": 68, "e": 69, 
            "f": 70, "g": 71, "h": 72, "i": 73, "j": 74,
            "k": 75, "l": 76, "m": 77, "n": 78, "o": 79, 
            "p": 80, "q": 81, "r": 82, "s": 83, "t": 84, 
            "u": 85, "v": 86, "w": 87, "x": 88, "y": 89, "z": 90,
            "A": 65, "B": 66, "C": 67, "D": 68, "E": 69,
            "F": 70, "G": 71, "H": 72, "I": 73, "J": 74,
            "K": 75, "L": 76, "M": 77, "N": 78, "O": 79,
            "P": 80, "Q": 81, "R": 82, "S": 83, "T": 84,
            "U": 85, "V": 86, "W": 87, "X": 88, "Y": 89, "Z": 90,

            // Symbols and punctuation
            "`": 192, "~": 192, 
            "-": 189, "_": 189,
            "=": 187, "+": 187,
            "[": 219, "{": 219,
            "]": 221, "}": 221,
            "\\": 220, "|": 220,
            ";": 186, ":": 186,
            "'": 222, "\"": 222,
            ",": 188, "<": 188,
            ".": 190, ">": 190,
            "/": 191, "?": 191,

           
};

// display the key, keyCode , and event.code
document.body.addEventListener("keydown", function (event){
    let key = event.key;
    let keyCode = keyCodeMap[key] || "No mapped code";
    let Code = event.code;
    const keyDisplay = document.getElementById("showKey");
    
    keyDisplay.innerHTML = 
     ` <div class="key">
            ${key}
            <small>event.key</small>
        </div> 
        
        <div class="key">
            ${keyCode}
            <small>event.keyCode</small>
        </div>

        <div class="key">
            ${Code}
            <small>event.code</small>
        </div>`
    
    
});