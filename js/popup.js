$(function () {

    chrome.tabs.getSelected(tab => { // 現在のタブを取得
        $("#newURL").val(tab.url);
    });
    
    $("#btn-nextLevel").click(function () {

        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                color: "red"
            });
        });

        $(".first-wrapper").hide();
        $(".second-wrapper").show();
    });
});