function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    const tabs = document.querySelectorAll(tabsSelector), // кнопки для подсветки активной
        tabsContent = document.querySelectorAll(tabsContentSelector), // контент таба
        tabsParent = document.querySelector(tabsParentSelector); // родительский

    function hideTabContent() {
        tabsContent.forEach((item) => {
            //перебираем элементы и назначаем всем стиль
            //item.style.display = "none";    
            item.classList.add("hide"); 
            item.classList.remove("show", "fade");
        });
        tabs.forEach((item) => {
            item.classList.remove(activeClass); 
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add("show", "fade"); 
        tabsContent[i].classList.remove("hide");
        tabs[i].classList.add(activeClass);
    }
   
    hideTabContent(); 
    showTabContent(); 

    tabsParent.addEventListener("click", (event) => {
        const target = event.target; 

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs