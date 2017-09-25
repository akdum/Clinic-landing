window.ClinicModel = {
    Contacts: [
        { title: "Адрес:", value: "г. Ижевск, ул. Труда, 48а" },
        { title: "Почта", value: "<a href='mailto:centr_psy@mail.ru'>centr_psy@mail.ru</a>" },
        { title: "Телефоны городские:", value: "<a href='tel:+73412233325'>8(3412)23-33-25</a><br /><a href='tel:+73412646706'>8(3412)64-67-06</a>" },
        { title: "Телефон сотовый:", value: "<a href='tel:+79090538753'>8-909-053-87-53</a>" }
    ],
    Doctors: [
        { photoName: "reverchuk.jpg", title: { surname: "Реверчук", name: "Игорь Васильевич", spec: "заведующий кафедрой, главный врач, профессор" }, file: "reverchuk.html" },
        { photoName: "tutrumova.jpg", title: { surname: "Тютрюмова", name: "Елена Александровна", spec: "психолог-дефектолог, олигофренопедагог, детский психолог" } },
        { photoName: "perevozchikov.jpg", title: { surname: "Перевозчиков", name: "Александр Павлович", spec: "врач-психотерапевт, специалист по БОС-ЭЭГ" }, file: "perevozchikov.html" },        
        { photoName: "rumyanceva.jpg", title: { surname: "Румянцева", name: "Наталья Анатольевна", spec: "врач-психотерапевт" }, file: "rumyanceva.html" },
        { photoName: "pomyitkina.jpg", title: { surname: "Помыткина", name: "Татьяна Юрьевна", spec: "психолог, семейный психолог, специалист по профоринтации, кандидат психологических наук" }, file: "pomyitkina.html" },
        { photoName: "zagrtdinova-rizida.jpg", title: { surname: "Загртдинова", name: "Ризида Миннесагитовна", spec: "врач-дерматовенеролог-дерматолог-косметолог, заведующая кафедрой, профессор" } },
        { photoName: "pakriev.jpg", title: { surname: "Пакриев", name: "Сергей Галлинурович", spec: "врач-психиатр, доктор медицинских наук" }, file: "pakriev.html"}
    ],
    Licenses: [
        { name: "license1.jpg" },
        { name: "license2.jpg" },
        { name: "license3.jpg" },
        { name: "license4.jpg" },
        { name: "license5.jpg" }
    ],
    Promo: [
        { iconName: "fa-user-md", title: "Квалифицированный персонал", comment: "Консультация профессорского состава Ижевской Государственной Медицинской Академии." },
        { iconName: "fa-skype", title: "Skype-консультация", comment: "У нас вы можете получить консультацию психолога через Skype ." },
        { iconName: "fa-heartbeat", title: "Психосоматика", comment: "Наша клиника единственная в регионе по лечению психосоматических растройств." }
    ],
    Services: [
        { title: "Консультация врача-психотерапевта и психолога детского, подросткового, взрослого, семейного", className: "fa-puzzle-piece" },
        { title: "Лечение алкогольной и игровой зависимости", className: "fa-gamepad" },
        { title: "Врач - невролог", className: "fa-user-md" },
        { title: "Услуги висцерального терапевта, остеопата, мануального терапевта", className: "fa-hand-paper-o" }
    ]
}