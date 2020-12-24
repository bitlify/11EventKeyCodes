const insert = document.getElementById("insert");


window.addEventListener("keydown", (e) => {
    insert.innerHTML = `
        <div class="box">
            <div class="key">
                ${e.key === " " ? "Space" : e.key} 
                <small>event.key</small>
            </div>
        </div>
        <div class="box">
            <div class="key">
                ${e.keyCode} 
                <small>event.keyCode</small>
            </div>
        </div>
        <div class="box">
            <div class="key">
                ${e.code} 
                <small>event.code</small>
            </div>
        </div>
    `
});