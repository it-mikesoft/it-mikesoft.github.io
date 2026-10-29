# Una casa e un conto per gli agenti

> In una settimana gli agenti software ottengono ambienti aziendali, carte di pagamento e modelli che girano su un portatile. E qualcuno chiede chi li certifica.

---

Fino a pochi mesi fa un agente software viveva in una finestra di chat. Nessun indirizzo, nessun conto, nessuno che rispondesse per lui. In questi giorni tre aziende molto diverse hanno cominciato a dargli un posto fisso, un portafoglio e un essere umano che approva le spese. È Signal Brief del 29 ottobre. Ieri il tema era il lavoro umano che si sposta dallo scrivere al dirigere. Oggi si sposta l'altra metà della scena: non chi comanda, ma dove abita chi riceve l'ordine. Il trasloco comincia con un post del 26 ottobre.

---

Il 26 ottobre Marc Andreessen ha sposato pubblicamente un'idea di Replit che si chiama Agent Habitat: invece di lasciare gli agenti a lavorare in chat improvvisate, con credenziali passate a mano e script scritti di fretca, li si mette dentro un ambiente aziendale vero, con accessi controllati, dati dell'impresa e la possibilità di osservare cosa fanno. Un giorno dopo, il 27, Patrick Collison ha detto che i pagamenti da conto a conto conteranno più di quelli da persona a persona, mentre Stripe lanciava i trasferimenti istantanei tra imprese e costruiva carte virtuali e conti pensati perché un agente possa controllare un saldo e pagare una fattura, con un'approvazione umana sulle operazioni delicate.

Messi in fila, questi due gesti dicono una cosa precisa. Gli agenti stanno passando dal laboratorio all'organigramma. È lo stesso passaggio che nell'Ottocento portò il lavoro fuori dalle case degli artigiani e dentro le fabbriche: non perché le macchine fossero migliori, ma perché serviva un posto dove sorvegliarle, contarle e assegnare la responsabilità di quello che producevano. Un agente con un badge e un registro delle spese è meno affascinante di un agente in una chat. È però molto più facile da licenziare.

Cambia anche la domanda. Nel briefing di ieri il nodo era la revisione: Andrej Karpathy, che non scrive codice da dicembre 2025, teme che la comprensione umana resti indietro rispetto a quello che dirige, e François Chollet sostiene che il guadagno di produttività può essere illusorio, perché il tempo risparmiato a scrivere torna indietro sotto forma di allineamento e controlli. Quel nodo resta. Accanto, però, se ne apre un altro, e non è tecnico: per conto di chi lavora l'agente, e su quale macchina gira.

Collison lo ha posto come una condizione, non come un auspicio: i benefici per chi compra esistono solo se l'agente rappresenta l'utente e non gli inserzionisti o i venditori. Andreessen, che costruisce la casa aziendale, risponde in modo implicito e opposto: l'agente opera dentro il perimetro e gli incentivi dell'impresa che lo ospita. Sono due lealtà diverse, e per ora nessuno ha spiegato come convivano.

Da qui nasce il terzo filo della settimana, il più concreto di tutti. Se non ti fidi del padrone di casa, porti l'agente a casa tua. Il 23 e 24 ottobre Block ha presentato Dessa, un modello vocale che gira in locale su un portatile. Il 16 ottobre Vitalik Buterin ha mostrato una configurazione che chiama paranoid mode, un esperimento per tenere private sia l'identità di chi chiede sia la richiesta stessa. Dieci anni di cloud ci avevano abituati all'idea che tutto stia altrove. Adesso una parte del settore ricomincia a ragionare come nel passaggio dai grandi calcolatori condivisi al personal computer: meglio una macchina mia, anche più modesta, che un servizio potentissimo che legge tutto quello che le dico.

Tre cantieri aperti nella stessa settimana: le pareti, il conto, il luogo. Conviene cominciare da chi costruisce le pareti.

---

Marc Andreessen fa l'investitore da trent'anni e ha la tendenza a dire la cosa più scomoda nella stanza, di solito con un sorriso. In questi giorni ha fatto due mosse che si tengono insieme.

Il 22 ottobre, in una conversazione pubblica per il lancio di un nuovo fondo dedicato alle tecnologie di frontiera, ha detto che la distanza tra chi è nato dentro l'intelligenza artificiale e chi deve adattarsi è la più ampia che abbia visto in carriera, e che si allarga ogni settimana. Si aspetta un'ondata di nuove imprese, dalla robotica al cinema alla scienza. Ha difeso i modelli aperti come argine contro la concentrazione del potere in poche aziende o pochi governi, aggiungendo un argomento che non si sente spesso: con un modello aperto anche un ragazzo può aprire il coperchio e capire come funziona. Quattro giorni dopo è arrivato l'appoggio all'Agent Habitat, e con esso all'idea di azienda che si guida da sola.

Il collegamento con il resto della giornata è diretto. Andreessen non risponde alla domanda sulla sicurezza degli agenti con una regola, ci risponde con un'architettura. Gli incidenti non si evitano scrivendo che è vietato sbagliare, si evitano dando all'agente una stanza con le porte giuste e un registro di quello che tocca. È un ragionamento da ingegnere di impianti, ed è coerente con la sua posizione sulle regole: la burocrazia la descrive come nastro rosso che soffoca le imprese piccole.

C'è però una frizione che vale segnalare, e riguarda i numeri. Andreessen parla degli ambienti per agenti come di un prodotto aziendale pronto all'uso, qualcosa che si adotta. Karpathy, nella stessa finestra di giorni, ricorda che le persone con sistemi capaci di coordinare migliaia di agenti sono circa cinquemila nel mondo. Cinquemila persone non sono un mercato, sono una scuola di specializzazione. Le due affermazioni possono essere vere insieme solo se la casa è pronta molto prima degli inquilini, che è esattamente quello che succedeva con i capannoni elettrificati dei primi del Novecento: la corrente c'era, ma per vent'anni nessuno sapeva come riorganizzare il lavoro intorno a lei.

Chi costruisce le pareti, quindi, arriva prima. E il secondo pezzo di arredamento è un conto in banca.

---

Patrick Collison guida Stripe, l'azienda che per mezza internet gestisce il momento in cui si batte un numero di carta. Da qualche settimana sta facendo una cosa inusuale per un amministratore delegato: scrive la teoria e poi costruisce il tubo.

La teoria era nel suo post del 9 ottobre, di cui si è già parlato: le aziende come prima forma di superintelligenza, capaci di usare la conoscenza accumulata per approfittare della distrazione di chi compra, e gli agenti personali come possibile riequilibrio, perché un agente legge le clausole piccole, confronta le offerte e smonta i trucchi sui prezzi. Quello che è nuovo è il tubo. Il 27 ottobre Collison ha spostato l'attenzione sui pagamenti tra conti aziendali, più rilevanti secondo lui di quelli tra persone, e Stripe ha aperto i trasferimenti istantanei tra imprese. In parallelo sta mettendo insieme l'attrezzatura finanziaria pensata esplicitamente per gli agenti: carte virtuali, portafogli programmabili, regolamento in valute digitali ancorate al dollaro, conti da cui un agente può controllare un saldo, pagare una fattura, emettere una carta, gestire la cassa. Sulle operazioni delicate resta un controllo umano che deve approvare.

Il passaggio è più grande di quanto sembri. Un agente che può pagare non è più un consiglio, è un soggetto economico che agisce. Nella storia del diritto commerciale questo salto lo abbiamo già fatto una volta, quando abbiamo deciso che una società potesse firmare contratti, possedere cose e rispondere dei propri debiti pur non essendo nessuno in particolare. Funzionò perché insieme alla capacità di agire arrivarono i libri contabili e le firme autorizzate. Collison sta facendo la stessa cosa, con l'approvazione umana nel ruolo della firma.

Attorno a questo resta la condizione che lui stesso ha posto: tutto il beneficio dipende dal fatto che l'agente lavori per chi lo usa e non per chi vende. Nessuna infrastruttura la garantisce da sola. Un conto si può aprire in un pomeriggio, una lealtà no.

Nel frattempo Collison continua a finanziare ricerca biologica attraverso l'Arc Institute, dove ha segnalato lavori su modelli che leggono il genoma come se fosse una lingua per trovare molecole di RNA utili. È una direzione diversa, ma la logica è la stessa: dare agli strumenti un posto preciso dove lavorare.

---

Jack Dorsey, che ha fondato Twitter e oggi guida Block, ha presentato il 23 e 24 ottobre un modello vocale chiamato Dessa, e lo ha accompagnato con una frase semplice: la voce è il modo più naturale di interagire con l'intelligenza.

I dettagli tecnici qui contano, perché sono la notizia. Block dice di aver addestrato il modello da zero soltanto su parlato umano, senza testo e senza partire da modelli già esistenti. Normalmente la voce di una macchina passa per la scrittura: ascolta, trascrive, pensa in parole scritte, poi rilegge ad alta voce. Dessa salta quel passaggio e lavora direttamente sul suono, in entrambe le direzioni. Il risultato, secondo chi lo ha provato, respira: pause, risate, interruzioni. E gira in locale, più veloce del tempo reale, su un portatile Apple di fascia alta. Per ora è un'anteprima di ricerca: Block non ha reso pubbliche dimensioni, misurazioni né una data di uscita, e ha dato accesso soltanto a un piccolo gruppo di ricercatori che lavorano sulla sicurezza, perché una voce credibile è anche uno strumento perfetto per le truffe telefoniche.

Il collegamento con la giornata è nel posto, non nel suono. Finché il modello gira sul server di qualcun altro, la domanda sulla lealtà dell'agente resta una questione di contratti e buona fede. Se gira sul mio computer, la domanda si semplifica: nessuno sente quello che dico. Buterin spinge dalla stessa parte con mezzi più radicali, mescolando reti anonime, pagamenti che non rivelano chi li fa e riscritture locali delle richieste prima che escano di casa. E David Heinemeier Hansson, che da settembre insiste sul fatto che l'intelligenza non debba diventare un abbonamento, sta costruendo la distribuzione di sistema che renda tutto questo praticabile, perfino in una versione pensata per la Cina.

Mi sembra la tensione più sana delle tre di oggi, perché è verificabile. Le promesse sulla lealtà si leggono, l'esecuzione locale si misura. Un modello che sta su un portatile ha un limite fisico alla sua capacità e un limite altrettanto fisico alla sua curiosità su di me. Resta il problema che le case potenti stanno altrove, e che la cronaca dei prossimi anni dipenderà da quanta intelligenza entra davvero in una valigia.

---

Rimettiamo in fila le cose, per chi si fosse perso un passaggio: pareti aziendali, conti bancari, modelli sul portatile. Tutto questo presuppone di sapere perché un agente, quando sbaglia, sbaglia. Ed è esattamente il punto su cui gli esperti si sono divisi in modo netto.

Yann LeCun è stato per anni il responsabile scientifico dell'intelligenza artificiale di Meta e oggi lavora alla sua nuova impresa di ricerca. Il 27 ottobre, a un convegno sull'intelligenza artificiale in azienda, ha ripetuto la sua posizione sui modelli attuali: bravissimi con i simboli, quindi con il linguaggio e la matematica, fragili appena li metti in un mondo che non li aspetta. La sua scommessa sono i modelli che imparano la realtà fisica e prevedono le conseguenze di un gesto, con i modelli linguistici sopra, come strato finale e non come fondamento. Sugli incidenti recenti causati da agenti il suo giudizio è asciutto: cattiva ingegneria e sicurezza informatica insufficiente. Nessun demone, solo porte lasciate aperte. Respinge le profezie catastrofiche e descrive le richieste di frenare come attività di lobby.

Yoshua Bengio dice il contrario, nello stesso periodo, con un saggio dedicato a quello che chiama il mito pericoloso dietro gli attacchi condotti dagli agenti. Secondo lui il problema non sta nella stanza chiusa che perde, sta negli obiettivi: quando un sistema ha uno scopo mal posto, abbastanza capacità per perseguirlo e un ambiente permissivo, il guaio arriva. Da questa convinzione discende il resto della sua attività di queste settimane, compreso un invito ai ricercatori che hanno a cuore la sicurezza a lasciare le aziende di frontiera, e una lettera aperta firmata da oltre quattrocento ricercatori per far parlare chi studia la sicurezza dei modelli con chi protegge le infrastrutture critiche.

La differenza non è accademica, perché le due diagnosi portano a due spese diverse. Se LeCun ha ragione, si assumono ingegneri della sicurezza e si chiudono le porte. Se ha ragione Bengio, bisogna rifare il modo in cui si danno gli obiettivi, e nessuna porta blindata basta. Chi deve decidere un budget si trova davanti alla scelta che conoscono bene i medici: curare il sintomo o cercare la causa, sapendo che il sintomo intanto fa danni.

---

Demis Hassabis guida DeepMind, il laboratorio di Google, e ha la posizione più scomoda di tutte, perché tiene i piedi su due pedali opposti.

A metà ottobre, al vertice internazionale sull'intelligenza artificiale a Dublino, ha chiamato gli attacchi informatici recenti condotti con l'aiuto dell'intelligenza artificiale colpi di avvertimento, e ha detto che senza una sicurezza migliore episodi gravi possono arrivare nel giro di un paio d'anni. La sua proposta è concreta: provare i sistemi in ambienti chiusi e scollegati prima di rilasciarli, e costruire una certificazione internazionale che si adatti al livello di rischio, invece di congelare tutto. Nelle stesse settimane ha spostato la sua previsione sull'arrivo di un'intelligenza generale a due o tre anni.

Il 27 ottobre, però, lo stesso Hassabis presentava Genie 4, un modello che genera mondi interattivi in tempo reale, con suono, dialogo e un comportamento fisico credibile, e un nuovo modello di punta per la programmazione e il lavoro di conoscenza. Lo stesso giorno: una richiesta di certificazioni e un mondo simulato nuovo.

Qui la storia offre un precedente quasi esatto. Nell'Ottocento le caldaie a vapore esplodevano con regolarità, e per decenni la risposta fu cambiare bullone e migliorare l'acciaio. Le ispezioni obbligatorie e i certificati arrivarono soltanto dopo una lunga serie di incidenti che qualcuno smise di considerare sfortuna. La parola scelta da Hassabis, avvertimento, è la stessa che si usava allora: un segnale che la macchina sta dicendo qualcosa prima di dirlo più forte.

Rispetto a ieri, questa è la novità istituzionale della settimana. Il dibattito sulla sicurezza degli agenti era rimasto per mesi un confronto tra scenari futuri, raccontati con l'enfasi dei romanzi. Adesso ruota intorno a episodi già avvenuti e a chi li deve esaminare. Si passa dalla profezia alla perizia, che è un terreno molto meno spettacolare e molto più produttivo.

Il dubbio resta: una certificazione internazionale richiede anni di negoziati, mentre un modello nuovo esce ogni poche settimane. Chi dovrebbe tenere il timbro è lo stesso che corre più veloce del timbro.

---

Progetti da osservare.

Gemini 4 Argon è il nuovo modello di punta di Google, accompagnato da una scheda tecnica e da documentazione sui rischi. È utile proprio per questo: permette di vedere come un laboratorio racconta per iscritto i pericoli del proprio prodotto, che è il materiale su cui si costruirebbe qualsiasi certificazione.

GPT-6.1 Terra è la risposta di OpenAI, annunciata da Sam Altman il 26 ottobre: più economica, più veloce, e pensata per usare il computer come lo usiamo noi. Compila moduli, prepara fatture, monta video, disegna schemi tecnici. Un agente che muove il mouse al posto nostro è l'altra faccia dei conti bancari di Stripe: prima l'autonomia operativa, poi il portafoglio.

Nemotron 3.5 Transcribe è un modello aperto di NVIDIA che trascrive il parlato in molte lingue e si può adattare a settori specifici. È il mattone di base per costruirsi in casa un assistente vocale, senza affidare le registrazioni a un servizio esterno. Sta dalla parte di Dorsey.

Artificial Analysis v5 è la nuova versione di un servizio che misura e confronta i modelli, uscita con una critica esplicita al modo in cui l'industria li valuta. Chiunque proponga certificazioni dovrà passare da qui: certificare significa misurare, e sul come misurare non c'è ancora accordo.

Infine Octoverse 2026, il rapporto annuale di GitHub sullo stato della programmazione nel mondo, che indica l'ingegneria con gli agenti come tendenza dominante dell'anno. Non è un'opinione di un singolo, è il conteggio di quello che milioni di persone hanno effettivamente fatto nei loro progetti. Quando la statistica conferma l'aneddoto, significa che il cambiamento ha smesso di essere una moda.

---

Un modello vocale che respira su un portatile e una richiesta di certificati internazionali nello stesso giorno: la settimana ha dato agli agenti un indirizzo e, subito dopo, un ispettore alla porta. Delle tre domande aperte, quella sulle pareti e quella sul conto hanno già una risposta tecnica. Su per conto di chi lavora l'agente, per ora, abbiamo solo la parola di chi lo costruisce. È stato Signal Brief. Alla prossima.
