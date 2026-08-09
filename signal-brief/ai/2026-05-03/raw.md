# Chi verifica, governa

> Da Karpathy a Chollet, un'idea attraversa il dibattito AI di questa settimana: delegare senza capire costa. Il vero bottleneck non è la macchina, è il giudizio.

---

È il 3 maggio 2026, questo è Signal Brief. Nell'ultima settimana il campo dell'AI ha prodotto meno annunci di prodotto e più qualcosa di raro: un argomento condiviso. Un'idea che ha circolato in conferenze, post e paper, sotto forme diverse, in bocche diverse, con una domanda comune al centro. Chi capisce quello che la macchina produce? Chi è in grado di giudicare, e quindi di governare? Partiamo da una conferenza a San Francisco.

---

Fine aprile, San Francisco. Andrej Karpathy è sul palco della conferenza di Sequoia Capital — una delle principali società di investimento della Silicon Valley — e racconta qualcosa di personale.

Da dicembre scorso, dice, il suo rapporto con il codice è cambiato in modo radicale. Circa l'ottanta per cento di quello che produce viene scritto da agenti AI. Non ricordo l'ultima volta che ho corretto il codice dell'agente, dice. Ma il punto non è questo. Il punto è cosa fa lui nel frattempo. Karpathy non si è tolto di mezzo. Si è spostato sul giudizio: capire se quello che l'agente ha prodotto è giusto, se regge, se serve davvero.

Chiama questo passaggio "agentic engineering". Non vibe coding — che per lui è il sottogruppo irresponsabile della pratica, quello di chi delega senza capire — ma qualcosa di più esigente. Stessa potenza degli agenti, più rigore umano.

La distinzione sembra tecnica. Non lo è.

Pensate a quello che è successo nelle fabbriche europee quando è arrivata l'elettricità, alla fine dell'Ottocento. I macchinari a vapore già esistevano, ma l'elettricità li rese molto più potenti e capillari. Il lavoro fisico si ridusse. Ma non si ridusse il lavoro di chi doveva capire i macchinari, decidere come usarli, accorgersi quando qualcosa stava per rompersi. Quel lavoro di giudizio era rimasto lì — e in molti casi era diventato più importante, perché un errore adesso costava di più.

L'AI di questi mesi assomiglia a quel momento.

Simon Willison, un programmatore inglese che documenta l'AI con una sistematicità rara, ha scritto pochi giorni fa di quello che chiama "debito cognitivo". Ogni volta che deleghi qualcosa a un agente senza capire cosa fa, accumuli un debito. Non lo vedi subito. Lo paghi dopo — quando qualcosa va storto, quando devi spiegare una scelta, quando devi cambiare direzione. La macchina ha fatto il lavoro. Ma tu non sai come l'ha fatto. E questo, scrive Willison, è un costo che si paga.

François Chollet, il ricercatore che da anni costruisce test per capire se i modelli AI siano davvero intelligenti o molto bravi a memorizzare, ha appena presentato la terza versione del suo benchmark. La tesi implicita è la stessa: i modelli avanzano veloce nei compiti verificabili, dove il risultato è misurabile. Ma appena li metti in un ambiente nuovo, senza istruzioni, senza regole esplicite, si bloccano.

Chi verifica, governa. È il filo di oggi.

---

Karpathy non è solo un tecnico di primo piano. È una di quelle rare persone che sa spiegare cosa sta succedendo mentre succede — con la chiarezza di chi conosce l'interno dei sistemi e riesce allo stesso tempo a prendere distanza.

Ha costruito il sistema di visione di Tesla, ha insegnato le reti neurali su YouTube a milioni di persone, poi ha fondato una startup di educazione. Negli ultimi mesi si è concentrato su qualcosa di diverso: capire come un singolo ricercatore possa usare gli agenti AI per amplificare il proprio lavoro — non per sostituirsi, per amplificarsi.

Alla conferenza di Sequoia ha portato un esempio preciso. Aveva costruito una piccola app di cui andava fiero: si chiamava MenuGen, davi una foto di un menù da ristorante e lei lo traduceva e te lo spiegava. In un giorno, un modello multimodale di Google ha reso quell'app inutile — faceva la stessa cosa senza bisogno di un'applicazione separata. È la prima volta nella storia, dice Karpathy, in cui il tuo concorrente non è un'altra azienda. È l'AI stessa.

L'implicazione pratica è grande: il software come prodotto diventa sempre più fragile. Il vantaggio competitivo si sposta altrove — sulla distribuzione, sui dati, sulle relazioni, sull'ecosistema. Non sul codice in sé.

Ma il contributo più originale di Karpathy in questo periodo riguarda qualcosa di diverso: le basi di conoscenza costruite con i modelli. L'idea è semplice. Invece di usare l'AI per generare codice, la usi per costruire una wiki personale su un argomento — centinaia di articoli interconnessi, scritti dall'AI e aggiornati nel tempo, consultabili offline, senza dipendere da nessuna piattaforma commerciale. Una memoria esplicita e ispezionabile, contro la memoria opaca degli assistenti cloud.

Ha condiviso questo pattern come istruzioni — non come software, come idea. L'idea si diffonde; il codice lo genera la macchina. Anche in questo gesto c'è qualcosa di significativo: nell'era degli agenti, l'asset di valore è il pensiero, non l'implementazione.

Tutta la sua traiettoria degli ultimi mesi va in una direzione. Non come costruire cose con l'AI. Come pensare con l'AI. Il che riporta al punto di partenza: il bottleneck non è la generazione. È il giudizio.

---

Il primo aprile — non era un pesce d'aprile — Yann LeCun ha tenuto una lezione alla Brown University e ha detto, con la semplicità diretta che lo caratterizza: l'AI fa schifo.

I sistemi che manipolano il linguaggio, dice, ci illudono d'intelligenza. Sono bravi con le parole, ma davanti al mondo fisico restano fermi. Definisce questi modelli come un vicolo cieco per chi vuole costruire qualcosa che assomigli davvero a un'intelligenza generale. Un futuro con robot non può essere costruito su AI che non capisce la fisica e non anticipa le conseguenze delle proprie azioni.

LeCun ha lasciato Meta a inizio 2026 e ha fondato una propria azienda a Parigi, con un miliardo di dollari di finanziamenti. L'orizzonte dichiarato: nessun prodotto per almeno cinque anni. Sta costruendo qualcosa che chiama "world model" — un sistema che invece di prevedere la parola successiva in una frase, prevede quello che succederà nel mondo, in uno spazio di rappresentazioni astratte. Meno rumore, più causalità fisica. È una scommessa di lungo periodo, deliberatamente lontana dall'AI che si vende oggi.

Nello stesso periodo, dall'altra parte dell'oceano, Marc Andreessen — il venture capitalist che ha fondato Netscape negli anni Novanta e oggi guida una delle principali società di investimento in Silicon Valley — ha scritto qualcosa di diametralmente opposto. L'AGI è già qui. Semplicemente non è distribuita in modo uniforme. Citava William Gibson, il romanziere cyberpunk che diceva la stessa cosa del futuro in generale. Per Andreessen, il traguardo è già superato. I sistemi di oggi automatizzano già la maggior parte dei compiti economicamente rilevanti. Il software di qualità è diventato infinitamente disponibile. Chi lo tratta ancora come una risorsa scarsa da gestire con cura è in ritardo.

Tra questi due punti di vista non c'è mediazione possibile.

LeCun dice: quello che abbiamo oggi è un vicolo cieco, e per costruire qualcosa di serio servono decenni di lavoro su fondamenta diverse. Andreessen dice: siamo già arrivati, e chi non lo vede sta perdendo tempo.

Entrambi hanno argomenti seri. Entrambi agiscono come se avessero ragione — LeCun aprendo un laboratorio per il lungo periodo, Andreessen investendo come se il mercato fosse già maturo. La risposta la darà il tempo, non le dichiarazioni.

---

François Chollet lavora in Google da anni, ma la sua reputazione nel campo non viene dai prodotti di Google. Viene da un test che ha costruito nel 2019 e che da allora ha aggiornato due volte — ogni volta dopo che i modelli AI iniziavano a migliorare troppo sul test precedente.

Il principio del test è semplice: capire se un sistema AI sa risolvere problemi che non ha mai visto, con regole che nessuno gli ha mai spiegato. Come un puzzle visivo che un bambino di sei anni risolve in cinque minuti, ma che i modelli più avanzati al mondo riescono ad affrontare solo in una piccola percentuale dei casi.

La terza versione del test, appena pubblicata, introduce un elemento che le precedenti non avevano: l'interazione nel tempo. Non un problema singolo da risolvere, ma un ambiente da esplorare passo dopo passo, senza istruzioni, dove le regole le capisci esplorando. Come un videogioco senza manuale.

I numeri sono netti: gli umani ci riescono nel cento per cento dei casi. I migliori modelli attuali si fermano tra lo zero virgola trentasette e lo zero virgola cinquantuno per cento. Non è un piccolo gap. È un abisso.

I critici di Chollet dicono che sposta continuamente il traguardo — che ogni volta che i modelli si avvicinano, lui inventa qualcosa di più difficile. Lui risponde che è esattamente il punto. La vera intelligenza non ha un traguardo fisso. Se i modelli raggiungono ARC-AGI-1, vuol dire che l'hanno imparato da qualche parte durante l'addestramento. E allora non è più un test di intelligenza — è un test di memoria.

La coerenza di questo progetto è notevole. Chollet non sta cercando di essere difficile. Sta cercando di essere onesto. E la cosa più interessante è che i risultati gli stanno dando ragione: dopo anni di progressi sui test precedenti, i modelli si bloccano davanti a qualcosa che richiede genuinamente di esplorare il nuovo.

Torniamo un momento sul filo di oggi, perché potremmo esserci persi nell'interno dei sistemi.

Tre persone diverse, questa settimana, hanno detto la stessa cosa con parole diverse. Karpathy: il vantaggio è nel giudizio, non nella generazione. Willison: delegare senza capire accumula un debito che si paga. Chollet: i modelli saturano i test verificabili, ma non sanno ancora esplorare il nuovo davvero. Il comune denominatore è questo: l'AI avanza veloce dove l'output è misurabile, dove qualcuno può controllare se è giusto. Dove quella misura manca — e manca spesso — il progresso rallenta o si ferma. Tenete questa idea in testa mentre guardiamo Dorsey.

---

Jack Dorsey non è una persona nota per la pazienza con la burocrazia aziendale. Ha costruito Twitter partendo da zero, l'ha portata in borsa, poi l'ha in un certo senso abbandonata — lasciandola diventare quello che è diventata, prima che Elon Musk la comprasse.

Ora guida Block — che qualche anno fa si chiamava Square, nata come sistema di pagamento per i piccoli commercianti con lo smartphone. Qualche settimana fa ha tagliato il quaranta per cento del personale: da diecimila a seimila dipendenti. Un taglio enorme. E ha spiegato perché in un saggio scritto insieme a Roelof Botha di Sequoia.

La tesi è questa: le gerarchie aziendali sono un artefatto del passato. Sono nate perché qualcuno doveva coordinare il flusso di informazioni, distribuire le decisioni, tenere il quadro d'insieme in testa. Queste funzioni — dice Dorsey — ora le svolge l'AI meglio di qualsiasi manager intermedio.

La proposta concreta: tre soli ruoli nell'organizzazione. Chi fa il lavoro. Chi è direttamente responsabile di un risultato. Chi fa entrambe le cose e insegna agli altri. Nient'altro. Dorsey vuole portare tutti e seimila i dipendenti di Block a riportare direttamente a lui, con al massimo due o tre livelli di struttura.

È una visione radicale. Forse non funzionerà alla lettera — le organizzazioni hanno una fisica propria, e le gerarchie resistono. Ma il gesto conta: Dorsey sta usando Block come laboratorio per capire come deve essere fatta un'azienda nell'era in cui l'AI gestisce il coordinamento. Non come sarà tra dieci anni. Come deve essere adesso.

Internamente usano già un agente AI per gestire codebase obsolete e rispondere ai clienti. Le riserve di Bitcoin di Block si avvicinano a novemila unità. Ha partecipato alla presentazione di un documentario su Julian Assange con una proposta originale: distribuirlo in pay-per-view globale pagato in Bitcoin, accreditando gli acquirenti nel film stesso. Il tema ricorrente è lo stesso: Bitcoin come strumento contro la censura, non solo come investimento.

Tutto questo dipinge un profilo coerente. Dorsey non sta ottimizzando l'esistente. Sta costruendo qualcosa di diverso — dal punto di vista organizzativo, finanziario e tecnologico. Se funziona, potrebbe diventare un modello. Se non funziona, è comunque un esperimento che vale la pena guardare.

---

Quattro progetti da tenere d'occhio, scelti perché parlano direttamente al tema di questa settimana.

Il primo si chiama llama.cpp — un motore scritto in C++ che permette di far girare modelli linguistici direttamente sul proprio computer, senza cloud e senza connessione esterna. È il cuore dello stack locale che Vitalik Buterin ha descritto in un post recente sulla sovranità digitale: tieni il modello sul laptop, isola gli agenti, fa' in modo che ogni azione verso terzi richieda la tua approvazione esplicita. Il tuo bot, le tue regole.

Il secondo è il pattern LLM Wiki di Karpathy — non un software vero e proprio, ma un insieme di istruzioni che, dati a un agente di coding, costruisce una wiki personale su un argomento: articoli enciclopedici interconnessi, scritti e aggiornati dall'AI, consultabili offline. L'anti-tesi dei chatbot cloud: memoria esplicita che non dipende da nessuna piattaforma.

Il terzo è ARC-AGI — il progetto di Chollet. Con due milioni di dollari di montepremi nel 2026 e risultati che restano abissalmente lontani dalle capacità umane, è diventato il punto di riferimento più onesto per capire dove sono davvero i modelli. Non i test che vengono saturati in sei mesi, ma qualcosa di genuinamente difficile.

Il quarto è Omarchy — una distribuzione Linux curata da DHH, l'inventore di Ruby on Rails, costruita per chi vuole un desktop potente e modificabile senza dipendere da Apple o Microsoft. Non è per tutti. Ma dice qualcosa su dove stanno andando le persone che pensano seriamente alla propria autonomia digitale.

---

L'immagine che mi resta di questa settimana è quella della fabbrica elettrica dell'Ottocento: il macchinario che fa il lavoro pesante, e il capo officina che deve capire quando sta per rompersi.

Non è una storia di paura. È una storia di spostamento. Il lavoro cambia posto, non scompare. E chi sa ancora giudicare — non solo produrre — sarà quello che conta davvero.

È stato Signal Brief. Alla prossima.
