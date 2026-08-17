/* ============================================================
   I FUMETTI DEL MASSI — FILE DEI DATI
   ============================================================
   Questo è l'UNICO file da toccare per aggiungere materiale.
   Non serve mai modificare index.html.

   COME È ORGANIZZATO IL SITO
   --------------------------
   Le tavole originali sono ordinate PER AUTORE (il disegnatore).
   Dentro ogni autore ci possono essere due cose, o una sola:

     storie[]   = storie complete (divise in albi/capitoli)
     singole[]  = tavole e illustrazioni singole

   Un autore può avere solo storie (Donatelli oggi), solo tavole
   singole (Ferri, Della Monica, Laurenti, Romanini oggi), oppure
   tutte e due. Il sito mostra solo quello che c'è: se storie[] è
   vuoto quel titoletto non compare nemmeno.

   I TRE LIVELLI DI LETTURA
     1. AUTORE        chi ha disegnato                 -> tendina + indice
     2. TIPO          storia completa / tavola singola -> tendina
     3. PERSONAGGIO   Zagor, Tex, Kriminal...          -> tendina

   PER AGGIUNGERE UN AUTORE NUOVO
     copia un blocco dentro AUTORI e cambialo. Se di quell'autore
     hai una storia completa mettila in storie[], se hai pezzi
     sciolti mettili in singole[]. Lascia [] quello che non serve.

   PER AGGIUNGERE UNA STORIA A UN AUTORE CHE C'È GIÀ
     aggiungi un blocco dentro il suo storie[]

   REGOLA: ogni tavola deve sempre avere il suo "personaggio".
   L'autore si eredita da chi la contiene, ma si può scavalcare
   caso per caso — vedi la pagina 21 di Odio!, che è di Marco
   Verni pur stando dentro una storia di Donatelli.

   Gli sceneggiatori (Nolitta, Sclavi, Max Bunker...) compaiono
   nelle descrizioni ma MAI nelle tendine: lì vanno i disegnatori.
   ============================================================ */

const AUTORI = [

  /* ---------------- FRANCO DONATELLI ---------------- */
  {
    id: "donatelli",
    nome: "Franco Donatelli",
    nota: "",

    storie: [
      {
        id: "odio",
        titolo: "Zagor — Odio!",
        nTavole: 212,
        navLabel: "Odio!",
        sottotitolo: "Storia completa in tre albi",
        testi: "Guido Nolitta",
        disegni: "Franco Donatelli",
        intro: "Seconda storia di Zagor disegnata dall'immenso Franco Donatelli, che qui consolida il tratto zagoriano amato per decine di anni a venire. La storia completa consiste di 212 tavole originali, tutte facenti parte di questa collezione e in perfetto stato di conservazione, fatta eccezione per la sola pagina 21 — rimpiazzata da un'opera, pure originale, di pari valore (vedi nota a chiusura della saga \"Odio!\"). Le tavole mostrate qui sotto sono una selezione, non l'intera storia.",
        capitoli: [
          {
            numero: "Zenith Gigante n.90 — settembre 1968 (Zagor n.39)",
            titolo: "Zagor — Odio!",
            navLabel: "Odio!",
            personaggio: "Zagor",
            tavole: [
              {f:"tavole/odio/01_p003.jpg", p:"3", note:"Tavola titolo"},
              {f:"tavole/odio/02_p005.jpg", p:"5"},
              {f:"tavole/odio/03_p010.jpg", p:"10"},
              {f:"tavole/odio/04_p014.jpg", p:"14"},
              {f:"tavole/odio/05_p021.jpg", p:"21", note:"Tavola ricostruita da Marco Verni — vedi nota sotto", autore:"Marco Verni"},
              {f:"tavole/odio/06_p027.jpg", p:"27"},
              {f:"tavole/odio/07_p036.jpg", p:"36"},
              {f:"tavole/odio/08_p043.jpg", p:"43"},
              {f:"tavole/odio/09_p055.jpg", p:"55"},
              {f:"tavole/odio/10_p059.jpg", p:"59"},
              {f:"tavole/odio/11_p081.jpg", p:"81"},
              {f:"tavole/odio/12_p094.jpg", p:"94"},
              {f:"tavole/odio/13_p095.jpg", p:"95"}
            ],
            notaFinale: `<strong>Su pagina 21:</strong> l'unica tavola non originale della collezione. La tavola di Franco Donatelli è mancante; a completare la storia è una ricostruzione fedele realizzata dall'amico <strong>Marco Verni</strong> — tra i disegnatori di Zagor più apprezzati per la vicinanza al tratto del Maestro Gallieno Ferri — che ha voluto farmi questo dono personale per chiudere l'albo senza lacune.`
          },
          {
            numero: "Zenith Gigante n.91 — ottobre 1968 (Zagor n.40)",
            titolo: "Zagor — Lo Spettro del Passato",
            navLabel: "Lo Spettro del Passato",
            personaggio: "Zagor",
            tavole: [
              {f:"tavole/spettro/01_p003.jpg", p:"3", note:"Tavola titolo"},
              {f:"tavole/spettro/02_p017.jpg", p:"17"},
              {f:"tavole/spettro/03_p022.jpg", p:"22"},
              {f:"tavole/spettro/04_p032.jpg", p:"32"},
              {f:"tavole/spettro/05_p038.jpg", p:"38"},
              {f:"tavole/spettro/06_p042.jpg", p:"42"},
              {f:"tavole/spettro/07_p044.jpg", p:"44"},
              {f:"tavole/spettro/08_p056.jpg", p:"56"},
              {f:"tavole/spettro/09_p059.jpg", p:"59"},
              {f:"tavole/spettro/10_p062.jpg", p:"62"},
              {f:"tavole/spettro/11_p072.jpg", p:"72"},
              {f:"tavole/spettro/12_p078.jpg", p:"78"},
              {f:"tavole/spettro/13_p083.jpg", p:"83"},
              {f:"tavole/spettro/14_p089.jpg", p:"89"}
            ]
          },
          {
            numero: "20 pagine di Zenith Gigante n.92 — novembre 1968 (Zagor n.41)",
            titolo: "Zagor — Vittoria!",
            navLabel: "Vittoria!",
            personaggio: "Zagor",
            tavole: [
              {f:"tavole/vittoria/01_p003.jpg", p:"3", note:"Tavola titolo"},
              {f:"tavole/vittoria/02_p009.jpg", p:"9"},
              {f:"tavole/vittoria/03_p010.jpg", p:"10"},
              {f:"tavole/vittoria/04_p011.jpg", p:"11"},
              {f:"tavole/vittoria/05_p022.jpg", p:"22", note:"Fine dell'episodio"}
            ]
          }
        ]
      },
      {
        id: "deanera",
        titolo: "Zagor — la dea nera",
        nTavole: 120,
        navLabel: "la dea nera",
        sottotitolo: "Storia completa in due albi",
        testi: "Guido Nolitta",
        disegni: "Franco Donatelli",
        intro: "La storia completa consiste di 120 tavole originali, tutte facenti parte di questa collezione e in perfetto stato di conservazione. Le tavole mostrate qui sotto sono una selezione, non l'intera storia.",
        capitoli: [
          {
            numero: "Zenith Gigante n.104 — novembre 1969 (Zagor n.53)",
            titolo: "Zagor — la dea nera",
            navLabel: "la dea nera",
            personaggio: "Zagor",
            tavole: [
              {f:"tavole/deanera/01_p025.jpg", p:"25", note:"Tavola titolo"},
              {f:"tavole/deanera/02_p034.jpg", p:"34"},
              {f:"tavole/deanera/03_p039.jpg", p:"39"},
              {f:"tavole/deanera/04_p044.jpg", p:"44"},
              {f:"tavole/deanera/05_p049.jpg", p:"49"},
              {f:"tavole/deanera/06_p054.jpg", p:"54"},
              {f:"tavole/deanera/07_p063.jpg", p:"63"},
              {f:"tavole/deanera/08_p066.jpg", p:"66"},
              {f:"tavole/deanera/09_p071.jpg", p:"71"},
              {f:"tavole/deanera/10_p075.jpg", p:"75"},
              {f:"tavole/deanera/11_p090.jpg", p:"90"},
              {f:"tavole/deanera/12_p094.jpg", p:"94"},
              {f:"tavole/deanera/13_p095.jpg", p:"95"},
              {f:"tavole/deanera/14_p098.jpg", p:"98"}
            ]
          },
          {
            numero: "44 pagine di Zenith Gigante n.105 — dicembre 1969 (Zagor n.54)",
            titolo: "Zagor (44 pag di Natale Calibro .45)",
            navLabel: "Natale Calibro .45",
            personaggio: "Zagor",
            tavole: [
              {f:"tavole/natale/01_p005.jpg", p:"5"},
              {f:"tavole/natale/02_p010.jpg", p:"10"},
              {f:"tavole/natale/03_p013.jpg", p:"13"},
              {f:"tavole/natale/04_p017.jpg", p:"17"},
              {f:"tavole/natale/05_p019.jpg", p:"19"},
              {f:"tavole/natale/06_p025.jpg", p:"25"},
              {f:"tavole/natale/07_p030.jpg", p:"30"},
              {f:"tavole/natale/08_p036.jpg", p:"36"},
              {f:"tavole/natale/09_p038.jpg", p:"38", note:"Chiusura de la dea nera"}
            ]
          }
        ]
      }
    ],

    singole: []
  },

  /* ---------------- GALLIENO FERRI ---------------- */
  {
    id: "ferri",
    nome: "Gallieno Ferri",
    nota: "Creatore grafico di Zagor insieme a Guido Nolitta (Sergio Bonelli) e autore di tutte le copertine della serie regolare fino al n.665; dopo la sua scomparsa, nell'aprile 2016, gli subentra Alessandro Piccinelli a partire dal n.666.",
    storie: [],
    singole: [
      {f:"altre/ferri/z001_p18.jpg", titolo:"Zagor n.1 — pagina 18", personaggio:"Zagor"},
      {f:"altre/ferri/z005_p62.jpg", titolo:"Zagor n.5 — I due sosia — pagina 62", personaggio:"Zagor"},
      {f:"altre/ferri/z016_p99.jpg", titolo:"Zagor n.16 — I padroni del fuoco — pagina 99", personaggio:"Zagor"},
      {f:"altre/ferri/z020_p12.jpg", titolo:"Zagor n.20 — L'inferno dei vivi — pagina 12", personaggio:"Zagor"},
      {f:"altre/ferri/z063_p99.jpg", titolo:"Zagor n.63 — Sfida all'ignoto — pagina 99", personaggio:"Zagor"},
      {f:"altre/ferri/z097_p82.jpg", titolo:"Zagor n.97 — Oceano — pagina 82", personaggio:"Zagor"},
      {f:"altre/ferri/z124_p81.jpg", titolo:"Zagor n.124 — Zagor contro Supermike — pagina 81", personaggio:"Zagor"},
      {f:"altre/ferri/recco_poster.jpg", titolo:"Originale per il poster della fiera di Recco", personaggio:"Zagor", note:"2001, data da confermare"},
      {f:"altre/ferri/recco_cartolina.jpg", titolo:"Originale per la cartolina della fiera di Recco", personaggio:"Zagor", note:"1995, data da confermare"}
    ]
  },

  /* ---------------- DELLA MONICA ---------------- */
  {
    id: "dellamonica",
    nome: "Raffaele Della Monica",
    nota: "",
    storie: [],
    singole: [
      {f:"altre/dellamonica/zagor_vampiro.jpg", titolo:"Zagor e il vampiro", personaggio:"Zagor", note:"2007"},
      {f:"altre/dellamonica/tex_toroseduto.jpg", titolo:"Tex e Toro Seduto", personaggio:"Tex", note:"2007"}
    ]
  },

  /* ---------------- LAURENTI ---------------- */
  {
    id: "laurenti",
    nome: "Mauro Laurenti",
    nota: "",
    storie: [],
    singole: [
      {f:"altre/laurenti/zagor_roma.jpg", titolo:"Zagor per Roma", personaggio:"Zagor", note:"1998"},
      {f:"altre/laurenti/zagor_cartoomix.jpg", titolo:"Zagor per Milano Cartoomix", personaggio:"Zagor", note:"2007"}
    ]
  },

  /* ---------------- ROMANINI ---------------- */
  {
    id: "romanini",
    nome: "Giovanni Romanini",
    nota: "",
    storie: [],
    singole: [
      {f:"altre/romanini/kriminal.jpg", titolo:"Kriminal", personaggio:"Kriminal"}
    ]
  }

  /* ---------------- MARCO VERNI ----------------
     Oggi Verni compare con la sola pagina 21 di Odio!, che sta
     dentro la storia di Donatelli ma è marcata come sua: il
     filtro Autore la trova comunque. Quando arriveranno altre
     sue tavole, apri qui un blocco tutto suo togliendo questi
     segni di commento:

  ,{
    id: "verni",
    nome: "Marco Verni",
    nota: "",
    storie: [],
    singole: []
  }
  ------------------------------------------------ */

];

/* ============================================================
   FUMETTI — organizzati su tre livelli
   ============================================================
     PERSONAGGIO   Tex, Zagor, Dylan Dog...
       SERIE       Cartonati, Serie regolare, Serie speciale...
         GRUPPO    suddivisione ulteriore, FACOLTATIVA

   Una serie può contenere gruppi, oppure avere direttamente
   le sue foto e i suoi titoli. Il sito si adatta da solo.

   Esempio con gruppi   -> Tex / Cartonati / Mondadori-CEPIM
   Esempio senza gruppi -> Alan Ford / Serie regolare Corno

   I fumetti si filtrano SOLO per personaggio: le tendine
   Autore e Tipo riguardano le tavole originali.
   ============================================================ */

const FUMETTI = [

  /* ==================== TEX ==================== */
  {
    id: "tex",
    personaggio: "Tex",
    nota: "",
    serie: [
      {
        id: "tex-texoni",
        titolo: "Texoni",
        nota: "",
        gruppi: [
          {
            id: "tex-texoni-serie",
            n: 126,
            titolo: "Albi Speciali",
            crediti: "Sergio Bonelli Editore",
            edizione: "Prima edizione",
            conservazione: "100% tra magazzino, edicola e ottimo",
            volumi: "126 albi, 33 titoli diversi",
            nota: "Sequenza ininterrotta dal n.1 al n.25, in gran parte in più copie; dal 25 in poi, qualche volume sfuso. Gli albi sono conservati in busta protettiva e in armadio chiuso. Alcuni titoli sono presenti in più copie. Tutte le copie del Texone n.9 presenti nella collezione sono complete della stampa originale della «Serata Magnus» — 25 maggio 1996, Libreria RCS Rizzoli, Bologna.",
            foto: [
              {f:"fumetti/tex/texoni/armadio.jpg", didascalia:"Gli Albi Speciali nell'armadio"},
              {f:"fumetti/tex/texoni/albo09_valledelterrore.jpg", didascalia:"Albo Speciale n.9 — La valle del terrore, disegni di Magnus"},
              {f:"fumetti/tex/texoni/serata_magnus.jpg", didascalia:"«Serata Magnus», 25 maggio 1996 — stampa omaggio della Libreria RCS Rizzoli Libri di via dei Mille, Bologna"}
            ],
            elenchi: [
              {
                cap: "Dal n.1 al n.25",
                voci: [
                  "n.1 — Tex il grande!",
                  "n.2 — Terra senza legge",
                  "n.3 — Il segno del serpente",
                  "n.4 — Piombo rovente",
                  "n.5 — Fiamme sull'Arizona",
                  "n.6 — La grande rapina",
                  "n.7 — Il pueblo perduto",
                  "n.8 — Il soldato comanche",
                  "n.9 — La valle del terrore",
                  "n.10 — L'uomo di Atlanta",
                  "n.11 — L'ultima frontiera",
                  "n.12 — Gli assassini",
                  "n.13 — Sangue sul Colorado",
                  "n.14 — L'ultimo ribelle",
                  "n.15 — Il cavaliere solitario",
                  "n.16 — I predatori del deserto",
                  "n.17 — Mercanti di schiavi",
                  "n.18 — Ombre nella notte",
                  "n.19 — Il prezzo della vendetta",
                  "n.20 — Canyon Dorado",
                  "n.21 — Il profeta hualpai",
                  "n.22 — Seminoles",
                  "n.23 — Patagonia",
                  "n.24 — I ribelli di Cuba",
                  "n.25 — Verso l'Oregon"
                ],
                coda: "Dal 25 in poi, qualche volume sfuso."
              }
            ]
          }
        ]
      },
      {
        id: "tex-cartonati",
        titolo: "Cartonati",
        nota: "",
        gruppi: [
          {
            id: "tex-cart-mondadori",
            n: 39,
            titolo: "Cartonati rossi",
            crediti: "Mondadori · edizioni CEPIM · Daim Press / Sergio Bonelli Editore",
            edizione: "Prima edizione",
            conservazione: "90% tra magazzino, edicola e ottimo · 10% buono",
            nota: "Serie unica, iniziata nel 1975 con «Il mio nome è Tex», strenna natalizia pubblicata da Mondadori su licenza di Sergio Bonelli — la cui casa editrice allora si chiamava CEPIM. Il cambio di marchio sui dorsi segue le denominazioni successive della casa editrice, non un cambio di serie: pur essendocene uno blu e uno giallo, per i texani restano i «cartonati rossi». Alcuni titoli sono presenti in più copie. I volumi sono conservati in busta protettiva e in armadio chiuso. Le foto di fronte, dorso e taglio documentano lo stato di alcuni singoli pezzi.",
            volumi: "39",
            foto: [
              {f:"fumetti/tex/cartonati/mondadori/scaffale.jpg", didascalia:"I 39 volumi della collezione"},
              {f:"fumetti/tex/cartonati/mondadori/insieme.jpg", didascalia:"I 7 volumi fotografati singolarmente"},
              {f:"fumetti/tex/cartonati/mondadori/ilmionomeetex.jpg", didascalia:"Il mio nome è Tex — copertina"},
              {f:"fumetti/tex/cartonati/mondadori/dorso_ilmionomeetex.jpg", didascalia:"Il mio nome è Tex — dorso e taglio"},
              {f:"fumetti/tex/cartonati/mondadori/avventuranelnord.jpg", didascalia:"Un'avventura nel nord — copertina"},
              {f:"fumetti/tex/cartonati/mondadori/dorso_avventuranelnord.jpg", didascalia:"Un'avventura nel nord — dorso e taglio"},
              {f:"fumetti/tex/cartonati/mondadori/mefisto.jpg", didascalia:"Tex contro Mefisto — copertina"},
              {f:"fumetti/tex/cartonati/mondadori/dorso_mefisto.jpg", didascalia:"Tex contro Mefisto — dorso e taglio"},
              {f:"fumetti/tex/cartonati/mondadori/piramide.jpg", didascalia:"Tex e la piramide misteriosa — copertina"},
              {f:"fumetti/tex/cartonati/mondadori/dorso_piramide.jpg", didascalia:"Tex e la piramide misteriosa — dorso e taglio"},
              {f:"fumetti/tex/cartonati/mondadori/conquistadelwest.jpg", didascalia:"La conquista del west — copertina"}
            ],
            elenchi: [
              {
                cap: "I 7 volumi fotografati",
                voci: [
                  "Il mio nome è Tex",
                  "Un'avventura nel nord",
                  "Tex e i fuorilegge",
                  "Tex e gli indiani",
                  "La conquista del west",
                  "Tex contro Mefisto",
                  "Tex e la piramide misteriosa"
                ]
              },
              {
                cap: "Gli altri volumi presenti nella collezione",
                voci: [
                  "Apache Kid",
                  "Fiamme di guerra",
                  "Grido di guerra",
                  "I dominatori della valle",
                  "I giustizieri di Vegas",
                  "Il fiore della morte",
                  "Tex e il segno di Cruzado",
                  "Il segreto degli Anasazi",
                  "La legge di Tex",
                  "La pattuglia sperduta",
                  "L'uomo senza passato",
                  "Lotta sul mare",
                  "Nell'Inferno Verde",
                  "Sasquatch",
                  "Sentieri di sangue",
                  "Sfida nella città fantasma",
                  "Tex e i soldati",
                  "Wanted!"
                ]
              }
            ]
          },
          {
            id: "tex-cart-magnus",
            n: 1,
            titolo: "Il Tex di Magnus",
            crediti: "",
            edizione: "Prima edizione",
            conservazione: "da magazzino, sempre custodito nel cofanetto originale",
            nota: "Il volume cartonato gigante de «La valle del terrore» (Il Tex di Magnus), pubblicato da Alessandro Editore nel 1998, fu stampato in tiratura limitata a 825 copie, numerate e in formato gigante (35×50 cm), lo stesso dei disegni originali di Magnus. Volume di grande pregio, bellissimo.",
            foto: [
              {f:"fumetti/tex/cartonati/magnus/volume.jpg", didascalia:"Copertina"},
              {f:"fumetti/tex/cartonati/magnus/stampa.jpg", didascalia:"Quarta di copertina, con la fotografia di Magnus"},
              {f:"fumetti/tex/cartonati/magnus/imballo_aperto.jpg", didascalia:"Il volume nel cofanetto originale"},
              {f:"fumetti/tex/cartonati/magnus/imballo.jpg", didascalia:"Il cofanetto chiuso"}
            ],
            titoli: []
          },
          {
            id: "tex-cart-vari",
            n: 4,
            titolo: "Cartonati vari",
            crediti: "Sergio Bonelli Editore · Federico Motta Editore",
            edizione: "Prima edizione",
            conservazione: "ottimo",
            nota: "",
            foto: [
              "fumetti/tex/cartonati/vari/insieme.jpg"
            ],
            titoli: [
              "Tex — L'inesorabile (Mauro Boselli, Claudio Villa)",
              "La mano rossa",
              "I cinquant'anni di Tex — omaggio ad Aurelio Galleppini",
              "Tex — Un eroe per amico (Gianni Bono, Leonardo Gori)"
            ]
          }
        ]
      }
    ]
  },

  /* ==================== ALAN FORD ==================== */
  {
    id: "alanford",
    personaggio: "Alan Ford",
    nota: "",
    serie: [
      {
        id: "af-corno",
        n: 10,
        titolo: "Serie regolare",
        crediti: "Testi di Max Bunker, disegni di Magnus · Editoriale Corno",
        range: "1 – 10",
        edizione: "Prima edizione, originali",
        conservazione: "da magazzino",
        nota: "",
        foto: [
          "fumetti/alanford/alanford_01.jpg",
          "fumetti/alanford/alanford_02.jpg",
          "fumetti/alanford/alanford_03.jpg",
          "fumetti/alanford/alanford_04.jpg"
        ],
        titoli: [
          "Il Gruppo T.N.T.",
          "Il dente cariato",
          "Operazione Frankenstein",
          "La casa dei fantasmi",
          "Date! Date! Date!",
          "Alex Berry non c'è più",
          "Una gita a San Guerreta",
          "L'albero di Natale",
          "Zoo Symphony",
          "Formule"
        ]
      }
    ]
  },

  /* ==================== DYLAN DOG ==================== */
  {
    id: "dylandog",
    personaggio: "Dylan Dog",
    nota: "",
    serie: [
      {
        id: "dd-regolare",
        n: 20,
        titolo: "Serie regolare",
        crediti: "Testi di Tiziano Sclavi, disegni di vari autori · Daim Press / Sergio Bonelli Editore",
        range: "1 – 20",
        edizione: "Prima edizione, originali",
        conservazione: "da edicola",
        nota: "",
        foto: [
          "fumetti/dylandog/dylandog_01.jpg",
          "fumetti/dylandog/dylandog_02.jpg",
          "fumetti/dylandog/dylandog_03.jpg",
          "fumetti/dylandog/dylandog_04.jpg",
          "fumetti/dylandog/dylandog_05.jpg",
          "fumetti/dylandog/dylandog_06.jpg",
          "fumetti/dylandog/dylandog_07.jpg"
        ],
        titoli: [
          "L'Alba dei Morti Viventi",
          "Jack lo Squartatore",
          "Le Notti della Luna Piena",
          "Il Fantasma di Anna Never",
          "Gli Uccisori",
          "La Bellezza del Demonio",
          "La Zona del Crepuscolo",
          "Il Ritorno del Mostro",
          "Alfa e Omega",
          "Attraverso lo Specchio",
          "Diabolo il Grande",
          "Killer!",
          "Vivono tra Noi",
          "Fra la Vita e la Morte",
          "Canale 666",
          "Il Castello della Paura",
          "La Dama in Nero",
          "Cagliostro!",
          "Memorie dall'Invisibile",
          "Dal Profondo"
        ]
      }
    ]
  },

  /* ============ LA COMPAGNIA DELLA FORCA ============ */
  {
    id: "forca",
    personaggio: "La Compagnia della Forca",
    nota: "",
    serie: [
      {
        id: "forca-regolare",
        n: 19,
        titolo: "Serie regolare",
        crediti: "Magnus & Romanini",
        range: "1 – 19",
        edizione: "Prima edizione, originali",
        conservazione: "ottimo",
        nota: "Serie completa del 1979. La collezione comprende gli adesivi, la cartolina e due adesivi inediti extra rari, mai usciti nella serie regolare.",
        foto: [
          "fumetti/forca/forca_01.jpg",
          "fumetti/forca/forca_02.jpg",
          "fumetti/forca/forca_03.jpg",
          "fumetti/forca/forca_04.jpg",
          "fumetti/forca/forca_05.jpg"
        ],
        titoli: [
          "La Compagnia della Forca",
          "Il Castellano Sparviero",
          "Il Rapimento di Annalisa",
          "Il Reame di Bellorizzonte",
          "Il Grande Torneo",
          "Il Ritorno di Gerardo",
          "Il Trullo dei Sette Savi",
          "La Pantera del Mare",
          "L'Abate Nero",
          "L'Impero dell'Albero Secco",
          "Il Pasticciere del Re",
          "La Traversata Maledetta",
          "Gli Schiavi di Punis",
          "Il Tappeto Volante",
          "Un Certo Dottor Nadir",
          "La Rosa della Discordia",
          "I Due Genii Siamesi",
          "La Bella Fiammeggiante",
          "La Resa dei Conti"
        ]
      }
    ]
  },

  /* ==================== MAXMAGNUS ==================== */
  {
    id: "maxmagnus",
    personaggio: "Maxmagnus",
    nota: "",
    serie: [
      {
        id: "mm-regolare",
        n: 16,
        titolo: "Serie regolare",
        crediti: "Testi di Max Bunker, disegni di Magnus",
        range: "1 – 16",
        edizione: "Prima edizione, originali",
        conservazione: "ottimo",
        nota: "Serie completa e originale, con tutti gli adesivi.",
        foto: [
          "fumetti/maxmagnus/maxmagnus_01.jpg",
          "fumetti/maxmagnus/maxmagnus_02.jpg",
          "fumetti/maxmagnus/maxmagnus_03.jpg"
        ],
        titoli: [
          "C'era una Volta un Re",
          "Il Giorno del Giudizio Salomonico",
          "Il Lago dei Miracoli",
          "Il Rapimento del Principe",
          "La Catena della Fraternità",
          "E il Gran Giorno Venne",
          "Sponsali Decretati",
          "La Festa dei Bagordi",
          "Il Principe è Impazzito",
          "Complotto Fatale",
          "Natale di Pace",
          "Minaccia nell'Ombra",
          "La Cattura di Sante",
          "Operazione Immagine",
          "La Magna Tenzone",
          "L'Ora della Rivolta"
        ]
      }
    ]
  }
];

/* ---------- RACCOGLITORI ---------- */

const RACCOGLITORI = [
  "raccoglitori/img_8432.jpg",
  "raccoglitori/img_8433.jpg",
  "raccoglitori/raccoglitori_insieme.jpg",
  "raccoglitori/img_8435.jpg",
  "raccoglitori/img_8469.jpg",
  "raccoglitori/img_8468.jpg"
];
