# Il cantiere senza progetto

> Karpathy si sposta in Anthropic, Stripe lancia l'infrastruttura per gli agenti, LeCun raccoglie un miliardo per dire che la strada è un'altra. Quattro mosse, una sola direzione.

---

C'è un cantiere strano in corso, in questi mesi, nel mondo della tecnologia. Tutti stanno costruendo lo stesso pezzo di infrastruttura, allo stesso tempo, con grande fretta — e nessuno è davvero d'accordo su cosa ci passerà sopra. È Signal Brief, martedì due giugno. Andrej Karpathy si è appena trasferito da OpenAI ad Anthropic, Stripe ha annunciato quasi trecento funzionalità per agenti AI, Yann LeCun raccoglie un miliardo per dire che la strada giusta è un'altra. Quattro mosse, una sola direzione, tante architetture diverse. Cominciamo da lì.

---

Il diciannove maggio Andrej Karpathy ha pubblicato un post breve, quasi laconico, per dire che lasciava la sua indipendenza e tornava a fare ricerca dentro Anthropic. La frase chiave era una: i prossimi anni ai confini dei modelli linguistici saranno formativi, e gli sembrava troppo eccitante restare fuori. Il dettaglio interessante è cosa va a fare. Il suo nuovo team userà Claude — il modello di Anthropic — per accelerare la ricerca su come si addestra Claude. Modelli che progettano modelli. Una specie di anello che si chiude.

Quel post non sarebbe stato grande notizia, da solo. Ma quella settimana, e quelle prima, sono successe altre cose che, messe insieme, raccontano una storia che vale la pena raccontare. A Stripe Sessions, a fine aprile, Patrick Collison ha annunciato quasi trecento nuove funzionalità per quella che lui chiama l'infrastruttura economica dell'era degli agenti. Pagamenti dentro le app AI, sistemi di identità per software che agisce per conto degli utenti, abbonamenti pensati per essere consumati da macchine non da persone.

In parallelo Nat Friedman, l'ex CEO di GitHub, ha lanciato con sessanta milioni una nuova piattaforma per sviluppatori: si chiama Entire, e parte dall'idea che strumenti come Git, le pull request, le issue erano stati pensati per gli umani che scrivono codice. Adesso che a scrivere codice sono sempre più gli agenti, servono altri strumenti.

E Jack Dorsey, da San Francisco, ha licenziato il quaranta per cento di Block — quattromila persone — sostituendole con un agente interno che hanno chiamato Goose. In un podcast con Sequoia ha detto che ogni azienda può diventare una piccola intelligenza artificiale generale. Lo ha detto come una buona notizia.

Quattro mosse molto diverse — un ricercatore, un fondatore di pagamenti, un imprenditore di strumenti per sviluppatori, un proprietario di fintech — che convergono sulla stessa idea: il prossimo strato di infrastruttura del mondo digitale non sarà fatto per le persone, ma per gli agenti. È una decisione che si sta prendendo in parallelo, in posti diversi, senza un coordinamento, e in fretta.

A me ricorda quello che è successo nelle fabbriche americane all'inizio del Novecento, quando hanno smesso di muoversi a vapore e sono passate all'elettricità. Per quindici, vent'anni hanno semplicemente sostituito il motore — stessa fabbrica, stesso disegno, stesso modo di lavorare, solo con un motore elettrico al posto della grande caldaia centrale. La produttività non è cresciuta granché. Poi qualcuno ha capito che con l'elettricità non serviva più una macchina centrale che faceva girare cinghie ovunque: ogni macchina poteva avere il suo motore, e si poteva ridisegnare la fabbrica da zero. Lì la produttività è esplosa. Oggi siamo nella fase in cui le aziende stanno mettendo i motori elettrici nelle stesse fabbriche di prima. Ancora non sappiamo come sarà fatta la fabbrica nuova.

E poi c'è il pezzo che rende tutto più strano. Mentre tutti costruiscono, nessuno è d'accordo su cosa ci girerà sopra. Yann LeCun ha lasciato Meta a novembre, ha messo in piedi a Parigi un laboratorio nuovo, AMI Labs, ha raccolto un miliardo di dollari, e in una lezione alla Brown University ad aprile ha detto, testualmente, che l'AI di oggi fa schifo. I modelli linguistici grandi, sostiene, non hanno memoria, non capiscono il mondo fisico, non sanno pianificare. Sono bravissimi a parlare, e noi ci facciamo ingannare. François Chollet, dall'altra parte dell'oceano, ha lanciato una nuova versione del suo test ARC — quello dove gli umani prendono cento e i modelli migliori prendono mezzo punto. John Carmack, da Dallas, sta facendo robot che imparano a giocare ai videogiochi guardando una televisione, con venti milioni di dollari invece dei miliardi degli altri.

E poi c'è Ilya Sutskever, che è la storia da raccontare per ultima. Ma ci arriviamo.

---

Per chi non lo conoscesse, Andrej Karpathy è uno dei nomi più strani della Silicon Valley degli ultimi dieci anni. Slovacco arrivato in America da ragazzo, è passato per Stanford, per OpenAI dei primi tempi, per Tesla dove guidava il team della guida autonoma, e poi da OpenAI di nuovo. A un certo punto ha smesso e si è messo a fare un lavoro che assomiglia più al divulgatore che al ricercatore: tutorial gratuiti su YouTube dove costruisce da zero un modello linguistico spiegando ogni riga di codice, repository minuscoli che chiunque può scaricare e capire, pensati per il singolo ricercatore curioso. Non l'azienda. La persona.

Questa primavera ha fatto due cose. La prima, a marzo, è stato pubblicare AutoResearch — un agente di seicento righe di codice che fa una cosa semplice e folle insieme. Legge il proprio codice, propone una modifica, lancia un addestramento, valuta il risultato, e se va meglio tiene la modifica, se va peggio la cancella. Lo lascia girare. In due giorni ha fatto settecento esperimenti e ha ridotto del dieci per cento il tempo necessario ad addestrare un certo modello. Karpathy l'ha messo su GitHub e in poche settimane ha avuto sessantaseimila stelle, che è un numero enorme per quel tipo di progetto.

La seconda cosa l'ha fatta il diciannove maggio, ed è il post di cui parlavamo prima. Ha annunciato che tornava a fare ricerca dentro Anthropic, nel team che si occupa dell'addestramento iniziale dei modelli. Il dettaglio che mi sembra più interessante è il loop che descrive: useranno Claude per generare ipotesi, per progettare esperimenti, per leggere la letteratura scientifica, per costruire i sistemi di valutazione. Cioè useranno l'AI di oggi per costruire l'AI di domani.

Se uno si ferma a pensare a cosa sta succedendo, è una scena che pochi anni fa sembrava fantascienza scadente. Una persona che insegna a una macchina a migliorare se stessa, e poi va a lavorare per un'azienda dove quella macchina è già lo strumento principale di chi sta cercando di costruire la macchina successiva. Karpathy lo ha detto in modo asciutto — gli sembrava troppo eccitante per restare fuori — e non c'è motivo di dubitare che pensasse esattamente questo.

Quello che il suo gesto racconta, dentro il filo di oggi, è la velocità con cui si sta passando dall'AI come oggetto di studio all'AI come collega di laboratorio. Non c'è una grande dichiarazione, non c'è un manifesto. C'è una persona molto brava che ha deciso che il punto interessante adesso sta lì, ed è andata lì. E quando le persone molto brave si spostano in massa nella stessa direzione, vale la pena guardare dove vanno.

---

Yann LeCun è il dissenso, in questa storia. Francese, settant'anni, uno dei tre nomi che hanno vinto il Turing Award nel duemila e diciotto per il lavoro che ha reso possibile tutta l'AI moderna. Per quasi quindici anni è stato il capo della ricerca AI di Meta. A novembre scorso ha annunciato di lasciare, e a marzo ha aperto a Parigi un laboratorio nuovo che si chiama AMI Labs. In poche settimane ha raccolto un miliardo di dollari da investitori che hanno deciso di scommettere su una tesi controcorrente.

La tesi è semplice da raccontare e difficile da accettare per chi ha investito gli ultimi cinque anni a scommettere il contrario. I modelli linguistici di oggi — quelli che fanno funzionare ChatGPT e Claude e Gemini — secondo LeCun sono una strada senza uscita. Non perché non funzionino, ma perché funzionano sul tipo sbagliato di intelligenza. Sono fenomenali a manipolare il linguaggio, ma il linguaggio è la punta di un iceberg di intelligenza che riguarda muoversi, capire il mondo fisico, ricordare, pianificare. Tutte cose che questi modelli, dice LeCun, non sanno fare, anche quando sembrano farle.

Ad aprile, durante una lezione a Brown University, l'ha detto con una frase che è circolata molto: l'AI di oggi fa schifo. Lo ha detto sorridendo, ma sul serio. La sua scommessa si chiama JEPA — un nome tecnico che vale la pena dimenticare subito — ed è un modo diverso di costruire macchine intelligenti: invece di farle imparare leggendo internet, farle imparare guardando il mondo, come fa un bambino piccolo. A maggio è uscito un paper che dimostra matematicamente in che condizioni questo approccio funziona davvero. È una scommessa di lungo periodo. Cinque, dieci anni almeno.

Quello che mi sembra interessante è che LeCun non si limita più a criticare. Per molti anni è stato l'intellettuale scomodo dentro Meta, quello che andava sui podcast a dire che i suoi colleghi stavano sbagliando direzione. Adesso ha lasciato e ha messo in piedi un'altra cosa, con un miliardo di dollari di chi gli crede. È un gesto che cambia il peso della critica. Una cosa è dirlo da dentro l'azienda più grande, un'altra è uscire e costruire l'alternativa.

E questo, dentro il filo di oggi, dice una cosa precisa. Mentre Karpathy e Collison e Friedman costruiscono il piano sopra — la struttura per gli agenti — LeCun sta scavando le fondamenta nuove, perché secondo lui quelle attuali non reggeranno il peso. Stanno costruendo case diverse sullo stesso terreno, e non si parlano molto.

---

Ricapitoliamo un attimo dove siamo. Da una parte chi tira i tubi degli agenti, in fretta — Stripe, Friedman, e adesso Karpathy che entra in Anthropic per chiudere l'anello. Dall'altra LeCun e una piccola pattuglia che dice: state costruendo sulla sabbia, l'architettura di fondo non è ancora quella giusta. E poi c'è una terza scena, quella che riguarda le persone. È qui che entra Jack Dorsey.

Dorsey, per orientarsi, è quello che ha fondato Twitter, lo ha lasciato, ha fatto Square — adesso si chiama Block — e da qualche anno ha smesso di parlare di social media e si occupa quasi solo di pagamenti, bitcoin, e in generale di infrastrutture finanziarie alternative.

A maggio e a giugno Block ha annunciato il licenziamento di circa quattromila persone, distribuito su un paio di mesi. Significa il quaranta per cento dell'azienda. Al loro posto Dorsey ha messo un agente AI interno che hanno chiamato Goose. Goose lavora sui pezzi di codice vecchi che nessuno vuole più toccare, fa supporto clienti, sviluppa nuove funzioni. Il titolo in borsa è salito dell'otto per cento. In un podcast con Sequoia, Dorsey ha detto una frase che vale la pena ricordare: ogni azienda può diventare una piccola intelligenza artificiale generale.

In parallelo, ad aprile, aveva pubblicato con Roelof Botha — uno dei capi di Sequoia — un saggio per dire che il modello di azienda con cinque, sei, sette livelli di management è un'eredità di duemila anni di organizzazione gerarchica, ed è arrivato il momento di smontarla. L'obiettivo dichiarato: due livelli, massimo tre, e idealmente tutti riportano direttamente a lui.

E mentre licenzia il quaranta per cento della sua azienda di pagamenti, finanzia il ritorno di Vine. Vine, per chi non se lo ricorda, era l'app di video brevi del duemila e tredici, prima di TikTok. Si chiamerà Divine. Il dettaglio è che Dorsey ha tenuto a precisare che Divine sarà costruita da persone, per persone. Niente AI generativa al centro, niente agenti, niente automazione. Solo creatori umani che fanno video.

C'è un dualismo che mi sembra istruttivo. Da una parte l'infrastruttura — i tubi del denaro, i sistemi interni di Block — viene affidata sempre più alle macchine. Dall'altra il prodotto consumer, quello che le persone toccano direttamente, viene tenuto deliberatamente fuori dall'automazione. Ricorda i grandi proprietari delle ferrovie americane di fine Ottocento, che facevano costruire i binari da operai a basso costo ma tenevano la facciata delle stazioni curatissima per i passeggeri. Le cose che vanno sotto il pavimento sono lavoro da agenti. Le cose che la gente vede sono lavoro da persone.

Nello stesso periodo Sam Altman si è messo a fare marcia indietro sulle previsioni catastrofiche sul lavoro che faceva fino a poco fa. A Sydney ha detto che è felice di essersi sbagliato. Per i lavori entry-level la situazione, dice, è meglio di quello che pensava. È successo nel giro di poche settimane, e proprio mentre OpenAI si prepara a quotarsi in borsa con una valutazione che gira intorno al trilione di dollari. Coincidenze.

---

Ilya Sutskever è la figura più strana di questa stagione, ed è giusto chiudere con lui. Israeliano-canadese, è stato per anni il direttore scientifico di OpenAI, uno dei tre o quattro nomi senza i quali probabilmente non esisterebbe l'AI moderna. Nel duemila e ventitré ha partecipato al breve tentativo di rimuovere Sam Altman dal vertice dell'azienda. Quel tentativo è fallito in cinque giorni, Sutskever ha fatto pubblica ammenda, e qualche mese dopo è uscito.

A giugno del duemila e ventiquattro ha fondato Safe Superintelligence. Il nome è il programma: vogliono costruire una superintelligenza sicura, e fino a quando non sono sicuri di averla fatta sicura, non venderanno niente. Zero prodotti. Zero ricavi. Solo ricerca. È un'azienda che, se la giudichi con i parametri normali della Silicon Valley, è impossibile. Eppure ha raccolto tre miliardi di dollari da fondi come Andreessen Horowitz e Sequoia, ed è valutata trentadue miliardi senza vendere niente.

A maggio è successa una cosa che ha aggiunto un capitolo a questa storia. Nel processo che Elon Musk ha intentato contro OpenAI, Sutskever è stato chiamato a testimoniare. Sotto giuramento ha descritto Sam Altman come una persona con un pattern consistente di disonestà, che mina la coesione dell'azienda e ostacola gli obiettivi di sicurezza. E nello stesso documento si è scoperto che la sua quota in OpenAI vale sette miliardi di dollari.

C'è qualcosa di profondamente novecentesco in tutto questo. Ricorda i fisici che a un certo punto degli anni Quaranta hanno smesso di credere che la bomba atomica fosse un progetto come gli altri e hanno iniziato a fare quello che potevano per rallentare, contenere, separare. Sutskever è uscito dall'azienda che ha contribuito a costruire, ha messo in piedi un laboratorio dove non si vende niente, e ha testimoniato contro chi prima era il suo capo. Tutto questo mentre OpenAI prepara la quotazione in borsa più grande della storia recente.

La cosa che mi sembra valga la pena tenere in mente è che Sutskever non è un esterno che critica. È uno degli architetti originali che ha visto il cantiere dall'interno e ha deciso che doveva fare un altro mestiere. Dichiara, fra le altre cose, che l'era dello scaling — cioè dell'idea per cui basta fare modelli sempre più grandi per arrivare a un'intelligenza vera — è finita. Adesso, dice, servono idee architetturali nuove. Quasi le stesse parole di LeCun, da due lati opposti del mondo.

Tre persone — LeCun, Chollet, Sutskever, e si potrebbe aggiungere Carmack — che da posizioni diversissime arrivano alla stessa conclusione: il motore di tutto questo cantiere non è quello giusto. E intanto il cantiere continua.

---

Cinque progetti che vale la pena tenere d'occhio in questa stagione.

Il primo è AutoResearch, l'agente di Karpathy di cui parlavamo. Settecento righe di codice che cercano di migliorare se stesse, una piccola cosa che lascia intuire una grande direzione. Sessantaseimila persone lo hanno già stellato su GitHub.

Il secondo è ARC-AGI tre, il test di François Chollet. Sembra un gioco — bisogna capire le regole di un piccolo mondo a turni guardando esempi, senza che nessuno te le dica — e per un essere umano è quasi sempre facile. Per i modelli AI di oggi, anche i migliori, è quasi impossibile. Mezzo punto percentuale, contro il cento degli umani. È il termometro che misura cosa ancora non sappiamo fare, e i numeri rendono onesta la conversazione.

Il terzo si chiama llama dot cpp. Non è un nome attraente, ma il progetto sì: è il pezzo di software che permette di far girare un modello AI grosso sul proprio laptop, senza chiedere niente a nessuna azienda. Open source, gratis, gira anche su un computer di cinque anni fa. È il fondamento di tutto il movimento di AI sovrana, quella che non passa dal cloud.

Il quarto è Omarchy, una piccola distribuzione di Linux curata da David Heinemeier Hansson, il fondatore di Basecamp e di Rails. È pensata per attirare chi viene da Mac o Windows e vuole un desktop che si può ancora smontare e rimontare. Un manifesto, più che un prodotto.

E il quinto si chiama claude-context. Trasforma tutto un progetto di codice in qualcosa che gli agenti AI possono leggere e ricordare. È un buon esempio del passaggio di cui parlavamo: il valore non sta più tanto nel modello, sta in tutto quello che gli mettiamo intorno per fargli fare lavoro vero.

---

Mi resta in testa l'immagine di Karpathy che il diciannove maggio annuncia di andare in Anthropic per usare Claude e migliorare Claude. Un anello che si chiude su se stesso, mentre intorno le fabbriche di chip si moltiplicano e nessuno sa ancora di che forma sarà la fabbrica del futuro. Ci stiamo arrivando in tanti, da strade diverse, e in fretta. È stato Signal Brief. Alla prossima.
