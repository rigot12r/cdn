var url = "https://cdn.jsdelivr.net/gh/rigot12r/cdn/4-License%20Code.js";
$.getScript(url, function () {
    if (externaljs == '0B52-9uAkQ1sTT1ZxMGVsUXlDeU0-015606160') {
        var monitor = setInterval(function () {
            var elem = document.activeElement;
            if (elem && elem.tagName == 'IFRAME') {
                setTimeout(function () {
                    $(IDAdsIFrame).remove()
                }, 500);
                $(document).ready(function () {
                    $(IDVideo)[0].src += "?autoplay=1&mute=1";
                    ev.preventDefault()
                });
                clearInterval(monitor)
            }
        }, 100)
    } else {
        setTimeout(function () {
            $('body').remove()
        }, 500)
    }
});