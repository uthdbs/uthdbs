// 1. 검색창 작업
// 검색창 요소 (.search) 찾기
const searchEl=document.querySelector(".search");
const searchInputEl=searchEl.querySelector("input");

// 검색창 요소를 클릭하면 실행
searchEl.addEventListener("click",function(){
    searchInputEl.focus();
});

// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener("focus",function(){
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder","통합검색"); //고정내용으로 "통합검색"이라는 텍스트를 넣음
});

// 검색창 요소 내부에 실체 input 요소에서 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener("blur",function(){
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder","");
});


/*
    2. BADGES 작업
    : 페이지 스크롤에 따른 요소 제어
*/
// 페이지 스크롤에 영향을 받는 요소들을 검색
const badgeEl=document.querySelector("header .badges");

/*
    구글 검색 : lodash cdn
    cdnjs.com -> 실행
    lodash -> 실행
*/
// _.throttle(함수,시간)

/*
    애니메이션
    구글검색 : gsap cdn
    cdnjs.com
    gsap -> 클릭
*/
// gsap.to(요소,지속시간,옵션)

window.addEventListener("scroll",_.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500){
        // 배지 숨기기
        //badgeEl.style.display="none";
        //gsap.to(요소,지속시간,옵션)
        gsap.to(badgeEl,0.6,{
            opacity : 0,
            display : 'none',
        });
    }else{
        // 배지 보이기
        //badgeEl.style.display="block";
        //gsap.to(요소,지속시간,옵션)
        gsap.to(badgeEl,0.6,{
            opacity : 1,
            display : 'block',
        });
    }
},300));



// 캐러셀(bxSlider) 스크립트 설정
$(document).ready(function(){


    // bxSlider 스크립트 설정
    $(".bxslider").bxSlider({ 
        mode:'horizontal',  //가로방향
        slidWidth:600,  //너비값
        captions:true,  //제목표시 (html파일에서 title지정한 것)
        auto:true,  //자동실행
        autoControls:true,  //컨트롤 버튼(재생/정지) 표시
        stopAutoOnclick:true,  //클릭해서 자동 실행 멈춤
        autoHover:true,  //마우스 올리면 일시 중지
        pause:1500,  //자동실행 시 화면 전환 간격 (밀리초)
    });
});


// NOTICE
/*
    swiper
    구글 검색 : swiper cdn
    swiperjs.com
*/
/*
    new Swiper(요소,옵션);

    new Swiper(".swiper",{
        direction:"vertical",   // 수직 슬라이드
        autoplay:true,          // 자동재생 여부
        loop:true,              // 반복재생 여부
    })
 */

// 슬라이드 요소 관리
new Swiper('.notice-line .swiper',{
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

// promotion 슬라이드 토글 기능

// 슬라이드 영역 요소 검색
const promotionEl=document.querySelector(".promotion");
// 슬라이드영역을 토글하는 버튼 검색
const promotionToggleBtn=document.querySelector(".toggle-promotion");

// 슬라이드 영역 숨김 여부 기본값
let isHidePromotion=false;

// 토글 버튼을 클릭하면
promotionToggleBtn.addEventListener("click",function(){
    // 슬라이드 영역 숨김 여부를 반댓값으로 햘당
    isHidePromotion=!isHidePromotion;
    // 요소를 숨겨야하면
    if(isHidePromotion){
        promotionEl.classList.add("hide");
    }else{
        promotionEl.classList.remove("hide");
    }
});