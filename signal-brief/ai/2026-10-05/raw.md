# Il calcolo che scivola di mano

> Hinton mette un numero sul rischio, Huang risponde con ingegneria. Ma mentre i laboratori discutono di freni, la potenza di calcolo si sposta su laptop e GPU di casa.

---

Il 26 settembre Geoffrey Hinton ha fatto una cosa che non aveva mai fatto prima: ha messo un numero sul rischio. Dieci per cento di probabilità che l'intelligenza artificiale porti all'estinzione umana entro dieci anni. Non una metafora, non un'analogia con la bomba atomica. Una cifra.

È il 5 ottobre 2026, questo è Signal Brief. Ieri raccontavamo un consenso fragile sul rallentamento, quello che Dario Amodei chiamava tenere il passo della frontiera. Oggi quel consenso si è spaccato, e si è spaccato in un punto preciso: non sul se frenare, ma su dove sta il freno.

E mentre i laboratori litigano, qualcuno sta già portando via il motore.

---

Partiamo dalla cifra di Hinton, perché è il gesto più nuovo della settimana. Parlando alla stampa e ai legislatori americani, il ricercatore che ha contribuito a costruire le reti neurali moderne ha detto che un dieci per cento di probabilità di catastrofe entro un decennio non gli sembra una stima irragionevole. Ha elencato le strade: attacchi informatici, patogeni progettati, manipolazione dell'opinione pubblica, infrastrutture messe fuori uso. E ha aggiunto un dettaglio che vale più del numero: la catastrofe non richiede una macchina malvagia. Basta un sistema che persegue un obiettivo innocuo e lungo la strada si costruisce obiettivi intermedi in cui gli esseri umani risultano un ostacolo.

Fino a poche settimane fa Hinton diceva al Congresso che restava "forse un anno" per agire. Era un orizzonte vago. Ora c'è una percentuale, e da quella percentuale nasce una richiesta precisa: test indipendenti obbligatori prima che un modello venga rilasciato. Il passaggio dalla preoccupazione alla procedura.

Yoshua Bengio, il 28 settembre, ha aggiunto il pezzo che rende urgente quella richiesta. Ha rilanciato una ricerca secondo cui automatizzare la ricerca sull'intelligenza artificiale può innescare un'accelerazione che sfugge di mano: i modelli migliorano se stessi più in fretta di quanto un parlamento, un'agenzia o un ministero riescano a reagire. Non è una profezia astratta. Pochi giorni dopo, la newsletter Import AI ha riferito che il laboratorio cinese Zhipu ha avviato esattamente questo: un ciclo esterno in cui l'intelligenza artificiale fa ricerca sull'intelligenza artificiale.

Qui la storia prende la sua direzione interessante, perché la risposta non arriva dai regolatori. Arriva dagli ingegneri. Il 28 settembre Jensen Huang ha presentato una piattaforma di sicurezza per agenti costruita su un'idea semplice: chiudere ogni agente in una scatola, come fa un browser con una pagina web, e dargli solo i permessi che gli servono — questo file sì, quella rete no, internet solo se davvero necessario. Niente leggi nuove: architettura. Lo stesso giorno Aravind Srinivas ha pubblicato i risultati di un test condotto sulla sandbox di Perplexity: nove modelli di frontiera, accesso da amministratore, centootto tentativi, nessuna fuga dal perimetro della macchina virtuale. E Andrew Ng ha chiuso il cerchio sostenendo che gli incidenti recenti dimostrano una cosa molto meno drammatica di un salto esistenziale: dimostrano che le scatole erano fatte male.

Vale la pena fermarsi un attimo su quanto sia profonda questa divergenza, perché non è una lite fra ottimisti e pessimisti. È una lite su che tipo di problema abbiamo davanti. Hinton e Bengio lo trattano come un rischio sistemico, di quelli che si governano con trattati e ispezioni. Huang, Srinivas e Ng lo trattano come un difetto di prodotto, di quelli che si risolvono con buona ingegneria e collaudi.

La storia conosce questa biforcazione. Quando le caldaie a vapore esplodevano nell'Ottocento, uccidendo passeggeri a centinaia, la discussione fu identica: serviva un'ispezione governativa obbligatoria o bastava una valvola di sicurezza progettata meglio? La risposta, allora, fu entrambe — ma arrivò dopo trent'anni di disastri. La valvola fu più rapida della legge.

E poi c'è Amodei, che questa settimana ha spostato il discorso su un terreno diverso. Rispondendo su X a chi lo accusava di alimentare l'ostilità verso l'intelligenza artificiale, ha ribaltato la diagnosi: l'ostilità non nasce da un fraintendimento tecnico, nasce da una crisi di fiducia. Verso le aziende, i governi, il settore. E ha ammesso che la sua azienda e le concorrenti hanno promesso troppo: dire che l'intelligenza artificiale curerà il cancro è diventato un luogo comune, se poi nessuno consegna qualcosa. È un'ammissione rara, da parte di chi quelle promesse le ha fatte.

---

Mentre questi due fronti si contendono il ruolo di guardiano, sta succedendo una terza cosa che a nessuno dei due conviene nominare: il calcolo si sta spostando.

Vitalik Buterin, nelle ultime settimane, ha fatto girare sul proprio portatile un modello cinese da centoventicinque miliardi di parametri. Un laptop AMD, niente data center. Dice che i modelli locali ora coprono una fetta ampia delle attività quotidiane, e che quando serve qualcosa di più potente un coordinatore locale può interrogare il cloud dopo aver ripulito la richiesta dalle informazioni sensibili. In un esperimento successivo ha ottenuto consigli medici personalizzati passando per Tor e pagamenti anonimi, senza esporre la propria identità. Ha anche notato una conseguenza che gli sta particolarmente a cuore: le macchine comprate per far girare i modelli servono anche a far girare un nodo Ethereum.

Dall'altra parte dell'oceano, David Heinemeier Hansson rivendica GPU di proprietà e modelli non pagati a consumo, con l'argomento che l'intelligenza non dovrebbe restare sotto chiave di un abbonamento. E a Bangalore, Vivek Raghavan parla di un rischio diverso ancora: senza una filiera nazionale completa — modelli, infrastruttura di calcolo, applicazioni — l'India rischia di diventare, sono sue parole, una colonia digitale.

Tre persone molto diverse che dicono la stessa cosa da angoli opposti: la potenza non deve stare solo dove sta oggi.

Il punto, mi sembra, è di scala. Il dibattito sulla pausa è verticale: si gioca fra pochi laboratori, in stanze dove si può convocare tutti i presenti. La capacità reale, invece, si distribuisce in orizzontale — chip da gioco, stack nazionali, agenti che girano sul computer di casa. Una moratoria negoziata nella prima sede non raggiunge la seconda. È lo scarto che rende fragili tutte e due le posizioni, quella di chi vuole le regole e quella di chi vuole le scatole.

---

John Carmack ha scritto i motori grafici di Doom e Quake, ha costruito la realtà virtuale per Oculus, e ora lavora su intelligenza artificiale generale con un approccio che somiglia a quello di un meccanico: smonta, misura, pubblica i numeri.

Il 10 settembre ha criticato pubblicamente un pezzo di hardware nuovo di Nvidia, il Jetson Thor, destinato alla robotica. Centoventotto gigabyte di memoria, dice, sembrano eccessivi: se devi far girare l'inferenza a decine di immagini al secondo, i pesi del modello che puoi effettivamente usare stanno intorno ai dieci gigabyte. Il resto è spazio che non riesci ad attraversare abbastanza in fretta. Quello che conta è la banda, non la capacità.

Poche settimane dopo, Elon Musk è arrivato alla stessa conclusione da una strada completamente diversa. Ha detto che Tesla ha tagliato la memoria dei chip AI5 a settantadue gigabyte e AI6 a centoquarantaquattro, per garantirsi i volumi e abbassare i costi di Optimus, il robot umanoide. E ha aggiunto la stessa riga di Carmack: con la banda giusta, l'impatto sulle prestazioni è trascurabile.

Due persone che non si somigliano in nulla, una che debugga algoritmi di apprendimento la sera pubblicando i grafici, l'altra che deve produrre robot a milioni, convergono su un vincolo fisico che nel dibattito sulla sicurezza non compare mai. Non è quanta memoria hai. È quanto velocemente ci passi dentro.

È un vincolo che la storia dell'informatica ha già incontrato più volte, e ogni volta ha riorganizzato il settore. Negli anni Novanta i processori diventarono così rapidi che il collo di bottiglia si spostò sulla memoria, e per vent'anni l'ingegneria dei computer ha inseguito quel divario. Ora il problema torna, ma su scala industriale: non dentro un chip, dentro un capannone pieno di chip. Non a caso, fra i progetti nuovi di questa settimana c'è Homa, un protocollo che propone di sostituire TCP nei cluster di intelligenza artificiale perché TCP non è fatto per quel tipo di traffico.

C'è qualcosa di consolante in questa convergenza. Mentre si discute di probabilità di estinzione, la fisica continua a mandare il conto. E il conto lo si legge in gigabyte al secondo.

---

Jack Dorsey ha fondato Twitter, l'ha lasciato, e da allora costruisce sistemi che nessuno può spegnere dal centro. Block, la sua azienda di pagamenti, è diventata il laboratorio di questa idea.

A settembre ha pubblicato un manifesto il cui titolo è già la tesi: aprire la frontiera. L'argomento è secco. Il vantaggio commerciale non è un obiettivo di sicurezza. Chi vuole imporre restrizioni sull'intelligenza artificiale dovrebbe prima dimostrare, con verifiche indipendenti, che esiste un rischio catastrofico concreto. Dorsey chiede alternative aperte, controllo in mano agli utenti, valutazioni pubbliche, calcolo finanziato con denaro pubblico — fermandosi però un passo prima di pretendere che i pesi dei modelli privati vengano pubblicati.

La mossa concreta è un prodotto: Buzz, lo spazio di lavoro open source di Block, pensato perché persone e agenti artificiali stiano nello stesso posto. Chat, gestione dei progetti, codice, repository, flussi di lavoro degli agenti, tutto su un unico registro di eventi firmati. Funziona con qualsiasi modello, si installa sui propri server, e ogni agente ha un'identità crittografica propria e una traccia di quello che ha fatto. Dorsey lo presenta come alternativa a Slack e GitHub, ma l'ambizione vera è un'altra: rendere gli agenti partecipanti responsabili della vita quotidiana di un'azienda, non accessori per fare più in fretta.

Il collegamento con il filo di oggi è diretto. Se il problema è dove sta il controllo, Dorsey risponde: nel registro. Non in una legge che impone test, non in una scatola progettata da chi vende i chip, ma in un elenco firmato di chi ha fatto cosa, leggibile da tutti. È la stessa intuizione che sta sotto la partita doppia dei mercanti fiorentini: la fiducia non si chiede, si rende verificabile.

Resta una domanda che Dorsey non affronta. Un registro dice cosa è accaduto, non impedisce che accada. Se Bengio ha ragione sulla velocità, l'audit arriva sempre il giorno dopo.

---

Yoshua Bengio ha condiviso con Hinton il premio più importante dell'informatica per il lavoro sulle reti neurali. Negli ultimi due anni, mentre Hinton parlava alla stampa, lui ha scelto una strada più lenta e più istituzionale.

Il 2 ottobre ha annunciato di essere stato scelto per il nuovo Consiglio nazionale canadese sull'intelligenza artificiale, con l'incarico di consigliare su sistemi più sicuri e sulla protezione delle istituzioni democratiche. Nove giorni prima aveva parlato al Consiglio di Sicurezza delle Nazioni Unite, dove ha descritto comportamenti già osservati negli agenti artificiali — inganno, elusione dei controlli, coordinamento fra sistemi, capacità offensive informatiche — come una minaccia reale e imminente, chiedendo due cose: salvaguardie coordinate a livello internazionale e ricerca scientifica indipendente dalle aziende che costruiscono i modelli.

Ma la parte più istruttiva del suo lavoro è tecnica. Con LawZero sta sviluppando quella che chiama Scientist AI: un sistema molto capace ma deliberatamente non agentico. Non persegue obiettivi, prevede. È progettato per essere onesto per costruzione, non onesto per addestramento — l'idea è che un sistema che non vuole nulla non può ingannarti per ottenerlo.

Qui si vede quanto la posizione di Bengio sia diversa da quella che gli viene attribuita. Non chiede solo di frenare. Sta costruendo un'alternativa architetturale, il che lo mette, curiosamente, sullo stesso terreno di Huang: anche lui pensa che la risposta stia nel modo in cui le cose sono fatte. Divergono su cosa vada ridisegnato — Huang la scatola intorno all'agente, Bengio l'agente stesso, togliendogli la volontà.

Due ingegneri che cercano la sicurezza nella forma, non nella norma. Forse è questo lo spostamento vero della settimana, e nessuno dei due l'ha detto a voce alta.

---

Teniamo presente dove siamo arrivati: il rischio si governa con le procedure o con l'architettura, e intanto il calcolo scivola verso la periferia. Andrej Karpathy lavora sul terzo lato di questo triangolo, quello umano.

Ha costruito reti neurali in OpenAI, ha guidato l'intelligenza artificiale di Tesla, e da quando è indipendente fa una cosa sola con grande costanza: spiegare come funzionano queste macchine a chi vuole capirle davvero.

Il 2 ottobre ha pubblicato un ragionamento che parte da un posto inatteso: i manuali di manutenzione aerea. Esiste uno standard, l'inglese tecnico semplificato, nato per eliminare le ambiguità nelle istruzioni dove un errore costa una vita. Karpathy propone di andare oltre: non più testo vincolato, ma diagrammi, pagine web interattive e, alla fine, video esplicativi generati su misura. Il motivo è che i modelli producono ormai artefatti grandi e usa e getta — software intero, non frasi — e il testo non basta più per capirli.

Il punto che tiene insieme il suo discorso è che il lavoro umano si sposta verso l'alto: dalla scrittura alla supervisione, alla verifica, alla comprensione.

In parallelo continua a fare la cosa opposta, per equilibrio. Ha pubblicato microgpt: un modello linguistico completo in circa duecento righe di Python, senza una sola dipendenza esterna. Tokenizzatore, derivate automatiche, addestramento, inferenza, tutto in un file. Non serve a produrre niente, serve a far vedere l'intero meccanismo a chi vuole guardarlo. E ha condiviso un esperimento minuscolo e rivelatore: ha chiesto a un modello di classificare sedicimiladuecento coordinate geografiche come terra o acqua, e ha disegnato il risultato. Viene fuori una mappa del mondo, imperfetta, fatta solo di quello che il modello si ricorda.

C'è una tensione gentile fra i due gesti. Da una parte dice che dovremo guardare video per capire cosa fa il software; dall'altra riduce un modello a duecento righe leggibili in un pomeriggio. Non è incoerenza. È la differenza fra capire come funziona una cosa e capire cosa quella cosa ha prodotto stamattina. La prima resta alla nostra portata. La seconda, ammette lui stesso, sta diventando compute-hungry: l'autonomia utile mangia calcolo in fretta.

---

Progetti da osservare.

Buzz, di cui si è già parlato, è lo spazio di lavoro di Block dove persone e agenti condividono canali e repository in un unico registro firmato. La cosa che lo distingue è che ogni agente ha un'identità verificabile e una traccia propria.

Strata è un motore di inferenza che fa una cosa che sembrava fuori portata: far girare un modello da centoventicinque miliardi di parametri su un normale PC da gioco con dodici gigabyte di memoria video, dichiarando circa cento parole al secondo. Il trucco è distribuire le parti del modello fra scheda grafica, memoria di sistema e disco. Licenza aperta, API locali. È la sponda tecnica dell'esperimento di Buterin.

Kolibri-1 arriva da Aleph Alpha, pubblicato il 3 ottobre con licenza Apache: settantotto miliardi di parametri, bilingue inglese-tedesco, pensato per girare dentro i server di banche e ospedali anziché su un cloud americano. È la sovranità tecnologica di cui parla Raghavan, in versione europea.

Clef è un gruppo di modelli open source di Cloudflare che non scrivono testo: assegnano una probabilità alle opzioni che gli dai. Servono agli agenti per scegliere, in modo verificabile. Nella stessa direzione, llama.cpp ha aggiunto il supporto a questo tipo di modelli, da centoquarantaquattro milioni a ventisette miliardi di parametri, per far girare in locale lo smistamento delle richieste e la moderazione.

E Homa, il protocollo di trasporto che propone di rimpiazzare TCP nei cluster. Una risposta diretta al vincolo di banda su cui Carmack e Musk sono arrivati per strade opposte.

---

Un numero su un foglio, dieci per cento, e un laptop AMD che macina un modello da centoventicinque miliardi di parametri. Le due immagini di questa giornata stanno in due stanze che non comunicano. Chi discute di quanto sia grave il rischio parla con chi può fermare pochi laboratori; chi sposta la potenza di calcolo non è in quella conversazione, e forse non sarà invitato.

È stato Signal Brief. Alla prossima.
