function httpGet(theUrl)
{
  var xmlHttp = null;

  xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false );
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

async function statusfunction() {
    const fivemstatus = httpGet("https://raw.githubusercontent.com/Vaneeyo/data/main/fivemglobal").toString();
    const warzonestatus = httpGet("https://raw.githubusercontent.com/Vaneeyo/data/main/warzone").toString();
    const apexstatus = httpGet("https://raw.githubusercontent.com/Vaneeyo/data/main/apex").toString();
    const ruststatus = httpGet("https://raw.githubusercontent.com/Vaneeyo/data/main/rust").toString();
    const coldwarstatus = httpGet("https://raw.githubusercontent.com/Vaneeyo/data/main/coldwar").toString();
    console.log(coldwarstatus)
    document.getElementById("gamestatusfivem").innerHTML = fivemstatus;
    document.getElementById("gamestatuswarzone").innerHTML = warzonestatus;
    document.getElementById("gamestatusapex").innerHTML = apexstatus;
    document.getElementById("gamestatusrust").innerHTML = ruststatus;
    document.getElementById("gamestatuscoldwar").innerHTML = coldwarstatus;
}

window.onload = function () {
    statusfunction()
}