window.ClinicModel = {
    WhoWeAre: {
        title: 'О клинике',
        firstPart: 'Наша клиника задумана как совместная организация с Ижевской Государственной Медицинской Академией, где профессора и доктора медицинских наук могут оказать консультацию любому человеку. Специализацией больницы является оказание психотерапевтической помощи широкого профиля.',
        secondPart: 'Главной задачей Клинической Больницы Восстановительной Медицины Ижевской Государственной Медицинской Академии является восстановление организма при хронических органических и психосоматических состояниях.'
    },
    Contacts: [
        { title: "Адрес:", value: "г. Ижевск, ул. Труда, 48а" },
        { title: "Почта:", value: "<a href='mailto:centr_psy@mail.ru'>centr_psy@mail.ru</a>" },
        { title: "Телефоны городские:", value: "<a href='tel:+73412233325'>8(3412)23-33-25</a><br /><a href='tel:+73412646706'>8(3412)64-67-06</a>" },
        { title: "Телефон сотовый:", value: "<a href='tel:+79090538753'>8-909-053-87-53</a>" }
    ],
    ContactsData: {
        address: "г. Ижевск, ул. Труда, 48а",
        phones: [{ html: "<a href='tel:+73412233325'>8(3412)23-33-25</a>" }, { html: "<a href='tel:+73412646706'>8(3412)64-67-06</a>" }, { html: "<a href='tel:+79090538753'>8(909)053-87-53</a>" }],
        workHours: [{ days: "Будни", hours: "с 09-00 до 18-00" }, { days: "Суббота, Воскресенье", hours: "Закрыто" }]
    },
    Doctors: [
        { photoName: "reverchuk.jpg", title: { surname: "Реверчук", name: "Игорь Васильевич", spec: "заведующий кафедрой, главный врач, профессор" }, file: "reverchuk.html", calendar: "https://outlook.live.com/owa//calendar/00000000-0000-0000-0000-000000000000/c54344d5-a974-4f32-a302-8b1ae9e4abd2/cid-31776A10A799782C/index.html" },
        { photoName: "tutrumova.jpg", title: { surname: "Тютрюмова", name: "Елена Александровна", spec: "психолог-дефектолог, олигофренопедагог, детский психолог" } },
        // { photoName: "perevozchikov.jpg", title: { surname: "Перевозчиков", name: "Александр Павлович", spec: "врач-психотерапевт, специалист по БОС-ЭЭГ" }, file: "perevozchikov.html" },
        { photoName: "rumyanceva.jpg", title: { surname: "Румянцева", name: "Наталья Анатольевна", spec: "врач-психотерапевт" }, file: "rumyanceva.html", calendar: "https://outlook.live.com/owa//calendar/00000000-0000-0000-0000-000000000000/a636d139-c109-46a2-889a-e3dcdd974738/cid-31776A10A799782C/index.html" },
        { photoName: "pomyitkina.jpg", title: { surname: "Помыткина", name: "Татьяна Юрьевна", spec: "психолог, семейный психолог, специалист по профоринтации, кандидат психологических наук" }, file: "pomyitkina.html" },
        { photoName: "zagrtdinova-rizida.jpg", title: { surname: "Загртдинова", name: "Ризида Миннесагитовна", spec: "врач-дерматовенеролог-дерматолог-косметолог, заведующая кафедрой, профессор" }, file: "zagrtdinova-rizida.html" },
        { photoName: "pakriev.jpg", title: { surname: "Пакриев", name: "Сергей Галлинурович", spec: "врач-психиатр, доктор медицинских наук" }, file: "pakriev.html" },
        { photoName: "lyalin.jpg", title: { surname: "Лялин", name: "Андрей Николаевич", spec: "врач-психотерапевт" }, file: "lyalin.html" }
    ],
    Licenses: [
        { name: "license1.jpg" },
        { name: "license2.jpg" },
        { name: "license3.jpg" },
        { name: "license4.jpg" },
        { name: "license5.jpg" }
    ],
    Promo: [
        { iconName: "fa-user-md", title: "Квалифицированный персонал", comment: "Консультация профессорского состава Ижевской Государственной Медицинской Академии. Внимание и бережное отношение к Вашему здоровью. У нас нет желания залечить Вас, нам важно найти истинную причину болезни, а не кормить симптомы таблетками!" },
        { iconName: "fa-skype", title: "Skype-консультация", comment: "У нас вы можете получить консультацию психолога через Skype, даже если Вы находитесь в другой стране." },
        { iconName: "fa-heartbeat", title: "Психосоматика", comment: "Наша клиника единственная в регионе по лечению психосоматических растройств." }
    ],
    Services: [
        {}
    ],
    Heroes: [
        { area: 'children', order_img: 'order-1', order_text: 'order-2', imgName: 'hero-child-1.jpg', title: 'Спокоен ребенок - счастлива мама!', text: 'Какие проблемы могут возникнуть у ребёнка в разные периоды его жизни, при которых необходимо обратиться за консультацией к специалисту?' },
        { area: 'children', order_img: 'order-2', order_text: 'order-1', imgName: 'hero-child-2.jpg', title: '', text: '<ul><li>Агрессивное и импульсивное поведение; капризы и истерики;</li><li>вредные привычки;</li><li>повышенная тревожность, страхи;</li><li>школьная неуспеваемость;</li><li>плохая работа в классе при отличной работе дома;</li><li>проблемы в общении со сверстниками и взрослыми;</li><li>нарушения в развитии познавательных процессов (память, мышление, внимание, речь ребенка);</li><li>психосоматические проблемы (энурез, энкопрез);</li><li>ревность и соперничество между братьями и сёстрами</li></ul>' },
        { area: 'children', order_img: 'order-1', order_text: 'order-2', imgName: 'hero-child-3.jpg', title: '', text: '<p>Наладить отношения в семье, помочь ребенку справиться со всеми проблемами и кризисами, Вам помогут лучшие психологи в городе!</p><p>Бережное отношение к семье клиента, это то, что по-настоящему важно для нас!</p><p>Консультируют детей и родителей профессионалы <strong>Ижевской Государственной Медицинской Академии</strong>.</p>' },
        { area: 'children', order_img: 'order-2', order_text: 'order-1', imgName: 'hero-child-4.jpg', title: 'Прием ведут ведущие профессора и доценты медицинской академи', text: '<ul><li>Заключение логопеда, психолога для детского сада и школы</li><li>Консультация детского психолога</li><li>Консультация детского врача - психотерапевта</li><li>Семейные консультации</li><li>Консультация врача - дерматолога, профессора, доктора медицинских наук</li><li>Лечебный, расслабляющий, висцеральный массаж + парафинотерапия</li><li>Реальная помощь психолога-дефектолога, олигофренопедагога</li><li>Вегетативно-резонансный тест (диагностика) + назначение гомеопатических препаратов по результатам исследования</li><li>Используем технологию Бос-ЭЭГ</li><li>Профориентация старшеклассников</li></ul>' }
    ],
    MedInfo: [
        { img: 'МИ_04.jpg', issueName: 'МИ_04.pdf', current: "yes", content: [{text:"Инсульт - это не приговор", pageNumber: "2"}, {text:"Кинезотерапия на подвесных системах «Экзарта»", pageNumber: "5"}, {text:"Сеть многопрофильных  клиник «Доктор плюс»", pageNumber: "7"}]}
    ],
    FooterLinks: [
        { title: 'Политика по персональным данным', address: function() { return window.location.origin + '/pages/personal-info.html'} }
    ]
}