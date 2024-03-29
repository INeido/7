module.exports = {
  String: {
    // Errors
    error_general: {
      en: "An error occured, please try again later.",
      de: "Es ist ein Fehler aufgetreten, bitte später probieren.",
      hu: "Hiba történt, kérlek próbáld újra késöbb.",
      ru: "Произошла ошибка, пожалуйста, попробуйте позже.",
      es: "Ocurrió un error, por favor inténtelo de nuevo más tarde ",
    },

    // Warning
    warning_game_closed_title: {
      en: "Game closed",
      de: "Spiel beendet",
      hu: "Játék bezárva",
      ru: "Игра закрыта",
      es: "Juego cerrado",
    },
    warning_game_closed_message: {
      en: "The game has been closed. Returning to login Screen.",
      de: "Das Spiel wurde beendet. Weiter zum Anmeldebildschrim.",
      hu: "A játék be lett fejezve. Vissza a belépő ablakba.",
      ru: "Игра была закрыта. Возвращение на экран входа.",
      es: "El juego ha sido cerrado. Volver a la pantalle de inicio de sesión ",
    },

    // General interface
    button_abort: {
      en: "Abort",
      de: "Abbrechen",
      hu: "Mégse",
      ru: "Прервать",
      es: "Cancelar",
    },
    button_proceed: {
      en: "Proceed",
      de: "Weiter",
      hu: "Tovább",
      ru: "Продолжить",
      es: "Seguir",
    },
    button_okey: {
      en: "Okey",
      de: "Okey",
      hu: "Ok",
      ru: "ОК",
      es: "Vale",
    },
    button_yes: {
      en: "Yes",
      de: "Ja",
      hu: "Igen",
      ru: "Да",
      es: "Sí",
    },
    button_no: {
      en: "No",
      de: "Nein",
      hu: "Nem",
      ru: "Нет",
      es: "No",
    },

    // Login page
    warning_login_empty: {
      en: "This field is required!",
      de: "Dieses Feld wird benötigt!",
      hu: "Kérlek töltsél ki!",
      ru: "Это поле обязательно!",
      es: "Este campo es obligatorio",
    },
    warning_login_chars: {
      en: "No special characters!",
      de: "Keine speziellen Charakter!",
      hu: "Semmi speciális karakter!",
      ru: "Без специальных символов!",
      es: "Sin caracteres especiales",
    },
    label_login_name: { en: "Name", de: "Name", hu: "Név", ru: "Имя", es: "Nombre" },
    button_login_join: {
      en: "Join",
      de: "Beitreten",
      hu: "Belépés",
      ru: "Присоединиться",
      es: "Unirse",
    },
    button_login_create: {
      en: "Create",
      de: "Erstellen",
      hu: "Új szoba",
      ru: "Создать",
      es: "Crear",
    },
    menu_login_browser: {
      en: "Game Browser",
      de: "Spielsuche",
      hu: "Szoba keresö",
      ru: "Поиск игр",
      es: "Navegador de juegos",
    },
    menu_login_stats: {
      en: "Statistic",
      de: "Statistik",
      hu: "Statisztika",
      ru: "Статистика",
      es: "Estadísticas",
    },

    // Point selection page
    label_select: {
      en: "Enter Points",
      de: "Punkte eingeben",
      hu: "Pontok",
      ru: "Введите очки",
      es: "Introducir puntos",
    },
    label_wonder_select: {
      en: "Select Wonder",
      de: "Wunder auswählen",
      hu: "Csoda választás",
      ru: "Выберите чудо",
      es: "Seleccione maravilla",
    },
    label_wonder_mode: {
      en: "Select Mode",
      de: "Tageszeit auswählen",
      hu: "Napszak választás",
      ru: "Выберите режим",
      es: "Seleccionar modo",
    },
    label_wonder_select_header: {
      en: "Wonder",
      de: "Wunder",
      hu: "Csoda",
      ru: "Чудо",
      es: "Maravilla",
    },
    label_wonder_mode_header: {
      en: "Time of day",
      de: "Tageszeit",
      hu: "Napstak",
      ru: "Время суток",
      es: "Hora del día",
    },
    // Don't change 'vals'!
    select_green: {
      en: [
        { val: "Compass", label: "Compass" },
        { val: "Gear", label: "Gear" },
        { val: "Tablet", label: "Tablet" },
        { val: "Wildcard", label: "Wildcard" },
        { val: "Copy", label: "Copy" },
        { val: "Maxplus", label: "Maxplus" },
      ],
      de: [
        { val: "Compass", label: "Kompass" },
        { val: "Gear", label: "Zahnrad" },
        { val: "Tablet", label: "Tablet" },
        { val: "Wildcard", label: "Platzhalter" },
        { val: "Copy", label: "Kopie" },
        { val: "Maxplus", label: "Maxplus" },
      ],
      hu: [
        { val: "Compass", label: "Iránytű" },
        { val: "Gear", label: "Fogaskerék" },
        { val: "Tablet", label: "Tablet" },
        { val: "Wildcard", label: "Helyettesítő" },
        { val: "Copy", label: "Másolat" },
        { val: "Maxplus", label: "Maxplusz" },
      ],
      ru: [
        { val: "Compass", label: "Compass" },
        { val: "Gear", label: "Gear" },
        { val: "Tablet", label: "Tablet" },
        { val: "Wildcard", label: "Wildcard" },
        { val: "Copy", label: "Копия" },
        { val: "Maxplus", label: "Максплюс" },
      ],
      es: [
        { val: "Compass", label: "Brújula" },
        { val: "Gear", label: "Engranaje" },
        { val: "Tablet", label: "Tableta" },
        { val: "Wildcard", label: "Comodín" },
        { val: "Copy", label: "Copia" },
        { val: "Maxplus", label: "Maxplus" },
      ],
    },
    // Don't change 'vals'!
    select_modes: {
      en: [
        { val: "Day", label: "Day" },
        { val: "Night", label: "Night" },
      ],
      de: [
        { val: "Day", label: "Tag" },
        { val: "Night", label: "Nacht" },
      ],
      hu: [
        { val: "Day", label: "Nap" },
        { val: "Night", label: "Éj" },
      ],
      ru: [
        { val: "Day", label: "День" },
        { val: "Night", label: "Ночь" },
      ],
      es: [
        { val: "Day", label: "Día" },
        { val: "Night", label: "Noche" },
      ],
    },
    // Don't change 'vals'!
    select_wonders: {
      en: [
        { val: "Ephesos", label: "Ephésos" },
        { val: "Gizah", label: "Gizah" },
        { val: "Olympia", label: "Olympía" },
        { val: "Alexandria", label: "Alexandria" },
        { val: "Rhodos", label: "Rhódos" },
        { val: "Babylon", label: "Babylon" },
        { val: "Halikarnassos", label: "Halikarnassos" },
        { val: "Petra", label: "Petra" },
        { val: "Byzantium", label: "Byzantium" },
        { val: "Siracusa", label: "Siracusa" },
        { val: "Roma", label: "Roma" },
        { val: "Abu Simbel", label: "Abu Simbel" },
      ],
      de: [
        { val: "Ephesos", label: "Ephésos" },
        { val: "Gizah", label: "Gizah" },
        { val: "Olympia", label: "Olympía" },
        { val: "Alexandria", label: "Alexandria" },
        { val: "Rhodos", label: "Rhódos" },
        { val: "Babylon", label: "Babylon" },
        { val: "Halikarnassos", label: "Halikarnassos" },
        { val: "Petra", label: "Petra" },
        { val: "Byzantium", label: "Byzantion" },
        { val: "Siracusa", label: "Siracusa" },
        { val: "Roma", label: "Roma" },
        { val: "Abu Simbel", label: "Abu Simbel" },
      ],
      hu: [
        { val: "Ephesos", label: "Epheszosz" },
        { val: "Gizah", label: "Gíza" },
        { val: "Olympia", label: "Olümpia" },
        { val: "Alexandria", label: "Alexandria" },
        { val: "Rhodos", label: "Rodosz" },
        { val: "Babylon", label: "Babilon" },
        { val: "Halikarnassos", label: "Halikarnasszosz" },
        { val: "Petra", label: "Pétra" },
        { val: "Byzantium", label: "Bizánc" },
        { val: "Siracusa", label: "Siracusa" },
        { val: "Roma", label: "Róma" },
        { val: "Abu Simbel", label: "Abu Simbel" },
      ],
      ru: [
        { val: "Ephesos", label: "Ephésos" },
        { val: "Gizah", label: "Gizah" },
        { val: "Olympia", label: "Olympía" },
        { val: "Alexandria", label: "Alexandria" },
        { val: "Rhodos", label: "Rhódos" },
        { val: "Babylon", label: "Babylon" },
        { val: "Halikarnassos", label: "Halikarnassos" },
        { val: "Petra", label: "Petra" },
        { val: "Byzantium", label: "Byzantion" },
        { val: "Siracusa", label: "Siracusa" },
        { val: "Roma", label: "Roma" },
        { val: "Abu Simbel", label: "Abu Simbel" },
      ],
      es: [
        { val: "Ephesos", label: "Ephésos" },
        { val: "Gizah", label: "Gizah" },
        { val: "Olympia", label: "Olympía" },
        { val: "Alexandria", label: "Alexandria" },
        { val: "Rhodos", label: "Rhódos" },
        { val: "Babylon", label: "Babylon" },
        { val: "Halikarnassos", label: "Halikarnassos" },
        { val: "Petra", label: "Petra" },
        { val: "Byzantium", label: "Byzantion" },
        { val: "Siracusa", label: "Siracusa" },
        { val: "Roma", label: "Roma" },
        { val: "Abu Simbel", label: "Abu Simbel" },
      ],
    },
    label_wonder: {
      en: "Wonder",
      de: "Wunder",
      hu: "Csoda",
      ru: "Чудо",
      es: "Maravilla",
    },
    label_money: { en: "Wealth", de: "Geld", hu: "Pénz", ru: "Богатство", es: "Dinero" },
    label_red: {
      en: "Military",
      de: "Militär",
      hu: "Katonaság",
      ru: "Военная",
      es: "Militar",
    },
    label_blue: {
      en: "Monument",
      de: "Monument",
      hu: "Műemlék",
      ru: "Монумент",
      es: "Monumento",
    },
    label_yellow: {
      en: "Trade",
      de: "Handel",
      hu: "Kereskedelem",
      ru: "Торговля",
      es: "Comercio",
    },
    label_green: {
      en: "Infrastructure",
      de: "Infrastruktur",
      hu: "Infrastruktúra",
      ru: "Инфраструктура",
      es: "Infraestructura",
    },
    label_purple: { en: "Guild", de: "Gilde", hu: "Céh", ru: "Гильдия", es: "Gremio" },
    label_black: {
      en: "Underworld",
      de: "Unterwelt",
      hu: "Alvilág",
      ru: "Подземный мир",
      es: "Inframundo",
    },
    label_white: {
      en: "Leaders",
      de: "Anführer",
      hu: "Vezetők",
      ru: "Лидеры",
      es: "Líder",
    },
    label_armada0: {
      en: "Naval Battles",
      de: "Seeschlachten",
      hu: "Haditengerészet",
      ru: "Морские битвы",
      es: "Batallas navales",
    },
    label_armada1: {
      en: "Harbour",
      de: "Hafen",
      hu: "Kikötő",
      ru: "Гавань",
      es: "Puerto",
    },
    label_sum: { en: "Sum", de: "Summe", hu: "Összeg", ru: "Сумма", es: "Suma" },
    label_selectneighbouring: {
      en: "Select Neighbouring",
      de: "Nachbar wählen",
      hu: "Szomszéd kiválasztása",
      ru: "Выбрать соседний",
      es: "Seleccionar vecino",
    },
    label_calculate: {
      en: "Calculate",
      de: "Berechnen",
      hu: "Számítás",
      ru: "Рассчитать",
      es: "Calcular",
    },
    // Menu
    menu_green_calc: {
      en: "Green Calculator",
      de: "Grün Rechner",
      hu: "Zöld számláló",
      ru: "Зеленый калькулятор",
      es: "Calculadora verde",
    },
    menu_players_ingame: {
      en: "Players",
      de: "Spieler",
      hu: "Játékosok",
      ru: "Игроки",
      es: "Jugadores",
    },

    // Score table page
    // Row-Headers
    label_table_player: {
      en: "Player",
      de: "Spieler",
      hu: "Játékos",
      ru: "Игрок",
      es: "Jugador",
    },
    label_table_wonder: {
      en: "Wonder",
      de: "Wunder",
      hu: "Csodák",
      ru: "Чудо",
      es: "Maravilla",
    },
    label_table_mode: {
      en: "Mode",
      de: "Tageszeit",
      hu: "Mód",
      ru: "Режим",
      es: "Modo",
    },
    // Lock game message
    unlock_title: {
      en: "Open current game?",
      de: "Spiel öffnen?",
      hu: "Szoba megnyitása?",
      ru: "Открыть текущую игру?",
      es: "¿Abrir el juego actual?",
    },
    unlock_message: {
      en: "Game will be opened for players to join.",
      de: "Das Spiel wird geöffnet für Spieler zum beitreten.",
      hu: "A szoba meg lesz nyitva.",
      ru: "Игра будет открыта для присоединения игроков.",
      es: "El juego se abrirá para que los jugadores se unan.",
    },
    lock_title: {
      en: "Close current game?",
      de: "Spiel beenden?",
      hu: "Szoba bezárása?",
      ru: "Закрыть текущую игру?",
      es: "¿Abrir el juego actual?",
    },
    lock_message: {
      en: "This will close the game and kick current players.",
      de: "Spiel wird geschlossen und Spieler gekickt.",
      hu: "A szoba be lesz zárva.",
      ru: "Это закроет игру и выгонит текущих игроков.",
      es: "Esto cerrará el jugeo y expulará a los jugadores actuales",
    },

    // Charts
    chart_scores_per_player_per_category: {
      en: "Scores Per Player Per Category",
      de: "Punkteverteilung pro Spieler pro Kategorie",
      hu: "Pontszámok játékosonként kategóriánként",
      ru: "Баллы по игрокам по категориям",
      es: "Puntuaciones por jugador por categoría",
    },
    chart_sum_scores_per_player: {
      en: "Sum of Scores Per Player",
      de: "Summe der Punkte pro Spieler",
      hu: "Összes pontszám játékosonként",
      ru: "Сумма баллов по игрокам",
      es: "Suma de puntuaciones por jugador",
    },
    chart_daynight_percentage: {
      en: "Day & Night Percentage",
      de: "Tag & Nacht Prozentsatz",
      hu: "Nappal és Éjjel arány",
      ru: "Процент дня и ночи",
      es: "Porcentaje de Día y Noche",
    },
    chart_self_scores_per_category: {
      en: "Self Scores Per Category",
      de: "Eigene Punkte pro Kategorie",
      hu: "Saját pontszámok kategóriánként",
      ru: "Самостоятельные баллы по категориям",
      es: "Puntuaciones propias por categoría",
    },

    // Game Browser subpage
    browse_title: {
      en: "Game Browser",
      de: "Spielsuche",
      hu: "Játékböngészböngésző",
      ru: "Поиск игр",
      es: "Navegador de juegos",
    },
    browse_id: { en: "ID", de: "ID", hu: "ID", ru: "ID", es: "ID" },
    browse_locked: {
      en: "Locked",
      de: "Gesperrt",
      hu: "Zárt",
      ru: "Закрыто",
      es: "Bloqueado",
    },
    browse_date: { en: "Date", de: "Datum", hu: "Dátum", ru: "Дата", es: "Fecha" },

    // Languages
    lang_english: {
      en: "English",
      de: "Englisch",
      hu: "Angol",
      ru: "Английский",
      es: "Inglés",
    },
    lang_german: { en: "German", de: "Deutsch", hu: "Német", ru: "Немецкий", es: "Alemán" },
    lang_hungarian: {
      en: "Hungarian",
      de: "Ungarisch",
      hu: "Magyar",
      ru: "Венгерский",
      es: "Húngaro",
    },
    lang_russian: {
      en: "Russian",
      de: "Russisch",
      hu: "Orosz",
      ru: "Русский",
      es: "Ruso",
    },
    lang_spanish: {
      en: "Spanish",
      de: "Spanisch",
      hu: "Spanyol",
      ru: "Испанский",
      es: "Español",
    },
    lang_language: {
      en: "Language",
      de: "Sprache",
      hu: "Nyelv",
      ru: "Язык",
      es: "Idioma",
    },
    lang_change_lang: {
      en: "Change Language",
      de: "Sprache wechseln",
      hu: "Válassz nyelvet",
      ru: "Сменить язык",
      es: "Cambiar Idioma",
    },
  },
  DefaultScores: {
    wonder_name: "",
    wonder_mode: "",
    player_name: "",
    wonder: "",
    money: "",
    red: "",
    blue: "",
    yellow: "",
    green: "",
    purple: "",
    black: "",
    white: "",
    armada0: "",
    armada1: "",
    sum: "",
  },
};
