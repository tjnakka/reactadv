import React, {Component} from 'react';
import { render } from 'react-dom';


const rawAllCountries = [
    [
      "Afghanistan",
      "af",
      "93"
    ],
    [
      "Albania",
      "al",
      "355"
    ],
    [
      "Algeria ",
      "dz",
      "213"
    ],
    [
      "American Samoa",
      "as",
      "1684"
    ],
    [
      "Andorra",
      "ad",
      "376"
    ],
    [
      "Angola",
      "ao",
      "244"
    ],
    [
      "Anguilla",
      "ai",
      "1264"
    ],
    [
      "Antigua and Barbuda",
      "ag",
      "1268"
    ],
    [
      "Argentina",
      "ar",
      "54"
    ],
    [
      "Armenia",
      "am",
      "374"
    ],
    [
      "Aruba",
      "aw",
      "297"
    ],
    [
      "Australia",
      "au",
      "61",
      "+.. ... ... ..."
    ],
    [
      "Austria",
      "at",
      "43"
    ],
    [
      "Azerbaijan",
      "az",
      "994"
    ],
    [
      "Bahamas",
      "bs",
      "1242"
    ],
    [
      "Bahrain",
      "bh",
      "973"
    ],
    [
      "Bangladesh",
      "bd",
      "880"
    ],
    [
      "Barbados",
      "bb",
      "1246"
    ],
    [
      "Belarus",
      "by",
      "375"
    ],
    [
      "Belgium",
      "be",
      "32",
      "+.. ... .. .. .."
    ],
    [
      "Belize",
      "bz",
      "501"
    ],
    [
      "Benin",
      "bj",
      "229"
    ],
    [
      "Bermuda",
      "bm",
      "1441"
    ],
    [
      "Bhutan",
      "bt",
      "975"
    ],
    [
      "Bolivia",
      "bo",
      "591"
    ],
    [
      "Bosnia and Herzegovina",
      "ba",
      "387"
    ],
    [
      "Botswana",
      "bw",
      "267"
    ],
    [
      "Brazil",
      "br",
      "55"
    ],
    [
      "British Indian Ocean Territory",
      "io",
      "246"
    ],
    [
      "British Virgin Islands",
      "vg",
      "1284"
    ],
    [
      "Brunei",
      "bn",
      "673"
    ],
    [
      "Bulgaria",
      "bg",
      "359"
    ],
    [
      "Burkina Faso",
      "bf",
      "226"
    ],
    [
      "Burundi",
      "bi",
      "257"
    ],
    [
      "Cambodia",
      "kh",
      "855"
    ],
    [
      "Cameroon",
      "cm",
      "237"
    ],
    [
      "Canada",
      "ca",
      "1",
      "+. (...) ...-....",
      1,
      ["204", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]
    ],
    [
      "Cape Verde",
      "cv",
      "238"
    ],
    [
      "Caribbean Netherlands",
      "bq",
      "599",
      "",
      1
    ],
    [
      "Cayman Islands",
      "ky",
      "1345"
    ],
    [
      "Central African Republic",
      "cf",
      "236"
    ],
    [
      "Chad",
      "td",
      "235"
    ],
    [
      "Chile",
      "cl",
      "56"
    ],
    [
      "China",
      "cn",
      "86",
      "+.. ..-........"
    ],
    [
      "Colombia",
      "co",
      "57"
    ],
    [
      "Comoros",
      "km",
      "269"
    ],
    [
      "Congo",
      "cd",
      "243"
    ],
    [
      "Congo",
      "cg",
      "242"
    ],
    [
      "Cook Islands",
      "ck",
      "682"
    ],
    [
      "Costa Rica",
      "cr",
      "506",
      "+... ....-...."
    ],
    [
      "Côte d’Ivoire",
      "ci",
      "225"
    ],
    [
      "Croatia",
      "hr",
      "385"
    ],
    [
      "Cuba",
      "cu",
      "53"
    ],
    [
      "Curaçao",
      "cw",
      "599",
      "",
      0
    ],
    [
      "Cyprus",
      "cy",
      "357"
    ],
    [
      "Czech Republic",
      "cz",
      "420"
    ],
    [
      "Denmark",
      "dk",
      "45",
      "+.. .. .. .. .."
    ],
    [
      "Djibouti",
      "dj",
      "253"
    ],
    [
      "Dominica",
      "dm",
      "1767"
    ],
    [
      "Dominican Republic",
      "do",
      "1",
      "",
      2,
      ["809", "829", "849"]
    ],
    [
      "Ecuador",
      "ec",
      "593"
    ],
    [
      "Egypt",
      "eg",
      "20"
    ],
    [
      "El Salvador",
      "sv",
      "503",
      "+... ....-...."
    ],
    [
      "Equatorial Guinea",
      "gq",
      "240"
    ],
    [
      "Eritrea",
      "er",
      "291"
    ],
    [
      "Estonia",
      "ee",
      "372"
    ],
    [
      "Ethiopia",
      "et",
      "251"
    ],
    [
      "Falkland Islands",
      "fk",
      "500"
    ],
    [
      "Faroe Islands",
      "fo",
      "298"
    ],
    [
      "Fiji",
      "fj",
      "679"
    ],
    [
      "Finland",
      "fi",
      "358",
      "+... .. ... .. .."
    ],
    [
      "France",
      "fr",
      "33",
      "+.. . .. .. .. .."
    ],
    [
      "French Guiana",
      "gf",
      "594"
    ],
    [
      "French Polynesia",
      "pf",
      "689"
    ],
    [
      "Gabon",
      "ga",
      "241"
    ],
    [
      "Gambia",
      "gm",
      "220"
    ],
    [
      "Georgia",
      "ge",
      "995"
    ],
    [
      "Germany",
      "de",
      "49",
      "+.. ... ......."
    ],
    [
      "Ghana",
      "gh",
      "233"
    ],
    [
      "Gibraltar",
      "gi",
      "350"
    ],
    [
      "Greece",
      "gr",
      "30"
    ],
    [
      "Greenland",
      "gl",
      "299"
    ],
    [
      "Grenada",
      "gd",
      "1473"
    ],
    [
      "Guadeloupe",
      "gp",
      "590",
      "",
      0
    ],
    [
      "Guam",
      "gu",
      "1671"
    ],
    [
      "Guatemala",
      "gt",
      "502",
      "+... ....-...."
    ],
    [
      "Guinea",
      "gn",
      "224"
    ],
    [
      "Guinea-Bissau",
      "gw",
      "245"
    ],
    [
      "Guyana",
      "gy",
      "592"
    ],
    [
      "Haiti",
      "ht",
      "509",
      "+... ....-...."
    ],
    [
      "Honduras",
      "hn",
      "504"
    ],
    [
      "Hong Kong",
      "hk",
      "852",
      "+... .... ...."
    ],
    [
      "Hungary",
      "hu",
      "36"
    ],
    [
      "Iceland",
      "is",
      "354",
      "+... ... ...."
    ],
    [
      "India",
      "in",
      "91",
      "+.. .....-....."
    ],
    [
      "Indonesia",
      "id",
      "62"
    ],
    [
      "Iran",
      "ir",
      "98"
    ],
    [
      "Iraq",
      "iq",
      "964"
    ],
    [
      "Ireland",
      "ie",
      "353",
      "+... .. ......."
    ],
    [
      "Israel",
      "il",
      "972"
    ],
    [
      "Italy",
      "it",
      "39",
      "+.. ... ......",
      0
    ],
    [
      "Jamaica",
      "jm",
      "1876"
    ],
    [
      "Japan",
      "jp",
      "81",
      "+.. ... .. ...."
    ],
    [
      "Jordan",
      "jo",
      "962"
    ],
    [
      "Kazakhstan",
      "kz",
      "7",
      "+. ... ...-..-..",
      1
    ],
    [
      "Kenya",
      "ke",
      "254"
    ],
    [
      "Kiribati",
      "ki",
      "686"
    ],
    [
      "Kuwait",
      "kw",
      "965"
    ],
    [
      "Kyrgyzstan",
      "kg",
      "996"
    ],
    [
      "Laos",
      "la",
      "856"
    ],
    [
      "Latvia",
      "lv",
      "371"
    ],
    [
      "Lebanon",
      "lb",
      "961"
    ],
    [
      "Lesotho",
      "ls",
      "266"
    ],
    [
      "Liberia",
      "lr",
      "231"
    ],
    [
      "Libya",
      "ly",
      "218"
    ],
    [
      "Liechtenstein",
      "li",
      "423"
    ],
    [
      "Lithuania",
      "lt",
      "370"
    ],
    [
      "Luxembourg",
      "lu",
      "352"
    ],
    [
      "Macau",
      "mo",
      "853"
    ],
    [
      "Macedonia",
      "mk",
      "389"
    ],
    [
      "Madagascar",
      "mg",
      "261"
    ],
    [
      "Malawi",
      "mw",
      "265"
    ],
    [
      "Malaysia",
      "my",
      "60",
      "+.. ..-....-...."
    ],
    [
      "Maldives",
      "mv",
      "960"
    ],
    [
      "Mali",
      "ml",
      "223"
    ],
    [
      "Malta",
      "mt",
      "356"
    ],
    [
      "Marshall Islands",
      "mh",
      "692"
    ],
    [
      "Martinique",
      "mq",
      "596"
    ],
    [
      "Mauritania",
      "mr",
      "222"
    ],
    [
      "Mauritius",
      "mu",
      "230"
    ],
    [
      "Mexico",
      "mx",
      "52"
    ],
    [
      "Micronesia",
      "fm",
      "691"
    ],
    [
      "Moldova",
      "md",
      "373"
    ],
    [
      "Monaco",
      "mc",
      "377"
    ],
    [
      "Mongolia",
      "mn",
      "976"
    ],
    [
      "Montenegro",
      "me",
      "382"
    ],
    [
      "Montserrat",
      "ms",
      "1664"
    ],
    [
      "Morocco",
      "ma",
      "212"
    ],
    [
      "Mozambique",
      "mz",
      "258"
    ],
    [
      "Myanmar",
      "mm",
      "95"
    ],
    [
      "Namibia",
      "na",
      "264"
    ],
    [
      "Nauru",
      "nr",
      "674"
    ],
    [
      "Nepal",
      "np",
      "977"
    ],
    [
      "Netherlands",
      "nl",
      "31",
      "+.. .. ........"
    ],
    [
      "New Caledonia",
      "nc",
      "687"
    ],
    [
      "New Zealand",
      "nz",
      "64",
      "+.. ...-...-...."
    ],
    [
      "Nicaragua",
      "ni",
      "505"
    ],
    [
      "Niger",
      "ne",
      "227"
    ],
    [
      "Nigeria",
      "ng",
      "234"
    ],
    [
      "Niue",
      "nu",
      "683"
    ],
    [
      "Norfolk Island",
      "nf",
      "672"
    ],
    [
      "North Korea",
      "kp",
      "850"
    ],
    [
      "Northern Mariana Islands",
      "mp",
      "1670"
    ],
    [
      "Norway",
      "no",
      "47",
      "+.. ... .. ..."
    ],
    [
      "Oman",
      "om",
      "968"
    ],
    [
      "Pakistan",
      "pk",
      "92",
      "+.. ...-......."
    ],
    [
      "Palau",
      "pw",
      "680"
    ],
    [
      "Palestine",
      "ps",
      "970"
    ],
    [
      "Panama",
      "pa",
      "507"
    ],
    [
      "Papua New Guinea",
      "pg",
      "675"
    ],
    [
      "Paraguay",
      "py",
      "595"
    ],
    [
      "Peru",
      "pe",
      "51"
    ],
    [
      "Philippines",
      "ph",
      "63",
      "+.. ... ...."
    ],
    [
      "Poland",
      "pl",
      "48",
      "+.. ...-...-..."
    ],
    [
      "Portugal",
      "pt",
      "351"
    ],
    [
      "Puerto Rico",
      "pr",
      "1",
      "",
      3,
      ["787", "939"]
    ],
    [
      "Qatar",
      "qa",
      "974"
    ],
    [
      "Réunion",
      "re",
      "262"
    ],
    [
      "Romania",
      "ro",
      "40"
    ],
    [
      "Russia",
      "ru",
      "7",
      "+. ... ...-..-..",
      0
    ],
    [
      "Rwanda",
      "rw",
      "250"
    ],
    [
      "Saint Barthélemy",
      "bl",
      "590",
      "",
      1
    ],
    [
      "Saint Helena",
      "sh",
      "290"
    ],
    [
      "Saint Kitts and Nevis",
      "kn",
      "1869"
    ],
    [
      "Saint Lucia",
      "lc",
      "1758"
    ],
    [
      "Saint Martin",
      "mf",
      "590",
      "",
      2
    ],
    [
      "Saint Pierre and Miquelon",
      "pm",
      "508"
    ],
    [
      "Saint Vincent and the Grenadines",
      "vc",
      "1784"
    ],
    [
      "Samoa",
      "ws",
      "685"
    ],
    [
      "San Marino",
      "sm",
      "378"
    ],
    [
      "São Tomé and Príncipe",
      "st",
      "239"
    ],
    [
      "Saudi Arabia",
      "sa",
      "966"
    ],
    [
      "Senegal",
      "sn",
      "221"
    ],
    [
      "Serbia",
      "rs",
      "381"
    ],
    [
      "Seychelles",
      "sc",
      "248"
    ],
    [
      "Sierra Leone",
      "sl",
      "232"
    ],
    [
      "Singapore",
      "sg",
      "65",
      "+.. ....-...."
    ],
    [
      "Sint Maarten",
      "sx",
      "1721"
    ],
    [
      "Slovakia",
      "sk",
      "421"
    ],
    [
      "Slovenia",
      "si",
      "386"
    ],
    [
      "Solomon Islands",
      "sb",
      "677"
    ],
    [
      "Somalia",
      "so",
      "252"
    ],
    [
      "South Africa",
      "za",
      "27"
    ],
    [
      "South Korea",
      "kr",
      "82"
    ],
    [
      "South Sudan",
      "ss",
      "211"
    ],
    [
      "Spain",
      "es",
      "34",
      "+.. ... ... ..."
    ],
    [
      "Sri Lanka",
      "lk",
      "94"
    ],
    [
      "Sudan",
      "sd",
      "249"
    ],
    [
      "Suriname",
      "sr",
      "597"
    ],
    [
      "Swaziland",
      "sz",
      "268"
    ],
    [
      "Sweden",
      "se",
      "46",
      "+.. .. ... .. .."
    ],
    [
      "Switzerland",
      "ch",
      "41",
      "+.. .. ... .. .."
    ],
    [
      "Syria",
      "sy",
      "963"
    ],
    [
      "Taiwan",
      "tw",
      "886"
    ],
    [
      "Tajikistan",
      "tj",
      "992"
    ],
    [
      "Tanzania",
      "tz",
      "255"
    ],
    [
      "Thailand",
      "th",
      "66"
    ],
    [
      "Timor-Leste",
      "tl",
      "670"
    ],
    [
      "Togo",
      "tg",
      "228"
    ],
    [
      "Tokelau",
      "tk",
      "690"
    ],
    [
      "Tonga",
      "to",
      "676"
    ],
    [
      "Trinidad and Tobago",
      "tt",
      "1868"
    ],
    [
      "Tunisia",
      "tn",
      "216"
    ],
    [
      "Turkey",
      "tr",
      "90",
      "+.. ... ... .. .."
    ],
    [
      "Turkmenistan",
      "tm",
      "993"
    ],
    [
      "Turks and Caicos Islands",
      "tc",
      "1649"
    ],
    [
      "Tuvalu",
      "tv",
      "688"
    ],
    [
      "U.S. Virgin Islands",
      "vi",
      "1340"
    ],
    [
      "Uganda",
      "ug",
      "256"
    ],
    [
      "Ukraine",
      "ua",
      "380"
    ],
    [
      "United Arab Emirates",
      "ae",
      "971"
    ],
    [
      "United Kingdom",
      "gb",
      "44",
      "+.. .... ......"
    ],
    [
      "United States",
      "us",
      "1",
      "+. (...) ...-....",
      0,
      ["907", "205", "251", "256", "334", "479", "501", "870", "480", "520", "602", "623", "928", "209", "213", "310", "323", "408", "415", "510", "530", "559", "562", "619", "626", "650", "661", "707", "714", "760", "805", "818", "831", "858", "909", "916", "925", "949", "951", "303", "719", "970", "203", "860", "202", "302", "239", "305", "321", "352", "386", "407", "561", "727", "772", "813", "850", "863", "904", "941", "954", "229", "404", "478", "706", "770", "912", "808", "319", "515", "563", "641", "712", "208", "217", "309", "312", "618", "630", "708", "773", "815", "847", "219", "260", "317", "574", "765", "812", "316", "620", "785", "913", "270", "502", "606", "859", "225", "318", "337", "504", "985", "413", "508", "617", "781", "978", "301", "410", "207", "231", "248", "269", "313", "517", "586", "616", "734", "810", "906", "989", "218", "320", "507", "612", "651", "763", "952", "314", "417", "573", "636", "660", "816", "228", "601", "662", "406", "252", "336", "704", "828", "910", "919", "701", "308", "402", "603", "201", "609", "732", "856", "908", "973", "505", "575", "702", "775", "212", "315", "516", "518", "585", "607", "631", "716", "718", "845", "914", "216", "330", "419", "440", "513", "614", "740", "937", "405", "580", "918", "503", "541", "215", "412", "570", "610", "717", "724", "814", "401", "803", "843", "864", "605", "423", "615", "731", "865", "901", "931", "210", "214", "254", "281", "325", "361", "409", "432", "512", "713", "806", "817", "830", "903", "915", "936", "940", "956", "972", "979", "435", "801", "276", "434", "540", "703", "757", "804", "802", "206", "253", "360", "425", "509", "262", "414", "608", "715", "920", "304", "307"]
    ],
    [
      "Uruguay",
      "uy",
      "598"
    ],
    [
      "Uzbekistan",
      "uz",
      "998"
    ],
    [
      "Vanuatu",
      "vu",
      "678"
    ],
    [
      "Vatican City",
      "va",
      "39",
      "+.. .. .... ....",
      1
    ],
    [
      "Venezuela",
      "ve",
      "58"
    ],
    [
      "Vietnam",
      "vn",
      "84"
    ],
    [
      "Wallis and Futuna",
      "wf",
      "681"
    ],
    [
      "Yemen",
      "ye",
      "967"
    ],
    [
      "Zambia",
      "zm",
      "260"
    ],
    [
      "Zimbabwe",
      "zw",
      "263"
    ]
];


const rawcountry_curr_code = [
  {
      "country": "Afghanistan",
      "currency_code": "AFN"
  },
  {
      "country": "Albania",
      "currency_code": "ALL"
  },
  {
      "country": "Algeria",
      "currency_code": "DZD"
  },
  {
      "country": "American Samoa",
      "currency_code": "USD"
  },
  {
      "country": "Andorra",
      "currency_code": "EUR"
  },
  {
      "country": "Angola",
      "currency_code": "AOA"
  },
  {
      "country": "Anguilla",
      "currency_code": "XCD"
  },
  {
      "country": "Antarctica",
      "currency_code": "XCD"
  },
  {
      "country": "Antigua and Barbuda",
      "currency_code": "XCD"
  },
  {
      "country": "Argentina",
      "currency_code": "ARS"
  },
  {
      "country": "Armenia",
      "currency_code": "AMD"
  },
  {
      "country": "Aruba",
      "currency_code": "AWG"
  },
  {
      "country": "Australia",
      "currency_code": "AUD"
  },
  {
      "country": "Austria",
      "currency_code": "EUR"
  },
  {
      "country": "Azerbaijan",
      "currency_code": "AZN"
  },
  {
      "country": "Bahamas",
      "currency_code": "BSD"
  },
  {
      "country": "Bahrain",
      "currency_code": "BHD"
  },
  {
      "country": "Bangladesh",
      "currency_code": "BDT"
  },
  {
      "country": "Barbados",
      "currency_code": "BBD"
  },
  {
      "country": "Belarus",
      "currency_code": "BYR"
  },
  {
      "country": "Belgium",
      "currency_code": "EUR"
  },
  {
      "country": "Belize",
      "currency_code": "BZD"
  },
  {
      "country": "Benin",
      "currency_code": "XOF"
  },
  {
      "country": "Bermuda",
      "currency_code": "BMD"
  },
  {
      "country": "Bhutan",
      "currency_code": "BTN"
  },
  {
      "country": "Bolivia",
      "currency_code": "BOB"
  },
  {
      "country": "Bosnia and Herzegovina",
      "currency_code": null
  },
  {
      "country": "Botswana",
      "currency_code": "BWP"
  },
  {
      "country": "Bouvet Island",
      "currency_code": "NOK"
  },
  {
      "country": "Brazil",
      "currency_code": "BRL"
  },
  {
      "country": "British Indian Ocean Territory",
      "currency_code": "USD"
  },
  {
      "country": "Brunei",
      "currency_code": null
  },
  {
      "country": "Bulgaria",
      "currency_code": "BGN"
  },
  {
      "country": "Burkina Faso",
      "currency_code": "XOF"
  },
  {
      "country": "Burundi",
      "currency_code": "BIF"
  },
  {
      "country": "Cambodia",
      "currency_code": "KHR"
  },
  {
      "country": "Cameroon",
      "currency_code": "XAF"
  },
  {
      "country": "Canada",
      "currency_code": "CAD"
  },
  {
      "country": "Cape Verde",
      "currency_code": "CVE"
  },
  {
      "country": "Cayman Islands",
      "currency_code": "KYD"
  },
  {
      "country": "Central African Republic",
      "currency_code": "XAF"
  },
  {
      "country": "Chad",
      "currency_code": null
  },
  {
      "country": "Chile",
      "currency_code": "CLP"
  },
  {
      "country": "China",
      "currency_code": "CNY"
  },
  {
      "country": "Christmas Island",
      "currency_code": "AUD"
  },
  {
      "country": "Cocos (Keeling) Islands",
      "currency_code": "AUD"
  },
  {
      "country": "Colombia",
      "currency_code": "COP"
  },
  {
      "country": "Comoros",
      "currency_code": "KMF"
  },
  {
      "country": "Congo",
      "currency_code": "XAF"
  },
  {
      "country": "Cook Islands",
      "currency_code": "NZD"
  },
  {
      "country": "Costa Rica",
      "currency_code": "CRC"
  },
  {
      "country": "Croatia",
      "currency_code": "HRK"
  },
  {
      "country": "Cuba",
      "currency_code": "CUP"
  },
  {
      "country": "Cyprus",
      "currency_code": "EUR"
  },
  {
      "country": "Czech Republic",
      "currency_code": null
  },
  {
      "country": "Denmark",
      "currency_code": "DKK"
  },
  {
      "country": "Djibouti",
      "currency_code": "DJF"
  },
  {
      "country": "Dominica",
      "currency_code": "XCD"
  },
  {
      "country": "Dominican Republic",
      "currency_code": "DOP"
  },
  {
      "country": "East Timor",
      "currency_code": null
  },
  {
      "country": "Ecuador",
      "currency_code": "ECS"
  },
  {
      "country": "Egypt",
      "currency_code": "EGP"
  },
  {
      "country": "El Salvador",
      "currency_code": "SVC"
  },
  {
      "country": "England",
      "currency_code": null
  },
  {
      "country": "Equatorial Guinea",
      "currency_code": "XAF"
  },
  {
      "country": "Eritrea",
      "currency_code": "ERN"
  },
  {
      "country": "Estonia",
      "currency_code": "EUR"
  },
  {
      "country": "Ethiopia",
      "currency_code": "ETB"
  },
  {
      "country": "Falkland Islands",
      "currency_code": null
  },
  {
      "country": "Faroe Islands",
      "currency_code": "DKK"
  },
  {
      "country": "Fiji Islands",
      "currency_code": null
  },
  {
      "country": "Finland",
      "currency_code": "EUR"
  },
  {
      "country": "France",
      "currency_code": "EUR"
  },
  {
      "country": "French Guiana",
      "currency_code": "EUR"
  },
  {
      "country": "French Polynesia",
      "currency_code": null
  },
  {
      "country": "French Southern territories",
      "currency_code": "EUR"
  },
  {
      "country": "Gabon",
      "currency_code": "XAF"
  },
  {
      "country": "Gambia",
      "currency_code": "GMD"
  },
  {
      "country": "Georgia",
      "currency_code": "GEL"
  },
  {
      "country": "Germany",
      "currency_code": "EUR"
  },
  {
      "country": "Ghana",
      "currency_code": "GHS"
  },
  {
      "country": "Gibraltar",
      "currency_code": "GIP"
  },
  {
      "country": "Greece",
      "currency_code": "EUR"
  },
  {
      "country": "Greenland",
      "currency_code": "DKK"
  },
  {
      "country": "Grenada",
      "currency_code": "XCD"
  },
  {
      "country": "Guadeloupe",
      "currency_code": null
  },
  {
      "country": "Guam",
      "currency_code": null
  },
  {
      "country": "Guatemala",
      "currency_code": "QTQ"
  },
  {
      "country": "Guinea",
      "currency_code": "GNF"
  },
  {
      "country": "Guinea-Bissau",
      "currency_code": null
  },
  {
      "country": "Guyana",
      "currency_code": "GYD"
  },
  {
      "country": "Haiti",
      "currency_code": "HTG"
  },
  {
      "country": "Heard Island and McDonald Islands",
      "currency_code": "AUD"
  },
  {
      "country": "Holy See (Vatican City State)",
      "currency_code": null
  },
  {
      "country": "Honduras",
      "currency_code": "HNL"
  },
  {
      "country": "Hong Kong",
      "currency_code": "HKD"
  },
  {
      "country": "Hungary",
      "currency_code": "HUF"
  },
  {
      "country": "Iceland",
      "currency_code": "ISK"
  },
  {
      "country": "India",
      "currency_code": "INR"
  },
  {
      "country": "Indonesia",
      "currency_code": "IDR"
  },
  {
      "country": "Iran",
      "currency_code": "IRR"
  },
  {
      "country": "Iraq",
      "currency_code": "IQD"
  },
  {
      "country": "Ireland",
      "currency_code": "EUR"
  },
  {
      "country": "Israel",
      "currency_code": "ILS"
  },
  {
      "country": "Italy",
      "currency_code": "EUR"
  },
  {
      "country": "Ivory Coast",
      "currency_code": "XOF"
  },
  {
      "country": "Jamaica",
      "currency_code": "JMD"
  },
  {
      "country": "Japan",
      "currency_code": "JPY"
  },
  {
      "country": "Jordan",
      "currency_code": "JOD"
  },
  {
      "country": "Kazakhstan",
      "currency_code": null
  },
  {
      "country": "Kenya",
      "currency_code": "KES"
  },
  {
      "country": "Kiribati",
      "currency_code": "AUD"
  },
  {
      "country": "Kuwait",
      "currency_code": "KWD"
  },
  {
      "country": "Kyrgyzstan",
      "currency_code": "KGS"
  },
  {
      "country": "Laos",
      "currency_code": "LAK"
  },
  {
      "country": "Latvia",
      "currency_code": "LVL"
  },
  {
      "country": "Lebanon",
      "currency_code": "LBP"
  },
  {
      "country": "Lesotho",
      "currency_code": "LSL"
  },
  {
      "country": "Liberia",
      "currency_code": "LRD"
  },
  {
      "country": "Libyan Arab Jamahiriya",
      "currency_code": null
  },
  {
      "country": "Liechtenstein",
      "currency_code": "CHF"
  },
  {
      "country": "Lithuania",
      "currency_code": "LTL"
  },
  {
      "country": "Luxembourg",
      "currency_code": "EUR"
  },
  {
      "country": "Macao",
      "currency_code": null
  },
  {
      "country": "North Macedonia",
      "currency_code": "MKD"
  },
  {
      "country": "Madagascar",
      "currency_code": "MGF"
  },
  {
      "country": "Malawi",
      "currency_code": "MWK"
  },
  {
      "country": "Malaysia",
      "currency_code": "MYR"
  },
  {
      "country": "Maldives",
      "currency_code": "MVR"
  },
  {
      "country": "Mali",
      "currency_code": "XOF"
  },
  {
      "country": "Malta",
      "currency_code": "EUR"
  },
  {
      "country": "Marshall Islands",
      "currency_code": "USD"
  },
  {
      "country": "Martinique",
      "currency_code": null
  },
  {
      "country": "Mauritania",
      "currency_code": "MRO"
  },
  {
      "country": "Mauritius",
      "currency_code": "MUR"
  },
  {
      "country": "Mayotte",
      "currency_code": "EUR"
  },
  {
      "country": "Mexico",
      "currency_code": "MXN"
  },
  {
      "country": "Micronesia, Federated States of",
      "currency_code": null
  },
  {
      "country": "Moldova",
      "currency_code": "MDL"
  },
  {
      "country": "Monaco",
      "currency_code": "EUR"
  },
  {
      "country": "Mongolia",
      "currency_code": "MNT"
  },
  {
      "country": "Montserrat",
      "currency_code": "XCD"
  },
  {
      "country": "Morocco",
      "currency_code": "MAD"
  },
  {
      "country": "Mozambique",
      "currency_code": "MZN"
  },
  {
      "country": "Myanmar",
      "currency_code": "MMR"
  },
  {
      "country": "Namibia",
      "currency_code": "NAD"
  },
  {
      "country": "Nauru",
      "currency_code": "AUD"
  },
  {
      "country": "Nepal",
      "currency_code": "NPR"
  },
  {
      "country": "Netherlands",
      "currency_code": "EUR"
  },
  {
      "country": "Netherlands Antilles",
      "currency_code": "ANG"
  },
  {
      "country": "New Caledonia",
      "currency_code": null
  },
  {
      "country": "New Zealand",
      "currency_code": "NZD"
  },
  {
      "country": "Nicaragua",
      "currency_code": "NIO"
  },
  {
      "country": "Niger",
      "currency_code": "XOF"
  },
  {
      "country": "Nigeria",
      "currency_code": "NGN"
  },
  {
      "country": "Niue",
      "currency_code": "NZD"
  },
  {
      "country": "Norfolk Island",
      "currency_code": "AUD"
  },
  {
      "country": "North Korea",
      "currency_code": "KPW"
  },
  {
      "country": "Northern Ireland",
      "currency_code": null
  },
  {
      "country": "Northern Mariana Islands",
      "currency_code": "USD"
  },
  {
      "country": "Norway",
      "currency_code": "NOK"
  },
  {
      "country": "Oman",
      "currency_code": "OMR"
  },
  {
      "country": "Pakistan",
      "currency_code": "PKR"
  },
  {
      "country": "Palau",
      "currency_code": "USD"
  },
  {
      "country": "Palestine",
      "currency_code": null
  },
  {
      "country": "Panama",
      "currency_code": "PAB"
  },
  {
      "country": "Papua New Guinea",
      "currency_code": "PGK"
  },
  {
      "country": "Paraguay",
      "currency_code": "PYG"
  },
  {
      "country": "Peru",
      "currency_code": "PEN"
  },
  {
      "country": "Philippines",
      "currency_code": "PHP"
  },
  {
      "country": "Pitcairn",
      "currency_code": null
  },
  {
      "country": "Poland",
      "currency_code": "PLN"
  },
  {
      "country": "Portugal",
      "currency_code": "EUR"
  },
  {
      "country": "Puerto Rico",
      "currency_code": "USD"
  },
  {
      "country": "Qatar",
      "currency_code": "QAR"
  },
  {
      "country": "Reunion",
      "currency_code": null
  },
  {
      "country": "Romania",
      "currency_code": "RON"
  },
  {
      "country": "Russian Federation",
      "currency_code": null
  },
  {
      "country": "Rwanda",
      "currency_code": "RWF"
  },
  {
      "country": "Saint Helena",
      "currency_code": "SHP"
  },
  {
      "country": "Saint Kitts and Nevis",
      "currency_code": null
  },
  {
      "country": "Saint Lucia",
      "currency_code": "XCD"
  },
  {
      "country": "Saint Pierre and Miquelon",
      "currency_code": "EUR"
  },
  {
      "country": "Saint Vincent and the Grenadines",
      "currency_code": "XCD"
  },
  {
      "country": "Samoa",
      "currency_code": "WST"
  },
  {
      "country": "San Marino",
      "currency_code": "EUR"
  },
  {
      "country": "Sao Tome and Principe",
      "currency_code": "STD"
  },
  {
      "country": "Saudi Arabia",
      "currency_code": "SAR"
  },
  {
      "country": "Scotland",
      "currency_code": null
  },
  {
      "country": "Senegal",
      "currency_code": "XOF"
  },
  {
      "country": "Seychelles",
      "currency_code": "SCR"
  },
  {
      "country": "Sierra Leone",
      "currency_code": "SLL"
  },
  {
      "country": "Singapore",
      "currency_code": "SGD"
  },
  {
      "country": "Slovakia",
      "currency_code": "EUR"
  },
  {
      "country": "Slovenia",
      "currency_code": "EUR"
  },
  {
      "country": "Solomon Islands",
      "currency_code": "SBD"
  },
  {
      "country": "Somalia",
      "currency_code": "SOS"
  },
  {
      "country": "South Africa",
      "currency_code": "ZAR"
  },
  {
      "country": "South Georgia and the South Sandwich Islands",
      "currency_code": "GBP"
  },
  {
      "country": "South Korea",
      "currency_code": "KRW"
  },
  {
      "country": "South Sudan",
      "currency_code": "SSP"
  },
  {
      "country": "Spain",
      "currency_code": "EUR"
  },
  {
      "country": "SriLanka",
      "currency_code": null
  },
  {
      "country": "Sudan",
      "currency_code": "SDG"
  },
  {
      "country": "Suriname",
      "currency_code": "SRD"
  },
  {
      "country": "Svalbard and Jan Mayen",
      "currency_code": null
  },
  {
      "country": "Swaziland",
      "currency_code": "SZL"
  },
  {
      "country": "Sweden",
      "currency_code": "SEK"
  },
  {
      "country": "Switzerland",
      "currency_code": "CHF"
  },
  {
      "country": "Syria",
      "currency_code": "SYP"
  },
  {
      "country": "Tajikistan",
      "currency_code": "TJS"
  },
  {
      "country": "Tanzania",
      "currency_code": "TZS"
  },
  {
      "country": "Thailand",
      "currency_code": "THB"
  },
  {
      "country": "The Democratic Republic of Congo",
      "currency_code": null
  },
  {
      "country": "Togo",
      "currency_code": "XOF"
  },
  {
      "country": "Tokelau",
      "currency_code": "NZD"
  },
  {
      "country": "Tonga",
      "currency_code": "TOP"
  },
  {
      "country": "Trinidad and Tobago",
      "currency_code": "TTD"
  },
  {
      "country": "Tunisia",
      "currency_code": "TND"
  },
  {
      "country": "Turkey",
      "currency_code": "TRY"
  },
  {
      "country": "Turkmenistan",
      "currency_code": "TMT"
  },
  {
      "country": "Turks and Caicos Islands",
      "currency_code": null
  },
  {
      "country": "Tuvalu",
      "currency_code": "AUD"
  },
  {
      "country": "Uganda",
      "currency_code": "UGX"
  },
  {
      "country": "Ukraine",
      "currency_code": "UAH"
  },
  {
      "country": "United Arab Emirates",
      "currency_code": "AED"
  },
  {
      "country": "United Kingdom",
      "currency_code": null
  },
  {
      "country": "United States",
      "currency_code": null
  },
  {
      "country": "United States Minor Outlying Islands",
      "currency_code": null
  },
  {
      "country": "Uruguay",
      "currency_code": "UYU"
  },
  {
      "country": "Uzbekistan",
      "currency_code": "UZS"
  },
  {
      "country": "Vanuatu",
      "currency_code": "VUV"
  },
  {
      "country": "Venezuela",
      "currency_code": "VEF"
  },
  {
      "country": "Vietnam",
      "currency_code": "VND"
  },
  {
      "country": "Virgin Islands, British",
      "currency_code": null
  },
  {
      "country": "Virgin Islands, U.S.",
      "currency_code": null
  },
  {
      "country": "Wales",
      "currency_code": null
  },
  {
      "country": "Wallis and Futuna",
      "currency_code": null
  },
  {
      "country": "Western Sahara",
      "currency_code": "MAD"
  },
  {
      "country": "Yemen",
      "currency_code": "YER"
  },
  {
      "country": "Yugoslavia",
      "currency_code": null
  },
  {
      "country": "Zambia",
      "currency_code": "ZMW"
  },
  {
      "country": "Zimbabwe",
      "currency_code": "ZWD"
  }
]



function addopt(){
    const add = rawAllCountries.map(function(item, i){
        return(
            <option key={i} value={item[2]} >{item[0]}</option>
        )
    })
    return add
}

function addoptcurr(){
	const add = rawcountry_curr_code.map(function(item, i){
        return(
            <option key={i} value={item.currency_code} >{item.country}</option>
        )
    })
    return add
}

export {addopt, addoptcurr};