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



    // 모달 작업 (팝업창)
    $("#appication").on("click",function(){
        $("#modal").addClass("active");
    });

    $(".button").on("click",function(){
        $("#modal").removeClass("active");
    });




// footer
// 올해가 몇년도인지 계산(copyright 년도 부분)
const thisYear=document.querySelector(".this-year");
thisYear.textContent=new Date().getFullYear();