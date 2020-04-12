let homebuttonsHTML = `
<div class="home-button" id="add-to-web"><div class="button-text">Add to web</div></div>
<div class="home-button" id="manage-webs"><div class="button-text">View web</div></div>
`;




const logResponse = response => {
    console.log(response)
}


document.addEventListener('click', function(){
    //"New web" button pressed
    if(event.target.id=="add-to-web" || event.target.parentElement.id=="add-to-web"){
        document.getElementById('button-area').innerHTML = `<div style=" margin-left: -20px; background: white; font-weight: bold;"><label for="name">Name your link: </label>
        <input type="text" id="name" name="name"><div class="save-text">Add Link</div>`
    }
    if(event.target.innerHTML==="Add Link"){
        let params = {
            active: true,
            currentWindow: true
        }
        chrome.tabs.query(params, tabs => {
            let url = tabs[0].url;
            document.getElementById('button-area').innerHTML = `<h1 style="color: green;" >Success! Saved: ${url}</h1>`
        });

    }
})

