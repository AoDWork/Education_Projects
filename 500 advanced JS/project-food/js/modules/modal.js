function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector)

    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector)

    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";

    if(modalTimerId){
        clearInterval(modalTimerId);
    }
}

function modal(modalSelector, triggerSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector),
        modalTrigger = document.querySelectorAll(triggerSelector);

    modal.addEventListener("click", (e) => {
        if (e.target === modal || e.target.getAttribute("data-close") == "") {
            closeModal(modalSelector);
        }
    });

    //Реализуем закрытие по кнопке Esc клавиатуры
    document.addEventListener("keydown", (e) => {
        if (e.code === "Escape" && modal.classList.contains("show")) {
            closeModal(modalSelector);
        }
    });

    //=== 412 Модифицируем Модальное окно для показа по таймеру и при долистывании страницы до конца
    modalTrigger.forEach((btn) => {
        btn.addEventListener("click", () => openModal(modalSelector, modalTimerId));
    });

    function showModalByScroll() {
        if (
            window.scrollY + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll);
        }
    }

    window.addEventListener("scroll", showModalByScroll);
}

export default modal
export {closeModal}
export {openModal}
