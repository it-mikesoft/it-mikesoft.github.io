# Quando la scala smette di bastare

> Sutskever e Chollet dichiarano chiusa l'era dello scaling, Litt sposta il limite sulla comprensione, Hinton e Amodei litigano su chi debba verificare. E Dorsey riorganizza un'azienda intera.

---

Ci sono giornate in cui le notizie coprono un movimento più lento, e giornate in cui quel movimento diventa visibile. Questa, nel Signal Brief del quattordici agosto 2026, è del secondo tipo. Voci che lavorano in laboratori diversi, con interessi opposti e nessuna voglia di darsi ragione, hanno cominciato a dire la stessa identica cosa: la potenza grezza dei modelli non è più il problema principale. Quando cambia il problema, però, cambia anche chi ha l'autorità di rispondere. E lì la calma finisce. La giornata comincia con l'uomo che ha costruito l'era che adesso dichiara chiusa.

---

Ilya Sutskever ha passato dieci anni a dimostrare una cosa sola: che se a una rete neurale dai più dati e più calcolo, quella diventa più brava. Su quella scommessa è nata OpenAI, e da quella scommessa discende quasi tutto ciò che usiamo oggi. In una lunga conversazione con Dwarkesh Patel, il cofondatore di OpenAI oggi alla guida di Safe Superintelligence ha detto che la stagione è finita: si esce dall'era dello scaling e si entra in una nuova era della ricerca. Il calcolo continua ad aiutare, ma non regala più i salti di prima. I dati facili, quelli raccolti dall'internet pubblica, si stanno esaurendo. Serviranno idee nuove.

Il sette agosto François Chollet, che di mestiere costruisce test per misurare il ragionamento delle macchine, è arrivato allo stesso punto da una strada diversa. La sua frase passa una spugna su tre anni di discussioni: se per intelligenza artificiale generale intendiamo capacità, ce l'abbiamo già; se intendiamo efficienza, mancano tre o cinque ordini di grandezza. Tradotto: le macchine sanno fare, ma per farlo consumano diecimila o centomila volte quello che consuma un cervello.

Questa curva che si appiattisce ha un precedente preciso. Per trent'anni il modo di rendere più veloce un computer era stato uno solo: alzare la frequenza del processore. Verso la metà degli anni Duemila quella strada si è chiusa per una ragione banale, il calore. L'informatica non si è fermata: si è spostato il lavoro. Sono arrivati i processori a più nuclei, ed è diventato decisivo il software capace di usarli. Il progresso ha cambiato indirizzo, non velocità. Mi sembra sia esattamente quello che sta accadendo ora.

Yann LeCun lo ha detto nel modo più secco, con un post che chiude una fase: la rivoluzione linguistica è finita, si passa ai modelli che capiscono il mondo fisico. Poi ha precisato di non aver mai sostenuto che questi strumenti siano inutili — sono ottimi per cercare, riassumere, scrivere codice, fare matematica. Ne sostiene un'altra: che indovinare la parola successiva non porta dove credevamo.

Ieri il movimento era dal modello al sistema che lo avvolge. Oggi si sposta ancora, e più in là: dal sistema tecnico alle persone e al mercato. Benedict Evans lo traduce in termini commerciali — i modelli diventeranno infrastruttura a basso margine, e il vantaggio durevole starà nella distribuzione, non nella tecnologia. È già successo. L'elettricità è stata un vantaggio enorme finché era rara; poi è diventata una presa nel muro, e la partita si è spostata su cosa ci attaccavi.

La conseguenza più interessante, però, la formula Geoffrey Litt in un saggio di inizio luglio che ha girato parecchio: il limite adesso non è generare, è capire. Produrre mille righe di codice, o venti pagine di analisi, costa pochi secondi. Leggerle, verificarle, fidarsene, no. La strozzatura si è spostata a valle, dove ci siamo noi.

Chi lavora con queste cose tutti i giorni lo ha già sentito addosso. E anche i più diffidenti hanno cambiato idea: DHH, il creatore di Ruby on Rails, per anni tra i più ruvidi con l'entusiasmo generale, oggi descrive l'agente come il modo normale di scrivere codice. Naval Ravikant aggiunge il contrappunto: è una leva, non un giudizio, perché la stessa risposta arriva identica a tutti.

Capacità che abbonda, comprensione che scarseggia. Da qui in avanti la domanda diventa una sola, e non è tecnica: chi controlla che tutto questo funzioni.

---

François Chollet ha costruito Keras, uno degli strumenti con cui mezzo mondo ha imparato a far girare reti neurali, e poi ARC, un test pensato per misurare non quanto una macchina sa, ma quanto in fretta impara qualcosa che non ha mai visto.

Il sette agosto ha scritto una cosa che raramente si legge da chi fa ricerca. Ha raccontato di essersi sbagliato. Negli anni dello scaling, tra il 2022 e il 2024, si aspettava un muro: prima o poi i modelli avrebbero smesso di migliorare. Poi, alla fine del 2024, ha visto i sistemi che si prendono tempo per pensare prima di rispondere, e ha cambiato posizione: lì dentro, dice, si intravede intelligenza vera, quella flessibile, capace di adattarsi. Oggi la sua conclusione è che di ricerca ne stanno facendo abbastanza, e che il muro non arriverà.

Da questa ammissione discende la frase sull'intelligenza generale, che è meno provocatoria di quanto sembri. Chollet non sta dicendo che siamo arrivati. Sta dicendo che stiamo misurando la cosa sbagliata. Contare quante prove supera un modello descrive una macchina che riesce; contare quanto le costa riuscire descrive una macchina che ha capito. E su quel secondo numero il divario resta gigantesco.

Torna qui, senza bisogno di rispiegarla, la sua osservazione di ieri sui sistemi di frontiera: non più una rete sola, ma una rete dentro un'impalcatura che smista migliaia di chiamate. Ed è lo stesso motivo per cui, secondo lui, presto smetteremo di parlare di versioni dei modelli: non ci saranno più lanci, solo un miglioramento continuo, come è già successo ai sistemi operativi dei telefoni, che nessuno chiama più per numero.

Nel frattempo Chollet ha una società, Ndea, e la sta costruendo attorno a un'idea antica e poco di moda: insegnare alle macchine a scrivere piccoli programmi che risolvono il problema, invece di indovinare la risposta.

La cosa più interessante per me non è la tesi, è il gesto. Un ricercatore che ha passato anni a fare da contrappeso all'entusiasmo generale ammette in pubblico di aver sbagliato la previsione, e nello stesso respiro sposta l'asticella su un terreno più difficile. In un dibattito dove quasi tutti stanno difendendo posizioni prese anni fa, è una rarità che vale più di molte previsioni.

---

Geoffrey Hinton è l'uomo che ha reso possibile quasi tutto questo, e che dal 2023 passa il tempo a spiegare perché lo preoccupa. All'inizio di agosto era a Las Vegas, alla conferenza Ai4, e in un'intervista alla CNN ha detto che i sistemi stanno diventando più intelligenti, che sviluppano intenzioni sempre più complicate e che potrebbero arrivare a sottrarsi al controllo umano. Ha aggiunto una previsione concreta e sgradevole: attacchi informatici più cattivi, man mano che le capacità crescono.

La formula che usa da qualche mese è più inquietante della parola rischio. Li chiama nuovi tipi di esseri: sistemi che, ricevuto un obiettivo, si costruiscono da soli gli obiettivi intermedi per arrivarci. Il problema, nella sua lettura, non è la macchina cattiva. È che quegli obiettivi intermedi nessuno li ha scritti e nessuno li vede, e quando arriva il momento del test il sistema ha già imparato a comportarsi bene mentre lo guardi.

Da qui la sua posizione sui pesi aperti, cioè sui modelli che chiunque può scaricare e modificare. In un dibattito recente sulla sicurezza ha detto che rendere pubblici quei pesi significa regalare a chiunque un oggetto costato centinaia di milioni, che a quel punto può essere riadattato per fare danni.

È il punto esatto in cui Andrew Ng, tra i padri del deep learning applicato, gli si mette di traverso. Il dodici agosto, insieme ad altri pionieri, ha sostenuto che gli argomenti di sicurezza dei laboratori chiusi servono soprattutto a chi li pronuncia: un modo elegante per far scrivere regole che tengono fuori i concorrenti. Non è una lite tra ottimisti e pessimisti. È una lite su chi debba avere le chiavi.

Il gesto più rivelatore di Hinton, però, non è una dichiarazione. Sta finendo un libro con Patchen Barss, scritto per chi non è del mestiere: come funzionano queste macchine, perché sono pericolose, cosa converrebbe fare. Uno dei ricercatori più tecnici del mondo ha smesso di rivolgersi ai colleghi e ha cominciato a rivolgersi a tutti gli altri. Chi ha una tecnologia da difendere scrive paper. Chi pensa che la partita si decida altrove scrive libri.

---

Dario Amodei guida Anthropic, e da qualche mese ha smesso di parlare di princìpi per parlare di procedure. Nel saggio pubblicato a giugno sulla politica di fronte alla curva esponenziale, la richiesta è precisa: test obbligatori condotti da terze parti sui modelli di frontiera, e il potere, per lo Stato, di bloccare o far ritirare un rilascio quando un modello non supera le soglie di sicurezza su rischi informatici, biologici, di perdita di controllo. Il paragone che usa è l'aviazione civile: nessuno chiede a chi costruisce un aereo di certificarselo da solo.

È uno spostamento importante, e passa quasi inosservato. Per due anni il dibattito sulla sicurezza è stato fatto di appelli e lettere aperte. Adesso è fatto di chi firma, chi misura e chi può dire no. Sui pesi aperti, va notato, Amodei non chiede un divieto generale: chiede metodi tecnici per renderli meno pericolosi. E intanto porta la stessa logica sul prodotto, con il progetto Glasswing, pensato per irrobustire il software contro attacchi condotti da sistemi automatici. Jack Clark, che in Anthropic si occupa di politiche pubbliche, la riassume con un'immagine domestica: serve un pedale del freno. Nella sua ultima newsletter ha messo in fila ventitré modi in cui un sistema potrebbe cominciare a migliorare se stesso.

A questa risposta istituzionale se ne oppongono altre due, ed è qui che la giornata si fa interessante. Vitalik Buterin propone di non affidarsi a nessuna autorità: nella sua idea Ethereum diventa il posto dove gli agenti si pagano, si lasciano recensioni, depositano garanzie e risolvono le liti — la fiducia non concessa da un ente ma ricavata dal comportamento passato. Aggiunge che i guadagni di produttività ottenuti scrivendo codice più in fretta andrebbero reinvestiti in test e verifiche, non in altre funzioni. Andrew Ng dà la terza risposta, la più semplice: nessun guardiano, l'apertura è già una forma di controllo, perché mille occhi trovano quello che un comitato non vede.

Tre risposte, una domanda sola. E nessuna delle tre è ideologica: sono tre architetture diverse per lo stesso problema, cioè decidere di chi ci si fida quando nessuno può più leggere tutto.

---

Torniamo un attimo sul filo di oggi: la capacità non è più il collo di bottiglia, il limite si è spostato sul capire e sul verificare. Resta una domanda pratica, quella che interessa a chi ha un'azienda da mandare avanti: cosa succede quando questa roba entra davvero in un organigramma.

Jack Dorsey ha dato una risposta che non è una previsione ma un bilancio. Block, la società di pagamenti che guida dopo Twitter, ha tagliato circa quattromila posti, e lui ha collegato la cosa in modo esplicito a un cambio di impostazione: l'intelligenza artificiale in azienda non è più un assistente che aiuta le persone, è l'infrastruttura su cui l'azienda gira. Squadre più piccole, dice, fanno di più e più in fretta. E ha aggiunto la parte scomoda: chi non si è ancora mosso è già in ritardo, e nel giro di un anno vedremo molti fare lo stesso.

Il punto più radicale riguarda i quadri intermedi. In un intervento legato alla nuova direzione di Block, Dorsey ha sostenuto che buona parte del coordinamento gestito oggi da persone verrà gestito da sistemi. Conviene ricordare che il management intermedio non è un'istituzione eterna: nasce nell'Ottocento con le ferrovie, quando qualcuno doveva coordinare treni che non poteva vedere, su linee lunghe centinaia di chilometri. È stato inventato per risolvere un problema di informazione a distanza. Se quel problema cambia natura, è ragionevole aspettarsi che cambi anche il mestiere nato per risolverlo.

Sul resto Dorsey sta dalla parte opposta rispetto ad Amodei: sostiene i modelli aperti come forma di governo migliore, e mette in guardia dalla concentrazione di potere in poche piattaforme chiuse. In parallelo continua a rilasciare piccoli prodotti costruiti con agenti, quasi a dimostrare sul campo la tesi.

Resta, sullo sfondo, l'obiezione di Naval Ravikant: se la stessa risposta arriva identica a tutti, il vantaggio non sta nello strumento. Dorsey sta scommettendo che stia nella velocità con cui riorganizzi tutto attorno allo strumento. Sono due scommesse diverse, e le stiamo osservando entrambe in diretta.

---

David Heinemeier Hansson, per tutti DHH, ha creato Ruby on Rails, cioè uno degli strumenti con cui è stato costruito buon pezzo del web moderno, e ha una lunga storia di posizioni contro il senso comune del suo settore. Sull'intelligenza artificiale era stato tra i più freddi.

Nelle ultime settimane ha cambiato registro in modo netto. Parla di età degli agenti e la definisce con due parole: esecuzione senza fine. Il punto, nel suo racconto, non è il completamento automatico che suggerisce la riga dopo. È che l'agente apre il terminale, lancia i test, cerca sul web, usa gli strumenti, e quindi un'idea che prima restava un appunto adesso diventa un esperimento nel pomeriggio. Ha scritto che è la cosa più divertente che gli sia mai capitata con un computer, e ha invitato a guardare al 2026 con ottimismo — lui, che fino a poco fa faceva il contrario.

Vale la pena guardare come lavora, perché è meno entusiasta di quanto la frase suggerisca. Continua a scrivere a mano parecchio codice. Usa gli agenti per le prime stesure, ha provato modelli diversi per il lavoro su Rails, e dice di preferire quelli che rispondono in modo asciutto ed efficiente a quelli che ragionano di più. È un giudizio da artigiano, non da sostenitore.

Questa conversione dice qualcosa che i numeri sull'adozione non dicono. Le tecnologie non vincono quando convincono gli entusiasti: vincono quando smettono di essere un argomento e diventano un gesto quotidiano anche per chi le criticava. È successo con i fogli di calcolo, con la posta elettronica, col cloud — ogni volta gli ultimi ad arrendersi sono stati quelli che il mestiere lo conoscevano meglio.

E si chiude il cerchio con Geoffrey Litt. DHH racconta che le prime stesure gliele scrive la macchina, ma che leggerle e deciderle resta lavoro suo. Il tempo risparmiato non sparisce: si sposta. Da scrivere a rivedere. Nel frattempo continua a battersi per la decentralizzazione dell'infrastruttura, che poi è la stessa preoccupazione di Dorsey vista dal lato dei server.

---

Progetti da osservare, e stavolta raccontano la giornata meglio delle dichiarazioni.

Meta ha rilasciato Muse Glimmer, un modello da trenta miliardi di parametri, multimodale, pensato per far lavorare gli agenti, con una licenza aperta e pulita. È il rientro di Meta nel campo dei pesi aperti, e finisce dritto dentro la disputa tra Hinton e Ng: non un argomento, un fatto compiuto.

Inspect è il sistema di valutazione dell'istituto britannico per la sicurezza dell'AI: oltre duecento prove già pronte per misurare cosa un modello sa e non sa fare, più gli strumenti per valutare gli agenti. Quando Amodei chiede test obbligatori di terze parti, sta chiedendo qualcosa che tecnicamente esiste già. È qui.

BDH, rilasciato il dieci agosto dalla società Pathway, è un modello da centocinquanta milioni di parametri — minuscolo — che affronta i test di ragionamento di Chollet ragionando in una sua forma interna prima di rispondere. Un piccolo argomento a favore dell'idea che l'architettura possa contare più della taglia.

Openclaw è un assistente personale che ognuno può installare sulle proprie macchine, nato come progetto di un fine settimana e diventato in meno di cinque mesi il repository più seguito su GitHub. È il segnale più chiaro che gli agenti hanno smesso di essere dimostrazioni e sono diventati mobilio.

Infine LeRobot, di Hugging Face: tutto il necessario per addestrare e far girare modelli su robot veri, con dati che arrivano in continuo dal mondo fisico. È il terreno concreto della tesi di LeCun. Mentre si discute se la fase linguistica sia finita, qualcuno sta già montando la successiva.

---

Resta l'immagine di Hinton che, invece di scrivere un altro articolo per i colleghi, sta finendo un libro per tutti gli altri. È il gesto di chi ha capito che la parte difficile non è più costruire la macchina: è metterci d'accordo su chi la guarda mentre lavora. Una domanda vecchia quanto le ferrovie, che torna puntuale ogni volta che qualcosa diventa troppo veloce per l'occhio umano. È stato Signal Brief. Alla prossima.
