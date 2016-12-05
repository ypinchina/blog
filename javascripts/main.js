/**
 * Created by Administrator on 2016/12/5.
 */
// 入口
$(document).ready(function () {
    showTopLogo();



})



function showTopLogo() {
    var topButtom = $(".slice_bar .top");

    var right_info = $('.person_info');//右方个人信息
    sidebar();
    var isSidebarVisible;
    var SIDEBAR_WIDTH = 570;


    topButtom.click(function () {
        $("html,body").animate({scrollTop: 0}, 1000);//点击回到顶部
    })

    function sidebar() {
        right_info.on('click', function () {
            var sidebarWidth = isSidebarVisible ? 0 : SIDEBAR_WIDTH;

            $('.about_me').animate({
                width: sidebarWidth
            }, 800);

            isSidebarVisible = !isSidebarVisible;
        });
    }

}
