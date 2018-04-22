import { IMagazine } from "../shared/interfaces/IMagazine";

export const magazinesData: IMagazine[] = [
    {
        imgName: 'МИ_04.jpg',
        address: '/files/med-info/МИ_04.pdf',
        title: 'Ноябрь 2017',
        links: [
            {
                title: 'Инсульт - это не приговор',
                address: '/files/med-info/МИ_04.pdf#page=2'
            },
            {
                title: 'Кинезотерапия на подвесных системах «Экзарта»',
                address: '/files/med-info/МИ_04.pdf#page=5'
            },
            {
                title: 'Сеть многопрофильных  клиник «Доктор плюс»',
                address: '/files/med-info/МИ_04.pdf#page=7'
            }
        ]
    }
]