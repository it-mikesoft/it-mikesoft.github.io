# Quello che la macchina può controllare

> Codice e matematica corrono perché il modello verifica da sé. Dove la verifica manca, tutto resta fermo. Il criterio che divide in due il mondo dell'intelligenza artificiale.

---

Ci sono giornate in cui le voci più diverse finiscono per dire la stessa cosa senza accorgersene. Oggi, 26 novembre, in questa puntata di Signal Brief ne abbiamo una.

Da una parte un informatico francese che da anni ripete che i modelli linguistici non sono intelligenti. Dall'altra un programmatore di videogiochi diventato ingegnere di intelligenza artificiale. Dall'altra ancora il fondatore di Ethereum. Tre mondi senza punti di contatto.

E però stanno indicando tutti lo stesso spartiacque: la differenza tra le cose che una macchina può controllare da sola e tutte le altre.

Si comincia da una mappa degli Stati Uniti costruita in sette ore.

---

Andrej Karpathy ha pubblicato su X, in questi giorni di novembre, il resoconto di un lavoro che non ha fatto lui. Ha chiesto a Claude Opus 5.5 una mappa interattiva degli Stati Uniti, in stile Civilization, e il modello l'ha costruita: sette ore di lavoro, quarantacinquemila righe di codice, trentun archivi pubblici di dati messi insieme — censimento, lavoro, energia, meteo, geologia, difesa, trasporti.

Ieri parlavamo del suo HackerTube, quarantatré milioni di commenti filtrati in poche ore. Quello sembrava un bel trucco. Questo è un'altra cosa: è un mestiere che cambia di mano. Karpathy definisce un obiettivo e controlla il risultato; tutta la fatica di mezzo — cercare i dati, capirne il formato, scrivere il codice che li tiene insieme — la assorbe la macchina. Balaji Srinivasan, nelle stesse ore, segnalava un agente che carica da solo il proprio codice su GitHub mentre il suo proprietario si occupa d'altro.

Qui però si apre la prima crepa, ed è una crepa tecnica, non filosofica. Il 29 ottobre John Carmack aveva avvertito che generare interi sistemi da zero è una strada che perde: perde su velocità, perde su sicurezza, perde su efficienza. La sua proposta è addestrare gli agenti non solo a completare il compito, ma a produrre pezzi riutilizzabili, una specie di cassetta degli attrezzi pensata per le macchine. È la differenza tra fondere ogni volta un motore intero e avere bulloni standard: l'industria automobilistica ha fatto quel passaggio negli anni Dieci del Novecento, e non fu un dettaglio, fu la ragione per cui la Ford T costava poco. Il collo di bottiglia, dice in sostanza Carmack, non è più scrivere codice. È comporlo.

Ma la domanda vera è un'altra: perché proprio il codice? Perché la matematica? Yann LeCun ha dato la risposta più nitida, e viene da uno dei critici più severi dei modelli di oggi. Codice e matematica, scrive, sono domini anomali: il modello può proporre un'ipotesi e poi verificarla da sé, eseguendo il programma o controllando la dimostrazione. Il controllo è dentro il dominio. Non serve il mondo.

Il 22 novembre LeCun ha mostrato il rovescio della medaglia: non esiste la guida autonoma di livello cinque, non esiste un robot che se la cavi come un bambino di tre anni. Nessuna quantità di parole insegna a prendere un bicchiere senza farlo cadere, perché lì il giudice non è una riga di codice che gira, è la realtà, che risponde lenta e una volta sola.

Ed è lo stesso criterio, letto al contrario, che Vitalik Buterin sta usando per Ethereum. Se l'intelligenza artificiale sa dimostrare che un pezzo di programma fa quello che promette, allora si può buttare via la complessità accumulata per prudenza e tenere un protocollo più magro — la sua espressione è "lean Ethereum". La verifica non è più un costo. Diventa la leva.

Quindi la mappa di Karpathy, i blocchi di Carmack e l'Ethereum snello di Buterin non sono tre notizie. Sono tre facce di una sola frase: accelera ciò che si può controllare in automatico. Tutto il resto aspetta.

---

Yann LeCun è lo scienziato che ha vinto il premio Turing per le reti neurali e che oggi passa buona parte del suo tempo a spiegare che quelle stesse reti, nella forma dei modelli linguistici, non pensano. Una posizione scomoda: lo mette contro quasi tutti.

La settimana scorsa però ha fatto qualcosa di diverso dal solito. Invece di dire cosa manca ai modelli, ha spiegato perché in alcuni campi funzionano benissimo. Matematica e programmazione sono eccezioni, scrive, perché il modello può generare ipotesi e verificarle automaticamente, con una dimostrazione o con un'esecuzione. È un'osservazione quasi tecnica, buttata in un post, e vale più di molti saggi: non dice che il modello è intelligente, dice che in quei due campi non ha bisogno di esserlo. Gli basta provare e controllare, tante volte, in fretta.

Poi il 22 novembre il contrappeso. Mentre si parla di superintelligenza, ha osservato, non abbiamo né automobili che guidano da sole senza nessuno a bordo né robot all'altezza di un bambino non addestrato. Il suo bersaglio dichiarato resta la comprensione del mondo fisico, quella cosa che un bambino assorbe guardando cadere gli oggetti e che nessun testo riesce a trasmettere.

Fin qui il LeCun che conosciamo. La differenza rispetto alle settimane passate è nel ruolo che sta assumendo. Prima era l'antagonista nel dibattito sul rischio — quello che accusa Dario Amodei di usare la sicurezza come argomento per tenere i modelli chiusi, e che liquida i calcoli di probabilità di estinzione come fatalismo inutile. Adesso è diventato il teorico di un'asimmetria che riguarda tutti: il motivo per cui alcune cose corrono e altre no.

Per chi deve decidere dove investire, è una bussola più utile di qualunque previsione sulla data della superintelligenza. La domanda da fare non è quanto è potente il modello. È: in questo lavoro, chi controlla il risultato, e quanto costa farlo? Se la risposta è "la macchina, gratis", si corre. Se è "un essere umano, con tempo e giudizio", si cammina.

Curioso che la spiegazione più chiara dell'accelerazione in corso venga da chi sostiene che la strada attuale non porta all'intelligenza. Capita spesso, in realtà: chi guarda una tecnologia dall'esterno ne vede i confini meglio di chi la costruisce.

---

John Carmack è il programmatore che ha scritto i motori grafici di Doom e Quake, cioè l'uomo che ha insegnato ai computer degli anni Novanta a disegnare mondi tridimensionali con quasi niente. Da qualche anno lavora su intelligenza artificiale generale, e conserva un'ossessione che viene da quel mestiere: ogni ciclo di calcolo deve servire a qualcosa.

La sua tesi più sostanziosa del momento è del 29 ottobre, e va letta tenendo a mente la mappa di Karpathy. Gli agenti, scrive, prima o poi scriveranno interi sistemi software da zero — ma quella strada perderà su velocità, prestazioni, sicurezza ed efficienza di calcolo. La proposta è addestrarli non solo sul risultato finale, ma a produrre e migliorare blocchi riutilizzabili: una libreria standard pensata per le macchine, che all'inizio somiglierà a codice umano scritto con eleganza.

Vale la pena fermarsi su cosa significa. La programmazione degli ultimi cinquant'anni è stata una storia di pezzi condivisi: si scrive una funzione una volta, la usano in diecimila. Il vantaggio non è solo la fatica risparmiata, è che quel pezzo viene esaminato da molti occhi, e i suoi difetti vengono trovati. Un agente che rigenera tutto da capo ogni volta butta via quella memoria collettiva. Produce software che nessuno ha mai letto, e che nessuno rileggerà.

Il 23 novembre Carmack è tornato a farsi sentire su un tema diverso: il reintegro di Jensen Huang alla guida di Nvidia, avvenuto il giorno prima. Indebolire Nvidia, ha sostenuto, sarebbe stato autodistruttivo dal punto di vista sociale e tecnologico, e Huang resta di gran lunga la persona giusta per quel ruolo — pur con riserve sul personaggio. Un'uscita su cui si può discutere, ma coerente: Carmack guarda alle infrastrutture come guarda al codice, chiedendosi cosa regge il peso.

E la sua obiezione si incastra esattamente col criterio di LeCun. Una dimostrazione matematica si verifica una volta e vale per sempre. Un sistema software generato per intero si verifica male, perché nessuno sa dove guardare. La macchina può controllare se il programma gira. Non può controllare se è una buona idea.

---

Vitalik Buterin ha fondato Ethereum a diciannove anni e da allora fa un lavoro insolito: dirige l'evoluzione di un sistema che vale centinaia di miliardi e che non può permettersi un errore, perché i soldi che ci stanno sopra non si possono richiamare indietro.

Nelle ultime due settimane ha messo insieme due cose che normalmente stanno in stanze separate. La prima: l'intelligenza artificiale applicata alla verifica formale — quella disciplina in cui si dimostra, con la stessa severità di un teorema, che un programma fa esattamente ciò che dichiara. Secondo Buterin, l'intelligenza artificiale, unita alle prove a conoscenza zero, apre la strada a una "lean Ethereum": un protocollo più semplice, in cui le tecniche avanzate non restano confinate nelle applicazioni ma scendono nel cuore del sistema. È il contrario dell'intuizione comune. Di solito un sistema che invecchia si gonfia di strati difensivi; se sai dimostrare le proprietà, puoi togliere invece di aggiungere.

La seconda cosa, nelle stesse settimane, è il rovescio. Buterin ha appoggiato l'idea di rallentare l'espansione dei grandi centri di calcolo, e il motivo non è che consideri la superintelligenza inevitabile: è che serve tempo per rafforzare le difese informatiche e biologiche prima che le capacità superino le protezioni. Ha anche avvertito, parlando a Devcon, che l'intelligenza artificiale potrebbe comprimere decenni di progresso matematico in pochi anni, e che la matematica compressa potrebbe arrivare proprio sulle curve ellittiche su cui si regge la crittografia di Ethereum e di Bitcoin.

La stessa macchina che gli serve per dimostrare che il sistema è sicuro è la macchina che potrebbe romperlo. Il suo nome per questa postura è d/acc, accelerazione decentralizzata difensiva: correre, ma sul versante delle difese, con software aperto, hardware controllabile, modelli che girano in locale.

Ricapitoliamo dove siamo arrivati. LeCun spiega perché codice e matematica corrono: lì la macchina si controlla da sola. Carmack avverte che correre non basta, serve un'architettura. Buterin prende il criterio della verifica e lo trasforma in strategia: se so dimostrare, posso semplificare. Tre voci, una sola idea con tre facce.

Manca la domanda che le riguarda tutte, ed è una domanda sull'orologio.

---

Mustafa Suleyman guida l'intelligenza artificiale di Microsoft, ed è un dirigente che ha due mani occupate in direzioni opposte. Con una spinge il prodotto: a Ignite ha presentato sei modelli specializzati — programmazione, sicurezza informatica, immagini, voce, trascrizione — e l'azienda sostiene che quello dedicato al codice si avvicina ai migliori sul mercato a un costo molto più basso. Con l'altra, il 25 novembre, ha scritto che l'intelligenza artificiale sta attraversando una soglia e che il lavoro su sicurezza e allineamento è l'unica cosa che conta.

Qualche settimana fa sembrava una contraddizione: nervoso ma senza rallentare di un passo. Oggi suona diversamente. In un'intervista recente ha spiegato il motivo del nervosismo con una precisione che prima mancava: i modelli stanno migliorando altri modelli, generano dati di addestramento, testano sistemi, trovano difetti. Ha definito gli ultimi tre mesi uno spartiacque e ha chiamato il miglioramento ricorsivo una capacità decisamente pericolosa. "Sono davvero, davvero nervoso", ha detto.

Letta col filo di oggi, la frase cambia peso. Un modello che migliora un altro modello è un caso di verifica automatica: la macchina giudica il proprio prodotto, come con il codice e la matematica. Lo stesso meccanismo che fa correre il mestiere di Karpathy, applicato alla costruzione dell'intelligenza stessa. Non stupisce che chi lo vede da dentro si preoccupi.

Sulla durata del tempo disponibile, però, non c'è accordo. Yoshua Bengio, in un'intervista alla CBS del 24 novembre, dice che il settore corre verso pericoli enormi e misura la finestra in anni; con LawZero sta costruendo sistemi pensati per essere affidabili invece che competitivi. Geoffrey Hinton chiede un'autorità indipendente, in stile agenzia del farmaco, che pretenda prove di beneficio prima dell'uscita di un modello. Benedict Evans, che osserva da fuori e ha appena sostituito la sua presentazione di maggio con una nuova di ottantasei pagine intitolata "AI Questions", ripete che è ancora molto presto, che l'adozione è larga ma sottile, e che in molte aziende l'intelligenza artificiale viene aggiunta senza cambiare un solo processo.

Nessuno di loro nega le capacità. Litigano sull'orologio. E la versione economica di quel litigio la dà Marc Andreessen, che alla conferenza della Federal Reserve del 16 e 17 novembre ha previsto che utopisti e catastrofisti resteranno entrambi delusi: alcuni settori correranno con prezzi in calo, altri — sanità, istruzione, casa, diritto, pubblica amministrazione — resteranno bloccati e più costosi di prima. Sono esattamente i mestieri dove il risultato lo giudica un essere umano.

---

Progetti da osservare.

Lean 4 è un programma in cui si scrivono dimostrazioni matematiche in una forma che il computer può controllare riga per riga. Esiste da anni, nell'angolo tranquillo della logica. Adesso è diventato il giudice: è lo strumento con cui si verifica quello che i modelli producono, ed è la base tecnica della "lean Ethereum" di Buterin.

Il caso di questi giorni è proprio lì. È circolato il resoconto di una dimostrazione legata all'ipotesi di Riemann ottenuta lavorando con Claude — l'ipotesi di Riemann è il problema aperto più famoso della matematica, una congettura del 1859 sulla distribuzione dei numeri primi. Accanto al resoconto è apparso grh-lean, una versione molto più breve della verifica formale della stessa dimostrazione, attribuita ad Anthropic. Le due cose vanno lette insieme: l'una è il ragionamento, l'altra è il controllo. Senza la seconda, la prima è un annuncio.

Claude Code è l'agente da terminale che Karpathy ha usato per HackerTube, per TristanTube e per la mappa dei trentun archivi di dati. Non è un suggeritore di righe di codice: è il braccio che fa il lavoro mentre qualcuno guarda.

OpenCode fa un mestiere simile, con codice aperto. Paul Graham ha rilanciato un post di Jay Air, secondo cui la sua versione Go avrebbe raggiunto cinquanta milioni di dollari di ricavi annui. Un numero che, se tiene, dice quanto in fretta questo strumento sia passato da curiosità a mercato.

E poi Import AI 482, la rassegna di Jack Clark, che questa settimana raccoglie benchmark sui kernel Huawei, rilevamento di droni in volo e un test scientifico preparato da un laboratorio nazionale. Serve come promemoria geografico: la ricerca accelera anche dove non stiamo guardando.

---

Resta quella mappa degli Stati Uniti, trentun archivi di dati cuciti insieme in una notte da qualcosa che non ha mai visto gli Stati Uniti. Funziona perché si può controllare se funziona.

Il mestiere che vale, da qui in avanti, forse è un altro: saper dire cosa conta come risposta giusta. Finché quella frase la scriviamo noi, decidiamo noi dove corre la macchina.

È stato Signal Brief. Alla prossima.
