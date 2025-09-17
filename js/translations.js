// Translation system for Anton Griev Racing Team website
const translations = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'О команде',
    'nav.services': 'Услуги',
    'nav.racers': 'Гонщики',
    'nav.championships': 'Наши чемпионаты',
    'nav.participation': 'Участие',
    'nav.sponsors': 'Спонсорам',
    'nav.contacts': 'Контакты',

    // Common
    'common.learnMore': 'Подробнее →',
    'common.readMore': 'Узнать больше →',
    'common.viewMore': 'Посмотреть →',
    'common.seeDetails': 'Узнать условия →',
    'common.contactUs': 'Связаться с нами',
    'common.joinTeam': 'Как попасть в команду',
    'common.allRightsReserved': 'Все права защищены',
    'common.quickLinks': 'Быстрые ссылки',
    'common.email': 'Email',
    'common.phone': 'Телефон',

    // Home Page
    'home.title': 'Anton Griev Racing Team',
    'home.subtitle': 'Профессиональная команда двухколёсного мотоспорта',
    'home.description': 'Питбайки • ШКМГ (шоссейно-кольцевые мотогонки) • Мотокросс',
    'home.aboutTeam': 'О команде',
    'home.ourRacers': 'Наши гонщики',
    'home.exploreMore': 'Узнайте больше',
    'home.aboutCard.title': 'О команде',
    'home.aboutCard.text': 'Узнайте историю нашей команды, миссию и достижения в мире мотоспорта',
    'home.servicesCard.title': 'Как попасть в команду',
    'home.servicesCard.text': 'Информация о том, как стать частью нашей команды и какие услуги мы предлагаем',
    'home.racersCard.title': 'Наши гонщики',
    'home.racersCard.text': 'Познакомьтесь с нашими талантливыми спортсменами и их достижениями',
    'home.championshipsCard.title': 'Наши чемпионаты',
    'home.championshipsCard.text': 'MiniGP Сербия на minigp и питбайках - наш флагманский чемпионат',
    'home.participationCard.title': 'Чемпионаты в которых участвуем',
    'home.participationCard.text': 'Список всех соревнований, где выступают наши гонщики',
    'home.sponsorsCard.title': 'Предложение для спонсоров',
    'home.sponsorsCard.text': 'Возможности партнёрства и спонсорства с нашей командой',
    'home.stats.racers': 'Гонщиков в команде',
    'home.stats.stars': 'Звёздных гонщика',
    'home.stats.championship': 'Собственный чемпионат',
    'home.stats.passion': 'Страсть к мотоспорту',
    'home.cta.title': 'Готовы присоединиться к нам?',
    'home.cta.text': 'Станьте частью профессиональной команды мотоспорта',
    'home.cta.aboutMore': 'Узнать больше о команде',

    // About Page
    'about.title': 'О команде',
    'about.subtitle': 'Узнайте больше о нашей истории, миссии и достижениях',
    'about.history.title': 'Наша история',
    'about.history.text1': 'Anton Griev Racing Team — это профессиональная команда, специализирующаяся на двухколёсном мотоспорте. Мы объединяем талантливых гонщиков, тренеров и энтузиастов, разделяющих страсть к скорости и совершенству.',
    'about.history.text2': 'Наша команда активно участвует в различных дисциплинах мотоспорта, включая питбайки, ШКМГ (шоссейно-кольцевые мотогонки) и мотокросс. Мы не только участвуют в соревнованиях, но и организуем собственные чемпионаты, способствуя развитию мотоспорта в регионе.',
    'about.mission.title': 'Наша миссия',
    'about.mission.text': 'Мы стремимся развивать двухколёсный мотоспорт, воспитывать новое поколение талантливых гонщиков и предоставлять им все необходимые ресурсы для достижения высоких результатов. Наша цель — создать профессиональную среду, где каждый спортсмен может раскрыть свой потенциал.',
    'about.features.title': 'Что нас отличает',
    'about.features.professional': 'Профессиональный подход: Индивидуальная работа с каждым гонщиком',
    'about.features.coaching': 'Опытный тренерский состав: Во главе с Антоном Гриевым',
    'about.features.championship': 'Собственный чемпионат: MiniGP Сербия на minigp и питбайках',
    'about.features.equipment': 'Современное оборудование: Лучшая техника и экипировка',
    'about.features.team': 'Командный дух: Поддержка и взаимопомощь между всеми участниками',
    'about.values.title': 'Наши ценности',
    'about.values.excellence': 'Совершенство',
    'about.values.excellenceText': 'Мы стремимся к высочайшим стандартам в каждом аспекте нашей деятельности',
    'about.values.teamwork': 'Командная работа',
    'about.values.teamworkText': 'Успех каждого гонщика — это успех всей команды',
    'about.values.professionalism': 'Профессионализм',
    'about.values.professionalismText': 'Серьёзное отношение к тренировкам, соревнованиям и развитию',
    'about.values.passion': 'Страсть',
    'about.values.passionText': 'Любовь к мотоспорту движет нами вперёд к новым достижениям',
    'about.leadership.title': 'Руководство команды',
    'about.leadership.antonTitle': 'Основатель и главный тренер команды',
    'about.leadership.antonText1': 'Антон Гриев — опытный специалист в области мотоспорта с многолетним стажем. Под его руководством команда достигла значительных успехов и продолжает развиваться. Его подход к тренировкам сочетает в себе технические знания, психологическую подготовку и индивидуальную работу с каждым спортсменом.',
    'about.leadership.antonText2': 'Антон не только тренер, но и активный участник соревнований, что позволяет ему лучше понимать потребности и вызовы, с которыми сталкиваются гонщики на трассе.',
    'about.cta.title': 'Готовы стать частью нашей команды?',
    'about.cta.text': 'Присоединяйтесь к профессиональному сообществу мотоспорта',
    'about.cta.meetRacers': 'Познакомиться с гонщиками',

    // Services Page
    'services.title': 'Как попасть в команду',
    'services.subtitle': 'Узнайте о наших услугах и требованиях для вступления',
    'services.intro': 'Anton Griev Racing Team предлагает широкий спектр услуг для развития навыков в двухколёсном мотоспорте. Мы работаем как с начинающими, так и с опытными гонщиками.',
    'services.ourServices': 'Наши услуги',
    'services.individualTraining': 'Индивидуальные тренировки',
    'services.groupTraining': 'Групповые тренировки',
    'services.technicalSupport': 'Техническая поддержка',
    'services.competitions': 'Участие в соревнованиях',
    'services.requirements': 'Требования для вступления в команду',
    'services.beginners': 'Для начинающих гонщиков',
    'services.experienced': 'Для опытных гонщиков',
    'services.howToJoin': 'Как стать частью команды',
    'services.programs': 'Тренировочные программы',
    'services.beginner': 'Программа "Начинающий"',
    'services.athlete': 'Программа "Спортсмен"',
    'services.professional': 'Программа "Профессионал"',
    // Service cards
    'services.individualText': 'Персональные занятия с опытными тренерами для развития техники вождения и гоночных навыков.',
    'services.individualItem1': 'Работа над техникой вождения',
    'services.individualItem2': 'Анализ и коррекция ошибок',
    'services.individualItem3': 'Психологическая подготовка',
    'services.individualItem4': 'Физическая подготовка',

    'services.groupText': 'Тренировки в группе для развития командного духа и обмена опытом между гонщиками.',
    'services.groupItem1': 'Совместные тренировки на трассе',
    'services.groupItem2': 'Теоретические занятия',
    'services.groupItem3': 'Командообразующие мероприятия',
    'services.groupItem4': 'Участие в тренировочных заездах',

    'services.technicalText': 'Полное техническое сопровождение: от настройки мотоцикла до обслуживания во время соревнований.',
    'services.technicalItem1': 'Настройка и тюнинг мотоциклов',
    'services.technicalItem2': 'Техническое обслуживание',
    'services.technicalItem3': 'Поддержка на соревнованиях',
    'services.technicalItem4': 'Консультации по выбору экипировки',

    'services.competitionsText': 'Организация участия в различных чемпионатах и соревнованиях по мотоспорту.',
    'services.competitionsItem1': 'Регистрация на соревнования',
    'services.competitionsItem2': 'Логистическая поддержка',
    'services.competitionsItem3': 'Сопровождение на соревнованиях',
    'services.competitionsItem4': 'Анализ результатов',

    // Training programs
    'services.beginnerDuration': '3-6 месяцев',
    'services.beginnerItem1': 'Основы техники вождения',
    'services.beginnerItem2': 'Изучение правил безопасности',
    'services.beginnerItem3': 'Базовая физическая подготовка',
    'services.beginnerItem4': 'Первые тренировочные заезды',
    'services.beginnerItem5': 'Теоретические занятия',
    'services.beginnerPrice': 'По запросу',

    'services.athleteDuration': '6-12 месяцев',
    'services.athleteItem1': 'Продвинутая техника вождения',
    'services.athleteItem2': 'Участие в тренировочных соревнованиях',
    'services.athleteItem3': 'Интенсивная физическая подготовка',
    'services.athleteItem4': 'Психологическая подготовка',
    'services.athleteItem5': 'Техническая подготовка мотоцикла',
    'services.athletePrice': 'По запросу',

    'services.professionalDuration': 'Постоянно',
    'services.professionalItem1': 'Участие в чемпионатах',
    'services.professionalItem2': 'Индивидуальный тренировочный план',
    'services.professionalItem3': 'Полная техническая поддержка',
    'services.professionalItem4': 'Спонсорская поддержка',
    'services.professionalItem5': 'Представление команды на соревнованиях',
    'services.professionalPrice': 'По договорённости',

    // How to join steps
    'services.step1Title': 'Первичная консультация',
    'services.step1Text': 'Свяжитесь с нами для первичной консультации. Мы обсудим ваши цели, опыт и ожидания.',
    'services.step2Title': 'Пробная тренировка',
    'services.step2Text': 'Приглашаем на пробную тренировку, где оценим ваши навыки и потенциал.',
    'services.step3Title': 'Собеседование',
    'services.step3Text': 'Проводим собеседование с тренером для определения индивидуального плана развития.',
    'services.step4Title': 'Вступление в команду',
    'services.step4Text': 'При положительном решении оформляем все необходимые документы и начинаем тренировки.',

    'services.cta.title': 'Готовы начать свой путь в мотоспорте?',
    'services.cta.text': 'Свяжитесь с нами для консультации и записи на пробную тренировку',

    // Racers Page
    'racers.title': 'Наши гонщики',
    'racers.subtitle': 'Познакомьтесь с талантливыми спортсменами нашей команды',
    'racers.stars.title': '🌟 Наши звёзды 🌟',
    'racers.stars.subtitle': 'Ждут вашей поддержки! Помогите нашим талантливым гонщикам достичь новых высот',
    'racers.allTeam.title': 'Вся команда',
    'racers.allTeam.text': 'Наша команда состоит из талентливых гонщиков разного уровня подготовки, объединённых общей страстью к мотоспорту.',
    'racers.trainer': 'Тренер команды',
    'racers.achievements': 'Достижения:',
    'racers.support': 'Поддержите',
    'racers.supportHow': 'Как ваша поддержка поможет:',
    'racers.equipment': '🏍️ Техническое оснащение',
    'racers.gear': '🛡️ Экипировка',
    'racers.competitions': '🏁 Участие в соревнованиях',
    'racers.training': '🎯 Тренировки',
    'racers.teamStats': 'Статистика команды',
    'racers.stats.racers': 'Гонщиков в команде',
    'racers.stats.stars': 'Звёздных спортсмена',
    'racers.stats.prizes': 'Призовых мест',
    'racers.stats.experience': 'Лет опыта',
    'racers.cta.title': 'Хотите присоединиться к нашей команде?',
    'racers.cta.text': 'Станьте частью профессионального сообщества гонщиков',

    // Championships Page
    'championships.title': 'Наши чемпионаты',
    'championships.subtitle': 'Организуем и проводим профессиональные соревнования по мотоспорту',
    'championships.minigp': 'MiniGP Сербия',
    'championships.flagship': 'Наш флагманский чемпионат',
    'championships.about': 'О чемпионате MiniGP Сербия',
    'championships.categories': 'Категории соревнований',
    'championships.howToParticipate': 'Как принять участие',
    // Championship description
    'championships.description1': 'MiniGP Сербия — это престижный чемпионат, организуемый Anton Griev Racing Team совместно с Motosavez Srbiji и MEC (Moped Endurance Cup Srbija). Соревнования проходят на мотоциклах MiniGP и питбайках, привлекая лучших гонщиков из региона и за его пределами.',
    'championships.description2': 'Чемпионат проводится в соответствии с международными стандартами FIM и включает в себя несколько этапов в течение гоночного сезона. Каждый этап — это захватывающее зрелище, где гонщики демонстрируют высочайший уровень мастерства и спортивного духа.',

    // Championship features
    'championships.featuresTitle': 'Особенности чемпионата:',
    'championships.feature1': 'Международный статус: Соответствие стандартам FIM',
    'championships.feature2': 'Две категории: MiniGP и питбайки',
    'championships.feature3': 'Профессиональная организация: Высокий уровень проведения',
    'championships.feature4': 'Призовой фонд: Достойные награды для победителей',
    'championships.feature5': 'Медиа-покрытие: Трансляции и освещение в СМИ',
    'championships.feature6': 'Безопасность: Строгие стандарты безопасности',

    // Additional regulation titles
    'championships.requirementsTitle': 'Требования 2025',

    // Championship stats
    'championships.statsTitle': 'Статистика 2025',
    'championships.stat1': 'Этапов в сезоне',
    'championships.stat2': '20+',
    'championships.stat2Text': 'Участников',
    'championships.stat3': '5',
    'championships.stat3Text': 'Стран-участниц',
    'championships.stat4': 'Призовой фонд отсутствует',

    // Championship regulations 2025
    'championships.regulations2025Title': 'Регламент 2025',
    'championships.regulations2025Text': 'Требования к мотоциклам:',
    'championships.regulation1': 'Объём двигателя: до 190сс',
    'championships.regulation2': 'Колёса: 12 дюймов',
    'championships.regulation3': 'Система питания: карбюратор',

    // Championship plans 2026
    'championships.plans2026Title': 'Планы 2026',
    'championships.plans2026Text': 'Планируемые категории:',
    'championships.openClass': 'Класс Open: двигатели до 190сс 4 клапана (Daytona, ZS190v4)',
    'championships.stockClass': 'Класс Stock: двигатели до 190сс 2 клапана (ZS190v2)',
    'championships.commonRequirements': 'Общие требования: колёса 12", карбюратор',

    // Championship tracks
    'championships.tracksTitle': 'Трассы чемпионата',
    'championships.tracksText': 'Соревнования проводятся на следующих трассах:',
    'championships.track1': 'Motodrom Kula',
    'championships.track2': 'Karting Centar Jagodina',
    'championships.track3': 'Dobanovci track',
    'championships.track4': 'NAVAK',
    'championships.track5': 'Cacak track',

    // Technical regulations
    'championships.techRegTitle': 'Технический регламент',
    'championships.techRegText': 'Полный технический регламент 2025 года доступен для скачивания',
    'championships.downloadReg': 'Скачать регламент 2025',

    'championships.cta.title': 'Станьте частью MiniGP Сербия!',
    'championships.cta.text': 'Присоединяйтесь к самому престижному чемпионату региона',

    // Participation Page
    'participation.title': 'Чемпионаты в которых участвуем',
    'participation.subtitle': 'Наши гонщики выступают в различных престижных соревнованиях',
    'participation.international': 'Международные соревнования',
    'participation.intro': 'Команда Anton Griev Racing Team активно участвует в различных национальных и международных чемпионатах, демонстрируя высокий уровень подготовки и профессионализм.',
    'participation.upcoming': 'Предстоящие соревнования',
    'participation.cta.title': 'Хотите следить за нашими результатами?',
    'participation.cta.text': 'Подписывайтесь на наши обновления и следите за выступлениями команды',

    // Sponsors Page
    'sponsors.title': 'Предложение для спонсоров',
    'sponsors.subtitle': 'Станьте партнёром профессиональной команды мотоспорта',
    'sponsors.whyPartner': 'Почему стоит стать нашим партнёром?',
    'sponsors.intro': 'Anton Griev Racing Team предлагает уникальные возможности для брендинга и маркетинга через мотоспорт. Наша команда участвует в престижных соревнованиях и имеет широкую аудиторию поклонников.',

    // Benefits
    'sponsors.mediaCoverage': 'Медиа покрытие',
    'sponsors.mediaCoverageText': 'Ваш бренд будет представлен на телевидении, в социальных сетях и специализированных изданиях',
    'sponsors.broadcasts': 'Трансляции соревнований',
    'sponsors.interviews': 'Интервью с гонщиками',
    'sponsors.socialMedia': 'Социальные сети (50K+ подписчиков)',
    'sponsors.pressReleases': 'Пресс-релизы и статьи',

    'sponsors.targetAudience': 'Целевая аудитория',
    'sponsors.targetAudienceText': 'Доступ к активной аудитории любителей мотоспорта и экстремальных видов спорта',
    'sponsors.demographics': 'Мужчины 18-45 лет (70%)',
    'sponsors.income': 'Средний и выше среднего доход',
    'sponsors.lifestyle': 'Активный образ жизни',
    'sponsors.techInterest': 'Интерес к технологиям',

    'sponsors.prestige': 'Престиж и репутация',
    'sponsors.prestigeText': 'Ассоциация с профессиональным спортом повышает имидж вашего бренда',
    'sponsors.europeanChampionships': 'Участие в европейских чемпионатах',
    'sponsors.ownChampionship': 'Собственный чемпионат MiniGP Сербия',
    'sponsors.professionalTeam': 'Профессиональная команда',
    'sponsors.highResults': 'Высокие спортивные результаты',

    'sponsors.geography': 'Географический охват',
    'sponsors.geographyText': 'Присутствие на соревнованиях в разных странах Европы',
    'sponsors.countries1': 'Сербия, Чехия, Болгария',
    'sponsors.countries2': 'Венгрия, Словения, Хорватия',
    'sponsors.onlineAudience': 'Онлайн аудитория по всему миру',
    'sponsors.expansionPlans': 'Планы расширения в другие страны',

    // Packages
    'sponsors.packages': 'Пакеты спонсорства',
    'sponsors.titleSponsor': 'Титульный спонсор',
    'sponsors.mainPartner': 'Главный партнёр',
    'sponsors.officialPartner': 'Официальный партнёр',
    'sponsors.supportingPartner': 'Поддерживающий партнёр',
    'sponsors.season': '/ сезон',
    'sponsors.whatIncluded': 'Что входит:',

    // Title Sponsor benefits
    'sponsors.titleBenefit1': 'Название команды включает имя бренда',
    'sponsors.titleBenefit2': 'Логотип на всех мотоциклах (основное место)',
    'sponsors.titleBenefit3': 'Брендинг всей экипировки',
    'sponsors.titleBenefit4': 'Эксклюзивные права в категории',
    'sponsors.titleBenefit5': 'Участие в пресс-конференциях',
    'sponsors.titleBenefit6': 'Индивидуальная рекламная кампания',
    'sponsors.titleBenefit7': 'VIP-обслуживание на всех этапах',

    // Main Partner benefits
    'sponsors.mainBenefit1': 'Логотип на мотоциклах (видное место)',
    'sponsors.mainBenefit2': 'Брендинг экипировки гонщиков',
    'sponsors.mainBenefit3': 'Упоминание во всех пресс-релизах',
    'sponsors.mainBenefit4': 'Размещение в социальных сетях',
    'sponsors.mainBenefit5': 'Приглашения на корпоративные мероприятия',
    'sponsors.mainBenefit6': 'Фото и видео материалы для рекламы',
    'sponsors.mainBenefit7': 'Гостевые места на соревнованиях',

    // Official Partner benefits
    'sponsors.officialBenefit1': 'Логотип на мотоциклах',
    'sponsors.officialBenefit2': 'Упоминание на официальном сайте',
    'sponsors.officialBenefit3': 'Посты в социальных сетях',
    'sponsors.officialBenefit4': 'Использование логотипов команды',
    'sponsors.officialBenefit5': 'Билеты на соревнования',
    'sponsors.officialBenefit6': 'Фотоотчёты с соревнований',
    'sponsors.officialBenefit7': 'Сертификат партнёра',

    // Supporting Partner benefits
    'sponsors.supportBenefit1': 'Логотип на сайте команды',
    'sponsors.supportBenefit2': 'Упоминание в социальных сетях',
    'sponsors.supportBenefit3': 'Благодарности в интервью',
    'sponsors.supportBenefit4': 'Приглашения на мероприятия',
    'sponsors.supportBenefit5': 'Фотографии с автографами',
    'sponsors.supportBenefit6': 'Сувенирная продукция команды',

    // Championship sponsorship
    'sponsors.minigpSponsorship': 'Спонсорство чемпионата MiniGP Сербия',
    'sponsors.uniqueOpportunity': 'Уникальная возможность',
    'sponsors.minigpText': 'MiniGP Сербия — это наш флагманский чемпионат, который мы организуем и проводим. Это даёт спонсорам особые возможности для продвижения и брендинга.',
    'sponsors.championshipOpportunities': 'Возможности для спонсоров чемпионата:',
    'sponsors.champBenefit1': 'Название чемпионата с именем бренда',
    'sponsors.champBenefit2': 'Брендинг всей трассы и инфраструктуры',
    'sponsors.champBenefit3': 'Эксклюзивные права на трансляции',
    'sponsors.champBenefit4': 'Организация корпоративных мероприятий',
    'sponsors.champBenefit5': 'Прямой контакт с целевой аудиторией',
    'sponsors.champBenefit6': 'Возможность презентации продукции',

    // Contact section
    'sponsors.contactUs': 'Свяжитесь с нами',
    'sponsors.contactText': 'Заинтересованы в сотрудничестве? Свяжитесь с нами для обсуждения индивидуальных условий партнёрства.',
    'sponsors.contactInfo': 'Контактная информация',
    'sponsors.partnerships': 'Партнёрства и спонсорство',
    'sponsors.antonGreiv': 'Антон Гриев',
    'sponsors.founderTitle': 'Основатель и руководитель команды',
    'sponsors.mediaAndPR': 'Медиа и PR',
    'sponsors.mediaKit': 'Для получения медиа-кита и статистики',
    'sponsors.quickRequest': 'Быстрый запрос',
    'sponsors.formText': 'Заполните форму обратной связи, и мы свяжемся с вами в течение 24 часов',
    'sponsors.sendRequest': 'Отправить запрос',

    'sponsors.cta.title': 'Готовы стать нашим партнёром?',
    'sponsors.cta.text': 'Присоединяйтесь к команде профессионалов и получите максимальную отдачу от инвестиций в спорт',

    // Contacts Page
    'contacts.title': 'Контакты',
    'contacts.subtitle': 'Свяжитесь с нами любым удобным способом',
    'contacts.contactInfo': 'Контактная информация',
    'contacts.email': 'Электронная почта',
    'contacts.phone': 'Телефон',
    'contacts.location': 'Местоположение',
    'contacts.social': 'Социальные сети',
    'contacts.specialized': 'Специализированные контакты',
    'contacts.sendMessage': 'Отправить сообщение',
    'contacts.faq': 'Часто задаваемые вопросы',
    'contacts.howToFind': 'Как нас найти',
    'contacts.cta.title': 'Готовы начать свой путь в мотоспорте?',
    'contacts.cta.text': 'Свяжитесь с нами сегодня и сделайте первый шаг к достижению своих целей',

    // Footer
    'footer.teamDescription': 'Профессиональная команда двухколёсного мотоспорта'
  },

  sr: {
    // Navigation
    'nav.home': 'Početna',
    'nav.about': 'O timu',
    'nav.services': 'Usluge',
    'nav.racers': 'Vozači',
    'nav.championships': 'Naši šampionati',
    'nav.participation': 'Učešće',
    'nav.sponsors': 'Sponzorima',
    'nav.contacts': 'Kontakt',

    // Common
    'common.learnMore': 'Saznaj više →',
    'common.readMore': 'Pročitaj više →',
    'common.viewMore': 'Pogledaj →',
    'common.seeDetails': 'Saznaj uslove →',
    'common.contactUs': 'Kontaktiraj nas',
    'common.joinTeam': 'Kako da se pridružiš timu',
    'common.allRightsReserved': 'Sva prava zadržana',
    'common.quickLinks': 'Brzi linkovi',
    'common.email': 'Email',
    'common.phone': 'Telefon',

    // Home Page
    'home.title': 'Anton Griev Racing Team',
    'home.subtitle': 'Profesionalni tim dvotočkaša motorsporta',
    'home.description': 'Pitbike • Kružne moto trke • Motokros',
    'home.aboutTeam': 'O timu',
    'home.ourRacers': 'Naši vozači',
    'home.exploreMore': 'Saznaj više',
    'home.aboutCard.title': 'O timu',
    'home.aboutCard.text': 'Saznajte istoriju našeg tima, misiju i dostignuća u svetu motorsporta',
    'home.servicesCard.title': 'Kako da se pridružiš timu',
    'home.servicesCard.text': 'Informacije o tome kako da postanete deo našeg tima i koje usluge nudimo',
    'home.racersCard.title': 'Naši vozači',
    'home.racersCard.text': 'Upoznajte se sa našim talentovanim sportistima i njihovim dostignućima',
    'home.championshipsCard.title': 'Naši šampionati',
    'home.championshipsCard.text': 'MiniGP Srbija na minigp i pitbike - naš vodeći šampionat',
    'home.participationCard.title': 'Šampionati u kojima učestvujemo',
    'home.participationCard.text': 'Lista svih takmičenja na kojima nastupaju naši vozači',
    'home.sponsorsCard.title': 'Ponuda za sponzore',
    'home.sponsorsCard.text': 'Mogućnosti partnerstva i sponzorstva sa našim timom',
    'home.stats.racers': 'Vozača u timu',
    'home.stats.stars': 'Zvezdanih vozača',
    'home.stats.championship': 'Vlastiti šampionat',
    'home.stats.passion': 'Strast za motorsportom',
    'home.cta.title': 'Spremni da se pridružite?',
    'home.cta.text': 'Postanite deo profesionalnog motorsport tima',
    'home.cta.aboutMore': 'Saznaj više o timu',

    // About Page
    'about.title': 'O timu',
    'about.subtitle': 'Saznajte više o našoj istoriji, misiji i dostignućima',
    'about.history.title': 'Naša istorija',
    'about.history.text1': 'Anton Griev Racing Team je profesionalni tim koji se specijalizuje za dvotočkaš motorsport. Okupljamo talentovane vozače, trenere i entuzijaste koji dele strast za brzinom i savršenstvom.',
    'about.history.text2': 'Naš tim aktivno učestvuje u različitim disciplinama motorsporta, uključujući pitbike, kruzne moto trke i motokros. Ne samo da učestvujemo u takmičenjima, već organizujemo i vlastite šampionate, doprinoseći razvoju motorsporta u regionu.',
    'about.mission.title': 'Naša misija',
    'about.mission.text': 'Težimo da razvijamo dvotočkaš motorsport, vaspitavamo novu generaciju talentovanih vozača i pružamo im sve potrebne resurse za postizanje visokih rezultata. Naš cilj je da stvorimo profesionalno okruženje gde svaki sportista može da otkrije svoj potencijal.',
    'about.features.title': 'Šta nas izdvaja',
    'about.features.professional': 'Profesionalni pristup: Individualan rad sa svakim vozačem',
    'about.features.coaching': 'Iskusan trenerski sastav: Na čelu sa Antonom Grievom',
    'about.features.championship': 'Vlastiti šampionat: MiniGP Srbija na minigp i pitbike',
    'about.features.equipment': 'Savremena oprema: Najbolja tehnika i oprema',
    'about.features.team': 'Timski duh: Podrška i međusobna pomoć između svih učesnika',
    'about.values.title': 'Naše vrednosti',
    'about.values.excellence': 'Izvrsnost',
    'about.values.excellenceText': 'Težimo najvišim standardima u svakom aspektu naše delatnosti',
    'about.values.teamwork': 'Timski rad',
    'about.values.teamworkText': 'Uspeh svakog vozača je uspeh celog tima',
    'about.values.professionalism': 'Profesionalizam',
    'about.values.professionalismText': 'Ozbiljan odnos prema treninzima, takmičenjima i razvoju',
    'about.values.passion': 'Strast',
    'about.values.passionText': 'Ljubav prema motorsportu nas gura napred ka novim dostignućima',
    'about.leadership.title': 'Rukovodstvo tima',
    'about.leadership.antonTitle': 'Osnivač i glavni trener tima',
    'about.leadership.antonText1': 'Anton Griev je iskusan stručnjak u oblasti motorsporta sa dugogodišnjim stažom. Pod njegovim rukovodstvom tim je postigao značajne uspehe i nastavlja da se razvija. Njegov pristup treninzima kombinuje tehnička znanja, psihološku pripremu i individualan rad sa svakim sportistom.',
    'about.leadership.antonText2': 'Anton nije samo trener, već i aktivan učesnik takmičenja, što mu omogućava da bolje razume potrebe i izazove sa kojima se vozači suočavaju na stazi.',
    'about.cta.title': 'Spremni da postanete deo našeg tima?',
    'about.cta.text': 'Pridružite se profesionalnoj motorsport zajednici',
    'about.cta.meetRacers': 'Upoznajte vozače',

    // Services Page
    'services.title': 'Kako da se pridružiš timu',
    'services.subtitle': 'Saznajte o našim uslugama i zahtevima za pristupanje',
    'services.intro': 'Anton Griev Racing Team nudi širok spektar usluga za razvoj veština u dvotočkaš motorsportu. Radimo i sa početnicima i sa iskusnim vozačima.',
    'services.ourServices': 'Naše usluge',
    'services.individualTraining': 'Individualni treninzi',
    'services.groupTraining': 'Grupni treninzi',
    'services.technicalSupport': 'Tehnička podrška',
    'services.competitions': 'Učešće u takmičenjima',
    'services.requirements': 'Zahtevi za pristupanje timu',
    'services.beginners': 'Za početnike',
    'services.experienced': 'Za iskusne vozače',
    'services.howToJoin': 'Kako da postanete deo tima',
    'services.programs': 'Trening programi',
    'services.beginner': 'Program "Početnik"',
    'services.athlete': 'Program "Sportista"',
    'services.professional': 'Program "Profesionalac"',
    'services.cta.title': 'Spremni da počnete svoj put u motorsportu?',
    'services.cta.text': 'Kontaktirajte nas za konsultacije i rezervaciju probnog treninga',

    // Racers Page
    'racers.title': 'Naši vozači',
    'racers.subtitle': 'Upoznajte se sa talentovanim sportistima našeg tima',
    'racers.stars.title': '🌟 Naše zvezde 🌟',
    'racers.stars.subtitle': 'Čekaju vašu podršku! Pomozite našim talentovanim vozačima da dosegnu nove visine',
    'racers.allTeam.title': 'Ceo tim',
    'racers.allTeam.text': 'Naš tim se sastoji od talentovanih vozača različitog nivoa pripremljenosti, ujedinjenih zajedničkom strašću prema motorsportu.',
    'racers.trainer': 'Trener tima',
    'racers.achievements': 'Dostignuća:',
    'racers.support': 'Podržite',
    'racers.supportHow': 'Kako će vaša podrška pomoći:',
    'racers.equipment': '🏍️ Tehnička oprema',
    'racers.gear': '🛡️ Zaštitna oprema',
    'racers.competitions': '🏁 Učešće u takmičenjima',
    'racers.training': '🎯 Treninzi',
    'racers.teamStats': 'Statistike tima',
    'racers.stats.racers': 'Vozača u timu',
    'racers.stats.stars': 'Zvezdanih sportista',
    'racers.stats.prizes': 'Osvojenih mesta',
    'racers.stats.experience': 'Godina iskustva',
    'racers.cta.title': 'Želite da se pridružite našem timu?',
    'racers.cta.text': 'Postanite deo profesionalne zajednice vozača',

    // Championships Page
    'championships.title': 'Naši šampionati',
    'championships.subtitle': 'Organizujemo i sprovodimo profesionalna takmičenja u motorsportu',
    'championships.minigp': 'MiniGP Srbija',
    'championships.flagship': 'Naš vodeći šampionat',
    'championships.about': 'O šampionatu MiniGP Srbija',
    'championships.categories': 'Kategorije takmičenja',
    'championships.howToParticipate': 'Kako da učestvujete',

    // Championship description - Serbian
    'championships.description1': 'MiniGP Srbija je prestižni šampionat koji organizuje Anton Griev Racing Team zajedno sa Motosavez Srbiji i MEC (Moped Endurance Cup Srbija). Takmičenja se održavaju na MiniGP motociklima i pitbike-ovima, privlačeći najbolje vozače iz regiona i šire.',
    'championships.description2': 'Šampionat se sprovodi u skladu sa međunarodnim FIM standardima i uključuje nekoliko etapa tokom trkaće sezone. Svaka etapa je uzbudljiv spektakl gde vozači demonstriraju najviši nivo majstorstva i sportskog duha.',

    // Championship regulations - Serbian
    'championships.regulations2025Title': 'Pravilnik 2025. godine',
    'championships.regulations2025Text': 'U šampionatu MiniGP Srbija 2025. godine učestvuju MiniGP motocikli i pitbike-ovi:',
    'championships.regulation1': 'Obim motora: do 190cc',
    'championships.regulation2': 'Točkovi: 12 inča',
    'championships.regulation3': 'Sistem napajanja: karburator',

    // Championship plans 2026 - Serbian
    'championships.plans2026Title': 'Planovi za 2026. godinu',
    'championships.plans2026Text': 'U 2026. godini planira se podela na kategorije:',
    'championships.openClass': 'Klasa Open: motori do 190cc 4 ventila (Daytona, ZS190v4)',
    'championships.stockClass': 'Klasa Stock: motori do 190cc 2 ventila (ZS190v2)',
    'championships.commonRequirements': 'Opšti zahtevi: točkovi 12", karburator',

    // Championship tracks - Serbian
    'championships.tracksTitle': 'Staze šampionata',
    'championships.tracksText': 'Takmičenja se održavaju na sledećim stazama:',
    'championships.track1': '📍 Motodrom Kula',
    'championships.track1Desc': 'Profesionalna staza za moto trke',
    'championships.track2': '📍 Karting Centar Jagodina',
    'championships.track2Desc': 'Karting centar sa tehničkim krivinama',
    'championships.track3': '📍 Dobanovci track',
    'championships.track3Desc': 'Brza staza za motocikle',
    'championships.track4': '📍 NAVAK',
    'championships.track4Desc': 'Staza sa raznovrsnim delovima',
    'championships.track5': '📍 Cacak track',
    'championships.track5Desc': 'Slikovita staza u planinama',

    // Technical regulations - Serbian
    'championships.techRegTitle': 'Tehnički pravilnik',
    'championships.techRegText': 'Kompletni tehnički pravilnik za 2025. godinu dostupan je za preuzimanje',
    'championships.downloadReg': 'Preuzmi pravilnik 2025',

    // Championship stats - Serbian
    'championships.statsTitle': 'Statistike šampionata 2025',
    'championships.stat1': 'Etapa u sezoni',
    'championships.stat2': '20+',
    'championships.stat2Text': 'Učesnika',
    'championships.stat3': '5',
    'championships.stat3Text': 'Zemlja učesnica',
    'championships.stat4': 'Nagradni fond ne postoji',

    'championships.cta.title': 'Postanite deo MiniGP Srbija!',
    'championships.cta.text': 'Pridružite se najprestižnijem šampionatu regiona',

    // Championship features - Serbian
    'championships.featuresTitle': 'Karakteristike šampionata:',
    'championships.feature1': 'Međunarodni status: Usklađenost sa FIM standardima',
    'championships.feature2': 'Dve kategorije: MiniGP i pitbike-ovi',
    'championships.feature3': 'Profesionalna organizacija: Visok nivo izvođenja',
    'championships.feature4': 'Nagradni fond: Dostojne nagrade za pobednike',
    'championships.feature5': 'Medijsko pokrivanje: Prenosi i osvetljavanje u medijima',
    'championships.feature6': 'Bezbednost: Strogi bezbednosni standardi',
    'championships.requirementsTitle': 'Jedinstveni zahtevi 2025',
    'championships.stat2Text': 'Učesnika',
    'championships.stat3Text': 'Zemlja učesnica',

    // Participation Page
    'participation.title': 'Šampionati u kojima učestvujemo',
    'participation.subtitle': 'Naši vozači nastupaju u različitim prestižnim takmičenjima',
    'participation.international': 'Međunarodna takmičenja',
    'participation.intro': 'Tim Anton Griev Racing Team aktivno učestvuje u različitim nacionalnim i međunarodnim šampionatima, demonstrirajući visok nivo pripremljenosti i profesionalizam.',
    'participation.upcoming': 'Predstojeca takmičenja',
    'participation.cta.title': 'Želite da pratite naše rezultate?',
    'participation.cta.text': 'Pretplatite se na naša ažuriranja i pratite nastupe tima',

    // Sponsors Page
    'sponsors.title': 'Ponuda za sponzore',
    'sponsors.subtitle': 'Postanite partner profesionalnog motorsport tima',
    'sponsors.whyPartner': 'Zašto treba da postanete naš partner?',
    'sponsors.intro': 'Anton Griev Racing Team nudi jedinstvene mogućnosti za brendiranje i marketing kroz motorsport. Naš tim učestvuje u prestižnim takmičenjima i ima široku publiku obožavatelja.',

    // Benefits
    'sponsors.mediaCoverage': 'Medijsko pokrivanje',
    'sponsors.mediaCoverageText': 'Vaš brend će biti predstavljen na televiziji, društvenim mrežama i specijalizovanim izdanjima',
    'sponsors.broadcasts': 'Prenosi takmičenja',
    'sponsors.interviews': 'Intervjui sa vozačima',
    'sponsors.socialMedia': 'Društvene mreže (50K+ pratilaca)',
    'sponsors.pressReleases': 'Saopštenja za javnost i članci',

    'sponsors.targetAudience': 'Ciljna publika',
    'sponsors.targetAudienceText': 'Pristup aktivnoj publici ljubitelja motorsporta i ekstremnih sportova',
    'sponsors.demographics': 'Muškarci 18-45 godina (70%)',
    'sponsors.income': 'Srednji i iznad prosečni prihodi',
    'sponsors.lifestyle': 'Aktivan način života',
    'sponsors.techInterest': 'Interesovanje za tehnologije',

    'sponsors.prestige': 'Prestiž i reputacija',
    'sponsors.prestigeText': 'Povezanost sa profesionalnim sportom povećava imidž vašeg brenda',
    'sponsors.europeanChampionships': 'Učešće u evropskim šampionatima',
    'sponsors.ownChampionship': 'Vlastiti šampionat MiniGP Srbija',
    'sponsors.professionalTeam': 'Profesionalni tim',
    'sponsors.highResults': 'Visoki sportski rezultati',

    'sponsors.geography': 'Geografski obuhvat',
    'sponsors.geographyText': 'Prisustvo na takmičenjima u različitim zemljama Evrope',
    'sponsors.countries1': 'Srbija, Češka, Bugarska',
    'sponsors.countries2': 'Mađarska, Slovenija, Hrvatska',
    'sponsors.onlineAudience': 'Online publika širom sveta',
    'sponsors.expansionPlans': 'Planovi proširenja u druge zemlje',

    // Packages
    'sponsors.packages': 'Paketi sponzorstva',
    'sponsors.titleSponsor': 'Glavni sponzor',
    'sponsors.mainPartner': 'Glavni partner',
    'sponsors.officialPartner': 'Zvanični partner',
    'sponsors.supportingPartner': 'Partner podrške',
    'sponsors.season': '/ sezona',
    'sponsors.whatIncluded': 'Šta je uključeno:',

    'sponsors.minigpSponsorship': 'Sponzorstvo šampionata MiniGP Srbija',
    'sponsors.uniqueOpportunity': 'Jedinstvena prilika',
    'sponsors.contactUs': 'Kontaktirajte nas',
    'sponsors.cta.title': 'Spremni da postanete naš partner?',
    'sponsors.cta.text': 'Pridružite se timu profesionalaca i dobijte maksimalnu vrednost od investicije u sport',

    // Contacts Page
    'contacts.title': 'Kontakt',
    'contacts.subtitle': 'Kontaktirajte nas na bilo koji način',
    'contacts.contactInfo': 'Kontakt informacije',
    'contacts.email': 'Elektronska pošta',
    'contacts.phone': 'Telefon',
    'contacts.location': 'Lokacija',
    'contacts.social': 'Društvene mreže',
    'contacts.specialized': 'Specijalizovani kontakti',
    'contacts.sendMessage': 'Pošaljite poruku',
    'contacts.faq': 'Često postavljana pitanja',
    'contacts.howToFind': 'Kako da nas nađete',
    'contacts.cta.title': 'Spremni da počnete svoj put u motorsportu?',
    'contacts.cta.text': 'Kontaktirajte nas danas i napravite prvi korak ka ostvarenju svojih ciljeva',

    // Footer
    'footer.teamDescription': 'Profesionalni tim dvotočkaš motorsporta'
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Team',
    'nav.services': 'Services',
    'nav.racers': 'Racers',
    'nav.championships': 'Our Championships',
    'nav.participation': 'Participation',
    'nav.sponsors': 'Sponsors',
    'nav.contacts': 'Contact',

    // Common
    'common.learnMore': 'Learn More →',
    'common.readMore': 'Read More →',
    'common.viewMore': 'View More →',
    'common.seeDetails': 'See Details →',
    'common.contactUs': 'Contact Us',
    'common.joinTeam': 'How to Join Team',
    'common.allRightsReserved': 'All rights reserved',
    'common.quickLinks': 'Quick Links',
    'common.email': 'Email',
    'common.phone': 'Phone',

    // Home Page
    'home.title': 'Anton Griev Racing Team',
    'home.subtitle': 'Professional Two-Wheel Motorsport Team',
    'home.description': 'Pitbikes • Road Racing • Motocross',
    'home.aboutTeam': 'About Team',
    'home.ourRacers': 'Our Racers',
    'home.exploreMore': 'Explore More',
    'home.aboutCard.title': 'About Team',
    'home.aboutCard.text': 'Learn about our team history, mission and achievements in the world of motorsport',
    'home.servicesCard.title': 'How to Join Team',
    'home.servicesCard.text': 'Information on how to become part of our team and what services we offer',
    'home.racersCard.title': 'Our Racers',
    'home.racersCard.text': 'Meet our talented athletes and their achievements',
    'home.championshipsCard.title': 'Our Championships',
    'home.championshipsCard.text': 'MiniGP Serbia on minigp and pitbikes - our flagship championship',
    'home.participationCard.title': 'Championships We Participate In',
    'home.participationCard.text': 'List of all competitions where our racers compete',
    'home.sponsorsCard.title': 'Sponsor Proposal',
    'home.sponsorsCard.text': 'Partnership and sponsorship opportunities with our team',
    'home.stats.racers': 'Racers in Team',
    'home.stats.stars': 'Star Racers',
    'home.stats.championship': 'Own Championship',
    'home.stats.passion': 'Passion for Motorsport',
    'home.cta.title': 'Ready to Join Us?',
    'home.cta.text': 'Become part of a professional motorsport team',
    'home.cta.aboutMore': 'Learn More About Team',

    // About Page
    'about.title': 'About Team',
    'about.subtitle': 'Learn more about our history, mission and achievements',
    'about.history.title': 'Our History',
    'about.history.text1': 'Anton Griev Racing Team is a professional team specializing in two-wheel motorsport. We bring together talented racers, coaches and enthusiasts who share a passion for speed and excellence.',
    'about.history.text2': 'Our team actively participates in various motorsport disciplines, including pitbikes, Road Racing and motocross. We not only participate in competitions, but also organize our own championships, contributing to the development of motorsport in the region.',
    'about.mission.title': 'Our Mission',
    'about.mission.text': 'We strive to develop two-wheel motorsport, nurture a new generation of talented racers and provide them with all the necessary resources to achieve high results. Our goal is to create a professional environment where every athlete can unlock their potential.',
    'about.features.title': 'What Sets Us Apart',
    'about.features.professional': 'Professional Approach: Individual work with each racer',
    'about.features.coaching': 'Experienced Coaching Staff: Led by Anton Griev',
    'about.features.championship': 'Own Championship: MiniGP Serbia on minigp and pitbikes',
    'about.features.equipment': 'Modern Equipment: Best technology and gear',
    'about.features.team': 'Team Spirit: Support and mutual assistance between all participants',
    'about.values.title': 'Our Values',
    'about.values.excellence': 'Excellence',
    'about.values.excellenceText': 'We strive for the highest standards in every aspect of our activity',
    'about.values.teamwork': 'Teamwork',
    'about.values.teamworkText': 'Every racer\'s success is the whole team\'s success',
    'about.values.professionalism': 'Professionalism',
    'about.values.professionalismText': 'Serious attitude towards training, competitions and development',
    'about.values.passion': 'Passion',
    'about.values.passionText': 'Love for motorsport drives us forward to new achievements',
    'about.leadership.title': 'Team Leadership',
    'about.leadership.antonTitle': 'Founder and Head Coach',
    'about.leadership.antonText1': 'Anton Griev is an experienced motorsport specialist with many years of experience. Under his leadership, the team has achieved significant success and continues to develop. His approach to training combines technical knowledge, psychological preparation and individual work with each athlete.',
    'about.leadership.antonText2': 'Anton is not only a coach, but also an active participant in competitions, which allows him to better understand the needs and challenges that racers face on the track.',
    'about.cta.title': 'Ready to Become Part of Our Team?',
    'about.cta.text': 'Join the professional motorsport community',
    'about.cta.meetRacers': 'Meet the Racers',

    // Services Page
    'services.title': 'How to Join Team',
    'services.subtitle': 'Learn about our services and requirements for joining',
    'services.intro': 'Anton Griev Racing Team offers a wide range of services for developing skills in two-wheel motorsport. We work with both beginners and experienced racers.',
    'services.ourServices': 'Our Services',
    'services.individualTraining': 'Individual Training',
    'services.groupTraining': 'Group Training',
    'services.technicalSupport': 'Technical Support',
    'services.competitions': 'Competition Participation',
    'services.requirements': 'Team Joining Requirements',
    'services.beginners': 'For Beginners',
    'services.experienced': 'For Experienced Racers',
    'services.howToJoin': 'How to Become Part of the Team',
    'services.programs': 'Training Programs',
    'services.beginner': '"Beginner" Program',
    'services.athlete': '"Athlete" Program',
    'services.professional': '"Professional" Program',
    'services.cta.title': 'Ready to Start Your Motorsport Journey?',
    'services.cta.text': 'Contact us for consultation and trial training booking',

    // Racers Page
    'racers.title': 'Our Racers',
    'racers.subtitle': 'Meet the talented athletes of our team',
    'racers.stars.title': '🌟 Our Stars 🌟',
    'racers.stars.subtitle': 'Awaiting your support! Help our talented racers reach new heights',
    'racers.allTeam.title': 'The Whole Team',
    'racers.allTeam.text': 'Our team consists of talented racers of different skill levels, united by a common passion for motorsport.',
    'racers.trainer': 'Team Coach',
    'racers.achievements': 'Achievements:',
    'racers.support': 'Support',
    'racers.supportHow': 'How your support will help:',
    'racers.equipment': '🏍️ Technical Equipment',
    'racers.gear': '🛡️ Safety Gear',
    'racers.competitions': '🏁 Competition Participation',
    'racers.training': '🎯 Training',
    'racers.teamStats': 'Team Statistics',
    'racers.stats.racers': 'Racers in Team',
    'racers.stats.stars': 'Star Athletes',
    'racers.stats.prizes': 'Prize Places',
    'racers.stats.experience': 'Years of Experience',
    'racers.cta.title': 'Want to Join Our Team?',
    'racers.cta.text': 'Become part of a professional racing community',

    // Championships Page
    'championships.title': 'Our Championships',
    'championships.subtitle': 'We organize and conduct professional motorsport competitions',
    'championships.minigp': 'MiniGP Serbia',
    'championships.flagship': 'Our Flagship Championship',
    'championships.about': 'About MiniGP Serbia Championship',
    'championships.categories': 'Competition Categories',
    'championships.howToParticipate': 'How to Participate',

    // Championship description - English
    'championships.description1': 'MiniGP Serbia is a prestigious championship organized by Anton Griev Racing Team in partnership with Motosavez Srbiji and MEC (Moped Endurance Cup Srbija). Competitions are held on MiniGP motorcycles and pitbikes, attracting the best riders from the region and beyond.',
    'championships.description2': 'The championship is conducted in accordance with international FIM standards and includes several stages throughout the racing season. Each stage is an exciting spectacle where riders demonstrate the highest level of skill and sportsmanship.',

    // Championship regulations - English
    'championships.regulations2025Title': '2025 Regulations',
    'championships.regulations2025Text': 'MiniGP Serbia 2025 championship features MiniGP motorcycles and pitbikes:',
    'championships.regulation1': 'Engine displacement: up to 190cc',
    'championships.regulation2': 'Wheels: 12 inches',
    'championships.regulation3': 'Fuel system: carburetor',

    // Championship plans 2026 - English
    'championships.plans2026Title': 'Plans for 2026',
    'championships.plans2026Text': 'In 2026, division into categories is planned:',
    'championships.openClass': 'Open Class: engines up to 190cc 4 valves (Daytona, ZS190v4)',
    'championships.stockClass': 'Stock Class: engines up to 190cc 2 valves (ZS190v2)',
    'championships.commonRequirements': 'Common requirements: 12" wheels, carburetor',

    // Championship tracks - English
    'championships.tracksTitle': 'Championship Tracks',
    'championships.tracksText': 'Competitions are held on the following tracks:',
    'championships.track1': '📍 Motodrom Kula',
    'championships.track1Desc': 'Professional racing track for motorcycles',
    'championships.track2': '📍 Karting Centar Jagodina',
    'championships.track2Desc': 'Karting center with technical turns',
    'championships.track3': '📍 Dobanovci track',
    'championships.track3Desc': 'High-speed track for motorcycles',
    'championships.track4': '📍 NAVAK',
    'championships.track4Desc': 'Track with diverse sections',
    'championships.track5': '📍 Cacak track',
    'championships.track5Desc': 'Scenic mountain track',

    // Technical regulations - English
    'championships.techRegTitle': 'Technical Regulations',
    'championships.techRegText': 'Complete technical regulations for 2025 are available for download',
    'championships.downloadReg': 'Download 2025 Regulations',

    // Championship stats - English
    'championships.statsTitle': '2025 Championship Statistics',
    'championships.stat1': 'Stages per season',
    'championships.stat2': '20+',
    'championships.stat2Text': 'Participants',
    'championships.stat3': '5',
    'championships.stat3Text': 'Participating Countries',
    'championships.stat4': 'No prize fund',

    'championships.cta.title': 'Become Part of MiniGP Serbia!',
    'championships.cta.text': 'Join the most prestigious championship in the region',

    // Championship features - English
    'championships.featuresTitle': 'Championship Features:',
    'championships.feature1': 'International status: FIM standards compliance',
    'championships.feature2': 'Two categories: MiniGP and pitbikes',
    'championships.feature3': 'Professional organization: High level of execution',
    'championships.feature4': 'Prize fund: Worthy awards for winners',
    'championships.feature5': 'Media coverage: Broadcasting and media coverage',
    'championships.feature6': 'Safety: Strict safety standards',
    'championships.requirementsTitle': 'Unified Requirements 2025',
    'championships.stat2Text': 'Participants',
    'championships.stat3Text': 'Participating Countries',

    // Participation Page
    'participation.title': 'Championships We Participate In',
    'participation.subtitle': 'Our racers compete in various prestigious competitions',
    'participation.international': 'International Competitions',
    'participation.intro': 'Anton Griev Racing Team actively participates in various national and international championships, demonstrating high level of preparation and professionalism.',
    'participation.upcoming': 'Upcoming Competitions',
    'participation.cta.title': 'Want to Follow Our Results?',
    'participation.cta.text': 'Subscribe to our updates and follow team performances',

    // Sponsors Page
    'sponsors.title': 'Sponsor Proposal',
    'sponsors.subtitle': 'Become a partner of a professional motorsport team',
    'sponsors.whyPartner': 'Why Become Our Partner?',
    'sponsors.intro': 'Anton Griev Racing Team offers unique opportunities for branding and marketing through motorsport. Our team participates in prestigious competitions and has a wide fan audience.',

    // Benefits
    'sponsors.mediaCoverage': 'Media Coverage',
    'sponsors.mediaCoverageText': 'Your brand will be featured on television, social media and specialized publications',
    'sponsors.broadcasts': 'Competition broadcasts',
    'sponsors.interviews': 'Racer interviews',
    'sponsors.socialMedia': 'Social media (50K+ followers)',
    'sponsors.pressReleases': 'Press releases and articles',

    'sponsors.targetAudience': 'Target Audience',
    'sponsors.targetAudienceText': 'Access to active audience of motorsport and extreme sports enthusiasts',
    'sponsors.demographics': 'Men 18-45 years (70%)',
    'sponsors.income': 'Middle and above average income',
    'sponsors.lifestyle': 'Active lifestyle',
    'sponsors.techInterest': 'Interest in technology',

    'sponsors.prestige': 'Prestige and Reputation',
    'sponsors.prestigeText': 'Association with professional sport enhances your brand image',
    'sponsors.europeanChampionships': 'Participation in European championships',
    'sponsors.ownChampionship': 'Own championship MiniGP Serbia',
    'sponsors.professionalTeam': 'Professional team',
    'sponsors.highResults': 'High sports results',

    'sponsors.geography': 'Geographic Coverage',
    'sponsors.geographyText': 'Presence at competitions in different European countries',
    'sponsors.countries1': 'Serbia, Czech Republic, Bulgaria',
    'sponsors.countries2': 'Hungary, Slovenia, Croatia',
    'sponsors.onlineAudience': 'Online audience worldwide',
    'sponsors.expansionPlans': 'Plans to expand to other countries',

    // Packages
    'sponsors.packages': 'Sponsorship Packages',
    'sponsors.titleSponsor': 'Title Sponsor',
    'sponsors.mainPartner': 'Main Partner',
    'sponsors.officialPartner': 'Official Partner',
    'sponsors.supportingPartner': 'Supporting Partner',
    'sponsors.season': '/ season',
    'sponsors.whatIncluded': 'What\'s included:',

    'sponsors.minigpSponsorship': 'MiniGP Serbia Championship Sponsorship',
    'sponsors.uniqueOpportunity': 'Unique Opportunity',
    'sponsors.contactUs': 'Contact Us',
    'sponsors.cta.title': 'Ready to Become Our Partner?',
    'sponsors.cta.text': 'Join the team of professionals and get maximum return on sports investment',

    // Contacts Page
    'contacts.title': 'Contact',
    'contacts.subtitle': 'Contact us in any convenient way',
    'contacts.contactInfo': 'Contact Information',
    'contacts.email': 'Email',
    'contacts.phone': 'Phone',
    'contacts.location': 'Location',
    'contacts.social': 'Social Media',
    'contacts.specialized': 'Specialized Contacts',
    'contacts.sendMessage': 'Send Message',
    'contacts.faq': 'Frequently Asked Questions',
    'contacts.howToFind': 'How to Find Us',
    'contacts.cta.title': 'Ready to Start Your Motorsport Journey?',
    'contacts.cta.text': 'Contact us today and take the first step towards achieving your goals',

    // Footer
    'footer.teamDescription': 'Professional two-wheel motorsport team'
  }
};

// Language management
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'ru';
    this.init();
  }

  init() {
    this.initLanguageSwitcher();
    this.translatePage();
    this.bindEvents();
  }

  initLanguageSwitcher() {
    // Initialize existing language switcher
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
      languageSelect.value = this.currentLanguage;
    }
  }

  changeLanguage(language) {
    this.currentLanguage = language;
    localStorage.setItem('language', language);
    this.translatePage();
  }

  translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = this.getTranslation(key);
      if (translation) {
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = translation;
        } else if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
          element.placeholder = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update page title if exists
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.getAttribute('data-translate')) {
      const key = titleElement.getAttribute('data-translate');
      const translation = this.getTranslation(key);
      if (translation) {
        titleElement.textContent = translation + ' - Anton Griev Racing Team';
      }
    }

    // Update meta description if exists
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && metaDescription.getAttribute('data-translate')) {
      const key = metaDescription.getAttribute('data-translate');
      const translation = this.getTranslation(key);
      if (translation) {
        metaDescription.setAttribute('content', translation);
      }
    }
  }

  getTranslation(key) {
    const langData = translations[this.currentLanguage];
    return langData ? langData[key] : key;
  }

  bindEvents() {
    // Re-translate when DOM changes (for dynamic content)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const translateElements = node.querySelectorAll('[data-translate]');
              translateElements.forEach(element => {
                const key = element.getAttribute('data-translate');
                const translation = this.getTranslation(key);
                if (translation) {
                  element.textContent = translation;
                }
              });
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  window.languageManager = new LanguageManager();
});

// CSS for language switcher
const style = document.createElement('style');
style.textContent = `
    .language-switcher {
        margin-left: 20px;
    }

    .language-switcher select {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        color: #fff;
        padding: 8px 12px;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
        outline: none;
        transition: all 0.3s ease;
    }

    .language-switcher select:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .language-switcher option {
        background: #1a1a1a;
        color: #fff;
    }

    @media (max-width: 768px) {
        .language-switcher {
            margin: 10px 0;
            text-align: center;
        }

        .nav-menu.active .language-switcher {
            margin-top: 20px;
        }
    }
`;
document.head.appendChild(style);
