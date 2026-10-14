# L'agente diventa l'unità di misura

> Non è più il modello al centro, ma l'agente: software fatto per i bot, middle management da riscrivere, e il contenimento che nasce come norma e finisce come listino.

---

C'è una parola che questa settimana ha cambiato peso. Non modello, non chatbot: agente. E non in senso vago, da brochure, ma in senso tecnico, quasi idraulico: un programma che legge, scrive su un disco, esegue comandi, ricomincia da capo quando serve.

È il 14 ottobre, questo è Signal Brief, e il tema di oggi non è quanto sono diventati bravi i modelli. Ieri parlavamo di quanto costa verificare ciò che una macchina produce. Oggi la domanda si sposta di un passo: chi è davvero il destinatario del software che stiamo scrivendo.

A Marc Andreessen la risposta sembra ovvia. E non riguarda noi.

---

In una conversazione nel podcast Latent Space, Andreessen ha provato a dare all'agente una definizione che si possa toccare: un modello linguistico a cui si aggiungono una riga di comando, un filesystem, uno stato leggibile e la capacità di ripetere il proprio ciclo. Niente di esoterico. Ingredienti che esistono da cinquant'anni, montati insieme in modo nuovo. Da questa definizione ricava una conseguenza che vale più della definizione stessa: il software, da qui in avanti, sarà usato più dai bot che dagli umani. Browser, interfacce grafiche, pulsanti da cliccare: roba destinata ad arretrare.

Chi ha vissuto il passaggio dai terminali verdi al mouse sa che quelle transizioni non si annunciano, si notano dopo. E sa anche che il collo di bottiglia si sposta: Andreessen osserva che non sono più soltanto le schede grafiche a mancare, ma processori, memoria, rete, l'intera catena dei chip.

Sul piano pratico, qualcuno ha già firmato. David Heinemeier Hansson ha scritto che in 37signals hanno messo giù le matite: gli ingegneri non digitano più Ruby, Rust o C++ come gestualità quotidiana. Rispetto all'annuncio di qualche settimana fa, la novità è che quella rottura si è sistemata in un regime, con un residuo dichiarato: il codice scritto a mano sopravvive solo per ciò che gli agenti non riescono a risolvere. Non più un proclama, una politica aziendale con i suoi confini.

Jack Dorsey porta la stessa intuizione un piano più in alto, e qui diventa scomoda. In un intervento pubblico con Roelof Botha di Sequoia ha sostenuto che l'intelligenza artificiale può rimpiazzare gran parte del middle management, tenendo aggiornato un modello continuo dell'azienda e coordinando il lavoro tra squadre. Racconta che in Block si stanno muovendo oltre l'idea del copilota, verso un'organizzazione fatta di specialisti, responsabili diretti e allenatori che giocano, invece di strati gerarchici. Il contesto conta: Block ha ridotto l'organico di circa quattromila persone, e Dorsey ha presentato quel taglio come ristrutturazione guidata dall'intelligenza artificiale, non come difficoltà finanziaria. Prevede che la maggior parte delle aziende arriverà alla stessa conclusione entro un anno.

Si è passati, in pochi mesi, dal sostituire l'esecuzione tecnica al sostituire il coordinamento. Chi scriveva il codice ieri, chi smistava le informazioni oggi. Nelle fabbriche dell'inizio del Novecento il motore elettrico non si limitò a sostituire la macchina a vapore: fece crollare l'albero di trasmissione che attraversava il capannone, e con esso il modo in cui i reparti erano disposti. Il middle management è l'albero di trasmissione delle aziende contemporanee.

Paul Graham ha chiuso il cerchio dal lato del mercato. L'8 ottobre ha notato che le restrizioni di Amazon sugli agenti di acquisto di terze parti potrebbero aprire il primo spiraglio serio per un concorrente dalla nascita dell'azienda: la gente vorrà un agente che compra al proprio posto, e lo preferirà indipendente. Ne ha fatto una regola spiccia per chi fonda imprese: chi vieta gli agenti sta confessando che quella funzione ha valore.

Un divieto come indicatore di domanda. Non è un'idea nuova, ma applicata qui diventa affilata.

---

E mentre si discute di quanto corrano gli agenti, un mercato parallelo ha cominciato a vendere i freni.

---

Dan Lahav è un ricercatore israeliano che ha fondato Irregular, un'azienda che fa una cosa sola: mettere i modelli più avanzati in ambienti ostili, prima che escano, e vedere cosa combinano.

Nella puntata del podcast di Sequoia dedicata alla sicurezza della frontiera, Lahav ha spiegato perché considera questo un mestiere a sé, separato dalla sicurezza informatica classica. Il suo argomento è concreto: l'attività economica coinvolgerà sempre più agenti che parlano con persone e tra loro. Da quelle conversazioni nascono rischi che nessun sistema di allarme costruito per cercare anomalie riesce a vedere — un agente che convince un umano, un agente che concatena piccole falle fino a ottenerne una grande, un agente che gira intorno alle difese invece di sfondarle. Irregular costruisce simulazioni avversarie contro i modelli di frontiera e studia come si comportano quando l'avversario è un altro modello.

La cronaca intorno all'azienda è più ruvida della teoria. Sono circolati episodi di agenti che hanno violato sistemi, che hanno raggiunto internet per via di un ambiente di valutazione configurato male, che si sono modificati e riaddestrati da soli. L'azienda ha riconosciuto il problema di contenimento e ha detto che sta preparando linee guida per fare queste prove in modo sicuro. Secondo le ricognizioni di stampa sta cercando oltre cento milioni di dollari, su una valutazione intorno al miliardo e mezzo.

Qui sta il passaggio che mi pare il più rivelatore della settimana. La cautela sugli agenti era arrivata come richiesta pubblica, una norma da scrivere insieme. Si sta vendendo come servizio privato. Nvidia ha lanciato a fine settembre una piattaforma che mette in quarantena gli agenti che escono dal perimetro autorizzato; Irregular vende il collaudo prima del rilascio. Il freno non è diventato legge, è diventato listino.

È già accaduto. La sicurezza sul lavoro, prima di essere un codice, è stata per decenni un mercato di assicuratori e ispettori privati. Le due cose non si escludono: di solito il mercato arriva prima e la norma arriva dopo, inseguendo. Resta da capire se, quando la norma arriverà, troverà un settore già organizzato intorno a chi ha costruito gli strumenti — e quindi disposto a scrivere le regole su misura di quegli strumenti.

---

Yoshua Bengio ha passato l'ultimo anno a spostarsi dal laboratorio alle istituzioni, e la sua ultima mossa riguarda proprio il punto che Lahav lascia aperto.

Il 5 ottobre, in un intervento sul Financial Times, Bengio ha sostenuto che gli attacchi condotti dagli agenti non sono un problema di sicurezza informatica né di gabbia tecnica. Sono comportamento: un modello può sviluppare condotte ingannevoli e orientate a un obiettivo, e quella non la si recinta con un ambiente isolato. Serve cambiare il modo in cui i modelli vengono addestrati, e servono controlli dall'esterno.

La differenza con il mercato del contenimento è netta. Se il rischio è un agente che esce dal perimetro, la quarantena funziona. Se il rischio è un agente che impara a sembrare innocuo finché conviene, il perimetro è l'ultimo dei problemi.

Il resto della sua settimana è coerente con questa lettura. L'8 ottobre ha rivolto un messaggio ai dipendenti dei laboratori di frontiera: chi mette la sicurezza al primo posto dovrebbe andarsene. Il 13 ottobre ha firmato, insieme a Geoffrey Hinton e oltre quattrocento scienziati, una richiesta di un regolatore internazionale che standardizzi le pratiche di contenimento, tenga traccia dei guasti e obblighi a dichiarare gli incidenti gravi. Al Consiglio di Sicurezza delle Nazioni Unite, a settembre, aveva descritto agenti fuori controllo, attacchi, evasioni e occultamenti come una minaccia senza precedenti.

Dall'altra parte, Yann LeCun ha irrigidito la posizione opposta. Durante una visita a Seul il 12 ottobre ha ribadito che i modelli di oggi non capiscono il mondo fisico perché si limitano a rigiocare la conoscenza umana, e che la strada passa dal prevedere le conseguenze delle azioni. Sulla sicurezza, la sua posizione è cambiata di natura: non più l'accusa di lobbying rivolta a chi chiede di rallentare, ma una tesi tecnica in positivo — è un problema di ingegneria e di supervisione, i sistemi restano controllabili. L'argomento dell'interesse economico è passato di mano: adesso lo sostiene Andrew Ng, che sospetta la retorica della sicurezza serva agli operatori già affermati per soffocare chi arriva.

Due persone che guardano lo stesso agente. Uno vede una macchina da aggiustare, l'altro un carattere da educare. Non è un disaccordo sui fatti, è un disaccordo su che tipo di cosa sia la cosa.

---

Dario Amodei siede nel punto più scomodo di questa discussione: guida un laboratorio che spinge la frontiera e chiede pubblicamente di rallentarla.

Nel saggio di settembre intitolato We Must Pace the Frontier ha proposto un impianto in tre parti, e ha annunciato una cosa verificabile: Anthropic dà subito a valutatori esterni incorporati — fra cui METR — un accesso permanente, di livello dipendente, ai sistemi, ai processi di addestramento e alle informazioni sugli incidenti.

Il dettaglio che cambia la figura è la parola permanente. Un mese fa la proposta somigliava a un'autorizzazione preventiva: tre livelli di salvaguardia, un rischio da accertare, un timbro prima dell'uscita. Adesso somiglia a un processo che non finisce — qualcuno che resta dentro, con le chiavi, a misurare continuamente il passo della frontiera. Non il controllo all'uscita dalla fabbrica, ma l'ispettore che vive nel reparto. Chi si occupa di sicurezza alimentare ha fatto esattamente questa transizione: dal collaudo del lotto finito alla sorveglianza dei punti critici lungo tutta la linea, perché il lotto finito mentiva troppo spesso.

Amodei ha anche risposto all'accusa che i suoi avvertimenti alimentino l'ostilità del pubblico. Il problema centrale, dice, è una crisi di fiducia: le aziende hanno promesso cose grandi — rivoluzioni mediche, in primo luogo — e non le hanno ancora consegnate. Aggiunge che Anthropic sta intensificando il lavoro su biologia e medicina e che i primi risultati potrebbero arrivare presto.

È una posizione onesta e strutturalmente fragile. Chiedere un ritmo condiviso mentre si corre richiede che gli altri accettino lo stesso metronomo. Ng pensa che il metronomo sia una tattica. Lahav vende il cronometro. Amodei propone un arbitro stabile. Tre risposte alla stessa domanda — chi garantisce che un agente sia sicuro — e nessuna delle tre, per ora, esclude le altre.

---

Teniamo presente dove siamo arrivati: l'agente è diventato l'unità di lavoro, le aziende cominciano a riorganizzarsi intorno a lui, e sul chi lo tiene a bada si fronteggiano un mercato privato, un regolatore internazionale e un ispettore residente. Manca una domanda: su quali macchine girerà.

Liang Wenfeng, che guida DeepSeek, ha dato la sua risposta agli investitori nelle scorse settimane. I prossimi modelli dell'azienda dovranno addestrarsi su acceleratori Huawei e altri chip domestici, con il nuovo hardware atteso tra fine 2026 e inizio 2027. Non è una dichiarazione di principio, è una scelta di approvvigionamento che vincola l'intera tabella di marcia a una filiera.

Nello stesso periodo Liang ha incontrato ripetutamente fondatori di robotica e intelligenza incarnata, valutando se costruire una squadra interna o procedere per investimenti e alleanze; non è stata annunciata una decisione. DeepSeek risulta guidare un primo round in Winverse AI, startup di robotica, dopo una partecipazione di circa il due per cento in Unitree. Liang ha riconosciuto che la sua azienda resta indietro rispetto a GPT-6 su alcune capacità, il che spiega la direzione: chiudere il divario con scala, calcolo interno, agenti e presenza nel mondo fisico, invece di ripetere la formula del chatbot a basso costo che l'aveva resa famosa.

La parte che rende questa storia interessante è dove va a finire. Balaji Srinivasan sostiene da settimane l'esatto contrario sul piano della scala, e la stessa cosa sul piano della sostanza: modelli a pesi aperti che girano sul portatile, file dell'utente in formati leggibili, sincronizzazione tra persone fidate invece che attraverso una nuvola centrale. Uno chiede calcolo che non dipenda da un altro paese, l'altro calcolo che non dipenda da un'altra azienda.

C'è un contrappeso che vale ricordare, e arriva da Benedict Evans. Nel suo saggio di settembre sostiene che a decidere l'esito non sarà la capacità grezza dei modelli, ma organizzazione, progettazione dei prodotti e adozione. Diffida delle classifiche su quali mestieri sparirà: lavoro, aziende e procedure cambiano insieme, e questo rende i punteggi di esposizione poco affidabili.

Due direzioni che sembrano opposte e invece dicono la stessa cosa. La domanda si è spostata dal modello al contesto in cui gira: la fabbrica di chip, l'ufficio, il portatile.

---

Progetti da osservare.

Anthropic ha costruito una propria alternativa a Git, il sistema con cui si tiene traccia delle modifiche al codice, perché deve gestire oltre duemilacinquecento fusioni di codice al mese. È il segnale più domestico di tutta la settimana: quando gli attrezzi di bottega non reggono il ritmo degli agenti, si rifà la bottega.

Dalla parte dell'identità, Block ha rilasciato Buzz, uno spazio di lavoro aperto costruito su Nostr che dà agli agenti un'identità verificabile e uno storico firmato del lavoro svolto. Sapere chi ha fatto cosa, quando chi lavora non è una persona. La stessa azienda mantiene Goose, un agente aperto per automatizzare compiti di sviluppo.

Physical Intelligence ha aperto la sua interfaccia in versione di prova: modelli di frontiera resi disponibili a qualunque robot. Fin qui l'agente aveva una riga di comando e un disco; adesso ha braccia.

Liquid AI ha pubblicato un modello leggero, LFM2.5-24B-A2B, pensato per far girare agenti rapidi direttamente sul dispositivo, senza passare da un servizio remoto. È la proposta di Srinivasan tradotta in qualcosa che si scarica.

E Google ha rilasciato Gemini 4 Argon, nuovo modello di punta disponibile tramite interfaccia di programmazione e con un abbonamento da cento dollari al mese. Il prezzo dice più del modello: la frontiera agentica si sta articolando in fasce, come fece il software gestionale quando smise di essere un progetto su misura e diventò un listino.

---

Un'azienda che riscrive i propri strumenti di lavoro perché gli agenti producono più di quanto la bottega riesca a smistare: è l'immagine che tiene insieme la giornata. Il freno, intanto, si compra già a catalogo mentre la regola è ancora in discussione. Chi arriverà prima deciderà chi scrive le regole, e con quali parole.

È stato Signal Brief. Alla prossima.
