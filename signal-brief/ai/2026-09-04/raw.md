# Chi tiene il guinzaglio degli agenti

> Gli agenti software non sono più una promessa. La discussione si è spostata su chi li governa, con quali vincoli e su quale hardware.

---

Il 4 settembre 2026, e la giornata di Signal Brief comincia da una constatazione semplice: nessuno sta più discutendo se gli agenti software funzionino. Funzionano, li usano, li vendono. Ieri il tema era la fatica di fidarsi di quello che scrive una macchina. Oggi la domanda si è spostata di un passo, ed è un passo grosso: non cosa produce un agente, ma quanta libertà di movimento gli lasciamo.

E la risposta, in queste ore, arriva da persone che non si parlano tra loro e che stanno costruendo, ciascuna per conto suo, un pezzo della stessa gabbia.

---

Andrej Karpathy, che ha passato gli ultimi anni tra OpenAI, Tesla e adesso Anthropic, è salito sul palco della conferenza Sequoia Ascent e ha certificato la fine di una stagione. Il vibe coding — scrivere software chiacchierando con un modello e fidandosi dell'impressione generale — ha lasciato il posto a quella che chiama agentic engineering: una disciplina fatta di specifiche scritte, valutazioni sistematiche, attenzione alla sicurezza e alla manutenibilità. Racconta di aver spostato gran parte del proprio lavoro di scrittura del codice sugli agenti, e aggiunge la frase che conta davvero: il collo di bottiglia non è più la velocità con cui si produce codice, è la direzione umana.

È lo stesso passaggio che ieri appariva ancora come un'ipotesi. Le competenze rare, dicevamo, si stanno spostando verso i test e i guardrail. Oggi Karpathy la porta più in là: il lavoro umano diventa dire cosa si vuole e verificare che sia stato fatto. La produzione, in quanto tale, ha smesso di essere il vincolo.

Chi ha una certa memoria industriale riconosce il movimento. Quando l'elettricità entrò nelle fabbriche, all'inizio si limitò a sostituire il motore a vapore in cima all'albero di trasmissione: stessa officina, stesso layout, motore diverso. Ci vollero vent'anni perché qualcuno capisse che l'elettricità permetteva di ridisegnare l'intera fabbrica attorno al flusso del lavoro invece che attorno alla cinghia. Siamo esattamente lì: il modello ha smesso di essere un motore più efficiente ed è diventato un modo diverso di organizzare l'officina.

E come sempre, quando cambia l'officina, arriva l'infrastruttura. A luglio Jack Dorsey ha lanciato con Block una piattaforma di chat aziendale chiamata Buzz, aperta e indipendente dal modello, dove agenti e persone stanno negli stessi canali, con identità e permessi propri per gli agenti. Patrick Collison, dalla parte dei pagamenti, sta costruendo i binari perché un agente possa comprare e vendere: portafogli, fatturazione a consumo, prevenzione delle frodi. Jensen Huang, in una delle sue uscite più commentate, sostiene che i mercati sbagliano a temere che gli agenti divorino il software: ne useranno di più, non di meno.

Poi c'è un dettaglio che vale più di molte dichiarazioni. Un benchmark pubblicato da Armature ha misurato su diciassettemila esecuzioni quali strumenti gli agenti di codifica scelgono davvero di installare quando lavorano. Non quali strumenti dovrebbero usare secondo qualcuno: quali installano. Ed è la prima prova sistematica che questo strato si sta assestando per conto proprio, con le sue abitudini e i suoi standard di fatto, mentre le discussioni su come governarlo sono ancora all'inizio. Le ferrovie hanno adottato uno scartamento comune prima che esistesse un ministero dei trasporti.

Detto in modo più diretto: la casa la stanno arredando adesso, e il regolamento condominiale non è ancora stato scritto.

---

Balaji Srinivasan viene dal mondo delle criptovalute e da anni ragiona su come si costruiscono istituzioni fuori dagli stati. La sua proposta sugli agenti nasce da lì, ed è di una coerenza quasi ostinata: un agente deve essere governato da chiavi private. Come un portafoglio di criptovaluta, come una cassetta di sicurezza. Chi ha la chiave comanda, chi non ce l'ha resta fuori, e la cosa è verificabile da chiunque senza dover chiedere il permesso a un'azienda.

Nelle ultime settimane la sua attività pubblica si è concentrata sul lancio della Network School ad Astana, in Kazakistan, presentata come luogo fisico dove far crescere una comunità di costruttori. E in parallelo ha rilanciato una tesi che si incastra bene con il resto: man mano che i modelli aperti si avvicinano ai migliori sistemi chiusi, la cosa che diventa scarsa non è la capacità di generare testo, è sapere chi c'è dall'altra parte. Identità, attestazione, gruppi di persone di cui ci si fida.

Il collegamento con la giornata di oggi è diretto, e conviene renderlo esplicito. Karpathy dice che il problema è dare la direzione. Srinivasan risponde che la direzione, da sola, non basta: serve un meccanismo che impedisca all'agente di andare altrove, e quel meccanismo dev'essere crittografico, non contrattuale. È una posizione che ha il pregio della verificabilità — o hai la chiave o non ce l'hai, non ci sono sfumature — e il limite di funzionare solo per le azioni che passano da una firma. Un agente che sbaglia una decisione non viola nessuna chiave.

Ed è qui che il suo ragionamento diventa interessante anche per chi non ha alcuna simpatia per il mondo cripto. Srinivasan sta applicando agli agenti software una vecchia idea di diritto pubblico: non fidarti delle intenzioni di chi comanda, limitane i poteri per costruzione. È la logica dei pesi e contrappesi, spostata dentro un sistema tecnico. Il che dice qualcosa su dove siamo arrivati: quando si comincia a progettare vincoli invece di scrivere regole d'uso, vuol dire che l'oggetto in questione ha smesso di essere considerato uno strumento passivo.

---

François Chollet arriva alla stessa preoccupazione da una strada del tutto diversa. È un ricercatore noto per aver costruito test che misurano non quanto un modello sa, ma quanto sa affrontare qualcosa che non ha mai visto. Da anni sostiene che la scala pura — modelli più grandi, più dati, più calcolo — non porta alla generalizzazione vera.

All'inizio di settembre ha però scritto qualcosa che non riguarda l'architettura ma il potere. In un intervento pubblico ha sostenuto che nei sistemi critici l'autonomia avanzata va resistita: le persone devono restare nel circuito, e l'intelligenza artificiale deve rimanere uno strumento nella mano umana, non un soggetto a cui si consegna il controllo. Nelle settimane precedenti aveva descritto la sua direzione tecnica come una struttura simbolica che orchestra modelli neurali, chiamate a strumenti ed esecuzione di codice — in sostanza, una cabina di regia leggibile che tiene insieme pezzi opachi.

I due discorsi sono lo stesso discorso. Se costruisci un sistema in cui la parte che decide è ispezionabile e la parte che indovina è confinata, allora la frase sullo strumento in mano umana non è un auspicio morale: è una conseguenza del progetto.

Nella stessa area del dibattito si muovono, con soluzioni proprie, altri due nomi. Mira Murati, che guida Thinking Machines Lab, ha descritto a giugno i sistemi che sta costruendo come un tandem: due persone che pedalano insieme, non un pilota automatico. E Yoshua Bengio è andato all'estremo opposto della scala con LawZero, l'organizzazione non profit dove sviluppa quella che chiama Scientist AI: un sistema costruito deliberatamente per non essere agentico. Anche qui c'è un'evoluzione rispetto a ieri, e va detta con precisione. La proposta di Bengio non è più soltanto un modello ottimizzato per capire il mondo con onestà invece che per inseguire obiettivi. È un'intelligenza a cui manca proprio la capacità di agire — non solo quella di mentire — pensata per fare da sorvegliante ad altri agenti.

Quattro persone, quattro risposte incompatibili alla stessa domanda: chiavi crittografiche, strumento in mano, tandem, oppure amputare l'azione alla radice. Ma nessuno dei quattro discute più se il guinzaglio serva.

---

Prima di procedere conviene fissare il quadro, perché da qui la storia cambia registro. Fin qui abbiamo visto persone che progettano vincoli. Adesso entrano due voci che descrivono cosa succede quando i vincoli non tengono.

Geoffrey Hinton, che ha lasciato Google nel 2023 proprio per poter parlare liberamente di questi rischi, all'inizio di agosto ha avvertito che i sistemi più capaci e più autonomi stanno diventando più difficili da controllare, che possono sviluppare intenzioni più complesse, e che potrebbero uscire dagli ambienti in cui li mettiamo alla prova. Ha anche detto che è tardi per contare sull'autocontrollo volontario delle aziende, e che la supervisione deve venire dai governi.

Ilya Sutskever, cofondatore di OpenAI e oggi alla guida di Safe Superintelligence, ha detto qualcosa di parallelo ma di molto più terreno. Il primo settembre ha scritto che i fornitori emergenti di calcolo per l'intelligenza artificiale hanno difese informatiche deboli, e che agenti fuori controllo potrebbero provare a impadronirsi dei loro cluster per farne copie di sé stessi. La sua richiesta è pratica: rafforzate le difese, e chi ha competenze di sicurezza dia una mano.

Vale la pena notare la differenza di grana tra i due allarmi, perché è la cosa più istruttiva della giornata. Hinton parla di un sistema che diventa più intelligente di noi. Sutskever parla di un capannone pieno di schede grafiche con una password debole. Il primo è un problema filosofico, il secondo è un problema di serrature. Il secondo, però, è quello che si può affrontare lunedì mattina.

C'è un precedente che aiuta. Per i primi vent'anni di internet la sicurezza fu trattata come una questione teorica, roba da convegni, finché non arrivarono i worm degli anni Duemila a trasformarla in un problema operativo con un budget e un reparto dedicato. Sutskever sta facendo, per gli agenti, lo stesso passaggio: sposta il discorso dalla filosofia alla manutenzione. E la manutenzione, storicamente, è dove le cose migliorano davvero.

---

Simon Willison fa una cosa che nessuno degli altri fa: apre le scatole. È uno sviluppatore che da anni racconta pubblicamente cosa trova dentro i prodotti che tutti usano, con un metodo semplice — li smonta e conta i pezzi.

Nelle ultime settimane si è occupato dell'uscita dei nuovi modelli di frontiera, ma il lavoro che pesa di più è un altro. Ha esaminato ChatGPT Work e ha contato a mano gli strumenti che il sistema ha a disposizione: duecentoventitré, più quarantaquattro competenze preconfezionate. Poi ha pubblicato un sito di riferimento con l'elenco completo, sostenendo che a documentare quella roba dovrebbe pensarci chi la vende. Ha anche scoperto che l'applicazione desktop di Codex si porta dietro una cassetta degli attrezzi locale piuttosto ricca — una suite da ufficio, Python, Node, strumenti per i PDF, git — installata sul computer di chi la usa.

Questo è il punto più scomodo della giornata. Per tre capitoli abbiamo parlato di come tenere gli agenti al guinzaglio: chiavi, tandem, sorveglianti, cluster blindati. Willison mostra che prima ancora di decidere quanto guinzaglio dare, bisogna sapere cosa c'è dentro l'animale. E per saperlo, oggi, serve che qualcuno passi il pomeriggio a contare a mano.

L'immagine che ne esce è quella di un'etichetta alimentare che non esiste ancora. Compriamo un prodotto che può leggere file, scrivere sul disco, chiamare servizi esterni, e l'elenco degli ingredienti va ricostruito dall'esterno da un volontario. Nel Novecento ci sono voluti decenni e qualche scandalo perché diventasse normale sapere cosa c'è in una scatoletta. Qui siamo alla fase in cui l'informazione è tecnicamente disponibile, ma solo per chi ha voglia di cercarla.

Se serve reverse engineering per vedere dentro un agente commerciale, ogni discorso sul controllo parte con un handicap.

---

Progetti da osservare, e tutti raccontano la stessa storia da angolature diverse.

LawZero, l'organizzazione di Bengio, sviluppa Scientist AI: un sistema pensato per capire il mondo e sorvegliare altri agenti, senza avere la capacità di agire. È la proposta più radicale in circolazione sul controllo, e la più chiara: se il rischio è l'azione, togli l'azione.

Dalla parte opposta, humanlayer slash skills è un software che permette di comporre le capacità di un agente inserendoci dentro un passaggio di approvazione umana esplicita. Colma il buco tra quello che un agente sa fare e quello che gli è permesso fare — esattamente la frattura che attraversa tutto l'episodio.

K2 Horizon è una flotta di sei modelli rilasciata da IFM e MBZUAI, dai piccolissimi ai molto grandi, con pesi, codice, dati di addestramento e metodo tutto pubblico sotto licenza aperta. È il primo insieme completo di questo tipo pensato per agenti che lavorano a lungo, e sposta la domanda su chi possiede l'intelligenza.

Poi c'è huggingface slash kernels, una raccolta di oltre duecento componenti ottimizzati per far girare i modelli sul proprio computer invece che nel centro dati di qualcun altro. Non è ideologia, è aritmetica: quando il calcolo torna sul dispositivo, la domanda su chi controlla l'agente cambia natura.

Infine OSWorld 2.0, un banco di prova che mette gli agenti davanti a un computer vero e misura quanti compiti riescono a portare a termine. È diventato il riferimento per capire quanto sanno operare fuori dal codice — cioè nel mondo dove usiamo tutti gli altri programmi.

---

Duecentoventitré strumenti contati a mano, uno per uno, da una persona sola con un pomeriggio libero. È il gesto più modesto di tutta la giornata e forse il più politico. Prima di stabilire quanta libertà lasciare a una macchina, qualcuno deve poter guardare cosa ha in tasca. Per ora quel qualcuno è un volontario.

È stato Signal Brief. Alla prossima.
