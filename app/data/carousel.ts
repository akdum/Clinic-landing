import { ICarouselItem } from "../shared/interfaces/ICarouselItem";

export const carouselData: ICarouselItem[] = [
    {
        isActive: true,
        isLeftAlign: false,
        pageName: "school.html",
        heading: "Скоро школа!",
        text: `А на сколько Ваш ребёнок ДЕЙСТВИТЕЛЬНО готов к школе?`,
        imgName: "school.jpg"
    },
    {        
        isActive: true,
        isLeftAlign: true,
        pageName: "massage_spine.html",
        heading: "Как избавиться от болей в спине?",
        text: `<h4>4, 5 и 6 июня</h4><h4>Диагностический приём мануального терапевта</h4><h4>Рекомендации для каждого конкретного случая</h4><p>Предварительная запись <strong>ОБЯЗАТЕЛЬНА</strong></p>`,
        imgName: "massage_spine_3.jpg"
    },
    {        
        isActive: true,
        isLeftAlign: true,
        pageName: "massage_spine.html",
        heading: "Избавьтесь от болей в позвоночнике за 3 дня",
        text: `<p>Пройдя комплексный курс лечения без операций<p><p>Только сегодня для <strong>первых 10 пациентов скидка 20%</strong> на курс по мануальной терапии при единовременной оплате 10 сеансов!</p>`,
        imgName: "massage_spine.jpg"
    },
    {
        isActive: true,
        isLeftAlign: false,
        pageName: "child_massage.html",
        heading: "Детский массаж по доступным ценам!",
        text: `<p>С заботой о Вашем малыше!</p>
        <div>Общий медицинский массаж 400 руб</div>
        <div>Общий медицинский массаж 10 сеансов 3650 руб</div>
        <div>Парафинотерапия 200 руб</div>`,
        imgName: "child-massage.jpg"
    },    
    {
        isActive: true,
        isLeftAlign: true,
        pageName: "massage_spine_2.html",
        heading: "Классический массаж",
        text: `<h2>Акция!</h2>
        <div>Весь май скидка 20% на комплекс 10 сеансов!</div>`,
        imgName: "massage_spine_2.jpg"
    },
    {
        isActive: true,
        isLeftAlign: true,
        pageName: "shutov_adv.html",
        heading: "Готовимся к лету",
        text: `Приём врача по лечебной физической культуре - всего 299р (консультация+ осмотр)!`,
        imgName: "physiotherapy.jpg"
    },
    {
        isActive: true,
        isLeftAlign: false,
        pageName: "children.html",
        heading: "Дети - цветы жизни!",
        text: "Поможем родителям найти общий язык с ребёнком, научится его понимать, сотрудничать, договариваться, правильно развивать.",
        imgName: "children.jpg"
    }, 
    {
        isActive: true,
        isLeftAlign: true,
        pageName: "med-info.html",
        heading: "Новый медицинский журнал",
        text: "Самые свежие и полезные новости в мире медицины.",
        imgName: "med-info.png"
    }
]