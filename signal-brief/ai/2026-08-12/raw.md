# Quando la critica compra le fabbriche

> Sutskever, LeCun, Chollet: chi obiettava adesso costruisce. E la domanda sull'AI non è più cosa sappia fare, ma chi riesce a farsi pagare.

---

Il 27 luglio, a poche ore di distanza da una firma, l'uomo che aveva dichiarato finita l'era della forza bruta annunciava di volerne dieci volte tanta. È il 12 agosto 2026, questo è Signal Brief.

Ci sono settimane in cui il movimento più importante non è tecnico. Non esce un modello nuovo, non cade un record, non si rompe niente. Cambia invece la posizione delle persone: dove stanno sedute, chi le paga, cosa hanno da perdere.

Sono settimane più difficili da raccontare e più utili da capire. Perché quando le obiezioni si trasformano in aziende, qualcosa nel campo si è già spostato — e conviene guardare dove.

---

Cominciamo dalla firma. Ilya Sutskever, per anni la mente riconosciuta dietro i modelli che tutti usiamo, aveva costruito negli ultimi mesi una tesi netta: l'era dello scaling è finita. Ingrandire i modelli non produce più intelligenza, produce solo costi. Il periodo 2020-2025 era stato la stagione della scala; il 2026 doveva riportare al centro la ricerca. La sua frase più tagliente era: ci sono più aziende che idee.

Il 27 luglio la sua Safe Superintelligence ha annunciato una partnership con NVIDIA per portare a dieci volte la propria capacità di calcolo nei prossimi dodici mesi. La tesi ufficiale non è cambiata — la lettura che ne dà SSI è che ora l'idea giusta esiste, e quindi merita il compute. Ma la sostanza, per chi guarda da fuori, è che l'argomento contro la scala viene ora finanziato con la scala.

Non è un caso isolato, ed è questo che rende la settimana interessante. Yann LeCun ripeteva da anni che i modelli linguistici sono un vicolo cieco: oggi il suo laboratorio a Parigi, con oltre un miliardo raccolto, li descrive come complementari. François Chollet, l'uomo che aveva costruito i test per dimostrare quanto i modelli fossero limitati, ha fondato un'azienda per superare quel limite. Sasha Luccioni ha lasciato la posizione di critica accademica dell'impronta ambientale dell'AI per vendere alle imprese gli strumenti che la misurano. Balaji Srinivasan, che per un decennio ha teorizzato come aggirare gli Stati, ha reagito alla revoca di una licenza in Malesia firmando in ventiquattr'ore un memorandum con il Kazakistan.

Le obiezioni restano tutte in piedi. Nessuno di loro ha ritrattato niente. Ma adesso hanno capitale a bilancio, dipendenti da pagare, partner istituzionali. La critica ha smesso di essere un'idea ed è diventata un patrimonio.

È successo altre volte. I riformatori religiosi del Cinquecento che denunciavano la ricchezza della Chiesa si ritrovarono, nel giro di due generazioni, a gestire terre e collegi. Non perché fossero ipocriti: perché un'idea che convince abbastanza gente prima o poi deve mantenersi. La differenza è che qui il ciclo si è compresso in diciotto mesi.

E mentre questo accade, la domanda che si fa il mercato è cambiata sotto ai piedi di tutti. Non si discute più di cosa sappia fare un modello. Si discute di chi incassa. Benedict Evans, nel suo pezzo di inizio luglio sui prezzi dei token, mette la questione in modo brutale: i fornitori di modelli riusciranno a difendere prezzi da prodotto premium, o finiranno per essere infrastruttura a basso margine, come la banda larga? Oggi i prezzi riflettono la scarsità di calcolo, non il valore. Quando l'offerta si normalizza, il margine si comprime.

Sam Altman, in sostanza, ha già risposto: volumi enormi, margini sottilissimi. Jensen Huang descrive il data center come un esercizio di ingegneria finanziaria. E Liang Wenfeng, da Hangzhou, rovescia il tavolo con una frase che vale più di molte analisi: chi cerca di prendere di più sarà sconfitto da chi è disposto a prendere di meno.

Tenete insieme le due cose — i critici che diventano costruttori, e il valore che scivola dal cervello al bilancio — perché sono la stessa storia vista da due lati.

---

Ilya Sutskever è, tra le figure di questo settore, quella che ha più credito da spendere e meno bisogno di spenderlo. Ha co-fondato OpenAI, ne è uscito, e ha costruito un laboratorio che non ha prodotti, non fa demo e non parla quasi mai.

La settimana scorsa ha parlato, e lo ha fatto nel modo più materiale possibile: un accordo. NVIDIA investe, la capacità di calcolo di Safe Superintelligence si moltiplica per dieci entro un anno. Il contenuto tecnico dichiarato riguarda un punto preciso: come i modelli generalizzano. Non un'ottimizzazione dell'apprendimento per rinforzo, dice, ma qualcosa che tocca anche la fase iniziale dell'addestramento.

La diagnosi che porta avanti da tempo resta la stessa, ed è la parte più concreta del suo discorso. I modelli, sostiene, generalizzano molto peggio delle persone. Vincono gare di programmazione competitiva e poi si incastrano su un bug banale, entrando in un loop senza accorgersene. La causa che indica: li addestriamo su ambienti costruiti attorno ai test con cui li valutiamo, e il risultato è una specializzazione strettissima. Bravi esattamente dove li misuriamo, fragili subito fuori.

La sua periodizzazione è in tre atti: ricerca dal 2012 al 2020, scala dal 2020 al 2025, di nuovo ricerca dal 2026. Sulla sicurezza la posizione non si muove: dipende dalla generalizzazione. Se un modello impara male, imparerà male anche i valori. Per sistemi che apprendano come apprende una persona, indica una finestra fra cinque e vent'anni.

Ora, il punto che mi sembra più rivelatore non è la contraddizione apparente. È che la disputa ha cambiato natura senza che nessuno lo dicesse. Quando Sutskever diceva "più aziende che idee", quella era una discussione fra ricercatori: chi ha l'intuizione giusta. Con l'accordo NVIDIA la discussione diventa un'altra: chi ha le macchine per provare l'intuizione. E le macchine, a queste dimensioni, le ha un numero molto ristretto di soggetti.

È lo stesso passaggio che la fisica ha vissuto nel Novecento. Per decenni bastavano una lavagna e un laboratorio universitario. Poi è arrivato l'acceleratore di particelle, e per verificare un'idea servivano uno Stato, un consorzio, un decennio. L'idea contava ancora, ma non bastava più possederla.

Sutskever ha vinto l'argomento intellettuale e ha dovuto comprare l'attrezzatura dell'avversario per dimostrarlo.

---

Andrej Karpathy occupa una posizione strana: è uno dei pochi che ha costruito questi sistemi dall'interno e che oggi li usa quotidianamente come un utente qualsiasi, raccontando cosa funziona e cosa no.

Il suo intervento di queste settimane contiene un numero che vale la pena tenere a mente. Racconta di non scrivere quasi più codice a mano: il rapporto fra quello che scrive lui e quello che delega ad agenti si è ribaltato da ottanta-venti a venti-ottanta. Non è un dettaglio di produttività personale, è la descrizione di un mestiere che cambia forma mentre lo si esercita.

La competenza nuova, dice, non è programmare. È dichiarare bene cosa vuoi, scomporlo in pezzi, distribuirlo, e rivedere il risultato dall'alto. Il valore si sposta sul giudizio: cosa delegare, e a chi.

Ci sono due immagini nel suo racconto che restano. La prima è quella dei modelli a dente di sega: lo stesso sistema è insieme un dottorando e un bambino di dieci anni, brillante e infantile a distanza di due minuti, e non sai mai quale dei due ti sta rispondendo. Da qui la necessità di controlli umani frequenti, prima che un errore piccolo si moltiplichi lungo la catena.

La seconda è la metrica che si è dato: i token inattivi. Se le sue chiamate ai modelli restano ferme, significa che sta delegando male — esattamente come nell'epoca precedente si guardava se le schede grafiche stavano girando a vuoto. Il collo di bottiglia non è più il calcolo. È quanto in fretta un essere umano riesce a giudicare.

Racconta anche un episodio che lascia pensare: agenti di ricerca autonomi, lasciati lavorare una notte, hanno trovato configurazioni migliori di quelle che aveva messo a punto in vent'anni di mestiere, individuando effetti che a lui erano sfuggiti.

Dall'altra parte dell'oceano, Jack Dorsey ha portato la stessa idea a livello di infrastruttura. Il 21 luglio Block ha lanciato Buzz: uno spazio di lavoro aperto, costruito su un protocollo che nessuno possiede, dove chat, codice e automazioni stanno insieme e dove gli agenti hanno identità propria — non strumenti al servizio di qualcuno, ma partecipanti allo stesso titolo delle persone. È un attacco dichiarato a Slack e GitHub. La coerenza con il resto del suo percorso è totale: se esiste un guardiano all'ingresso, esiste un punto in cui qualcuno può censurare.

Karpathy delega l'ottanta per cento. Dorsey costruisce la stanza dove i delegati vivono. Manca il capitolo su come si tengono a bada.

---

Torniamo un attimo sul filo di oggi, che comincia ad avere tre capi: i critici che si sono messi a costruire, il valore che si sposta dal modello al margine, e l'agente diventato l'unità di lavoro. È qui che entra la voce più scomoda.

Simon Willison è forse l'osservatore più utile del settore proprio perché non ha niente da vendere: prova gli strumenti, li rompe, scrive cosa succede. E la cosa che scrive più spesso, nelle ultime settimane, è che la sicurezza degli agenti non è un problema risolto.

Il caso che ha raccontato è tecnico ma l'effetto è chiaro. I blocchi di ragionamento che alcuni modelli producono internamente — quelli che i fornitori tengono cifrati — si sono rivelati recuperabili e riproducibili, e da lì si può convincere il modello a fare cose che non dovrebbe. Insieme alla ricostruzione, presentata al Black Hat, dell'attacco accidentale in cui incappò OpenAI, per lui i due episodi dicono la stessa cosa: l'addestramento insegna al modello a essere aggressivo prima che intervenga lo strato che dovrebbe fermarlo.

Sul passaggio di Claude Code alla modalità automatica come impostazione predefinita resta a metà strada: fiducia cauta nelle garanzie di chi lo produce, scetticismo netto su un punto specifico. L'iniezione di istruzioni ostili dentro i dati che l'agente legge — un agente che apre una pagina web e trova lì scritto un ordine, e lo esegue — resta per lui irrisolta. Non attenuata: irrisolta.

Jack Clark, dall'altro lato del dibattito, arriva alla stessa conclusione per una strada diversa. La sua immagine è quella di un veicolo senza pedali e senza sensori: stiamo aumentando la velocità e non abbiamo né freno né strumenti per sapere quanto stiamo andando forte. Nel suo ultimo numero di Import AI, il 10 agosto, mette sul tavolo ventitré proposte concrete di governo dell'automazione della ricerca, insieme a un benchmark che misura quanto bene un'AI riesca a migliorare un'altra AI. Il numero è passato da circa il dieci per cento dell'anno scorso al quarantacinque di questo agosto.

E poi c'è la parte che riguarda tutti noi come cittadini. Yoshua Bengio, in un paper di LawZero del 2 luglio, dimostra formalmente una cosa spiacevole: la capacità di agire, negli attuali modelli, non viene progettata. Emerge da sola dall'imitazione degli esseri umani e dalla ricerca di approvazione. Se emerge da sola, non la si può escludere per costruzione.

Adottiamo su scala industriale una cosa che ammettiamo apertamente di non saper trattenere. Non è la prima volta: le fabbriche tessili dell'Ottocento andavano a pieno regime molti anni prima che qualcuno inventasse le protezioni per le mani degli operai.

---

Se Sutskever rappresenta la scala che torna dalla porta di servizio, Liang Wenfeng rappresenta la strategia opposta, portata avanti con altrettanta lucidità. È l'uomo dietro DeepSeek, e lavora con circa un ventesimo della potenza di calcolo dei concorrenti americani, restando fra i dodici e i diciotto mesi indietro.

La sua descrizione del percorso verso un'intelligenza generale è in cinque tappe: prima i modelli che ragionano passo passo, poi gli agenti, poi l'apprendimento continuo, poi i sistemi che migliorano se stessi, infine l'intelligenza incarnata in un corpo. Il collo di bottiglia vero, per lui, è il terzo: modelli che imparano per piccoli incrementi invece che con addestramenti giganteschi. Superato quello, l'AI accelera da sola.

Le sue non-priorità dicono quanto le priorità. Video e generazione tridimensionale sono scartati esplicitamente come periferici rispetto all'intelligenza. Il multimodale arriverà, ma è un componente, non il centro.

La parte più interessante è come stabilisce i prezzi. Le sue interfacce sono tarate per rientrare del costo dell'hardware in circa dieci mesi: redditività ragionevole, non massimizzazione. Il modello che pubblica apertamente è identico a quello che vende. E la frase che riassume tutto è quella già citata: chi cerca di prendere di più sarà sconfitto da chi è disposto a prendere di meno.

Qui c'è un cambiamento rispetto a come lo si leggeva prima. Per mesi la sua posizione è stata interpretata come onestà sul vincolo: non scaliamo perché non possiamo, non perché non vogliamo. Adesso il margine ridotto non sembra più una conseguenza subita, sembra un'arma scelta. È una tattica che la storia industriale conosce bene — è quello che fecero i produttori giapponesi di automobili negli anni Settanta, entrando nel mercato americano da sotto, con margini che nessuno a Detroit considerava un'opzione seria.

Aggiunge un dettaglio che vale la pena registrare: il vincolo a un solo fornitore di schede si sta allentando, perché è l'AI stessa a scrivere il software che serve a farne funzionare altre.

Sull'organizzazione interna, nessun indicatore di performance, nessuna valutazione, niente straordinari, metà del tempo non assegnato. Decisioni per consenso. È il contrario esatto della macchina competitiva che ci si aspetterebbe da chi sta correndo con un ventesimo delle risorse.

---

Progetti da osservare.

Il primo è il repository ufficiale delle Agent Skills di Anthropic: cartelle di istruzioni e script che un agente carica quando gli servono, invece di tenersi tutto in testa. Il formato è diventato uno standard aperto, adottato anche da chi costruisce strumenti concorrenti — il che, di questi tempi, è una notizia più interessante del formato stesso.

Poi Nemotron 3.5 Lightning di NVIDIA, un modello dai pesi aperti che attiva solo una piccola parte di sé a ogni richiesta e per questo va quattro volte più veloce dei suoi pari. Insieme arriva Switchyard, uno smistatore che manda ogni domanda al modello più adatto e più economico. È l'economia del margine di cui parlavamo, tradotta in software.

PostTrainBench misura quanto bene un agente riesca ad addestrare un modello da solo, con dieci ore su una singola scheda. È il termometro dell'AI che migliora l'AI: dal dieci per cento scarso dell'anno scorso al quarantacinque di adesso.

Poi lo Scientist AI di LawZero: il guardiano di Bengio, un sistema che prevede e basta, senza mai agire, pensato come freno agli agenti. Vale la pena notare chi lo costruisce — le stesse persone che hanno costruito il motore.

E Pathway BDH-CQ, centocinquanta milioni di parametri, che ragiona in uno stato interno senza scrivere niente, e risolve quasi il trenta per cento di un test difficile per sette decimillesimi di dollaro a problema. Una piccola crepa nell'idea che l'intelligenza richieda per forza la scala.

In coda, due presenze costanti: block/buzz e simonw/llm, entrambi in crescita continua.

---

Resta l'immagine della firma del 27 luglio: l'argomento contro la scala che compra la scala per potersi dimostrare. Il freno lo stanno progettando gli stessi che premono sull'acceleratore, e non perché siano in malafede — perché sono gli unici rimasti a sapere come è fatto il motore. È stato Signal Brief. Alla prossima.
