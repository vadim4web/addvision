export default defineI18nConfig(() => ({
	legacy: false,
	fallbackLocale: 'uk',
	normalizeLocale: true, // Автоматично прибирає суфікси '-US', '-UA'
	messages: {
		uk: {
			meta: {
				title: 'Add Vision — агенція цифрового втілення візії',
				description:
					'Дизайн сайтів, брендинг, астропсихологія та ambient-досвід. Допомагаємо втілити вашу ідею онлайн та офлайн.',
			},
			agency: 'агенція',
			navigation: {
				title: 'Головна навігація',
				cases: 'Кейси',
				'why-us': 'Чому ми',
				services: 'Послуги',
				contacts: 'Контакти',
			},
			'we-do': {
				sences: 'сенси',
				texts: 'тексти',
				visual: 'візуал',
				dev: 'розробка',
			},
			moto: 'digital-рішення для втілення вашої візії',
			aria: {
				hero: 'Головний банер',
				cases: 'Кейси',
				casesVideo: 'Відео кейсів',
				whyUs: 'Чому ми',
				whatWeDo: 'Що ми робимо',
				services: 'Послуги',
				testimonials: 'Відгуки клієнтів',
				faq: 'Поширені запитання',
				contact: 'Контактна інформація',
			},
			what: {
				titleParts: {
					before: 'ЩО МИ ВКЛЮЧАЄМО',
					brownDeep1: 'В',
					accent: ' УПАКОВКУ',
					brownDeep2: ' БІЗНЕСУ?',
				},
				sections: {
					senses: {
						title: 'Сенси',
						items: [
							'концепція бренду',
							'місія та бачення',
							'позиціонування',
							'цінності бренду',
							'дослідження аудиторії',
						],
					},
					texts: {
						title: 'Тексти',
						items: [
							'слогани',
							'продажні тексти',
							'описи продуктів',
							'сторітелінг',
							'маніфести',
						],
					},
					visual: {
						title: 'Візуал',
						items: [
							'логотип',
							'айдентика',
							'фірмовий стиль',
							'соцмедіа-контент',
							'motion-дизайн',
						],
					},
					dev: {
						title: 'Розробка',
						items: [
							'сайт або лендінг',
							'веб-додатки',
							'веб-анімація',
							'банер/реклама',
							'інтерактив у соцмережах',
						],
					},
				},
				cta: 'Індивідуально підбираємо комплекс послуг під ваш бізнес для максимального результату.',
			},
			why: {
				titleParts: {
					before: 'ЧОМУ',
					accent: ' МИ',
				},
				coopParts: {
					accent: 'Спів',
					rest: 'творення',
				},
				values:
					' — це партнерство, це більше за відносини “замовник-підрядник”. Ми прагнемо бути корисними з першої зустрічі, допомогти, вкласти наш досвід у новий проект. Якщо ми працюємо з вами, значить безперечно віримо у нього.',
				stats: [
					'Років досвіду',
					'Задоволених клієнтів',
					'Клієнтів повертаються',
					'Реалізованих проєктів',
				],
				cta: 'ПРОРАХУВАТИ ВАРТІСТЬ САЙТУ',
			},
			cases: {
				title: 'КЕЙСИ',
				moreLabel: 'БІЛЬШЕ КЕЙСІВ',
				description:
					'Ми втілюємо візії бізнесів у реальні цифрові рішення. У цій секції — наші кейси, що демонструють підходи, які ми застосовуємо в роботі: від стратегічного позиціонування до запуску повноцінних digital-продуктів. Подивіться, як ми допомагаємо брендам ставати впізнаваними, сучасними та ефективними.',
				list: [
					{
						title: 'Теджовати',
						url: 'https://tedzhovati.com/',
						preview: 'Йога | Ретріти | Астрологія',
						description:
							'Багатомовний сайт для йога-бренду з простим оновленням програм, підпискою на анонси та інтеграцією з WhatsApp. Побудовано для зручного самостійного ведення.',
					},
					{
						title: 'UniPark',
						url: 'https://vadim4web.github.io/unipark-com-ua/',
						preview: 'Івент агентство | SPA | Vue',
						description:
							'Інтерактивна SPA-сторінка з яскравими анімаціями та плавною навігацією. Розроблена на Vue з підтримкою UA, EN та адаптивним UI.',
					},
					{
						title: 'SandraMaria.Duo',
						url: 'https://www.sandramaria.pro/',
						preview: 'Музичний дует | WP | Концерти',
						description:
							'Сайт-лендінг для музичного дуету з теплим стилем, емоційними відеокадрами та атмосферою. Побудований на WordPress для творчої аудиторії.',
					},
					{
						title: 'Gouri Консалтинг',
						url: 'https://gouri.com.pl/',
						preview: 'Юридична допомога | Польща | Vue',
						description:
							'Лендінг для консалтингової компанії в Польщі. Чіткий, локалізований інтерфейс, SEO-оптимізація та підтримка користувачів з України та СНД.',
					},
				],
			},
			services: {
				title: 'НАШІ ПОСЛУГИ',
				heading: 'Ми є партнером з дизайну та технологій для цифрової ери',
				description:
					'Ми допомагаємо бізнесу впроваджувати інновації та залишатися актуальними для своїх клієнтів. Наші виняткові цифрові продукти, пропозиції, послуги та рішення для комунікації бренду від ідеї до продукту створюють успішні цифрові послуги для інноваційних стартапів та успішних компаній з модним UX/UI дизайном, розробкою фронтенду та бекенду.',
				categories: {
					web: {
						title: 'РОЗРОБКА САЙТІВ',
						items: [
							'Розробка сайтів та лендінгів',
							'Розробка e-commerce',
							'Розробка telegram mini-app & bot',
							'Технічне супроводження',
						],
					},
					branding: {
						title: 'УПАКОВКА БІЗНЕСУ',
						items: [
							'Ідентичність бренду',
							'Візуальна стратегія',
							'Дизайн система',
							'Motion, анімації та креативи',
						],
					},
					content: {
						title: 'КОНТЕНТ-МАРКЕТИНГ',
						items: [
							'Створення контенту',
							'Контент-маркетинг',
							'Пошукова оптимізація (SEO)',
							'Social Media (SMM)',
						],
					},
				},
			},
			testimonials: {
				titleParts: {
					before: 'ВІДГУКИ',
					accent: ' КЛІЄНТІВ',
					accent_: '',
				},
				list: [
					{
						text: 'Сайт на WordPress з усім потрібним функціоналом — усе працює стабільно, легко оновлюється. Просто додаю подію чи включаю чат — і готово.',
						author: 'Тетяна А',
						author_: 'інструктор йоги, tedzhovati.com',
					},
					{
						text: 'Допомогли з телеграм-ботами та автоматизацією. Зекономили мені купу часу — я ж не технар, а власник лейблу.',
						author: 'Віктор Б',
						author_: 'власник Berbeca Records',
					},
					{
						text: 'Отримали якраз те, що було потрібно. Робота об’ємна, та все виконано вчасно й з душею. Видимість у мережі зросла помітно. Рекомендуємо!',
						author: 'Марія К',
						author_: 'артистка, піаністка, викладач, sandramaria.pro',
					},
					{
						text: 'Відкривала компанію — хотілося, щоб усе було по-людськи. Сайт, дизайн, SEO — отримала не просто послугу, а повноцінне рішення.',
						author: 'Кіра Б',
						author_: 'засновниця Gouri.pl.com',
					},
					{
						text: 'Взяли на себе майже весь обсяг по розробці. Швидко зробили прототип, детально опрацювали дизайн. Бачу перспективу й потенціал.',
						author: 'Денис П',
						author_: 'засновник UniPark',
					},
					{
						text: 'Поради, лендінг, СММ — усе доречно та вчасно. Виглядає й працює круто. Показую клієнтам як презентацію — всім подобається.',
						author: 'Антон С',
						author_: 'підприємець',
					},
					{
						text: 'Реально допомогли з локалізацією та серверною частиною. Це довго було моїм головним болем. Тепер усе стабільно.',
						author: 'Макс Д',
						author_: 'DevOps у мультипрофільній компанії',
					},
					{
						text: 'Оновили сайт, дали новий вигляд і чітке бачення. Особливо ціную увагу до деталей і розуміння нашого бізнесу в цілому.',
						author: 'Олег К',
						author_: 'SEO та співзасновник MediaOffice',
					},
					{
						text: 'Сайт був у хаосі, розробка зупинилась. Допомогли розібратись, впорядкувати процес і навіть виявили помилки, які самі не бачили.',
						author: 'Олег Д',
						author_: 'адміністратор kavaira',
					},
					{
						text: 'Проєкт складний — але ми все встигли завдяки вам. Від ідеї до запуску. Горді результатами, далі — тільки вперед.',
						author: 'Соня С',
						author_: 'керівниця R&D, N-Code',
					},
					{
						text: 'Працювали “по сарафану”, сайт лежав. Тепер можна і вибрати, і замовити онлайн. Вчасно модернізувалися разом з вами.',
						author: 'Олександр С',
						author_: 'засновник MONE-Studio',
					},
					{
						text: 'Прототип, концепція, брейншторми — усе було по-справжньому продуктивно. Початок зроблено, рухаємося далі. Щиро дякую!',
						author: 'Владислав М',
						author_: 'продакт-оунер, Unison',
					},
				],
			},
			faq: {
				titleParts: {
					start: 'ЧАСТІ',
					middle: '',
					end: ' ПИТАННЯ',
				},
				description:
					'Ми зібрали відповіді на найпоширеніші запитання щодо нашого процесу, термінів та співпраці з клієнтами. Кожен проєкт для нас — індивідуальний, і багато чого залежить від конкретних цілей та задач. У цьому розділі зібрано типові відповіді, засновані на нашому досвіді. Якщо у вас залишаться питання — звертайтесь. Ми завжди відкриті до діалогу і з радістю обговоримо саме ваш проєкт.',
				items: [
					{
						question: 'Як відбувається оплата?',
						answer:
							'Зазвичай ми беремо 50% передплати перед початком проєкту, а решту — після завершення.',
					},
					{
						question: 'Скільки триває розробка сайту?',
						answer:
							'Залежно від складності, розробка займає від 2 до 6 тижнів.',
					},
					{
						question: 'Чи надаєте ви підтримку після запуску?',
						answer:
							'Так, ми надаємо безкоштовну підтримку протягом 30 днів після запуску. За потреби можливе розширене обслуговування.',
					},
					{
						question: 'Чи можна буде редагувати сайт після завершення?',
						answer:
							'Звісно. Ми пропонуємо гнучкі пакети підтримки або навчаємо вашу команду працювати з контентом.',
					},
					{
						question: 'Ви займаєтесь лише сайтами чи й брендингом?',
						answer:
							'Ми також розробляємо айдентику бренду, дизайн-системи та креативні візуальні матеріали.',
					},
				],
			},
			contacts: {
				title: 'КОНТАКТИ',
				emailUs: 'НАПИШІТЬ НАМ',
				aria_label: "Форма зв'язку для надсилання повідомлення",
				name: "Ім'я",
				email: 'Електронна пошта',
				phone: 'Телефон',
				type: 'Тип запиту',
				choose: 'Оберіть тип',
				type_general: 'Загальний',
				type_support: 'Підтримка',
				type_feedback: 'Відгук',
				notes: 'Повідомлення',
				name_title: 'Введіть ваше ім’я (лише літери, мін. 2 символи)',
				email_title: 'Введіть дійсну електронну адресу',
				phone_title: 'Введіть номер телефону у форматі +380...',
				type_title: 'Оберіть тип запиту',
				notes_title: 'Необов’язково. До 500 символів',
				send: 'Надіслати',
				thank_you_title: 'Дякуємо!',
				thank_you_message: 'Ваше повідомлення було успішно надіслано.',
			},
			backToTop: 'Повернутися нагору',
			rights: 'Усі права захищено.',
		},
		ru: {
			meta: {
				title: 'Add Vision — агентство цифровой реализации идей',
				description:
					'Дизайн сайтов, брендинг, астропсихология и ambient-опыт. Помогаем воплотить вашу идею онлайн и офлайн.',
			},
			agency: 'агентство',
			navigation: {
				title: 'Главная навигация',
				cases: 'Кейсы',
				'why-us': 'Почему мы',
				services: 'Услуги',
				contacts: 'Контакты',
			},
			'we-do': {
				sences: 'смыслы',
				texts: 'тексты',
				visual: 'визуал',
				dev: 'разработка',
			},
			moto: 'digital-решения для воплощения вашей визии',
			aria: {
				hero: 'Главный баннер',
				cases: 'Кейсы',
				casesVideo: 'Видео-кейсы',
				whyUs: 'Почему мы',
				whatWeDo: 'Что мы делаем',
				services: 'Услуги',
				testimonials: 'Отзывы клиентов',
				faq: 'Часто задаваемые вопросы',
				contact: 'Контактная информация',
			},
			what: {
				titleParts: {
					before: 'ЧТО МЫ ВКЛЮЧАЕМ',
					brownDeep1: 'В',
					accent: ' УПАКОВКУ',
					brownDeep2: ' БИЗНЕСА?',
				},
				sections: {
					senses: {
						title: 'Смыслы',
						items: [
							'концепция бренда',
							'миссия и видение',
							'позиционирование',
							'ценности бренда',
							'исследование аудитории',
						],
					},
					texts: {
						title: 'Тексты',
						items: [
							'слоганы',
							'продающие тексты',
							'описания продуктов',
							'сторителлинг',
							'манифесты',
						],
					},
					visual: {
						title: 'Визуал',
						items: [
							'айдентика',
							'логотип',
							'фирменный стиль',
							'контент для соцсетей',
							'motion-дизайн',
						],
					},
					dev: {
						title: 'Разработка',
						items: [
							'сайт или лендинг',
							'веб-приложения',
							'веб-анимация',
							'баннер/реклама',
							'интерактив в соцсетях',
						],
					},
				},
				cta: 'Индивидуально подбираем комплекс услуг под ваш бизнес для максимального результата.',
			},
			why: {
				titleParts: {
					before: 'ПОЧЕМУ',
					accent: ' МЫ',
				},
				coopParts: {
					accent: 'Со',
					rest: 'творение',
				},
				values:
					' — это партнёрство, это больше, чем отношения “заказчик-исполнитель”. Мы стремимся быть полезными с первой встречи, помочь, вложить наш опыт в новый проект. Если мы работаем с вами — значит, безусловно верим в него.',
				stats: [
					'Лет опыта',
					'Довольных клиентов',
					'Клиенты возвращаются',
					'Реализованных проектов',
				],
				cta: 'РАССЧИТАТЬ СТОИМОСТЬ САЙТА',
			},
			cases: {
				title: 'КЕЙСЫ',
				moreLabel: 'БОЛЬШЕ КЕЙСОВ',
				description:
					'Мы воплощаем бизнес-визии в реальные digital-решения. В этом разделе — кейсы, показывающие наш подход: от стратегии бренда до запуска полноценных цифровых продуктов. Посмотрите, как мы помогаем компаниям становиться узнаваемыми, современными и эффективными.',
				list: [
					{
						title: 'Теджовати',
						url: 'https://tedzhovati.com/',
						preview: 'Йога | Ретриты | Астрология',
						description:
							'Многоязычный сайт для бренда йоги с удобным обновлением программ, подпиской на анонсы и интеграцией WhatsApp. Разработан для самостоятельного ведения.',
					},
					{
						title: 'UniPark',
						url: 'https://vadim4web.github.io/unipark-com-ua/',
						preview: 'Агентство ивентов | SPA | Vue',
						description:
							'Интерактивная SPA-страница с эффектной анимацией и плавной навигацией. Создана на Vue с поддержкой UA, EN и адаптивным интерфейсом.',
					},
					{
						title: 'SandraMaria.Duo',
						url: 'https://www.sandramaria.pro/',
						preview: 'Музыкальный дуэт | WP | Концерты',
						description:
							'Лендинг для музыкального дуэта с уютным стилем, видеофреймами и эмоциональной атмосферой. Основан на WordPress для творческой аудитории.',
					},
					{
						title: 'Gouri Консалтинг',
						url: 'https://gouri.com.pl/',
						preview: 'Юридическая помощь | Польша | Vue',
						description:
							'Лендинг для консалтинговой компании в Польше. Чистый интерфейс, локализация, SEO и поддержка мигрантов из СНГ и Украины.',
					},
				],
			},
			services: {
				title: 'НАШИ УСЛУГИ',
				heading: 'Мы — ваш партнер по дизайну и технологиям в цифровую эпоху',
				description:
					'Мы помогаем бизнесу внедрять инновации и оставаться актуальными для своих клиентов. От идеи до продукта, наши цифровые продукты, услуги и решения в области коммуникации бренда создают успешные цифровые сервисы для инновационных стартапов и стабильных компаний — с современным UX/UI-дизайном, фронтенд и бэкенд-разработкой.',
				categories: {
					web: {
						title: 'РАЗРАБОТКА САЙТОВ',
						items: [
							'Разработка сайтов и лендингов',
							'Разработка e-commerce',
							'Разработка telegram mini-app и ботов',
							'Техническое сопровождение',
						],
					},
					branding: {
						title: 'УПАКОВКА БИЗНЕСА',
						items: [
							'Айдентика бренда',
							'Визуальная стратегия',
							'Дизайн-система',
							'Motion, анимации и креативы',
						],
					},
					content: {
						title: 'КОНТЕНТ-МАРКЕТИНГ',
						items: [
							'Создание контента',
							'Контент-маркетинг',
							'Поисковая оптимизация (SEO)',
							'Социальные сети (SMM)',
						],
					},
				},
			},
			testimonials: {
				titleParts: {
					before: 'ОТЗЫВЫ',
					accent: ' КЛИЕНТОВ',
					accent_: '',
				},
				list: [
					{
						text: 'Полностью рабочий сайт на WordPress — легко добавлять события, подключать чат или подписку. Всё стабильно и удобно.',
						author: 'Татьяна А',
						author_: 'преподаватель йоги, tedzhovati.com',
					},
					{
						text: 'Помогли разобраться с телеграм-ботами, API и автоматизацией. Мне, как предпринимателю, это сэкономило уйму времени.',
						author: 'Виктор Б',
						author_: 'владелец Berbeca Records',
					},
					{
						text: 'Работа объёмная, но всё выполнено с вниманием и в срок. Увидели рост узнаваемости в сети. Очень благодарны, рекомендуем!',
						author: 'Мария К',
						author_: 'артистка, пианистка, преподаватель, sandramaria.pro',
					},
					{
						text: 'Открывала бизнес — нужен был сайт с полноценным функционалом. Получила и дизайн, и SEO, и качественную поддержку.',
						author: 'Кира Б',
						author_: 'основатель Gouri.pl.com',
					},
					{
						text: 'Сняли с меня почти весь объем по разработке. Быстро сделали прототип, продумали всё до мелочей. Благодарен за точность.',
						author: 'Денис П',
						author_: 'основатель UniPark',
					},
					{
						text: 'Получил точные советы, одностраничник с нужным функционалом и качественное СММ. Работает — как журнал-презентация.',
						author: 'Антон С',
						author_: 'частный предприниматель',
					},
					{
						text: 'Спасибо за помощь с локализацией и серверными настройками. Это долго мешало работать — теперь всё стабильно.',
						author: 'Макс Д',
						author_: 'DevOps в многопрофильной компании',
					},
					{
						text: 'Обновили сайт, добавили современный стиль. Самое важное — подход и понимание бизнес-процессов. Очень доволен.',
						author: 'Олег К',
						author_: 'SEO и сооснователь MediaOffice',
					},
					{
						text: 'Сайт пришёл в упадок, всё тормозило. Выручили: восстановили логику, упростили поддержку и поправили старые ошибки.',
						author: 'Олег Д',
						author_: 'администратор kavaira',
					},
					{
						text: 'Без вас мы бы не справились с задачами. Всё — от идеи до релиза. Мы гордимся тем, чего добились вместе.',
						author: 'Соня С',
						author_: 'руководитель R&D, N-Code',
					},
					{
						text: 'Сайт пылился, работали по старинке. Теперь всё современно: можно и выбрать, и заказать. Спасибо за обновление.',
						author: 'Александр С',
						author_: 'владелец MONE-Studio',
					},
					{
						text: 'Помогли с концепцией, дизайн-прототипом, всё прошло на одном дыхании. Хорошее начало — залог хорошего движения!',
						author: 'Владислав М',
						author_: 'продакт-оунер, Unison',
					},
				],
			},
			faq: {
				titleParts: {
					start: 'ЧАСТЫЕ',
					middle: '',
					end: ' ВОПРОСЫ',
				},
				description:
					'Мы собрали ответы на самые распространённые вопросы о нашем процессе, сроках и сотрудничестве с клиентами. Каждый проект для нас уникален, и многое зависит от конкретных задач, целей и ожиданий. В этом разделе вы найдёте типовые ответы, основанные на нашей практике. Если у вас останутся вопросы — не стесняйтесь обращаться. Мы всегда открыты к диалогу и с удовольствием обсудим детали именно вашего проекта.',
				items: [
					{
						question: 'Как происходит оплата?',
						answer:
							'Обычно мы берем 50% предоплаты перед началом проекта, оставшиеся 50% — после завершения.',
					},
					{
						question: 'Сколько длится разработка сайта?',
						answer:
							'В зависимости от сложности, разработка занимает от 2 до 6 недель.',
					},
					{
						question: 'Предоставляете ли вы поддержку после запуска?',
						answer:
							'Да, мы предоставляем 30 дней бесплатной поддержки после запуска. Дальнейшее сопровождение — по запросу.',
					},
					{
						question: 'Можно ли вносить изменения после завершения проекта?',
						answer:
							'Конечно. Мы предлагаем гибкие планы поддержки или обучим вашу команду вносить изменения самостоятельно.',
					},
					{
						question: 'Вы занимаетесь только сайтами или еще и брендингом?',
						answer:
							'Мы также создаем айдентику бренда, дизайн-системы и креативные визуальные материалы.',
					},
				],
			},
			contacts: {
				title: 'КОНТАКТЫ',
				emailUs: 'НАПИШИТЕ НАМ',
				aria_label: 'Форма обратной связи для отправки сообщения',
				name: 'Имя',
				email: 'Электронная почта',
				phone: 'Телефон',
				type: 'Тип запроса',
				choose: 'Выберите тип',
				type_general: 'Общий',
				type_support: 'Поддержка',
				type_feedback: 'Обратная связь',
				notes: 'Сообщение',
				name_title: 'Введите ваше имя (только буквы, минимум 2 символа)',
				email_title: 'Введите корректный адрес электронной почты',
				phone_title: 'Введите номер телефона в формате +7...',
				type_title: 'Выберите тип запроса',
				notes_title: 'Необязательно. До 500 символов',
				send: 'Отправить',
				thank_you_title: 'Спасибо!',
				thank_you_message: 'Ваше сообщение было успешно отправлено.',
			},
			backToTop: 'Вернуться наверх',
			rights: 'Все права защищены.',
		},
		en: {
			meta: {
				title: 'Add Vision — digital agency to realize your vision',
				description:
					'Web design, branding, astro-psychology, and ambient experience. We help bring your vision to life online and offline.',
			},
			agency: 'agency',
			navigation: {
				title: 'Main navigation',
				cases: 'Cases',
				'why-us': 'Why us',
				services: 'Services',
				contacts: 'Contacts',
			},
			'we-do': {
				sences: 'senses',
				texts: 'texts',
				visual: 'visual',
				dev: 'development',
			},
			moto: 'digital solutions to embody your vision',
			aria: {
				hero: 'Hero banner',
				cases: 'Cases',
				casesVideo: 'Video cases',
				whyUs: 'Why us',
				whatWeDo: 'What we do',
				services: 'Services',
				testimonials: 'Client testimonials',
				faq: 'Frequently asked questions',
				contact: 'Contact information',
			},
			what: {
				titleParts: {
					before: 'WHAT WE INCLUDE',
					brownDeep1: 'IN',
					accent: ' BUSINESS',
					brownDeep2: ' BRANDING?',
				},
				sections: {
					senses: {
						title: 'Senses',
						items: [
							'brand concept',
							'mission and vision',
							'positioning',
							'brand values',
							'audience research',
						],
					},
					texts: {
						title: 'Texts',
						items: [
							'slogans',
							'sales copy',
							'product descriptions',
							'storytelling',
							'manifestos',
						],
					},
					visual: {
						title: 'Visual',
						items: [
							'identity',
							'logo',
							'brand style',
							'social content',
							'motion design',
						],
					},
					dev: {
						title: 'Development',
						items: [
							'website or landing',
							'web apps',
							'web animation',
							'banner/ads',
							'social media interactive',
						],
					},
				},
				cta: 'We tailor a service package specifically for your business to achieve maximum results.',
			},
			why: {
				titleParts: {
					before: 'WHY',
					accent: ' US',
				},
				coopParts: {
					accent: 'Co',
					rest: 'creation',
				},
				values:
					' is a partnership — more than just a client-contractor relationship. We aim to bring value from the very first meeting, contribute, and invest our experience into each new project. If we work with you, it means we truly believe in it.',
				stats: [
					'Years of experience',
					'Happy clients',
					'Clients return',
					'Projects completed',
				],
				cta: 'ESTIMATE WEBSITE COST',
			},
			cases: {
				title: 'CASES',
				moreLabel: 'MORE CASES',
				description:
					'We bring business visions to life through real digital solutions. This section showcases case studies that highlight our approach — from brand strategy to the launch of complete digital products. Explore how we help companies become recognizable, modern, and results-driven.',
				list: [
					{
						title: 'Tedzhovati',
						url: 'https://tedzhovati.com/',
						preview: 'Yoga | Retreats | Astrology',
						description:
							'Multilingual site for a yoga brand with easy program updates, event subscription, and WhatsApp integration. Built on WordPress for independent maintenance.',
					},
					{
						title: 'UniPark',
						url: 'https://vadim4web.github.io/unipark-com-ua/',
						preview: 'Event Agency | SPA | Vue',
						description:
							'Interactive single-page site with smooth transitions and modern animations. Built in Vue with full i18n support and mobile-optimized layout.',
					},
					{
						title: 'SandraMaria.Duo',
						url: 'https://www.sandramaria.pro/',
						preview: 'Music Duo | WP | Live Shows',
						description:
							'Landing page for a musical duo with warm design, video visuals, and an emotional tone. Built on WordPress with love and artistry.',
					},
					{
						title: 'Gouri Consulting',
						url: 'https://gouri.com.pl/',
						preview: 'Legal Aid | Poland | Vue',
						description:
							'Landing site for a consulting firm in Poland. Clear UI, SEO optimized, and localized for users from Ukraine and Russian-speaking countries.',
					},
				],
			},
			services: {
				title: 'OUR SERVICES',
				heading: 'We are your design and tech partner for the digital age',
				description:
					'We help businesses innovate and stay relevant to their customers. From idea to product, our exceptional digital products, services, branding communication, and solutions create successful digital experiences for innovative startups and established companies — with modern UX/UI design, frontend, and backend development.',
				categories: {
					web: {
						title: 'WEB DEVELOPMENT',
						items: [
							'Website and landing page development',
							'E-commerce development',
							'Telegram mini-app & bot development',
							'Technical support',
						],
					},
					branding: {
						title: 'BUSINESS BRANDING',
						items: [
							'Brand identity',
							'Visual strategy',
							'Design system',
							'Motion, animations, and creatives',
						],
					},
					content: {
						title: 'CONTENT MARKETING',
						items: [
							'Content creation',
							'Content marketing',
							'Search engine optimization (SEO)',
							'Social Media (SMM)',
						],
					},
				},
			},
			testimonials: {
				titleParts: {
					before: 'CLIENT',
					accent: ' TESTI',
					accent_: 'MONIALS',
				},
				list: [
					{
						text: 'A complete WordPress site with everything I need — events, chat, subscriptions. It’s easy to manage and just works.',
						author: 'Tatyana A',
						author_: 'yoga mentor, tedzhovati.com',
					},
					{
						text: 'Helped me automate things with Telegram bots and API. Saved me weeks of trial-and-error. I can now focus on my label.',
						author: 'Victor B',
						author_: 'owner of Berbeca Records',
					},
					{
						text: 'We received timely, thoughtful help. Our online presence grew visibly. Everything was done with care. Strongly recommend!',
						author: 'Maria K',
						author_: ' artist, pianist & teacher at sandramaria.pro',
					},
					{
						text: 'Launching my business, I wanted a site that matched the vision. Got design, dev, SEO — a full custom package. Very happy.',
						author: 'Kira B',
						author_: 'founder of Gouri.pl.com',
					},
					{
						text: 'They took most of the development load off my shoulders. Precise, fast, and focused. We now see lots of potential.',
						author: 'Denys P',
						author_: 'founder of UniPark',
					},
					{
						text: 'Got just what I needed — one-page site, SMM setup, and smart guidance. Looks great. I show it to clients as a portfolio!',
						author: 'Anton S',
						author_: 'solo entrepreneur',
					},
					{
						text: 'Thanks for helping with localization and backend setup. This used to be a big headache. Now it just works.',
						author: 'Max D',
						author_: 'DevOps at a multi-profile business',
					},
					{
						text: 'Thanks for the redesign and updated site. Really appreciate the detail-oriented approach and business understanding.',
						author: 'Oleg K',
						author_: 'SEO co-founder at MediaOffice',
					},
					{
						text: 'Our site had turned into a mess — no clarity, nothing worked. You helped us fix, restructure and support it properly.',
						author: 'Oleg D',
						author_: 'admin at kavaira',
					},
					{
						text: 'We couldn’t have done it without you — full cycle from concept to release. Proud of the outcome, and looking forward!',
						author: 'Sonya C',
						author_: 'head of R&D at N-Code',
					},
					{
						text: 'The site was outdated and unused. Now it works, helps, and sells. Clients can book easily — just in time!',
						author: 'Alexander S',
						author_: 'founder of MONE-Studio',
					},
					{
						text: 'Thanks for your help with the prototype and design thinking. Creative, productive brainstorms. Solid start for the project!',
						author: 'Vladyslav M',
						author_: 'product owner at Unison',
					},
				],
			},
			faq: {
				titleParts: {
					start: 'FREQUENTLY',
					middle: 'ASKED',
					end: ' QUESTIONS',
				},
				description:
					'We’ve collected answers to the most common questions about our process, timelines, and working with clients. Every project is unique to us, and much depends on your specific goals and needs. Here you’ll find general answers based on our experience. If you still have questions — feel free to reach out. We’re always open to discussion and happy to tailor things to your project.',
				items: [
					{
						question: 'How do you accept payments?',
						answer:
							'We usually require a 50% upfront payment, and the remaining 50% is due upon project completion.',
					},
					{
						question: 'How long does website development take?',
						answer:
							'Depending on the scope, projects typically take between 2 and 6 weeks.',
					},
					{
						question: 'Do you provide support after launch?',
						answer:
							'Yes, we offer 30 days of free post-launch support. Extended maintenance is available on request.',
					},
					{
						question: 'Can I make changes after the website is done?',
						answer:
							'Absolutely. We offer flexible support plans or can train your team to make content updates.',
					},
					{
						question: 'Do you help with branding or just websites?',
						answer:
							'We also create brand identities, design systems, and marketing visuals, not just websites.',
					},
				],
			},
			contacts: {
				title: 'CONTACTS',
				emailUs: 'CONTACT US',
				aria_label: 'Contact form to send us a message',
				name: 'Name',
				email: 'Email',
				phone: 'Phone',
				type: 'Type of Request',
				choose: 'Select type',
				type_general: 'General',
				type_support: 'Support',
				type_feedback: 'Feedback',
				notes: 'Notes',
				name_title: 'Enter your name (letters only, min. 2 characters)',
				email_title: 'Enter a valid email address',
				phone_title: 'Enter a phone number like +1...',
				type_title: 'Choose the type of request',
				notes_title: 'Optional. Up to 500 characters',
				send: 'Send',
				thank_you_title: 'Thank you!',
				thank_you_message: 'Your message has been successfully sent.',
			},
			backToTop: 'Back to top',
			rights: 'All rights reserved.',
		},
	},
}))
