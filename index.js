const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.getElementById("pass-one-el")
let passTwoEl = document.getElementById("pass-two-el")
let messageEl = document.getElementById("message-el")

function generatePass () {
    let passOne = ""
    let passTwo = ""
    for(let i = 0; i < 15; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        
        passOne += characters[randomIndexOne]
        passTwo += characters[randomIndexTwo]
    }
    
    passOneEl.textContent = passOne
    passTwoEl.textContent = passTwo    
}

function copyOne() {
    copy(passOneEl)
}

function copyTwo() {
    copy(passTwoEl)
}

function copy(el) {
    el.onclick = function() {
        document.execCommand("copy");
    }

    el.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", el.textContent);
            console.log(event.clipboardData.getData("text"))
            messageEl.style.display = "block"
            messageEl.textContent = event.clipboardData.getData("text")
            setTimeout(() => {
                messageEl.style.display = "none"
            }, 1000)
        }
    });
}