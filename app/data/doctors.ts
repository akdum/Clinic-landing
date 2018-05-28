import { IDoctor } from "../shared/interfaces/IDoctor";

export const doctorsData:IDoctor[] = [
    { 
        photoName: "reverchuk.jpg", 
        title: { surname: "Реверчук", name: "Игорь Васильевич", spec: "заведующий кафедрой, главный врач, профессор" }, 
        pageName: "reverchuk.html",
        education: `Доктор медицинских наук, профессор, заведующий кафедрой педагогики, психологии и психосоматической медицины ИГМА. 
        Профессор кафедры клинической психологии и психоанализа УДГУ. Заместитель председателя Координационного Совета по психологическому обеспечению работы с личным составом МВД по УР. 
        Член редакционных Советов Российского электронного  научного журнала «Медицинская психология в России», электронного научного журнала «Клиническая и медицинская психология: исследования, обучение, практика». Действительный член подразделения  Global Clinical Practice Network Всемирной Организации Здравоохранения. Главный врач Клиники восстановительной медицины. 
        Психиатр-психотерапевт высшей квалификационной категории, врач-невролог.`,
        numbers: [{value: '2005', title: 'Год начала работы в клинике'}, {value: '1995', title: 'Год начала врачебной практики'}]
    },
    { 
        photoName: "rumyanceva.jpg", 
        title: { surname: "Румянцева", name: "Наталья Анатольевна", spec: "врач-психотерапевт" }, 
        pageName: "rumyanceva.html",
        education: `Окончила Ижевский медицинский институт в 1993 г. по специальности лечебное дело. Прошла интернатуру по специальности психиатрия. В 1996 по 1998г. прошла последипломную переподготовку по специальности психология, квалификации педагог - психолог. В 2009г. получила сертификат врача-психотерапевта. В 2014г. подтвердила сертификат врача-психотерапевта. Прошла обучение и имеет сертификат по интегративной детской и подростковой психотерапии. 
        Прошла обучающие циклы по системной семейной психотерапии, конфликтологии, Эриксоновскому гипнозу. Работала врачом-психиатром в Республиканской клинической психиатрической больнице. Является сертифицированным гештальт-терапевтом, супервизором и групповым терапевтом. Владеет навыками поведенческой, когнитивной, системной, телесно-ориентированной, гештальт-терапии.
        Принимает участие в ежегодных конференциях и интенсивах гештальтсообщества. Участвует в клинических конференциях для врачей и медицинских сестер Удмуртии. Сфера профессиональной деятельности и интереса распространяется на работу с эмоциональными и поведенческими расстройствами у детей, подростков, взрослых.`,
        numbers: [{value: '2005', title: 'Год начала работы в клинике'}, {value: '1993', title: 'Год начала врачебной практики'}]
    },
    { 
        photoName: "pomyitkina.jpg", 
        title: { surname: "Помыткина", name: "Татьяна Юрьевна", spec: "психолог, семейный психолог, специалист по профоринтации, кандидат психологических наук" }, 
        education: `В 1995 году окончила Удмуртский государственный университет по специальности «биолог, преподаватель биологии и химии», «практический психолог в сфере народного образования», в 1997 году прошла переподготовку по специальности «практический психолог ОВД», С 1995 года проходила службу в органах внутренних дел, с 2004 по 2015 гг возглавляла психологическую службу МВД по УР.
        С 2001 по 2004 года прошла обучение в адъюнктуре Академии управления МВД России и защитила кандидатскую диссертацию по теме «Социально-психологическая компетентность руководителей ОВД и методы ее развития». С 2015 года – доцент кафедры педагогики, психологии и психосоматической медицины ФБОУ ВО «ИГМА».`,
        numbers: [{value: '2015', title: 'Год начала работы в клинике'}, {value: '1995', title: 'Год начала врачебной практики'}],
        pageName: "pomyitkina.html" },
    { 
        photoName: "shutov.jpg", 
        title: { surname: "Шутов", name: "Игорь Леонидович", spec: "Врач ЛФК и спортивной медицины" }, 
        pageName: "shutov.html",
        education: `1983-1989 Ижевский государственный медицинский институт. Специальность: педиатрия. 2017г. первичная специализация - врач ЛФК и спортивной медицины в ИГМА. 1989 - 1990 Клиническая интернатура в БУЗ «Республиканская детская клиническая больница». Специальность: врач анестезиолог-реаниматолог.
        1990 - 1991 Врач анестезиолог-реаниматолог в РДКБ. 1991 - 1995 Заведующий эндоскопическим отделением в РДКБ. 1996 - 2016 Частно практикующий врач. 2015 и по настоящее время – врач ЛФК и спортивной медицины в «Клинической больнице восстановительной медицины» ФГБОУ ВО «Ижевская государственная медицинская академия» Минздрава России. Гипнотерапия (Эриксоновский гипноз). 
        Мануальная терапия «Концепция Маллиган». Глубокотканный массаж. Массаж Гуа-ша. Висцеральная терапия внутренних органов. Амнезиоскопия (вызов болезненных воспоминаний). Энергетические методы воздействия на человека.`,
        numbers: [{value: '2015', title: 'Год начала работы в клинике'}, {value: '1989', title: 'Год начала врачебной практики'}]
    },
    { 
        photoName: "perevozchikov.jpg", 
        title: { surname: "Перевозчиков", name: "Александр Павлович", spec: "врач-психотерапевт, специалист по БОС-ЭЭГ" }, 
        pageName: "perevozchikov.html",
        education: `Образование: 1973-1979 Ижевский государственный медицинский институт, окончил лечебный факультет по специальности «Лечебное дело»; 1979 - 1980г. интернатура в Республиканской клинической психиатрической больнице г. Ижевска по специальности «Психиатрия».
        Работа: 1980 – 1985 работал в качестве врача нарколога в Удмуртском республиканском наркологическом диспансере, 1985 - 1990 работал в качестве ассистента кафедры психиатрии Ижевского государственного медицинского института, работал в качестве врача психиатра в Удмуртской республиканской клинической психиатрической больнице, в международном медицинском центре метаболической терапии «Примавера медика», в качестве врача нарколога в Московском наркологическом центре «Возрождение»,
        2008 – 2011 работал преподавателем кафедры криминалистики Ижевского филиала Нижегородской академии МВД РФ, 2011 – 2015 работал в качестве преподавателя кафедры педагогики, психологии и психосоматической медицины Ижевской государственной медицинской академии. Навыки: участвовал в профессиональных конференциях и конгрессах. Владеет методами когнитивно-поведенческой терапии, гипносуггестивной терапии, телесно-ориентированной терапии. 
        Сфера лечебно-диагностических  и научных интересов: нейрофизиологические исследования, системная семейная психотерапия, психофармакотерапия, сексология, терапия методами биологической обратной связи, ай-трекинг, традиционные методы терапии.`,
        numbers: [{value: '2011', title: 'Год начала работы в клинике'}, {value: '1980', title: 'Год начала врачебной практики'}]
    },
    { 
        photoName: "zagrtdinova-rizida.jpg", 
        title: { surname: "Загртдинова", name: "Ризида Миннесагитовна", spec: "врач-дерматовенеролог-дерматолог-косметолог, заведующая кафедрой, профессор" }, 
        pageName: "zagrtdinova-rizida.html",
        education: `Заведующая кафедрой, доктор мед. наук, профессор, врач высшей квалификационной категории, заслуженный работник здравоохранения УР Родилась в г. Ижевске в семье служащих. С 1976 по 1978 год работала лаборантом кафедры анатомии человека Ижевского государственного медицинского института. В 1978г. поступила на 1 курс Ижевского государственного медицинского института.
        В 1985г., после окончания Ижевского государственного медицинского института, проходила больничную интернатуру по терапии на базе 2 городской больницы г. Ижевска. Работала в практическом здравоохранении с 1986 по 1988гг. врачом – терапевтом мужского стационара 2 городской больницы. В 1988 – 1990 г.г. обучалась в клинической ординатуре на базе кафедры внутренних болезней с курсом кожных и венерических болезней ИГМА, в 1990 – 1993 г.г. в аспирантуре на той же кафедре по специальности дерматовенерология.
        С 1994 по 1998 год работала ассистентом кафедры дерматовенерологии, в 1998 году избрана на должность заведующего той же кафедрой. В 1995 году защищена кандидатская диссертация на тему «СОЧЕТАННОЕ ПРИМЕНЕНИЕ ГЕМОСОРБЦИИ И ПЛАЗМАФЕРЕЗА В КОМПЛЕКСНОМ ЛЕЧЕНИИ ПСОРИАТИЧЕСКОЙ БОЛЕЗНИ» в специализированном Ученом Совете ЦНИКВИ. В 2006 году в том же Совете защищена докторская диссертация на тему «ПАТОГЕНЕТИЧЕСКАЯ РОЛЬ НАРУШЕНИЙ ОБЩИХ И ТКАНЕВЫХ РЕГУЛЯТОРНЫХ МЕХАНИЗМОВ ПРИ ПСОРИАЗЕ И ВОЗМОЖНОСТИ ИХ ТЕРАПЕВТИЧЕСКОЙ КОРРЕКЦИИ», автор более 170 научных и 11 учебно- методических
        работ. В 2001г. присвоена высшая квалификационная категория по специальности дерматовенерология, является экспертом комиссии по лицензированию медицинской и фармацевтической деятельности при правительстве Удмуртской республики.`,
        numbers: [{value: '2013', title: 'Год начала работы в клинике'}, {value: '1985', title: 'Год начала врачебной практики'}]
    },
    { 
        photoName: "pakriev.jpg", 
        title: { surname: "Пакриев", name: "Сергей Галлинурович", spec: "врач-психиатр, доктор медицинских наук" }, 
        pageName: "pakriev.html",
        education: `Образование: 1987 - 1992 Ижевский Государственный Медицинский Институт, 1993 - 1998 Тартуский Университет, аспирантура в клинике психиатрии медицинского факультета, тема кандидатской диссертации - «Распространенность депрессий и расстройств, связанных с употреблением алкоголя у сельских жителей Удмуртии»,
        1998 - 2002 Тартуский Университет, клиника психиатрии медицинского факультета – резидентура (ординатура) по психиатрии, присвоена квалификация врача – психиатра, тема научного исследования – табачная и алкогольная зависимости, 2007 Прошел сертификационный курс обучения «Основы мотивационного интервьюирования», Лондонская Школа Гигиены и Тропической Медицины, в данной методике применяются в том числе элементы Эриксоновского гипноза, 
        2008 - 2009 Участвовал в совместном исследовании Ижевской Государственной Медицинской Академии – и Лондонской Школы Гигиены и Тропической Медицины, цель исследования – оценка эффективности метода психологического воздействия на лиц, злоупотребляющих алкоголем, название метода – мотивационное интервьюирование. Результаты показали высокую эффективность метода. В ходе исследования лично С.Г. Пакриевым была оказана помощь более ста мужчинам трудоспособного возраста с алкогольными проблемами. Основные результаты исследования опубликованы в онлайн-журнале Trials, 2011, 12:238. Название статьи: «The efficacy of a brief intervention in reducing hazardous drinking in working age men in Russia: the HIM (Health for Izhevsk men) individually randomised parallel group exploratory trial» (http://www.trialsjournal.com/content/12/1/238),
        2012 – в г. Томске защищена докторская диссертация на тему «Расстройства депрессивного спектра в популяции сельских жителей Удмуртской Республики». Работа: 2002 - 2004 Врач – психиатр республиканской клинической психиатрической больницы МЗ УР, 2004 – по настоящее время – кафедра психиатрии, наркологии и медицинской психологии Ижевской Государственной Медицинской Академии, является научным руководителем дипломных работ у врачей-интернов по темам: лечение табачной, алкогольной, пищевой зависимостей, психофармакотерапия.`,
        numbers: [{value: '2013', title: 'Год начала работы в клинике'}, {value: '2002', title: 'Год начала врачебной практики'}]
    },
    { 
        photoName: "lyalin.jpg", 
        title: { surname: "Лялин", name: "Андрей Николаевич", spec: "врач-психотерапевт" }, 
        pageName: "lyalin.html",
        education: `Образование: 1984-1993 гг. - Ижевский государственный Медицинский институт; 1989 г. - специализация по медицинскому массажу, прямая передача; 1994 г. - интернатура по неврологии в РКБ № 1, миофасциальный релизинг (мягкая мануальная терапия), казанский ГИДУВ - иглорефлексотерапия и мануальная терапия в неврологии.
        1996 г. – ИРТ Су - Джок, холотропное дыхание – ребёфинг; 1996-1998 гг. – академия ЭНИО-культуры ( психология , психотерапия); 1997 г. - московский энергетическй институт – «Биорезонансная диагностика и терапия по методу Фолля, Гомеопатия»; 1999-2003 гг. - училище Русской народной Культуры, отделение – Психотехника; Любки, Родовспоможение, Наука Управления; 
        2001г. - танатотерапия; 2002г. – сертификация по Психотерапии, телесно-ориентированная Психотерапия; 2006 г. - висцеральная мануальная терапия, холистический палсинг, тантрический палсинг, тайский массаж, царская Ладка Тела Мёдом, гирудотерапия, футмассаж;
        2007 г. – танцтерапия; 2008 г. - инициация на 1ю ступень Рэй-Ки, элитные элементы Сознания, Бизнес – Лагерь «Создание Персональной модели Финансово-экономического счастья»; 2010 г. –биокоррекция позвоночника и суставов « Русский перезвон», стоун-терапия.
        Преподавание: Тайский массаж, Висцеральная мануальная терапия с Телесным событийно-сенсорным анализом. Проведение семинаров «Раскрытие Секрета вечной молодости», Биокоррекция позвоночника и суставов , Царская Ладка Тела Мёдом, Тантрический Палсинг, Холистический палсинг, Путешествие в самораскрытие, Мужчина и Женщина – построение партнёрской модели взаимодействия. Научные интересы: Нейро-соматическое перепрограммирование. Телесный Событийно-эмоциональнй анализ. Русская модель Онто-психологии.
        `,
        numbers: [{value: '2013', title: 'Год начала работы в клинике'}, {value: '1996', title: 'Год начала врачебной практики'}]
    },
    { 
        photoName: "tutrumova.jpg", 
        title: { surname: "Тютрюмова", name: "Елена Александровна", spec: "психолог-дефектолог, олигофренопедагог, детский психолог" }, 
        pageName: "tutrumova.html",
        education: `Образование: 2008-2013г. Удмуртский Государственный университет, окончила факультет педагогики, психологии и социальных технологий и получила специальность «Специальная психология»; апрель 2014г. - курсы повышения квалификации в г. Перми по теме «Современные подходы к диагностике и ранней коррекции расстройств речевого развития у детей»; май 2014г. – курсы повышения квалификации в г. Москва «Инновационное обучение в системе непрерывного медицинского образования»;
        февраль 2015г. – курсы повышения квалификации «Когнитивные нарушения у детей. Современные подходы к диагностике, коррекции и развитию речи», «Современные подходы к диагностике и коррекции дислексии у детей», «Аутизм- современные аспекты диагностики» в г. Пермь; 26 октября 2015г. – 23 июня 2016г. – курсы повышение квалификации в АНО ДПО «Центр комплексной защиты информации», по программе «Как построить или отремонтировать семью. Работа с Родом»;
        2016г. – курсы повышения квалификации «NEW MINDESET международный образовательный центр», по программе «Тренинг памяти и скорочтения». Работа: 2013г. по настоящее время - преподаватель кафедры педагогики, психологии и психосоматической медицины ФГБОУ ВО «Ижевская государственная медицинская академия», 2013г. по настоящее время - психолог-дефектолог в Клинической больнице восстановительной медицины ФГБОУ ВО ИГМА, 2016 - 2017г. - педагог-психолог Центр подростковых клубов «Пульс».
        Основные направления работы: развитие и коррекция внимания, развитие и коррекция восприятия, развитие и коррекция памяти, развитие и коррекция мышления, развитие и коррекция речи, развитие и коррекция моторики, развитие и коррекция эмоционально-волевой сферы. Научные и профессиональные интересы: коммуникативная сфера детей с ранним детским аутизмом,
        расстройства эмоциональной сферы в условиях нарушенного развития, логопсихологя, олигофренопсихология, психология лиц с задержкой психического развития, игровая терапия, системная психология.
        `,
        numbers: [{value: '2013', title: 'Год начала работы в клинике'}, {value: '2013', title: 'Год начала врачебной практики'}]
    }
]