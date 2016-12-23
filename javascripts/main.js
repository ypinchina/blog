/**
 * Created by Aoyama Nanami on 2016/12/5.
 */
// 入口
$(document).ready(function () {

    showTopLogo();
    sidebar();
    cnzzLoad();

})

var topButtom = $(".slice_bar .top");
var right_info = $('.person_info');

function sidebar() {
    var isSidebarVisible;
    var SIDEBAR_WIDTH = 280;
    right_info.on('click', function () {
        var sidebarWidth = isSidebarVisible ? 0 : SIDEBAR_WIDTH;

        $('.about_me').animate({
            width: sidebarWidth
        }, 800);
        $('.center_container').animate({
            paddingRight: sidebarWidth
        }, 800);

        isSidebarVisible = !isSidebarVisible;
    });
}

function showTopLogo() {
    topButtom.fadeOut();
    $(window).scroll(function () {
        if ($(document).scrollTop() > 400) {
            topButtom.fadeIn();
        } else {
            topButtom.fadeOut()
        }
    });
    topButtom.click(function () {
        if ($(document).scrollTop() == 0) {

            return null;
        }//解决多次点击top的BUG

        else {
            $("html,body").animate({scrollTop: 0}, 1000);
        } //点击回到顶部
    })


}
function cnzzLoad() {
    var cnzz = $("#cnzz_stat_icon_1261034251");
    cnzz.wrap("<div style=\'width: 100%;background-color: #333;\'></div>");
    cnzz.addClass("center_container");

}
