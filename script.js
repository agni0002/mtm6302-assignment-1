let init_val = 128000; 

function addEmojis() {

    for (let i = 0; i < 100; i++) {
        const div = document.createElement('div');
        div.id = "content";
        div.className="content";
    
        div.innerText += `&#${init_val}`;
        div.innerHTML += ` &#${init_val}`;
    
        document.getElementById("emotes").appendChild(div);
        init_val++;
    }
}

addEmojis();