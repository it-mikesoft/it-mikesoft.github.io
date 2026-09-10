# Chi tiene la chiave dell'intelligenza

> Un programma che migliora da solo il proprio codice, un'obiezione organizzativa e tre risposte diverse alla domanda su chi comanda gli agenti autonomi.

---

Un programma lasciato in funzione su una sola scheda grafica, senza nessuno a controllarlo, riscrive il proprio codice di addestramento e conserva soltanto le modifiche che migliorano il risultato. Non è un esperimento chiuso in un laboratorio: è un archivio pubblico, scaricabile stamattina. Giovedì 10 settembre 2026, questo è Signal Brief. La notizia del giorno non è quanto siano diventati bravi i modelli, ma dove si è spostato l'ostacolo: dalla macchina alle stanze in cui si decide come usarla. E la scena si apre con Andrej Karpathy, che ha lasciato lavorare una macchina al posto suo.

---

Il resoconto è asciutto. Karpathy fa girare un ciclo automatico di ricerca sul suo progetto nanochat, quello che serve a costruire da zero un ChatGPT in miniatura con circa cento dollari. La macchina prova, misura, scarta, riprova. Alla fine trova una ventina di miglioramenti veri, e il tempo necessario per arrivare al livello di GPT-2 scende di circa l'undici per cento. Non si ferma lì: apre un secondo giro e comincia a far collaborare più agenti tra loro, dicendo che i laboratori di frontiera lo faranno comunque.

La differenza rispetto a ieri sta tutta qui. Ieri raccontavamo l'AI che diventa infrastruttura di base, con il valore che scivola verso i prodotti e i flussi di lavoro. Oggi quello strato infrastrutturale ha tre piani sovrapposti e visibili. Al piano dello sviluppo c'è il ciclo di Karpathy, il software che si limano da solo. Al piano dei conti c'è Patrick Collison, che descrive Stripe come l'infrastruttura economica dell'AI e sostiene che ogni azienda dovrà presto tenere la contabilità dei token accanto a quella dei ricavi. Al piano fisico c'è Jensen Huang, che ha dichiarato l'arrivo dell'intelligenza generale legandola all'hardware e annunciando quattrocentomila schede grafiche in accensione.

Contro questa scala si mette l'obiezione più solida della settimana, e non è tecnica. Benedict Evans ha pubblicato il 3 settembre un saggio in cui smonta l'idea che l'AI cancelli il software aziendale solo perché rende quasi gratuito costruire strumenti. Il cambiamento reale, scrive, passa per tre passaggi: comprare o costruire la tecnologia, cambiare il modo in cui l'azienda lavora, e infine assorbire le pressioni competitive che ne nascono. Chiedere al modello di fare l'app salta il secondo passaggio, che è quello lento.

È una dinamica già vista, ed è la ragione per cui l'obiezione pesa. Quando le fabbriche passarono dal vapore all'elettricità, il motore elettrico arrivò decenni prima dei guadagni di produttività. Le officine avevano ancora la forma del vecchio albero di trasmissione al centro del capannone: bisognava riprogettare gli edifici, gli orari, i mestieri. La corrente c'era già, la fabbrica no.

Da un'altra direzione arriva un dubbio che assomiglia a questo. François Chollet, commentando i numeri di GPT-6 Astra, riconosce un salto netto sui test di ARC-AGI-3 ma si rifiuta di chiamarlo intelligenza generale: saturare i test non dimostra che un sistema sappia generalizzare, e la velocità del campo ha superato le sue stesse previsioni. Nello stesso giorno aggiunge la parte politica: l'autonomia degli agenti non è una tappa tecnica obbligata, è una scelta che una società fa, e per i processi critici gli esseri umani dovrebbero restare nel circuito.

Tre affermazioni, tre luoghi diversi. Una dice che la macchina accelera da sola. Una dice che le organizzazioni frenano. Una dice che la direzione va decisa, non subita. La cosa che tiene insieme queste voci non è la velocità: è la domanda su chi tenga il manico. E la settimana ha prodotto almeno tre risposte incompatibili.

---

Karpathy è la persona che ha trasformato l'addestramento dei modelli in una materia da studiare: nanochat esiste per far vedere l'intera filiera a chi vuole capirla, non per vincere classifiche. Ex ricercatore di OpenAI, negli ultimi anni ha scelto più il ruolo dell'insegnante che quello del costruttore di prodotti.

Il gesto di questi mesi però è di un'altra natura. Dal ciclo automatico su nanochat è nato un progetto separato e pubblico, un ritaglio di seicentotrenta righe in cui sono gli agenti a condurre gli esperimenti: modificano un solo file di addestramento, lanciano la prova, leggono il punteggio, decidono cosa tenere. La metrica di riferimento è il tempo che serve per raggiungere il livello di GPT-2. È il tipo di lavoro che fino a poco tempo fa richiedeva un dottorando paziente e molte notti.

Intorno a questo, il suo discorso pubblico è cambiato di tono. Dice che programmare sta diventando irriconoscibile e che gli agenti sono già utili per portare a termine un lavoro intero, purché qualcuno dia la direzione e il gusto. In un intervento raccolto quest'anno alla conferenza di Sequoia descrive i modelli linguistici come un nuovo strato programmabile del lavoro digitale, con la finestra di contesto — la quantità di materiale che il modello riesce a tenere sotto gli occhi contemporaneamente — come leva principale.

Il collegamento con il filo di oggi è diretto: quello che Karpathy mostra è il primo dei tre piani, lo sviluppo che si accorcia da sé. Ed è anche il piano che si vede meglio, perché produce numeri.

Quello che mi sembra più notevole è la sproporzione tra il mezzo e il risultato. Non c'è un data center, non c'è un annuncio, non c'è un modello nuovo: c'è una scheda grafica, un file, una misura ripetuta. La forma classica della scoperta scientifica — provo, misuro, tengo quello che regge — funziona anche quando chi prova non è una persona. Resta però una domanda che Karpathy non chiude: una ventina di miglioramenti su un progetto didattico è un'ottima notizia; cosa succede quando lo stesso ciclo gira su qualcosa che non si può ispezionare in un pomeriggio, nessuno per ora lo sa dire.

---

Benedict Evans fa un mestiere che consiste nel guardare i numeri delle piattaforme e dire quando la narrazione corrente non torna. Ieri lo citavamo come la voce che certificava lo spostamento del valore verso i prodotti e la distribuzione. Questa settimana ha cambiato posizione, e il cambio è la vera notizia: la sua obiezione non è più economica, è organizzativa.

Il saggio del 3 settembre parte da un'osservazione semplice. Se generare un'applicazione costa quasi nulla, dice l'argomento corrente, il software aziendale è finito. Evans risponde che il software aziendale non è mai stato solo codice: era il modo in cui un'azienda aveva scritto le proprie regole. Cambiare quel modo richiede riscrivere procedure, contratti, mansioni, responsabilità. È lavoro istituzionale, e non lo fa un modello.

Lo stesso ragionamento lo aveva già portato nella sua presentazione di primavera, dove descriveva l'AI come una infrastruttura che riorganizza il software e i processi invece di sostituirli in blocco. La differenza è che allora era una previsione sul mercato; adesso è una diagnosi sul perché l'adozione va più piano di quanto i grafici suggeriscano.

Qui si apre la tensione più utile della giornata. Karpathy misura un ciclo che si accelera da solo e trova undici per cento di tempo risparmiato. Evans osserva che quel guadagno, per arrivare al conto economico di un'azienda vera, deve attraversare un piano intermedio che nessuno ha automatizzato: la riunione in cui si decide chi risponde di cosa. Sono due orologi che vanno a velocità diverse, e per ora nessuno dei due aspetta l'altro.

Un'immagine aiuta a tenerlo in mente. Nei primi anni del cloud le aziende compravano server virtuali e li usavano esattamente come i vecchi armadi in sala macchine: la tecnologia era nuova, l'abitudine no, e per parecchi anni il risparmio promesso non si vide. Poi cambiò il modo di scrivere i sistemi, e allora sì.

Il dubbio che resta è se questa volta la scala del divario sia la stessa. Se il costo di produrre software crolla di dieci volte e il costo di riorganizzare un'impresa resta identico, la distanza tra ciò che è possibile e ciò che viene fatto non si assottiglia: si allarga.

---

Chollet lavora da anni sul problema di come si misura l'intelligenza di una macchina, e lo fa costruendo test difficili invece di scrivere manifesti. Per questo il suo commento su Astra pesa più di molti altri: viene da chi ha interesse professionale nei numeri, non nel raffreddare l'entusiasmo.

Il 3 settembre riconosce che il nuovo modello di OpenAI fa un salto a gradino sui test di ARC-AGI-3, e ammette che la velocità del campo ha superato le sue attese. Poi mette il freno esattamente dove serve: saturare un test non prova che un sistema sappia generalizzare. È la differenza tra uno studente che ha capito la materia e uno che ha imparato a fare quel compito. Le due cose danno lo stesso voto e non sono la stessa cosa.

Nello stesso giorno aggiunge la parte che riguarda tutti. L'unica forma di AI che gli sembra desiderabile è quella tenuta in mano da qualcuno, e per i processi critici la presenza umana non è un dettaglio di implementazione: è la scelta che una società compie. Autonomia come decisione politica, non come traguardo tecnico.

C'è poi un'osservazione tecnica di fine agosto che vale riportare per l'effetto, non per il nome. I sistemi di frontiera, dice, non sono più un modello che pensa: sono un impianto che orchestra molte chiamate al modello, un'architettura fatta di pezzi che si passano il lavoro. Se è così, l'intelligenza che vediamo sta in parte nell'impalcatura intorno, non solo nel cervello dentro.

Il contrasto con Huang diventa a questo punto piuttosto nitido. Da una parte c'è chi dichiara arrivata l'intelligenza generale contando le schede grafiche che si accendono. Dall'altra chi dice che quei numeri non rispondono alla domanda posta. Non discutono degli stessi dati: discutono di quale strumento sia lecito usare come termometro.

---

Ricapitoliamo un attimo dove siamo arrivati. Lo sviluppo si accorcia da solo, le organizzazioni fanno resistenza, e la misura del progresso è contestata. Manca la domanda che tiene insieme tutte e tre: chi comanda gli agenti quando cominciano a lavorare senza supervisione.

Naval Ravikant la sposta di netto. La sua posizione recente, ripresa in una serie di conversazioni pubbliche di febbraio, è che l'AI sia soprattutto leva: costruire software diventa accessibile, l'inglese funziona come linguaggio di programmazione, e la differenza la fa il giudizio di chi decide cosa costruire. Sul rischio è ancora più netto: il pericolo che lo preoccupa non è l'estinzione, è la concentrazione dell'accesso in mano a pochi guardiani, con la cattura delle regole che di solito segue.

Balaji Srinivasan propone un attrezzo concreto per la stessa preoccupazione. La sua tesi ricorrente è che gli agenti vadano governati con chiavi crittografiche e identità verificabili: se un programma agisce, deve agire con una credenziale che qualcuno possiede e può revocare. Non un principio etico, un meccanismo. In parallelo continua a costruire istituzioni per tecnici: dopo la chiusura imposta dalla Malesia a luglio ha spostato la sua Network School in Kazakistan con un accordo quinquennale che comprende AI, innovazione e hackathon.

E qui la giornata mostra la sua parte più interessante, perché alla stessa domanda arrivano tre risposte che non si assomigliano. Balaji dice chiavi. Vivek Raghavan, che a Global Fintech Fest ha accompagnato il primo ministro indiano dentro lo stack di Sarvam, dice infrastruttura nazionale: modelli e calcolo costruiti in casa per non finire in dipendenza strutturale. Aravind Srinivas, in un'intervista del 4 settembre, dice hardware dell'utente: banche e clienti regolamentati chiedono sistemi scollegati dalla rete, e l'applicazione desktop di Perplexity fa girare modelli locali su dichiarazioni fiscali e cartelle cliniche.

Chiavi, confini, ferro sul tavolo. Tre modi di rispondere a chi ha la chiave di casa, ed è la stessa discussione che l'Ottocento fece sui canali e le ferrovie: non chi costruisce la linea, ma chi decide chi può passarci. Sul rischio dentro il modello, intanto, restano le voci di Geoffrey Hinton sugli obiettivi che un sistema si dà da solo e di Yoshua Bengio, che il primo settembre ha spiegato perché l'inganno emerga dai metodi di addestramento e vada ripensato alla radice.

---

Progetti da osservare.

Il primo è autoresearch, il ritaglio pubblico da cui è partito tutto: seicentotrenta righe, una scheda grafica, agenti che conducono esperimenti di addestramento e si giudicano su una metrica sola. È il ciclo di auto-miglioramento in forma leggibile.

Accanto ci sta PostTrainBench, un test che misura quanto un agente sappia rifinire un modello da solo, e Locus, il sistema che oggi vi ottiene il punteggio migliore producendo modelli superiori a quelli messi a punto da persone. Se il ciclo di Karpathy è il racconto, questo è il tabellino.

Poi c'è l'impianto sotto gli agenti, che è diventato il vero campo di gara. DeepSeek ha rilasciato una struttura in cui ogni pezzo è sostituibile: file, sandbox, approvazioni, registrazioni. Ha superato centododicimila stelle in pochi giorni. Nello stesso terreno OpenClaw, l'ambiente per agenti che si installa sul proprio computer, è il progetto open source cresciuto più in fretta nella storia di GitHub, oltre trecentomila stelle in pochi mesi.

Buzz, pubblicato da Block con licenza aperta, prende l'idea di Balaji e la mette in un prodotto: una chat di gruppo dove persone e agenti lavorano nello stesso spazio, e ogni agente ha identità, permessi e tracciato delle azioni propri. Funziona con modelli diversi e si può ospitare in casa.

L'ultimo è il più piccolo e forse il più eloquente. Simon Willison ha costruito, quasi interamente delegando a un agente, un visualizzatore di file Blender che gira nel browser e mostra forme, materiali e luci. Software monouso, nato su richiesta, funzionante. Esattamente il fenomeno che Evans dice non essere sufficiente a cambiare un'azienda: entrambe le cose sono vere insieme, ed è questo che rende la settimana difficile da riassumere.

---

Rimane quella scheda grafica accesa in una stanza, che intanto migliora il codice che la fa funzionare. Nessuno la sorveglia, e non è questo il punto. Il punto è che una macchina così non chiede il permesso a nessuno per andare più veloce, mentre tutto ciò che deciderà come usarla — riunioni, leggi, chiavi, confini — continua a muoversi al passo di sempre. È stato Signal Brief. Alla prossima.
