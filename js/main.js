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
    2. BADGES 작업 / 2-1. to top 버튼 작업
    : 페이지 스크롤에 따른 요소 제어
*/
// 페이지 스크롤에 영향을 받는 요소들을 검색
const badgeEl=document.querySelector("header .badges");

const toTopEl=document.querySelector("#to-top");

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

        // to top 버튼 보이기
        gsap.to(toTopEl,0.2,{
            x:0
        });
        
    }else{
        // 배지 보이기
        //badgeEl.style.display="block";
        //gsap.to(요소,지속시간,옵션)
        gsap.to(badgeEl,0.6,{
            opacity : 1,
            display : 'block',
        });

        // to top 버튼 숨기기
        gsap.to(toTopEl,0.2,{
            x:100
        });
    }
},300));


// 2-1. to top 버튼 작업 : 클릭 시 스크롤이 0으로 이동하도록 하기
/*
    구글 검색: scrollToPlugin cdn
    외부 라이브러리 연결 (html -> head 에 연결)
*/

toTopEl.addEventListener("click",function(){
    gsap.to(window,.7,{     //.7 은 0.7초와 같음
        scrollTo:0
    });
});






// figure(swiper 적용)
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

new Swiper(".promotion .swiper",{
    // direction: 'horizontal',   -> 수평으로 슬라이드(기본값)
    // direction: 'vertical',     -> 수직으로 슬라이드

    autoplay:{ //자동 재생 여부 설정
        delay: 5000 // 5초마다 슬라이드 전환
    },
    loop:true,  // 반복 재생 여부 설정
    slidesPerView:3,  // 한 번에 보여줄 슬라이드 갯수
    spaceBetween:10, // 슬라이드 사이 여백 설정
    centeredSlides:true,  //1번 슬라이드가 가운데 보이게 설정
    pagination:{ //페이지 번호 사용 여부 설정
        el:'.promotion .swiper-pagination', //페이지번호 요소 선택자
        clickable:true // 사용자의 페이지번호 요소 제어가능 여부 설정
    },

    navigation:{  // 슬라이드 이전/다음 버튼 사용 여부 설정
        prevEl:'.promotion .swiper-prev', //이전버튼 선택자
        nextEl:'.promotion .swiper-next'  //다음버튼 선택자
    }
});



// 부유하는 요소 

// 범위 랜덤 함수 (소수점 2째자리까지 랜덤으로)
function random(min,max){
    // .toFixed()를 통해 반환된 문자 데이터를
    // parseFloat() 함수를 통해 소수점을 가지는 숫자 데이터로 변환

    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// gsap.to(요소,지속시간,옵션)

// 부유하는(떠다니는) 요소를 만드는 함수
function floatingObject(selector,delay,size){
    gsap.to(
        selector, //적용할 요소 선택자
        random(1.5, 2.5),   //애니메이션 동작 시간 (지속시간)
        {
            delay:random(0,delay), //애니메이션 동작 시작 전 지연시간 설정
            y:size, // transform:translateY(수치); 와 같음. 수직으로 얼마나 움직일지 결정
            repeat:-1,  //몇 번 반복할지 설정 (-1 : 무한반복)
            yoyo:true,  //한번 재생된 애니메이션을 다시 뒤로 재생
            ease:Power1.easeInOut  //easing 함수 적용 (속도를 불일정하게 해주는?)
        }
    )
}

// 호출
floatingObject('.floating1',1,18);
floatingObject('.floating2',0.5,10);






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
new Swiper(".notice-line .swiper",{
    direction: 'vertical',
    autoplay: true,
    loop: true,
});

// promotion 슬라이드 토글 기능

// 슬라이드 영역 요소 검색
const promotionEl=document.querySelector(".gallery");
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



// 5. PROMOTION 스위퍼 작업
new Swiper(".gallery .swiper1",{
    // direction: 'horizontal',   -> 수평으로 슬라이드(기본값)
    // direction: 'vertical',     -> 수직으로 슬라이드

    autoplay:{ //자동 재생 여부 설정
        delay: 3000 // 3초마다 슬라이드 전환
    },
    loop:true,  // 반복 재생 여부 설정
    slidesPerView:3,  // 한 번에 보여줄 슬라이드 갯수
    spaceBetween:10, // 슬라이드 사이 여백 설정
    centeredSlides:true,  //1번 슬라이드가 가운데 보이게 설정
    pagination:{ //페이지 번호 사용 여부 설정
        el:'.gallery .swiper-pagination', //페이지번호 요소 선택자
        clickable:true // 사용자의 페이지번호 요소 제어가능 여부 설정
    },

    navigation:{  // 슬라이드 이전/다음 버튼 사용 여부 설정
        prevEl:'.gallery .swiper-prev', //이전버튼 선택자
        nextEl:'.gallery .swiper-next'  //다음버튼 선택자
    }
});






/*
    scrollMagic
    : 요소가 화면에 보여짐 여부에 따른 요소 관리

    구글 검색 : scrollMagic cdn
*/

// 관리할 요소들 검색
const spyEls=document.querySelectorAll("section.scroll-spy");
// 요소들 반복 처리
spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({ // 감시할 장면(Scene)
        triggerElement:spyEl,   //보여짐 여부를 감시할 요소를 지정
        triggerHook:.8     //화면(section?)의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show')   //요소가 화면에 보이면 'show' 클래스를 추가하라
    .addTo(new ScrollMagic.Controller()) //컨트롤러에 장면을 할당 (필수)
});


// footer
// 올해가 몇년도인지 계산(copyright 년도 부분)
const thisYear=document.querySelector(".this-year");
thisYear.textContent=new Date().getFullYear();


