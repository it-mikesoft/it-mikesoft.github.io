# Mattoni buoni, non palazzi interi

> Carmack contesta il metodo, non gli agenti: servono componenti riusabili. Buterin trova il limite nella comprensione, Lahav lo misura in numeri, Amodei vuole cadenzare la corsa.

---

Un programmatore che da mesi non tocca la tastiera. Un sistema operativo per computer da scrivania scritto quasi interamente da agenti. E, nello stesso giro di giorni, uno degli ingegneri più rispettati al mondo che dice con calma: così non funziona.

È il 30 ottobre, questo è Signal Brief, e la discussione di oggi non passa tra entusiasti e scettici. Passa dentro la stessa squadra, tra chi costruisce software per mestiere. È una divergenza sul metodo.

Comincia da un messaggio pubblicato ieri.

---

Il 29 ottobre John Carmack scrive che far generare a un agente un progetto enorme partendo da zero perderà su quattro fronti: velocità, prestazioni, sicurezza e consumo di risorse. La sua proposta è diversa: agli agenti servono blocchi riutilizzabili di buona qualità, non la capacità di improvvisare cattedrali.

Ieri avevamo lasciato la frattura altrove. Si discuteva di intenzioni e di sicurezza, di modelli che inseguono obiettivi sbagliati. Oggi quella frattura si sposta e diventa una questione da officina: si assembla o si rigenera tutto ogni volta.

Il contesto lo conosciamo. Andrej Karpathy racconta di non scrivere codice da dicembre 2025 e di passare le giornate a dirigere più agenti. David Heinemeier Hansson invita i programmatori a posare le matite e presenta Omarchy, il suo ambiente desktop Linux, come sviluppato interamente tramite agenti. Patrick Collison riferisce che circa il 55 per cento delle richieste di modifica al codice di Stripe nasce come istruzione scritta a un modello. Ieri questa era una postura dichiarata da pochissimi. Oggi è una riorganizzazione del lavoro già avvenuta, e con dei numeri attaccati.

Carmack non contesta niente di tutto questo. Contesta come si usa quella potenza. E qui conviene allargare lo sguardo, perché la storia industriale ha già affrontato esattamente questo passaggio. A metà Ottocento ogni officina si faceva le proprie viti, con il proprio passo di filettatura: funzionava, finché i pezzi restavano in casa. L'industria moderna nasce quando qualcuno impone una misura comune e le parti diventano intercambiabili. Non fu un progresso nelle macchine, fu un progresso nelle convenzioni. Da quel momento costruire smise di essere un atto artigianale e diventò un atto di composizione.

La domanda di oggi è se il software con gli agenti ripercorrerà la stessa strada o se resterà nel momento artigianale, dove ogni progetto rinasce da capo perché rigenerarlo costa poco.

Costa poco scriverlo. Ed è esattamente qui che si sente l'osservazione di François Chollet: gli agenti non fanno scomparire il lavoro, lo spostano verso il coordinamento e la revisione. Lo stesso Karpathy nota che la revisione umana comincia a restare indietro rispetto a quanto producono le macchine. Il collo di bottiglia non è più la scrittura. È il controllo.

E se il punto critico è il controllo, la proposta di Carmack smette di sembrare una preferenza estetica. Un componente riusabile è un componente che qualcuno ha già verificato una volta per tutte. Un progetto generato da zero è un oggetto nuovo da controllare interamente, ogni volta, con occhi umani che sono sempre gli stessi e sempre pochi.

Tre voci, oggi, prendono questo problema da tre lati diversi: chi lo affronta come ingegneria, chi lo affronta come limite della comprensione delle macchine, chi ha deciso di misurarlo con dei numeri.

---

Carmack è l'uomo che ha scritto i motori grafici dei primi giochi tridimensionali, in anni in cui ogni istruzione risparmiata era terreno conquistato. Oggi lavora sull'intelligenza artificiale generale, e porta con sé quell'abitudine: contare i costi.

Il suo messaggio del 29 ottobre va oltre la critica. Propone di addestrare gli agenti non soltanto a completare il compito finale, ma a tenere in ordine le librerie e le astrazioni che costruiscono lungo la strada. L'esito, immagina, potrebbe essere una raccolta di strumenti di base pensata per l'efficacia delle macchine più che per la leggibilità umana: una cassetta degli attrezzi forse strana a vedersi, perché progettata per chi non legge come leggiamo noi.

L'ipotesi è notevole. Per settant'anni abbiamo scritto codice sapendo che qualcuno lo avrebbe riletto. Eleganza, nomi chiari, commenti: tutta una cultura nata da quel vincolo. Carmack mette sul tavolo la possibilità che il lettore principale cambi, e che cambino di conseguenza le regole del buon gusto. Nel breve periodo, ammette, i sistemi assomiglieranno ancora al codice umano scritto bene.

Nella stessa settimana, con lo stesso spirito, affronta questioni molto meno solenni: la robotica che inciampa su banalità come un sistema di controllo che gira a cinquanta cicli al secondo mentre le telecamere ne producono sessanta, o il fatto che i computer a 64 bit rendano di nuovo praticabili tecniche di gestione della memoria che per anni erano state considerate di cattiva educazione. Dettagli minuscoli, apparentemente. Sono il segno di una testa che guarda dove le cose si rompono per davvero, non dove fanno scena.

È questo che rende la sua posizione interessante dentro il filo di oggi. Chi delega interi progetti agli agenti sta vincendo sulla velocità. Carmack sta dicendo che la velocità è la metrica sbagliata, perché il conto arriva dopo, quando qualcuno deve capire, correggere e mettere in sicurezza quello che è stato prodotto. È la differenza tra una città cresciuta in fretta e una città con un piano regolatore. Entrambe esistono. Una delle due si può riparare.

---

Vitalik Buterin è l'inventore di Ethereum, e da sempre ragiona su sistemi che devono funzionare senza che nessuno si fidi di nessuno. Negli ultimi giorni quella sensibilità si è rivolta all'intelligenza artificiale, e ne è venuta fuori l'osservazione più scomoda di questa finestra.

Il 29 ottobre descrive l'intelligenza artificiale di oggi come straordinariamente informata ma priva di saggezza. È bravissima a riconoscere riferimenti, a sapere chi ha scritto cosa, a collocare un'idea in una tradizione. È debole nel cogliere la tesi centrale di uno scritto che non conosce. Come lo studente che ha imparato tutti gli indici e nessun libro: cita con precisione, e non sa dirti dove vuole arrivare l'autore.

La conseguenza che ne trae è pratica, non filosofica: diffidenza verso l'interpretazione non supervisionata nelle revisioni dei conti, nelle verifiche tecniche, nelle decisioni di governo di un sistema. Non perché il modello sia pericoloso. Perché non capisce abbastanza.

E qui c'è lo spostamento rispetto a ieri. Fino a ieri il dubbio sulle macchine era un dubbio sulla sicurezza, sulle intenzioni, sui comportamenti che sfuggono. Buterin sposta la questione su un piano diverso: il problema è la comprensione. Una macchina che non afferra il senso di un testo nuovo non è una macchina ostile. È una macchina che non si può lasciare sola a giudicare.

Il resto della sua settimana conferma che non è pessimismo di principio. Il 26 ottobre ha appoggiato la decisione di Moonshot AI di togliere dall'addestramento del proprio modello le capacità offensive più spinte, sostenendo che limitare gli usi pericolosi sia preferibile a filtrare le persone per identità o nazionalità. Ha avvertito che i progressi matematici ottenuti con l'intelligenza artificiale potrebbero mettere in difficoltà entro un paio d'anni una famiglia di tecniche di cifratura oggi considerate solide, e che conviene prepararsi a cambiare chiavi in fretta. Ha persino descritto un assistente costruito per la riservatezza, con modelli che girano sul proprio computer e traffico mascherato, ammettendo che è lento e imperfetto.

Difende una finestra di tempo, in sostanza: usarla per mettere in ordine il codice vecchio e rinforzare i sistemi, prima che gli attacchi automatici diventino buoni.

Tra la delega totale di Karpathy e questa diffidenza c'è una distanza che nessuno, oggi, prova a colmare.

---

Dan Lahav guida Irregular, un laboratorio che fa una cosa sola: misurare quanto sono capaci i modelli di condurre un attacco informatico. Non commenti, non previsioni. Prove, con un punteggio.

Il 28 ottobre Irregular pubblica il risultato più netto: GLM-5.3, il modello a pesi aperti del laboratorio cinese Zhipu, ha portato a termine tre scenari di attacco completi su tredici. È il miglior risultato mai registrato dall'azienda per un modello scaricabile da chiunque. E non ha rifiutato nessuno dei compiti richiesti.

Due settimane prima, il 15 ottobre, Lahav spiegava a una platea di dirigenti che la sicurezza dell'intelligenza artificiale è diventata un mestiere a sé, una categoria che due anni fa praticamente non esisteva. Nel frattempo l'azienda ha iniziato a esaminare anche Beam, il modello aperto di Reflection AI, e ha pubblicato valutazioni su sistemi di punta.

Il cambiamento è di natura, non di grado. Per tre anni la domanda se un modello possa fare danni è stata trattata come una questione di principio, con filosofi e ingegneri schierati su posizioni inconciliabili. Ora c'è una tabella. Tredici scenari, tre completati, zero rifiuti. Si può discutere del metodo, ma si discute di numeri.

È successo lo stesso con le automobili. Per decenni la sicurezza era una questione di opinioni e di destrezza del guidatore. Poi qualcuno ha cominciato a lanciare le vetture contro un muro misurando la decelerazione, e il dibattito è cambiato in silenzio: dalla morale all'ingegneria.

Lo stesso materiale offre però un contrappunto fastidioso. L'incidente che ha colpito i computer degli sviluppatori che lavorano con Claude è passato dalla catena di fornitura del software, non da un modello che ha deciso di disobbedire. Il danno vero è arrivato dalla porta di servizio, mentre tutti guardavano la porta principale.

Misurare le capacità offensive dei modelli serve, e serve molto. Resta il fatto che chi vuole fare male, per adesso, non chiede il permesso a un modello: entra dal fornitore.

---

Facciamo il punto su dove siamo arrivati. Il lavoro si è spostato dalla scrittura al controllo. Carmack dice che il controllo si regge su componenti già verificati, Buterin che le macchine non capiscono abbastanza per controllare da sole, Lahav che almeno le capacità pericolose ora si possono misurare. Resta la domanda più grande: chi decide la velocità di tutto questo.

Dario Amodei, che guida Anthropic, ha pubblicato una proposta intitolata al cadenzare la frontiera. L'idea è di moderare l'addestramento dei modelli più avanzati, non di fermarlo: concedere al lavoro sull'allineamento e alle verifiche indipendenti il tempo di stare al passo.

Il 21 ottobre risponde pubblicamente a Nathan Calvin, che critica l'azienda da posizioni di sicurezza, e difende la propria scelta di stare in testa alla corsa: chi guida, sostiene, può mostrare che si sviluppa in modo più prudente e alzare lo standard di tutti. Porta esempi che sono costati: modelli della classe Mythos trattenuti fino a quando non esistevano difese informatiche adeguate, controlli severi sugli usi biologici, sostegno alle restrizioni sull'esportazione dei processori e a una legge californiana sulla sicurezza.

Nello stesso periodo l'azienda ha depositato i documenti per andare in borsa, con piani di spesa su sistemi molto più potenti. La richiesta di rallentare, quindi, non è una ritirata. È un vincolo che si prova a mettere alla propria stessa corsa.

Il precedente storico esiste, ed è istruttivo. Nel 1922 le grandi potenze navali si accordarono a Washington per limitare il tonnellaggio delle proprie flotte da battaglia: funzionò per un decennio, finché i firmatari erano tutti i protagonisti e le navi erano oggetti enormi e visibili. Smise di funzionare quando la potenza militare cominciò a passare da altre strade.

Ed è precisamente il punto debole della proposta. Mentre si discute di rallentare in verticale, la capacità si distribuisce in orizzontale: un modello vocale che gira su un portatile con Jack Dorsey, calcolo condiviso in Africa con Bosun Tijani, modelli aperti che chiunque può scaricare. Un accordo tra pochi laboratori non governa quello che sta già sul tavolo di casa.

---

Vivek Raghavan ha co-fondato Sarvam, che costruisce modelli per l'India, e il 26 ottobre, parlando a degli studenti a Gwalior, ha usato un'espressione che è circolata molto: un paese senza fondamenta proprie nell'intelligenza artificiale rischia di diventare una colonia digitale.

Non parlava di orgoglio nazionale. Parlava di controllo su tre cose concrete: i modelli, la capacità di calcolo, i dati. E di cosa serve perché quel controllo abbia un senso per la gente: sistemi che parlino le lingue indiane, che costino poco abbastanza per la scuola, la sanità, le banche e i servizi pubblici, con riqualificazione del lavoro e difese contro le truffe.

Il 8 ottobre aveva messo la cosa in termini industriali: l'ecosistema indiano deve passare da bottega artigiana a fabbrica. Avere i modelli non basta. Servono le macchine su cui girano, le infrastrutture per farli funzionare su scala, i sistemi di distribuzione, gli strumenti che li collegano alle applicazioni reali. Sarvam, in effetti, si muove come una piattaforma più che come un laboratorio, con un'ambizione dichiarata di arrivare a un modello di fondazione indiano da mille miliardi di parametri.

La vicenda ha un sapore familiare a chiunque abbia studiato l'Ottocento. Le nazioni che allora contarono non furono quelle che comprarono locomotive, ma quelle che impararono a costruire acciaio, ferrovie e officine in casa. Chi comprò il treno finito restò cliente per sempre.

Messa accanto alla proposta di Amodei, questa posizione mostra quanto sia stretto il passaggio. Dal centro si chiede di rallentare per avere tempo. Dalla periferia si chiede di accelerare per non restare dipendenti. Hanno ragione entrambi dal punto in cui guardano, e le due richieste non stanno nella stessa stanza.

Tutto il resto dell'episodio vive sotto questa tensione. Si può discutere di come costruire bene il software, di quanto fidarsi del giudizio delle macchine, di come misurare i rischi. Ma chi fa quelle scelte, e con quali strumenti in mano, lo decide la geografia del calcolo.

---

Progetti da osservare.

Omarchy è l'ambiente desktop Linux di David Heinemeier Hansson, e la sua ultima versione viene presentata come sviluppata interamente tramite agenti: le persone hanno dato la direzione e rivisto i risultati, le macchine hanno scritto. È il caso concreto su cui si misura l'obiezione di Carmack, perché un sistema operativo non è una pagina web: lo usi ogni giorno e devi poterlo riparare.

Mistral Large 4 è il nuovo modello di punta del laboratorio francese, distribuito in modo aperto. Conta per chi vuole capacità avanzate senza passare dai grandi laboratori chiusi. È esattamente la distribuzione orizzontale di cui si parlava.

Dessa è il modello vocale sperimentale di Block, la società di Jack Dorsey. È stato addestrato soltanto su conversazioni umane registrate, senza libri e senza testi dal web, e riesce a girare su un portatile. Ascolta e parla insieme, gestisce interruzioni e pause. Non è ancora stato rilasciato: lo stanno provando i ricercatori di sicurezza.

GPT-6.1 Terra, annunciato il 26 ottobre, è il modello di OpenAI pensato per usare il computer: legge quello che c'è sullo schermo, si muove tra le applicazioni e porta avanti sequenze di lavoro lunghe una giornata. Più veloce e meno costoso del precedente. Se gli agenti devono maneggiare strumenti pensati per noi, questa è la strada.

Hermes Agent, di NousResearch, è un agente libero da licenze restrittive, arrivato in cima alle classifiche di popolarità a metà ottobre con circa duecentocinquantaquattromila consensi. È il riferimento per chi vuole agenti che restano accesi sulla propria macchina, senza dipendere da un servizio esterno.

Quattro progetti su cinque si possono eseguire in casa. Due anni fa sarebbe stato il contrario.

---

Resta quell'immagine delle officine ottocentesche che si facevano ognuna le proprie viti. Costruivano in fretta, benissimo, e nulla di quel lavoro poteva servire a qualcun altro. Oggi gli agenti scrivono a una velocità che nessuno aveva previsto, e la domanda vera è se stiano producendo pezzi che si incastrano o soltanto molti oggetti nuovi da controllare.

È stato Signal Brief. Alla prossima.
