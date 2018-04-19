import { ICarouselItem } from "../shared/interfaces/ICarouselItem";

export const carouselData: ICarouselItem[] = [
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