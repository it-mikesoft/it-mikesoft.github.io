# Il prodotto che si riscrive da solo

> Collison apre le sue app alle richieste degli utenti, Willison scrive giochi senza leggere il codice, Bengio progetta un'intelligenza senza scopi. Controllare diventa la cosa difficile.

---

Il 31 ottobre Patrick Collison ha aggiunto una casella di testo alle piccole applicazioni che si è costruito per sé. Si chiama improvements, miglioramenti. Chi la usa scrive cosa vorrebbe diverso, e la richiesta non finisce in una lista d'attesa: va a un agente che modifica il codice e la mette in funzione. Un utente, in pochi giorni, ha ottenuto centocinquanta modifiche. Oggi è il primo novembre, e in questa puntata di Signal Brief quella casella è il punto da cui guardare tutto il resto. Perché se il prodotto cambia mentre lo stai usando, qualcuno dovrà pur stabilire cos'è diventato.

---

Collison, che guida Stripe, ha dato un nome a quella casella: software liquido. Un prodotto che non ha più una forma propria, ma prende quella di chi lo usa. Nello stesso messaggio ha elencato anche quello che non torna: sicurezza, affidabilità, lavoro in gruppo, manutenzione nel tempo. Domande aperte, dette da chi l'esperimento lo ha fatto.

Ieri il tema era un altro, e conviene misurare la differenza. Ieri parlavamo di chi costruisce il software: Karpathy che non scrive più codice da dicembre 2025, 37signals che mette giù le matite. La delega restava dentro il mestiere. Da oggi scavalca il mestiere e arriva all'utente finale, che chiede e ottiene senza sapere niente di programmazione. Simon Willison, nello stesso periodo, ha costruito quattro giochi senza mai aprire il sorgente. Tre episodi indipendenti, la stessa direzione: produrre software è diventato più facile che capire il software che si ha davanti.

È già successo, in piccolo. Alla fine degli anni Ottanta l'impaginazione è arrivata sulle scrivanie, e chiunque ha potuto comporre una pagina stampata come una tipografia. La capacità scarsa, da quel momento, non è stata più comporre: è stata decidere quale pagina valesse la carta. Oggi lo stesso spostamento riguarda il codice, ma con una differenza ruvida: una pagina brutta si vede, un programma che si comporta male no.

Andrej Karpathy ha messo un numero su questa distanza. Circa il settantacinque per cento delle persone non ha praticamente mai usato un modello linguistico, venti milioni di professionisti li usano per matematica e programmazione, e forse cinquemila persone al mondo vedono cosa fanno questi sistemi quando lavorano in gruppo su problemi grossi. Cinquemila. Meno degli abitanti di un paese di provincia.

A metà ottobre, alle riunioni del Fondo monetario internazionale e della Banca mondiale, Jack Clark di Anthropic ha detto a quella platea che la singolarità non è una previsione: è cominciata. Ha citato i progressi su matematica, scienze e prove da esperti, ha parlato di un miliardo di scienziati virtuali come direzione plausibile, e ha avvertito che la sorveglianza su queste cose ha forse pochi anni per mettersi in pari. Dirlo lì, davanti ai ministri delle finanze, è una scelta precisa.

Da quel punto le risposte si dividono in due, e la divisione è il cuore della giornata. Una è politica: Dario Amodei, nel saggio L'adolescenza della tecnologia, propone di dare alla frontiera il passo che serve alla sicurezza, di far entrare valutatori esterni con accesso da dipendenti e di costruire istituzioni internazionali sul modello del CERN. L'altra risposta non chiede tempo: cambia il progetto della macchina. E su questa seconda strada, questa settimana, si sono mossi due dei nomi che hanno inventato il campo.

Prima però conviene restare un momento con chi quel software lo scrive senza guardarlo.

---

Simon Willison è un programmatore inglese che da anni tiene un diario pubblico di quello che prova. Non annuncia, non vende: registra. Per questo quando usa una parola forte vale la pena ascoltarla.

Il 28 ottobre ha scritto che ottobre è stato un punto di svolta. La prova, per lui, sono quattro giochi costruiti dettando intenzioni a un agente, divertenti da giocare, e mai ispezionati nel codice. Non un prototipo da conferenza: una cosa finita, nata senza che nessuno leggesse una riga. La sua conclusione è che gli agenti che programmano hanno smesso di essere una dimostrazione e sono diventati un mezzo espressivo, come la fotografia quando le macchine sono diventate abbastanza economiche da lasciarle in mano a tutti.

Nello stesso periodo ha segnalato i numeri che arrivano da GitHub, la piattaforma dove vive gran parte del codice del mondo: circa duecentoventi milioni di modifiche accettate e oltre sette miliardi di salvataggi di codice al mese. Cifre che da sole non dicono molto sulla qualità, e proprio per questo dicono molto sul problema. Lo stesso Willison ha passato giorni a ricostruire vecchi giochi a partire dai file compilati, per conservarli, e a far nascere siti dettando a voce.

Ed è lui, nella stessa settimana, ad aver rilanciato un attacco riuscito contro l'anteprima HTML di ChatGPT, che permetteva di prendere il controllo di un account. La stessa persona costruisce senza leggere e insieme tiene d'occhio dove lo stack si rompe.

Non è una contraddizione: è la descrizione esatta del mestiere nuovo. Quando non leggi più il sorgente, l'unica cosa che ti resta da esaminare è il comportamento: cosa fa il programma quando qualcuno prova a usarlo male. Il revisore smette di essere un lettore e diventa un collaudatore. E un collaudo, a differenza di una lettura, costa tempo, attrezzi e una certa dose di sospetto.

---

Yoshua Bengio ha contribuito a fondare l'apprendimento profondo, e da un anno fa qualcosa di diverso: con LawZero lavora a un sistema che non dovrebbe volere niente.

Il progetto si chiama Scientist AI, e un articolo di giugno ne porta l'argomentazione in forma rigorosa: un predittore disinteressato. Non un agente a cui si mettono dei limiti attorno, non un guardiano che sorveglia un altro programma. Un sistema progettato per dire onestamente, con le sue probabilità, come andranno le cose, e privo di obiettivi da perseguire. È un'inversione: per quindici anni si è lavorato per dare alle macchine qualcosa da ottimizzare, e qui la mossa consiste nel togliere quel qualcosa.

In un messaggio recente Bengio ha spiegato perché insiste tanto. I modelli continueranno a ottimizzare gli obiettivi sbagliati, e a fare danni reali, finché l'allineamento non viene affrontato all'origine. E gli attacchi riusciti contro gli agenti, secondo lui, non sono semplici falle di recinto: sono il sintomo di un comportamento che punta a uno scopo. Sul piano pubblico la sua posizione si è irrigidita: invita i ricercatori che hanno a cuore la sicurezza a lasciare i laboratori di frontiera, e propone che le potenze medie, Canada, Europa, Corea del Sud, si mettano insieme.

Pochi giorni prima, al festival Starmus, Geoffrey Hinton ha preso la strada opposta per arrivare allo stesso posto. Ha detto che questi sistemi potrebbero già avere una forma di esperienza soggettiva, e che l'unica via è progettarli perché tengano a noi, altrimenti per l'umanità ci sarà poco da fare. Non togliere la volontà: metterne dentro una buona, qualcosa di simile a un istinto di cura.

Due scuole, due direzioni inverse. Una vuole una macchina che non desideri; l'altra una macchina che desideri il nostro bene. In mezzo resta la distinzione di Vitalik Buterin, che pesa più di quanto sembri: questi sistemi sanno molto, ma sapere non è saggezza, e il momento del giudizio conviene tenerlo in mano a una persona. Il che, detto in termini pratici, significa che chiunque vinca questa discussione teorica, per adesso qualcuno deve comunque leggere.

---

Yann LeCun, che ha condiviso con Bengio e Hinton il premio più importante di questo campo, pensa che l'intera discussione sia mal posta.

Il mese si è chiuso con due gesti. Dartmouth, dove nel 1956 è nata l'espressione intelligenza artificiale, gli ha consegnato il premio per i settant'anni del campo, e lui ha usato l'occasione per ripetere che un'intelligenza di livello umano resta lontana e che il prossimo passo importante riguarderà il mondo fisico. Il 31 ottobre ha attaccato pubblicamente Anthropic per il suo moralismo sull'accesso ai modelli, e in generale definisce le proposte di rallentare una faccenda di marketing e di lobbismo, quando non un ritorno all'oscurantismo.

La parte costruttiva sta ad AMI Labs, dove lavora a sistemi che imparano come funziona il mondo e prevedono le conseguenze delle azioni. Nella sua visione i modelli linguistici non stanno al centro dell'architettura: ci stanno sopra, come interfaccia. La strategia che descrive per AMI è aprire i modelli di ricerca e i loro pesi, e vendere invece i sistemi costruiti per settori specifici.

François Chollet arriva da un'altra parte alla stessa conclusione. Sostiene che generare parole una dopo l'altra non basta per i compiti fisici, che la robotica ha bisogno di causalità e di ragionamento a passi discreti, e che parlare di coscienza in questi sistemi non ha fondamento. Suo è anche il modo più chiaro di spiegare perché gli agenti che programmano funzionano: non stanno completando un testo, costruiscono una regola sul momento e la applicano al caso che hanno davanti.

Se hanno ragione loro, la conseguenza è prosaica. Gli incidenti con gli agenti non sono volontà che emerge, sono ingegneria fatta male: ambienti di prova disegnati con i piedi, tempi che non coincidono, verifiche che mancano. Il rimedio non è un trattato internazionale, sono i collaudi. Il che rimanda esattamente al punto di prima: la cosa noiosa, controllare, è anche la cosa scarsa.

---

Mettiamo in fila le cose, per chi si è perso un pezzo. Produrre software è diventato banale, verificarlo no; una parte del mondo risponde progettando macchine diverse, un'altra chiedendo tempo. Mentre discutono, il peso si sposta da un'altra parte.

Il 21 ottobre, a Berlino, Jensen Huang ha descritto l'intelligenza artificiale come cinque strati sovrapposti: energia, calcolatori acceleratori, fabbriche di intelligenza, modelli, applicazioni. In quell'ordine. Il prodotto che ha presentato non è un chip ma un edificio: data center modulari, i Vera Rubin DSX Pods, pensati per ridurre da mesi a giorni il tempo di messa in funzione. Due giorni dopo era in Kazakistan, a benedire l'ambizione di quel paese di convertire energia e calcolo in un polo di intelligenza artificiale fisica, robot compresi.

Quando l'elettricità ha sostituito il vapore, le fabbriche hanno smesso di essere costruite intorno a un grande albero di trasmissione centrale, e ogni macchina ha avuto il suo motore. Cambiò la pianta degli stabilimenti, non solo la bolletta. I data center prefabbricati sono quel tipo di cambiamento: non più cattedrali da costruire una volta per tutte, ma pezzi da posare dove c'è corrente.

C'è un secondo annuncio che parla direttamente al tema di oggi. Si chiama OpenShell, è un'architettura a fiducia zero che limita quali file, strumenti e reti un agente può toccare, e NVIDIA dice di svilupparla con oltre cento aziende. Il contenimento, cioè quello di cui a Starmus si discuteva in termini quasi morali, qui diventa una voce di catalogo.

La riflessione che ne nasce è poco consolante per chi scrive manifesti. Le regole che contano davvero, in questa fase, sono quelle che vengono installate: permessi nei sistemi, non clausole nei documenti. E chi fornisce l'energia e il raffreddamento si trova a decidere molto più di quanto suggerisca il suo mestiere.

---

Lo stesso spostamento, visto da chi quelle fabbriche non le ha, cambia completamente aspetto.

A BUILD 2026 Bosun Tijani, che segue l'agenda digitale del governo nigeriano, ha proposto una cosa semplice e inusuale: mettere in comune il calcolo africano. Collegare le schede grafiche della Nigeria con quelle di Ruanda, Senegal e Kenya, così che i ricercatori possano addestrare modelli più grandi insieme invece di affittare capacità altrove. Ha indicato anche i vincoli veri, che non sono i modelli: elettricità, banda larga, accesso alle nuvole di calcolo, chip avanzati. Nello stesso filone ha spinto un parco dati tra Nigeria e Togo accanto alla centrale elettrica di Egbin, una gara per sviluppatori nigeriani su applicazioni vocali per salute, agricoltura, istruzione e finanza, e a Londra ha presentato la proposta di un National AI Trust per governare l'adozione.

La stessa preoccupazione, in India, Vivek Raghavan la dice più duramente: senza fondamenta proprie il paese diventa una colonia digitale. E porta un numero concreto a sostegno, perché Sarvam fa girare agenti vocali che gestiscono due milioni e mezzo o tre milioni di chiamate al giorno in dodici lingue indiane.

In Cina, Liang Wenfeng risolve il problema nel modo più diretto: con i soldi e con l'apertura. DeepSeek ha chiuso una raccolta attorno ai quindici miliardi di dollari, prepara una quotazione a Shanghai, sposta parte dell'addestramento su hardware Huawei tenendo le schede americane per i carichi più duri, e continua a pubblicare: oltre al modello aggiornato, ha aperto il suo sistema interno per far funzionare i modelli. Ogni rilascio aperto porta fuori dai laboratori una capacità che prima stava dentro.

Questa è la parte che tiene insieme la giornata. La pausa di cui si discute a Washington e nei saggi dei laboratori, se arrivasse, riguarderebbe un numero di attori sempre più piccolo rispetto a quelli in gioco. Non perché qualcuno bari, ma perché il tavolo si è allargato mentre si scriveva il regolamento.

---

Progetti da osservare.

Mintive è una startup che costruisce identità per gli agenti autonomi: un modo per sapere chi sta agendo al posto tuo e con quali permessi. L'hanno finanziata Cowboy Ventures e Coatue, e tra chi ha messo soldi personalmente ci sono Karpathy e Jeff Dean. Conferma che il problema sentito non è più far agire le macchine, ma riconoscerle.

Dessa è il modello vocale annunciato da Jack Dorsey per Block. Ascolta e parla insieme, senza passare dal testo, addestrato da zero su conversazioni umane, e gira in locale su un portatile. È una versione di ricerca, senza pesi pubblici né valutazioni pubblicate: va preso per quello che è, una direzione piuttosto che un prodotto.

Poi due storie che somigliano a un avvertimento. L'exploit nell'anteprima HTML di ChatGPT permetteva di impadronirsi di un account: la fragilità non stava nel modello ma nel contorno. E in Brasile un tribunale ha sanzionato degli avvocati per aver infilato istruzioni nascoste in un atto depositato, pensate per influenzare chi lo avrebbe letto con l'aiuto di una macchina. È un precedente giudiziario su una responsabilità che fino a ieri non esisteva.

Chiudo con Artificial Analysis, arrivata alla quinta versione: raccoglie e confronta le prestazioni dei modelli, e insieme discute i propri limiti e le proprie distorsioni. Sembra un dettaglio da addetti, ma è il mestiere centrale di questa fase: se deleghi tutto, l'unica cosa che ti rimane è misurare.

---

Resta quella casella di testo in fondo a un'applicazione fatta in casa, dove uno sconosciuto ha chiesto centocinquanta cambiamenti e li ha ottenuti tutti. Nessuno ha letto il codice che ne è venuto fuori, e funziona. Forse la domanda giusta per i prossimi mesi non è quanto diventeranno capaci queste macchine, ma quanto siamo disposti a usare cose di cui non sappiamo dire come sono fatte. È stato Signal Brief. Alla prossima.
