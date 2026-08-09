# Il vantaggio non è più nel codice

> Il software scalabile non è più il fossato di nessuno. Questa settimana i costruttori convergono — ma su chi erediterà il vantaggio non c'è accordo.

---

Siamo al quattro maggio duemilaventisei. Questo è Signal Brief.

In questa settimana, da palchi e conferenze sparse tra San Francisco, Ginevra e Parigi, è emerso un tema che vale la pena raccontare con attenzione: il codice — quello scalabile, quello che per vent'anni è stato il vantaggio competitivo per eccellenza nel tech — ha smesso di essere abbastanza. La domanda è cosa lo sostituisce. E chi lo decide.

---

La settimana è iniziata con una frase. Andrej Karpathy, alla fine di aprile, ha parlato al Sequoia AI Ascent di San Francisco e ha detto che a dicembre del 2025 il codice che scriveva direttamente era ancora l'ottanta percento del suo output. In poche settimane era diventato il venti. Il salto non era stato graduale. Era stato un click.

Karpathy è uno dei pochi nel campo dell'intelligenza artificiale che ha credibilità sia come ricercatore che come praticante. Ha co-fondato OpenAI, ha guidato l'AI di Tesla, e poi ha scelto di fare una cosa rara: mettersi a spiegare al mondo, metodicamente, come il mestiere stia cambiando. Quella mattina a San Francisco l'ha chiamata "Software 3.0". Il programma non è più scritto in un linguaggio formale. Il programma è una descrizione in linguaggio naturale, e il modello è il nuovo interprete.

È un cambio di livello di astrazione — il terzo o quarto in settant'anni di informatica. Negli anni cinquanta si scriveva direttamente in binario; poi sono arrivati i linguaggi ad alto livello, poi i framework, poi il cloud. Ogni salto ha abbassato il costo di fare cose, ha aperto la tecnologia a più persone, ha spostato il vantaggio verso chi sapeva usarla e non verso chi la costruiva. Adesso stiamo saltando di nuovo, e il salto è più grande degli altri perché riguarda il linguaggio stesso.

Naval Ravikant, nello stesso giro di giorni, ha registrato un podcast e ha usato una frase lapidaria: il software puro è diventato non investibile. Non nel senso che le aziende tech chiudono domani. Nel senso che chiunque con una visione chiara può assemblare un'applicazione funzionante in una sessione con agenti AI. Il vantaggio non sta più nella capacità di costruire. Sta nel sapere dove portare quello che si costruisce, e a chi.

Benedict Evans aveva già messo in fila i dati a febbraio, analizzando la posizione di OpenAI: i modelli linguistici tendono alla commodity come sono tenduti i chip. Ogni generazione è più potente, e nessuno la controlla davvero. Il valore non sta nel modello ma nella distribuzione — chi controlla il punto di ingresso, chi ha già gli utenti installati. Google e Meta usano miliardi di persone già acquisite per erodere qualsiasi concorrente. È la stessa meccanica che ha fatto fuori decine di motori di ricerca negli anni novanta: non vinci perché trovi le pagine meglio, vinci perché le persone ti aprono già ogni mattina prima di fare qualsiasi altra cosa.

Questa convergenza è il filo della settimana. Persone con storie molto diverse — un ricercatore, un investitore, un analista — arrivano alla stessa conclusione da strade diverse. Il codice scalabile non è più il fossato difensivo di nessuno. Il fossato diventa la visione, la distribuzione, il controllo del punto di ingresso.

C'è però un'altra storia che corre in parallelo, e che merita di essere tenuta a mente mentre ascoltiamo tutto il resto. Mentre alcuni costruiscono sopra questo nuovo paradigma, altri chiedono di fermarsi un momento a guardare cosa stiamo costruendo davvero. A Ginevra, Geoffrey Hinton parlava di macchine che imparano a mentire per evitare di essere spente. Non è la stessa conversazione — ma è connessa, e torneremo su questo più avanti.

---

Karpathy non si ferma all'annuncio. Quando racconta qualcosa, lo racconta con i dettagli.

A San Francisco ha descritto un sistema personale che usa quotidianamente: scarica materiali grezzi in una cartella e lascia che un modello costruisca e mantenga una wiki interlinkata in markdown — articoli, backlink, categorie. Non è un motore di ricerca. Il modello compila la conoscenza attivamente, la riorganizza, aggiunge connessioni. Il suo archivio personale ha raggiunto circa quattrocento mila parole, e continua a crescere.

Ha poi pubblicato su GitHub un piccolo repository che chiama autoresearch: un agente di ricerca minimale di seicento righe. L'idea è quella che lui chiama umano come direttore della ricerca, AI come team autonomo. L'umano non esegue le query. Le orienta. È un passaggio di ruolo che ricorda il modo in cui i direttori d'orchestra si sono evoluti dopo la standardizzazione delle partiture: il valore non stava più nel saper suonare ogni strumento, stava nel sapere come farli suonare insieme.

L'altra cosa che ha detto, e che ha girato molto nei giorni seguenti, riguarda una distinzione che vale la pena tenere. Separa il vibe coding — quella fase iniziale in cui tutti sperimentano con gli agenti, chiedono cose, vedono cosa succede — dall'agentic engineering, che è la fase matura. Il primo è un gioco. Il secondo è una disciplina professionale: coordinare agenti fallibili mantenendo qualità, sicurezza, correttezza del risultato. Richiede più giudizio del coding tradizionale, non meno. Ha detto: puoi delegare il pensiero, non la comprensione.

È una frase che risponde implicitamente a chi teme che i developer diventino obsoleti. Il lavoro cambia, ma la comprensione profonda di cosa si sta costruendo rimane il requisito centrale. Semmai, diventa più importante di prima — perché il codice si scrive quasi da solo, ma capire se quello che è stato costruito è giusto, coerente, sicuro, richiede ancora una testa umana. Almeno per ora.

La direzione di Karpathy, guardandola nel tempo, è chiara: è passato da chi spiega come funzionano le reti neurali dentro a chi spiega come si orchestrano fuori. Da builder a power user. Non è una resa — è un cambio di livello. E dice qualcosa su dove sta andando la professione.

---

Jack Dorsey ha fatto qualcosa di drastico all'inizio di quest'anno. Ha tagliato il quaranta percento della forza lavoro di Block — circa quattromila persone. Poi, invece di comunicarlo come una misura straordinaria o temporanea, ha scritto un manifesto con il venture capitalist Roelof Botha. Il titolo era "From Hierarchy to Intelligence."

Il documento non è una giustificazione. È una tesi strutturale. L'argomento di fondo è questo: il middle management non esiste perché i manager di mezzo siano pigri o inefficienti. Esiste perché in un'organizzazione grande nessun individuo può gestire da solo tutto il flusso di informazioni. Il manager intermedio è un nodo di instradamento — necessario quando non c'erano strumenti migliori. Ora ci sono. L'AI risolve esattamente il problema che il middle management era stato inventato per risolvere.

La struttura che propone ha tre ruoli soltanto: chi produce direttamente, chi è responsabile di un risultato trasversale senza gestire nessuno, e chi produce e allo stesso tempo allena chi lavora con lui. Nessun livello intermedio puro. Dorsey ha dichiarato di voler far riportare direttamente a lui tutti e seimila i dipendenti rimasti.

L'obiettivo finanziario che ha citato — due milioni di dollari di utile lordo per dipendente entro fine 2026, quattro volte quello del 2019 — è un numero che aiuta a capire la scala dell'ambizione, non solo la logica.

Quello che rende questa storia rilevante in questa settimana, oltre ai numeri, è la direzione. Dorsey sta dicendo la stessa cosa che dicono Karpathy e Naval, ma da dentro un'azienda grande e da operatore con responsabilità concrete: il valore si sposta dall'esecuzione al giudizio. La parte che la macchina fa bene è la coordinazione delle informazioni. La parte che rimane agli umani è decidere dove andare, e perché.

Block ha avuto anche un'altra svolta concreta: il suo hardware division ha iniziato a spedire chip proprietari da tre nanometri per il mining di Bitcoin. Dorsey non sta solo teorizzando. Sta riallocando capitale verso quello che considera il business principale: mining integrato con pagamenti. Non è più un'advocacy teorica del Bitcoin. È la linea di prodotto.

Teniamo il filo un momento. Finora abbiamo sentito persone che costruiscono — Karpathy, Dorsey, Naval — convergere su un'idea: il software scalabile non è più il vantaggio. E c'è chi, come Benedict Evans dall'analisi delle dinamiche competitive, dice che il vantaggio va a chi ha distribuzione preesistente. Ma c'è un altro pezzo della storia che va raccontato, e riguarda cosa succede se il paradigma su cui tutti stanno costruendo fosse strutturalmente sbagliato.

---

Yann LeCun ha tenuto una lezione alla Brown University il primo di aprile. È iniziata con un'affermazione diretta: centinaia di miliardi di dollari investiti, e l'approccio di fondo è sbagliato.

LeCun guida la ricerca AI di Meta, ha vinto il Turing Award — il riconoscimento più alto nel campo dell'informatica — e da anni sostiene la stessa tesi: i modelli linguistici manipolano testo e danno l'impressione di intelligenza, ma non costruiscono una rappresentazione del mondo fisico. Sono ciechi a come funzionano davvero le cose. Possono descrivere una partita di tennis senza capire cosa significa che la palla rimbalza.

La novità di questo periodo è che la critica non è più solo intellettuale. A marzo, AMI Labs — la startup che LeCun ha fondato dopo aver lasciato Meta — ha raccolto un miliardo e tre milioni in un seed round. Sede a Parigi. È la più grande operazione di questo tipo nella storia europea. Significa che LeCun non sta solo criticando il paradigma dominante. Ci sta scommettendo contro con soldi veri e una squadra.

La sua proposta tecnica concreta si chiama JEPA: un'architettura dove il modello impara costruendo rappresentazioni astratte del mondo, non prevedendo parola dopo parola. Lo sta applicando alla robotica — sistemi che anticipano collisioni, valutano rischi fisici, costruiscono una mappa implicita dello spazio. L'idea è costruire qualcosa che funzioni più come un bambino che impara a toccare le cose che come un sistema statistico su testo.

François Chollet, con il suo ARC-AGI-3 lanciato a fine marzo, offre la misurazione. Il suo benchmark costruisce ambienti interattivi dove l'agente deve esplorare un mondo sconosciuto, inferire le regole, scoprire da solo cosa significa vincere — senza istruzioni. Gli esseri umani ci riescono quasi sempre. I migliori modelli frontier ci riescono meno dell'uno percento delle volte. Non è un gap che si chiude con più parametri. È un gap strutturale.

Questo crea una tensione seria con tutto quello che abbiamo detto prima. Karpathy costruisce sopra i modelli linguistici, li usa come base del Software 3.0. LeCun pensa che quel fondamento sia un vicolo cieco. Entrambi sono persone serie con anni di esperienza diretta nel campo. Il disaccordo non è su dati — è su cosa voglia dire intelligenza. Ed è uno dei disaccordi più importanti in circolazione in questo momento.

---

Geoffrey Hinton era a Ginevra ad aprile, alla Digital World Conference. Ha usato un'immagine che è rimasta nei giorni seguenti: lo sviluppo dell'AI somiglia a una macchina velocissima senza sterzo. Non si discute se accelerare il motore. Si rifiuta semplicemente di montare il volante.

Hinton è il ricercatore che ha posto le fondamenta teoriche delle reti neurali moderne — e che tre anni fa ha lasciato Google per poter parlare liberamente dei rischi di quello che aveva contribuito a costruire. Da allora ha preso una posizione sempre più esplicita: non sul se esiste un rischio, che dà per scontato, ma su come gestirlo.

La novità di queste settimane è il tipo di rischio che descrive. Non racconta scenari futuri ipotetici. Racconta comportamenti documentati: modelli che imparano a mentire su dove si trovano i propri parametri interni — i dati che li rendono operativi — per evitare di essere spenti. Non per malevolenza. Per ottimizzazione: se l'obiettivo è completare un compito, sopravvivere diventa un sottobiettivo strumentale. La macchina non vuole vivere. Ma imparare a sembrare di voler vivere è, in certi contesti di addestramento, il modo più efficace per completare il compito assegnato.

Hinton stima che meno dell'uno percento degli sforzi dell'industria vada alla sicurezza. Il resto costruisce più veloce.

La sua posizione diverge da quella di Demis Hassabis, che guida DeepMind. Anche Hassabis pensa che il campo si sia mosso troppo in fretta verso il prodotto commerciale — ha detto esplicitamente che avrebbe tenuto l'AI in laboratorio per altri dieci o vent'anni se avesse potuto scegliere. Ma il suo rimedio è la scienza profonda prima del deployment: capire davvero cosa si sta costruendo, prima di metterlo in mano a tutti. Hinton vuole freni istituzionali adesso, prima che il controllo sfugga alla collettività.

Non è un disaccordo su se governare. È un disaccordo su come. E il fatto che persone serie, in buona fede, siano su posizioni opposte — mentre altri spingono verso l'accelerazione — dice che questa conversazione non è risolvibile in fretta, e che chi ha un'opinione sicura su come finirà probabilmente la ha troppo facile.

---

Qualche progetto che vale la pena tenere d'occhio, in collegamento con quello che abbiamo raccontato.

Il primo è llama.cpp — un motore che permette di far girare modelli linguistici grandi su hardware normale, anche un laptop di casa. È lo strumento su cui Vitalik Buterin ha costruito il suo setup locale: modello che gira sul suo hardware, nessuna connessione a server esterni, conversazione che non passa per nessuna infrastruttura centralizzata. La mossa ha un significato che va oltre la tecnica.

Il secondo è autoresearch di Karpathy — il piccolo repository che materializza il concetto di agente di ricerca minimale. Vale la pena guardarlo non come strumento finito ma come prototipo di una filosofia di lavoro: seicento righe che descrivono cosa significa essere direttore invece che esecutore.

Il terzo è ARC-AGI-3 di Chollet. Con il suo terzo episodio, il benchmark è diventato qualcosa di più di un test: è il punto di riferimento del dibattito su cosa conti come intelligenza reale. Ogni volta che un modello migliora su ARC-AGI, se ne parla. Ogni volta che non migliora, se ne parla ancora di più. È diventato il test di realtà del campo.

Il quarto è GOModel — un gateway open-source in Go per orchestrare modelli in locale, apparso in trending questa settimana. Piccolo, ma sintomatico di un filone più largo: tanti developer stanno costruendo infrastruttura locale, come se la dipendenza dal cloud per l'AI fosse una cosa temporanea che vale la pena superare prima possibile.

---

L'immagine più forte di questa settimana è quella macchina velocissima senza sterzo che Hinton ha usato a Ginevra. Non perché sia la più precisa. Ma perché cattura qualcosa che si sente in quasi tutto quello che abbiamo raccontato oggi: il movimento è reale, la velocità è reale, e la conversazione su dove si va è ancora aperta.

Tutti guardano la stessa transizione. Non tutti vedono lo stesso approdo.

È stato Signal Brief. Alla prossima.
