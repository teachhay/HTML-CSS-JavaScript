//#region Data Set
var Month = {
    0: "January",
    1: "Feburay",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
};

var Day = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Satursday",
};

var cities = {
    "Abidjan" : "Africa/Abidjan",
    "Accra" : "Africa/Accra",
    "Algiers" : "Africa/Algiers",
    "Bissau" : "Africa/Bissau",
    "Cairo" : "Africa/Cairo",
    "Casablanca" : "Africa/Casablanca",
    "Ceuta" : "Africa/Ceuta",
    "El Aaiun" : "Africa/El_Aaiun",
    "Johannesburg" : "Africa/Johannesburg",
    "Juba" : "Africa/Juba",
    "Khartou" : "Africa/Khartoum",
    "Lagos" : "Africa/Lagos",
    "Maputo" : "Africa/Maputo",
    "Monrovia" : "Africa/Monrovia",
    "Nairobi" : "Africa/Nairobi",
    "Ndjamena" : "Africa/Ndjamena",
    "Sao Tom" : "Africa/Sao_Tome",
    "Tripoli" : "Africa/Tripoli",
    "Tunis" : "Africa/Tunis",
    "Windhoek" : "Africa/Windhoek",
    "Adak" : "America/Adak",
    "Anchorage" : "America/Anchorage",
    "Araguaina" : "America/Araguaina",
    "Buenos Aires" : "America/Argentina/Buenos_Aires",
    "Catamarca" : "America/Argentina/Catamarca",
    "Cordoba" : "America/Argentina/Cordoba",
    "Jujuy" : "America/Argentina/Jujuy",
    "La Rioja" : "America/Argentina/La_Rioja",
    "Mendoza" : "America/Argentina/Mendoza",
    "Rio Gallegos" : "America/Argentina/Rio_Gallegos",
    "Salta" : "America/Argentina/Salta",
    "San Juan" : "America/Argentina/San_Juan",
    "San Luis" : "America/Argentina/San_Luis",
    "Tucuman" : "America/Argentina/Tucuman",
    "Ushuaia" : "America/Argentina/Ushuaia",
    "Asuncion" : "America/Asuncion",
    "Atikokan" : "America/Atikokan",
    "Bahia" : "America/Bahia",
    "Bahia Banderas" : "America/Bahia_Banderas",
    "Barbados" : "America/Barbados",
    "Belem" : "America/Belem",
    "Belize" : "America/Belize",
    "Blanc-Sablon" : "America/Blanc-Sablon",
    "Boa Vista" : "America/Boa_Vista",
    "Bogota" : "America/Bogota",
    "Boise" : "America/Boise",
    "Boise" : "America/Cambridge_Bay",
    "Campo Grande" : "America/Campo_Grande",
    "Cancun" : "America/Cancun",
    "Caracas" : "America/Caracas",
    "Cayenne" : "America/Cayenne",
    "Chicago" : "America/Chicago",
    "Chihuahua" : "America/Chihuahua",
    "Costa Rica" : "America/Costa_Rica",
    "Creston" : "America/Creston",
    "Cuiaba" : "America/Cuiaba",
    "Curacao" : "America/Curacao",
    "Danmarkshavn" : "America/Danmarkshavn",
    "Dawson" : "America/Dawson",
    "Dawson Creek" : "America/Dawson_Creek",
    "Denver" : "America/Denver",
    "Detroit" : "America/Detroit",
    "Edmonton" : "America/Edmonton",
    "Eirunepe" : "America/Eirunepe",
    "El Salvador" : "America/El_Salvador",
    "Fort Nelson" : "America/Fort_Nelson",
    "Fortaleza" : "America/Fortaleza",
    "Glace Bay" : "America/Glace_Bay",
    "Goose Bay" : "America/Goose_Bay",
    "Grand Turk" : "America/Grand_Turk",
    "Guatemala" : "America/Guatemala",
    "Guayaquil" : "America/Guayaquil",
    "Guyana" : "America/Guyana",
    "Halifax" : "America/Halifax",
    "Havana" : "America/Havana",
    "Hermosillo" : "America/Hermosillo",
    "Indianapolis" : "America/Indiana/Indianapolis",
    "Knox" : "America/Indiana/Knox",
    "Marengo" : "America/Indiana/Marengo",
    "Petersburg" : "America/Indiana/Petersburg",
    "Tell City" : "America/Indiana/Tell_City",
    "Vevay" : "America/Indiana/Vevay",
    "Vincennes" : "America/Indiana/Vincennes",
    "Winamac" : "America/Indiana/Winamac",
    "Inuvik" : "America/Inuvik",
    "Iqaluit" : "America/Iqaluit",
    "Jamaica" : "America/Jamaica",
    "Juneau" : "America/Juneau",
    "Louisville" : "America/Kentucky/Louisville",
    "Monticello" : "America/Kentucky/Monticello",
    "La Paz" : "America/La_Paz",
    "Lima" : "America/Lima",
    "Los Angeles" : "America/Los_Angeles",
    "Maceio" : "America/Maceio",
    "Managua" : "America/Managua",
    "Manaus" : "America/Manaus",
    "Martinique" : "America/Martinique",
    "Matamoros" : "America/Matamoros",
    "Mazatlan" : "America/Mazatlan",
    "Menominee" : "America/Menominee",
    "Merida" : "America/Merida",
    "Metlakatla" : "America/Metlakatla",
    "Mexico City" : "America/Mexico_City",
    "Miquelon" : "America/Miquelon",
    "Moncton" : "America/Moncton",
    "Monterrey" : "America/Monterrey",
    "Montevideo" : "America/Montevideo",
    "Nassau" : "America/Nassau",
    "New York" : "America/New_York",
    "Nipigon" : "America/Nipigon",
    "Nome" : "America/Nome",
    "Noronha" : "America/Noronha",
    "Beulah" : "America/North_Dakota/Beulah",
    "Center" : "America/North_Dakota/Center",
    "New Salem" : "America/North_Dakota/New_Salem",
    "Nuuk" : "America/Nuuk",
    "Ojinaga" : "America/Ojinaga",
    "Panama" : "America/Panama",
    "Pangnirtung" : "America/Pangnirtung",
    "Paramaribo" : "America/Paramaribo",
    "Phoenix" : "America/Phoenix",
    "Port-au-Prince" : "America/Port-au-Prince",
    "Port of Spain" : "America/Port_of_Spain",
    "Porto Velho" : "America/Porto_Velho",
    "Puerto Rico" : "America/Puerto_Rico",
    "Punta Arenas" : "America/Punta_Arenas",
    "Rainy River" : "America/Rainy_River",
    "Rankin Inlet" : "America/Rankin_Inlet",
    "Recife" : "America/Recife",
    "Regina" : "America/Regina",
    "Resolute" : "America/Resolute",
    "Rio Branco" : "America/Rio_Branco",
    "Santarem" : "America/Santarem",
    "Santiago" : "America/Santiago",
    "Santo Domingo" : "America/Santo_Domingo",
    "Sao Paulo" : "America/Sao_Paulo",
    "Scoresbysund" : "America/Scoresbysund",
    "Sitka" : "America/Sitka",
    "St Johns" : "America/St_Johns",
    "Swift Current" : "America/Swift_Current",
    "Tegucigalpa" : "America/Tegucigalpa",
    "Thule" : "America/Thule",
    "Thunder Bay" : "America/Thunder_Bay",
    "Tijuana" : "America/Tijuana",
    "Toronto" : "America/Toronto",
    "Vancouver" : "America/Vancouver",
    "Whitehorse" : "America/Whitehorse",
    "Winnipeg" : "America/Winnipeg",
    "Yakutat" : "America/Yakutat",
    "Yellowknife" : "America/Yellowknife",
    "Casey" : "Antarctica/Casey",
    "Davis" : "Antarctica/Davis",
    "DumontDUrville" : "Antarctica/DumontDUrville",
    "Macquarie" : "Antarctica/Macquarie",
    "Mawson" : "Antarctica/Mawson",
    "Palmer" : "Antarctica/Palmer",
    "Rothera" : "Antarctica/Rothera",
    "Syowa" : "Antarctica/Syowa",
    "Troll" : "Antarctica/Troll",
    "Vostok" : "Antarctica/Vostok",
    "Almaty" : "Asia/Almaty",
    "Amman" : "Asia/Amman",
    "Anadyr" : "Asia/Anadyr",
    "Aqtau" : "Asia/Aqtau",
    "Aqtobe" : "Asia/Aqtobe",
    "Ashgabat" : "Asia/Ashgabat",
    "Atyrau" : "Asia/Atyrau",
    "Baghdad" : "Asia/Baghdad",
    "Baku" : "Asia/Baku",
    "Bangkok" : "Asia/Bangkok",
    "Barnaul" : "Asia/Barnaul",
    "Beirut" : "Asia/Beirut",
    "Bishkek" : "Asia/Bishkek",
    "Brunei" : "Asia/Brunei",
    "Chita" : "Asia/Chita",
    "Choibalsan" : "Asia/Choibalsan",
    "Colombo" : "Asia/Colombo",
    "Damascus" : "Asia/Damascus",
    "Dhaka" : "Asia/Dhaka",
    "Dili" : "Asia/Dili",
    "Dubai" : "Asia/Dubai",
    "Dushanbe" : "Asia/Dushanbe",
    "Famagusta" : "Asia/Famagusta",
    "Gaza" : "Asia/Gaza",
    "Hebron" : "Asia/Hebron",
    "Ho Chi Minh" : "Asia/Ho_Chi_Minh",
    "Hong Kong" : "Asia/Hong_Kong",
    "Hovd" : "Asia/Hovd",
    "Irkutsk" : "Asia/Irkutsk",
    "Jakarta" : "Asia/Jakarta",
    "Jayapura" : "Asia/Jayapura",
    "Jerusalem" : "Asia/Jerusalem",
    "Kabul" : "Asia/Kabul",
    "Kamchatka" : "Asia/Kamchatka",
    "Karachi" : "Asia/Karachi",
    "Kathmandu" : "Asia/Kathmandu",
    "Khandyga" : "Asia/Khandyga",
    "Kolkata" : "Asia/Kolkata",
    "Krasnoyarsk" : "Asia/Krasnoyarsk",
    "Kuala Lumpur" : "Asia/Kuala_Lumpur",
    "Kuching" : "Asia/Kuching",
    "Macau" : "Asia/Macau",
    "Magadan" : "Asia/Magadan",
    "Makassar" : "Asia/Makassar",
    "Manila" : "Asia/Manila",
    "Nicosia" : "Asia/Nicosia",
    "Phnom Penh" : "Asia/Phnom_Penh",
    "Novokuznetsk" : "Asia/Novokuznetsk",
    "Novosibirsk" : "Asia/Novosibirsk",
    "Omsk" : "Asia/Omsk",
    "Oral" : "Asia/Oral",
    "Pontianak" : "Asia/Pontianak",
    "Pyongyang" : "Asia/Pyongyang",
    "Qatar" : "Asia/Qatar",
    "Qostanay" : "Asia/Qostanay",
    "Qyzylorda" : "Asia/Qyzylorda",
    "Riyadh" : "Asia/Riyadh",
    "Sakhalin" : "Asia/Sakhalin",
    "Samarkand" : "Asia/Samarkand",
    "Seoul" : "Asia/Seoul",
    "Shanghai" : "Asia/Shanghai",
    "Singapore" : "Asia/Singapore",
    "Srednekolymsk" : "Asia/Srednekolymsk",
    "Taipei" : "Asia/Taipei",
    "Tashkent" : "Asia/Tashkent",
    "Tbilisi" : "Asia/Tbilisi",
    "Tehran" : "Asia/Tehran",
    "Thimphu" : "Asia/Thimphu",
    "Tokyo" : "Asia/Tokyo",
    "Tomsk" : "Asia/Tomsk",
    "Ulaanbaatar" : "Asia/Ulaanbaatar",
    "Urumqi" : "Asia/Urumqi",
    "Ust-Nera" : "Asia/Ust-Nera",
    "Vladivostok" : "Asia/Vladivostok",
    "Yakutsk" : "Asia/Yakutsk",
    "Yangon" : "Asia/Yangon",
    "Yekaterinburg" : "Asia/Yekaterinburg",
    "Yerevan" : "Asia/Yerevan",
    "Azores" : "Atlantic/Azores",
    "Bermuda" : "Atlantic/Bermuda",
    "Canary" : "Atlantic/Canary",
    "Cape Verde" : "Atlantic/Cape_Verde",
    "Faroe" : "Atlantic/Faroe",
    "Madeira" : "Atlantic/Madeira",
    "Reykjavik" : "Atlantic/Reykjavik",
    "South Georgia" : "Atlantic/South_Georgia",
    "Stanley" : "Atlantic/Stanley",
    "Adelaide" : "Australia/Adelaide",
    "Brisbane" : "Australia/Brisbane",
    "Broken Hill" : "Australia/Broken_Hill",
    "Currie" : "Australia/Currie",
    "Darwin" : "Australia/Darwin",
    "Eucla" : "Australia/Eucla",
    "Hobart" : "Australia/Hobart",
    "Lindeman" : "Australia/Lindeman",
    "Lord Howe" : "Australia/Lord_Howe",
    "Melbourne" : "Australia/Melbourne",
    "Perth" : "Australia/Perth",
    "Sydney" : "Australia/Sydney",
    "Amsterdam" : "Europe/Amsterdam",
    "Andorra" : "Europe/Andorra",
    "Astrakhan" : "Europe/Astrakhan",
    "Athens" : "Europe/Athens",
    "Belgrade" : "Europe/Belgrade",
    "Berlin" : "Europe/Berlin",
    "Brussels" : "Europe/Brussels",
    "Bucharest" : "Europe/Bucharest",
    "Budapest" : "Europe/Budapest",
    "Chisinau" : "Europe/Chisinau",
    "Copenhagen" : "Europe/Copenhagen",
    "Dublin" : "Europe/Dublin",
    "Gibraltar" : "Europe/Gibraltar",
    "Helsinki" : "Europe/Helsinki",
    "Istanbul" : "Europe/Istanbul",
    "Kaliningrad" : "Europe/Kaliningrad",
    "Kiev" : "Europe/Kiev",
    "Kirov" : "Europe/Kirov",
    "Lisbon" : "Europe/Lisbon",
    "London" : "Europe/London",
    "Luxembourg" : "Europe/Luxembourg",
    "Madrid" : "Europe/Madrid",
    "Malta" : "Europe/Malta",
    "Minsk" : "Europe/Minsk",
    "Monaco" : "Europe/Monaco",
    "Moscow" : "Europe/Moscow",
    "Oslo" : "Europe/Oslo",
    "Paris" : "Europe/Paris",
    "Prague" : "Europe/Prague",
    "Riga" : "Europe/Riga",
    "Rome" : "Europe/Rome",
    "Samara" : "Europe/Samara",
    "Saratov" : "Europe/Saratov",
    "Simferopol" : "Europe/Simferopol",
    "Sofia" : "Europe/Sofia",
    "Stockholm" : "Europe/Stockholm",
    "Stockholm" : "Europe/Tallinn",
    "Tirane" : "Europe/Tirane",
    "Ulyanovsk" : "Europe/Ulyanovsk",
    "Uzhgorod" : "Europe/Uzhgorod",
    "Vienna" : "Europe/Vienna",
    "Vilnius" : "Europe/Vilnius",
    "Volgograd" : "Europe/Volgograd",
    "Warsaw" : "Europe/Warsaw",
    "Zaporozhye" : "Europe/Zaporozhye",
    "Zurich" : "Europe/Zurich",
    "Chagos" : "Indian/Chagos",
    "Christmas" : "Indian/Christmas",
    "Cocos" : "Indian/Cocos",
    "Kerguelen" : "Indian/Kerguelen",
    "Mahe" : "Indian/Mahe",
    "Maldives" : "Indian/Maldives",
    "Mauritius" : "Indian/Mauritius",
    "Reunion" : "Indian/Reunion",
    "Apia" : "Pacific/Apia",
    "Auckland" : "Pacific/Auckland",
    "Bougainville" : "Pacific/Bougainville",
    "Chatham" : "Pacific/Chatham",
    "Chuuk" : "Pacific/Chuuk",
    "Easter" : "Pacific/Easter",
    "Efate" : "Pacific/Efate",
    "Enderbury" : "Pacific/Enderbury",
    "Fakaofo" : "Pacific/Fakaofo",
    "Fiji" : "Pacific/Fiji",
    "Funafuti" : "Pacific/Funafuti",
    "Galapagos" : "Pacific/Galapagos",
    "Gambier" : "Pacific/Gambier",
    "Guadalcanal" : "Pacific/Guadalcanal",
    "Guam" : "Pacific/Guam",
    "Honolulu" : "Pacific/Honolulu",
    "Kiritimati" : "Pacific/Kiritimati",
    "Kosrae" : "Pacific/Kosrae",
    "Kwajalein" : "Pacific/Kwajalein",
    "Majuro" : "Pacific/Majuro",
    "Marquesas" : "Pacific/Marquesas",
    "Nauru" : "Pacific/Nauru",
    "Niue" : "Pacific/Niue",
    "Norfolk" : "Pacific/Norfolk",
    "Noumea" : "Pacific/Noumea",
    "Pago Pago" : "Pacific/Pago_Pago",
    "Palau" : "Pacific/Palau",
    "Pitcairn" : "Pacific/Pitcairn",
    "Pohnpei" : "Pacific/Pohnpei",
    "Port Moresby" : "Pacific/Port_Moresby",
    "Rarotonga" : "Pacific/Rarotonga",
    "Tahiti" : "Pacific/Tahiti",
    "Tarawa" : "Pacific/Tarawa",
    "Tongatapu" : "Pacific/Tongatapu",
    "Wake" : "Pacific/Wake",
    "Wallis" : "Pacific/Wallis",
}

var classlist = {
    "card0" : "card0",
    "card1" : "card1",
    "card2" : "card2",
    "card3" : "card3",
    "card4" : "card4",
}
//#endregion

//#region Other Function
function flipImage(){
    if(isDark){
        return "images/";
    }
    else{
        return "images/darkicon/";
    }
}

function getDate(unixtime, timezone) {
    return new Date(((unixtime - 3600) + (new Date().getTimezoneOffset() * 60 + timezone)) * 1000);
}

function showDate(date) {
    return date == 1 ? "st" : date == 2 ? "nd" : date == 3 ? "rd" : "th";
}

function getwindDirection(dreg) {
    var option = {
        N: ["348.75", "11.25"],
        NNE: ["11.25", "33.75"],
        NE: ["33.75", "56.25"],
        ENE: ["56.25", "78.75"],
        E: ["78.75", "101.25"],
        ESE: ["101.25", "123.75"],
        SE: ["123.75", "146.25"],
        SSE: ["146.25", "168.75"],
        S: ["168.75", "191.25"],
        SSW: ["191.25", "213.75"],
        SW: ["213.75", "236.25"],
        WSW: ["236.25", "258.75"],
        W: ["258.75", "281.25"],
        WNW: ["281.25", "303.75"],
        NW: ["303.75", "326.25"],
        NNW: ["326.25", "348.75"],
    }

    for (let [key, value] of Object.entries(option)) {
        if (dreg >= value[0] && dreg <= value[1]) {
            return key;
        }
    }
}

function getWind(deg) {
    if (deg > 11.25 && deg < 33.75) {
        return "NNE";
    } else if (deg > 33.75 && deg < 56.25) {
        return "ENE";
    } else if (deg > 56.25 && deg < 78.75) {
        return "E";
    } else if (deg > 78.75 && deg < 101.25) {
        return "ESE";
    } else if (deg > 101.25 && deg < 123.75) {
        return "ESE";
    } else if (deg > 123.75 && deg < 146.25) {
        return "SE";
    } else if (deg > 146.25 && deg < 168.75) {
        return "SSE";
    } else if (deg > 168.75 && deg < 191.25) {
        return "S";
    } else if (deg > 191.25 && deg < 213.75) {
        return "SSW";
    } else if (deg > 213.75 && deg < 236.25) {
        return "SW";
    } else if (deg > 236.25 && deg < 258.75) {
        return "WSW";
    } else if (deg > 258.75 && deg < 281.25) {
        return "W";
    } else if (deg > 281.25 && deg < 303.75) {
        return "WNW";
    } else if (deg > 303.75 && deg < 326.25) {
        return "NW";
    } else if (deg > 326.25 && deg < 348.75) {
        return "NNW";
    } else {
        return "N";
    }
}

function darkmode() {
    if (isDark) {
        modeToggle.classList.remove("btn-dark");
        modeToggle.classList.add("btn-light");

        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="darkstyle.css" onload="document.documentElement.style.display = \'\'">'
        );

        isDark = false;
    }
    else {
        modeToggle.classList.remove("btn-light");
        modeToggle.classList.add("btn-dark");

        document.head.insertAdjacentHTML(
            'beforeend',
            '<link rel="stylesheet" href="style.css" onload="document.documentElement.style.display = \'\'">'
        );

        isDark = true;
    }
}
//#endregion
 