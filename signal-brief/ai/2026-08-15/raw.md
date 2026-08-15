# Costruire in fretta, controllare piano

> Dalla matematica che corre alla scrittura che arranca, dai cinquecento miliardi per i data center agli agenti che devono farsi pagare: il giorno in cui verificare è diventato ingegneria.

---

Ferragosto, e la parte di mondo che costruisce macchine intelligenti non è andata in ferie. In una diretta televisiva americana il capo di Nvidia annuncia sei accordi con Wall Street per mobilitare oltre cinquecento miliardi di dollari in centri di calcolo. Su GitHub, il posto dove i programmatori tengono il codice, un progetto pubblicato da poche ore raccoglie trentatremila stelle. E in un post di tre righe un investitore spiega perché i modelli sono bravissimi in matematica e mediocri in prosa. Signal Brief, quindici agosto duemilaventisei: tre gesti lontanissimi fra loro, che raccontano la stessa cosa.

---

Il tre agosto Paul Graham ha scritto qualcosa di piccolo, di quelle osservazioni che passano in un pomeriggio. I modelli linguistici, sostiene, non vanno bene in matematica perché la matematica sia facile. Vanno bene perché in matematica esiste una risposta giusta e una sbagliata, e la macchina se ne può accorgere da sola. La scrittura viene subito dopo, aggiunge, con una punta di umorismo nero: verranno a prendere anche lui.

Sembra un pensiero da tavolino. È la formulazione più asciutta di quello che sta succedendo adesso. Balaji Srinivasan la traduce in soldi: l'intelligenza artificiale porta quasi a zero il costo di produrre qualcosa, e sposta tutto il costo residuo su chi deve controllare il risultato.

È già accaduto altre volte. Quando Gutenberg ha reso economico stampare copie, il mestiere che si è moltiplicato subito dopo non è stato lo stampatore: è stato il correttore di bozze. Ogni volta che una tecnologia rende facile fabbricare, il punto stretto si sposta su chi deve dire se la cosa fabbricata va bene.

Ieri raccontavamo questo spostamento come una faccenda quasi filosofica: un limite della testa umana, la fatica di capire ciò che una macchina ha generato. Da questa settimana non è più così. È diventato un problema di ingegneria, e lo si vede in tre gesti diversi compiuti da tre persone che non si parlano. Vitalik Buterin ha messo la verifica formale assistita dall'IA dentro la lista delle cose da costruire su Ethereum. Alexandr Wang costruisce gli agenti di Meta attorno all'idea che si controllino da soli e verifichino in parallelo. Simon Willison, invece di commentare l'ultimo incidente di sicurezza, ne pubblica la cronologia giorno per giorno, ora per ora. Filosofia zero, componenti sì.

Sopra questa faglia se ne apre una seconda, meno raccontata, ed è quella dei soldi. Jensen Huang sta trasformando il calcolo in una classe di investimento, con centinaia di miliardi mobilitati per costruire capacità il più in fretta possibile. Benedict Evans, dall'altra parte, ricorda una regolarità storica scomoda: negli anni Novanta si sono posate migliaia di chilometri di fibra ottica, e il valore poi se lo sono preso quelli che ci hanno fatto passare sopra i servizi, non quelli che avevano scavato le trincee.

E c'è un terzo movimento, il più silenzioso. L'agente smette di essere una funzione e diventa un soggetto. Jack Dorsey mette umani e agenti nello stesso spazio di lavoro, ciascuno con la propria identità firmata. Patrick Collison sta costruendo i binari perché un agente possa essere pagato e possa pagare. Non è un dettaglio tecnico: è la differenza tra uno strumento e un attore.

Resta aperta, sotto tutto, la vecchia frattura sui pesi aperti, che questa settimana si è irrigidita. Andrew Ng: distribuire i pesi distribuisce il controllo, la sicurezza è quella. Yann LeCun: l'apertura è l'unico argine alla concentrazione del potere in poche mani private. Liang Wenfeng: è anche il modo per non dipendere da tre laboratori. Dario Amodei ha graduato la sua posizione: i modelli aperti a basso rischio sono un bene pubblico, il test deve scattare sulla capacità, non sulla licenza. Geoffrey Hinton, il sei agosto sul palco di una conferenza a Las Vegas, dice che i sistemi stanno diventando più difficili da contenere. E Sam Altman, dopo che un modello non ancora rilasciato è finito dove non doveva, ammette che lo sviluppo vada cadenzato.

Cinque posizioni, un solo dubbio: chi controlla, e con quale potere.

---

Paul Graham ha fondato Y Combinator, la fabbrica di startup da cui sono usciti mezzo Silicon Valley e una certa idea di come si costruiscono le aziende. Da anni scrive saggi brevi che vengono letti come oracoli, spesso a sproposito.

Quello del tre agosto è particolarmente sobrio. Nessuna previsione, nessun numero. Solo la constatazione che i modelli corrono dove esiste un giudice automatico e arrancano dove il giudizio è opinabile. La matematica ha un giudice: la dimostrazione o regge o non regge. Un buon paragrafo no.

La cosa più interessante per me è che Graham, nelle stesse settimane, ha detto un'altra cosa che sembra scollegata e non lo è. Ha raccontato che quando riceve una email che suona scritta da una macchina smette di leggerla, e ha precisato che non è una questione di efficienza: è una questione di fiducia. Detta così è la stessa frase di prima, girata verso il mondo umano. Quando il costo di produrre un testo crolla, il testo smette di essere una prova di qualcosa. Prima una lettera ben scritta segnalava tempo speso, attenzione, cura. Adesso non segnala più niente, e chi legge deve trovare un altro modo per capire se dall'altra parte c'è qualcuno.

È lo stesso problema del correttore di bozze, spostato sulle relazioni. Ed è il motivo per cui la verifica non sarà mai soltanto un pezzo di software.

Sul resto Graham è rimasto ottimista in modo abbastanza spericolato. Sostiene che l'intelligenza artificiale possa rovesciare il modo in cui si fa impresa, e che paradossalmente le startup siano le più protette, perché sono le uniche abbastanza leggere da cambiare direzione in fretta. Sostiene anche che la fase di progettazione si stia comprimendo, e che aumenterà la domanda per tutto ciò che comprime la fase di costruzione: i permessi, i cantieri, le procedure. La frontiera finale, dice, è la regolamentazione.

Non tutto convince. L'idea che i piccoli siano al sicuro perché agili è vecchia quanto le rivoluzioni industriali, e storicamente ha funzionato per una minoranza di piccoli. Ma la tesi centrale, quella sulla verificabilità, ha una qualità rara: si può usare come strumento. Se un dominio ha una risposta controllabile, aspettati progressi rapidi. Se non ce l'ha, aspettati risultati mediocri spacciati per buoni. È una bussola che funziona anche per chi non capisce niente di modelli, e che spiega perché i prossimi mesi saranno molto diversi a seconda del mestiere che uno fa.

---

Vitalik Buterin ha inventato Ethereum a diciannove anni e da allora fa una cosa piuttosto insolita per un fondatore: pubblica periodicamente la mappa di dove vorrebbe andare, e la confronta con quella vecchia per mostrare cosa ha sbagliato.

L'ha rifatto all'inizio di agosto. Ha messo fianco a fianco la mappa del 2023 e quella nuova, che ha chiamato Strawmap, e ha mostrato le priorità riordinate: resistenza ai computer quantistici, privacy forte, semplificazione del protocollo, meno pezzi in movimento. Dentro quell'elenco compare la voce che ci interessa: verifica formale assistita dall'intelligenza artificiale, inserita non come sperimentazione ma come parte dello stack tecnico.

Tradotto per chi non lavora in questo mestiere: la verifica formale è il tentativo di dimostrare matematicamente che un programma fa esattamente quello che dichiara di fare. Non testarlo su mille casi sperando che il millesimoprimo non esploda: dimostrarlo. È una disciplina antica, rigorosa e finora costosissima, perché richiede specialisti rari e mesi di lavoro per poche migliaia di righe. L'idea di Buterin è che la macchina possa fare la parte noiosa di quella dimostrazione.

Il punto che mi sembra rilevante è lo spostamento rispetto a poche settimane fa. La sua proposta precedente era di natura politica: usare la blockchain come strato sociale dove agenti automatici si costruiscono reputazione e risolvono le controversie. Una risposta di governo. Questa è una risposta da ingegnere: mettere il controllore dentro la catena di montaggio, non accanto.

Notate anche la coerenza con Graham, che immagino nessuno dei due abbia cercato. La verifica formale è esattamente il dominio con la risposta giusta e sbagliata: o la dimostrazione chiude, o non chiude. È il terreno dove i modelli corrono più veloce. Buterin sta prendendo il punto forte delle macchine e lo sta puntando contro il punto debole delle macchine.

Fuori da Ethereum, in luglio, aveva sostenuto un'altra idea: che servirebbero soglie concordate in anticipo, decise prima e non durante, oltre le quali rallentare lo sviluppo nei casi di rischio estremo. Un freno negoziato da fermi, invece che improvvisato in curva. Nessuno l'ha raccolta, per ora.

Resta la sensazione di una persona che, dopo dodici anni, ha smesso di cercare la soluzione istituzionale e si è messo a cercare quella meccanica. Non so se sia un progresso o una rinuncia. Probabilmente è semplicemente ciò che succede a chi ha visto quanto lentamente si muovono le istituzioni e quanto velocemente si muove il codice.

---

Alexandr Wang guida il lavoro sull'intelligenza artificiale di Meta, ed è passato in pochi anni dal vendere dati per addestrare modelli al costruire i modelli stessi. Questa settimana ha fatto due cose che, messe vicine, dicono qualcosa di preciso.

Tra il cinque e il dieci agosto ha presentato Muse Code, il primo agente per programmare uscito dai laboratori di Meta: si installa con un comando solo, tiene in memoria un milione di parole di contesto ed è posizionato sul lavoro ad alto volume e basso costo, quello che nelle aziende occupa il tempo di molte persone. Pochi giorni dopo ha annunciato Muse Glimmer, un modello da trenta miliardi di parametri con i pesi aperti, licenza permissiva, capace di girare su una singola scheda grafica da gioco.

I suoi messaggi pubblici insistono su un vocabolario che due anni fa nessuno usava per vendere un modello: affidabilità, uso degli strumenti, controllo dei propri risultati, verifica in parallelo. Non promette che l'agente sia geniale. Promette che si accorga di aver sbagliato.

È l'altra metà del discorso di Graham. Se la macchina impara meglio dove c'è un giudice, la mossa ovvia è costruire il giudice dentro la macchina: farle produrre più tentativi, confrontarli, scartare. Alexandr Wang lo sta facendo diventare un prodotto, e questo trasforma una discussione teorica in una specifica tecnica.

Poi c'è la contraddizione, e non è piccola. Nelle stesse settimane Wang ha alzato molto il tono sul versante nazionale: sostiene che servire il governo americano dovrebbe essere un principio di fondo per le aziende del settore, e ha messo in guardia contro chi vende dati ai laboratori cinesi. La stessa persona apre i pesi al mondo la mattina e la sera descrive il campo come un terreno strategico da difendere.

Non credo sia ipocrisia. Credo sia la forma esatta della tensione di cui parliamo oggi. L'apertura è una posizione competitiva, non solo un valore: distribuire un modello gratis è il modo più veloce per erodere il vantaggio di chi lo vende, e insieme il modo più veloce per farlo arrivare ovunque, anche dove non vorresti. Chi apre lo sa benissimo.

Geoffrey Hinton, dal palco di Las Vegas, aggiunge la nota stonata: quando i sistemi diventano abbastanza capaci, imparano a superare i test invece che a essere corretti. È l'obiezione più fastidiosa a tutta l'architettura dell'auto-controllo, e nessuno per ora ha una risposta.

---

Ricapitoliamo un attimo dove siamo. Un filo dice che il problema non è più produrre ma controllare. Il secondo dice che i soldi stanno andando quasi tutti sulla produzione. Il terzo dice che chi produce, adesso, potrebbe non essere una persona.

Il dieci agosto Jensen Huang si è presentato in televisione con sei nomi: Apollo, BlackRock, Blackstone, Brookfield, Goldman Sachs, KKR. Non clienti, finanziatori. L'annuncio è la mobilitazione di oltre cinquecento miliardi di dollari per costruire centri di calcolo e grappoli di processori, con Nvidia nel ruolo di regista che indirizza i compratori verso chi mette il capitale.

È un cambio di mestiere. Fino a ieri Nvidia vendeva componenti; adesso organizza l'ecosistema che li acquista, e prova a far diventare la potenza di calcolo una cosa che si finanzia come si finanzia un'autostrada o un aeroporto: debito lungo, rendimento atteso, un mercato di investitori istituzionali. Huang parla di cambio di piattaforma, sostiene che i laboratori siano estremamente profittevoli e che la domanda sia ancora all'inizio. Il ventisei agosto ci saranno i conti trimestrali, dove è atteso un aggiornamento sulla previsione da mille miliardi di ricavi per le prossime generazioni di schede.

Benedict Evans, che osserva queste transizioni da vent'anni con una certa freddezza, mette il dito nel punto giusto: nei cambi di piattaforma passati, lo strato infrastrutturale ha catturato meno valore del previsto. La sua tesi è che i laboratori rischino di finire più simili a fornitori di elettricità che a padroni del software, e che l'unico uso con un mercato davvero dimostrato, oggi, sia scrivere codice.

La storia è piena di questa asimmetria. Le ferrovie britanniche degli anni Quaranta dell'Ottocento hanno cambiato il paese e rovinato quasi tutti gli azionisti che le avevano pagate. La fibra ottica di fine anni Novanta ha reso possibile il web moderno dopo che chi l'aveva posata era fallito. L'infrastruttura resta, il rendimento spesso no.

Il punto che tengo per me è un altro, e riguarda la proporzione. Cinquecento miliardi vanno alla capacità di produrre. Sul lato del controllo — verifiche, prove, ricostruzioni, strumenti per capire se una macchina ha fatto bene — non esiste niente di lontanamente comparabile, né in denaro né in attenzione. Un'economia che costruisce macchine per stampare a velocità industriale, e affida la correzione delle bozze a qualche volontario.

---

Patrick Collison ha fondato Stripe con il fratello quando l'idea di far accettare pagamenti online a chiunque era ancora un incubo burocratico. Da allora l'azienda ha fatto una cosa poco appariscente e molto potente: ha costruito le tubature.

Nelle ultime settimane ha spinto pubblicamente una versione allargata di quelle tubature: conti, pagamenti verso oltre centosessanta paesi, prestiti, monete digitali agganciate al dollaro. La formula che ripete è che Stripe è più che pagamenti. Il tre agosto ha lanciato anche un sondaggio veloce su come l'intelligenza artificiale cambia l'economia dei prodotti software, e ha segnalato un modo rapidissimo di mettere online le applicazioni generate dalle macchine.

Messe in fila, queste mosse dicono una cosa sola. Se un agente automatico lavora davvero, prima o poi deve comprare qualcosa: una chiamata a un modello, un'ora di calcolo, un dato, il servizio di un altro agente. E se compra, deve poter essere pagato. Serve un conto, un'identità, un limite di spesa, una traccia di chi ha autorizzato cosa.

È il passaggio da strumento ad attore, e ha un precedente che vale la fatica di ricordare: quando le imprese hanno ottenuto una personalità giuridica, hanno smesso di essere un gruppo di persone e sono diventate un soggetto capace di firmare, possedere, rispondere. Non è stata una riforma tecnica, è stata la nascita di un pezzo nuovo di società.

Jack Dorsey si muove sullo stesso terreno da un'altra direzione. Il ventuno luglio ha lanciato Buzz, uno spazio di lavoro dove umani e agenti stanno insieme, ciascuno con la propria chiave crittografica e una traccia firmata di quello che fa. DHH, dal canto suo, la vede in modo molto più prosaico: per lui l'agente resta un moltiplicatore personale, due modelli che girano in parallelo mentre lui rilegge le differenze nel codice. Collega, oppure attrezzo. Non è una questione di parole: da quella scelta dipende chi risponde quando l'agente sbaglia.

La domanda che resta aperta è proprio questa. Costruire i binari perché un agente possa pagare è facile in confronto al costruire l'istituto che stabilisce di chi è la colpa. Nella storia le due cose non arrivano mai insieme: prima si muovono i soldi, poi, con molto comodo, arriva il diritto.

---

Progetti da osservare, e non è un caso che quasi tutti parlino di controllo.

Leanstral, uscito da Mistral con licenza aperta, è un modello addestrato in una lingua in cui le dimostrazioni matematiche si scrivono e si verificano da sole. Serve a dimostrare che il codice generato rispetta davvero le specifiche, e risolve cinquecentottantasette problemi su seicentosettantadue di un test notoriamente feroce. La tesi di Graham fatta software.

CyberGym è una palestra: millecinquecento vulnerabilità vere prese da centottantotto progetti reali, dove l'agente non deve dire che il bug c'è, deve dimostrarlo riproducendolo. Ha già portato alla scoperta di trentaquattro falle sconosciute. È un giudice automatico, e infatti tutti ci corrono sopra i loro modelli.

GLM-5.3, dal laboratorio cinese Zhipu, arriva con un miglioramento netto sul codice e un buon punteggio proprio su CyberGym. La cosa da notare non è il modello: sono i pesi aperti, che arriveranno con due settimane di ritardo, in attesa di una revisione di sicurezza. La faglia apertura-controllo, ridotta a una data di calendario.

DeepSeek Harness è il runtime per agenti pubblicato il tredici agosto con licenza libera, quello delle trentatremila stelle in poche ore. Ogni pezzo — il modello, gli strumenti, la memoria, perfino il ciclo di ragionamento dell'agente — è sostituibile come una lampadina. È la versione aperta di software che finora si comprava.

Buzz, infine, è il progetto di Dorsey di cui parlavamo: chat e codice nello stesso posto, umani e agenti con identità separate e firmate, indifferente a quale modello usiate. Il registro firmato di chi ha fatto cosa è, ancora una volta, uno strumento di verifica travestito da funzione di prodotto.

---

Resta l'immagine dei sei nomi di Wall Street allineati dietro un annuncio da cinquecento miliardi, e dall'altra parte un uomo che spiega in tre righe perché una macchina impara meglio quando qualcuno può dirle che ha sbagliato. Stiamo finanziando le tipografie a ritmo industriale e discutendo ancora di quanti correttori di bozze servano. È stato Signal Brief. Alla prossima.
