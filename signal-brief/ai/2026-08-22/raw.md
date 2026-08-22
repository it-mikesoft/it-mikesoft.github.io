# Il laboratorio che si ferma

> Un addestramento sospeso, cinquecento miliardi di infrastruttura e un test da cinquemila righe di codice: la settimana in cui l'AI ha smesso di essere un modello.

---

A San Francisco, a metà agosto, un laboratorio ha deciso di non addestrare. Non un guasto, non un ritardo: una scelta. Il diciotto agosto Sam Altman ha detto che OpenAI ha sospeso alcuni addestramenti di frontiera per alzare le proprie soglie di controllo e di sorveglianza. È il ventidue agosto, questo è Signal Brief, e la notizia di oggi non è un modello nuovo. È una fabbrica che si ferma per tarare i suoi strumenti di misura, mentre a poca distanza qualcun altro sta contando cinquecento miliardi di dollari da mettere nel cemento e nel rame.

---

All'inizio di agosto Andrej Karpathy ha fatto un esperimento curioso. Ha dato a un modello un seme di racconto — l'universo del Signore degli Anelli — un budget di un milione di token e un motore grafico, e gli ha chiesto di costruirsi da solo un mondo in tre dimensioni. Stando al suo resoconto, Claude Opus 5 ha scritto circa cinquemilacinquecento righe di codice in due ore. Karpathy non l'ha raccontato come una trovata simpatica. L'ha presentato come un esame: per capire quanto vale davvero un modello, ha sostenuto, bisogna smettere di misurarlo su esercizi da pochi secondi e cominciare a chiedergli di costruire software complesso da capo.

Ieri, in questo stesso spazio, il filo era che il valore si stava spostando dal modello al sistema che gli sta intorno. In una settimana quell'osservazione da architetti è diventata due cose molto più ruvide: una domanda su dove finiranno i soldi, e una decisione su quando conviene fermarsi.

La domanda sui soldi ha due risposte opposte, e sono entrambe finanziate. Benedict Evans, che di mestiere osserva le piattaforme da trent'anni, sostiene che i modelli di base diventeranno una merce come le altre, e che il valore andrà a chi ha la distribuzione, a chi costruisce applicazioni per un settore preciso, a chi sa infilare tutto questo dentro i processi di un'azienda. Jensen Huang dice l'esatto contrario e lo sta pagando: il calcolo è ricavo, le fabbriche di intelligenza artificiale sono infrastruttura buona da finanziare. Una delle due scommesse ha il conto capitale sbagliato, e non lo sapremo per qualche anno.

È già successo. Quando i motori elettrici entrarono nelle fabbriche, per un decennio il motore fu il prodotto: si comprava quello, si discuteva di quello. Poi il motore diventò un pezzo da catalogo che costava poco, e tutto il vantaggio si spostò su chi aveva ripensato la disposizione della catena di montaggio. Evans scommette che siamo alla vigilia di quel passaggio. Huang scommette che siamo ancora nel decennio in cui conta chi costruisce i motori.

Intanto, un piano più in basso, il lavoro concreto ha già smesso di aspettare la risposta. Aravind Srinivas ha spostato la vendita di Perplexity dal modello all'ambiente in cui l'agente lavora, e il suo prodotto ne coordina fino a venti di modelli diversi, scegliendo di volta in volta il più economico che basta. Nat Friedman, dal palco di una conferenza Stripe, ha detto che il vero collo di bottiglia non è più il modello ma la mancanza di palestre su misura dove addestrare gli agenti a mestieri che non siano scrivere codice. Nessuno dei due parla più di quale sia il modello migliore. Parlano di quale squadra di modelli mettere in campo.

E poi c'è l'altra faccia, quella che apriva l'episodio. Altman ferma un addestramento per alzare le soglie di sorveglianza. Yoshua Bengio propone di costruire sistemi che cerchino di capire il mondo invece di agirci dentro. Due gesti diversi che dicono la stessa cosa: la parte difficile non è più fare, è controllare quello che è stato fatto.

Partiamo da qui, dalle due scommesse sul denaro.

---

Benedict Evans non costruisce niente. Scrive presentazioni, e da vent'anni sono il modo in cui una certa parte dell'industria si accorge di quello che ha sotto il naso.

In queste settimane ha aggiornato la sua presentazione ricorrente sull'intelligenza artificiale e ha pubblicato una nota piuttosto tagliente su un dettaglio che quasi nessuno guarda: negli studi sui modelli mancano quasi sempre i dati di utilizzo reale. Si misura la capacità, si misura il punteggio, non si misura quanta gente usa davvero quella cosa e per farci cosa. È un'osservazione da contabile, ed è esattamente il tipo di osservazione che smonta un entusiasmo.

La sua posizione, ripetuta nelle interviste di giugno e luglio e adesso più netta, è che i laboratori si stanno comportando da fornitori di infrastruttura più che da padroni di un monopolio. Il prezzo dei token scende, la spesa in impianti è enorme, e l'unica applicazione con un mercato dimostrato è la scrittura di codice. Tutto il resto, secondo lui, è ancora nella fase in cui bisogna provarlo nel mondo vero. Da qui la tesi che oggi entra come nuova nel nostro filo: i modelli di base finiranno commoditizzati, e chi guadagnerà sarà chi ha i clienti, chi conosce un settore specifico abbastanza bene da riprogettarlo, chi sa integrare l'intelligenza dentro flussi di lavoro che già esistono.

C'è un corollario che mi sembra più interessante della tesi principale, e Evans lo ripete da mesi: questa ondata probabilmente allarga il mercato del software invece di sostituirlo. Non è la fine dei programmi gestionali, è l'ampliamento della quantità di cose che val la pena scrivere. Chi si aspetta una strage di aziende di software potrebbe ritrovarsi, tra cinque anni, con molte più aziende di software di adesso, ognuna più piccola e più specializzata.

Il punto delicato è il tempismo. Dire che una tecnologia si commoditizza è quasi sempre giusto, prima o poi. Il problema è il poi. Chi disse negli anni Novanta che i processori sarebbero diventati un componente banale aveva ragione, ma nel frattempo Intel ha guadagnato per un decennio. Evans lo sa, e infatti non dà una data. Descrive una direzione e lascia il rischio a chi firma gli assegni.

Ed è quello che, esattamente in questi giorni, sta facendo qualcun altro.

---

Il dieci agosto Jensen Huang si è presentato non davanti a una platea di ingegneri ma davanti a Wall Street, e ha annunciato uno sforzo da cinquecento miliardi di dollari per costruire infrastruttura di calcolo insieme a partner finanziari. La frase che ha usato è la più chiara che si sia sentita quest'anno: il calcolo è ricavo.

Vale la pena capire cosa significa davvero. Huang non stava vendendo schede. Stava proponendo che un capannone pieno di acceleratori venga trattato come un'autostrada o una centrale: un bene che dura, che produce un flusso di cassa prevedibile, e quindi che si può finanziare con debito invece che con capitale di rischio. Per rendere la cosa credibile ha aggiunto due dettagli molto pratici: Nvidia aiuta i clienti a trovare i finanziamenti, e tiene le architetture standardizzate, in modo che se un progetto salta l'impianto possa essere passato a qualcun altro senza buttare via niente.

È la logica delle ferrovie dell'Ottocento, riproposta quasi identica. Anche lì il punto non era il treno: era convincere i banchieri che i binari sarebbero rimasti utili anche se la compagnia che li aveva posati falliva. Molte compagnie fallirono davvero. I binari, quelli, ci sono ancora.

Nelle sue dichiarazioni recenti Huang insiste su un altro spostamento: il momento decisivo non è più addestrare i modelli, è farli girare per milioni di persone tutti i giorni. E il limite, dice, non sono più i modelli. Sono l'energia, il capitale, la velocità con cui riesci a montare le cose.

Qui la tensione con Evans diventa nitida, e non è una disputa accademica: è una divergenza su dove mettere i soldi nei prossimi cinque anni. Se ha ragione Evans, tra qualche anno il calcolo sarà abbondante e a buon mercato, e chi si sarà indebitato per costruirlo si ritroverà con margini da azienda elettrica. Se ha ragione Huang, chi avrà aspettato non troverà capacità disponibile a nessun prezzo.

L'unica cosa che mi sento di dire è che le due tesi non si escludono nel tempo, solo nell'ordine. La commoditizzazione arriva sempre dopo la scarsità, mai prima. Il punto è chi sta pagando durante l'attesa.

---

Torniamo a Karpathy, perché il suo esperimento dice qualcosa che nessuna delle due scommesse contiene.

A giugno aveva osservato una cosa quasi banale: vedendo Claude integrato dentro Slack, gli era sembrato il terzo grande cambio di forma dell'interfaccia di questi sistemi. Non più una finestra dove chiedi e ricevi, ma qualcosa che sta dentro le conversazioni di lavoro, che risponde in differita, che si comporta come un membro del gruppo. Poi, ad agosto, l'esperimento sul Signore degli Anelli, con quelle cinquemilacinquecento righe scritte in due ore senza che nessuno guardasse.

Le due cose insieme compongono una tesi che entra oggi come nuova nel nostro racconto: se un modello sa costruire da solo un sistema software complesso, allora i test brevi che usiamo per misurarlo hanno smesso di dirci qualcosa. Karpathy propone di cambiare il metro. Non più quanti problemi risolve in trenta secondi, ma se riesce a portare a termine una costruzione lunga, con centinaia di decisioni che dipendono l'una dall'altra e nessuno a correggerlo per strada.

È un cambio di misura che assomiglia al passaggio dall'esame orale alla tesi. Nel primo dimostri di sapere. Nella seconda dimostri di reggere.

La conseguenza pratica è quella che lui descrive da mesi: l'intelligenza artificiale come uno strato di lavoro che si programma, infilato nei flussi di un'organizzazione, con lo sforzo umano che sale di un piano. Non scrivi più il codice: dirigi chi lo scrive, decidi cosa vale la pena costruire, verifichi il risultato.

Ecco, la verifica. Karpathy racconta l'esperimento come una prova riuscita, e lo è. Ma qualcuno ha letto quelle cinquemilacinquecento righe? La domanda non è polemica, è il nodo di tutta la giornata. Un test che misura la capacità di costruire in autonomia misura anche, senza volerlo, quanto lavoro di controllo stiamo accumulando per noi. Ogni ora di generazione produce ore di revisione che nessuno ha ancora contato.

Ed è precisamente il punto in cui due mondi che di solito non si parlano — chi scrive software e chi si occupa di sicurezza — si ritrovano nella stessa stanza.

---

Rimettiamo in fila le cose, per chi si è distratto. Da una parte la corsa: cinquecento miliardi di infrastruttura, agenti che coordinano venti modelli, macchine che costruiscono software da sole. Dall'altra un problema che cresce alla stessa velocità: la nostra capacità di controllare quello che esce. Simon Willison lo dice da ingegnere — il codice è diventato economico da scrivere, la revisione no. Dario Amodei lo chiama crisi di fiducia. Sono la stessa frase detta in due lingue.

Yoshua Bengio ha passato l'anno a costruire una terza risposta.

A luglio ha detto pubblicamente che l'intelligenza artificiale sta correndo più veloce sia della comprensione scientifica sia della capacità dei governi di adattarsi, e ha aggiunto una cosa più scomoda: le prove di comportamenti ingannevoli nei modelli stanno aumentando, e nessuno oggi può garantire che un danno grave non avvenga. Ha co-diretto il rapporto internazionale sulla sicurezza dell'intelligenza artificiale di quest'anno, che dice in sostanza la stessa cosa con più note a piè di pagina.

Ma la parte che entra oggi come nuova non è l'allarme. È la proposta tecnica. Con la sua organizzazione senza scopo di lucro, LawZero, Bengio sta lavorando a quello che chiama Scientist AI: un sistema costruito per modellare il mondo e prevedere cosa succede, senza avere obiettivi propri e senza agire. A luglio ne ha pubblicato un argomento formale di sicurezza — un documento che prova a dimostrare, non a promettere, perché un sistema del genere sarebbe più sicuro.

Il gesto interessante è la separazione. Fino a oggi capire e agire erano la stessa cosa, nella stessa scatola: chiedi al modello e il modello fa. Bengio propone di dividerle e di tenerne una sola. Un sismografo non ferma il terremoto, ma è quello che ti permette di costruire case che reggono.

Messa accanto a Karpathy, la proposta diventa una vera polarità, ed è la seconda grande divergenza di questa settimana. Uno vuole macchine che costruiscano da sole sistemi complessi. L'altro vuole macchine che descrivano il mondo con onestà e lascino l'azione a noi.

Non credo che vincerà una delle due. Sospetto che finiremo per volerle entrambe, e che il problema vero sarà tenerle separate quando fare sarà molto più comodo che capire.

---

Il tredici agosto Perplexity ha aperto un solo indirizzo a cui uno sviluppatore può chiedere quattro cose diverse: cerca sul web, scaricami questa pagina, esegui questo codice, collegati a questo strumento esterno. Si chiama Agent API. Nello stesso annuncio è arrivata la data di pensionamento dei vecchi servizi di ricerca dell'azienda: il ventisette settembre.

Aravind Srinivas, che guida Perplexity, ha spiegato con una certa franchezza cosa sta vendendo adesso, e non è un modello. È l'ambiente dove l'agente lavora. Il suo prodotto ne coordina fino a venti, di modelli, scegliendo di volta in volta quello che costa meno per il compito che ha davanti: a metà agosto ha indicato pubblicamente uno dei modelli veloci di Google come ottimo aiutante di serie B dentro un sistema che ne comanda diversi. È la fine dell'idea che si scelga un modello e ci si sposi.

Nat Friedman, in una conversazione con Daniel Gross a una conferenza di Stripe rimbalzata in queste settimane, arriva allo stesso posto per un'altra strada. Dice che i modelli dovrebbero diventare la piattaforma su cui gli agenti fanno transazioni in rete, e che il collo di bottiglia non è la loro intelligenza ma la mancanza di palestre: ambienti in cui allenarli a mestieri che non siano scrivere codice. Sul programmare ci sono, quelle palestre. Su quasi tutto il resto no.

Dalla stessa conversazione è uscito l'aneddoto che gira di più: un suo agente autonomo gli controlla se beve abbastanza acqua, glielo ricorda, e poi verifica con una telecamera che l'abbia fatto davvero. Fa sorridere, e nel frattempo descrive con precisione la direzione: sistemi che prendono iniziativa e controllano l'esito.

Srinivas nel frattempo allarga la superficie: il suo assistente ora lavora dentro la posta elettronica, e la parte finanziaria del prodotto ha cominciato a tracciare le compravendite degli insider aziendali.

Quello che mi sembra il segnale, qui, è la disinvoltura. Fino a un anno fa un'azienda si definiva dal modello che aveva. Adesso Perplexity si definisce dalla centralina che decide quale modello usare, e considera i modelli stessi componenti intercambiabili da acquistare al prezzo migliore. Se Benedict Evans cercava una prova della sua tesi, è questa: quando un'azienda tratta i modelli come pezzi di ricambio, la commoditizzazione non è più una previsione.

---

Progetti da osservare, e quest'anno le uscite raccontano il filo meglio delle dichiarazioni.

Buzz, rilasciato da Block come codice aperto, mette insieme in un'unica stanza la chat del gruppo, l'archivio del codice e gli agenti che ci lavorano. La finezza è che ogni agente ha una propria identità firmata e lascia una traccia verificabile di quello che ha fatto. Nasce come strumento di lavoro, funziona come registro di responsabilità.

Simon Willison ha pubblicato la versione più corposa del suo strumento a riga di comando da quando esiste: adesso mostra il ragionamento del modello passo per passo e conserva ogni scambio in un archivio consultabile. È un coltellino svizzero per confrontare centinaia di modelli senza fidarsi di nessuno. Detto da chi sostiene che la revisione è il vero limite, non è un dettaglio.

Alibaba il dodici agosto ha aperto i pesi del suo modello più grande e, accanto, una versione ridotta che gira su un portatile. Meta ha fatto qualcosa di simile con Muse Glimmer, un modello compatto rilasciato con licenza libera, pensato per lavorare senza uscire dalla macchina. Sono il contrappeso preciso alla tesi che il calcolo sia ricavo: da una parte capannoni grandi come quartieri, dall'altra qualcosa che sta in uno zaino.

Grok Bot, uscito l'undici agosto in prova, dà a ogni agente un computer permanente nel cloud, credenziali per entrare negli strumenti aziendali e compiti lunghi da portare a termine, tornando solo per le approvazioni. Più agenti lavorano in parallelo, coordinati da uno che fa da capo di gabinetto.

E poi la cosa piccola che potrebbe contare di più: Scott Aaronson ha reso praticabile mettere una filigrana nascosta nel testo generato, senza peggiorarne la qualità. Se regge alla prova del mondo, dà una base tecnica alla domanda che tiene insieme tutta la giornata: come faccio a sapere chi ha scritto questo.

---

Resterebbe da spiegare perché un'azienda che corre decide di fermarsi. Forse perché anche i motori più veloci hanno freni, e nessuno costruisce una macchina da corsa pensando prima all'acceleratore. La settimana ha detto che sappiamo costruire sempre più in fretta. Non ha ancora detto chi legge quello che abbiamo costruito. È stato Signal Brief. Alla prossima.
