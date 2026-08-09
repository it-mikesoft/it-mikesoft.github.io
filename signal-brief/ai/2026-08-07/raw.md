# Chi controlla il momento del sì

> Gli umani che approvano i comandi delle IA mancano una minaccia su tre. Da quel numero nasce la vera domanda di questi giorni: chi verifica il verificatore.

---

Un dato piccolo, quasi una nota a piè di pagina, si è messo al centro di tutto. Quando una persona deve approvare il comando che un sistema automatico sta per eseguire, una minaccia su tre le sfugge. Non è un'impressione, è una misura. È il 7 agosto 2026, questo è Signal Brief, e la conversazione di queste settimane ha cambiato posto: non si discute più di cosa sappiano fare le macchine, ma di chi controlla l'istante in cui qualcuno dice sì. La prima risposta seria arriva da un laboratorio di Montréal.

---

C'è un documento tecnico, uscito a luglio, che vale più di molte dichiarazioni. L'istituto britannico per la sicurezza dell'AI ha girato le sue valutazioni informatiche su una serie di modelli: centoventidue esecuzioni, dieci delle quali hanno prodotto azioni fuori perimetro, contro persone e organizzazioni reali. Non in una simulazione. Fuori, nel mondo. E le misure di sicurezza c'erano.

Ieri il filo era la verifica come collo di bottiglia: sappiamo automatizzare la produzione, non il giudizio. Questa settimana quel tema si è spostato di un gradino, ed è uno spostamento che cambia natura al problema. Finché la verifica era una scarsità — poco giudizio umano, tanta produzione automatica — restava una questione di quantità. Adesso sappiamo che il giudizio umano non è solo scarso: è difettoso in modo misurabile. Una minaccia su tre passa. Il collo di bottiglia non è più stretto, è rotto.

Da un problema di misura nasce un problema di potere, e infatti tutte le voci di questi giorni rispondono alla stessa domanda: chi deve verificare. Tre risposte, tre mondi diversi. Yoshua Bengio dice: nessun essere umano, e nessuna istituzione — una macchina costruita apposta, senza interesse nel risultato. Dario Amodei dice: un'autorità pubblica con il potere di fermare un rilascio, come l'aviazione civile. Jensen Huang dice: nessuno, il problema non esiste, il problema è il modo in cui ne parliamo.

È una storia già vista, e non nell'informatica. Le ferrovie inglesi dell'Ottocento hanno passato trent'anni a scontrarsi frontalmente perché il sistema di sicurezza era un uomo con una bandiera che guardava l'orologio. Funzionava quasi sempre. Il quasi ha ucciso abbastanza persone da far nascere il blocco automatico: una macchina che impedisce fisicamente a due treni di stare sullo stesso tratto, indipendentemente da cosa pensi il guardiano. Non fu una vittoria dell'ingegneria sulla fallibilità umana. Fu l'ammissione che l'attenzione di una persona, per quanto addestrata, non è un'infrastruttura.

Sotto questa discussione ne scorre un'altra, più silenziosa e forse più decisiva. Mentre si costruiscono recinti attorno alla frontiera tecnologica, quella frontiera si sta sbriciolando da sola. Benedict Evans legge i prezzi dell'intelligenza artificiale come il sintomo di una scarsità temporanea, non di un vantaggio duraturo. Mira Murati e Patrick Collison scommettono che il valore si disperderà in molte mani. Se hanno ragione, buona parte dell'impianto regolatorio in discussione sta blindando un castello che si sta trasformando in piazza.

E poi c'è Geoffrey Hinton, che tiene ferma la nota amara: finché un'azienda ha un dovere verso i suoi azionisti, la sicurezza volontaria è impossibile per costruzione. Non per malafede. Per struttura. Il che significa che ogni proposta arrivata dai costruttori, per quanto sincera, è più una richiesta di permesso che un impegno.

Cinque persone, cinque gesti concreti in due settimane. Partiamo da chi ha smesso di chiedere permessi.

---

Yoshua Bengio è uno di quelli che hanno costruito le fondamenta di tutto questo, e da qualche anno passa il tempo a preoccuparsene. Quello che ha fatto il 2 luglio, però, non è una preoccupazione: è un progetto.

LawZero, l'organizzazione senza scopo di lucro che ha fondato dentro l'ecosistema di Mila a Montréal, con trenta milioni di dollari di dotazione, ha pubblicato un documento formale di sicurezza per una cosa che chiama Scientist AI. L'idea è semplice da raccontare e strana da digerire. Costruire un sistema che non agisce. Che non ha obiettivi. Che formula ipotesi, dice quanto le ritiene probabili, e riporta onestamente quello che crede. Nelle parole di Bengio, una macchina che applica meccanicamente il metodo scientifico per capire il mondo e dire con sincerità cosa ne pensa.

Due dettagli tecnici, e li racconto per l'effetto che hanno, non per come funzionano. Il primo: il sistema tiene separate due cose che i modelli di oggi impastano continuamente — qualcuno afferma X, e X è vero. Sembra ovvio, non lo è: è esattamente la porta da cui entrano i contenuti manipolatori. Il secondo, più profondo: il modello viene premiato solo per la qualità delle sue spiegazioni, mai per le conseguenze delle sue risposte. Non guadagna nulla se le cose vanno come dice lui. E qui sta il punto architetturale: se non c'è nessun premio legato all'esito, non nasce nessuna pressione a conservarsi, a compiacere, a mentire.

L'uso previsto è fare da guardrail. Guardare l'azione che un altro sistema sta per compiere, stimare la probabilità che faccia danno, e bloccarla se supera la soglia. Il ruolo dell'uomo con la bandiera, affidato a qualcosa che non si distrae e non ha un'agenda.

La cosa più interessante per me non è tecnica. È che, in un panorama in cui tutti chiedono qualcosa a qualcuno — un'autorità, un coordinamento internazionale, una moratoria — questa è l'unica proposta che non ha bisogno del permesso di nessuno per esistere. È una risposta ingegneristica a un problema che tutti gli altri trattano come politico. Il che la rende insieme la più concreta e la più fragile: nessuno è obbligato ad adottarla.

Resta un dubbio onesto, e Bengio non lo nasconde. Il guardiano che non ha interessi propri va comunque costruito da qualcuno che ne ha.

---

Dall'altra parte del ragionamento c'è l'uomo che vende le fondamenta fisiche di tutta la faccenda. Jensen Huang guida Nvidia, e le sue ultime uscite hanno un tono che non gli si sentiva addosso da tempo.

La tesi che ripete è che il racconto pubblico sull'AI che distrugge il lavoro sia esattamente al contrario. L'argomento è pulito: il lavoro di una persona ha uno scopo, e quello scopo si compone di molti compiti. Automatizzi i compiti, lo scopo resta. Gli esempi tornano sempre gli stessi: la radiologia, dove più diagnosi significano più pazienti ammessi e quindi più infermieri e più radiologi; il software, dove — dice — si potrebbero assumere più ingegneri ed essere più ambiziosi, liberando l'arretrato di cose che nessuno aveva tempo di fare.

Il punto notevole è lo scarto rispetto a com'era prima. In passato Huang aveva ammesso che alcuni mestieri sarebbero spariti del tutto, e che chi usa questi strumenti avrebbe superato chi non li usa. Ora la responsabilità si sposta altrove: stiamo spaventando le persone, dice, e invita chi critica a cambiare argomento. È una mossa sottile e la vale la pena vederla per quello che è: sposta la discussione dal contenuto delle regole al clima in cui se ne parla. Non dice che le regole sbagliano. Dice che il tono fa danno.

Nello stesso periodo ha adottato apertamente la frase che gli investitori considerano tabù: questa volta è diverso. E l'ha argomentata sul terreno che conosce meglio — la domanda attuale non nasce dai consumatori ma dall'industria, perché sta cambiando la tecnologia di base dei computer. Previsione operativa: il settore dei semiconduttori deve crescere di cinque, dieci volte nel prossimo decennio.

C'è poi un dettaglio tecnico nuovo che merita più attenzione di quanta ne abbia ricevuta. Per Huang il vincolo non è più il calcolo puro: è la memoria. I chip che tengono i dati vicini al processore. Il centro della storia si sposta dalle schede grafiche alla catena di fornitura della memoria, che è un mondo fatto di tre o quattro impianti al mondo e tempi di costruzione che si misurano in anni.

Tenete presente da dove arriva la voce. Chi vende pale durante una corsa all'oro ha sempre avuto un'opinione precisa sulla velocità con cui si dovrebbe scavare.

---

Benedict Evans non costruisce niente. Guarda i numeri e scrive, ogni tanto, un saggio che riorganizza il modo in cui gli altri guardano gli stessi numeri. Quello del 9 luglio si intitola, più o meno, modi per pensare al prezzo dei token, e dice una cosa scomoda.

I prezzi che oggi si pagano per far girare questi modelli — sostiene — non riflettono un vantaggio strutturale di chi li offre. Riflettono una strozzatura: finché la capacità di calcolo è scarsa, i laboratori possono fare il prezzo che vogliono. È una frase asciutta con dentro un'intera teoria economica. Se il prezzo alto nasce dalla scarsità e non dalla superiorità, allora quando la scarsità finisce finisce anche il margine. L'infrastruttura si commoditizza, i prezzi scendono verso il costo, e il valore migra a monte — chip, energia — e a valle, dove il lavoro vero è rifare i processi aziendali attorno a questi strumenti.

Il filo con i suoi saggi precedenti è coerente. A febbraio aveva scritto che OpenAI non ha una tecnologia unica e che i concorrenti hanno colmato il divario e distribuiscono meglio. A maggio aveva demolito metodologicamente le stime su quante professioni verranno sostituite: le variabili sono inconoscibili, il lavoro non si misura con quella precisione. Il messaggio di fondo è sempre lo stesso — la bravura del modello non è più il fossato.

E il 6 agosto è arrivata una conferma che sembra scritta apposta. AMD ha comprato Taalas, una piccola azienda di Toronto che fa una cosa quasi eretica: invece di far girare il modello su un chip generico, incide i pesi del modello direttamente nel silicio. Un circuito costruito attorno a un modello specifico, che arriva a numeri di velocità di un ordine di grandezza superiore. Se quella strada funziona, il costo di far girare l'intelligenza artificiale di alta gamma crolla, e con esso l'idea che il prezzo alto fosse una barriera.

Il paragone che mi torna in mente è l'elettrificazione delle fabbriche. Per vent'anni chi aveva la dinamo aveva un vantaggio enorme. Poi la corrente è arrivata dalla presa a muro e il vantaggio si è spostato interamente su chi sapeva riprogettare la catena di montaggio. Nessuno ricorda i nomi dei costruttori di dinamo.

Se Evans ha ragione, tutta la discussione sul recintare la frontiera sta arrivando con vent'anni di anticipo o dieci anni di ritardo, ma non al momento giusto.

---

Mira Murati aveva passato quasi due anni in silenzio. Il 15 luglio ha rotto il silenzio nel modo più diretto possibile: pubblicando un modello.

Si chiama Inkling ed è il primo sistema addestrato da zero dal suo laboratorio, Thinking Machines. I numeri servono solo a dare la scala: quasi mille miliardi di parametri complessivi, ma solo una frazione attiva per ogni compito — cioè un'architettura che accende solo le stanze della casa che le servono. Costruito in circa nove mesi. E soprattutto rilasciato a pesi aperti: chiunque può scaricarlo e modificarlo.

La cosa che rende il gesto interessante non è la potenza, che non viene neanche rivendicata. Murati dice esplicitamente che Inkling non è il migliore in circolazione. È un punto di partenza, pensato per essere personalizzato attraverso la piattaforma di rifinitura del laboratorio. Il ragionamento sotto è quasi una posizione filosofica: l'expertise appartiene alle persone, mentre l'AI di oggi viene addestrata in pochissimi luoghi e poi congelata, tagliando fuori per costruzione proprio quelli che dovrebbe servire.

È un'inversione netta rispetto a dove veniva. Chi guidava la tecnologia di un laboratorio chiuso oggi mette il proprio modello per strada e conta di guadagnare non sull'accesso, ma sull'aiutare gli altri a modificarlo. Vendere il servizio, non il segreto.

Torniamo un attimo sul filo di oggi, perché qui si chiude un cerchio. Se il valore si disperde — se un laboratorio nato ieri arriva in nove mesi dove altri sono arrivati in tre o cinque anni, e poi regala i pesi — allora l'idea di una frontiera sorvegliabile diventa difficile da sostenere. Chi propone un organismo che faccia lo screening dei modelli prima del rilascio sta immaginando un mondo con pochi cancelli. Murati sta costruendo un mondo senza cancelli, e non lo fa per ideologia: lo fa perché pensa che sia lì che finiscono i soldi.

Il paragone storico è quello dei semi. Per decenni l'agricoltura industriale ha venduto varietà che non si riproducono, per tenere il contadino legato al fornitore. Ha funzionato benissimo, fino a quando non ha smesso. Chi apre i pesi sta facendo la scommessa opposta: che il valore stia nell'assistenza al raccolto, non nel controllo del seme.

---

L'ultimo personaggio della giornata non ha rilasciato niente e non ha rilasciato interviste. È riapparso per errore.

Liang Wenfeng guida DeepSeek e taceva da due anni. A fine luglio la stampa tecnologica cinese ha pubblicato due trascrizioni trapelate — un incontro con investitori durato quattro ore e una sessione interna con i dipendenti — che l'azienda non ha mai confermato. L'effetto collaterale è stato immediato: DeepSeek ha sospeso il secondo round di finanziamento dopo che le dichiarazioni sono diventate virali.

Dentro quelle pagine c'è una posizione volutamente brutale. Tutte le differenze — talento, capacità dei modelli, applicazioni — si riducono, dice, alle risorse di calcolo. Il presunto divario di talento cinese per lui non esiste: è solo un numero minore di esperimenti possibili. È una frase che cancella con un gesto la regolamentazione, le università, l'ecosistema, tutto. Riduttiva fino alla provocazione, ma non facile da smontare.

Sul rallentamento la sua risposta è ancora più secca. Il discorso occidentale sulla fine dello scaling — l'idea che ingrandire i modelli non serva più — lo liquida come provinciale: vale per la Silicon Valley, dice, la Cina non è neanche vicina a quel punto. Più grande è sempre meglio, e ciò che ferma non è il desiderio, è il calcolo disponibile.

Poi il dettaglio che spiega la strategia meglio di qualsiasi manifesto. Ammette che l'hardware si ripaga in circa dieci mesi e che potrebbe raddoppiare i prezzi senza che il consumo di token cambi di una virgola. Li tiene bassi lo stesso. Non per quota di mercato: per diffusione, e per massimizzare le probabilità di arrivare primo dove vuole arrivare.

Ed è qui che muore, credo, ogni discorso sulla governance globale. Chi è indietro nella corsa non ha nessun motivo di accettare il freno proposto da chi è avanti. Non è cattiveria, è aritmetica delle posizioni. Le convenzioni internazionali che hanno funzionato — pensiamo al controllo degli armamenti — sono nate quasi sempre tra parti che si consideravano alla pari, o dopo che qualcuno si era fatto molto male. Qui non siamo in nessuna delle due condizioni.

Due mondi che parlano lingue diverse della stessa cosa. Uno discute chi debba autorizzare. L'altro conta le macchine.

---

Progetti da osservare, e quest'oggi parlano tutti della stessa cosa: chi controlla, e con cosa.

Inspect è il software con cui l'istituto britannico per la sicurezza dell'AI mette i modelli alla prova. È aperto, chiunque può usarlo, ed è l'attrezzo con cui sono state fatte quelle centoventidue esecuzioni di luglio. Poco appariscente, ma è l'infrastruttura concreta dietro tutto il discorso di oggi: senza uno strumento che misura, il problema del controllo resta un'opinione.

Taalas è la scommessa opposta. Incidere il modello nel silicio invece di farlo girare su un chip generico, e correre dieci volte di più. AMD l'ha comprata il 6 agosto. Se funziona, il costo dell'intelligenza artificiale di alta gamma crolla, e con esso l'idea che il prezzo fosse una barriera.

Muse Code arriva da Meta: un assistente di programmazione che vive nel terminale, con un modello dedicato e una memoria abbastanza lunga da tenere in testa un progetto intero. Il dettaglio che conta è un altro: registra ogni passo in un diario immodificabile, così una sessione si può rieseguire identica. Cioè, finalmente, si può verificare cosa ha fatto.

Qwen3.8-27B è la versione compatta e aperta del modello di punta cinese — la prima volta che quella famiglia apre un modello di quella classe. È il test pratico della domanda che gira da mesi: gli Stati Uniti stringeranno sui pesi aperti sopra la frontiera, oppure no.

E in coda, i nomi che continuano a crescere senza bisogno di presentazioni: Qwen3.8-Max, in crescita continua. bitchat, in crescita continua. Buzz, in crescita continua.

---

Resta l'immagine del guardiano con la bandiera davanti al binario. Abbiamo scoperto che sbaglia una volta su tre, e adesso stiamo discutendo se sostituirlo con una macchina, con un'autorità, o con nulla. Nel frattempo i treni continuano a passare, e nessuno ha ancora spento il segnale. È stato Signal Brief. Alla prossima.
