
/*Loading indicator on button*/
function showLoadingText() {
    console.log('test')
    document.getElementById("submit-filter").innerHTML = "Loading...";
}

function showOriginalText(originalButtonText){
    document.getElementById("login-submit").value = originalButtonText;
}

function setSourceIp() {
    fetch('/ip-addresses?label=' + document.getElementById("source-label").value)
    .then(response => response.text())
    .then(text => {
        document.getElementById("source-ip").value = text
    })
}

function setDestIp() {
    fetch('/ip-addresses?label=' + document.getElementById("dest-label").value)
    .then(response => response.text())
    .then(text => {
        document.getElementById("dest-ip").value = text
    })
}



                          
  