var IDLE_TIMEOUT = 5; //seconds
var _idleSecondsCounter = 0;
document.onclick = function () {
    _idleSecondsCounter = 0;
};
document.onmousemove = function () {
    _idleSecondsCounter = 0;
};
document.onkeypress = function () {
    _idleSecondsCounter = 0;
};

if (false) {
    window.setInterval(CheckIdleTime, 1000);
}

function CheckIdleTime() {
    _idleSecondsCounter++;
    var oPanel = document.getElementById("SecondsUntilExpire");
    if (oPanel)
        oPanel.innerHTML = (IDLE_TIMEOUT - _idleSecondsCounter) + "";
    if (_idleSecondsCounter >= IDLE_TIMEOUT) {
        //alert("Time expired!");
        //document.location.href = "logout.html";
        location.reload();
    }
}