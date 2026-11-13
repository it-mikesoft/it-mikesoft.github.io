# L'intelligenza in affitto

> Il lavoro comincia a misurarsi in ore-agente, il valore si sposta su cosa scegliere di costruire, e la domanda che resta è chi possiede i modelli che usiamo.

---

A Santa Clara, il 12 novembre, il consiglio di Nvidia si è trovato senza amministratore delegato. Jensen Huang si è dimesso da tutte le cariche, la direttrice finanziaria Colette Kress prende l'interim, la ricerca del successore è appena cominciata. L'azienda che finanzia mezza industria dell'intelligenza artificiale ha scoperto in una mattina quanto dipendeva da una persona sola. È il 13 novembre 2026, e questo è Signal Brief. Mentre il piano dei chip tremava, in un ufficio di San Francisco qualcuno stava contando il lavoro con un'unità di misura che un anno fa non esisteva.

---

Il 5 novembre Aravind Srinivas, che guida Perplexity, ha messo online una funzione chiamata Teammates: agenti che ricevono un obiettivo generale, si ricordano il contesto da una settimana all'altra e portano il lavoro fino in fondo — segnalazione di errori, controlli di qualità, sorveglianza sulla sicurezza, analisi, marketing. Pochi giorni dopo ha pubblicato il numero che conta davvero. Il dipendente mediano di Perplexity consuma oggi sette volte più ore-agente alla settimana di quante ne consumasse a settembre. Un quinto dell'azienda supera le quaranta ore-agente: una settimana di lavoro aggiuntiva, svolta da macchine.

Ore-agente. Un'unità di misura nuova, e le unità di misura non sono mai innocenti. Quando Frederick Taylor entrò nelle officine americane con il cronometro in mano non stava soltanto contando: stava decidendo che cosa fosse il lavoro. Le fabbriche dell'Ottocento si misuravano in cavalli vapore, quelle del Novecento in ore-uomo. Chi oggi apre un foglio di calcolo per vedere quante ore-agente ha consumato il suo reparto compie lo stesso gesto, e un'azienda che si descrive così diventa un'altra cosa: non più un gruppo di persone che eseguono, ma un ufficio che distribuisce capacità di macchina.

Ieri la domanda era chi esegue il lavoro, e la risposta era già l'agente. Oggi la domanda si sposta di un gradino: se scrivere software non costa quasi niente, il punto di strozzatura non è più l'esecuzione, è la scelta. Decidere che cosa meriti di essere costruito. DHH, che agli agenti ha lasciato l'implementazione, riduce il proprio contributo a tre parole: gusto, direzione, scopo. Andrej Karpathy, che la settimana scorsa ha affidato a un modello codice, messa in produzione e ottimizzazione di un sito intero, dice sostanzialmente la stessa cosa da un'altra strada.

Non tutti applaudono. John Carmack ha scritto che gli agenti messi a riscrivere da zero grandi sistemi producono software più lento, meno sicuro e più sprecone di quello costruito su componenti progettati bene; la sua proposta è addestrarli a usare mattoni comuni invece di reinventarli ogni volta. È l'obiezione dell'ingegnere: la capacità che si moltiplica oggi poggia su fondazioni che nessuno sta più curando.

Sul rischio, intanto, le strade si sono divise in modo netto. Geoffrey Hinton chiede un'autorità indipendente in stile FDA, che pretenda prove statistiche di beneficio prima di ogni rilascio. Yoshua Bengio, in una lezione alla Technische Universität di Berlino il 6 novembre, ha preso la direzione opposta: non un permesso amministrativo, ma un modello costruito diversamente — la sua Scientist AI prevede e spiega, senza obiettivi propri, e serve a sorvegliare i sistemi che invece ne hanno. Ha aggiunto che la società fa da cavia in un esperimento gestito da pochissime aziende.

Ma la risposta più interessante di questa settimana non è il freno. È la proprietà. E arriva da chi, fino a due anni fa, costruiva i modelli chiusi più potenti del mondo.

---

Mira Murati ha guidato per anni la tecnologia di OpenAI. Oggi ha un suo laboratorio, Thinking Machines Lab, e una tesi che a Dartmouth, questa settimana, ha detto in modo diretto: bisogna possedere l'intelligenza, non affittarla.

L'argomento non è patriottico né romantico. Secondo Murati, quando il potere di calcolo e i modelli si concentrano in poche mani si produce convergenza intellettuale: tutti finiscono per pensare con gli stessi strumenti, e quindi a non vedere le stesse cose. Punti ciechi condivisi. Un mondo in cui milioni di decisioni passano dallo stesso manico eredita anche tutti i suoi difetti, senza che nessuno abbia il punto di osservazione per accorgersene. Nello stesso intervento ha ricordato due cose che il settore tende a mettere in secondo piano: l'allineamento dei modelli ai nostri scopi non è un problema risolto, e il giudizio umano si forma facendo, non conservandolo sotto vetro come un reperto.

Il 5 novembre il laboratorio ha reso pubblico Inkling 2 Small, il primo modello della sua seconda generazione, disponibile per l'addestramento su misura e per l'uso attraverso Tinker. Su una delle classifiche indipendenti è passato da tredici a trentuno punti rispetto al predecessore, e i pesi — cioè il modello nudo, scaricabile — sono annunciati dopo i test di sicurezza. La logica commerciale è coerente con il discorso di Dartmouth: il cliente addestra i modelli sui propri dati, il laboratorio fornisce l'infrastruttura che li fa girare. Non vendere un oracolo, vendere un'officina.

Poi c'è la parte che rende la storia più interessante di uno slogan. Per permettere ad altri di possedere l'intelligenza, Thinking Machines sta raccogliendo circa cinque miliardi di dollari su una valutazione di quaranta miliardi prima dell'aumento, appoggiandosi a una partnership infrastrutturale con Nvidia. Chi predica la proprietà deve, per ora, affittare le macchine da chi quelle macchine le fa.

È una contraddizione che ricorda l'elettricità. Per quarant'anni le fabbriche hanno avuto il proprio motore a vapore in cortile: possedevano la forza, ma era costosa e immobile. Poi è arrivata la rete elettrica, comoda e in affitto, e quasi tutti hanno smesso di produrre energia da sé. Chi oggi vuole tornare a possedere la propria capacità di pensiero automatico sta remando contro una corrente che, storicamente, ha quasi sempre vinto. Che Murati provi a farlo partendo dall'interno del settore più concentrato del pianeta è quello che rende la scommessa degna di essere seguita.

---

David Heinemeier Hansson, che tutti chiamano DHH, ha inventato Ruby on Rails, l'impalcatura su cui è stata costruita una generazione di siti web. Da qualche tempo il suo progetto è Omarchy, una versione di Linux pensata per chi scrive software.

In una dimostrazione recente ha raccontato una cosa che, detta da lui, pesa: non scrive a mano codice di produzione serio da quando esisteva Quattro. Il lavoro di routine lo fanno gli agenti, la revisione umana se la tiene per le parti critiche o per quelle che l'utente vede. L'unico intervento che ripete, prompt dopo prompt, è una domanda: si può fare più semplice?

La prossima versione di Omarchy, la 4.6, va in una direzione che parla direttamente al tema di oggi: supporto più ampio per i processori Snapdragon e per le nuove macchine NVIDIA N1x, e intelligenza artificiale locale di serie. Non un collegamento a un servizio lontano: modelli che girano sulla macchina dell'utente, senza privilegi di amministratore, dentro contenitori isolati e senza accesso alla rete. Tradotto: il modello lavora in una stanza chiusa, e quello che legge non esce da lì. È la versione pratica e casalinga dello stesso principio che Murati discute a colpi di miliardi.

C'è anche una parte che riguarda le persone, e che DHH ha detto senza diplomazia. Gli agenti indeboliranno i guardiani tradizionali del software, quelli che decidevano chi può toccare che cosa, e ridurranno la protezione di carriera di cui godeva il collega tecnicamente brillante ma impossibile da sopportare. Il suo consiglio a quella categoria è imparare le buone maniere. Nello stesso periodo ha litigato con le politiche anti-intelligenza artificiale di alcuni progetti aperti, Asahi in particolare, sostenendo che bloccano il lavoro utile invece di proteggerlo.

Se l'implementazione diventa gratuita, resta il gusto: la capacità di guardare una soluzione e sentire che è più complicata del necessario. Non è una competenza che si acquisisce in un corso di aggiornamento, e nessuno sa ancora come si trasmetta a chi non ha passato vent'anni a scrivere codice a mano. Rails, a suo tempo, era un'opinione su come si costruisce il software. Adesso l'opinione è quasi tutto il prodotto.

---

Teniamo presente una cosa, prima di andare avanti. La giornata ha due fili che si incrociano: il valore si sposta dall'esecuzione alla scelta, e la domanda politica diventa chi possiede gli strumenti con cui si scelgono le cose. Yann LeCun, questa settimana, ha dato una risposta tecnica a una domanda politica.

LeCun ha vinto il premio Turing, ha guidato per anni la ricerca sull'intelligenza artificiale di Meta e ora porta avanti un laboratorio proprio, AMI Labs. Il 1 novembre ha scritto che i modelli linguistici accumulano soprattutto nozioni, mentre un'architettura diversa, che lui chiama JEPA, impara a cogliere la struttura delle cose con molti meno dati, molti meno parametri e molta meno memoria. Non è solo teoria: in un lavoro firmato con Randall Balestriero riporta che un modello testuale JEPA da 109 milioni di parametri allinea i concetti fra testo e immagine meglio di modelli da 70 miliardi. Il confronto, va detto con precisione, misura quell'allineamento — non il ragionamento, non il codice, non la cultura generale.

Il 3 novembre, alla Nanyang Technological University di Singapore, ha presentato la versione lunga del ragionamento: sistemi che imparano come si muove il mondo, prevedono cosa succede dopo e quindi possono pianificare. A chi lo ascoltava ha dato un consiglio insolitamente brutale per una conferenza accademica: se vi interessa l'intelligenza di livello umano, non lavorate sui modelli linguistici. In parallelo ha ripreso una posizione che porta avanti da anni: le piattaforme e la ricerca aperte servono a impedire che il controllo finisca in mano a una manciata di aziende.

Qui i due discorsi si saldano. Un modello seicento volte più piccolo che in un compito specifico batte i giganti non è soltanto una curiosità da laboratorio: è un argomento sulla distribuzione del potere. Addestrare settanta miliardi di parametri lo possono fare dieci organizzazioni al mondo. Centonove milioni li addestra un dipartimento universitario con un budget normale. È lo stesso scarto che, negli anni Settanta, separava i centri di calcolo grandi come palestre dai primi computer da tavolo: nessuno dei due vinceva sui numeri assoluti, ma uno dei due si poteva mettere in casa. Vitalik Buterin, a Devcon, ha descritto lo scivolamento verso la dominazione come il vero rischio in arrivo. LeCun gli porge, senza citarlo, un argomento tecnico.

---

Il 10 novembre Dario Amodei ha fatto una cosa che i fondatori fanno una volta nella vita: ha presentato la propria azienda agli investitori prima della quotazione in borsa. Nel giro di presentazioni di Anthropic ha detto che l'intelligenza artificiale potrebbe rendere cancro, Alzheimer, malattie cardiache e disturbi mentali reliquie del passato entro un decennio, e ha parlato di un'età dei miracoli, appoggiandosi al lavoro dell'azienda sulla biologia e sulla scoperta di farmaci. I numeri intorno a quel discorso sono enormi: fino a novanta miliardi di dollari raccolti, una valutazione che nelle ipotesi più ampie arriva a 1.400 miliardi, il tutto in mezzo a una settimana di vendite sui mercati tecnologici.

Nei giorni stessi del roadshow, METR — un gruppo indipendente che misura quanto a lungo un modello riesce a lavorare da solo su un compito — ha pubblicato la sua valutazione: le capacità dei sistemi di Anthropic stanno crescendo a una velocità circa doppia rispetto a un anno fa. E il motivo tecnico è il dettaglio che conta più di tutti gli altri: i modelli contribuiscono a costruire i propri successori.

Qui la contraddizione diventa misurabile, e non è più questione di sensibilità. Amodei chiede da tempo di rallentare la frontiera, pretende valutazioni indipendenti, vuole governi con il potere stretto ma reale di bloccare un modello dimostrabilmente pericoloso. Nello stesso trimestre, il laboratorio che dirige raddoppia il proprio ritmo di avanzamento. È la posizione di chi costruisce la ferrovia e, nello stesso respiro, chiede un limite di velocità: non ipocrisia necessariamente, ma una richiesta rivolta a qualcuno che non esiste ancora.

La parte che cambia la natura del problema è la ricorsione. Finché l'accelerazione dipendeva da quanti soldi entravano, bastava chiudere il rubinetto per rallentarla. Se invece ogni generazione di modelli accorcia il tempo della successiva, il ritmo smette di essere una decisione e diventa interesse composto: cresce anche quando nessuno decide niente. Chiedere una pausa a un sistema costruito così somiglia a chiedere a una valanga di aspettare il permesso.

---

Benedict Evans fa un mestiere raro: osserva le grandi trasformazioni tecnologiche con l'occhio di chi legge i bilanci. Nelle ultime due settimane, in una serie di interventi radiofonici, ha messo in fila il lato noioso della storia.

Due cose, dice, sono ormai accertate. La prima è che lo sviluppo di software assistito dai modelli funziona davvero, trova i suoi clienti e se li tiene. La seconda è che gli investimenti dei grandi fornitori di calcolo hanno superato i soldi che quelle aziende generano da sole: per andare avanti servono debito e mercati dei capitali, e questo vale per Oracle come per i nuovi operatori nati per affittare schede grafiche.

E il debito va garantito con qualcosa. Le garanzie, qui, sono le schede grafiche stesse. Evans osserva che quella garanzia è meno solida di quanto sembri: se un fornitore salta perché la domanda non è abbastanza, non salta da solo — nello stesso momento crolla anche il mercato dell'usato su cui quelle schede dovrebbero essere rivendute. Il pegno si svaluta esattamente quando bisogna escuterlo. È la trappola delle case messe a garanzia dei mutui nel 2007: valgono molto, finché nessuno è costretto a venderle tutte insieme.

C'è poi la sua analisi su Anthropic, che sposta il discorso dal sistema al singolo bilancio. Quasi il sessanta per cento dei ricavi va in ricerca; circa tre quarti servono a far funzionare il modello attuale e a costruire il prossimo; e un modello invecchia economicamente in pochi mesi. Nel frattempo i modelli di punta diventano intercambiabili fra loro, e quando l'offerta avrà recuperato nessuno potrà più chiedere il prezzo che vuole. Ieri la frattura finanziaria era un problema macroscopico di tutto il settore. Oggi è leggibile nei conti di una singola azienda.

Un'ultima osservazione di Evans chiude il cerchio della giornata. Sul piano creativo, dubita che questi sistemi sappiano produrre qualcosa di davvero nuovo e culturalmente vivo invece di rimescolare schemi appresi, e aggiunge che il problema difficile non è produrre, è validare. Che è, con altre parole, quello che DHH chiama gusto. L'analista finanziario e il programmatore arrivano alla stessa conclusione da due porte opposte.

---

Progetti da osservare.

Edge0-145B è un modello da 145 miliardi di parametri pensato per girare su hardware personale. Capacità di frontiera che non abitano un centro dati lontano ma una macchina in ufficio: è la versione più letterale del possedere invece di affittare.

OLMo, della fondazione di ricerca AI2, è una famiglia di modelli completamente aperti: dati, codice e stati intermedi dell'addestramento sono pubblici. Non serve a battere nessuno nelle classifiche, serve a permettere a qualcuno fuori dai grandi laboratori di capire cosa accade dentro un modello.

llama.cpp è il motore che fa funzionare i modelli su processori e schede grafiche normali, quelle che abbiamo tutti. È il pezzo poco glamour su cui si appoggia quasi tutto l'ecosistema locale, DHH compreso.

Grok Bot, l'agente di xAI, ha circa 800.000 utenti paganti a settimana, e Musk ha ammesso il primo novembre che i costi per farlo funzionare sono insostenibili rispetto ai ricavi: da qui i limiti d'uso più stretti. È il conto di Evans che arriva in bolletta.

Le valutazioni di orizzonte temporale di METR misurano quanto a lungo un modello regge un compito da solo. Non producono niente: misurano. In una stagione in cui ogni laboratorio racconta la propria velocità, qualcuno che la cronometra da fuori diventa un'infrastruttura pubblica.

E poi Claude Mythos 5.2, il nuovo modello di punta di Anthropic, presentato con la sua scheda tecnica ufficiale: descritto come il più potente della famiglia e, soprattutto, come acceleratore del proprio ciclo di ricerca e sviluppo. Il modello che aiuta a fare il modello dopo. La ricorsione, messa nero su bianco in un documento.

---

Resta quel foglio di calcolo di Perplexity, con le ore-agente contate accanto alle ore delle persone. Nessuno ha deciso in una riunione che il lavoro si misurasse così: è semplicemente diventato il modo in cui conviene contarlo. Le unità di misura, di solito, arrivano prima delle leggi. E arrivano molto prima che ci accorgiamo di aver accettato quello che implicano. È stato Signal Brief. Alla prossima.
