
function show(num) {
    if(num == 1) {
        document.getElementById("aboutme").src = "https://i.ibb.co/dK4GWP8/1.jpg";
    } else if(num == 2) {
        document.getElementById("aboutme").src = "https://i.ibb.co/SQsHwmb/Kakao-Talk-20210919-181900931.jpg";
    } else if(num == 3) {
        document.getElementById("aboutme").src = "https://i.ibb.co/7QWdVhx/ddo.jpg";
    } else if(num == 4) {
        document.getElementById("aboutme").src = "https://i.ibb.co/nmvFkbW/Kakao-Talk-20210910-005954175-05.jpg";
    } else if(num == 5) {
        document.getElementById("aboutme").src = "https://i.ibb.co/VmNx3jd/woo.jpg";
    } else if(num == 6) {
        document.getElementById("aboutme").src = "https://i.ibb.co/thTG3Hb/Kakao-Talk-20210919-171041403-01.jpg";
    } else if(num == 7) {
        document.getElementById("aboutme").src = "https://i.ibb.co/m5YSy4Z/Kakao-Talk-20210919-183041965.jpg";
    } else if(num == 8) {
        document.getElementById("aboutme").src = "https://i.ibb.co/pJRHNxK/Kakao-Talk-20210910-005954175-02.jpg";
    };
}
window.onload = function(){

    $(function(){
        var $slider = $('.slider'),
            $firstSlide = $slider.find('li').first() // 첫번째 슬라이드
            .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기
      
        function PrevSlide(){ // 이전버튼 함수
          stopSlide();startSlide(); //타이머 초기화
          var $lastSlide = $slider.find('li').last() //마지막 슬라이드
          .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기  
          $secondSlide = $slider.find('li').eq(1)//두 번째 슬라이드 구하기
          .stop(true).animate({'opacity':0},400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
          $firstSlide = $slider.find('li').first() //맨 처음 슬라이드 다시 구하기
          .stop(true).animate({'opacity':1},400);//새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
        }
        
        function NextSlide(){ // 다음 버튼 함수
          stopSlide();startSlide(); //타이머 초기화
          $firstSlide = $slider.find('li').first() // 첫 번째 슬라이드
          .appendTo($slider); // 맨 마지막으로 보내기
          var $lastSlide = $slider.find('li').last() // 맨 마지막으로 보낸 슬라이드
          .stop(true).animate({'opacity':0},400); // fadeOut시키기
          $firstSlide = $slider.find('li').first()// 맨 처음 슬라이드
          .stop(true).animate({'opacity':1},400);// fadeIn 시키기
        }
        
        $('#next').on('click', function(){ //다음버튼 클릭
          NextSlide();
        });
        $('#prev').on('click', function(){ //이전 버튼 클릭
          PrevSlide();
        });
      
        startSlide(); // 자동 슬라이드 시작
        
        var theInterval;
      
        function startSlide() {
          theInterval = setInterval(NextSlide, 5000); //자동 슬라이드 설정
        }
      
        function stopSlide() { //자동 멈추기
          clearInterval(theInterval);
        }
        
        $('.slider').hover(function(){ //마우스 오버시 슬라이드 멈춤
          stopSlide();
        }, function (){
          startSlide();
        });
      });
};

