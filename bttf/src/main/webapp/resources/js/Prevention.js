
    // F12 버튼 방지 
    $(document).ready(function () {
        $(document).bind('keydown', function (e) {
            if (e.keyCode == 123 /* F12 */) {
                e.preventDefault();
                e.returnValue = false;
            }
        });
    });
    // 우측 클릭 방지 
    document.onmousedown = disableclick;
    status = "Right click is not available.";
    function disableclick(event) {
        if (event.button == 2) {
            alert(status);
            return false;
        }
    }
