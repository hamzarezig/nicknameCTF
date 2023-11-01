let name = document.getElementById("name")
let nickname = document.getElementById("nickname")

name.addEventListener("input", e => {
    nickname.innerText = roll13(name.value)
})

// btw this is my nickname : _l3uq1x}

const roll13 = str => {
    const s1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const s2 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let output = '';
    for (let i = 0; i < str.length; i++) {
        const index = s1.indexOf(str[i]);
        if (index != -1) {
            output += s2[index];
        }
        else {
            output += str[i];
        }
    }

    return output;
}