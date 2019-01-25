window.onload = function () {
    fnTab();
}

function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}

function bind(obj, ev, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}

function addClass(obj, sClass) {
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) {
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}

function fnTab(){
    var oTab = document.getElementById("tabPic");
    var oList = document.getElementById("picList");
    //导航个数
    var aNav=oTab.getElementsByTagName("nav")[0].children;
    var oTimer=0;
    //当前位置index
    var iNow=0;
    //移动后translate值
    var iX=0;
    //设备宽度
    var iW=view().w;
    //开始触摸的位置
    var iStartTouchX=0;
    //当前的translate值
    var iStartX=0;
    bind(oTab,"touchstart",fnStart);
    bind(oTab,"touchmove",fnMove);
    bind(oTab,"touchend",fnEnd);
    auto();
    //自动轮播
    function auto(){
        oTimer = setInterval(function(){
            iNow++;
            iNow=iNow%aNav.length;
            //每次根据当前位置个数进行切换
            tab();
        },2000);
    }
    //轮播切换
    function tab()
    {
        iX=-iNow*iW;
        oList.style.transition="0.5s";
        oList.style.WebkitTransform=oList.style.transform="translateX("+iX+"px)";
        for(var i=0;i<anav.length;i++) {="" removeclass(anav[i],"active");="" }="" addclass(anav[inow],"active");="" function="" fnstart(ev)="" olist.style.transition="none" ;="" 最近一次触发该事件的手指信息,阻止默认事件="" ev="ev.changedTouches[0];" istarttouchx="ev.pageX;" istartx="iX;" clearinterval(otimer);="" fnmove(ev)="" 移动后的位置-开始的位置="距离" var="" idis="ev.pageX-iStartTouchX;" 距离+当前的translate值="move后的translate" ix="iStartX+iDis;" olist.style.webkittransform="oList.style.transform="translateX("+iX+"px)";" fnend()="" 当前的距离="" 当前设备的宽度="当前的位置四舍五入" inow="iX/iW;" if(inow<0)="" if(inow="">aNav.length-1)
        {
            iNow=aNav.length-1;
        }
        tab();
        auto();
    }
}
</anav.length;i++)>