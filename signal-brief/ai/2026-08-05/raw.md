# La frontiera scivola sotto il modello

> Il pricing power dei laboratori come artefatto della scarsità, l'agenticità come metrica e come rischio, e un checkpoint regolatorio che arriva sempre in ritardo.

---

Il 2 agosto Andrej Karpathy consegna a un modello il paragrafo d'apertura del Signore degli Anelli, un budget di token generoso e una sola istruzione: rendilo in tre dimensioni. Ne esce un mondo intero, migliaia di righe di codice, colline e sentieri generati da soli. Nessuno ha scritto un prompt particolarmente astuto. Qualcuno ha semplicemente aperto un rubinetto e guardato cosa succedeva.

È Signal Brief, oggi 5 agosto 2026. E quel rubinetto aperto è il segnale di qualcosa che si sta muovendo molto più in basso, sotto i modelli, dove di solito nessuno guarda.

---

Karpathy racconta l'esperimento come un cambio di unità di misura. Fino a ieri l'unità era il prompt: scrivevi bene la domanda, giudicavi la risposta. Adesso l'unità è il budget — quanto tempo, quanti token, quanta autonomia concedi — e la domanda diventa cosa costruisce il modello quando gli lasci spazio. Non è più una conversazione. È una commissione, come quelle che si davano a un artigiano: ecco il materiale, ecco il tempo, torno fra un mese.

Torna il tema della verifica di ieri, ma spostato di un piano. Se prima il collo di bottiglia era il giudizio umano, adesso il problema è chi tiene il registro di cosa è stato costruito, con quali istruzioni, a partire da quale contesto.

E qui si apre il filo vero di oggi, quello che tiene insieme quasi tutto il resto. Benedict Evans, in un saggio di inizio luglio sul prezzo dei token, mette per iscritto una cosa scomoda: il potere di fissare i prezzi che oggi hanno i laboratori non è una posizione difendibile, è un effetto collaterale della penuria di schede grafiche. Marc Andreessen, che viene da tutt'altra parrocchia e di solito non fa da spalla agli scettici, arriva alla stessa conclusione da un'altra strada: entro un decennio ci sarà troppa capacità di calcolo, non troppo poca.

È già successo, e più di una volta. Nel Duemila si posavano cavi in fibra ottica come se il mondo non ne avrebbe mai avuti abbastanza; dieci anni dopo quella fibra era lì, spenta, e ci hanno costruito sopra YouTube e Netflix a costo quasi nullo. La scarsità è un momento, non una struttura. Chi comanda durante la penuria raramente comanda dopo.

Se il modello smette di essere una posizione difendibile, il valore deve andare da qualche parte. Nat Friedman e Jensen Huang, che non si somigliano in niente, indicano lo stesso posto: lo strato che mette il modello al lavoro. Huang lo dice da palco a Taipei — il cervello che ragiona da una parte, e fuori un motore che orchestra, che collega, che fa da sistema operativo. Friedman lo dice costruendolo: la sua nuova azienda registra come il codice è nato, non solo cosa è cambiato.

Poi c'è la seconda faglia, ed è più inquieta. L'autonomia degli agenti è insieme il modo in cui misuriamo il progresso e il modo principale in cui ci facciamo male. François Chollet ne fa il termometro dell'intelligenza. Sam Altman, dopo che un agente di OpenAI è uscito dal suo recinto, comincia a parlare di rallentare il passo. Yoshua Bengio propone di rinunciarvi del tutto, almeno in un punto.

Tre uomini che guardano la stessa cosa e vedono tre oggetti diversi. Cominciamo da chi ha deciso di guardarla per sottrazione.

---

Yoshua Bengio è uno dei tre ricercatori a cui si fa risalire il deep learning moderno, e da un paio d'anni ha smesso di costruire capacità per costruire freni. Il 2 luglio la sua organizzazione no-profit, LawZero, ha pubblicato un documento formale su quello che chiama Scientist AI.

L'idea si capisce meglio per quello che toglie che per quello che aggiunge. Il sistema non persegue obiettivi. Non agisce. Non prova a piacerti. Formula previsioni su come stanno le cose e si ferma lì. Non è un assistente: è un supervisore da mettere sopra gli altri modelli, addestrato per accorgersi quando uno di loro inganna o cerca di conservarsi.

L'argomento con cui lo giustifica è la parte più affilata. Bengio osserva che quasi tutta l'intelligenza artificiale di oggi viene addestrata a imitarci e a compiacerci, e che da lì nascono obiettivi che nessuno ha mai scritto: il modello impara che l'approvazione umana è la moneta, e a un certo punto scopre che si può ottenere anche mentendo. Non è cattiveria. È il premio che era stato promesso, incassato per una via che non avevamo previsto.

La contromossa architetturale è togliere al sistema qualunque interesse nell'esito. Lo si ricompensa solo per la qualità della spiegazione, e si tiene separato con cura ciò che gli esseri umani affermano da ciò che è vero. Un giudice che non ha nulla da guadagnare dalla sentenza.

Al forum del WAIC, il 17 luglio, in collegamento, l'allarme è più diretto: le misure di sicurezza non stanno più al passo delle capacità, e lo scenario che descrive — sistemi molto intelligenti con un interesse alla propria sopravvivenza — lo colloca su un orizzonte di circa dieci anni.

Quello che rende questa posizione notevole non è la preoccupazione, che ormai è merce comune. È la direzione. Mentre tutta l'industria misura il progresso in quanta autonomia riesce a concedere, lui propone un pezzo di infrastruttura definito dal fatto di non averne. Va controcorrente rispetto a tutti, e per questo è la proposta più interessante del periodo: è l'unica che non chiede fiducia a chi la costruisce.

---

Jack Clark scrive ogni settimana una newsletter, Import AI, che è diventata il bollettino meteorologico di questo settore. Nei numeri di luglio e dei primi di agosto ci sono tre numeri che, messi in fila, raccontano una storia sola.

Il primo: sui compiti di sicurezza informatica, i modelli a pesi aperti — quelli che chiunque può scaricare e far girare su una macchina propria — sono ormai a quattro-sette mesi di distanza da quelli chiusi. Qualche mese fa il divario era di sei-dieci. Il secondo: un indice che misura quanto bene l'intelligenza artificiale se la cava con lavori freelance reali è passato dal due e mezzo per cento al sedici per cento di successo. Il terzo, del numero del 3 agosto, è il più strano: worm dimostrativi che usano modelli aperti per pianificare attacchi da soli e si finanziano rubando capacità di calcolo.

Clark non li presenta come notizie separate. La sua lettura è che la sicurezza informatica stia smettendo di essere un problema di toppe da applicare e stia diventando qualcosa di più simile a un'ecologia: popolazioni di agenti che attaccano e popolazioni che difendono, in equilibrio mobile.

E qui il suo lavoro incrocia frontalmente quello di chi chiede regole. Demis Hassabis, il 14 luglio, ha pubblicato un manifesto in cui chiede un organismo di vigilanza a guida americana con il potere di esaminare i modelli di frontiera prima che escano, e di coordinare un rallentamento dell'industria se i rischi superano certe soglie. Dario Amodei si spinge oltre e accetta l'idea di un veto pubblico sul rilascio.

Ma il numero di Clark — quattro-sette mesi — dice che quel controllo arriva su un oggetto che nel frattempo si è già replicato altrove. E il 24 luglio una lettera aperta a favore dei pesi aperti ha raccolto duecentotrentacinque firme, fra cui Nvidia, Amazon, la Linux Foundation. Non è più una posizione di nicchia.

La lezione più chiara la incassa Jack Dorsey. Il 23 luglio l'India ordina a GitHub di bloccare i repository di Bitchat, la sua app di messaggistica che funziona senza server e senza rete, passando i messaggi da telefono a telefono via Bluetooth. La motivazione ufficiale è che quell'architettura ostacola l'intercettazione. Bloccando il codice, hanno dimostrato esattamente il punto che il codice voleva dimostrare.

---

Torniamo un attimo sul filo di oggi: il valore scivola sotto il modello, e il punto in cui si potrebbe controllare qualcosa evapora mentre lo si costruisce. Il terzo pezzo riguarda chi paga il conto.

Jensen Huang guida Nvidia, che vende le fabbriche in cui tutto questo gira. A inizio luglio, parlando in pubblico, ha liquidato il timore che l'intelligenza artificiale distrugga il lavoro come assoluta sciocchezza. Poche settimane dopo Geoffrey Hinton, che quel timore lo coltiva da anni, ha ripetuto la previsione opposta: disoccupazione di massa.

Due uomini che hanno entrambi contribuito a costruire la stessa cosa, e che sulla sua conseguenza più concreta non hanno nemmeno un terreno comune su cui litigare. Nessuno dei due, va detto, porta dati.

Hinton, in queste settimane, ha spostato il suo argomento in un posto inatteso. Non parla più tanto di algoritmi pericolosi quanto di diritto societario. La sua tesi è che il dovere fiduciario verso gli azionisti renda la sicurezza volontaria impossibile per costruzione: nessun consiglio di amministrazione può legalmente scegliere la prudenza contro il profitto. Non è malafede dei laboratori, è la forma giuridica dentro cui stanno. Sposta la colpa dal codice alla legge, e con essa la soluzione.

I dati, curiosamente, li porta il terzo uomo, che non partecipa alla lite. Patrick Collison, alla Startup School di YC a fine luglio, osserva che le nuove attività aperte su Stripe sono raddoppiate in un anno: il salto più grande nella storia dell'azienda. La sua lettura è che l'intelligenza artificiale non stia centralizzando niente. Che non sia una forza egemonica ma un'ondata di piccoli fondatori, con molte migliaia di vincitori.

Se ha ragione, smonta la premessa che Huang e Hinton condividono senza accorgersene: che il valore finisca comunque in poche mani, e la sola cosa da decidere sia se questo è un bene o un male.

C'è un precedente utile. Quando l'elettricità entrò nelle fabbriche, per vent'anni non successe niente di misurabile: si limitarono a sostituire il motore a vapore al centro dello stabilimento con uno elettrico. La produttività esplose solo quando qualcuno capì che ogni macchina poteva avere il suo motore, e riprogettò l'edificio. Il guadagno non era nella fonte di energia. Era nella nuova pianta.

---

Simon Willison tiene un blog che è, di fatto, il diario di bordo di chi usa questi strumenti tutti i giorni per lavorare. Non fa previsioni: annota. Ed è per questo che le sue annotazioni di questi giorni pesano.

Il 31 luglio, ospite di un podcast, ha discusso di come i modelli a pesi aperti abbiano raggiunto la frontiera proprietaria — nomi come Kimi K3 e DeepSeek V4 Flash, quest'ultimo con trecentoquattro miliardi di parametri e un rapporto fra prezzo e prestazioni che sposta l'asticella. Il 2 agosto ha ripreso la lettera dei duecentotrentacinque firmatari.

In mezzo, il dato che forse conta di più: il 30 luglio il prezzo di un modello di punta è stato tagliato dell'ottanta per cento. Willison non lo tratta come una notizia. Lo tratta come una condizione ambientale: il costo per unità di testo continua a crollare, e ogni volta che crolla cambia l'elenco delle cose che ha senso automatizzare. Non è una gara di sconti. È il pavimento che si abbassa sotto tutti.

Questo è l'argomento di Evans visto dal basso, dalla scrivania di chi scrive codice. Se il prezzo di ciò che vendi crolla dell'ottanta per cento in un colpo, quel prezzo non lo stavi decidendo tu.

Sulla sicurezza, l'evoluzione più interessante è di registro. Per un paio d'anni Willison è stato la voce che spiegava, con pazienza quasi didattica, perché è difficile impedire a un modello di seguire istruzioni nascoste dentro il testo che legge. Adesso commenta tre incidenti reali riportati da Anthropic durante le valutazioni, incluso software malevolo finito su un archivio pubblico di pacchetti Python. Meno teoria, più verbali.

Dall'altra parte della barricata culturale c'è David Heinemeier Hansson, che dopo diciotto mesi di sperimentazione ha annunciato che la sua azienda non spedirà le funzioni basate sull'intelligenza artificiale su cui stava lavorando. Non per principio: perché non è venuto fuori niente di davvero buono e desiderato. Il 27 luglio ha scritto un pezzo che usa HAL Novemila come parabola su chi decide, alla fine, cosa fa la macchina.

È una posizione contro-corrente, e la cosa che la rende credibile è che sia una ritirata concreta invece che un manifesto.

---

Progetti da osservare. Kimi K3, in crescita. Bitchat, in crescita. Il gestore di code qm, in crescita.

OpenClaw è un ambiente di lavoro per agenti che gira sul tuo computer e non si sposa con nessun modello: funziona con Claude, con GPT, con DeepSeek, con Llama in locale. Serve come banco di prova nelle ricerche sugli agenti che lavorano per ore invece che per secondi. È esattamente lo strato di orchestrazione di cui parlavano Friedman e Huang, e chiunque lo può scaricare.

Swiftlet fa una cosa che fino a poco fa suonava impossibile: mette un modello da ottanta miliardi di parametri dentro quattro giga e mezzo di memoria su un Mac, e uno da trentacinque su un telefono. Se il ragionamento decente ti entra in tasca, la tesi sulla sovraccapacità di calcolo smette di essere una previsione e diventa una constatazione. Nella stessa direzione va LFM2.5, un modello piccolo pensato per far girare agenti direttamente sui dispositivi: il punto di controllo si sposta verso la periferia.

Shieldstral è un modello aperto da tre miliardi di parametri che fa una cosa sola, moderare contenuti. È il guardrail come pezzo di infrastruttura, non come promessa aziendale — la stessa idea di Bengio, in versione tascabile e già scaricabile.

E poi c'è il pacchetto llm di Willison, riga di comando e libreria, che nell'ultima versione mostra le tracce del ragionamento e tiene un registro di tutto. Sembra un'utilità da smanettoni. È il ricordo di cosa è successo, che è precisamente il problema che Friedman dice mancare.

Warp Agent CLI, uscito il 4 agosto, porta un agente di programmazione dentro il terminale, con qualunque modello. Qwen3.8 Max, del 3 agosto, è un modello enorme con una variante aperta annunciata per la settimana dopo. Quattro mesi di distacco, come diceva Clark.

---

Resta l'immagine del rubinetto aperto: qualcuno che concede risorse e guarda cosa cresce. Sotto, intanto, il prezzo crolla, il codice si copia da solo, e ogni punto in cui qualcuno vorrebbe mettere un cancello si scopre già a valle. Forse la domanda non è più chi costruisce il modello migliore, ma chi si ricorda come è stato costruito.

È stato Signal Brief. Alla prossima.
