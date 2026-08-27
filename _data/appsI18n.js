// Localized overrides for /apps.json, keyed by app page slug then locale.
// Any field omitted falls back to the English value (page frontmatter / body),
// and any app not listed here is English in every locale file. `changelog` is a
// map of version -> translated bullets; versions absent from the map keep their
// English entry (per-version fallback in apps.json.11ty.js).
//
// Provenance per app (all four are fully localized in de/ar/es/ru — name where
// it differs, plus description, highlights, and changelog):
//   basic_root_checker — description + highlights + changelog 2.2/2.3/2.4/2.5 are
//     the app's own Play Store metadata (Listing short descriptions + release
//     notes). 2.5's bullets follow the repo's `Play Store/Release Notes/2.5/`
//     notes per locale, expanded for the site (the store has a length limit,
//     the page does not), with screen and setting names taken from the app's
//     own `values-<locale>/strings.xml` so they match what the app shows. Its
//     Magisk-version bullet is not in the store notes and was translated for
//     this site. highlights are 2.5's first and fourth bullets, reusing that
//     per-locale wording. changelog 2.1 and older were translated for this site
//     to match the page's bullets (the repo's 2.1 notes are grouped
//     differently, and older versions have no release notes). `name` set only
//     where it differs from English (Arabic).
//   hide_persistent_notification — description + highlights translated for this
//     site. changelog 2.1 (en + de/ar/es/ru) is the app's own Play Store
//     release notes, reused from the repo (em dashes normalized for site copy);
//     its tablet/foldable + faster-startup bullets are from the repo's 2.1.2
//     notes (2.1 was never published; 2.1.2 shipped the full 2.1+2.1.2 set).
//     2.0's German is likewise from the repo; the rest was translated for this
//     site. Review welcome, especially ar/ru.
//   billboard — changelog 3.0.0 (en + de/ar/es/ru) is the app's own Play Store
//     release notes, reused from the repo's `Play Store/Release Notes/3.0.0/
//     website/` files (dashes normalized for site copy, German "bei Tipps"
//     corrected to "beim Tippen"). changelog 3.0.1 follows the repo's
//     `Play Store/Release Notes/3.0.1/` notes per locale, with the launch-time
//     bullet expanded for the site (the store has no length limit here).
//     highlights condense those same 3.0.0 notes,
//     reusing their per-locale wording. description and changelog 2.1.1 and
//     older were translated for this site, as the repo has no localized copy
//     for them. Review welcome, especially ar/ru.
//   icon_recomposer — no localized marketing copy exists in that repo, so
//     description, highlights, and changelog were all translated for this site.
//     Review welcome, especially ar/ru.
module.exports = {
    basic_root_checker: {
        de: {
            description: "Ist Ihr Gerät gerootet? Finden Sie es sofort heraus!",
            highlights: [
                "Große Displays: Einstellungen, Über und Lizenzen öffnen sich als Dialog, per Wischen schließbar",
                "Weitere Apps im Über-Bildschirm lädt aktuelle Infos aus dem Web, in deiner Sprache",
            ],
            changelog: {
                "2.5": [
                    "➕ Große Displays: Einstellungen, Über und Lizenzen öffnen sich als Dialog über dem Hauptbildschirm, schließbar durch Wischen nach unten, Tippen daneben oder Zurück",
                    "➕ Die App direkt in der App bewerten, plus ein Link „App bewerten“ im Über-Bildschirm (Google-Play-Version)",
                    "➕ Optionale Karte „Entwicklung unterstützen“ auf dem Hauptbildschirm nach einer Root-Prüfung, öffnet das Trinkgeld mit einem Tippen (Google-Play-Version)",
                    "🛠️ „Weitere Apps“ im Über-Bildschirm lädt aktuelle Beschreibungen und Highlights aus dem Web, in deiner Sprache",
                    "🛠️ Lizenzen nennt alle mitgelieferten Bibliotheken, nach Lizenz gruppiert, jeweils mit vollem Lizenztext und Link zum Projekt",
                    "🛠️ Schnellerer Kaltstart und flüssigeres erstes Scrollen",
                    "🔨 Die Magisk-Version auf der Ergebniskarte wird wieder als Version angezeigt, statt „v27.0:MAGISK:R“",
                    "🔨 Der Schalter für anonyme Nutzungsdaten wirkt sofort, und der Fortschrittsbalken des In-App-Updates füllt sich flüssig",
                ],
                "2.4": [
                    "➕ Dezentes haptisches Feedback: Tippen, Schalter und Auswahl geben einen sanften Impuls",
                    "➕ Root-Status dieses Geräts aus Assistenten und anderen Apps prüfen, ohne sie zu öffnen (Android 16+)",
                    "➕ Neue Design-Option: hell, dunkel oder System",
                    "🛠️ Einstellungen neu gestaltet, Trinkgeld jetzt ganz oben",
                    "🔨 Mehr Root-Manager erkannt (Kitsune Mask, SukiSU, KernelSU Next, SuperSU u. a.), jeweils mit Namen",
                    "🔨 Verbesserungen bei Barrierefreiheit und Zurück-Navigation",
                ],
                "2.3": [
                    "➕ Trinkgeld in den Einstellungen: unterstütze die Entwicklung mit einem optionalen, wiederholbaren Trinkgeld",
                    "➕ Sprachauswahl in den Einstellungen: Sprache wechseln, ohne die App zu verlassen (Android 13+)",
                    "🛠️ Schnellerer App-Start, besonders auf langsameren Geräten",
                    "🛠️ Die Wisch-zurück-Animation folgt der Kante, von der du wischst",
                    "🔨 Der Bildschirm bleibt beim Neuerstellen der App erhalten (z. B. bei Drehung oder Sprachwechsel)",
                    "🔨 Absturz beim Start unter Android 7.x und älter behoben",
                ],
                "2.2": [
                    "➕ Haptisches Feedback bei der Root-Prüfung: Ergebnis spürbar, mit neuem Schalter in den Einstellungen",
                    "➕ App jetzt auf Russisch und Spanisch verfügbar",
                    "➕ E-Mail-, Mastodon- und Bluesky-Links im Info-Bildschirm",
                    "🛠️ App-Einstellungen werden jetzt über Androids automatische Sicherung wiederhergestellt",
                    "🛠️ Überarbeitete Kontaktlinks und Menüsymbole im Info-Bildschirm",
                    "🔨 Fehlende deutsche und arabische Übersetzungen für Toast und Bedienungshilfen behoben",
                ],
                "2.1": [
                    "➕ Erkennung des Root-Anbieters: Magisk (mit Version), KernelSU oder APatch",
                    "➕ Schaltfläche „Root-Zugriff anfordern“, wenn ein Anbieter vorhanden, aber noch nicht freigegeben ist",
                    "➕ Unterstützung für Android 17",
                    "🛠️ Neuer Status „Nicht gewährt“, wenn ein Root-Anbieter erkannt, der Zugriff aber noch nicht erteilt wurde",
                    "🔨 Behoben, dass gerootete Geräte bei der ersten Prüfung als nicht gerootet gemeldet wurden",
                ],
                "2.0": [
                    "➕ Komplette Neuentwicklung mit Jetpack Compose, Material 3 und dynamischen Farben",
                    "➕ TelemetryDeck-Analyse mit Opt-out-Schalter in den Einstellungen",
                    "➕ In-App-Update-Ablauf in der Google-Play-Version",
                    "🛠️ Aufteilung in Google-Play- und FOSS-Varianten",
                    "🛠️ Mindestversion auf Android 6.0 angehoben",
                ],
                "1.13": ["➕ Unterstützung für Android 16"],
                "1.11": [
                    "➕ Unterstützung für Android 15",
                    "🛠️ Abhängigkeiten aktualisiert",
                    "🛠️ Unterstützung für Android 4.4 entfernt",
                ],
                "1.10": ["🛠️ Abhängigkeiten aktualisiert"],
                "1.9": ["➕ Unterstützung für Android 14"],
                "1.7": [
                    "➕ Unterstützung für Android 12",
                    "✨ Komplett überarbeitetes Design der App",
                ],
                "1.6": ["➕ Unterstützung für Android 10 und 11"],
                "1.5": [
                    "➕ Unterstützung für Android 9.0 Pie",
                    "➕ Neue Benutzeroberfläche",
                    "➕ Adaptives Symbol hinzugefügt",
                    "✨ Werbung entfernt",
                ],
                "1.2.2": ["➕ Unterstützung für Android 8.0 Oreo"],
                "1.2.1": ["🛠️ Versionsname für Android O Beta korrigiert"],
                "1.2": [
                    "➕ Unterstützung für Android 7.1 Nougat",
                    "🛠️ Liste der Android-Versionsnamen aktualisiert",
                    "🛠️ Liste der Gerätemodelle und Hersteller aktualisiert, es sind ÜBER 9000",
                    "✨ Kleine Layout-Änderungen",
                ],
                "1.1": [
                    "➕ Unterstützung für Android 4.1 Jelly Bean und höher hinzugefügt",
                    "✨ Neugestaltung der App",
                ],
                "1.0": [
                    "➕ Basic Root Checker in 3 Sprachen: Englisch, Deutsch und Arabisch",
                ],
            },
        },
        ar: {
            name: "التحقق من الـ Root",
            description: "هل جهازك حاصل على صلاحيات الروت؟ اكتشف ذلك فوراً!",
            highlights: [
                "الشاشات الكبيرة: الإعدادات و«عن التطبيق» والتراخيص تُفتح كنافذة تُغلق بالسحب",
                "«تطبيقات أخرى» في شاشة عن التطبيق تُحدَّث من الويب بلغتك",
            ],
            changelog: {
                "2.5": [
                    "➕ الشاشات الكبيرة: الإعدادات و«عن التطبيق» والتراخيص تُفتح كنافذة فوق الشاشة الرئيسية، تُغلق بسحب البطاقة للأسفل أو النقر خارجها أو بزر الرجوع",
                    "➕ قيّم التطبيق من داخله، مع رابط «قيّم التطبيق» في شاشة عن التطبيق (نسخة Google Play)",
                    "➕ بطاقة اختيارية «ادعم التطوير» على الشاشة الرئيسية بعد فحص الروت، تفتح صندوق الإكراميات بنقرة واحدة (نسخة Google Play)",
                    "🛠️ «تطبيقات أخرى» في شاشة عن التطبيق تُحدَّث من الويب، وتعرض وصف كل تطبيق وأبرز مزاياه بلغتك",
                    "🛠️ التراخيص تذكر كل المكتبات المضمّنة، مجمّعة حسب الترخيص، مع النص الكامل ورابط لكل مشروع",
                    "🛠️ بدء تشغيل أسرع وتمرير أول أكثر سلاسة",
                    "🔨 إصلاح عرض إصدار Magisk على بطاقة النتيجة، بعد أن كان يظهر مثل «v27.0:MAGISK:R»",
                    "🔨 إعادة تفعيل بيانات الاستخدام المجهولة تسري فوراً، وشريط تقدّم التحديث داخل التطبيق يمتلئ بسلاسة",
                ],
                "2.4": [
                    "➕ ردود لمسية خفيفة في كل أنحاء التطبيق: النقر والمفاتيح والاختيارات تعطي نبضة لطيفة",
                    "➕ تحقّق من حالة روت هذا الجهاز من المساعدين والتطبيقات الأخرى دون فتح التطبيق (أندرويد 16+)",
                    "➕ خيار مظهر جديد في الإعدادات: فاتح أو داكن أو حسب النظام",
                    "🛠️ إعادة تصميم الإعدادات، مع نقل صندوق الإكراميات إلى الأعلى",
                    "🔨 اكتشاف مزيد من مديري الروت (Kitsune Mask وSukiSU وKernelSU Next وSuperSU وغيرها) وعرض كلٍّ باسمه",
                    "🔨 تحسينات في إمكانية الوصول والتنقّل للخلف",
                ],
                "2.3": [
                    "➕ صندوق إكراميات في الإعدادات: ادعم التطوير بإكرامية اختيارية، ويمكنك التكرار في أي وقت",
                    "➕ اختيار لغة التطبيق من الإعدادات: غيّر اللغة دون مغادرة التطبيق (أندرويد 13+)",
                    "🛠️ بدء تشغيل أسرع للتطبيق، خاصةً على الأجهزة الأبطأ",
                    "🛠️ حركة السحب للخلف تتبع الآن الحافة التي تسحب منها",
                    "🔨 تُحفَظ الشاشة المعروضة عند إعادة إنشاء التطبيق (مثل التدوير أو تغيير اللغة)",
                    "🔨 إصلاح تعطّل عند بدء التشغيل على أندرويد 7.x والأقدم",
                ],
                "2.2": [
                    "➕ ردود فعل لمسية عند فحص الـ Root، مع زر تبديل جديد في الإعدادات",
                    "➕ التطبيق متوفر الآن بالروسية والإسبانية",
                    "➕ روابط البريد الإلكتروني وMastodon وBluesky في شاشة عن التطبيق",
                    "🛠️ تُضمَّن إعدادات التطبيق الآن في نسخ أندرويد الاحتياطي التلقائي وتُستعاد عند إعادة التثبيت",
                    "🛠️ تحديث روابط التواصل وأيقونات القائمة في شاشة عن التطبيق",
                    "🔨 ترجمة نصوص عربية وألمانية كانت لا تزال بالإنجليزية (تسميات إمكانية الوصول ورسالة «تم نسخ المحتوى»)",
                ],
                "2.1": [
                    "➕ اكتشاف مزوّد الروت: Magisk (مع الإصدار) أو KernelSU أو APatch",
                    "➕ زر «طلب صلاحية الروت» عند وجود مزوّد لم تُمنح صلاحيته بعد",
                    "➕ دعم أندرويد 17",
                    "🛠️ حالة جديدة «غير ممنوح» عند اكتشاف مزوّد روت دون منح الصلاحية بعد",
                    "🔨 إصلاح ظهور الأجهزة المرَوَّتة كغير مرَوَّتة في الفحص الأول",
                ],
                "2.0": [
                    "➕ إعادة كتابة كاملة باستخدام Jetpack Compose وMaterial 3 والألوان الديناميكية",
                    "➕ تحليلات TelemetryDeck مع زر لإيقافها في الإعدادات",
                    "➕ تحديث داخل التطبيق في نسخة Google Play",
                    "🛠️ تقسيم إلى نسختي Google Play وFOSS",
                    "🛠️ رفع الحد الأدنى إلى أندرويد 6.0",
                ],
                "1.13": ["➕ دعم أندرويد 16"],
                "1.11": [
                    "➕ دعم أندرويد 15",
                    "🛠️ تحديث التبعيات",
                    "🛠️ إزالة دعم أندرويد 4.4",
                ],
                "1.10": ["🛠️ تحديث التبعيات"],
                "1.9": ["➕ دعم أندرويد 14"],
                "1.7": ["➕ دعم أندرويد 12", "✨ إعادة تصميم كاملة للتطبيق"],
                "1.6": ["➕ دعم أندرويد 10 و11"],
                "1.5": [
                    "➕ دعم أندرويد 9.0 Pie",
                    "➕ واجهة مستخدم جديدة",
                    "➕ إضافة أيقونة تكيُّفية",
                    "✨ إزالة الإعلانات",
                ],
                "1.2.2": ["➕ دعم أندرويد 8.0 Oreo"],
                "1.2.1": ["🛠️ تصحيح اسم الإصدار لنسخة Android O التجريبية"],
                "1.2": [
                    "➕ دعم أندرويد 7.1 Nougat",
                    "🛠️ تحديث قائمة أسماء إصدارات أندرويد",
                    "🛠️ تحديث قائمة طُرز الأجهزة والشركات المصنّعة، إنها أكثر من 9000",
                    "✨ تغييرات تخطيط صغيرة",
                ],
                "1.1": [
                    "➕ إضافة دعم أندرويد 4.1 Jelly Bean وأحدث",
                    "✨ إعادة تصميم التطبيق",
                ],
                "1.0": [
                    "➕ يأتي Basic Root Checker بثلاث لغات: الإنجليزية والألمانية والعربية",
                ],
            },
        },
        es: {
            description: "¿Su dispositivo tiene acceso root? ¡Descúbralo al instante!",
            highlights: [
                "Pantallas grandes: Ajustes, Acerca de y Licencias se abren como un diálogo que se cierra deslizando",
                "Otras aplicaciones en Acerca de se actualiza desde la web, en tu idioma",
            ],
            changelog: {
                "2.5": [
                    "➕ Pantallas grandes: Ajustes, Acerca de y Licencias se abren como un diálogo sobre la pantalla principal, que se cierra deslizando la tarjeta hacia abajo, tocando fuera o con Atrás",
                    "➕ Valora la app sin salir de ella, y un enlace «Valora la app» en Acerca de (versión de Google Play)",
                    "➕ Tarjeta opcional «Apoya el desarrollo» en la pantalla principal tras comprobar el root, que abre el bote de propinas con un toque (versión de Google Play)",
                    "🛠️ «Otras aplicaciones» en Acerca de se actualiza desde la web y muestra la descripción y las novedades de cada app en tu idioma",
                    "🛠️ Licencias acredita todas las bibliotecas incluidas, agrupadas por licencia, con el texto completo y un enlace a cada proyecto",
                    "🛠️ Inicio en frío más rápido y primer desplazamiento más fluido",
                    "🔨 La versión de Magisk en la tarjeta de resultado vuelve a mostrarse como una versión, en vez de «v27.0:MAGISK:R»",
                    "🔨 El interruptor de datos de uso anónimos se aplica al instante, y la barra de progreso de la actualización avanza con fluidez",
                ],
                "2.4": [
                    "➕ Vibración háptica sutil en la app: toques, interruptores y selecciones dan un leve toque",
                    "➕ Consulta el estado de root del dispositivo desde asistentes y otras apps, sin abrirla (Android 16+)",
                    "➕ Nueva opción de Tema: claro, oscuro o sistema",
                    "🛠️ Ajustes rediseñados, con el bote de propinas arriba",
                    "🔨 Se detectan más gestores de root (Kitsune Mask, SukiSU, KernelSU Next, SuperSU y más), cada uno por su nombre",
                    "🔨 Mejoras de accesibilidad y navegación atrás",
                ],
                "2.3": [
                    "➕ Bote de propinas en Ajustes: apoya el desarrollo con una propina opcional, repetible cuando quieras",
                    "➕ Selector de idioma en Ajustes: cambia de idioma sin salir de la app (Android 13+)",
                    "🛠️ Inicio más rápido, sobre todo en dispositivos lentos",
                    "🛠️ La animación de deslizar para volver ahora sigue el borde desde el que deslizas",
                    "🔨 La pantalla se conserva al recrear la app (por ejemplo, al girar o cambiar de idioma)",
                    "🔨 Se corrigió un fallo al iniciar en Android 7.x y anteriores",
                ],
                "2.2": [
                    "➕ Respuesta háptica al comprobar el root: siente el resultado, con un nuevo interruptor en Ajustes",
                    "➕ La aplicación ya está disponible en ruso y español",
                    "➕ Enlaces de correo, Mastodon y Bluesky en la pantalla Acerca de",
                    "🛠️ Los ajustes ahora se incluyen en la copia de seguridad de Android y se restauran al reinstalar",
                    "🛠️ Enlaces de contacto e iconos de menú renovados en Acerca de",
                    "🔨 Se corrigieron etiquetas de accesibilidad y el aviso «Contenido copiado» que seguían en inglés",
                ],
                "2.1": [
                    "➕ Detección del proveedor de root: Magisk (con versión), KernelSU o APatch",
                    "➕ Botón «Solicitar acceso root» cuando hay un proveedor presente pero aún no concedido",
                    "➕ Compatibilidad con Android 17",
                    "🛠️ Nuevo estado «No concedido» cuando se detecta un proveedor de root pero aún no se da acceso",
                    "🔨 Se corrigió que los dispositivos con root aparecieran como sin root en la primera comprobación",
                ],
                "2.0": [
                    "➕ Reescritura completa con Jetpack Compose, Material 3 y colores dinámicos",
                    "➕ Analíticas de TelemetryDeck con un interruptor para desactivarlas en ajustes",
                    "➕ Flujo de actualización dentro de la app en la versión de Google Play",
                    "🛠️ Separación en variantes de Google Play y FOSS",
                    "🛠️ Versión mínima elevada a Android 6.0",
                ],
                "1.13": ["➕ Compatibilidad con Android 16"],
                "1.11": [
                    "➕ Compatibilidad con Android 15",
                    "🛠️ Dependencias actualizadas",
                    "🛠️ Se retiró la compatibilidad con Android 4.4",
                ],
                "1.10": ["🛠️ Dependencias actualizadas"],
                "1.9": ["➕ Compatibilidad con Android 14"],
                "1.7": [
                    "➕ Compatibilidad con Android 12",
                    "✨ Rediseño completo de la app",
                ],
                "1.6": ["➕ Compatibilidad con Android 10 y 11"],
                "1.5": [
                    "➕ Compatibilidad con Android 9.0 Pie",
                    "➕ Nueva interfaz",
                    "➕ Se añadió icono adaptable",
                    "✨ Se eliminó la publicidad",
                ],
                "1.2.2": ["➕ Compatibilidad con Android 8.0 Oreo"],
                "1.2.1": ["🛠️ Se corrigió el nombre de versión para Android O Beta"],
                "1.2": [
                    "➕ Compatibilidad con Android 7.1 Nougat",
                    "🛠️ Lista de nombres de versiones de Android actualizada",
                    "🛠️ Lista de modelos y fabricantes actualizada, ¡son MÁS DE 9000!",
                    "✨ Pequeños cambios de diseño",
                ],
                "1.1": [
                    "➕ Se añadió compatibilidad con Android 4.1 Jelly Bean y posteriores",
                    "✨ Rediseño de la app",
                ],
                "1.0": [
                    "➕ Basic Root Checker está disponible en 3 idiomas: inglés, alemán y árabe",
                ],
            },
        },
        ru: {
            description: "Есть ли root на вашем устройстве? Узнайте мгновенно!",
            highlights: [
                "Большие экраны: «Настройки», «О приложении» и «Лицензии» открываются как диалог, закрывается свайпом",
                "«Другие приложения» в разделе «О приложении» обновляются из интернета, на вашем языке",
            ],
            changelog: {
                "2.5": [
                    "➕ Большие экраны: «Настройки», «О приложении» и «Лицензии» открываются как диалог поверх главного экрана, закрывается свайпом карточки вниз, нажатием вне её или кнопкой «Назад»",
                    "➕ Оценка приложения прямо в нём и ссылка «Оценить приложение» в разделе «О приложении» (версия Google Play)",
                    "➕ Необязательная карточка «Поддержать разработку» на главном экране после проверки root, открывает чаевые одним нажатием (версия Google Play)",
                    "🛠️ «Другие приложения» в разделе «О приложении» обновляются из интернета и показывают описание и главное о каждом приложении на вашем языке",
                    "🛠️ «Лицензии» перечисляют все встроенные библиотеки, сгруппированные по лицензиям, с полным текстом и ссылкой на каждый проект",
                    "🛠️ Быстрее холодный запуск и плавнее первая прокрутка",
                    "🔨 Версия Magisk на карточке результата снова отображается как версия, а не «v27.0:MAGISK:R»",
                    "🔨 Переключатель анонимных данных об использовании срабатывает сразу, а индикатор загрузки обновления заполняется плавно",
                ],
                "2.4": [
                    "➕ Лёгкая виброотдача в приложении: нажатия, переключатели и выбор дают мягкий отклик",
                    "➕ Проверяйте статус root этого устройства из ассистентов и других приложений, не открывая его (Android 16+)",
                    "➕ Новая опция Тема: светлая, тёмная или как в системе",
                    "🛠️ Переработанные настройки, чаевые перемещены наверх",
                    "🔨 Распознаётся больше root-менеджеров (Kitsune Mask, SukiSU, KernelSU Next, SuperSU и др.), каждый под своим именем",
                    "🔨 Улучшения доступности и навигации назад",
                ],
                "2.3": [
                    "➕ Чаевые в настройках: поддержите разработку необязательными чаевыми, можно повторять в любое время",
                    "➕ Выбор языка в настройках: меняйте язык, не выходя из приложения (Android 13+)",
                    "🛠️ Более быстрый запуск приложения, особенно на медленных устройствах",
                    "🛠️ Анимация смахивания назад теперь следует за краем, от которого вы смахиваете",
                    "🔨 Открытый экран сохраняется при пересоздании приложения (например, при повороте или смене языка)",
                    "🔨 Исправлен сбой при запуске на Android 7.x и старше",
                ],
                "2.2": [
                    "➕ Тактильная отдача при проверке root: результат можно почувствовать, с новым переключателем в настройках",
                    "➕ Приложение теперь доступно на русском и испанском",
                    "➕ Ссылки на эл. почту, Mastodon и Bluesky на экране «О приложении»",
                    "🛠️ Настройки теперь входят в автоматическое резервное копирование Android и восстанавливаются после переустановки",
                    "🛠️ Обновлены контактные ссылки и значки меню на экране «О приложении»",
                    "🔨 Переведены немецкие и арабские строки, остававшиеся на английском",
                ],
                "2.1": [
                    "➕ Определение поставщика root: Magisk (с версией), KernelSU или APatch",
                    "➕ Кнопка «Запросить root-доступ», когда поставщик есть, но доступ ещё не предоставлен",
                    "➕ Поддержка Android 17",
                    "🛠️ Новое состояние «Не предоставлено», когда поставщик root обнаружен, но доступ ещё не выдан",
                    "🔨 Исправлено: устройства с root определялись как без root при первой проверке",
                ],
                "2.0": [
                    "➕ Полная переработка на Jetpack Compose, Material 3 и динамических цветах",
                    "➕ Аналитика TelemetryDeck с переключателем отказа в настройках",
                    "➕ Обновление внутри приложения в сборке Google Play",
                    "🛠️ Разделение на сборки Google Play и FOSS",
                    "🛠️ Минимальная версия повышена до Android 6.0",
                ],
                "1.13": ["➕ Поддержка Android 16"],
                "1.11": [
                    "➕ Поддержка Android 15",
                    "🛠️ Обновление зависимостей",
                    "🛠️ Прекращена поддержка Android 4.4",
                ],
                "1.10": ["🛠️ Обновление зависимостей"],
                "1.9": ["➕ Поддержка Android 14"],
                "1.7": [
                    "➕ Поддержка Android 12",
                    "✨ Полностью переработанный дизайн приложения",
                ],
                "1.6": ["➕ Поддержка Android 10 и 11"],
                "1.5": [
                    "➕ Поддержка Android 9.0 Pie",
                    "➕ Новый интерфейс",
                    "➕ Добавлен адаптивный значок",
                    "✨ Реклама удалена",
                ],
                "1.2.2": ["➕ Поддержка Android 8.0 Oreo"],
                "1.2.1": ["🛠️ Исправлено название версии для Android O Beta"],
                "1.2": [
                    "➕ Поддержка Android 7.1 Nougat",
                    "🛠️ Обновлён список названий версий Android",
                    "🛠️ Обновлён список моделей устройств и производителей, их БОЛЕЕ 9000",
                    "✨ Небольшие изменения вёрстки",
                ],
                "1.1": [
                    "➕ Добавлена поддержка Android 4.1 Jelly Bean и выше",
                    "✨ Переработка дизайна приложения",
                ],
                "1.0": [
                    "➕ Basic Root Checker доступен на 3 языках: английском, немецком и арабском",
                ],
            },
        },
    },

    billboard: {
        de: {
            description:
                "Großen Text auf dem Bildschirm anzeigen, passend skaliert und nie abgeschnitten.",
            highlights: [
                "**Von Grund auf neu aufgebaut, rund um Ebenen:** Stapele Text-, Farb- und Effekt-Ebenen und kombiniere, sortiere und benenne sie frei, alles im frischen violetten Look",
                "**Spricht jetzt fünf Sprachen:** Deutsch, Spanisch, Russisch und Arabisch (mit vollständigem Rechts-nach-links-Layout), zusätzlich zu Englisch, mit einer Sprach-Einstellung unabhängig vom Gerät",
                "Eine Sammlung als Startbildschirm für deine Billboards und ein „Zuletzt“-Verlauf, der jedes im Vollbild gezeigte Billboard automatisch speichert, mit kostenloser Kapazität von 3 auf 10",
                "Teile ein Billboard als bearbeitbare .billboard-Datei oder als PNG-Bild",
                "Unterstützung für Android 17",
            ],
            changelog: {
                "3.0.1": [
                    "🛠️ Ein kleines Wartungs-Update. An dem, was die App tut, ändert sich nichts.",
                    "🔨 Die App startet etwas schneller, rund 60 ms weniger beim Start. Die Prüfung, ob anonyme Nutzungsdaten eingeschaltet sind, wartet nicht mehr auf den Speicher, bevor der erste Bildschirm gezeichnet werden kann.",
                    "🛠️ Aufräumarbeiten im Hintergrund, auch beim Umgang mit anonymen Nutzungsdaten.",
                ],
                "3.0.0": [
                    "✨ Von Grund auf neu aufgebaut, rund um Ebenen, mit einer echten Heimat für deine Kreationen und einem frischen violetten Look.",
                    "➕ Ebenen-basierte Gestaltung: Stapele Text-, Farb- und Effekt-Ebenen (Streifen, Verlauf, Schachbrett, Punkte) und kombiniere, sortiere und benenne sie frei.",
                    "➕ Zwei unabhängige Bearbeitungsmodi, Einfach und Erweitert, jeder mit eigenen Ebenen und eigener Ausrichtung; ein Wechsel verändert den anderen nie.",
                    "➕ Ein vollständiges Farbrad mit Helligkeits- und Transparenzregler und sechs kostenlosen Grundfarben, neben der einfachen Auto/Schwarz/Weiß-Füllung.",
                    "➕ Eine Sammlung als Startbildschirm für deine Billboards: per Drag-and-drop sortieren, öffnen, teilen oder über das Kachelmenü löschen.",
                    "➕ Ein „Zuletzt“-Verlauf, der jedes im Vollbild gezeigte Billboard automatisch speichert, damit nichts verloren geht.",
                    "➕ Teile ein Billboard als bearbeitbare .billboard-Datei oder als PNG-Bild, mit Vorschau im Teilen-Menü.",
                    "➕ Importiere .billboard-Dateien aus anderen Apps; sie landen direkt in „Zuletzt“.",
                    "➕ Vollbild öffnet sich jetzt per Wisch-Geste nach unten von der Editor-Vorschau und gleitet sanft auf, statt hart umzuschneiden.",
                    "➕ Ein zweispaltiger Editor auf großen Tablets und Foldables im Querformat, mit Live-Vorschau neben den Reglern.",
                    "➕ Auf besonders breiten Bildschirmen öffnen sich Einstellungen, Über und Open-Source-Lizenzen als schwebende Karte über dem Editor statt als volle Seite.",
                    "➕ Eine Design-Einstellung (Systemstandard, Hell, Dunkel) und eine Sprach-Einstellung, beide unabhängig vom Gerät.",
                    "➕ Billboard spricht jetzt auch Deutsch, Spanisch, Russisch und Arabisch (mit vollständigem Rechts-nach-links-Layout), zusätzlich zu Englisch.",
                    "➕ Ein überarbeiteter Über-Bildschirm mit eigener Open-Source-Lizenzen-Seite und einem „Weitere Apps“-Bereich.",
                    "➕ Optionales haptisches Feedback beim Tippen und bei Gesten sowie datenschutzfreundliche, abwählbare Nutzungsanalyse ohne Billboard-Inhalte. Beides lässt sich in den Einstellungen umschalten.",
                    "➕ Umfassende Unterstützung für Bildschirmleser (TalkBack) in der ganzen App.",
                    "➕ Unterstützung für Android 17.",
                    "➕ Ein KI-Assistent auf dem Gerät (z. B. Gemini) kann Billboards für dich erstellen: Ebenen hinzufügen, bearbeiten und entfernen, Ausrichtung festlegen, neue Billboards anlegen, Billboards durchsuchen und speichern, die Sammlung verwalten und Gespeicherte löschen, jeweils mit Vorschau. Es gelten dieselben Grenzen wie für die App, sodass Effekte und eigene Farben weiterhin das Erweitert-Freischalten benötigen.",
                    "🔨 Ersetzt die alte Verlaufsliste: „Zuletzt“ und Sammlung übernehmen, mit kostenloser Kapazität von 3 auf 10.",
                    "🔨 Entfernt die alte Spenden-Option; die Kapazitätserweiterung ist jetzt ein einzelner Kauf zusammen mit dem neuen Erweitert-Freischalten.",
                ],
                "2.1.1": [
                    "➕ Unterstützung für Android 16",
                    "➖ Unterstützung für Android 5 und 5.1 entfernt",
                ],
                "2.0.3": ["➕ Unterstützung für Android 15"],
                "2.0.1": ["➕ Unterstützung für Android 14"],
                "2.0": [
                    "🔨 Die gesamte App von Grund auf mit neuem Design überarbeitet",
                    "➕ Liste der zuvor verwendeten Einträge",
                    "➕ Unterstützung für Android 12 und 13",
                    "➕ Unterstützung für Tablets und Foldables",
                ],
                "1.4.1": [
                    "🔨 Querformat-Layout für Geräte mit hoher Pixeldichte korrigiert",
                ],
                "1.4": [
                    "➕ Erste Unterstützung für das Tablet-Layout",
                    "🔨 Behoben, dass der Erstellungsbildschirm im Querformat nicht scrollte.",
                ],
                "1.3": [
                    "➕ Erste Unterstützung für Android 11",
                    "➕ Vollbild-Unterstützung auf Geräten mit Display-Aussparungen",
                ],
                "1.2.5": [
                    "🔨 Behoben, dass mehr Text eingegeben werden konnte, als das Eingabefeld breit ist.",
                    "➖ Behelfslösung zur korrekten Emoji-Darstellung entfernt, da sie Sonderfälle bewältigen konnte.",
                ],
                "1.2.2": [
                    "🔨 Behoben, dass die Zifferntastatur keine Dezimal- oder Vorzeichenzahlen zuließ",
                    "➕ Vollbild beim Drücken der Eingabetaste hinzugefügt",
                ],
                "1.2.1": [
                    "🔨 Emoji-Darstellung korrigiert, wenn nur ein Emoji verwendet wird",
                    "➕ Optionen für den Tastaturtyp hinzugefügt",
                    "➕ Speichern von Ausrichtungs- und Tastaturoptionen hinzugefügt.",
                ],
            },
        },
        ar: {
            description:
                "اعرض نصاً كبيراً على الشاشة بحجم يتناسب تماماً دون أن يُقتطع أبداً.",
            highlights: [
                "**أُعيد بناء التطبيق من الصفر حول فكرة الطبقات:** كدّس طبقات النص واللون والتأثيرات، وادمجها ورتّبها وأعد تسميتها بحرية، بمظهر أرجواني منعش",
                "**يتحدث الآن خمس لغات:** الألمانية والإسبانية والروسية والعربية (بدعم كامل للكتابة من اليمين لليسار)، إلى جانب الإنجليزية، مع إعداد للغة مستقل عن الجهاز",
                "شاشة المجموعة للوحات التي تحتفظ بها، وسجل «الأخيرة» الذي يحفظ تلقائيًا كل لوحة تعرضها بملء الشاشة، مع سعة مجانية تنمو من 3 إلى 10",
                "شارك اللوحة كملف .billboard قابل للتحرير أو كصورة PNG",
                "دعم أندرويد 17",
            ],
            changelog: {
                "3.0.1": [
                    "🛠️ تحديث صيانة صغير. لم يتغيّر شيء في ما يفعله التطبيق.",
                    "🔨 يبدأ التطبيق أسرع قليلًا، بنحو 60 مللي ثانية. لم يعد التحقق من تفعيل بيانات الاستخدام مجهولة المصدر ينتظر التخزين قبل رسم الشاشة الأولى.",
                    "🛠️ ترتيب داخلي، بما في ذلك طريقة التعامل مع بيانات الاستخدام مجهولة المصدر.",
                ],
                "3.0.0": [
                    "✨ أُعيد بناء التطبيق من الصفر حول فكرة الطبقات، مع وجهة حقيقية لتصاميمك ومظهر أرجواني منعش.",
                    "➕ تصميم قائم على الطبقات: كدّس طبقات النص واللون والتأثيرات البصرية (خطوط، تدرّج، رقعة شطرنج، نقاط)، وادمجها ورتّبها وأعد تسميتها بحرية.",
                    "➕ وضعان مستقلان للتحرير، أساسي ومتقدّم: لكلٍّ طبقاته واتجاهه، فالتبديل بينهما لا يؤثر على الآخر.",
                    "➕ منتقي ألوان كامل بشريطَي سطوع وشفافية وست ألوان جاهزة مجانية، إلى جانب التعبئة الأساسية Auto/أسود/أبيض.",
                    "➕ شاشة المجموعة الرئيسية للوحات التي تحتفظ بها: أعد ترتيبها بالسحب، وافتحها أو شاركها أو احذفها من قائمة كل بطاقة.",
                    "➕ سجل «الأخيرة» يحفظ تلقائيًا كل لوحة تعرضها بملء الشاشة، فلا يضيع أي تصميم.",
                    "➕ شارك اللوحة كملف .billboard قابل للتحرير أو كصورة PNG، مع معاينة عند المشاركة.",
                    "➕ استورد ملفات .billboard من تطبيقات أخرى، لتحطّ مباشرة في «الأخيرة».",
                    "➕ يفتح ملء الشاشة الآن بسحب معاينة المحرر إلى الأسفل، وينتقل بسلاسة بدلًا من التبديل المفاجئ.",
                    "➕ محرر بعمودين على الأجهزة اللوحية والقابلة للطي الكبيرة في الوضع الأفقي، مع معاينة حيّة بجانب عناصر التحكم.",
                    "➕ على الشاشات العريضة جدًا، تُفتح الإعدادات وحول التطبيق وشكر المصادر المفتوحة كبطاقة عائمة فوق المحرر بدلًا من صفحة كاملة.",
                    "➕ إعداد للمظهر (افتراضي النظام أو فاتح أو داكن) وإعداد للغة، مستقلان عن إعدادات الجهاز.",
                    "➕ يتحدث Billboard الآن الألمانية والإسبانية والروسية والعربية (بدعم كامل للكتابة من اليمين لليسار)، إلى جانب الإنجليزية.",
                    "➕ شاشة «حول التطبيق» بتصميم جديد، مع صفحة مستقلة لشكر المصادر المفتوحة وقسم «تطبيقات أخرى».",
                    "➕ ردود فعل لمسية اختيارية عند النقر والإيماءات، وتحليلات استخدام اختيارية تحترم الخصوصية ولا تشمل نص لوحتك أو ألوانها. لكل منهما مفتاح في الإعدادات.",
                    "➕ دعم واسع لقارئ الشاشة (TalkBack) في أنحاء التطبيق.",
                    "➕ دعم أندرويد 17.",
                    "➕ يمكن لمساعد ذكاء اصطناعي على الجهاز (مثل Gemini) إنشاء لوحات نيابةً عنك: إضافة الطبقات وتعديلها وحذفها، وتحديد الاتجاه، وبدء لوحة جديدة، وتصفّح اللوحات وحفظها، وإدارة مجموعتك، وحذف المحفوظة، وتُعاد كل لوحة مع معاينة. ويخضع لنفس حدود التطبيق، فالتأثيرات والألوان المخصّصة لا تزال بحاجة إلى فتح الوضع المتقدّم.",
                    "🔨 يستبدل قائمة السجل القديمة الواحدة: تتولى «الأخيرة» والمجموعة المهمة الآن، مع سعة مجانية تنمو من 3 إلى 10.",
                    "🔨 يزيل خيار التبرع القديم؛ توسعة السعة الآن عملية شراء واحدة إلى جانب فتح الوضع المتقدّم الجديد.",
                ],
                "2.1.1": [
                    "➕ دعم أندرويد 16",
                    "➖ إزالة دعم أندرويد 5 و5.1",
                ],
                "2.0.3": ["➕ دعم أندرويد 15"],
                "2.0.1": ["➕ دعم أندرويد 14"],
                "2.0": [
                    "🔨 إعادة بناء التطبيق بالكامل من الصفر بتصميم جديد",
                    "➕ قائمة بالإدخالات المستخدمة سابقاً",
                    "➕ دعم أندرويد 12 و13",
                    "➕ دعم الأجهزة اللوحية والقابلة للطي",
                ],
                "1.4.1": [
                    "🔨 إصلاح تخطيط الوضع الأفقي على الأجهزة عالية الكثافة",
                ],
                "1.4": [
                    "➕ دعم مبدئي لتخطيط الأجهزة اللوحية",
                    "🔨 إصلاح عدم تمرير شاشة الإنشاء في الوضع الأفقي.",
                ],
                "1.3": [
                    "➕ دعم مبدئي لأندرويد 11",
                    "➕ دعم وضع ملء الشاشة على الأجهزة ذات الفتحات في الشاشة",
                ],
                "1.2.5": [
                    "🔨 إصلاح إمكانية إدخال نص أطول من عرض حقل الإدخال.",
                    "➖ إزالة الحل البديل لعرض الإيموجي بشكل صحيح، لأنه كان قادراً على التعامل مع الحالات الخاصة.",
                ],
                "1.2.2": [
                    "🔨 إصلاح عدم سماح لوحة الأرقام بإدخال الكسور أو الأرقام ذات الإشارة",
                    "➕ إضافة الانتقال إلى ملء الشاشة عند الضغط على Enter في لوحة المفاتيح",
                ],
                "1.2.1": [
                    "🔨 إصلاح عرض الإيموجي عند استخدام إيموجي واحد فقط",
                    "➕ إضافة خيارات نوع لوحة المفاتيح",
                    "➕ إضافة حفظ خيارات الاتجاه ولوحة المفاتيح.",
                ],
            },
        },
        es: {
            description:
                "Muestre texto grande en la pantalla, ajustado para caber sin cortarse nunca.",
            highlights: [
                "**Reconstruida desde cero en torno a las capas:** apila capas de texto, color y efectos, y combínalas, reordénalas y renómbralas libremente, todo con un renovado look violeta",
                "**Ahora habla cinco idiomas:** alemán, español, ruso y árabe (con diseño completo de derecha a izquierda), además de inglés, con un ajuste de Idioma independiente del dispositivo",
                "Una Colección como pantalla de inicio para los billboards que conservas, y un historial de Recientes que guarda automáticamente cada billboard que muestras a pantalla completa, con la capacidad gratuita de 3 a 10",
                "Comparte un billboard como archivo .billboard editable o como imagen PNG",
                "Compatibilidad con Android 17",
            ],
            changelog: {
                "3.0.1": [
                    "🛠️ Una pequeña actualización de mantenimiento. Nada de lo que hace la app ha cambiado.",
                    "🔨 La app arranca un poco más rápido, unos 60 ms menos al iniciarse. Comprobar si los datos anónimos de uso están activados ya no espera al almacenamiento antes de dibujar la primera pantalla.",
                    "🛠️ Limpieza interna, incluida la gestión de los datos anónimos de uso.",
                ],
                "3.0.0": [
                    "✨ Reconstruida desde cero en torno a las capas, con un hogar real para tus creaciones y un renovado look violeta.",
                    "➕ Composición por capas: apila capas de texto, color y efectos visuales (rayas, degradado, damero, puntos), y combínalas, reordénalas y renómbralas libremente.",
                    "➕ Dos modos de edición independientes, Básico y Avanzado: cada uno con sus propias capas y orientación, así que cambiar de uno nunca afecta al otro.",
                    "➕ Un selector de color completo con brillo y opacidad y seis colores predefinidos gratuitos, junto al relleno básico Auto/Negro/Blanco.",
                    "➕ Una Colección como pantalla de inicio para los billboards que conservas: reordénalos arrastrando, y ábrelos, compártelos o elimínalos desde el menú de cada mosaico.",
                    "➕ Un historial de Recientes que guarda automáticamente cada billboard que muestras a pantalla completa, para que nada se pierda.",
                    "➕ Comparte un billboard como archivo .billboard editable o como imagen PNG, con vista previa al compartir.",
                    "➕ Importa archivos .billboard de otras apps: aterrizan directamente en Recientes.",
                    "➕ Pantalla completa ahora se abre deslizando hacia abajo la vista previa del editor, con suavidad en lugar de cortar de golpe.",
                    "➕ Un editor de dos paneles en tablets y foldables grandes en horizontal, con vista previa en vivo junto a los controles.",
                    "➕ En pantallas muy anchas, Ajustes, Acerca de y Créditos de código abierto se abren como una tarjeta flotante sobre el editor, no a pantalla completa.",
                    "➕ Un ajuste de Tema (predeterminado del sistema, claro u oscuro) y otro de Idioma, ambos independientes del dispositivo.",
                    "➕ Billboard ahora habla alemán, español, ruso y árabe (con diseño completo de derecha a izquierda), además de inglés.",
                    "➕ Una pantalla Acerca de rediseñada, con su propia página de Créditos de código abierto y una sección de «Otras apps».",
                    "➕ Respuesta háptica opcional en toques y gestos, y análisis de uso opcional y respetuoso con la privacidad que nunca incluye tu texto ni tus colores, ambos con un interruptor en Ajustes.",
                    "➕ Amplio soporte de lector de pantalla (TalkBack) en toda la app.",
                    "➕ Compatibilidad con Android 17.",
                    "➕ Un asistente de IA en el dispositivo (como Gemini) puede crear billboards por ti: añadir, editar y quitar capas, ajustar la orientación, empezar billboards nuevos, explorar y guardar billboards, gestionar tu Colección y eliminar los guardados, cada uno con una vista previa. Tiene los mismos límites que la app, así que los efectos y los colores personalizados siguen necesitando el desbloqueo Avanzado.",
                    "🔨 Sustituye la antigua lista de Historial: Recientes y Colección toman el relevo, con una capacidad gratuita que crece de 3 a 10.",
                    "🔨 Elimina la antigua opción de donación; la ampliación de capacidad ahora es una única compra junto al nuevo desbloqueo Avanzado.",
                ],
                "2.1.1": [
                    "➕ Compatibilidad con Android 16",
                    "➖ Se retiró la compatibilidad con Android 5 y 5.1",
                ],
                "2.0.3": ["➕ Compatibilidad con Android 15"],
                "2.0.1": ["➕ Compatibilidad con Android 14"],
                "2.0": [
                    "🔨 Se rehízo toda la app desde cero con un nuevo diseño",
                    "➕ Lista de entradas usadas anteriormente",
                    "➕ Compatibilidad con Android 12 y 13",
                    "➕ Compatibilidad con tabletas y plegables",
                ],
                "1.4.1": [
                    "🔨 Se corrigió el diseño horizontal en dispositivos de alta densidad",
                ],
                "1.4": [
                    "➕ Compatibilidad inicial con el diseño para tabletas",
                    "🔨 Se corrigió que la pantalla de creación no se desplazara en horizontal.",
                ],
                "1.3": [
                    "➕ Compatibilidad inicial con Android 11",
                    "➕ Compatibilidad con pantalla completa en dispositivos con muescas",
                ],
                "1.2.5": [
                    "🔨 Se corrigió poder introducir más texto del que cabe en el ancho del campo.",
                    "➖ Se eliminó el truco para mostrar emojis correctamente, porque podía manejar los casos límite.",
                ],
                "1.2.2": [
                    "🔨 Se corrigió que el teclado numérico no permitiera decimales ni números con signo",
                    "➕ Se añadió pasar a pantalla completa al pulsar Intro en el teclado",
                ],
                "1.2.1": [
                    "🔨 Se corrigió el renderizado de emojis cuando solo se usa uno",
                    "➕ Se añadieron opciones de tipo de teclado",
                    "➕ Se añadió guardar las opciones de orientación y teclado.",
                ],
            },
        },
        ru: {
            description:
                "Показывайте крупный текст на экране, подогнанный по размеру и никогда не обрезанный.",
            highlights: [
                "**Полностью пересобрано вокруг слоёв:** складывайте слои текста, цвета и эффектов, свободно комбинируйте, переставляйте и переименовывайте их, всё в обновлённом фиолетовом стиле",
                "**Теперь говорит на пяти языках:** немецком, испанском, русском и арабском (с полной поддержкой письма справа налево) в дополнение к английскому, с настройкой языка, независимой от устройства",
                "«Коллекция» для сохранённых билбордов и лента «Недавние», которая автоматически сохраняет каждый билборд, показанный на весь экран, а бесплатный лимит растёт с 3 до 10",
                "Делитесь билбордом как редактируемым файлом .billboard или как PNG-изображением",
                "Поддержка Android 17",
            ],
            changelog: {
                "3.0.1": [
                    "🛠️ Небольшое обновление. В том, что делает приложение, ничего не изменилось.",
                    "🔨 Приложение запускается немного быстрее, примерно на 60 мс. Проверка того, включены ли анонимные данные об использовании, больше не ждёт обращения к хранилищу до отрисовки первого экрана.",
                    "🛠️ Внутренняя чистка, в том числе в работе с анонимными данными об использовании.",
                ],
                "3.0.0": [
                    "✨ Приложение полностью пересобрано вокруг слоёв, с настоящим домом для ваших творений и обновлённым фиолетовым стилем.",
                    "➕ Композиция из слоёв: складывайте слои текста, цвета и визуальных эффектов (полосы, градиент, клетки, точки), свободно комбинируйте, переставляйте и переименовывайте их.",
                    "➕ Два независимых режима редактирования, Базовый и Расширенный: у каждого свои слои и ориентация, поэтому переключение не затрагивает другой.",
                    "➕ Полный выбор цвета с ползунками яркости и прозрачности и шесть бесплатных готовых цветов, в дополнение к базовой заливке Авто/Чёрный/Белый.",
                    "➕ «Коллекция»: главный экран для сохранённых билбордов. Перетаскивайте для изменения порядка, открывайте, делитесь или удаляйте через меню карточки.",
                    "➕ Лента «Недавние» автоматически сохраняет каждый билборд, показанный на весь экран, чтобы ничего не потерялось.",
                    "➕ Делитесь билбордом как редактируемым файлом .billboard или как PNG-изображением, с превью при отправке.",
                    "➕ Импортируйте файлы .billboard из других приложений; они сразу попадают в «Недавние».",
                    "➕ Полноэкранный режим теперь открывается жестом вниз от превью в редакторе и плавно раскрывается вместо резкой смены экрана.",
                    "➕ Двухпанельный редактор на больших планшетах и раскладушках в альбомной ориентации, с живым превью рядом с элементами управления.",
                    "➕ На очень широких экранах Настройки, «О приложении» и лицензии открытого кода открываются как плавающая карточка поверх редактора, а не как полноэкранная страница.",
                    "➕ Настройка темы (системная, светлая или тёмная) и настройка языка, обе независимы от настроек устройства.",
                    "➕ Billboard теперь говорит на немецком, испанском, русском и арабском (с полной поддержкой письма справа налево) в дополнение к английскому.",
                    "➕ Обновлённый экран «О приложении» с отдельной страницей лицензий открытого кода и разделом «Другие приложения».",
                    "➕ Дополнительный тактильный отклик при касаниях и жестах и анонимная, отключаемая аналитика использования, которая никогда не включает текст или цвета билборда. Оба переключателя есть в Настройках.",
                    "➕ Широкая поддержка программ чтения с экрана (TalkBack) по всему приложению.",
                    "➕ Поддержка Android 17.",
                    "➕ ИИ-ассистент на устройстве (например, Gemini) может создать билборд за вас: добавлять, редактировать и удалять слои, задавать ориентацию, начинать новый билборд, просматривать и сохранять билборды, управлять Коллекцией и удалять сохранённые, каждый возвращается с превью. На него действуют те же ограничения, что и на приложение, поэтому для эффектов и пользовательских цветов по-прежнему нужна разблокировка Расширенного режима.",
                    "🔨 Заменяет старый единый список истории: «Недавние» и Коллекция берут эту роль на себя, а бесплатный лимит растёт с 3 до 10.",
                    "🔨 Убирает старую опцию доната; расширение лимита теперь одна покупка вместе с новой разблокировкой Расширенного режима.",
                ],
                "2.1.1": [
                    "➕ Поддержка Android 16",
                    "➖ Удалена поддержка Android 5 и 5.1",
                ],
                "2.0.3": ["➕ Поддержка Android 15"],
                "2.0.1": ["➕ Поддержка Android 14"],
                "2.0": [
                    "🔨 Всё приложение переделано с нуля с новым дизайном",
                    "➕ Список ранее использованных записей",
                    "➕ Поддержка Android 12 и 13",
                    "➕ Поддержка планшетов и складных устройств",
                ],
                "1.4.1": [
                    "🔨 Исправлена альбомная компоновка на устройствах с высокой плотностью",
                ],
                "1.4": [
                    "➕ Первоначальная поддержка планшетной компоновки",
                    "🔨 Исправлено отсутствие прокрутки экрана создания в альбомной ориентации.",
                ],
                "1.3": [
                    "➕ Первоначальная поддержка Android 11",
                    "➕ Поддержка полноэкранного режима на устройствах с вырезами в экране",
                ],
                "1.2.5": [
                    "🔨 Исправлен ввод текста длиннее ширины поля ввода.",
                    "➖ Удалён обходной приём для корректного отображения эмодзи, поскольку он мог обрабатывать пограничные случаи.",
                ],
                "1.2.2": [
                    "🔨 Исправлено: цифровая клавиатура не допускала дробные или знаковые числа",
                    "➕ Добавлен переход в полноэкранный режим при нажатии Enter на клавиатуре",
                ],
                "1.2.1": [
                    "🔨 Исправлено отображение эмодзи, когда используется только один эмодзи",
                    "➕ Добавлены параметры типа клавиатуры",
                    "➕ Добавлено сохранение параметров ориентации и клавиатуры.",
                ],
            },
        },
    },

    hide_persistent_notification: {
        de: {
            description:
                "Eine dauerhafte Benachrichtigung auswählen und verborgen halten, solange die App installiert ist.",
            highlights: [
                "**Hinweis: Die App wird mit einem optionalen In-App-Kauf kostenlos.** Wenn Sie sie bereits gekauft haben, öffnen Sie die Einstellungen und melden Sie sich an, damit Ihr Kauf übernommen wird und Sie alle Premium-Funktionen kostenlos behalten, kein zweiter Kauf nötig.",
                "Jetzt auf Deutsch, Arabisch, Spanisch und Russisch verfügbar",
                "In-App-Sprachauswahl in den Einstellungen (ab Android 13)",
                "Unterstützung für Android 17",
            ],
            changelog: {
                "2.1": [
                    "➕ App jetzt auf Deutsch, Arabisch, Spanisch & Russisch verfügbar. Sprache in den Einstellungen (ab Android 13)",
                    "➕ Design-Option: Hell, Dunkel oder System, mit sanftem Farbwechsel",
                    "➕ Dezentes haptisches Feedback beim Tippen und Umschalten",
                    "➕ Tablet- & Foldable-Layout: Bereiche nebeneinander auf großen Displays",
                    "🛠️ Schnellerer Start und flüssigeres Scrollen",
                    "🛠️ Die Liste „Weitere Apps“ bleibt automatisch aktuell, auch offline, mit Buttons zum Installieren/Öffnen/Website",
                    "🛠️ Medien-Benachrichtigungen erscheinen nicht mehr in der Auswahl, da sie sich nicht zuverlässig ausblenden lassen",
                ],
                "2.0": [
                    "✨ Komplett mit modernen Technologien neu geschrieben",
                    "➕ In-App-Updates: neueste Version direkt in der App installieren",
                    "➕ Datenschutz-Option zum Deaktivieren anonymer Analysen",
                    "➕ Bessere Darstellung auf Tablets und großen Bildschirmen",
                    "➕ Unterstützung für Android 17",
                    "🔨 Absturz beim Start behoben",
                    "🔨 Berechtigungsstatus wird nach Verlassen der Einstellungen korrekt aktualisiert",
                ],
                "1.8.1": [
                    "➕ Unterstützung für Android 16",
                    "➕ Deutsche Übersetzung hinzugefügt",
                    "🔨 Rechtschreibung korrigiert",
                ],
                "1.7": ["➕ Unterstützung für Android 15"],
                "1.6": [
                    "➕ Unterstützung für Android 13",
                    "➕ Option, alle Daten der Benachrichtigung in die Protokolle aufzunehmen, auch wenn sie sensibel sein könnten",
                    "🔨 Fehler behoben, bei dem eine Benachrichtigung nach der Auswahl nicht ausgeblendet wurde",
                    "✨ App-Downloadgröße halbiert",
                ],
                "1.5": [
                    "✨ Weitere Design-Aktualisierung, näher an Material You, aber noch keine dynamischen Farben (noch nicht 😉)",
                    "➕ Bessere Handhabung beim Anzeigen ausgeblendeter Benachrichtigungen, kein Neustart nötig",
                    "➕ Verlauf der ausgeblendeten Benachrichtigungen hinzugefügt, über die Einstellungen erreichbar",
                ],
                "1.4": [
                    "✨ Design der App moderner gestaltet",
                    "🔧 Logik zur besseren Handhabung der Benachrichtigung aktualisiert",
                    "🔨 Behoben, dass App-Namen und -Symbole unter Android 11 nicht geladen werden konnten",
                    "🔨 Verschiedene Fehlerbehebungen",
                ],
                "1.3.1": [
                    "🔧 Möglichkeit hinzugefügt, zum Einstellungsbildschirm „Akkuoptimierung“ zu gelangen, um diese App davon auszunehmen. Das hilft, die Benachrichtigung ausgeblendet zu halten, und kann den Akkuverbrauch verringern",
                ],
                "1.3": [
                    "🔨 Absturzfehler behoben",
                    "🔧 Möglichkeit hinzugefügt, dem Entwickler die aktuell verfügbare Benachrichtigung zur Analyse zu senden, um die App zu verbessern",
                ],
                "1.2": ["🔧 Unterstützung für Android 10 und 11 hinzugefügt"],
                "1.1.4": [
                    "✨ Unterstützung für randlose Gestennavigation hinzugefügt",
                    "🔧 Abhängigkeiten aktualisiert",
                ],
                "1.1.3": [
                    "🔨 Zuverlässigkeit beim Ausblenden von Benachrichtigungen verbessert",
                ],
                "1.1.2": [
                    "🔧 Auf ein Datenbanksystem für die gespeicherten Daten umgestellt",
                    "🔨 Einige Fehler behoben",
                    "🔧 Leistung verbessert",
                ],
                "1.0.3": [
                    "🔧 Bessere Erkennung dauerhafter Benachrichtigungen hinzugefügt",
                ],
                "1.0.2": [
                    "🔨 Behoben, dass die Ansicht wiederholt nach unten sprang, wenn Benachrichtigungen sehr häufig aktualisiert wurden",
                ],
                "1.0.1": [
                    "🔧 Erläuternden Text hinzugefügt",
                    "🔨 Formulierung einiger Dialoge geändert",
                    "🔨 Unnötigen Code entfernt",
                ],
                "1.0.0": ["✨ Erste Veröffentlichung"],
            },
        },
        ar: {
            description:
                "اختر إشعاراً دائماً وأبقِه مخفياً طوال مدة تثبيت التطبيق.",
            highlights: [
                "**تنبيه: سيصبح التطبيق مجانياً مع عملية شراء اختيارية داخله.** إذا كنت قد اشتريته من قبل، فافتح شاشة الإعدادات وسجّل الدخول لينتقل شراؤك وتحتفظ بجميع الميزات المميزة مجاناً، دون الحاجة إلى شراء ثانٍ.",
                "متوفّر الآن بالألمانية والعربية والإسبانية والروسية",
                "اختيار لغة التطبيق من الإعدادات (أندرويد 13 فأحدث)",
                "دعم أندرويد 17",
            ],
            changelog: {
                "2.1": [
                    "➕ التطبيق متوفّر الآن بالألمانية والعربية والإسبانية والروسية. اختر لغتك من الإعدادات (أندرويد 13 فأحدث)",
                    "➕ خيار السمة: فاتح أو داكن أو اتّباع النظام، مع انتقال لوني سلس",
                    "➕ ردود فعل لمسية خفيفة عند النقر والتبديل في كل أنحاء التطبيق",
                    "➕ دعم الأجهزة اللوحية والقابلة للطي: عرض جزأين جنبًا إلى جنب على الشاشات الكبيرة",
                    "🛠️ بدء تشغيل أسرع وتمرير أكثر سلاسة",
                    "🛠️ قائمة \"تطبيقات أخرى\" تبقى محدّثة تلقائيًا وتعمل دون اتصال، مع أزرار للتثبيت/الفتح/الموقع",
                    "🛠️ تُخفى إشعارات الوسائط من شاشة الاختيار لأنه لا يمكن إخفاؤها بشكل موثوق",
                ],
                "2.0": [
                    "✨ أُعيدت كتابته بالكامل باستخدام تقنيات حديثة",
                    "➕ تحديثات داخل التطبيق: ثبّت أحدث إصدار مباشرة من التطبيق",
                    "➕ إعداد خصوصية لإلغاء الاشتراك في التحليلات المجهولة",
                    "➕ تخطيطات أفضل للأجهزة اللوحية والشاشات الكبيرة",
                    "➕ دعم أندرويد 17",
                    "🔨 إصلاح تعطّل عند بدء التشغيل",
                    "🔨 إصلاح عدم تحديث حالة الإذن بعد مغادرة الإعدادات",
                ],
                "1.8.1": [
                    "➕ دعم أندرويد 16",
                    "➕ إضافة الترجمة الألمانية",
                    "🔨 تصحيح الإملاء",
                ],
                "1.7": ["➕ دعم أندرويد 15"],
                "1.6": [
                    "➕ دعم أندرويد 13",
                    "➕ خيار لتضمين جميع بيانات الإشعار في السجلّات، حتى لو كانت حساسة",
                    "🔨 إصلاح خلل يمنع إخفاء الإشعار بعد اختياره",
                    "✨ تقليل حجم تنزيل التطبيق إلى النصف",
                ],
                "1.5": [
                    "✨ مزيد من التحديثات على التصميم، أقرب إلى Material You، لكن دون ألوان ديناميكية (بعد 😉)",
                    "➕ تحسين التعامل مع إظهار الإشعارات المخفية، دون الحاجة إلى إعادة التشغيل",
                    "➕ إضافة سجلّ لإخفاء الإشعارات، يمكن الوصول إليه من الإعدادات",
                ],
                "1.4": [
                    "✨ تحديث تصميم التطبيق ليكون أكثر حداثة",
                    "🔧 تحديث المنطق للتعامل مع الإشعار بشكل أفضل",
                    "🔨 إصلاح عدم القدرة على تحميل أسماء التطبيقات وأيقوناتها على أندرويد 11",
                    "🔨 إصلاحات متنوعة للأخطاء",
                ],
                "1.3.1": [
                    "🔧 إضافة طريقة للانتقال إلى شاشة إعدادات «تحسين البطارية» لاستثناء هذا التطبيق منها. سيساعد ذلك في إبقاء الإشعار مخفياً، وقد يقلّل استهلاك البطارية",
                ],
                "1.3": [
                    "🔨 إصلاح خلل التعطّل",
                    "🔧 إضافة إمكانية إرسال الإشعار المتاح حالياً إلى المطوّر للتحليل، للمساعدة في تحسين التطبيق",
                ],
                "1.2": ["🔧 إضافة دعم أندرويد 10 و11"],
                "1.1.4": [
                    "✨ إضافة دعم التنقّل بالإيماءات من الحافة إلى الحافة",
                    "🔧 تحديث التبعيات",
                ],
                "1.1.3": ["🔨 تحسين موثوقية إخفاء الإشعارات"],
                "1.1.2": [
                    "🔧 الانتقال إلى نظام قاعدة بيانات للبيانات المحفوظة",
                    "🔨 إصلاح بعض الأخطاء",
                    "🔧 تحسين الأداء",
                ],
                "1.0.3": ["🔧 إضافة اكتشاف أفضل للإشعارات الدائمة"],
                "1.0.2": [
                    "🔨 إصلاح التمرير المتكرر للأسفل عند تحديث الإشعارات بمعدل مرتفع",
                ],
                "1.0.1": [
                    "🔧 إضافة بعض النصوص التوضيحية",
                    "🔨 تغيير صياغة بعض مربّعات الحوار",
                    "🔨 إزالة كود غير ضروري",
                ],
                "1.0.0": ["✨ الإصدار الأول"],
            },
        },
        es: {
            description:
                "Elija una notificación persistente y manténgala oculta mientras la app esté instalada.",
            highlights: [
                "**Aviso: la app pasará a ser gratuita con una compra opcional dentro de la app.** Si ya la compró, abra la pantalla de Ajustes e inicie sesión para que su compra se conserve y mantenga todas las funciones premium gratis, sin necesidad de comprar otra vez.",
                "Ahora disponible en alemán, árabe, español y ruso",
                "Selector de idioma de la app en Ajustes (Android 13+)",
                "Compatibilidad con Android 17",
            ],
            changelog: {
                "2.1": [
                    "➕ App disponible ahora en alemán, árabe, español y ruso. Elige tu idioma en Ajustes (Android 13+)",
                    "➕ Opción de Tema: claro, oscuro o seguir al sistema, con transición de color suave",
                    "➕ Vibración háptica sutil al tocar y al cambiar ajustes",
                    "➕ Compatible con tablets y plegables: dos paneles en pantallas grandes",
                    "🛠️ Inicio más rápido y desplazamiento más fluido",
                    "🛠️ La lista «Otras apps» se actualiza sola, funciona sin conexión y añade botones Instalar/Abrir/Web",
                    "🛠️ Las notificaciones multimedia ya no aparecen en la selección, porque la app no puede ocultarlas de forma fiable",
                ],
                "2.0": [
                    "✨ Completamente reescrita con tecnologías modernas",
                    "➕ Actualizaciones dentro de la app: instala la última versión directamente desde la app",
                    "➕ Ajuste de privacidad para desactivar las analíticas anónimas",
                    "➕ Mejores diseños para tabletas y pantallas grandes",
                    "➕ Compatibilidad con Android 17",
                    "🔨 Se corrigió un fallo al iniciar",
                    "🔨 Se corrigió que el estado de los permisos no se actualizara al salir de ajustes",
                ],
                "1.8.1": [
                    "➕ Compatibilidad con Android 16",
                    "➕ Se añadió la traducción al alemán",
                    "🔨 Se corrigió la ortografía",
                ],
                "1.7": ["➕ Compatibilidad con Android 15"],
                "1.6": [
                    "➕ Compatibilidad con Android 13",
                    "➕ Opción para incluir todos los datos de la notificación en los registros, aunque puedan ser sensibles",
                    "🔨 Se corrigió un error por el que una notificación no se ocultaba tras seleccionarla",
                    "✨ Se redujo a la mitad el tamaño de descarga de la app",
                ],
                "1.5": [
                    "✨ Más mejoras en el diseño, más cerca de Material You, pero aún sin colores dinámicos (de momento 😉)",
                    "➕ Mejor gestión al mostrar notificaciones ocultas, sin necesidad de reiniciar",
                    "➕ Se añadió un historial de ocultación de notificaciones, accesible desde Ajustes",
                ],
                "1.4": [
                    "✨ Se actualizó el diseño de la app para que sea más moderno",
                    "🔧 Se actualizó la lógica para gestionar mejor la notificación",
                    "🔨 Se corrigió no poder cargar nombres e iconos de apps en Android 11",
                    "🔨 Varias correcciones de errores",
                ],
                "1.3.1": [
                    "🔧 Se añadió una forma de ir a la pantalla de ajustes de «Optimización de batería» para excluir esta app. Esto ayuda a mantener la notificación oculta y puede reducir el consumo de batería",
                ],
                "1.3": [
                    "🔨 Se corrigió un error de cierre inesperado",
                    "🔧 Se añadió la posibilidad de enviar al desarrollador la notificación disponible actualmente para analizarla y mejorar la app",
                ],
                "1.2": ["🔧 Se añadió compatibilidad con Android 10 y 11"],
                "1.1.4": [
                    "✨ Se añadió compatibilidad con la navegación por gestos de borde a borde",
                    "🔧 Dependencias actualizadas",
                ],
                "1.1.3": ["🔨 Se mejoró la fiabilidad al ocultar notificaciones"],
                "1.1.2": [
                    "🔧 Se migró a un sistema de base de datos para los datos guardados",
                    "🔨 Se corrigieron algunos errores",
                    "🔧 Se mejoró el rendimiento",
                ],
                "1.0.3": [
                    "🔧 Se añadió una mejor detección de notificaciones persistentes",
                ],
                "1.0.2": [
                    "🔨 Se corrigió el desplazamiento repetido hacia abajo cuando las notificaciones se actualizan con mucha frecuencia",
                ],
                "1.0.1": [
                    "🔧 Se añadió texto aclaratorio",
                    "🔨 Se cambió la redacción de algunos diálogos",
                    "🔨 Se eliminó código innecesario",
                ],
                "1.0.0": ["✨ Lanzamiento inicial"],
            },
        },
        ru: {
            description:
                "Выберите постоянное уведомление и держите его скрытым, пока приложение установлено.",
            highlights: [
                "**Внимание: приложение становится бесплатным с необязательной покупкой внутри.** Если вы уже купили его, откройте экран настроек и войдите, чтобы покупка перенеслась и все премиум-функции остались бесплатными, без повторной покупки.",
                "Теперь доступно на немецком, арабском, испанском и русском",
                "Выбор языка приложения в Настройках (Android 13+)",
                "Поддержка Android 17",
            ],
            changelog: {
                "2.1": [
                    "➕ Приложение теперь доступно на немецком, арабском, испанском и русском. Выберите язык в Настройках (Android 13+)",
                    "➕ Опция «Тема»: светлая, тёмная или как в системе, с плавным переходом цвета",
                    "➕ Лёгкая тактильная отдача при нажатиях и переключениях",
                    "➕ Поддержка планшетов и складных устройств: две панели рядом на больших экранах",
                    "🛠️ Более быстрый запуск и плавная прокрутка",
                    "🛠️ Список «Другие приложения» обновляется сам, работает офлайн и добавляет кнопки Установить/Открыть/Сайт",
                    "🛠️ Медиауведомления больше не показываются при выборе, так как приложение не может надёжно скрыть их",
                ],
                "2.0": [
                    "✨ Полностью переписано с использованием современных технологий",
                    "➕ Обновления внутри приложения: установите последнюю версию прямо из приложения",
                    "➕ Настройка приватности для отказа от анонимной аналитики",
                    "➕ Улучшенные макеты для планшетов и больших экранов",
                    "➕ Поддержка Android 17",
                    "🔨 Исправлен сбой при запуске",
                    "🔨 Исправлено: статус разрешения не обновлялся после выхода из настроек",
                ],
                "1.8.1": [
                    "➕ Поддержка Android 16",
                    "➕ Добавлен немецкий перевод",
                    "🔨 Исправлена орфография",
                ],
                "1.7": ["➕ Поддержка Android 15"],
                "1.6": [
                    "➕ Поддержка Android 13",
                    "➕ Возможность включать все данные уведомления в журналы, даже если они конфиденциальны",
                    "🔨 Исправлена ошибка, из-за которой уведомление не скрывалось после выбора",
                    "✨ Размер загрузки приложения уменьшен вдвое",
                ],
                "1.5": [
                    "✨ Дальнейшее обновление дизайна, ближе к Material You, но пока без динамических цветов (пока 😉)",
                    "➕ Улучшена работа показа скрытых уведомлений, перезапуск не нужен",
                    "➕ Добавлена история скрытия уведомлений, доступна в настройках",
                ],
                "1.4": [
                    "✨ Дизайн приложения обновлён и стал современнее",
                    "🔧 Обновлена логика для лучшей обработки уведомления",
                    "🔨 Исправлена невозможность загрузки названий и значков приложений на Android 11",
                    "🔨 Различные исправления ошибок",
                ],
                "1.3.1": [
                    "🔧 Добавлен способ перейти на экран настроек «Оптимизация батареи», чтобы исключить это приложение. Это помогает держать уведомление скрытым и может снизить расход батареи",
                ],
                "1.3": [
                    "🔨 Исправлена ошибка с вылетом",
                    "🔧 Добавлена возможность отправить разработчику текущее уведомление для анализа, чтобы улучшить приложение",
                ],
                "1.2": ["🔧 Добавлена поддержка Android 10 и 11"],
                "1.1.4": [
                    "✨ Добавлена поддержка жестовой навигации от края до края",
                    "🔧 Обновление зависимостей",
                ],
                "1.1.3": ["🔨 Повышена надёжность скрытия уведомлений"],
                "1.1.2": [
                    "🔧 Выполнен переход на систему базы данных для сохранённых данных",
                    "🔨 Исправлено несколько ошибок",
                    "🔧 Улучшена производительность",
                ],
                "1.0.3": ["🔧 Добавлено улучшенное определение постоянных уведомлений"],
                "1.0.2": [
                    "🔨 Исправлена постоянная прокрутка вниз при частом обновлении уведомлений",
                ],
                "1.0.1": [
                    "🔧 Добавлен пояснительный текст",
                    "🔨 Изменены формулировки некоторых диалогов",
                    "🔨 Удалён лишний код",
                ],
                "1.0.0": ["✨ Первый выпуск"],
            },
        },
    },

    icon_recomposer: {
        de: {
            description:
                "Vektor-Icons mit beweglichem 3D-Relief beleuchten und als PNG, SVG oder Android-VectorDrawable exportieren.",
            highlights: [
                "Ihre Arbeit wird automatisch gespeichert und bei der Rückkehr wiederhergestellt",
                "Installierbar und offline nutzbar, jetzt auch unter Android",
            ],
            changelog: {
                "1.7.2": [
                    "🛠️ Die Schaltfläche «Installieren» erscheint jetzt auch auf Android-Smartphones (Chrome und Edge) und installiert die App per Tippen; das eigene Installations-Banner des Browsers wird unterdrückt, sodass es eine einzige, einheitliche Schaltfläche gibt. Auf iPhone und iPad erfolgt die Installation weiterhin über das Teilen-Menü von Safari und «Zum Home-Bildschirm»",
                ],
                "1.7.1": [
                    "🛠️ Die anonyme Nutzungsanalyse erfasst jetzt die App-Version, damit ich erkennen kann, welche Versionen im Einsatz sind. Keine neuen personenbezogenen Daten; die Version wird bereits in der App angezeigt",
                ],
                "1.7.0": [
                    "➕ Ihre Arbeit wird automatisch gespeichert: Das aktuelle Projekt wird in Ihrem Browser gespeichert und beim erneuten Öffnen der Seite wiederhergestellt, sodass Sie dort weitermachen, wo Sie aufgehört haben. Beim Öffnen eines geteilten Links wird weiterhin das geteilte Design angezeigt",
                ],
                "1.6.1": [
                    "➕ Eine Schaltfläche «Installieren» in der oberen Leiste: In Desktop-Browsern, die das unterstützen, erscheint rechts neben «Export» eine Schaltfläche «Installieren», die die App per Klick installiert, ohne automatische Aufforderung oder Banner",
                    "🛠️ Wenn die App als installierte Desktop-App läuft, werden das überflüssige App-Symbol und der Name aus der oberen Leiste entfernt (die Fenstertitelleiste zeigt sie bereits); die Version bleibt",
                    "🔨 Alle Schaltflächen der oberen Leiste haben jetzt eine einheitliche Höhe (die Überlauf-Schaltfläche «⋯» war etwas niedriger)",
                ],
                "1.6.0": [
                    "➕ Installierbar und offline nutzbar (PWA): Fügen Sie Icon Recomposer zu Ihrem Home-Bildschirm oder Desktop hinzu, und es läuft vollständig offline. Einmal geladen, werden die gesamte App und Ihr zuletzt verwendeter Standard zwischengespeichert, sodass es ohne Netzwerk öffnet; neue Versionen bieten ein Neuladen mit einem Tippen",
                ],
                "1.5.8": [
                    "🛠️ Bei schmalem Fenster bleibt die obere Leiste jetzt in einer Zeile und verschiebt die nicht passenden Elemente in ein Überlaufmenü «⋯» (zuerst Privacy und Changelog, dann Import usw.), statt unübersichtlich umzubrechen",
                    "🔨 Die gesamte Leinwand ist immer sichtbar: Bei kurzen oder breiten Fenstern wird sie jetzt in beiden Dimensionen passend skaliert, sodass oben und unten nicht mehr abgeschnitten werden",
                ],
                "1.5.7": [
                    "🔨 Das Smartphone-Layout verdeckt die Leinwand nicht mehr: Die Smartphone-Ansicht ist jetzt eine normal scrollende Seite mit oben fixierter Leinwand (immer sichtbar) und Layers sowie dem Inspector darunter, plus einer fixierten Symbolleiste mit umbrechenden Schaltflächen",
                ],
                "1.5.6": [
                    "➕ Tastenkürzel für Speichern und Öffnen: Strg+S / ⌘S speichert das Projekt, und Strg+O / ⌘O öffnet ein Projekt oder importiert eine Vektorgrafik",
                    "🛠️ Breitere Seitenleisten (Layers 240 auf 280 px, Inspector 300 auf 360 px) für mehr Platz",
                ],
                "1.5.5": [
                    "➕ Leinwand zoomen und verschieben: Zoomen mit dem Mausrad oder einer Zwei-Finger-Geste (zum Zeiger hin, bis 8×, nie unter die Einpassgröße), und Verschieben durch Ziehen der leeren Leinwand im gezoomten Zustand, mit einer Zwei-Finger-Geste oder mit gedrückter mittlerer Maustaste. Nur zur Ansicht, daher bleiben alle Exporte und die Projektdatei unverändert",
                ],
                "1.5.4": [
                    "➕ Mit Esc die Ebenenauswahl aufheben. Wenn ein Steuerelement fokussiert ist, verlässt das erste Esc das Feld und ein zweites hebt die Auswahl auf; eine offene Farbauswahl oder ein Dialog schließt zuerst mit Esc",
                    "🛠️ Die Abfrage «Neues Dokument starten?» ist jetzt ein In-App-Dialog im dunklen Design statt des nativen Bestätigungsfensters des Browsers (Esc bricht ab, Enter bestätigt)",
                ],
                "1.5.3": [
                    "➕ Ein Changelog-Link in der oberen Leiste (neben Privacy), der die Seite «Neuigkeiten» der App öffnet",
                ],
                "1.5.2": [
                    "➕ Eine einfachere Art, Verläufe zu erstellen: Bei Auswahl der Verlaufsfüllung erscheinen zuerst Quick looks mit einem Klick (Top light, Glow, Sheen, Diagonal, Fade out), ein Von/Bis-Farbpaar mit einem Fade-Schalter und ein Richtungs-Pad (Pfeile legen eine lineare Richtung fest, der Mittelpunkt macht ihn radial). Der vollständige Mehrstopp-Editor (Offsets, Alpha pro Stopp, exakte Koordinaten) wandert unter eine erweiterte Ansicht und bleibt synchron. Die einfachen Steuerungen stylen alle ausgewählten Verlaufsebenen auf einmal um",
                    "🔨 Die Option Verlaufsfüllung ist jetzt immer sichtbar: Die Steuerung Solid / Embossed / Gradient wurde in eine eigene Zeile über die volle Breite verschoben, sodass «Gradient» nicht mehr am rechten Rand des Inspectors abgeschnitten wird",
                ],
                "1.5.1": [
                    "🛠️ Punktförmiges (radiales) Licht: Die Intensität steuert jetzt, wie weit der Schatten reicht, mit weicherem Abfall. Höher gedreht zieht sie den Schatten nach innen (am Maximum überschreitet er die Leinwandmitte und verdunkelt Mitte und gegenüberliegende Seite); geringere Intensität hält die Mitte hell",
                    "🔨 Fernes (gerichtetes) Licht prägt jetzt so stark wie das Punktlicht, und sein Intensitäts-Regler hat eine klare Wirkung. Die Fase wird pro Form entlang der Lichtrichtung aufgebaut und im Forminneren konzentriert, sodass mit fernem Licht beleuchtete Icons dreidimensional wirken und deutlich stärker geprägt aussehen als zuvor",
                ],
                "1.5.0": [
                    "➕ Echte Verlaufsfüllungen pro Ebene: ein neuer Modus Gradient (neben Solid und Embossed) mit linearem oder radialem Typ, einer bearbeitbaren Mehrstopp-Liste (Farbe, Alpha pro Stopp und Offset) und numerischer Geometrie. Verläufe werden aus SVG und Android VectorDrawable importiert, statt auf eine Farbe reduziert zu werden, bleiben in der Projektdatei erhalten und folgen dem Verschieben, Skalieren und Spiegeln der Ebene. Eine Aktion «als Verlaufs-Overlay duplizieren» stapelt eine geprägte Basis und eine Verlaufsebene, sodass eine Form beides haben kann",
                    "➕ Linkvorschauen und Suchmetadaten: Das Teilen der Live-URL zeigt jetzt einen Titel, eine Zusammenfassung und das App-Symbol (Open-Graph- und Twitter-Card-Tags) statt eines nackten Links",
                    "🛠️ Prägung ist jetzt optional: Neue Ebenen und importierte Grafiken kommen als flache Solid-Füllungen in der Ausgangsfarbe an, statt automatisch geprägt zu werden. Wenden Sie Embossed pro Ebene für den 3D-Look an; das integrierte Beispiel bleibt geprägt, um ihn zu zeigen",
                    "🔨 Die Strichbreite skaliert jetzt mit der Ebene, sodass eine skalierte Form mit Kontur ihre Umrisslinie über Vorschau, PNG- und VectorDrawable-Export hinweg proportional behält",
                ],
                "1.4.0": [
                    "➕ Skalierung pro Ebene: Ein Scale-Regler ändert die Größe der ausgewählten Ebene(n) in Prozent (100 = Original). Eine Ebene skaliert um ihre eigene Mitte; mehrere ausgewählte Ebenen skalieren gemeinsam um ihre gemeinsame Mitte. Nicht-destruktiv (als Ebenentransformation gespeichert), mit einem Verknüpfungsschalter für unabhängige X- und Y-Skalierung",
                    "➕ Ebenen spiegeln: Flip H und Flip V spiegeln die ausgewählte(n) Ebene(n); mehrere Ebenen spiegeln gemeinsam um ihre gemeinsame Mitte, und die Spiegelung ist nicht-destruktiv",
                    "➕ Mehr anonyme Nutzungs- und Fehlerereignisse an TelemetryDeck (Export, Öffnen, Import, Neu, Speichern, Rückgängig, Wiederholen und Fehler), neben dem bestehenden Seitenaufruf (siehe Datenschutzerklärung)",
                    "➕ Ein Privacy-Link in der oberen Leiste der App, der ihre Datenschutzerklärung öffnet",
                    "🔨 Importierte Verlaufsfüllungen leiten jetzt eine repräsentative Grundfarbe aus den Stopps des Verlaufs ab statt aus einem flachen Grau",
                    "🔨 Doppelte Ebenen-IDs beim Import in ein geladenes Projekt behoben, die dazu führen konnten, dass mit einer Ebene auch eine andere ausgewählt wurde; IDs werden beim Laden jetzt entdoppelt",
                ],
                "1.3.0": [
                    "➕ Schattenabstand pro Ebene: Ein Distance-Regler im Bereich Cast shadow legt fest, wie weit jede Ebene ihren Schatten wirft (ihre scheinbare Höhe über der Oberfläche). Er multipliziert die automatische Länge aus dem Licht, sodass 1× den bisherigen Look beibehält und höhere Werte die Ebene weiter von der Oberfläche abheben",
                    "➕ Die App öffnet jetzt mit einem mitgelieferten Standardprojekt (dem App-Symbol) statt des integrierten Beispiels und zeigt dieses Symbol neben dem Titel in der oberen Leiste und als Browser-Favicon",
                    "➕ Anonyme Nutzungsanalyse über das datenschutzfreundliche TelemetryDeck Web SDK: ein Seitenaufruf pro Laden, keine Cookies (siehe Datenschutzerklärung)",
                    "🔨 Ein Klick auf die Leinwand wechselt jetzt die Auswahl zwischen überlappenden Ebenen; es wird die tatsächliche Ebenengeometrie getroffen, sodass das unsichtbare Ziehziel einer Ebene keine Klicks mehr abfängt, die einer Form darüber oder darunter gelten",
                ],
                "1.2.1": [
                    "🔨 Bei aktiviertem Link W/H aktualisiert das Bearbeiten einer Leinwanddimension jetzt auch den Wert des anderen Feldes (die Leinwand wurde bereits korrekt skaliert; nur der angezeigte Wert hinkte hinterher)",
                ],
                "1.2.0": [
                    "➕ Ebenen verschieben: Ziehen Sie eine ausgewählte Ebene (oder mehrere auf einmal) auf der Leinwand, oder legen Sie eine genaue Position über die X/Y-Felder der Ebene fest",
                    "➕ Klicken Sie auf die Form einer Ebene auf der Leinwand, um sie auszuwählen. Strg/⌘ und Umschalt-Klick erweitern die Auswahl, und ein Klick auf einen leeren Bereich hebt sie auf",
                    "➕ Numerische Position-X/Y-Felder für eine präzise Platzierung des Punktlichts, neben dem ziehbaren Griff",
                    "🛠️ Das Licht bewegt sich jetzt nur durch Ziehen seines Griffs; ein Klick anderswo auf der Leinwand verschiebt es nicht mehr",
                    "🔨 Leinwandgrößen-Vorgaben behoben, die im Inspector teilweise außerhalb des Bildschirms angezeigt werden konnten",
                    "🔨 Zahleneingaben (Leinwandgröße, Lichtposition, PNG-Größe, Strichbreite) behoben, die über den rechten Rand ihres Panels hinausragten",
                ],
                "1.1.0": [
                    "➕ Ebene duplizieren: Eine Schaltfläche pro Zeile und Strg/⌘+D kopieren die ausgewählte(n) Ebene(n) und platzieren jede Kopie direkt über ihrem Original",
                    "➕ Die Projektleinwand über Breite/Höhe-Felder oder Vorgaben (24, 108, 512, 1024) anpassen, mit verknüpftem Seitenverhältnis und einer optionalen Funktion «Inhalte skalieren»",
                ],
                "1.0.0": [
                    "➕ SVG- und Android-VectorDrawable-Grafiken als bearbeitbare Ebenen importieren",
                    "➕ Prägungs-Engine: Ein einziges gemeinsames bewegliches Licht steuert die Schattierung (Punktlicht wird zu einem radialen Verlauf, fernes Licht zu einem linearen) mit OKLab-Farbmischung",
                    "➕ Materialien pro Ebene (Farbe, Deckkraft, solid oder geprägt, Prägeintensität, Glanz, Füllregel) und Schlagschatten, die an den darunterliegenden Ebenen abschneiden",
                    "➕ Live-Vorschau mit einem ziehbaren Lichtgriff und Mehrfachauswahl-Bearbeitung",
                    "➕ Export als PNG (transparent oder mit Hintergrund), Android VectorDrawable XML, SVG und erneut bearbeitbares Projekt-JSON",
                    "➕ Projekte öffnen und speichern, per Link teilen und rückgängig machen/wiederholen (Strg/⌘+Z)",
                ],
            },
        },
        ar: {
            description:
                "أضئ أيقونات متجهة بنقش ثلاثي الأبعاد قابل للتحريك، ثم صدّرها إلى PNG أو SVG أو Android VectorDrawable.",
            highlights: [
                "يُحفظ عملك تلقائياً ويُستعاد عند عودتك",
                "قابل للتثبيت ويعمل دون اتصال، والآن على أندرويد أيضاً",
            ],
            changelog: {
                "1.7.2": [
                    "🛠️ زر «تثبيت» يظهر الآن على هواتف أندرويد أيضاً (Chrome وEdge) ويثبّت التطبيق عند النقر، مع إخفاء شريط التثبيت الخاص بالمتصفح ليكون هناك زر واحد متّسق. على iPhone وiPad، يظل التثبيت عبر قائمة المشاركة في Safari و«أضف إلى الشاشة الرئيسية»",
                ],
                "1.7.1": [
                    "🛠️ تحليلات الاستخدام المجهولة تسجّل الآن إصدار التطبيق لأعرف الإصدارات المستخدمة. لا بيانات شخصية جديدة؛ الإصدار معروض بالفعل في التطبيق",
                ],
                "1.7.0": [
                    "➕ يُحفظ عملك تلقائياً: يُخزَّن المشروع الحالي في متصفحك ويُستعاد عند إعادة فتح الصفحة، فتُكمل من حيث توقّفت. وعند فتح رابط مشارَك يظل التصميم المشارَك ظاهراً",
                ],
                "1.6.1": [
                    "➕ زر «تثبيت» في الشريط العلوي: في متصفحات سطح المكتب الداعمة، يظهر زر «تثبيت» على يمين «Export» ويثبّت التطبيق عند النقر، دون مطالبة أو شريط تلقائي",
                    "🛠️ عند التشغيل كتطبيق سطح مكتب مثبّت، يُزال أيقونة التطبيق واسمه الزائدان من الشريط العلوي (شريط عنوان النافذة يعرضهما بالفعل)؛ ويبقى رقم الإصدار",
                    "🔨 جميع أزرار الشريط العلوي بارتفاع موحّد الآن (كان زر التجاوز «⋯» أقصر قليلاً)",
                ],
                "1.6.0": [
                    "➕ قابل للتثبيت ويعمل دون اتصال (PWA): أضف Icon Recomposer إلى شاشتك الرئيسية أو سطح المكتب ليعمل دون اتصال تماماً. بعد التحميل، يُخزَّن كامل التطبيق وآخر افتراضي استخدمته مؤقتاً، فيفتح دون شبكة، وتعرض الإصدارات الجديدة إعادة تحميل بنقرة واحدة",
                ],
                "1.5.8": [
                    "🛠️ عندما تكون النافذة ضيقة، يبقى الشريط العلوي الآن في سطر واحد وينقل العناصر التي لا تتّسع إلى قائمة تجاوز «⋯» (Privacy وChangelog أولاً، ثم Import وهكذا) بدلاً من الالتفاف بشكل مبعثر",
                    "🔨 اللوحة بأكملها مرئية دائماً: في النوافذ القصيرة أو العريضة تُقاس الآن لتناسب المنصة في البُعدين، فلم يعد أعلاها وأسفلها يُقتطعان",
                ],
                "1.5.7": [
                    "🔨 لم يعد تخطيط الهاتف يخفي اللوحة: عرض الهاتف الآن صفحة تُمرَّر بشكل عادي مع تثبيت اللوحة في الأعلى (مرئية دائماً) وLayers والمفتّش أسفلها، إضافة إلى شريط أدوات ثابت تلتفّ أزراره",
                ],
                "1.5.6": [
                    "➕ اختصارات لوحة المفاتيح للحفظ والفتح: Ctrl+S / ⌘S يحفظ المشروع، وCtrl+O / ⌘O يفتح مشروعاً أو يستورد متجهاً",
                    "🛠️ لوحات جانبية أعرض (Layers من 240 إلى 280 بكسل، والمفتّش من 300 إلى 360 بكسل) لمساحة أوسع",
                ],
                "1.5.5": [
                    "➕ تكبير اللوحة وتحريكها: التكبير بعجلة الفأرة أو بقرص بإصبعين (باتجاه المؤشّر، حتى 8×، دون النزول عن حجم الملاءمة)، والتحريك بسحب اللوحة الفارغة عند التكبير، أو بإصبعين، أو بزر الفأرة الأوسط. للعرض فقط، فلا تتأثر أي عمليات تصدير ولا ملف المشروع",
                ],
                "1.5.4": [
                    "➕ اضغط Esc لمسح تحديد الطبقات. إذا كان أحد عناصر التحكم مُركَّزاً، فإن أول Esc يغادر الحقل والثاني يمسح التحديد؛ ويُغلق منتقي ألوان أو حوار مفتوح بـ Esc أولاً",
                    "🛠️ أصبحت رسالة «بدء مستند جديد؟» الآن حواراً داخل التطبيق يطابق المظهر الداكن بدل مربّع التأكيد الأصلي للمتصفح (Esc يُلغي، Enter يؤكّد)",
                ],
                "1.5.3": [
                    "➕ رابط Changelog في الشريط العلوي (بجوار Privacy) يفتح صفحة «ما الجديد» في التطبيق",
                ],
                "1.5.2": [
                    "➕ طريقة أبسط لإنشاء التدرّجات: عند اختيار تعبئة Gradient تبدأ الآن بـ Quick looks بنقرة واحدة (Top light وGlow وSheen وDiagonal وFade out)، وزوج ألوان من/إلى مع مفتاح Fade، ولوحة اتجاه (الأسهم تحدّد اتجاهاً خطياً، والنقطة المركزية تجعله شعاعياً). ينتقل المحرّر الكامل متعدّد التوقفات (الإزاحات، الشفافية لكل توقف، الإحداثيات الدقيقة) إلى قسم متقدّم ويبقى متزامناً. تعيد عناصر التحكم البسيطة تنسيق كل طبقات التدرّج المحدّدة دفعة واحدة",
                    "🔨 خيار تعبئة Gradient مرئي دائماً الآن: نُقل عنصر التحكم Solid / Embossed / Gradient إلى سطر مستقل بعرض كامل، فلم يعد «Gradient» يُقتطع عند الحافة اليمنى للمفتّش",
                ],
                "1.5.1": [
                    "🛠️ الضوء النقطي (الشعاعي): تتحكّم Intensity الآن في مدى وصول الظل مع تلاشٍ أنعم. رفعها يسحب الظل إلى الداخل (عند الحد الأقصى يتجاوز مركز اللوحة فيُعتم المركز والجانب البعيد)؛ والشدّة الأقل تُبقي المركز مضيئاً",
                    "🔨 الضوء البعيد (الاتجاهي) ينقش الآن بقوة الضوء النقطي نفسها، ولمنزلق Intensity تأثير واضح. تُبنى الحافة المشطوفة لكل شكل على امتداد اتجاه الضوء وتتركّز داخل الشكل، فتبدو الأيقونات بالضوء البعيد ثلاثية الأبعاد وأكثر نقشاً بوضوح من ذي قبل",
                ],
                "1.5.0": [
                    "➕ تعبئات تدرّج حقيقية لكل طبقة: وضع Gradient جديد (إلى جانب Solid وEmbossed) بنوع خطي أو شعاعي، وقائمة توقفات متعدّدة قابلة للتحرير (اللون والشفافية لكل توقف والإزاحة)، وهندسة رقمية. تُستورَد التدرّجات من SVG وAndroid VectorDrawable بدل تسطيحها إلى لون واحد، وتبقى في ملف المشروع وتتبع تحريك الطبقة وقياسها وقلبها. ويُكدِّس إجراء «تكرار كطبقة تدرّج فوقية» قاعدة منقوشة وطبقة تدرّج فيمكن لشكل واحد أن يحمل كليهما",
                    "➕ معاينات الروابط وبيانات البحث الوصفية: مشاركة الرابط المباشر تعرض الآن عنواناً وملخّصاً وأيقونة التطبيق (وسوم Open Graph وTwitter card) بدل رابط مجرّد",
                    "🛠️ النقش الآن اختياري: تصل الطبقات الجديدة والرسومات المستوردة كتعبئات Solid مسطّحة باللون الأصلي بدل نقشها تلقائياً. طبّق Embossed لكل طبقة للمظهر ثلاثي الأبعاد؛ ويبقى المثال المدمج منقوشاً لإظهاره",
                    "🔨 يتناسب عرض الحدّ الآن مع الطبقة، فعند قياس شكل ذي حدّ يبقى مخطّطه متناسباً عبر المعاينة وتصدير PNG وVectorDrawable",
                ],
                "1.4.0": [
                    "➕ قياس لكل طبقة: عنصر Scale يغيّر حجم الطبقة (الطبقات) المحدّدة بنسبة مئوية (100 = الأصل). تُقاس طبقة واحدة حول مركزها؛ وتُقاس عدة طبقات محدّدة معاً حول مركزها المشترك. غير متلِف (يُحفظ كتحويل للطبقة)، مع مفتاح ربط لقياس X وY بشكل مستقل",
                    "➕ قلب الطبقات: Flip H وFlip V يعكسان الطبقة (الطبقات) المحدّدة؛ وتُقلب عدة طبقات معاً حول مركزها المشترك، والقلب غير متلِف",
                    "➕ مزيد من أحداث الاستخدام والأخطاء المجهولة تُرسَل إلى TelemetryDeck (تصدير، فتح، استيراد، جديد، حفظ، تراجع، إعادة، وأخطاء)، إلى جانب مشاهدة الصفحة الحالية (انظر سياسة الخصوصية)",
                    "➕ رابط Privacy في الشريط العلوي للتطبيق يفتح سياسة الخصوصية الخاصة به",
                    "🔨 تأخذ تعبئات التدرّج المستوردة الآن لوناً أساسياً ممثّلاً من توقفات التدرّج بدل رمادي مسطّح",
                    "🔨 إصلاح تكرار معرّفات الطبقات عند الاستيراد إلى مشروع محمّل، الذي قد يجعل تحديد طبقة يحدّد أخرى؛ وتُزال الآن المعرّفات المكرّرة عند التحميل",
                ],
                "1.3.0": [
                    "➕ مسافة الظل لكل طبقة: عنصر Distance في قسم Cast shadow يحدّد مدى إلقاء كل طبقة لظلّها (ارتفاعها الظاهري فوق السطح). يضرب الطول التلقائي الناتج عن الضوء، فيُبقي 1× المظهر السابق وترفع القيم الأعلى الطبقة أكثر عن السطح",
                    "➕ يفتح التطبيق الآن على مشروع افتراضي مرفق (أيقونة التطبيق) بدل المثال المدمج، ويعرض تلك الأيقونة بجوار العنوان في الشريط العلوي وكأيقونة المفضّلة في المتصفح",
                    "➕ تحليلات استخدام مجهولة عبر TelemetryDeck Web SDK المراعي للخصوصية: مشاهدة صفحة واحدة لكل تحميل، دون ملفات تعريف الارتباط (انظر سياسة الخصوصية)",
                    "🔨 النقر على اللوحة يبدّل الآن التحديد بين الطبقات المتراكبة؛ ويختبر الهندسة الفعلية للطبقة، فلم يعد هدف السحب غير المرئي لطبقة يعترض النقرات الموجَّهة لشكل فوقها أو تحتها",
                ],
                "1.2.1": [
                    "🔨 مع تفعيل Link W/H، تحرير أحد أبعاد اللوحة يحدّث الآن قيمة الحقل الآخر أيضاً (كانت اللوحة تُغيَّر حجمها بشكل صحيح؛ القيمة المعروضة فقط هي التي كانت تتأخّر)",
                ],
                "1.2.0": [
                    "➕ تحريك الطبقات: اسحب طبقة محدّدة (أو عدة طبقات معاً) على اللوحة، أو حدّد موضعاً دقيقاً عبر حقلي X/Y للطبقة",
                    "➕ انقر شكل طبقة على اللوحة لتحديده. يوسّع Ctrl/⌘ وShift+النقر التحديد، والنقر على منطقة فارغة يلغيه",
                    "➕ حقلا Position X/Y رقميان لوضع الضوء النقطي بدقة، إلى جانب المقبض القابل للسحب",
                    "🛠️ يتحرّك الضوء الآن بسحب مقبضه فقط؛ والنقر في مكان آخر على اللوحة لم يعد يعيد وضعه",
                    "🔨 إصلاح إعدادات حجم اللوحة الجاهزة التي قد تظهر جزئياً خارج الشاشة في المفتّش",
                    "🔨 إصلاح الحقول الرقمية (حجم اللوحة، موضع الضوء، حجم PNG، عرض الحدّ) التي كانت تتجاوز الحافة اليمنى للوحتها",
                ],
                "1.1.0": [
                    "➕ تكرار الطبقة: زر في كل صف وCtrl/⌘+D ينسخان الطبقة (الطبقات) المحدّدة، ويضعان كل نسخة فوق أصلها مباشرة",
                    "➕ تغيير حجم لوحة المشروع عبر حقلي العرض/الارتفاع أو الإعدادات الجاهزة (24 و108 و512 و1024)، مع نسبة أبعاد مرتبطة وخيار «قياس المحتوى»",
                ],
                "1.0.0": [
                    "➕ استيراد رسومات SVG وAndroid VectorDrawable كطبقات قابلة للتحرير",
                    "➕ محرّك النقش: ضوء واحد متحرّك مشترك يقود التظليل (يصبح الضوء النقطي تدرّجاً شعاعياً، والبعيد تدرّجاً خطياً) مع مزج ألوان OKLab",
                    "➕ مواد لكل طبقة (اللون، الشفافية، solid أو منقوش، شدّة النقش، اللمعان، قاعدة التعبئة) وظلال مُلقاة تُقتطع عند الطبقات السفلية",
                    "➕ معاينة حيّة بمقبض ضوء قابل للسحب وتحرير متعدّد التحديد",
                    "➕ تصدير إلى PNG (شفاف أو بخلفية) وAndroid VectorDrawable XML وSVG وملف مشروع JSON قابل لإعادة التحرير",
                    "➕ فتح المشاريع وحفظها، والمشاركة عبر رابط، والتراجع/الإعادة (Ctrl/⌘+Z)",
                ],
            },
        },
        es: {
            description:
                "Ilumine iconos vectoriales con un relieve 3D movible y expórtelos a PNG, SVG o Android VectorDrawable.",
            highlights: [
                "Su trabajo se guarda automáticamente y se restaura cuando vuelve",
                "Instalable y funciona sin conexión, ahora también en Android",
            ],
            changelog: {
                "1.7.2": [
                    "🛠️ El botón «Instalar» ahora también aparece en teléfonos Android (Chrome y Edge) e instala la app al tocarlo, con el banner de instalación del propio navegador suprimido para que haya un único botón coherente. En iPhone y iPad, la instalación sigue siendo desde el menú Compartir de Safari y «Añadir a pantalla de inicio»",
                ],
                "1.7.1": [
                    "🛠️ Las analíticas de uso anónimas ahora registran la versión de la app para saber qué versiones están en uso. Sin nuevos datos personales; la versión ya se muestra en la app",
                ],
                "1.7.0": [
                    "➕ Tu trabajo se guarda automáticamente: el proyecto actual se almacena en tu navegador y se restaura al reabrir la página, así continúas donde lo dejaste. Al abrir un enlace compartido se sigue mostrando ese diseño compartido",
                ],
                "1.6.1": [
                    "➕ Un botón «Instalar» en la barra superior: en navegadores de escritorio compatibles, aparece a la derecha de «Export» e instala la app al hacer clic, sin aviso ni banner automáticos",
                    "🛠️ Al ejecutarse como app de escritorio instalada, se quitan de la barra superior el icono y el nombre redundantes (la barra de título de la ventana ya los muestra); la versión permanece",
                    "🔨 Todos los botones de la barra superior comparten ahora la misma altura (el botón de desbordamiento «⋯» era algo más bajo)",
                ],
                "1.6.0": [
                    "➕ Instalable y funciona sin conexión (PWA): añade Icon Recomposer a tu pantalla de inicio o escritorio y funciona totalmente sin conexión. Una vez cargado, se almacenan en caché toda la app y tu predeterminado más reciente, así que abre sin red, y las versiones nuevas ofrecen recargar con un toque",
                ],
                "1.5.8": [
                    "🛠️ Con la ventana estrecha, la barra superior ahora se mantiene en una línea y mueve los elementos que no caben a un menú de desbordamiento «⋯» (primero Privacy y Changelog, luego Import, etc.) en lugar de amontonarse",
                    "🔨 Todo el lienzo siempre es visible: en ventanas cortas o anchas ahora se escala para encajar en ambas dimensiones, así que la parte superior e inferior ya no se recortan",
                ],
                "1.5.7": [
                    "🔨 El diseño para teléfono ya no oculta el lienzo: la vista de teléfono es ahora una página con desplazamiento normal, con el lienzo fijado arriba (siempre visible) y Layers y el inspector debajo, más una barra de herramientas fija cuyos botones se ajustan",
                ],
                "1.5.6": [
                    "➕ Atajos de teclado para Guardar y Abrir: Ctrl+S / ⌘S guarda el proyecto, y Ctrl+O / ⌘O abre un proyecto o importa un vector",
                    "🛠️ Paneles laterales más anchos (Layers de 240 a 280 px, inspector de 300 a 360 px) para más espacio",
                ],
                "1.5.5": [
                    "➕ Haz zoom y desplaza el lienzo: zoom con la rueda del ratón o pellizco con dos dedos (hacia el puntero, hasta 8×, nunca por debajo del tamaño de ajuste), y desplázate arrastrando el lienzo vacío con zoom, con dos dedos o con el botón central del ratón. Es solo de vista, así que las exportaciones y el archivo de proyecto no se ven afectados",
                ],
                "1.5.4": [
                    "➕ Pulsa Esc para borrar la selección de capas. Si un control tiene el foco, el primer Esc sale del campo y el segundo borra la selección; un selector de color o diálogo abierto se cierra primero con Esc",
                    "🛠️ El aviso «¿Empezar un documento nuevo?» es ahora un diálogo dentro de la app acorde al tema oscuro, en lugar del cuadro de confirmación nativo del navegador (Esc cancela, Intro confirma)",
                ],
                "1.5.3": [
                    "➕ Un enlace Changelog en la barra superior (junto a Privacy) que abre la página de «Novedades» de la app",
                ],
                "1.5.2": [
                    "➕ Una forma más sencilla de crear degradados: al elegir el relleno Gradient ahora se empieza con Quick looks de un clic (Top light, Glow, Sheen, Diagonal, Fade out), un par de colores De/A con un interruptor Fade y un panel de dirección (las flechas fijan una dirección lineal, el punto central lo hace radial). El editor completo de varias paradas (offsets, alfa por parada, coordenadas exactas) pasa a una sección Avanzado y se mantiene sincronizado. Los controles sencillos reestilizan todas las capas de degradado seleccionadas a la vez",
                    "🔨 La opción de relleno Gradient ahora siempre está visible: el control Solid / Embossed / Gradient se movió a su propia línea de ancho completo, así que «Gradient» ya no se recorta en el borde derecho del inspector",
                ],
                "1.5.1": [
                    "🛠️ Luz puntual (radial): la Intensidad ahora controla cuánto llega la sombra, con una caída más suave. Al subirla, la sombra se desplaza hacia dentro (al máximo pasa el centro del lienzo, oscureciendo el centro y el lado opuesto); menos intensidad mantiene el centro iluminado",
                    "🔨 La luz distante (direccional) ahora resalta tanto como la puntual, y su control de Intensidad tiene un efecto claro. El biselado se construye por forma a lo largo de la dirección de la luz y se concentra en el interior de la forma, así que los iconos con luz distante se ven en 3D y notablemente más resaltados que antes",
                ],
                "1.5.0": [
                    "➕ Rellenos de degradado reales por capa: un nuevo modo Gradient (junto a Solid y Embossed) con tipo lineal o radial, una lista editable de varias paradas (color, alfa por parada y offset) y geometría numérica. Los degradados se importan desde SVG y Android VectorDrawable en lugar de aplanarse a un solo color, se conservan en el archivo de proyecto y siguen el movimiento, escala y volteo de la capa. Una acción «duplicar como superposición de degradado» apila una base con relieve y una capa de degradado para que una forma pueda tener ambas",
                    "➕ Vistas previas de enlaces y metadatos de búsqueda: compartir la URL en vivo ahora muestra un título, un resumen y el icono de la app (etiquetas Open Graph y Twitter card) en vez de un enlace simple",
                    "🛠️ El relieve ahora es opcional: las capas nuevas y el arte importado llegan como rellenos Solid planos en el color de origen en lugar de resaltarse automáticamente. Aplica Embossed por capa para el aspecto 3D; el ejemplo integrado sigue con relieve para mostrarlo",
                    "🔨 El ancho de trazo ahora escala con la capa, así que al escalar una forma con trazo su contorno se mantiene proporcional en la vista previa y en la exportación a PNG y VectorDrawable",
                ],
                "1.4.0": [
                    "➕ Escala por capa: un control Scale cambia el tamaño de la(s) capa(s) seleccionada(s) en porcentaje (100 = original). Una capa escala respecto a su propio centro; varias capas seleccionadas escalan juntas respecto a su centro común. No destructivo (guardado como transformación de capa), con un interruptor de enlace para escalar X e Y de forma independiente",
                    "➕ Voltear capas: Flip H y Flip V reflejan la(s) capa(s) seleccionada(s); varias capas se voltean juntas respecto a su centro común, y el volteo no es destructivo",
                    "➕ Más eventos anónimos de uso y errores enviados a TelemetryDeck (export, abrir, importar, nuevo, guardar, deshacer, rehacer y errores), junto a la vista de página existente (consulta la política de privacidad)",
                    "➕ Un enlace Privacy en la barra superior de la app que abre su política de privacidad",
                    "🔨 Los rellenos de degradado importados ahora toman un color base representativo de las paradas del degradado en lugar de un gris plano",
                    "🔨 Se corrigieron IDs de capa duplicados al importar a un proyecto cargado, que podían hacer que seleccionar una capa seleccionara otra; los IDs ahora se desduplican al cargar",
                ],
                "1.3.0": [
                    "➕ Distancia de sombra por capa: un control Distance en la sección Cast shadow fija cuánto proyecta cada capa su sombra (su altura aparente sobre la superficie). Multiplica la longitud automática de la luz, así que 1× mantiene el aspecto anterior y valores mayores elevan más la capa sobre la superficie",
                    "➕ La app ahora abre con un proyecto predeterminado incluido (el icono de la app) en lugar del ejemplo integrado, y muestra ese icono junto al título en la barra superior y como favicon del navegador",
                    "➕ Analíticas de uso anónimas mediante el SDK web de TelemetryDeck, respetuoso con la privacidad: una vista de página por carga, sin cookies (consulta la política de privacidad)",
                    "🔨 Hacer clic en el lienzo ahora alterna la selección entre capas superpuestas; comprueba la geometría real de la capa, así que el objetivo de arrastre invisible de una capa ya no intercepta clics destinados a una forma por encima o por debajo",
                ],
                "1.2.1": [
                    "🔨 Con Link W/H activado, editar una dimensión del lienzo ahora también actualiza el valor del otro campo (el lienzo ya se redimensionaba correctamente; solo el valor mostrado se retrasaba)",
                ],
                "1.2.0": [
                    "➕ Mover capas: arrastra una capa seleccionada (o varias a la vez) en el lienzo, o fija una posición exacta con los campos X/Y de la capa",
                    "➕ Haz clic en la forma de una capa en el lienzo para seleccionarla. Ctrl/⌘ y Mayús+clic amplían la selección, y hacer clic en un área vacía deselecciona",
                    "➕ Campos numéricos de Posición X/Y para colocar con precisión la luz puntual, junto al control arrastrable",
                    "🛠️ La luz ahora se mueve solo arrastrando su control; hacer clic en otra parte del lienzo ya no la reposiciona",
                    "🔨 Se corrigieron los ajustes de tamaño de lienzo que podían mostrarse parcialmente fuera de pantalla en el inspector",
                    "🔨 Se corrigieron las entradas numéricas (tamaño de lienzo, posición de luz, tamaño PNG, ancho de trazo) que se salían por el borde derecho de su panel",
                ],
                "1.1.0": [
                    "➕ Duplicar capa: un botón por fila y Ctrl/⌘+D copian la(s) capa(s) seleccionada(s), colocando cada copia justo encima de su original",
                    "➕ Redimensiona el lienzo del proyecto con los campos Ancho/Alto o ajustes (24, 108, 512, 1024), con relación de aspecto enlazada y un «Escalar contenido» opcional",
                ],
                "1.0.0": [
                    "➕ Importa gráficos SVG y Android VectorDrawable como capas editables",
                    "➕ Motor de relieve: una única luz móvil compartida controla el sombreado (la luz puntual se vuelve un degradado radial; la distante, uno lineal) con mezcla de color OKLab",
                    "➕ Materiales por capa (color, opacidad, solid o con relieve, intensidad de relieve, brillo, regla de relleno) y sombras proyectadas que se recortan con las capas inferiores",
                    "➕ Vista previa en vivo con un control de luz arrastrable y edición de selección múltiple",
                    "➕ Exporta a PNG (transparente o con fondo), Android VectorDrawable XML, SVG y JSON de proyecto reeditable",
                    "➕ Abre y guarda proyectos, comparte por enlace y deshaz/rehaz (Ctrl/⌘+Z)",
                ],
            },
        },
        ru: {
            description:
                "Освещайте векторные иконки подвижным 3D-рельефом и экспортируйте в PNG, SVG или Android VectorDrawable.",
            highlights: [
                "Ваша работа сохраняется автоматически и восстанавливается при возвращении",
                "Можно установить, работает офлайн, теперь и на Android",
            ],
            changelog: {
                "1.7.2": [
                    "🛠️ Кнопка «Установить» теперь появляется и на телефонах Android (Chrome и Edge) и устанавливает приложение по нажатию, при этом собственный баннер установки браузера подавляется, так что остаётся одна единая кнопка. На iPhone и iPad установка по-прежнему через меню «Поделиться» в Safari и «На экран Домой»",
                ],
                "1.7.1": [
                    "🛠️ Анонимная аналитика использования теперь фиксирует версию приложения, чтобы я знал, какие версии используются. Новых персональных данных нет; версия и так показана в приложении",
                ],
                "1.7.0": [
                    "➕ Ваша работа сохраняется автоматически: текущий проект хранится в браузере и восстанавливается при повторном открытии страницы, так что вы продолжаете с того места, где остановились. При открытии общей ссылки по-прежнему показывается тот общий дизайн",
                ],
                "1.6.1": [
                    "➕ Кнопка «Установить» в верхней панели: в настольных браузерах с поддержкой справа от «Export» появляется кнопка «Установить», устанавливающая приложение по клику, без автоматического запроса или баннера",
                    "🛠️ При запуске как установленного настольного приложения лишние значок и название убираются из верхней панели (их уже показывает заголовок окна); версия остаётся",
                    "🔨 Все кнопки верхней панели теперь одной высоты (кнопка переполнения «⋯» была немного ниже)",
                ],
                "1.6.0": [
                    "➕ Можно установить и работает офлайн (PWA): добавьте Icon Recomposer на главный экран или рабочий стол, и он работает полностью офлайн. После загрузки всё приложение и ваш последний используемый шаблон кэшируются, так что оно открывается без сети, а новые версии предлагают перезагрузку в одно касание",
                ],
                "1.5.8": [
                    "🛠️ При узком окне верхняя панель теперь остаётся в одну строку и перемещает не помещающиеся элементы в меню переполнения «⋯» (сначала Privacy и Changelog, затем Import и т. д.) вместо беспорядочного переноса",
                    "🔨 Весь холст всегда виден: в коротких или широких окнах он теперь масштабируется под сцену по обоим измерениям, так что верх и низ больше не обрезаются",
                ],
                "1.5.7": [
                    "🔨 Макет для телефона больше не скрывает холст: вид для телефона теперь обычная прокручиваемая страница с закреплённым сверху холстом (всегда виден) и Layers и инспектором ниже, плюс закреплённая панель инструментов с переносом кнопок",
                ],
                "1.5.6": [
                    "➕ Горячие клавиши для сохранения и открытия: Ctrl+S / ⌘S сохраняет проект, а Ctrl+O / ⌘O открывает проект или импортирует вектор",
                    "🛠️ Более широкие боковые панели (Layers с 240 до 280 px, инспектор с 300 до 360 px) для большего простора",
                ],
                "1.5.5": [
                    "➕ Масштабирование и панорамирование холста: масштаб колесом мыши или щипком двумя пальцами (к указателю, до 8×, не меньше размера вписывания), а панорамирование перетаскиванием пустого холста при увеличении, двумя пальцами или средней кнопкой мыши. Только для просмотра, поэтому все экспорты и файл проекта не затрагиваются",
                ],
                "1.5.4": [
                    "➕ Нажмите Esc, чтобы снять выделение слоёв. Если в фокусе элемент управления, первое Esc выходит из поля, а второе снимает выделение; открытый выбор цвета или диалог сначала закрывается по Esc",
                    "🛠️ Запрос «Начать новый документ?» теперь внутренний диалог в тёмной теме вместо системного окна подтверждения браузера (Esc отменяет, Enter подтверждает)",
                ],
                "1.5.3": [
                    "➕ Ссылка Changelog в верхней панели (рядом с Privacy), открывающая страницу «Что нового» приложения",
                ],
                "1.5.2": [
                    "➕ Более простой способ создавать градиенты: при выборе заливки Gradient сначала идут Quick looks в один клик (Top light, Glow, Sheen, Diagonal, Fade out), пара цветов От/До с переключателем Fade и панель направления (стрелки задают линейное направление, центральная точка делает его радиальным). Полный многоточечный редактор (смещения, прозрачность на точку, точные координаты) переезжает в раздел «Дополнительно» и остаётся синхронизированным. Простые элементы управления меняют стиль всех выбранных слоёв-градиентов сразу",
                    "🔨 Параметр заливки Gradient теперь всегда виден: элемент управления Solid / Embossed / Gradient перенесён на отдельную строку во всю ширину, так что «Gradient» больше не обрезается у правого края инспектора",
                ],
                "1.5.1": [
                    "🛠️ Точечный (радиальный) свет: Intensity теперь управляет дальностью тени с более мягким затуханием. Повышение втягивает тень внутрь (на максимуме она проходит центр холста, затемняя центр и дальнюю сторону); меньшая интенсивность оставляет центр освещённым",
                    "🔨 Удалённый (направленный) свет теперь рельефит так же сильно, как точечный, и его ползунок Intensity даёт явный эффект. Фаска строится для каждой фигуры вдоль направления света и сосредоточена внутри фигуры, так что иконки с удалённым светом выглядят объёмными и заметно более рельефными, чем раньше",
                ],
                "1.5.0": [
                    "➕ Настоящие градиентные заливки на слой: новый режим Gradient (рядом с Solid и Embossed) с линейным или радиальным типом, редактируемым списком из нескольких точек (цвет, прозрачность на точку и смещение) и числовой геометрией. Градиенты импортируются из SVG и Android VectorDrawable, а не сводятся к одному цвету, сохраняются в файле проекта и следуют за перемещением, масштабом и отражением слоя. Действие «дублировать как градиентное наложение» складывает рельефную основу и слой-градиент, так что одна фигура может иметь и то и другое",
                    "➕ Предпросмотр ссылок и поисковые метаданные: при отправке живого URL теперь показываются заголовок, описание и значок приложения (теги Open Graph и Twitter card) вместо голой ссылки",
                    "🛠️ Рельеф теперь по выбору: новые слои и импортированная графика приходят как плоские заливки Solid в исходном цвете, а не рельефятся автоматически. Применяйте Embossed к слою для 3D-вида; встроенный образец остаётся рельефным, чтобы это показать",
                    "🔨 Толщина обводки теперь масштабируется со слоем, так что при масштабировании фигуры с обводкой её контур остаётся пропорциональным в предпросмотре и при экспорте в PNG и VectorDrawable",
                ],
                "1.4.0": [
                    "➕ Масштаб на слой: элемент Scale изменяет размер выбранного слоя (слоёв) в процентах (100 = оригинал). Один слой масштабируется относительно своего центра; несколько выбранных слоёв масштабируются вместе относительно общего центра. Неразрушающе (хранится как трансформация слоя), с переключателем связи для независимого масштабирования по X и Y",
                    "➕ Отражение слоёв: Flip H и Flip V зеркалят выбранный слой (слои); несколько слоёв отражаются вместе относительно общего центра, и отражение неразрушающее",
                    "➕ Больше анонимных событий использования и ошибок отправляется в TelemetryDeck (экспорт, открытие, импорт, новый, сохранение, отмена, повтор и ошибки), наряду с существующим просмотром страницы (см. политику конфиденциальности)",
                    "➕ Ссылка Privacy в верхней панели приложения, открывающая его политику конфиденциальности",
                    "🔨 Импортированные градиентные заливки теперь берут репрезентативный базовый цвет из точек градиента вместо плоского серого",
                    "🔨 Исправлены дублирующиеся идентификаторы слоёв при импорте в загруженный проект, из-за которых выбор одного слоя мог выбирать и другой; идентификаторы теперь устраняют дубли при загрузке",
                ],
                "1.3.0": [
                    "➕ Дальность тени на слой: элемент Distance в разделе Cast shadow задаёт, как далеко каждый слой отбрасывает тень (его видимая высота над поверхностью). Он умножает автоматическую длину от света, так что 1× сохраняет прежний вид, а большие значения сильнее приподнимают слой над поверхностью",
                    "➕ Приложение теперь открывается с встроенным проектом по умолчанию (значком приложения) вместо встроенного образца и показывает этот значок рядом с заголовком в верхней панели и как favicon браузера",
                    "➕ Анонимная аналитика использования через ориентированный на конфиденциальность TelemetryDeck Web SDK: один просмотр страницы на загрузку, без cookie (см. политику конфиденциальности)",
                    "🔨 Клик по холсту теперь переключает выделение между перекрывающимися слоями; проверяется фактическая геометрия слоя, так что невидимая зона перетаскивания слоя больше не перехватывает клики, предназначенные фигуре выше или ниже",
                ],
                "1.2.1": [
                    "🔨 При включённом Link W/H редактирование одного размера холста теперь обновляет и значение другого поля (холст и так менялся правильно; отставало только отображаемое значение)",
                ],
                "1.2.0": [
                    "➕ Перемещение слоёв: перетаскивайте выбранный слой (или несколько сразу) по холсту либо задайте точную позицию в полях X/Y слоя",
                    "➕ Кликните по фигуре слоя на холсте, чтобы выбрать её. Ctrl/⌘ и Shift+клик расширяют выделение, а клик по пустой области снимает его",
                    "➕ Числовые поля Position X/Y для точного размещения точечного света, рядом с перетаскиваемым маркером",
                    "🛠️ Свет теперь перемещается только перетаскиванием своего маркера; клик в другом месте холста больше не перемещает его",
                    "🔨 Исправлены пресеты размера холста, которые могли частично отображаться за пределами экрана в инспекторе",
                    "🔨 Исправлены числовые поля (размер холста, позиция света, размер PNG, толщина обводки), выходившие за правый край панели",
                ],
                "1.1.0": [
                    "➕ Дублирование слоя: кнопка в строке и Ctrl/⌘+D копируют выбранный слой (слои), помещая каждую копию прямо над оригиналом",
                    "➕ Изменение размера холста проекта через поля Ширина/Высота или пресеты (24, 108, 512, 1024) со связанным соотношением сторон и необязательным «Масштабировать содержимое»",
                ],
                "1.0.0": [
                    "➕ Импорт графики SVG и Android VectorDrawable как редактируемых слоёв",
                    "➕ Движок рельефа: один общий подвижный источник света управляет затенением (точечный свет становится радиальным градиентом, а удалённый становится линейным) со смешением цвета OKLab",
                    "➕ Материалы на слой (цвет, непрозрачность, solid или рельеф, интенсивность рельефа, блик, правило заливки) и отбрасываемые тени, обрезаемые по нижележащим слоям",
                    "➕ Живой предпросмотр с перетаскиваемым маркером света и редактированием множественного выбора",
                    "➕ Экспорт в PNG (прозрачный или с фоном), Android VectorDrawable XML, SVG и повторно редактируемый JSON проекта",
                    "➕ Открытие и сохранение проектов, отправка по ссылке и отмена/повтор (Ctrl/⌘+Z)",
                ],
            },
        },
    },
};
