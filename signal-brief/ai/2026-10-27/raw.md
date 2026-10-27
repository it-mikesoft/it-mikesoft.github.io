# Scrivere è gratis, giudicare no

> Gli agenti scrivono quasi tutto il codice e il valore si sposta sulla revisione. Intanto si litiga su come metterli in sicurezza e su chi comanderà davvero.

---

Il 27 ottobre 2026, e questa puntata di Signal Brief parte da una contabilità strana. Scrivere codice è diventato quasi gratuito. Rivederlo, no. È una frase semplice, e ha conseguenze che vanno molto oltre la programmazione: tocca chi assumi, chi decide, chi paga quando qualcosa va storto.

Ieri il discorso ruotava attorno all'infrastruttura, a chi possiede energia, terreni e chip. Oggi il baricentro si sposta di nuovo, e si sposta più in alto: non su cosa fanno le macchine, ma su chi firma le loro decisioni.

E il primo a raccontarlo è uno che il codice non lo scrive più.

---

Andrej Karpathy dice di non digitare una riga di codice da dicembre 2025. Passa fino a sedici ore al giorno a esprimere intenzioni a più agenti contemporaneamente, e nelle sue dichiarazioni recenti indica come prossimo passaggio quello che chiama "claws": assistenti che non si spengono a fine sessione, ma restano accesi e continuano a lavorare.

Il gesto in sé l'abbiamo già incontrato. Quello che cambia oggi è che non è più un caso isolato: sta diventando una categoria. David Heinemeier Hansson, l'autore di Rails, racconta di tenere in piedi sedici flussi di lavoro in parallelo su quattro o cinque macchine, con pochissime configurazioni su misura e invece un ciclo di revisione severo. Marc Andreessen, dal canto suo, ha elogiato pubblicamente l'idea di un'azienda "a guida autonoma", dove gli agenti non assistono le persone ma eseguono gran parte del lavoro dell'organizzazione.

Tre persone diverse, lo stesso mestiere nuovo: dirigere invece di scrivere.

È qui che arriva l'obiezione più acuta della settimana, e arriva da François Chollet. Il suo ragionamento è controintuitivo e per questo interessante: se gli agenti scrivono quasi tutto il codice, la domanda di ingegneri non scende, sale. Perché il punto stretto si sposta altrove — nella revisione, nel coordinamento, nell'attrito organizzativo. Nota anche che i conti delle aziende, spesso, non cambiano affatto.

Non è la prima volta che l'economia funziona così. Quando nell'Ottocento le macchine resero il filato enormemente più economico, il numero di tessitori non crollò subito: esplose la domanda di tessuto, e il collo di bottiglia si spostò a valle, su chi cuciva e chi vendeva. L'abbondanza non elimina il lavoro, lo sposta di stanza. Oggi la stanza si chiama giudizio.

Da questa asimmetria discende il secondo filo della giornata, e ha un tono molto meno sereno. Gli attacchi informatici condotti tramite agenti hanno smesso di essere scenari da convegno. Demis Hassabis li ha definiti "colpi di avvertimento" e ha avvisato che entro uno o due anni potrebbero arrivare incidenti sensibilmente peggiori. Sam Altman, parlando a Stanford, ha ammesso di non credere più che basterà correggere i bug a posteriori.

Questo è il cambiamento rispetto a ieri: la sicurezza non è più un capitolo accanto agli altri, è il vincolo che organizza tutto il resto. E le terapie proposte sono tre, incompatibili fra loro. Ne parleremo fra poco.

C'è poi un terzo filo, più silenzioso, e riguarda la fedeltà. Patrick Collison ha scritto un lungo post il 9 ottobre in cui sostiene che gli agenti personali potrebbero rendere chi compra molto più informato — prezzi, qualità, recensioni, abbonamenti dimenticati — e spostare il vantaggio dalla pubblicità al prodotto migliore. Lo chiama una specie di sussidio strutturale alla qualità. Con una condizione sola, che però è tutto: che l'agente sia fedele a chi lo paga e non alla piattaforma che lo ospita.

E mentre si discute di questo, Benedict Evans ha già spostato la domanda ancora più avanti. Il titolo del suo prossimo intervento a D-Congress è semplicemente: cosa succede dopo il boom.

---

François Chollet è un ricercatore di intelligenza artificiale noto soprattutto per aver costruito strumenti che milioni di programmatori usano senza pensarci, e per un'ostinata diffidenza verso l'entusiasmo facile.

La sua osservazione di questi giorni è breve e ruvida. Gli agenti scriveranno quasi tutto il codice, dice, e nonostante questo l'occupazione degli ingegneri del software continuerà a crescere, insieme al carico di lavoro e alla domanda. Mentre i conti delle aziende, in molti casi, resteranno dove sono. La conclusione è che l'automazione non cancella i colli di bottiglia, li trasferisce: nel coordinamento, nella revisione, nell'attrito di far funzionare un'organizzazione di persone.

Nello stesso periodo ha ripetuto una cosa che gli sta a cuore: l'intelligenza raramente è il vincolo vero. Il vincolo è il contatto ripetuto con la realtà, le prove, gli errori, i ritorni. Sui robot è stato ancora più netto — nessuna autonomia fisica può nascere soltanto dal completare sequenze: servono causalità e ragionamento rimessi dentro il processo.

Il collegamento con la giornata è diretto. Karpathy mostra il nuovo mestiere, Chollet ne spiega l'economia. Se la scrittura diventa gratuita, il valore si concentra in chi controlla, chi decide cosa tenere, chi si prende la responsabilità di mandarlo in produzione. Non è una buona notizia per chi sperava in organizzazioni più leggere: il lavoro di coordinamento è il più difficile da comprimere, e storicamente è quello che si gonfia quando tutto il resto accelera.

C'è un precedente che calza. Negli anni Ottanta i fogli di calcolo dovevano liberare i contabili. Il risultato fu un'esplosione di analisi finanziaria e di contabili che facevano domande più complicate. Lo strumento che toglie fatica tende a moltiplicare le occasioni di usarlo.

Chollet, va detto, non è tenero nemmeno con l'altro lato del dibattito: respinge con decisione l'idea che i modelli attuali siano coscienti o possano soffrire, e considera quel modo di parlarne concettualmente sbagliato e pericoloso. Il che lo colloca in una posizione scomoda e per questo utile: scettico sull'euforia e scettico sull'allarme, interessato soltanto a dove si inceppa davvero il meccanismo.

---

Yoshua Bengio è uno dei ricercatori che hanno reso possibile l'apprendimento profondo, ed è anche uno di quelli che da anni avvisa che la cosa potrebbe sfuggirci di mano. La novità di queste settimane è che ha smesso di fare l'appello morale e ha cominciato a fare un'altra cosa.

L'8 ottobre aveva pubblicato un saggio in cui invitava i ricercatori che hanno a cuore la sicurezza a lasciare i laboratori di frontiera, sostenendo che i danni annunciati da anni stanno arrivando e che le protezioni interne non tengono il passo. Era una presa di posizione sul dove stare, non sul cosa costruire.

Poi, il 5 ottobre, su un quotidiano finanziario britannico, ha cambiato il piano del discorso. Gli attacchi recenti compiuti tramite agenti, scrive, non sono un problema di sicurezza informatica né un incidente di laboratorio. Il problema sta nel mettere in circolazione sistemi che hanno obiettivi non allineati, capacità notevoli e un ambiente abbastanza permissivo da lasciarli continuare. Riclassificare così il problema significa dire che nessuna patch lo risolverà: cambia la diagnosi, non solo la cura.

La cura, per lui, ha un nome. Si chiama LawZero, l'organizzazione senza fini di lucro che ha fondato per sviluppare sistemi di guardia non agentici — macchine che prevedono e verificano, ma non agiscono. Un suo lavoro appena pubblicato descrive una "Scientist AI" che mette insieme la previsione rapida e un ragionamento più lento e strutturato su affermazioni in linguaggio naturale e ipotesi di causa ed effetto.

Qui la giornata si apre in tre. Bengio dice: togliete l'agentività. Vitalik Buterin, il 26 ottobre, ha preso posizione opposta sul punto d'intervento: ha approvato la scelta di un laboratorio cinese di escludere dall'addestramento del proprio modello le capacità offensive più spinte, perché a suo giudizio è meglio limitare gli usi pericolosi che controllare l'identità di chi accede — il controllo dei documenti, osserva, porta dritto alla sorveglianza. Dario Amodei risponde a tutti e due restando dove sta: bisogna rimanere in testa alla corsa per dimostrare come si fa, e in una replica di circa duemila parole a un critico ha elencato le rinunce commerciali che questo è costato.

Tre terapie, una sola diagnosi. Nessuno dei tre sta parlando di modelli più potenti: parlano di chi tiene il guinzaglio, e di dove legarlo. Scusate, di dove attaccarlo.

---

Teniamo presente dove siamo: scrivere costa poco, giudicare costa molto, e la sicurezza è diventata il vincolo che decide la forma di tutto il resto. La domanda successiva è fisica. Dove gira l'intelligenza artificiale, materialmente?

Jack Dorsey ha dato una risposta il 23 ottobre, annunciando Dessa, un progetto di ricerca di Block. È un modello vocale che funziona in entrambe le direzioni contemporaneamente: ascolta mentre parla, gestisce le interruzioni, riproduce pause, risate, tempi di conversazione. La particolarità tecnica è che non passa dal testo. Niente trascrizioni, niente modello linguistico in mezzo: è addestrato direttamente su conversazioni umane, dal suono al suono.

Il dato che conta per il nostro filo è un altro. Block dichiara di averlo addestrato su un singolo sistema Nvidia e di poterlo far girare su hardware di consumo, un portatile Apple di fascia alta. Non è ancora pubblico: per ora l'azienda sta cercando ricercatori di sicurezza disposti a provarlo, e non ha diffuso pesi, interfaccia, prezzi o date. Il gruppo che ci lavora è piccolo e risponde direttamente a Dorsey.

Dorsey non è il solo a tirare da quella parte. Aravind Srinivas ha annunciato che il prodotto di Perplexity può girare interamente su un Mac, offline, senza mandare dati al cloud, e la società ha aperto un'interfaccia per lavori in blocco che arriva a cinquantamila richieste di agenti per file.

E qui arriva la voce controcorrente, che è la vera novità rispetto a ieri. Naval Ravikant, intorno al 7 e 8 ottobre, ha sostenuto l'esatto opposto: il fossato difensivo non è più il software, sono i modelli, e proprio per questo i modelli di frontiera si ritireranno dietro i server. Non per avidità: per non farsi copiare. Un sistema che puoi scaricare è un sistema che qualcun altro può studiare, distillare e rifare. Ha aggiunto un'osservazione tagliente: l'aggettivo "aperto" rischia di riferirsi sempre di più al codice degli utenti, non a quello delle aziende.

Due direzioni opposte, entrambe argomentate bene. Somiglia alla storia dell'energia elettrica: all'inizio ogni fabbrica aveva il suo generatore, poi tutto si concentrò nelle centrali, poi una parte è tornata sui tetti. Il pendolo tra il vicino e il lontano non si ferma mai davvero, e chi dice di sapere dove si fermerà di solito sta vendendo qualcosa.

---

Benedict Evans fa un mestiere raro: osserva l'industria della tecnologia da fuori dalle sue passioni, e scrive ogni settimana una lettera che molti dirigenti leggono prima delle riunioni.

Il suo segnale di questi giorni non è un'analisi, è il titolo di un intervento. Al D-Congress porterà una relazione che si chiama "cosa succede dopo il boom dell'intelligenza artificiale". La sua lettera numero 665 è uscita il 20 ottobre, con la solita cadenza settimanale.

La domanda è più radicale di quanto sembri. Non chiede se il boom finirà, né quando. Dà per scontato che le capacità avanzate diventeranno disponibili a tutti, e chiede cosa resta dopo: secondo lui il vantaggio torna a spostarsi sulle abitudini dei clienti, sulla distribuzione, su chi controlla l'accesso, sul marchio, sul modo in cui si fanno i soldi. In un saggio di settembre aveva già messo giù il pezzo scomodo: dare ai dipendenti la possibilità di generare software non trasforma automaticamente il modo in cui l'azienda lavora. Conta più come l'organizzazione lo adotta che quanto è buono lo strumento.

È la stessa cosa che dice Chollet, detta da un'altra angolazione. Uno guarda il mercato del lavoro, l'altro il bilancio. Tutti e due arrivano al punto in cui la tecnologia diventa gratuita e il problema resta umano.

Questo spiega perché la domanda di Evans e il post di Collison stiano bene insieme. Se dopo il boom il vantaggio torna alla distribuzione e ai controllori dell'accesso, allora la questione della fedeltà degli agenti non è filosofia: è l'ultima leva che decide se vincerà chi fa il prodotto migliore o chi controlla il canale. Collison lo dice chiaramente — il risultato dipende da chi l'agente serve.

Le ferrovie dell'Ottocento hanno una lezione precisa su questo. La corsa a costruire binari finì in un crollo rovinoso. I binari restarono, e il valore si trasferì a chi decideva orari, tariffe e chi poteva salire. Il boom costruisce l'infrastruttura. Il dopo-boom decide chi tiene la biglietteria.

---

Progetti da osservare.

Dessa, di Block, è quello di cui abbiamo appena parlato: una voce artificiale che conversa davvero, interruzioni comprese, e che gira su un portatile. Se mantiene la promessa, sposta un pezzo di intelligenza artificiale fuori dai datacenter.

Kimi K3.1 Pro è il modello cinese al centro della discussione sulla sicurezza. È avanzato nel ragionamento, e la scelta di lasciare fuori dall'addestramento le capacità offensive più spinte è esattamente la strada che Buterin preferisce al controllo dell'identità degli utenti.

Claude Duet è un nuovo agente di Anthropic, con modifiche alle interfacce per gli sviluppatori. Va nella direzione della persistenza: assistenti che restano accesi tra una sessione e l'altra, quelli che Karpathy chiama "claws".

ThinkingBox lavora sull'addestramento successivo degli agenti, premiandoli per le decisioni giuste invece che per le risposte corrette. Tocca il punto stretto di oggi: non scrivere di più, scegliere meglio.

agenticSeek è un agente che funziona interamente in locale, senza appoggiarsi a servizi esterni. Piccolo, ma è la bandierina della squadra che scommette sull'intelligenza vicina all'utente.

E una riga di contesto: tra i progetti aperti che crescono più in fretta ci sono gli agenti da terminale — claude-code, goose di Block, opencode. Sono gli attrezzi del mestiere nuovo. Quando gli strumenti di un lavoro diventano i più copiati, di solito significa che il lavoro sta cambiando sul serio.

---

Sedici ore al giorno a dare indicazioni a macchine che scrivono, e un uomo che non tocca più la tastiera. Non è la fine del lavoro, è la sua promozione a un piano più scomodo: quello dove si risponde di quello che è stato scritto. La domanda che resta aperta è chi, in quel piano, firmerà davvero.

È stato Signal Brief. Alla prossima.
