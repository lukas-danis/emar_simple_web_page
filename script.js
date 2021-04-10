var visible = false;
function makeItVisible() {
    if (visible) {
        document.getElementById("olSource").style.display = 'none';
        visible = false;
    } else {
        document.getElementById("olSource").style.display = 'block';
        visible = true;
    }
}