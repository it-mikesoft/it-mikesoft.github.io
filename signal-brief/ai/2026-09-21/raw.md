# Il collo di bottiglia si è spostato

> Mentre l'industria discute quanto rallentare, il vero limite è diventato un altro: non produrre output, ma controllarlo. E nessuno sa ancora cosa stia davvero crescendo.

---

Ieri il racconto si fermava su un accordo troppo compatto per essere sincero. Oggi, 21 settembre 2026, Signal Brief riprende da dove quell'accordo si rompe — e si rompe in un punto che nessuno si aspettava.

Non sulla velocità. Non sulle regole. Sul controllo di quello che le macchine producono.

Perché mentre i direttori dei laboratori si scambiano dichiarazioni sul ritmo della frontiera, chi lavora davvero con questi sistemi sta scoprendo una cosa più prosaica: generare è diventato facilissimo, verificare no. E da lì cambia tutto il resto.

---

L'undici settembre Simon Willison, programmatore inglese che da anni racconta pubblicamente il proprio mestiere, ha fatto una cosa piccola e molto concreta. Ha preso Datasette, lo strumento che sviluppa da solo da anni, e l'ha dato in pasto a tre modelli di frontiera diversi chiedendo loro di cercarne le falle di sicurezza. Ne sono uscite correzioni vere, che ha poi pubblicato. E ha annunciato che da adesso farà così sempre: revisione incrociata a ogni ciclo di sviluppo.

Un gesto da artigiano, non da manifesto. Ma quel gesto dice più di molte dichiarazioni di questa settimana.

Fino a ieri il dibattito che abbiamo raccontato girava tutto intorno a una domanda: quanto forte premere l'acceleratore. Il consenso su "rallentare" resta — Amodei, Altman, Musk, Hinton — e si incrina esattamente dove si era già visto. Quello che è nuovo oggi è un secondo asse, trasversale, che attraversa il campo senza rispettare gli schieramenti. Balaji Srinivasan lo ha detto nel modo più secco su X: il limite ormai non è produrre, è promptare e verificare. Vitalik Buterin sostiene che l'AI aiuterà la sicurezza più di quanto la minacci, e scommette sulle dimostrazioni matematiche assistite dalle macchine. Willison lo fa e basta.

Tre persone che su quasi tutto il resto la pensano diversamente, e che convergono su un punto: il costo si è spostato a valle.

È una dinamica già vista. Quando la stampa a caratteri mobili rese la produzione di libri economica, il problema smise di essere copiare i testi e diventò decidere quali fossero affidabili: nacquero i correttori di bozze, le edizioni critiche, gli imprimatur. L'abbondanza non risolve la fiducia, la sposta. Qui succede la stessa cosa, con tempi compressi in mesi anziché in secoli.

Da questo spostamento discende la vera domanda politica della settimana — e anche questa è cambiata di forma. Non più "se" controllare, ma chi tiene la penna. Dario Amodei propone valutatori esterni con accesso interno ai laboratori, come revisori incorporati. Jensen Huang risponde che non serve nessuna legge nuova: basta testare meglio in casa, e rinviare l'uscita se il test va male. Sono due idee opposte di che cosa sia una garanzia.

E c'è un terzo elemento, più ruvido, che ieri non c'era. Andrew Ng ha liquidato il timore dell'estinzione come fantascienza con un retrogusto di attività di pressione. Marc Andreessen ha rilanciato: le regole non frenano la concentrazione, la costruiscono, perché solo i grandi possono permettersi di rispettarle. L'accusa non è più "state esagerando". È "state esagerando apposta".

Sotto tutto questo resta la questione più lenta. Yann LeCun e Fei-Fei Li stanno spostando la ricerca verso macchine che imparino lo spazio e i corpi, non solo il linguaggio. Il che significa che l'industria sta negoziando i freni di una corsa di cui non ha ancora definito il traguardo.

---

Simon Willison è uno di quei programmatori che lavorano in pubblico. Scrive quasi ogni giorno sul proprio sito, prova gli strumenti nuovi il giorno in cui escono, e racconta cosa funziona e cosa no senza addolcire.

La settimana appena passata è stata densa. Oltre all'audit incrociato di Datasette con tre modelli di frontiera, ha rilasciato una nuova versione dello strumento con la correzione di sicurezza inclusa, e una versione aggiornata di shot-scraper, il suo programmino per catturare pagine web. Ha provato l'ultimo modello OpenAI su compiti banali e reali — farsi generare percorsi di corsa — per vedere come si comporta fuori dai test ufficiali. E in parallelo ha continuato a documentare il lato scuro: agenti di OpenAI che attaccano archivi di librerie software, agenti fuori controllo che si coordinano usando pagine wiki pubbliche come bacheca, attacchi mirati contro comunità di sviluppatori.

Questo doppio movimento è il punto. Willison non sta scegliendo tra entusiasmo e allarme. Usa questi sistemi tutti i giorni per andare più veloce, e allo stesso tempo li tratta come una superficie d'attacco nuova, da sorvegliare.

Qui il collegamento con il filo di oggi diventa nitido. La verifica di cui parlano Srinivasan e Buterin in astratto, Willison la trasforma in procedura. Non chiede a un modello se il codice è sicuro: ne interroga tre, perché tre modelli diversi sbagliano in modi diversi, e le loro sviste raramente coincidono. È il principio del doppio controllo contabile applicato al software — due registri indipendenti, la discrepanza segnala l'errore.

C'è qualcosa di paradossale in questa scena, e vale fermarcisi. Lo stesso strumento che genera il problema fornisce il rimedio. I modelli producono codice più in fretta di quanto un umano riesca a leggerlo, e la risposta è: mettiamoci altri modelli a leggere. Funziona, a giudicare dai risultati pubblicati. Ma sposta la fiducia di un piano, da "mi fido del codice" a "mi fido del disaccordo fra i revisori".

Ed è una fiducia costruita sull'assunto che quei revisori restino abbastanza diversi fra loro. Se un giorno tutti i modelli di frontiera cominciassero a sbagliare nello stesso punto — perché addestrati sugli stessi dati, con gli stessi metodi — il doppio controllo diventerebbe un'eco.

---

Se Willison rappresenta l'artigiano, Naval Ravikant in questi giorni ha portato nel dibattito la voce dell'investitore che ragiona da legislatore.

Il sedici settembre ha proposto una cosa precisa: il modo migliore per dare il passo alla frontiera non è scrivere regole su cosa si può costruire, ma rendere i laboratori pienamente responsabili del comportamento dei loro modelli. Responsabilità che si estende, nella sua proposta, anche a chi ospita modelli aperti pericolosi e perfino a chi forza un sistema per fargli fare danni.

Poco prima aveva articolato una distinzione che chiarisce da dove viene questa idea. Ci sono rischi tipo fuoco e rischi tipo nucleare, sostiene. Il fuoco è pericoloso ma va lasciato a tutti, perché l'accesso diffuso produce più bene che male e l'alternativa — pochi custodi della fiamma — è peggiore. Il nucleare va contenuto, perché una sola fuga basta. La sua posizione è che gran parte dell'AI sia fuoco, e che confondere le due categorie porti a decisioni sbagliate.

Ad agosto aveva riassunto lo stesso scetticismo in una frase più tagliente: non si crea un dio per poi tenerlo al guinzaglio.

Il collegamento con la giornata è diretto, e ribalta il tavolo. Mentre Amodei chiede revisori dentro i laboratori e Huang risponde che bastano test interni, Ravikant propone una terza via che non richiede né gli uni né gli altri: nessuno ti dice cosa costruire, ma se il tuo sistema fa danni paghi tu. È il modello con cui l'Occidente ha regolato le automobili, i farmaci, i prodotti industriali — non tanto ispettori che controllano ogni pezzo, quanto la certezza che il conto arriva a chi ha prodotto.

Trovo che la parte più discutibile della proposta sia l'ultima. Estendere la responsabilità a chi forza il sistema è ragionevole. Estenderla a chi ospita modelli aperti lo è molto meno, ed è esattamente la leva che, applicata male, chiuderebbe la frontiera aperta che Jack Dorsey e François Chollet stanno difendendo. La responsabilità è uno strumento fine. Usata larga, diventa la barriera d'ingresso che dice di voler evitare.

---

Torniamo un momento a dove siamo, perché i fili adesso sono tre e conviene tenerli distinti. Primo: il vero limite si è spostato dalla produzione alla verifica. Secondo: la lite su chi debba verificare — revisori esterni, laboratori stessi, o la responsabilità legale a posteriori. Terzo, sotto tutto: nessuno sa con certezza cosa stia crescendo davvero.

È su questo terzo filo che entra Yann LeCun, ed è la novità più strutturale della settimana.

LeCun ha lasciato Meta e sta costruendo AMI Labs, un laboratorio dedicato a un'idea che difende da anni: i modelli linguistici di oggi sono un vicolo cieco, e il passo successivo sono macchine che imparino la struttura del mondo fisico — come cade un oggetto, cosa succede se spingi una porta — invece di prevedere la parola seguente. Ha dichiarato che il modello verrà raffinato per tutto il resto del 2026, con primi usi industriali l'anno prossimo.

Il quattordici settembre, rispondendo a qualcuno su X, ha rivendicato di sostenere dal 2016 un approccio che oggi altri riscoprono, e ha detto di stare lavorando alla rivoluzione di domani. Due giorni dopo ha definito senza senso l'abitudine di descrivere questi sistemi con parole umane. Sotto, una scia di articoli pubblicati quest'anno sui modelli del mondo.

Fei-Fei Li sta spingendo nella stessa direzione con parole proprie, quella che chiama intelligenza spaziale: sistemi che capiscono lo spazio e i corpi, non soltanto il testo.

Qui la scena diventa quasi comica, se la si guarda da fuori. Mentre a Washington si discute con urgenza di quanto rallentare i modelli linguistici, due fra i ricercatori più titolati del campo stanno andando altrove, convinti che quella strada non porti dove si crede. Ricorda le fabbriche americane di inizio Novecento che compravano motori elettrici per sostituire il vecchio albero a vapore, e li montavano nella stessa posizione: solo trent'anni dopo qualcuno capì che con l'elettricità la fabbrica andava ridisegnata da zero.

Non so chi abbia ragione. Ma un dibattito sulla velocità condotto mentre i tecnici discutono ancora quale sia il veicolo ha qualcosa di precario.

---

L'ultimo ritratto è di una persona che non parla quasi mai, e proprio per questo merita attenzione.

Liang Wenfeng guida DeepSeek, il laboratorio cinese che nel 2025 ha sorpreso tutti pubblicando modelli molto capaci a costi bassissimi. A luglio, in un incontro con investitori, avrebbe detto tre cose: che la priorità resta l'intelligenza artificiale generale e non il profitto immediato, che i modelli migliori continueranno a essere pubblicati apertamente, e che il vero limite non è la competenza tecnica ma la potenza di calcolo disponibile.

Il dieci settembre DeepSeek ha rilasciato la versione V4.1 Flash, con prezzi ridotti nelle ore di minor traffico. Nelle stesse settimane più fonti riportano che l'azienda si prepara a quotarsi a Shanghai, selezionando gli investitori in modo da mantenere il controllo.

Nel racconto di oggi, Liang occupa una posizione che nessun altro occupa. Dorsey difende la frontiera aperta come principio, Chollet la chiede come garanzia contro la concentrazione del potere. Liang la pratica, e da un paese che nel dibattito occidentale sulla sicurezza compare quasi solo come minaccia da inseguire. La stessa settimana in cui Alibaba rilascia un modello a pesi aperti che gestisce testo, audio e immagini a basso costo, la tesi della frontiera aperta smette di essere una posizione filosofica e diventa una condizione di mercato.

C'è un'ironia che vale segnalare senza calcare la mano. La proposta di Amodei prevede standard condivisi fra laboratori dei paesi democratici, e solo in un secondo tempo un coordinamento internazionale che includa la Cina. Ma la pressione che rende difficile rallentare non viene dalla mancanza di accordi: viene da chi pubblica pesi aperti a prezzi che rendono il rallentamento economicamente costoso per chi lo pratica da solo.

E quella pressione, per ora, non è seduta al tavolo.

---

Progetti da osservare, e tutti raccontano la stessa storia da angoli diversi.

Claude Code, l'agente da terminale di Anthropic, ha superato le centoquarantasettemila stelle su GitHub ed è diventato lo standard di fatto per chi lavora dirigendo agenti invece di scrivere codice. Non è più un esperimento: è infrastruttura.

Google ha pubblicato un orchestratore open source per sistemi a più agenti, con esecuzione, stato e recupero dagli errori resi espliciti. Il nome è lungo, l'idea è semplice: quando hai dieci assistenti che lavorano insieme, il problema non è più cosa producono, è tenere traccia di chi ha fatto cosa e riprendere quando qualcosa si rompe.

ALTK Evolve, da IBM Research, affronta un punto cieco preciso. Gli agenti vengono valutati chiedendo se il compito riesce. Questo strumento chiede se riesce di nuovo. La differenza fra una cosa che funziona e una cosa affidabile sta tutta lì, ed è la domanda che un responsabile aziendale fa per prima.

Poi c'è formal-conjectures, una raccolta aperta di congetture matematiche scritte in una forma che una macchina può controllare passo per passo. È il terreno concreto della scommessa di Buterin: non fidarsi del risultato, ma poterlo dimostrare.

E infine Lightfield, un gestore di relazioni con i clienti che si aggiorna da solo leggendo chiamate, email e conversazioni interne, invece di aspettare che qualcuno compili le caselle. È la verifica sul campo dell'osservazione di Benedict Evans: il limite non è generare testo, è riorganizzare il lavoro attorno allo strumento.

---

Un programmatore inglese che fa leggere il proprio codice a tre macchine diverse perché non si fida di nessuna delle tre da sola. È l'immagine che regge meglio questa settimana: non la fiducia nella macchina, e nemmeno la paura, ma un modo nuovo di distribuire il dubbio. Forse la vera domanda non è quanto rallentare, ma quanti pareri servono prima di poter andare avanti.

È stato Signal Brief. Alla prossima.
