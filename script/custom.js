/*컨테츠 슬라이드*/
    var slideCount = $(".slideimg01").length;
    var currentIndex = 0;
    var slidePosition;
    
    setInterval(function(){
        if(currentIndex < slideCount - 1){
            currentIndex++;
        }else {
            currentIndex = 0;
        }
        slidePosition= currentIndex * (-1200)+"px";
        $(".slidelist01").animate({left:slidePosition},400);
    },3000);
    
    
    
/*화이트 배너*/
window.addEventListener('scroll', function(){
            scrollMotion()
        });

        function scrollMotion(){
            const ele = document.querySelectorAll('.title01'),
            ele2 = document.querySelectorAll('.title02'),
            ele3 = document.querySelectorAll('.title03');
                    
            let eleOffsetArr = [];

            ele.forEach(e => {
                let eleOffset = e.getBoundingClientRect().top + window.pageYOffset - 300;
                eleOffsetArr.push(eleOffset)
            });
            
            eleOffsetArr.forEach((offset, idx) => {
                if( window.scrollY > offset ){
                    setTimeout(function () {
                        ele[idx].style.cssText = 'opacity:1; transform: translateX(-270px)';
                    }, 200);
                    setTimeout(function () {
                        ele2[idx].style.cssText = 'opacity:1; transform: translateX(0px)';
                    }, 200);
                    setTimeout(function () {
                        ele3[idx].style.cssText = 'opacity:1; transform: translateX(220px)';
                    }, 200);
                }else{
                    setTimeout(function () {
                        ele[idx].style.cssText = 'opacity:100; transform: translateX(110px)';
                    }, 200);
                    setTimeout(function () {
                        ele2[idx].style.cssText = 'opacity:100; transform: translateX(-170px)';
                    }, 200);
                    setTimeout(function () {
                        ele3[idx].style.cssText = 'opacity:100; transform: translateX(-50px)';
                    }, 200);
                }
            });
        }
    
    
    
/*컨텐츠 이미지 슬라이드*/    
$(".sub01").mouseover(function(){
    $("#cont").find(".subimg > ul").stop().slideDown();

});
$(".sub01").mouseout(function(){
    $("#cont").find(".subimg > ul").stop().slideUp();
});
    
    
    
    
/*카테고리 화살표 슬라이드*/    

    $(document).ready(function(){
    var i = 0;
    $('#right').click(function(){
        i++;
        if(i > 3){
            i = 0;
        }
        $('#img_wrap').animate({
            left: -300 * i
        });
    });

    
    $('#left').click(function(){
        i--;
        if(i < 0){
            i = 3;
        }
        $("#img_wrap").animate({
            left: -300 * i
        });
    });
});    
    
    
/*이미지 반쪽 슬라이드*/
    var slideCount2 = $(".slideimg02").length;
    var currentIndex2 = 0;
    var slidePosition2;
    
    setInterval(function(){
        if(currentIndex2 < slideCount2 - 1){
            currentIndex2++;
        }else {
            currentIndex2 = 0;
        }
        slidePosition2= currentIndex2 * (-1200)+"px";
        $(".slidelist02").animate({right:slidePosition2},400);
    },3000);