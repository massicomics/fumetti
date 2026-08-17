/* ============================================================
   I FUMETTI DEL MASSI — LINGUE
   ============================================================
   Tre lingue: italiano (it), inglese (en), bosniaco/croato/serbo (hr).

   SULL'ETICHETTA "B/H/S"
     B/H/S sta per bosanski, hrvatski, srpski — parole che si
     scrivono identiche in tutti e quattro gli standard, quindi
     l'abbreviazione è la stessa per chiunque la legga.

     Le barre non sono un vezzo grafico: "BHS" sarebbe il nome di
     UNA lingua, "B/H/S" è l'elenco di TRE. Se sia una lingua sola
     o più è una questione politicamente aperta da decenni — i
     linguisti serbi e la maggior parte di quelli bosgnacchi dicono
     una, la maggior parte di quelli croati dicono lingue diverse.
     Con le barre il sito elenca senza prendere posizione.

     NON si usa BCMS: è l'acronimo francese (bosniaque, croate,
     monténégrin, serbe). In loco il montenegrino è "crnogorski",
     con la C, quindi quella sigla cambierebbe a seconda di chi la
     legge. Volendo includerlo, la forma locale è B/C/H/S.

   SUL CIRILLICO
     Il sito è in alfabeto latino, ed è la scelta giusta: croato e
     bosniaco si scrivono SOLO in latino, mentre serbo e montenegrino
     usano entrambi gli alfabeti. Una versione cirillica non sarebbe
     più leggibile per tutti: marcherebbe il sito come serbo ed
     escluderebbe metà del pubblico. Il latino lo leggono tutti.
   L'italiano è la lingua di riferimento: se una traduzione manca,
   il sito mostra l'italiano invece di lasciare un buco.

   PER AGGIUNGERE UN TESTO NUOVO
     aggiungi la stessa chiave in tutte e tre le sezioni.

   NOTA SUI TITOLI DELLE OPERE
     I titoli restano SEMPRE in italiano, in ogni lingua: sono i
     titoli delle edizioni possedute. In dati.js ogni storia e ogni
     serie può avere un campo "titoloLocale" per il titolo con cui
     l'opera è uscita in ex Jugoslavia; se compilato, il sito lo
     mostra tra parentesi accanto all'originale quando si legge
     in hr. Se vuoto, non compare nulla.

   TERMINOLOGIA hr — verificata sui forum e sui cataloghi dei
   collezionisti (stripovi.com, kupujemprodajem, halooglasi):
     tavola originale ....... originalna tabla
     copertina .............. naslovnica
     prima edizione ......... prvo izdanje
     stato di conservazione . očuvanost
     ottimo ................. odlično očuvan
     buono .................. dobro očuvan
     da magazzino ........... nečitan   (mai letto)
     da edicola ............. iz kioska
     cartonato .............. tvrdi uvez
     serie completa ......... kompletna serija
     testi / disegni ........ piše / crta
     tiratura ............... naklada
     editore ................ izdavač
     collezione privata ..... privatna zbirka
     hrbat i rez ............ dorso e taglio
     uvodna splash tabla .... tavola titolo

   ATTENZIONE hr: "naslovnica" è la COPERTINA e "naslovna tabla"
   verrebbe letto come "tavola di copertina". La splash iniziale
   funzionava infatti come una "seconda copertina", quindi per la
   tavola titolo si usa "uvodna splash tabla" — dove "uvodna"
   (d'apertura) esclude ogni equivoco.

   TERMINOLOGIA en — verificata su ComicArtFans, sellmycomicart
   e sugli annunci di arte originale:
     tavola originale ....... original art page  (mai "plate")
     tavola titolo .......... title splash page
     copertina .............. front cover
     tiratura ............... print run
     cartonato .............. hardcover

   ATTENZIONE: in inglese "newsstand edition" indica il CANALE di
   distribuzione (copia da edicola col codice a barre, contrapposta
   alla "direct edition" da fumetteria), NON lo stato di conservazione.
   Per questo "da edicola" è reso con "as sold new", non con
   "newsstand condition", che si capirebbe come tutt'altro.
   "unread" resta riservato al solo "da magazzino": è quello lo stato
   che garantisce l'albo mai letto. Su "da edicola" non va aggiunto.
   Le formule di conservazione qui sono descrittive: non usano la
   scala di grading americana (Near Mint, Very Fine...) perché
   quella presuppone una perizia formale.
   ============================================================ */

const LINGUE = {

  it: {
    _nome: "Italiano",
    _sigla: "IT",
    sottotitolo: "Esposizione privata della mia collezione di fumetti e tavole originali.",
    disclaimer: "Collezione privata, mostrata solo a titolo espositivo, senza fini commerciali",
    indice: "Indice",
    indiceTitolo: "Indice della collezione",
    tornaSu: "Torna su",
    chiudi: "Chiudi",

    fCollezione: "Collezione",
    fPersonaggio: "Personaggio",
    fAutore: "Autore",
    azzera: "Azzera",
    filtri: "Filtri",
    tutto: "Tutto",
    tutti: "Tutti",
    optTavoleTutte: "Tavole originali — tutte",
    optStorie: "Tavole originali — storie complete",
    optSingole: "Tavole originali — tavole singole",
    optFumetti: "Fumetti",

    blkCollezione: "Collezione",
    blkStorie: "Tavole originali: storie complete",
    blkSingole: "Tavole originali: tavole singole",
    blkFumetti: "Fumetti",
    subPerAutore: "Raccolte per autore",
    subFumetti: "Raccolti per personaggio e serie",
    notaFumetti: "Tutti gli albi sono sempre stati conservati in apposite buste sigillate.",

    tavoleOriginali: "Tavole originali",
    fumetti: "Fumetti",
    altro: "Altro",
    storieComplete: "Storie complete",
    tavoleSingole: "Tavole singole",
    autore: "Autore",
    personaggio: "Personaggio",
    testi: "Testi",
    disegni: "Disegni",
    storiaCompleta: "storia completa",
    storieCompleteN: "storie complete",
    tavolaSingola: "tavola singola",
    tavoleSingoleN: "tavole singole",

    edizione: "Edizione",
    conservazione: "Stato di conservazione",
    serie: "Serie",
    volumi: "Volumi",
    completa: "completa",
    elencoVolumi: "I {n} volumi",
    elencoVolume: "Il volume",
    pagina: "p.",

    raccoglitoriOcchiello: "Dietro le quinte",
    raccoglitoriTitolo: "I raccoglitori",
    raccoglitoriTesto: "Le tavole sono custodite in speciali raccoglitori di pelle che ho fatto personalmente realizzare su misura, formato 45×35&nbsp;cm, con carta interna di massima qualità e grammatura pesante, priva di velina per una consultazione più immediata e piacevole.",
    raccoglitoriNota: "È presente, e visibile, anche il materiale originale — film e nastro originale Bonelli — in cui le tavole erano originariamente custodite.",

    nessunRisultato: "Nessun pezzo corrisponde ai filtri selezionati.",
    piede: "collezione privata",
    contatti: "Contatti",
    contattiTesto: "Per informazioni sulla collezione:",
    zoom: "Zoom"
  },

  en: {
    _nome: "English",
    _sigla: "EN",
    sottotitolo: "A private display of my collection of comics and original artwork.",
    disclaimer: "Private collection, shown for exhibition purposes only, not for sale",
    indice: "Contents",
    indiceTitolo: "Contents of the collection",
    tornaSu: "Back to top",
    chiudi: "Close",

    fCollezione: "Collection",
    fPersonaggio: "Character",
    fAutore: "Artist",
    azzera: "Reset",
    filtri: "Filters",
    tutto: "All",
    tutti: "All",
    optTavoleTutte: "Original art — all",
    optStorie: "Original art — complete stories",
    optSingole: "Original art — single pages",
    optFumetti: "Comics",

    blkCollezione: "Collection",
    blkStorie: "Original art: complete stories",
    blkSingole: "Original art: single pages",
    blkFumetti: "Comics",
    subPerAutore: "Arranged by artist",
    subFumetti: "Arranged by character and series",
    notaFumetti: "Every issue has always been kept in its own sealed protective sleeve.",

    tavoleOriginali: "Original art",
    fumetti: "Comics",
    altro: "Other",
    storieComplete: "Complete stories",
    tavoleSingole: "Single pages",
    autore: "Artist",
    personaggio: "Character",
    testi: "Story",
    disegni: "Art",
    storiaCompleta: "complete story",
    storieCompleteN: "complete stories",
    tavolaSingola: "single page",
    tavoleSingoleN: "single pages",

    edizione: "Edition",
    conservazione: "Condition",
    serie: "Series",
    volumi: "Copies",
    completa: "complete",
    elencoVolumi: "The {n} volumes",
    elencoVolume: "The volume",
    pagina: "p.",

    raccoglitoriOcchiello: "Behind the scenes",
    raccoglitoriTitolo: "The binders",
    raccoglitoriTesto: "The pages are kept in leather binders made to my own specification, 45×35&nbsp;cm, with heavy, top-quality interleaving paper and no tissue guards, so that the art can be looked at directly and without fuss.",
    raccoglitoriNota: "Also present, and on view, is the original material — Bonelli's own film and tape — in which the pages were originally kept.",

    nessunRisultato: "No items match the selected filters.",
    piede: "private collection",
    contatti: "Contact",
    contattiTesto: "For information about the collection:",
    zoom: "Zoom"
  },

  hr: {
    _nome: "Bosanski / Hrvatski / Srpski",
    _sigla: "B/H/S",
    sottotitolo: "Privatna izložba moje zbirke stripova i originalnih tabli.",
    disclaimer: "Privatna zbirka, prikazana isključivo izložbeno, nije na prodaju",
    indice: "Sadržaj",
    indiceTitolo: "Sadržaj zbirke",
    tornaSu: "Na vrh",
    chiudi: "Zatvori",

    fCollezione: "Zbirka",
    fPersonaggio: "Junak",
    fAutore: "Crtač",
    azzera: "Poništi",
    filtri: "Filteri",
    tutto: "Sve",
    tutti: "Svi",
    optTavoleTutte: "Originalne table — sve",
    optStorie: "Originalne table — kompletne priče",
    optSingole: "Originalne table — pojedinačne table",
    optFumetti: "Stripovi",

    blkCollezione: "Zbirka",
    blkStorie: "Originalne table: kompletne priče",
    blkSingole: "Originalne table: pojedinačne table",
    blkFumetti: "Stripovi",
    subPerAutore: "Razvrstano po crtaču",
    subFumetti: "Razvrstano po junaku i seriji",
    notaFumetti: "Svaki broj je oduvijek čuvan u zasebnoj zatvorenoj zaštitnoj vrećici.",

    tavoleOriginali: "Originalne table",
    fumetti: "Stripovi",
    altro: "Ostalo",
    storieComplete: "Kompletne priče",
    tavoleSingole: "Pojedinačne table",
    autore: "Crtač",
    personaggio: "Junak",
    testi: "Piše",
    disegni: "Crta",
    storiaCompleta: "kompletna priča",
    storieCompleteN: "kompletne priče",
    tavolaSingola: "pojedinačna tabla",
    tavoleSingoleN: "pojedinačne table",

    edizione: "Izdanje",
    conservazione: "Očuvanost",
    serie: "Serija",
    volumi: "Primjeraka",
    completa: "kompletna",
    elencoVolumi: "Svih {n} svezaka",
    elencoVolume: "Svezak",
    pagina: "str.",

    raccoglitoriOcchiello: "Iza kulisa",
    raccoglitoriTitolo: "Mape",
    raccoglitoriTesto: "Table se čuvaju u kožnim mapama izrađenim po mojoj narudžbi, formata 45×35&nbsp;cm, s unutrašnjim papirom vrhunske kvalitete i velike gramaže, bez svilenog papira, kako bi se table mogle gledati izravno i bez smetnje.",
    raccoglitoriNota: "Sačuvan je i izložen i originalni materijal — Bonellijev film i originalna traka — u kojem su table izvorno bile pohranjene.",

    nessunRisultato: "Nijedan predmet ne odgovara odabranim filterima.",
    piede: "privatna zbirka",
    contatti: "Kontakt",
    contattiTesto: "Za informacije o zbirci:",
    zoom: "Uvećaj"
  }
};

/* ------------------------------------------------------------
   TESTI LUNGHI — descrizioni e note.
   La chiave corrisponde all'id in dati.js.
   ------------------------------------------------------------ */

const TESTI = {

  /* ---- introduzioni delle storie ---- */
  "intro:odio": {
    en: "The second Zagor story drawn by the great Franco Donatelli, who here settles into the Zagor line that readers would love for decades to come. The complete story runs to 212 original plates, all of them in this collection and in perfect condition, with the sole exception of page 21 — replaced by another original work of equal standing (see the note at the end of the \"Odio!\" story). The plates shown below are a selection, not the whole story.",
    hr: "Druga Zagorova priča koju je nacrtao veliki Franco Donatelli, koji ovdje učvršćuje onaj zagorovski crtež kakav će čitatelji voljeti desetljećima. Kompletna priča broji 212 originalnih tabli, sve su u ovoj zbirci i u savršenom stanju, uz jedinu iznimku stranice 21 — zamijenjene drugim originalnim radom jednake vrijednosti (vidi bilješku na kraju priče \"Odio!\"). Dolje prikazane table su izbor, a ne cijela priča."
  },
  "intro:deanera": {
    en: "The complete story runs to 120 original plates, all of them in this collection and in perfect condition. The plates shown below are a selection, not the whole story.",
    hr: "Kompletna priča broji 120 originalnih tabli, sve su u ovoj zbirci i u savršenom stanju. Dolje prikazane table su izbor, a ne cijela priča."
  },

  /* ---- nota su pagina 21 ---- */
  "nota:odio-p21": {
    en: "<strong>On page 21:</strong> the only plate in the collection that is not an original. Franco Donatelli's plate is missing; the story is completed by a faithful reconstruction made by my friend <strong>Marco Verni</strong> — among the Zagor artists most admired for how close he comes to the line of Maestro Gallieno Ferri — who wanted to make me this personal gift so that the album would be whole.",
    hr: "<strong>O stranici 21:</strong> jedina tabla u zbirci koja nije original. Tabla Franca Donatellija nedostaje; priču dovršava vjerna rekonstrukcija koju je izradio moj prijatelj <strong>Marco Verni</strong> — jedan od najcjenjenijih Zagorovih crtača upravo po bliskosti crtežu Maestra Galliena Ferrija — koji mi je htio darovati ovaj osobni poklon kako bi album bio potpun."
  },

  /* ---- nota su Gallieno Ferri ---- */
  "nota:ferri": {
    en: "Co-creator of Zagor's visual identity together with Guido Nolitta (Sergio Bonelli), and the artist of every cover of the regular series up to no. 665; after his death in April 2016 he was succeeded by Alessandro Piccinelli from no. 666 onwards.",
    hr: "Suautor Zagorova likovnog identiteta zajedno s Guidom Nolittom (Sergio Bonelli) i crtač svih naslovnica redovne serije do broja 665; nakon njegove smrti u travnju 2016. naslijedio ga je Alessandro Piccinelli počevši od broja 666."
  },

  /* ---- Tex: cartonati rossi ---- */
  "nota:tex-cart-mondadori": {
    en: "A single series, begun in 1975 with \"Il mio nome è Tex\", a Christmas title published by Mondadori under licence from Sergio Bonelli — whose publishing house was then called CEPIM. The changing imprint on the spines follows the successive names of the publisher, not a change of series: although one is blue and one is yellow, to Tex readers they remain the \"red hardbacks\". Some titles are present in more than one copy. The volumes are kept in protective sleeves inside a closed cabinet. The photographs of front, spine and edges document the condition of some individual copies.",
    hr: "Jedinstvena serija, započeta 1975. naslovom \"Il mio nome è Tex\", božićnim izdanjem koje je objavio Mondadori po licenci Sergia Bonellija — čija se izdavačka kuća tada zvala CEPIM. Promjena znaka izdavača na hrptovima prati kasnije nazive iste kuće, a ne promjenu serije: iako je jedan plav i jedan žut, za Texove čitatelje to ostaju \"crveni tvrdoukoričeni\". Neki naslovi zastupljeni su u više primjeraka. Svesci se čuvaju u zaštitnim vrećicama u zatvorenom ormaru. Fotografije prednje strane, hrpta i reza dokumentiraju stanje pojedinih primjeraka."
  },

  /* ---- Tex: il Tex di Magnus ---- */
  "nota:tex-cart-magnus": {
    en: "The giant hardback edition of \"La valle del terrore\" (Il Tex di Magnus), published by Alessandro Editore in 1998, was printed in a limited run of 825 numbered copies, in the giant format (35×50 cm) of Magnus's original artwork. A volume of great standing, and a beautiful thing.",
    hr: "Veliko tvrdoukoričeno izdanje priče \"La valle del terrore\" (Il Tex di Magnus), koje je 1998. objavio Alessandro Editore, tiskano je u ograničenoj nakladi od 825 numeriranih primjeraka, u velikom formatu (35×50 cm) — istom kao Magnusove originalne table. Svezak velike vrijednosti i prekrasan."
  },

  /* ---- Tex: texoni ---- */
  "nota:tex-texoni-serie": {
    en: "An unbroken run from no. 1 to no. 25, most of them in more than one copy; from 25 onwards, a few loose volumes. The issues are kept in protective sleeves inside a closed cabinet. Some titles are present in more than one copy. Every copy of Texone no. 9 in the collection comes complete with the original print from the \"Serata Magnus\" — 25 May 1996, RCS Rizzoli bookshop, Bologna.",
    hr: "Neprekinuti niz od br. 1 do br. 25, većinom u više primjeraka; od 25 nadalje, poneki pojedinačni svezak. Brojevi se čuvaju u zaštitnim vrećicama u zatvorenom ormaru. Neki naslovi zastupljeni su u više primjeraka. Svaki primjerak Texonea br. 9 u zbirci dolazi kompletan s originalnim grafičkim listom sa \"Serate Magnus\" — 25. svibnja 1996., knjižara RCS Rizzoli, Bologna."
  },

  /* ---- Compagnia della Forca ---- */
  "nota:forca-regolare": {
    en: "The complete 1979 series. The collection includes the stickers, the postcard and two extremely rare unpublished stickers that never appeared in the regular series.",
    hr: "Kompletna serija iz 1979. Zbirka uključuje naljepnice, razglednicu i dvije iznimno rijetke neobjavljene naljepnice koje nikada nisu izašle u redovnoj seriji."
  },

  /* ---- Maxmagnus ---- */
  "nota:mm-regolare": {
    en: "Complete original series, with all the stickers.",
    hr: "Kompletna originalna serija, sa svim naljepnicama."
  },

  /* ---- valori delle schede ---- */
  "val:Prima edizione": { en: "First edition", hr: "Prvo izdanje" },
  "val:Prima edizione, originali": { en: "First edition, originals", hr: "Prvo izdanje, originali" },
  "val:da magazzino": { en: "warehouse stock, unread", hr: "nečitan" },
  "val:da edicola": { en: "as sold new", hr: "iz kioska" },
  "val:ottimo": { en: "excellent", hr: "odlično očuvan" },
  "val:100% tra magazzino, edicola e ottimo": {
    en: "100% between warehouse stock, as sold new and excellent",
    hr: "100% između nečitanog, iz kioska i odlično očuvanog"
  },
  "val:90% tra magazzino, edicola e ottimo · 10% buono": {
    en: "90% between warehouse stock, as sold new and excellent · 10% good",
    hr: "90% između nečitanog, iz kioska i odlično očuvanog · 10% dobro očuvan"
  },
  "val:da magazzino, sempre custodito nel cofanetto originale": {
    en: "warehouse stock, always kept in its original slipcase",
    hr: "nečitan, oduvijek čuvan u originalnoj kutiji"
  },


  "val:126 albi, 33 titoli diversi": {
    en: "126 issues, 33 different titles",
    hr: "126 brojeva, 33 različita naslova"
  },
  "val:39": { en: "39", hr: "39" },

  /* ---- intestazioni degli elenchi ---- */
  "cap:I 7 volumi fotografati": {
    en: "The 7 volumes photographed",
    hr: "7 fotografiranih svezaka"
  },
  "cap:Gli altri volumi presenti nella collezione": {
    en: "The other volumes in the collection",
    hr: "Ostali svesci u zbirci"
  },
  "coda:Dal 25 in poi, qualche volume sfuso.": {
    en: "From 25 onwards, a few loose volumes.",
    hr: "Od 25 nadalje, poneki pojedinačni svezak."
  },
  "cap:Dal n.1 al n.25": {
    en: "From no. 1 to no. 25",
    hr: "Od br. 1 do br. 25"
  },

  /* ---- didascalie delle foto ---- */
  "cap:I 39 volumi della collezione": { en: "The 39 volumes in the collection", hr: "39 svezaka zbirke" },
  "cap:I 7 volumi fotografati singolarmente": { en: "The 7 volumes photographed individually", hr: "7 pojedinačno fotografiranih svezaka" },
  "cap:Il mio nome è Tex — copertina": { en: "Il mio nome è Tex — front cover", hr: "Il mio nome è Tex — naslovnica" },
  "cap:Il mio nome è Tex — dorso e taglio": { en: "Il mio nome è Tex — spine and edges", hr: "Il mio nome è Tex — hrbat i rez" },
  "cap:Un'avventura nel nord — copertina": { en: "Un'avventura nel nord — front cover", hr: "Un'avventura nel nord — naslovnica" },
  "cap:Un'avventura nel nord — dorso e taglio": { en: "Un'avventura nel nord — spine and edges", hr: "Un'avventura nel nord — hrbat i rez" },
  "cap:Tex contro Mefisto — copertina": { en: "Tex contro Mefisto — front cover", hr: "Tex contro Mefisto — naslovnica" },
  "cap:Tex contro Mefisto — dorso e taglio": { en: "Tex contro Mefisto — spine and edges", hr: "Tex contro Mefisto — hrbat i rez" },
  "cap:Tex e la piramide misteriosa — copertina": { en: "Tex e la piramide misteriosa — front cover", hr: "Tex e la piramide misteriosa — naslovnica" },
  "cap:Tex e la piramide misteriosa — dorso e taglio": { en: "Tex e la piramide misteriosa — spine and edges", hr: "Tex e la piramide misteriosa — hrbat i rez" },
  "cap:La conquista del west — copertina": { en: "La conquista del west — front cover", hr: "La conquista del west — naslovnica" },
  "cap:Copertina": { en: "Front cover", hr: "Naslovnica" },
  "cap:Quarta di copertina, con la fotografia di Magnus": { en: "Back cover, with the photograph of Magnus", hr: "Zadnja korica, s fotografijom Magnusa" },
  "cap:Il volume nel cofanetto originale": { en: "The volume in its original slipcase", hr: "Svezak u originalnoj kutiji" },
  "cap:Il cofanetto chiuso": { en: "The slipcase closed", hr: "Zatvorena kutija" },
  "cap:Gli Albi Speciali nell'armadio": { en: "The Albi Speciali in the cabinet", hr: "Specijalna izdanja u ormaru" },
  "cap:Albo Speciale n.9 — La valle del terrore, disegni di Magnus": {
    en: "Albo Speciale no. 9 — La valle del terrore, art by Magnus",
    hr: "Specijalno izdanje br. 9 — La valle del terrore, crta Magnus"
  },
  "cap:«Serata Magnus», 25 maggio 1996 — stampa omaggio della Libreria RCS Rizzoli Libri di via dei Mille, Bologna": {
    en: "\"Serata Magnus\", 25 May 1996 — complimentary print from the RCS Rizzoli bookshop in via dei Mille, Bologna",
    hr: "\"Serata Magnus\", 25. svibnja 1996. — prigodni grafički list knjižare RCS Rizzoli u ulici via dei Mille, Bologna"
  },
  "cap:Raccoglitori in pelle su misura, 45×35 cm": {
    en: "Bespoke leather binders, 45×35 cm",
    hr: "Kožne mape po narudžbi, 45×35 cm"
  },



  /* ---- nomi di serie e gruppi ----
     Traducibili perché sono descrizioni, non nomi propri.
     Restano invece in italiano i soprannomi ("Cartonati rossi",
     "Texoni") e i titoli delle opere: quelli sono nomi. */
  "ser:Serie regolare": { en: "Regular series", hr: "Redovna serija" },
  "ser:Cartonati": { en: "Hardcovers", hr: "Tvrdoukoričena izdanja" },
  "ser:Cartonati vari": { en: "Other hardcovers", hr: "Razna tvrdoukoričena izdanja" },
  "ser:Cartonati rossi": {
    en: "Cartonati rossi — the red hardcovers",
    hr: "Cartonati rossi — crveni tvrdoukoričeni"
  },
  "ser:Albi Speciali": { en: "Special issues", hr: "Specijalna izdanja" },
  "ser:Texoni": { en: "Texoni — the giant specials", hr: "Texoni — veliki specijali" },

  /* ---- note sulle singole tavole ---- */
  "cap:Tavola titolo": { en: "title splash page", hr: "uvodna splash tabla" },
  "cap:Fine dell'episodio": { en: "final page of the episode", hr: "završna tabla epizode" },
  "cap:Chiusura de la dea nera": { en: "closing page of la dea nera", hr: "završna tabla priče la dea nera" },
  "cap:Tavola ricostruita da Marco Verni — vedi nota sotto": {
    en: "page reconstructed by Marco Verni — see note below",
    hr: "tabla koju je rekonstruirao Marco Verni — vidi bilješku dolje"
  },

  /* ---- didascalie ricorrenti ---- */
  "did:copertina": { en: "front cover", hr: "naslovnica" },
  "did:dorso": { en: "spine and edges", hr: "hrbat i rez" }
};
