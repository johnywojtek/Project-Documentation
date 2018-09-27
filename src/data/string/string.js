module.exports = [
    {
        name: "Pobieranie znaku na danej pozycji",
        definition:
            "Do pobrania w tekście znaku na danej pozycji możemy zastosować 2 podejścia. Jedno z nich to użycie metody charAt(). Drugie - to odwoływanie się do liter tekstu jak do elementów tablicy - poprzez kwadratowe nawiasy. Zasady są te same co przy tablicach. Pierwsza litera ma index 0, a ostatnia text.length-1",
        example: [
            "const text = 'Ala ma kota, a kot ma Ale';",
            "",
            "console.log(text.charAt(0)); //A",
            "console.log(text.charAt(4)); //m",
            "",
            "console.log(text[0]); //A",
            "console.log(text[4]); //m",
            "",
            "console.log(text.charAt(text.length-1)); //e",
            "console.log(text[text.length-1]); //e"
        ]
    },
    {
        name: `Pobieranie kodu znaku za pomocą charCodeAt()`,
        definition:
            "Metoda charCodeAt() zwraca nam kod ASCII znaku na pozycji podanej w parametrze.",
        example: [
            "const text = 'Ala ma kota';",
            "",
            "console.log(text.charCodeAt(0)); //65 (A)",
            "console.log(text.charCodeAt(4)); //109 (m)"
        ]
    },
    {
        name: "Zmiana tylko pierwszych liter w słowach",
        definition:
            "Korzystając z powyższych metod możemy pokusić się o napisanie własnej funkcji, która będzie w przekazanym słowie zamieniać na dużą tylko pierwszą literę:",
        example: [
            "const text = 'marcin';",
            "console.log( text.charAt(0).toUpperCase() + text.slice(1) ); //Marcin"
        ]
    },
    {
        name:
            "Sprawdzanie pozycji podtekstu za pomocą metody indexOf() i lastIndexOf()",
        definition:
            "Metoda indexOf służy do podawania pozycji szukanego fragmentu w tekście (ale także w tablicy, bo metoda ta dostępna jest dla stringów i tablic). Jeżeli zwróconą wartością jest -1, to szukanego tekstu nie ma:",
        example: [
            "const text = 'Ala ma kota';",
            "",
            "//sprawdzamy czy ciąg 'psa' istnieje",
            "if (text.indexOf('psa') > -1) {",
            "  console.log('Ala ma psa' );",
            "} else {",
            "  console.log('Ala ma kota' );",
            "}"
        ]
    },
    {
        definition:
            "Podobne działanie ma metoda lastIndexOf, podaje ona jednak numer ostatniego wystąpienia podtekstu",
        example: [
            "'Ala ma kota i tak już jest'.lastIndexOf('a'); //15 - bo ostatnia litera występuje na pozycji 15",
            "",
            "",
            "const url = 'http://nazwastrony.pl/przykladowaNazwaPliku.php';",
            "",
            "//korzystając z metod opisanych poniżej tniemy url na części",
            "console.log( url.slice(url.lastIndexOf('.')+1) ); //php",
            "console.log( url.slice(url.lastIndexOf('/')+1, url.lastIndexOf('.')) ); //przykladowaNazwaPliku"
        ]
    },
    {
        definition:
            "Przy nowych wersjach JavaScript istnieje też metoda includes(str), która także służy do wyszukiwania podstringów. Różnica przy jej użyciu jest taka, że zamiast pozycji szukanego ciągu zwraca true/false:",
        example: [
            "const text = 'Ala ma kota';",
            "",
            "if (text.includes('psa')) {",
            "  console.log('Ala ma psa');",
            "} else {",
            "  console.log('Ala ma kota');",
            "}"
        ]
    },
    {
        name: "Pobieranie kawałka tekstu za pomocą metody substr()",
        definition:
            "Metoda substr(start, dlugosc) służy do pobierania kawałka tekstu. Pierwszym jej parametrem jest początek pobieranego kawałka tekstu, a drugi opcjonalny wskazuje długość pobieranego tekstu. Jeżeli drugi parametr nie zostanie podany, wówczas pobierany kawałek będzie pobierany do końca tekstu.",
        example: [
            "const text = 'Ala ma kota';",
            "",
            "console.log(text.substr(0)); //Ala ma kota",
            "console.log(text.substr(0, 3)); //Ala",
            "console.log(text.substr(7, 4)); //kota",
            "console.log(text.substr(4, text.length - 4)); //wypisze tekst od 4 litery do końca - 'ma kota'"
        ]
    },
    {
        name: "Pobieranie kawałka tekstu za pomocą metody substring()",
        definition:
            "Metoda substring(start, stop) ma bardzo podobne działanie co powyższa. Różnicą jest drugi parametr, który zamiast długości wyznacza miejsce końca pobieranego kawałka. Jeżeli drugi parametr nie zostanie podany, wtedy kawałek będzie pobierany do końca tekstu. Jeżeli zostaną podane oba parametry, ale drugi będzie mniejszy od pierwszego, wtedy automatycznie zostaną one zamienione miejscami.",
        example: [
            "const text = 'Ala ma kota';",
            "",
            "console.log(text.substring(0, 3)); //Ala",
            "console.log(text.substring(3)); //ma kota",
            "console.log('Ala ma kota'.substring(6, 4)); //ma"
        ]
    },
    {
        name: "Przycinanie tekstu za pomocą metody slice()",
        definition: `Tekst jest uporządkowanym ciagiem znaków. ${"\n"}Tak samo jak w przypadku tablic, tak i w przypadku zmiennych tekstowych możemy skorzystać z metody slice(start, stop), która 'tnie' nasz tekst i tworzy w ten sposób nowy. Jej działanie jest praktycznie identyczne do działania metody substring(), jednak występują małe różnice. Jeżeli drugi argument będzie mniejszy od pierwszego, wtedy w przeciwieństwie do substring() argumenty nie zostaną zamienione miejscami.`,
        example: [
            "const txt = 'Ala ma kota';",
            "",
            "const txt2 = txt.slice(0,3);",
            "console.log(txt2); //Ala",
            "",
            "const txt3 = txt.slice(1,5);",
            "console.log(txt3); //la m",
            "",
            "const txt4 = txt.slice(4 , 6);",
            "console.log(txt4); //ma",
            "",
            "const txt5 = txt.slice(4);",
            "console.log(txt5); //ma kota",
            "",
            "const txt6 = txt.slice(-4);",
            "console.log('Ala już nie ma ' + txt6 + ', bo kocur jej zwiał...');",
            "//Ala już nie ma kota, bo kocur jej zwiał..."
        ]
    },
    {
        name: "Dzielenie tekstu pomocą metody split()",
        definition:
            "Metoda split(znak, długość) dzieli tekst na części, w wyniku zwracając tablicę. Miejsce podziału jest podawane w parametrze znak, a maksymalna ilość zwracanych elementów w parametrze długość:",
        example: [
            'const text = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("',
            'const pieces = text.split(", ");',
            "",
            "for (let i=0; i<pieces.length; i++) {",
            "console.log(pieces[i].toUpperCase()); //wypisze kolejne części zdania dużymi literami",
            "}"
        ]
    },
    {
        name: "Zamiana tekstu za pomocą metody replace()",
        definition:
            "Metoda replace(ciag_szukany, zamieniony) służy do zamiany szukanych kawałków tekstu na inny tekst.",
        example: [
            'const text = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("',
            'const textChanged = text.replace("Ala", "Ola");',
            "",
            "console.log(textChanged);"
        ]
    },
    {
        definition:
            "W powyższym przykładzie, zamieniona zostanie tylko pierwsza Ala. Aby wszystkie Ale zamieniły się na Ole, musimy zastosować wyrażenie regularne, nakazujące wyszukanie wszystkich Ali.",
        example: [
            'const text = "Ala ma kota, a kot ma Alę, Ala go kocha, a Kot ją wcale ;("',
            'const textChanged = text.replace(/Al/g,"Ol");',
            "",
            "console.log(text);",
            "console.log(textChanged);"
        ]
    },
    {
        name: "Kodowanie tekstu za pomocą funkcji encodeURI()",
        definition: `, spacja - # _ & % [ ] & ; : ? " ( ) ~ |  ! ${"\n"}Dlatego jeżeli chcielibyśmy ich użyć np w nazwach zmiennych przekazywanych za pomocą adresu, wtedy musimy je zakodować. ${"\n\n"}Do takiego zakodowania służy metoda ${color(
            "encodeURI()"
        )}`,
        example: [
            'const text = "Ala ma kota, a kot ma Alę...";',
            "",
            'console.log("Przed: " + text); //Ala ma kota, a kot ma Alę...',
            'console.log("Po: " + encodeURI(text)); //Ala%20ma%20kota%2C%20a%20kot%20ma%20Al%u0119...'
        ]
    },
    {
        name: "Rozkodowanie tekstu za pomocą funkcji decodeURI()",
        definition:
            "Jeżeli teraz chcemy odkodować zakodowany tekst, musimy użyć funkcji decodeURI():",
        example: [
            'const text = "Ala ma kota, a kot ma Alę...";',
            "",
            "text = encodeUrl(text);",
            "",
            'console.log("Przed: " + text); //Ala%20ma%20kota%2C%20a%20kot%20ma%20Al%u0119...',
            'console.log("Po: " + decodeURI(text)); //Ala ma kota, a kot ma Alę...'
        ]
    }
];
function color(str) {
    return str.fontcolor("green");
}
