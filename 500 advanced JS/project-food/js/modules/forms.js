import { openModal, closeModal } from "./modal";

function forms() {
    //=== 504 POST запрос, собираем данные из полей Имя и Телефон в двух местах(на сайте и в модальном окне)
    //=== + 507
    const forms = document.querySelectorAll("form");

    const message = {
        // loading: "Загрузка", // 505 добавили путь к спиннеру вместо текста
        loading: "img/form/spinner.svg",
        success: "Спасибо! До связи",
        failure: "Что-то пошло не так...",
    };

    forms.forEach((item) => {
        bindPostData(item);
    });

    //=== 510 Оптимизируем ф-и
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: data,
        });

        return await res.json();
    };

    function bindPostData(form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                `;
            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData("http://localhost:3000/requests", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
        });
    }

    //=== 505
    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add("hide");
        openModal(); // открываем обертку модального окна

        const thanksModal = document.createElement("div"); // Создаем елемент для нового модального окна
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>x</div> 
            <div class="modal__title">${message}</div> 
        </div>`;

        document.querySelector(".modal").append(thanksModal);

        setTimeout(() => {
            thanksModal.remove(); // удаляем наш новый блок
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal(); // закрываем окно
        }, 4000);
    }
}

export default forms