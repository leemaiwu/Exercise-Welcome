const languageDB = [
            {english: 'Welcome'},
            {czech: 'Vitejte'},
            {danish: 'Velkomst'},
            {dutch: 'Welkom'},
            {estonian: 'Tere tulemast'},
            {finnish: 'Tervetuloa'},
            {flemish: 'Welgekomen'},
            {french: 'Bienvenue'},
            {german: 'Willkommen'},
            {irish: 'Failte'},
            {italian: 'Benvenuto'},
            {latvian: 'Gaidits'},
            {lithuanian: 'Laukiamas'},
            {polish: 'Witamy'},
            {spanish: 'Bienvenido'},
            {swedish: 'Valkommen'},
            {welsh: 'Croeso'}
        ]

function greet(language) {
    if (!language) {
        language = 'english'
    }
    for (let i = 0; i < languageDB.length; i++) {
        if (language in languageDB[i]) {
            return languageDB[i][language]
        }
    }
    return languageDB[0].english
}

console.log(greet("fdsa"))


// Alternate Solution


const langs = {
    'english': 'Welcome',
    'czech': 'Vitejte',
    'danish': 'Velkomst',
    'dutch': 'Welkom',
    'estonian': 'Tere tulemast',
    'finnish': 'Tervetuloa',
    'flemish': 'Welgekomen',
    'french': 'Bienvenue',
    'german': 'Willkommen',
    'irish': 'Failte',
    'italian': 'Benvenuto',
    'latvian': 'Gaidits',
    'lithuanian': 'Laukiamas',
    'polish': 'Witamy',
    'spanish': 'Bienvenido',
    'swedish': 'Valkommen',
    'welsh': 'Croeso'
}

function greeting(lang) {
	return langs[lang]||langs['english'];
}

console.log(greeting('latvian'))
