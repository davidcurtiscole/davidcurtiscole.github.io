var flexOnly = window.prompt('enter what you copied');
var str = flexOnly;
var amount = str.split('\n').length;
var flexSplit = flexOnly.split("\n");
console.log(amount);

for (var i = 0; i < amount; i++) {

    var rows = document.querySelectorAll("table tbody tr");

    [].forEach.call(rows, function(tr) {
        var td = tr.querySelector("td:nth-child(4)");
        console.log(td ? td.textContent.trim() : "N/A");
        if (td && td.textContent.trim() === flexSplit[i]) {
            var notePad = tr.querySelector("td:nth-child(11)");
            if (notePad) {
                var overlay = notePad.querySelector(".dataTableEditTask");
                if (overlay) {
                    if (overlayIsFullyLoaded(overlay)) {
                        overlay.dispatchEvent(new Event("click", {
                            bubbles: true
                        }));
                    }
                }
            }
        }
    });

    function overlayIsFullyLoaded(overlay) {
        return true;
    };


    setTimeout(function() {
        if (document.getElementById('excludeFromDirected').checked === false) {
            document.getElementById('excludeFromDirected').click();
            setTimeout(function() {
                document.getElementsByClassName('ui-dialog-titlebar-close ui-corner-all')[1].click();
            }, 1500);
        } else {
            document.getElementsByClassName('ui-dialog-titlebar-close ui-corner-all')[1].click();
        }
    }, 1500);
};
