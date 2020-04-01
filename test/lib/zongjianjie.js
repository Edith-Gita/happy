
// $(document).ready(function(){
//     $(".item2").click(function(){
//         if ($(".item3").css("display")=="none"){
//             $(".item3").css("display","block");
//         }else{
//             $(".item3").css("display","none");
//         }            
//         });
       

// });
// 以上只能执行一次 因为用id，id调用JS时候首先用第一个id而且没法用第二个
// 以下可以多次执行 先隐藏后显示用CSS 需要隐藏的部分用display:none;
$(function() {
	$(".item2").bind("click", function() {
		var item3 = $(this).next(".item3");
		if (item3.is(":visible")) {
			item3.hide();
		} else {
			item3.show();
		}
	})
   })
//以下就是复制功能
function copyUrl2()  
{  
    var Url2=document.getElementById("biao1");  
   Url2.select(); // 选择对象  
   document.execCommand("Copy"); // 执行浏览器复制命令  
    alert("已复制好，可贴粘。");  
}  


 //导航栏点击滚到指定内容
 // 滚动导航定位
 function scrollNav(){
	var  sections = $(".JS_section"); 
	var  s_num = sections.length;
	sections.each(function(index,el){
		var _this = $(this);
		if( _this.offset().top <  $(document).scrollTop() +  偏移值 ){
			$("#JS_subaside li").removeClass("current").eq(index).addClass("current");
		}
	});
}


$(function(){
	var banOffTop=$(".subaside").offset().top;//获取到距离顶部的垂直距离
	var scTop=0;//初始化垂直滚动的距离
	$(document).scroll(function(){
		scTop=$(this).scrollTop();//获取到滚动条拉动的距离
		//console.log(scTop);查看滚动时，垂直方向上，滚动条滚动的距离
		if(scTop>=banOffTop){
		//核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
			$(".subaside").addClass("fixDiv");
		}else{
			$(".subaside").removeClass("fixDiv");
		}

	})
})