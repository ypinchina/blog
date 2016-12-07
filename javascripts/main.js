/**
 * Created by Administrator on 2016/12/5.
 */
// 入口
$(document).ready(function () {
    showTopLogo();
    sidebar();
    })

var topButtom = $(".slice_bar .top");
var right_info = $('.person_info');

function sidebar() {
    var isSidebarVisible;
    var SIDEBAR_WIDTH = 540;
    right_info.on('click', function () {
        var sidebarWidth = isSidebarVisible ? 0 : SIDEBAR_WIDTH;

        $('.about_me').animate({
            width: sidebarWidth
        }, 800);
        $('.center_container').animate({
            paddingRight: sidebarWidth-230
        }, 800);

        isSidebarVisible = !isSidebarVisible;
    });
}
function showTopLogo() {

    topButtom.click(function () {
        if($(document).scrollTop()==0){
            return null;
        }//解决多次点击top的BUG

       else{$("html,body").animate({scrollTop: 0}, 1000);} //点击回到顶部
    })



}
