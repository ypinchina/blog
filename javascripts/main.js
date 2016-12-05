ul {
    list-style: none;
}

a {
    text-decoration: none;
}

html {
    background-color: #fff;
    height: 2000px;
}

/*头部动画加载相关*/
@keyframes webload {
    0% {
        top: -430px;
        opacity: 0;

    }
    100% {
        top: 0;
        opacity: 1;
    }
}

/*居中类*/
.center_container {
    width: 900px;
    margin: 0 auto;
}

/*头部导航*/
.header {
    border-top: 5px #000 solid;
    position: absolute;
    top: 0;
    height: 430px;
    width: 100%;
    animation-duration: 1.5s;
    animation-delay: 1s;
    animation-name: webload;
    animation-fill-mode: both;
}

.header h2 {
    width: 280px;
    height: 27px;
    color: #fff;
    background-color: #000000;
    text-align: center;
    margin: 0 auto;
    -webkit-border-radius: 20px 0 20px 0;
    -moz-border-radius: 20px 0 20px 0;
    border-radius: 20px 0 20px 0;
}

.nav {
    font-size: 0;
    margin-top: 40px;
}

.nav .nav_ul a {
    display: inline-block;
    width: 150px;
    font-size: 16px;
    text-align: center;
    color: #000;

}

.nav .nav_ul a + a:hover {
    border-left: 2px solid #0088bb;
    border-right: 2px solid #0088bb;
    width: 146px;
}

.nav_active {
    width: 146px;
    border-left: 2px solid #0088bb;
    border-right: 2px solid #0088bb;

}

.nav .nav_ul a + a {
    margin-left: 20px;
}

.myLogo {
    width: 300px;
    height: 310px;
    margin: 10px auto 20px;
}

.myLogo .dendoh {
    width: 300px;
    height: 300px;
    background: url("../images/dendoh.jpg") center;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    transition: transform 1s ease-in;
}

.myLogo .dendoh:hover {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
}

/*左侧个人简介及回到顶部*/
.slice_bar {

    width: 32px;
    height: 84px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
}

.slice_bar span {
    display: inline-block;
    cursor: pointer;
}

.slice_bar .person_info {
    background: url("../images/personal.png");
    width: 32px;
    height: 32px;
}

.slice_bar .top {
    background: url("../images/align_top.png");
    width: 31px;
    height: 32px;
    margin-top: 20px;
}

/*个人信息侧边栏*/
.about_me {
    height: 100%;
    width: 280px;
    position: fixed;
    right: -285px;
    background-color: #fff;
    border: 5px solid #000;
    border-right: none;
}

.about_me .fix_area {
    width: 285px;
    height: 304px;
    background-color: #000;

}
.about_me .fix_area .myFavor{
    display: inline-block;
    width: 280px;
    height: 280px;
    background: url("../images/Love.png") center;
    padding-top: 20px;
}
.about_me h3{
    text-align: center;
}
