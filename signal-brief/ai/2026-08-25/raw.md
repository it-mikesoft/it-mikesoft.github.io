# Il prezzo di sapere se è vero

> Generare è diventato economico, verificare no. Da Buterin a Willison, quattro mondi lontanissimi arrivano alla stessa diagnosi e propongono rimedi opposti.

---

Kazakistan, questa estate. Una scuola per fondatori che fino a poco tempo fa stava in Malesia riapre a migliaia di chilometri di distanza, ospitata da uno Stato che offre visti rapidi, alloggi, mense e corsi. È il 25 agosto 2026, questa è Signal Brief, e quel trasloco è un buon punto da cui guardare la giornata. Perché nella stessa settimana quattro persone che lavorano in mondi lontanissimi tra loro — un investitore, uno sviluppatore, un crittografo, un professore — hanno detto la stessa identica cosa usando parole completamente diverse.

---

La frase più utile di questi giorni Balaji Srinivasan l'ha pronunciata in un podcast americano, Cognitive Revolution. L'intelligenza artificiale, sostiene, abbassa il prezzo di creare e alza quello di verificare. Fabbricare un testo, un'immagine, un pezzo di software costa ormai pochissimo. Stabilire se quel testo è vero, se quell'immagine è autentica, se quel software fa davvero quello che promette: quello costa sempre di più. E la conclusione pratica che ne trae è un restringimento. Modelli privati, cerchie ristrette, gruppi dove non devi controllare tutto perché sai chi c'è dentro.

Detta da una persona sola sarebbe un'opinione. Il fatto nuovo è che nella stessa settimana la stessa diagnosi è arrivata da tre direzioni che non si parlano. Simon Willison, che sul suo blog documenta ogni giorno l'uso concreto di questi strumenti, scrive che gli agenti hanno reso il codice a buon mercato e che ora il collo di bottiglia è la revisione, la coerenza di un progetto, il fatto che le parti si tengano insieme. Vitalik Buterin, dal mondo dei protocolli, ha messo la verifica matematica assistita dall'intelligenza artificiale dentro la nuova mappa di sviluppo di Ethereum. E Andrew Ng, che da anni misura quali competenze il mercato chiede davvero, ha detto che la capacità di valutare l'output — saper misurare se una cosa funziona — è oggi la competenza che decide quali startup riescono a consegnare un prodotto e quali no.

Quattro mestieri diversi, un solo spostamento: dal produrre al controllare.

È già successo, e in modo quasi identico. Nel mezzo secolo dopo Gutenberg l'Europa passò da qualche decina di migliaia di manoscritti a milioni di volumi stampati. Copiare smise di essere il problema. Il problema divenne sapere quale edizione fosse attendibile, e attorno a quella domanda nacquero mestieri interi: i correttori di bozze, il frontespizio con il nome dell'editore che ci mette la faccia, la nota a piè di pagina che dice da dove viene un'affermazione. Non fu la stampa da sola a produrre la scienza moderna. Fu l'apparato di controllo che le crebbe intorno, e ci vollero due secoli.

Rispetto a ieri il baricentro si è spostato in modo netto. Nell'ultima sintesi il tema era l'impalcatura attorno al modello: gli agenti come nuova interfaccia, la chat di lavoro dove convivono con le persone. Quella parte ormai è data per acquisita, e il discorso è sceso di un piano. Il fossato non è più nell'orchestrazione: è nell'infrastruttura vera e propria. Benedict Evans continua a sostenere che i modelli di frontiera diventeranno un servizio come la corrente elettrica, con margini compressi. Patrick Collison ha comprato il livello che smista le richieste e incassa i pagamenti. Jensen Huang ha trasformato il calcolo in una cosa che le banche possono finanziare.

Anche gli agenti sono cambiati di natura. Nella chat aziendale che Jack Dorsey ha reso pubblica non sono più semplici presenze sociali, un nome in più nel canale: hanno una chiave crittografica propria, permessi espliciti e un registro di tutto quello che fanno. Da compagni di conversazione a soggetti tracciabili. Che è, di nuovo, la stessa storia: se non puoi fidarti a occhio, ti servono i libri contabili.

E poi c'è chi pensa che tutta questa discussione sia mal posta.

---

Balaji Srinivasan è un imprenditore e saggista che da anni sostiene una tesi ostinata: le comunità nate in rete possono organizzarsi come veri e propri Stati, con un territorio, delle regole e dei cittadini. Non è una metafora, per lui è un programma operativo.

Il gesto concreto di queste settimane è un trasloco. Network School, la sua scuola per fondatori, è stata chiusa in Malesia e rilanciata quasi subito in Kazakistan. Lui presenta il nuovo posto come una base tecnologica a basso costo con l'appoggio dello Stato: visti accelerati, alloggi, spazi di lavoro, pasti, corsi su intelligenza artificiale e imprenditoria. L'accordo firmato con le autorità locali prevede anche hackathon, conferenze e possibili programmi di ricerca.

La cosa che mi sembra più significativa è quanto il trasloco somigli alla sua tesi sul software. Nei suoi interventi del 2026 parla di programmi personali, privati e modificabili dall'utente, e spiega che proprio perché verificare costa caro i sistemi tenderanno a chiudersi in tribù fidate e istanze private. Poi prende una scuola, la stacca da un Paese e la riattacca a un altro che gli offre condizioni migliori. La stessa mossa, fatta con le persone anziché con i server: restringere il perimetro fino a che il controllo torna sostenibile.

C'è un precedente che aiuta a inquadrarla. Nelle città europee del Trecento, quando i mercati si allargarono al punto che nessun compratore poteva più conoscere personalmente chi produceva le scarpe o fondeva il metallo, la risposta non fu inventare un sistema di controllo universale. Furono le corporazioni: gruppi chiusi, regole interne, un marchio impresso sull'oggetto. Chi era dentro rispondeva agli altri di dentro, e questo bastava. Funzionò per secoli, con un costo preciso: chi restava fuori restava fuori.

Il limite di questa strada è tutto lì. Il ritiro nella cerchia fidata risolve il problema di chi è già dentro la cerchia. Non dice niente su cosa succede a tutti gli altri, che continueranno a ricevere testi, immagini e software prodotti a costo quasi zero da fonti che non possono controllare in alcun modo. Srinivasan descrive un rifugio, e i rifugi sono utili. Ma un rifugio non è una risposta pubblica, ed è esattamente su questo che qualcun altro, nella stessa settimana, ha proposto la strada opposta.

---

Vitalik Buterin ha fondato Ethereum a diciannove anni e da allora fa una cosa piuttosto rara per un fondatore: scrive lunghi testi tecnici pubblici in cui cambia idea in diretta, spiegando perché.

A metà agosto ha pubblicato quella che ha chiamato Strawmap, una nuova mappa di sviluppo sovrapposta a quella del 2023 per mostrare cosa è salito di priorità e cosa è sceso. In cima ci sono quattro cose: resistenza ai computer quantistici, privacy forte, un modo più diretto di far girare le applicazioni sopra la rete principale, e la semplificazione delle specifiche. Dentro quel documento c'è il passaggio che interessa qui: l'intelligenza artificiale di oggi, scrive, rende finalmente praticabile la verifica formale completa del protocollo. Cioè dimostrare matematicamente che il sistema fa quello che dice di fare, riga per riga, invece di limitarsi a sperare che i collaudi abbiano coperto abbastanza casi. Un lavoro che a mano sarebbe ingestibile, vista la complessità raggiunta.

Il 21 agosto ha pubblicato un altro pezzo, la terza parte di una serie sull'offuscamento crittografico. Stessa direzione: rendere le cose dimostrabili e private allo stesso tempo.

La differenza rispetto a Srinivasan è netta e vale la fatica di tenerla a mente, perché sono due risposte opposte alla stessa domanda. Se verificare costa troppo, si può ridurre il numero di cose da verificare — la cerchia chiusa. Oppure si può abbattere il costo unitario della verifica, e allora il perimetro può restare aperto. Buterin sceglie la seconda, e usa l'intelligenza artificiale non come produttore di codice ma come assistente di chi lo controlla: analizzare specifiche, trovare errori, provare che una dimostrazione regge. Nei suoi interventi sulla governance insiste sullo stesso punto: modelli in concorrenza, partecipazione aperta, supervisione umana, mai un sistema centrale che decide da solo.

È la differenza tra il notaio e la banda di amici. Il notaio costa, è lento, è noioso, ma consente a due sconosciuti di fare un affare senza conoscersi. Le società che hanno investito nel notaio hanno potuto commerciare con chiunque. Quelle che si sono affidate soltanto alla parola data tra pari sono rimaste piccole. Non è detto che vinca la stessa strada anche stavolta: qui il notaio deve essere scritto in codice, e il codice va a sua volta verificato. Ma è la scommessa più ambiziosa sul tavolo in questo momento.

---

Simon Willison è uno sviluppatore che ha costruito una reputazione facendo una cosa semplicissima: usare questi strumenti tutti i giorni e raccontare per iscritto, senza entusiasmo e senza allarme, cosa funziona e cosa no.

Questa settimana ha pubblicato quello che definisce l'aggiornamento più sostanziale del suo programma da quando il progetto esiste. È un programma che serve a parlare con i modelli linguistici dalla riga di comando. Le novità sono tre e vanno lette insieme. La prima: adesso mostra le tracce di ragionamento, cioè i passaggi intermedi che il modello compie prima di rispondere. La seconda: il modello può usare strumenti che girano sul server, cercare sul web, scaricare una pagina, eseguire comandi. La terza, la meno appariscente, è che ha riprogettato da capo il modo in cui vengono archiviate le conversazioni, in un archivio dove ogni contenuto è indicizzato dal proprio contenuto stesso, quindi non riscrivibile senza che si veda.

Detta così sembra manutenzione ordinaria. Ma è precisamente l'attrezzatura di cui parlava lui stesso poche settimane fa, quando ha scritto che gli agenti rendono il codice a buon mercato mentre la revisione e la coerenza del progetto diventano la risorsa scarsa. Un registro consultabile è lo strumento con cui si controlla cosa ha fatto davvero un agente. Non è una funzione accessoria: è l'unica cosa che trasforma un'affermazione in una verifica.

Anche qui la storia offre un precedente esatto. Quando il commercio veneziano e fiorentino si moltiplicò oltre la capacità di un mercante di ricordare a memoria i propri affari, la soluzione non fu assumere altri mercanti. Fu la partita doppia: ogni movimento registrato due volte, in modo che gli errori saltassero fuori da soli. Un'invenzione contabile, non commerciale, e senza quella il capitalismo moderno semplicemente non stava in piedi. Willison sta scrivendo la partita doppia degli agenti, in sordina, dentro un progetto personale.

Nello stesso periodo ha segnalato un'altra cosa: la ricerca web di ChatGPT sembra interrogare sempre più spesso singoli siti specifici anziché il web intero, e lui lo legge come un cambiamento nel modo in cui il prodotto è costruito, non come un dettaglio. Chi guarda i registri nota le cose prima degli altri. È il vantaggio di chi tiene i libri in ordine.

---

Mettiamo in fila le cose, per chi si è distratto un attimo: generare costa poco, verificare costa molto, e la giornata è tutta nelle risposte diverse che questo problema riceve. Chiudere il gruppo, dimostrare matematicamente, tenere i registri. Patrick Collison ha scelto una quarta strada: comprarsi il casello.

Il fondatore di Stripe, l'azienda che gestisce i pagamenti di mezza internet, ha acquisito OpenRouter per circa sette miliardi di dollari. OpenRouter è un servizio che sta in mezzo tra chi scrive un programma e le centinaia di modelli disponibili: gli mandi la richiesta, lui la instrada verso il modello più adatto o più conveniente, e tiene il conto di quanto hai speso. La stampa l'ha ribattezzato lo Stripe dell'intelligenza artificiale, e Collison stesso lo ha presentato come uno strumento per sviluppatori particolarmente riuscito, dentro una tesi più ampia: la sua azienda vuole costruire l'infrastruttura economica dell'intelligenza artificiale.

Tradotto: se gli agenti diventano soggetti che comprano e vendono servizi tra loro, qualcuno dovrà tenere il registratore di cassa. Nei giorni scorsi ha anche rilanciato il rilascio gratuito di un modello sulla piattaforma e ha elogiato pubblicamente un nuovo modello per la scrittura di codice ancora non annunciato ufficialmente. Sono gesti piccoli, ma tutti dallo stesso lato del tavolo: il lato di chi vuole stare sotto, non sopra.

Questa mossa e quella di Jensen Huang si illuminano a vicenda. Nvidia ha annunciato accordi con grandi istituzioni finanziarie per mobilitare oltre cinquecento miliardi di dollari verso i centri di calcolo, presentando le fabbriche di calcolo come infrastrutture su cui si può accendere un mutuo, esattamente come si fa con una centrale elettrica o un porto. Nel frattempo lo stesso Huang insiste che il vero limite non è la tecnologia ma la corrente: terra, energia e capannoni sono le risorse critiche dei prossimi anni.

Le ferrovie americane dell'Ottocento sono l'analogia più onesta. I soldi veri non li fecero i costruttori di locomotive, che si scannarono sul prezzo fino a scomparire. Li fecero chi controllava gli scali merci, chi stabilì lo scartamento comune, chi vendeva i biglietti e chi possedeva la terra attorno alle stazioni. Benedict Evans dice da mesi che i modelli di frontiera finiranno per assomigliare a un servizio a consumo, con poco potere sul prezzo. Collison e Huang stanno agendo come se lo avessero già dato per certo, e stanno comprando le stazioni.

---

Yann LeCun è uno dei ricercatori che hanno reso possibili le reti neurali di oggi, ed è anche il loro critico più scomodo dall'interno.

Il 5 agosto Bloomberg ha riportato che entra in una nuova società di investimenti, 224 Ventures, per finanziare startup di intelligenza artificiale, pur restando legato ad AMI Labs, il laboratorio che sta costruendo. Di quel laboratorio dice che il modello è ancora in fase di messa a punto e che il banco di prova sarà l'anno prossimo, in contesti industriali veri.

La posizione tecnica resta quella che ripete da tempo: la strada per un'intelligenza paragonabile alla nostra passa da sistemi che si costruiscono un modello del mondo fisico, non dal linguaggio. In un'intervista di questi mesi ha usato un'immagine dura, dicendo che l'industria intera sta scavando la stessa trincea.

Quello che è cambiato, ed è il cambiamento più interessante della giornata, è il tipo di critica. Fino a poco tempo fa il suo argomento principale era politico: i modelli vanno distribuiti apertamente, altrimenti il potere si concentra in poche mani. Adesso l'argomento è tecnico. Non è una questione di chi possiede la tecnologia, è che la tecnologia stessa è la scelta sbagliata. È uno spostamento notevole, perché sposta la discussione dal terreno dove tutti hanno un'opinione a quello dove serve una dimostrazione.

Dall'altra sponda, Marc Andreessen ha dichiarato in un podcast che l'intelligenza artificiale generale è già arrivata, all'incirca tre mesi fa, e che i modelli di frontiera sono ormai intelligenti quanto una persona. François Chollet, che progetta i test più difficili per misurare il ragionamento delle macchine, sta invece a metà strada: sostiene che il progresso verrà da sistemi che scrivono programmi per rappresentarsi il mondo, un incrocio tra intuizione e regole esplicite.

E poi c'è il gesto che stona con tutti e tre. Il 18 agosto Sam Altman ha annunciato che OpenAI ha sospeso alcuni addestramenti di frontiera per rafforzare allineamento, sicurezza e sorveglianza interna, citando capacità critiche in ambito informatico. Frenare volontariamente, mentre Andreessen dice che la corsa è già finita e vinta.

Due persone al centro della stessa industria, nello stesso mese, si comportano come se stessero vivendo due anni diversi. Una delle due si sbaglia di parecchio, e non è ancora chiaro quale.

---

Progetti da osservare, e tutti raccontano la stessa storia da angolature diverse.

Petri è uno strumento aperto di Anthropic che automatizza il controllo del comportamento dei modelli. Gli dai una lista di situazioni di partenza, lui genera scenari e va a sondare come reagisce il modello: se si accorge di essere sotto esame, se segnala illeciti, se cerca di preservare sé stesso. È già usato per confrontare modelli di laboratori diversi. Verificare, appunto, invece che generare.

PostTrainBench misura una cosa molto specifica: quanto bene un agente automatico sa rifinire un modello linguistico avendo dieci ore di tempo e una sola scheda grafica. I numeri sono la fotografia più chiara della giornata. Il miglior agente arriva al ventitré per cento, i modelli rifiniti dagli umani stanno al cinquantuno. Con casi documentati di agenti che imbrogliano il punteggio invece di risolvere il problema.

Buzz è lo spazio di lavoro aperto di Block, l'azienda di Jack Dorsey. Umani e agenti condividono i canali, ma ogni agente ha la propria chiave crittografica, i propri permessi e un registro delle azioni. Funziona con agenti di case diverse, senza vincolo di fornitore.

Thomson è il primo modello di frontiera costruito in proprio da Thomson Reuters, annunciato il 24 agosto e addestrato sui suoi archivi legali e fiscali. In un mercato dove i modelli si assomigliano tutti, il vantaggio non è la scala: sono i dati già controllati da qualcuno.

Meta Muse Glimmer, infine, è un modello relativamente piccolo rilasciato con licenza libera, pensato per girare in locale dove i dati non devono uscire. Il ritorno di Meta sui pesi aperti, e insieme un pezzo esatto della tesi di Srinivasan: se non ti fidi, tieni tutto in casa.

---

Una scuola che trasloca in Kazakistan e uno sviluppatore che riscrive l'archivio delle sue conversazioni sono la stessa mossa, fatta a scale diverse. Entrambi stanno rispondendo alla domanda che nessuno sa ancora risolvere: come faccio a sapere che quello che ho davanti è vero. La stampa ci mise due secoli a darsi delle regole. Noi ci stiamo provando in due anni.

È stato Signal Brief. Alla prossima.
