function newSwiper() {
    mySwiper.appendSlide("<div class=\"swiper-slide aslide\">" +
        "<table align='center' style='height:80%;'>" +
        "<tr style=\"height:20%\">" +
        "</tr>" +
        "<tr>" +
        "<td align=\"center\" class=\"select\" onclick=\"justChoose()\">JUST CHOOSE!</td>" +
        "</tr>" +
        "<tr>" +
        "<td align='center'>" +
        "<textarea name='' id='' cols='25' rows='10' class='text'></textarea>" +
        "</td>" +
        "</tr>" +
        "</table>" +
        "</div>");
}
function realChoose() {
    if (mySwiper.pagination.bullets.length > 2) {
        var c = parseInt(Math.random()*(mySwiper.slides.length-1),10);
        mySwiper.slideTo(c, 1500)
    }
}