function fadeout() {
    $('#start-menu, video').fadeOut(200, function () {
        window.location.href = ("contact.html");
    });
}

function callForImages() {
    $.ajax({
        type: "GET",
        url: "/api/photo",
        contentType: "application/json",
        success: function (data) {
            var html = "<div style=\"display:none;\" class=\"pagecontainer\">";
            //if(data.length >0){
            $.each(data.folders, function (index, folder) {
                html += "<div class=\"imagecontainer\">" +
                    "<p class=\"albumtitle\">" + folder.foldername + "</p>";
                $.each(folder.files, function (index, file) {
                    var imgsrc = "images/content/" + folder.foldername + "/" + file;
                    if (getImageVertical("./" + imgsrc)) {
                        html += "<img class=\"image col-md-6\" src=\"" + imgsrc + "\"/>"
                    } else {
                        html += "<img class=\"image col-md-12\" src=\"" + imgsrc + "\"/>"
                    }
                });
                html += "</div>";
            });
            html += "</div>";
            console.log(html);
            var images = $('#images');
            images.html(html);
            $(".pagecontainer").fadeIn(80);
            $(".pagecontainer").slideDown(80);

            $("#imageoverlay").fadeIn(800);
        },
        error: function (err) {
            console.log(JSON.stringify(err));
            alert(err);
        }
    });


}
function getImageVertical(imgSrc) {
    var imgLoader = new Image(); // create a new image object
    imgLoader.onload = function () { // assign onload handler
        return (imgLoader.height / imgLoader.width > 1);
    }
    imgLoader.src = imgSrc; // set the image source
}
function hover(selector, replacement) {
    replacement.addClass('imagesBLOCK');
    selector.removeClass('imagesBLOCK');
    // vidbutton.attr("id", "vid")
}
function hoverout(selector, replacement) {

    replacement.attr("z-index", "-100");
    selector.attr("z-index", "100");
    // vidbutton.attr("id", "vid")
}
