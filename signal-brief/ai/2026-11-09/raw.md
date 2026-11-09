# Partita doppia per le macchine

> Collison vuole regole contabili per le macchine che lavorano, Altman si scusa per la RAM, Musk ammette costi insostenibili: il lavoro si sposta, il vincolo resta fisico.

---

All'inizio di novembre Elon Musk ha spiegato perché il suo agente ha meno corsa di prima: i costi per farlo girare sono, parole sue, insostenibili rispetto ai ricavi. Tre giorni dopo Patrick Collison ha chiesto pubblicamente aiuto per capire come dovrebbe funzionare l'economia per gli agenti. Due frasi lontanissime nel tono, figlie dello stesso momento: le macchine hanno cominciato a lavorare davvero, e nessuno sa ancora con quali regole né a spese di chi. Signal Brief, 9 novembre. Si parte da una stanza in cui qualcuno ha smesso di scrivere codice a mano.

---

Il 5 novembre, mostrando dal vivo il suo sistema Omarchy, David Heinemeier Hansson ha detto una cosa che un anno fa avrebbe fatto alzare qualche sopracciglio: dall'ultima versione non ha più scritto a mano una riga di codice di produzione serio. Descrive il risultato che vuole, guarda cosa produce l'agente, corregge. Il suo contributo, dice, è gusto, direzione e perimetro.

Nella stessa settimana Aravind Srinivas ha presentato i Teammates di Perplexity e ha messo dei numeri sotto la stessa idea: circa diecimila agenti interni, venti volte i dipendenti umani, e un dipendente mediano che oggi riceve sette volte più ore-agente di quante ne riceveva a settembre.

Ieri il filo era che l'agente è un'unità produttiva: implementa, prova, rilascia, e prende il posto di qualcuno in un flusso che esisteva già. In questi giorni si è spostato di un gradino. L'agente non è più il lavoratore dentro l'organizzazione: è lo strato in cui il lavoro si esegue. E uno strato, per funzionare, ha bisogno di istituzioni sue.

È esattamente la richiesta di Collison, il 5 novembre: mettiamoci a progettare come dovrebbe funzionare l'economia per gli agenti. Non strumenti, non permessi, non interfacce. Regole contabili e contrattuali. Chi firma, chi risponde, su quale riga di bilancio finisce il lavoro di una macchina. I mercanti italiani del Trecento non diventarono potenti perché avevano navi migliori, ma perché inventarono la partita doppia: un modo di scrivere i conti che rendeva pensabili società, crediti e rischi condivisi. La tecnologia c'era già, mancava il libro mastro.

Poi c'è il conto da pagare, e qui il tono cambia. Sam Altman ha dovuto scusarsi per aver sostenuto che la memoria scarsa rende più nei data center che nei computer di casa, dove sta ferma a far niente per quasi tutto il giorno. Ha chiarito di volere memoria abbondante per tutti e di chiedere da anni una produzione molto più alta, ha scherzato sul soprannome che gli hanno cucito addosso, ma la sostanza non si è cancellata. Musk, che gli ha risposto che anche le persone hanno diritto alla loro RAM, nello stesso giorno tagliava i limiti d'uso del proprio agente per ragioni di cassa. E Sasha Luccioni, che misura da anni l'impronta di questi sistemi, descrive lo stesso vincolo dall'altro lato: l'intelligenza artificiale come divoratrice di energia e acqua, con un uso che cresce proprio mentre si dovrebbe decarbonizzare.

Il risultato è che l'intelligenza artificiale è tornata un problema di materie prime prima che di algoritmi. RAM, elettricità, permessi edilizi. Cose che si contano, si trasportano e si litigano.

E poiché il vincolo è fisico, la domanda diventa politica: chi decide. Dario Amodei propone di dare il passo alla frontiera con valutatori indipendenti dentro i laboratori. Geoffrey Hinton chiede un regolatore pubblico in stile autorità del farmaco, che prima del rilascio pretenda prove. Vitalik Buterin dice che quella strada non tiene, e lo dice in modo nuovo: non è una scelta fra due mali, è che un centro unico è instabile per costruzione.

Tre geometrie del potere, una sola bolletta.

---

Patrick Collison è uno dei due fratelli che hanno costruito Stripe, l'azienda che sposta pagamenti per mezza internet. Da qualche tempo scrive meno di prodotti e più di istituzioni, e in questa settimana la cosa è diventata evidente.

L'8 novembre ha posto una domanda scomoda per uno del suo ambiente: perché il lato buono dell'intelligenza artificiale resta così poco definito, nonostante il ritmo dei progressi. Che cosa farebbero le persone. Come si distribuirebbero le risorse. Se gli esseri umani restino al comando. E, con un passaggio che pochi nel settore osano fare ad alta voce, se una moltitudine enormemente numerosa di macchine possa avere un peso morale tale da contare, in un calcolo di utilità, più dell'umanità stessa. Tre giorni prima aveva chiesto aiuto per progettare l'economia per gli agenti, osservando che quasi ogni strato della pila cambierà.

Nel frattempo ha fatto una cosa molto concreta: ha messo soldi suoi, come investitore privato, in Potential Sciences, una startup britannica che usa modelli basati sulla fisica e simulazioni di chimica quantistica per cercare farmaci. L'azienda sostiene di rendere i calcoli di progettazione chimica circa cento volte più economici, e ha ottenuto fondi pubblici e capacità di calcolo.

Le due cose insieme disegnano una posizione precisa. Collison resta un ottimista, ma ha smesso di essere un ottimista degli strumenti: gli interessano le tubature invisibili, quelle che decidono cosa è possibile fare prima che qualcuno lo faccia. Lo stesso spirito con cui, nell'Ottocento, chi costruiva ferrovie capì presto che il problema vero non erano le locomotive ma lo scartamento dei binari, gli orari standard, la responsabilità in caso di incidente. Senza quelle noiose convenzioni il vapore restava una curiosità da fiera.

C'è un dettaglio che vale tenere a mente. La domanda sull'economia per gli agenti arriva da chi ha passato quindici anni a costruire l'infrastruttura contabile del commercio online. Non è un filosofo che chiede regole alle macchine: è un idraulico che guarda l'impianto e nota che manca un tubo. Ed è una richiesta di aiuto, non una proposta. Il che, detto da uno che di solito pubblica soluzioni, suona come un'ammissione: nessuno ha ancora un'idea decente di come si scrivano quei conti.

---

David Heinemeier Hansson, in rete semplicemente DHH, ha inventato Ruby on Rails, lo strumento con cui una generazione di programmatori ha costruito siti e servizi. È uno dei pochi, nel suo mestiere, a cui nessuno può dare dell'incompetente quando parla male del lavoro manuale.

Per questo la dimostrazione del 5 novembre pesa. Raccontando l'avanzamento di Omarchy, il suo sistema Linux, ha spiegato il metodo: mostra all'agente una struttura che esiste già e gli chiede una versione di quella cosa. Poi itera sul risultato. Per le modifiche critiche o visibili agli utenti mantiene una revisione umana, limitata; per la manutenzione che si può provare in automatico lascia fare, anche quando nessuno ha riletto tutto. La direzione del prodotto va nello stesso verso: la prossima versione dovrebbe portare modelli locali già installati, più hardware supportato, e un'integrazione ancora più stretta degli agenti che scrivono codice. Nella versione precedente aveva già cambiato l'agente di riferimento, passando a quello nuovo di Google.

Qui sta l'emergente della giornata, e conviene dirlo in chiaro: se l'esecuzione la fa la macchina, la competenza scarsa si sposta. Non è più saper scrivere la soluzione, è saper dire con precisione quale problema stai risolvendo, dove finisce il perimetro, e saper riconoscere una risposta sbagliata quando la vedi. Gusto, direzione e perimetro: tre parole che descrivono il lavoro di un direttore d'orchestra, non di un esecutore.

È un passaggio già visto. Nelle tipografie, quando la composizione a caldo lasciò il posto a quella digitale, non scomparve il mestiere: scomparve la parte muscolare del mestiere, e chi restò si trovò a decidere più cose e a toccarne meno. Il valore migrò dalla mano all'occhio.

Resta una zona d'ombra che DHH nomina senza risolverla. Lui accetta che una parte delle modifiche entri in produzione senza occhi umani sopra, perché i test la coprono. È una scommessa ragionevole per un sistema operativo per appassionati. Diventa un'altra cosa in una banca, in un ospedale, in una rete elettrica. La revisione è il punto dove il lavoro agentico incontra la responsabilità, e per ora ognuno decide da sé quanto stringere. È esattamente il tubo mancante di cui parla Collison.

---

Sam Altman guida OpenAI, e questa settimana ha passato più tempo a spiegare una frase che ad annunciare un prodotto.

La frase riguardava la memoria dei computer. Altman aveva osservato che è inefficiente lasciare DRAM scarsa dentro i personal computer, dove resta sfruttata al minimo, invece di metterla nei data center. Tecnicamente è un'affermazione banale sull'uso di una risorsa. Politicamente è stata letta come: la roba serve a noi, voi aspettate. La reazione è stata tale che ha dovuto chiarire di volere memoria abbondante anche per i consumatori e di sostenere da tempo un forte aumento della produzione, condendo il tutto con un'autoironia sul soprannome che gli è rimasto addosso e con un «costruiamone di più». Il segnale di fondo, però, è intatto: calcolo, memoria e saturazione delle macchine in cloud sono il collo di bottiglia strategico dell'espansione.

Nello stesso giro di giorni, parlando alla conferenza sull'energia di Abu Dhabi e sui suoi canali, ha insistito su un altro tema: le persone non devono diventare subordinate a sistemi che decidono quali attività umane meritino una ricompensa, e la tutela della libertà d'azione degli esseri umani dovrebbe, alla fine, mettere un limite alla corsa verso la superintelligenza. Ha anche rilanciato il lavoro su un modello specializzato in sicurezza informatica, presentato come utile a chi difende.

Il punto nuovo, rispetto a ieri, non è il vincolo fisico: quello lo conoscevamo. È il suo costo reputazionale. Dire ad alta voce che la memoria rende più nei capannoni dei data center che nel computer di casa è diventato politicamente infiammabile, perché tocca una cosa che le persone possiedono. Finché l'intelligenza artificiale consumava soltanto capitale di rischio, era affare degli azionisti. Ora consuma componenti che stanno nei negozi, elettricità che sta nelle bollette, terreni che hanno un piano regolatore.

Nei primi decenni della rete elettrica le città litigavano esattamente così: la corrente all'illuminazione pubblica o alle fabbriche. Non era una questione tecnica, era una questione di chi conta. Luccioni la pone oggi con un'altra urgenza, chiedendo che il consumo venga contenuto e che nessuno tratti questi strumenti come obbligatori. Fra chi dice che la capacità deve andare dove rende di più e chi dice che deve andare dove danneggia meno, non c'è un compromesso tecnico. C'è una decisione.

---

Teniamo presente dove siamo arrivati: il lavoro passa alle macchine, le macchine chiedono materie prime, e le materie prime obbligano qualcuno a decidere. Chi decide, allora.

Vitalik Buterin, che ha progettato Ethereum e da anni scrive di come si tengono in piedi sistemi senza un padrone, ha dato la sua risposta aprendo Devcon 8 il 3 novembre. Ha avvertito che l'intelligenza artificiale potrebbe scoprire attacchi efficaci contro la crittografia su cui poggiano banche, messaggi e identità digitali, comprimendo in cinque anni quello che richiederebbe cinquanta anni di matematica. Da qui la richiesta pratica: accelerare il passaggio a parametri più robusti, prima e non dopo.

La parte interessante è la cornice. Buterin chiama la sua proposta accelerazione difensiva decentralizzata: sistemi a codice aperto, hardware di cui si possa dimostrare matematicamente il comportamento, modelli che girano in locale, e tecniche che permettono di provare che un calcolo è corretto senza mostrare i dati su cui è stato fatto. L'alternativa, cioè una sola organizzazione forte che custodisce le difese migliori per tutti, la definisce dominio, e la considera una corsa agli armamenti instabile. L'8 novembre ha aggiunto un tassello: si è detto favorevole a rallentare l'espansione dei data center più grandi, perché i guadagni di efficienza potrebbero rendere sufficiente l'infrastruttura esistente per capacità che oggi sembrano richiedere impianti molto più vasti.

Rispetto a ieri la sua posizione è cambiata di natura. Prima era un calcolo fra due mali: fermarsi è irrealistico, concentrare è pericoloso, scegliamo il meno peggio. Adesso è un argomento strutturale: il centro unico non regge, qualunque sia la sua buona fede. È la differenza fra dire che il re potrebbe essere cattivo e dire che la monarchia è un meccanismo fragile.

La storia gli dà almeno un precedente. All'inizio del Novecento Londra e Berlino provarono a garantirsi la sicurezza costruendo la flotta più grande. Ogni corazzata in più dell'una giustificava due dell'altra, e il risultato di quindici anni di difesa accumulata fu la guerra. Buterin non dice che succederà di nuovo. Dice che la geometria è la stessa.

Resta la domanda che nessuno dei due campi ha sciolto: moltiplicare i centri rende i sistemi più robusti, ma rende anche più difficile fermarne uno che sbaglia. La sicurezza distribuita è credibile solo se qualcuno la verifica davvero.

---

Progetti da osservare.

Andrej Karpathy ha pubblicato HackerTube, un'alternativa a YouTube costruita in circa due ore insieme a Claude Opus 5.5: il modello ha letto quarantatré milioni di commenti di Hacker News, ne ha estratto quarantamila consigli di video e li ha ridotti a seimilaquattrocento titoli in centocinquanta argomenti. Il suo lavoro manuale, racconta, è stato affittare un server e comprare un dominio. Il 7 novembre ha replicato il procedimento con TristanTube: quarantasettemila video, modalità televisione, tre minuti. Sono i capitoli di oggi messi in pratica.

Block, l'azienda di Jack Dorsey, ne ha presentati due. Dessa è un modello che ascolta e risponde con la voce, addestrato soltanto su conversazioni umane e non su testo, capace di cogliere pause, risate e cadenza, e di girare in locale su una macchina casalinga potente. Per ora lo vedono solo i ricercatori di sicurezza. Buzz è l'altro: un ambiente di lavoro a codice aperto dove umani e agenti stanno nella stessa stanza, che Block sta provando internamente con l'intenzione di sostituire i fornitori di software esterni e poi venderlo.

Grok Bot, l'agente di xAI che usa il computer al posto tuo, è la nota a margine economica: limiti d'uso ridotti perché servirlo costa troppo. Un agente che lavora consuma molto più di uno che chiacchiera.

Replit Agent chiude il quadro dal lato noioso e decisivo: ambienti isolati, operazioni che si possono annullare, controlli per le aziende. Il tema non è più se l'agente scriva il programma, è se puoi tornare indietro quando sbaglia.

---

La scena che tiene insieme la giornata è la più sobria: un programmatore famoso che spiega come non scrive più codice, e un imprenditore di pagamenti che chiede a degli sconosciuti come si tengono i conti di una macchina che lavora. Gli strumenti sono arrivati prima delle regole, come quasi sempre. La domanda aperta è quanto tempo passerà prima che qualcuno scriva quel libro mastro, e chi avrà la penna. È stato Signal Brief. Alla prossima.
