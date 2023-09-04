window.onload = function () {
    // 이벤트페이지 탭메뉴
    const titles = document.querySelectorAll(".event-info-titles .event-info-title");
    const infoBoxes = document.querySelectorAll(".event-info-box");

    titles.forEach((title, index) => {
        title.addEventListener("mouseenter", () => {
        // 모든 infoBoxes를 숨김
        infoBoxes.forEach((box) => {
            box.style.display = "none";
        });

        // 호버한 title의 data-target 속성을 가져와 해당하는 infoBox를 표시
        const target = title.getAttribute("data-target");
        const targetBox = document.querySelector(`.${target}`);
        targetBox.style.display = "flex";
        });
    });
};
