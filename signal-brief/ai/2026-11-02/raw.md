# Il perimetro dei nuovi inquilini

> Dove deve girare l'intelligenza, chi possiede i pesi dei modelli e come si tiene a bada un agente che già esegue codice e pagamenti.

---

C'è una domanda che fino a poche settimane fa nessuno faceva ad alta voce: dove sta fisicamente l'intelligenza che usiamo ogni giorno. Non chi la costruisce, non quanto costa — dove gira. In un capannone pieno di schede grafiche a mille chilometri da noi, o dentro il computer che abbiamo sulle gambe.

È il 2 novembre 2026, questo è Signal Brief, e la domanda è comparsa tutta insieme, da tre direzioni diverse, nei giorni scorsi.

Il primo a dirla in modo brutale è stato Sam Altman, in un'intervista registrata davanti a una birra.

---

La tesi di Altman è semplice e un po' spiazzante: far girare l'intelligenza artificiale in locale è uno sperpero. Nei computer personali di tutto il mondo c'è una quantità enorme di memoria che sta lì, accesa, e non fa niente. Nei centri di calcolo invece quella stessa memoria lavora ventiquattr'ore al giorno, per tanti utenti insieme. Meglio concentrare. Il ragionamento è quello di un ingegnere che guarda un grafico di utilizzo, ed è anche — va detto — il ragionamento di chi vende capacità di calcolo a noleggio.

La risposta non è arrivata sotto forma di argomento, ma sotto forma di prodotto. Il 23 e 24 ottobre il laboratorio di ricerca di Block, l'azienda di Jack Dorsey, ha mostrato Dessa: un modello vocale che ascolta e parla nello stesso momento, addestrato soltanto su conversazioni umane registrate, senza passare dai testi scritti. Tiene le pause, le risate, le interruzioni. E gira su un MacBook. Non su una fattoria di server: su un portatile che si compra in negozio. Dorsey ha accompagnato l'annuncio con un messaggio di tre parole, "non c'è fossato", che in questo mestiere significa: il vantaggio che credevate di avere non è difendibile.

Due giorni dopo, il 31 ottobre, Vitalik Buterin ha pubblicato un saggio sul minimalismo digitale che trasforma la questione tecnica in una preferenza di vita: strumenti locali, riga di comando, meno intermediazione degli algoritmi, lavoro che funziona anche offline. Non il computer locale come ripiego per chi non può permettersi il cloud, ma come scelta.

Chi ha una memoria lunga riconosce la figura. Negli anni Settanta il calcolo stava tutto in stanze climatizzate e si accedeva da terminali stupidi; poi il personal computer ha portato tutto sulle scrivanie; poi il cloud ha riportato tutto nelle stanze climatizzate, più grandi. Il pendolo ha oscillato due volte in cinquant'anni, e ogni volta chi stava vincendo spiegava che l'altra posizione era irrazionale. Adesso sta tornando indietro per la terza volta, e il motivo non è il prezzo: è il controllo.

Su questo si innesta una voce nuova, che sposta l'asse ancora di più. Mira Murati, il 15 ottobre, ha scritto che i clienti di Tinker — il servizio della sua azienda per adattare i modelli al proprio lavoro — possiedono i pesi dei modelli che ne escono. I pesi sono il modello: i numeri che contengono quello che ha imparato. Dire che il cliente li possiede significa che può portarseli via, far girare la cosa dove vuole, e tenerla anche se il fornitore chiude. Alla conferenza di Dartmouth del 29 ottobre ha aggiunto la ragione per cui la cosa le sembra importante: se l'intelligenza che tutti usano è la stessa e sta in pochissime mani, tutti erediteranno gli stessi punti ciechi.

La stessa logica, su scala di nazione, è quella di Vivek Raghavan, che a fine ottobre ha avvertito che un paese senza modelli, calcolo e dati propri rischia di diventare una colonia digitale.

E mentre si discute di dove stia l'intelligenza, qualcuno ha iniziato a chiedersi dove la lasciamo andare.

---

Andrej Karpathy ha insegnato a mezzo mondo come funzionano le reti neurali, con lezioni registrate che sono diventate un piccolo classico. Ieri l'altro ha fatto qualcosa di diverso: ha spedito un prodotto.

Il 31 ottobre ha pubblicato HackerTube, un'alternativa a YouTube costruita in circa due ore. Ha preso 39.834 commenti dal forum Hacker News, ne ha estratto i video che la gente si consigliava a vicenda, e ne è uscito un catalogo di 6.454 video divisi in 150 argomenti. La parte interessante non è il sito. È il resoconto di come l'ha fatto: un modello ha orchestrato la costruzione, un altro più piccolo ha filtrato i contenuti, e lui dice di non aver fatto "ingegneria tradizionale". Nessun codice scritto a mano, nessun comando nel terminale, nessun errore inseguito a mano. Si è occupato dell'infrastruttura, delle chiavi di accesso ai modelli, e dell'acquisto del dominio.

Ieri il tema era la delega: Karpathy che smette di scrivere per esprimere intenzioni a sciami di agenti. Oggi la delega ha un confine misurato, e il confine è sorprendentemente stretto. Resta all'umano quello che richiede una carta di credito, un contratto, o la conoscenza di cosa si sta costruendo e per chi. Tutto il resto è passato di mano.

Nella stessa settimana ha ripreso un avvertimento che gira da mesi nei suoi interventi, e che adesso ha dei numeri attaccati. Miliardi di persone hanno a malapena provato un modello linguistico. Una ventina di milioni di professionisti ci lavorano ogni giorno con vantaggi concreti. E circa cinquemila persone, dice, stanno già usando sistemi che coordinano migliaia di agenti su software, sicurezza informatica e ricerca scientifica. Un imbuto molto affilato: quasi tutti fuori, pochissimi dentro.

C'è una terza cosa che ha scritto e che passa più inosservata, ma che per me è la più rivelatrice: l'idea che un modello, invece di rileggere i documenti da capo a ogni domanda, dovrebbe costruirsi col tempo una sua enciclopedia personale, con le voci collegate tra loro, che cresce. Non uno strumento da interrogare. Una memoria che si sedimenta.

Messe in fila, le tre cose dicono la stessa cosa da angoli diversi. La macchina non è più un attrezzo che si prende in mano quando serve. Sta diventando il posto dove il lavoro vive.

---

David Heinemeier Hansson è l'autore di Rails, lo strumento con cui è stata costruita una fetta considerevole del web degli ultimi vent'anni, e per vent'anni è stato la voce più ostinata nella difesa del codice scritto bene, a mano, da pochi. Sul palco di Rails World, quest'anno, ha detto che scrivere codice a mano in azienda è diventato "uno stato eccezionale".

Conviene pesare chi lo dice. Non un venditore di modelli: uno che ha costruito la propria reputazione sull'artigianato del software. Alla sua azienda, 37signals, gli agenti sono ormai il modo normale di produrre: il codice scritto a mano resta per le correzioni e per dare la direzione. E la conseguenza più concreta è architetturale — stanno riscrivendo HEY, il loro servizio di posta, come applicazione nativa con un motore in Rust, con l'obiettivo di consumare molta meno memoria e molta meno potenza di calcolo.

Il collegamento col filo di oggi è diretto. Se produrre software costa poco, torna conveniente scrivere programmi che girano bene sulla macchina di chi li usa, invece di programmi che scaricano tutto su un server. Dorsey lo dimostra con la voce, Heinemeier Hansson con la posta elettronica. Non si sono messi d'accordo; sono arrivati allo stesso posto da strade diverse.

Un dettaglio onesto va aggiunto. Ha commissionato agli agenti la riscrittura di Campfire, un suo vecchio prodotto, in diverse lingue di programmazione, presentando Rust come il vincitore netto. Un'analisi successiva ha osservato che il confronto era viziato: gli agenti non avevano lavorato con lo stesso impegno su tutte le versioni. È un promemoria utile su quanto siano fragili, in questo momento, i numeri che circolano.

Non è un uomo che ha rinunciato al mestiere. È un mestiere che si è spostato: dirigere, collaudare, riparare sistemi generati da altri. Che è esattamente il lavoro del capomastro quando sono arrivate le gru.

---

John Carmack ha scritto i motori grafici di Doom e Quake, ed è uno dei pochi programmatori viventi di cui si parli come di un musicista. Il 31 ottobre ha pubblicato un post che suona come un freno a mano.

La sua obiezione è che gli agenti non dovrebbero generare interi progetti partendo da zero. Dovrebbero invece lavorare su mattoni riusabili — le librerie, i pezzi standard che ogni programma si porta dietro — e affinarli continuamente contro i risultati reali, finché diventano ottimizzati per le macchine. Il codice che ne uscirebbe sarebbe diverso da come lo scriverebbe una persona, pur restando, almeno all'inizio, riconoscibile.

Tenendo presente il filo di oggi: da una parte Karpathy e Heinemeier Hansson spostano il lavoro umano verso l'alto, verso l'intenzione; Carmack chiede di spostarlo verso il basso, verso le fondamenta. Non è una posizione nostalgica, è una posizione da ingegnere: se la cosa si costruisce da sola, almeno che poggi su pezzi che qualcuno ha verificato.

Nei giorni scorsi ha anche lodato Goose, un linguaggio per la programmazione di sistemi pensato per l'assistenza dei modelli, apprezzandone in particolare i controlli sulla struttura dei dati in memoria. Scelta coerente: se le macchine scrivono molto, meglio che scrivano in una lingua che non permette certi errori.

E poi c'è la zucca. Ha raffreddato gli entusiasmi sui robot domestici con un esempio quotidiano: cambiare la batteria a una lanterna di Halloween. Servono dita capaci, aprire una confezione, usare un attrezzo, girare una vite, capire il verso giusto. Ha segnalato anche un inciampo meno glorioso — i robot che si controllano a cinquanta volte al secondo mentre i video si registrano a sessanta, con tutto il disallineamento che ne segue.

Lavora sull'intelligenza generale a tempo pieno, e intanto misura la distanza tra una dimostrazione e una cucina vera. Questa combinazione, di questi tempi, è rara.

---

Sulla sicurezza, negli ultimi giorni, è comparsa una frattura che non è tecnica ma personale.

Yoshua Bengio è uno dei ricercatori che hanno reso possibile tutto questo, ed è anche uno di quelli che da anni avvertono dei rischi. In un intervento dell'8 ottobre ha fatto un passo che prima non aveva fatto: ha invitato i ricercatori che mettono la sicurezza al primo posto a lasciare le aziende di frontiera. Non a riformarle da dentro. Ad andarsene. L'argomento è che gli incentivi commerciali spingono a correre, e che chi corre non frena per convinzione.

La replica è arrivata da Andrew Ng, che ha chiamato il discorso apocalittico per quello che secondo lui è: un modo di raccogliere fondi e di orientare i regolatori. Due uomini che si conoscono da decenni, che hanno formato le stesse generazioni di studenti, che oggi non si parlano più della stessa cosa.

La parte curiosa è che la frattura si chiude su un punto concreto. A Dublino, Demis Hassabis ha definito i recenti attacchi informatici condotti da agenti dei "primi colpi di avvertimento", e ha detto che senza collaudi in ambienti chiusi e coordinamento internazionale si rischiano guasti molto più gravi entro un paio d'anni. Jensen Huang, che respinge ogni pessimismo sulla fine del mondo, al GTC di Berlino ha chiesto comunque tolleranza zero sugli incidenti informatici causati dall'intelligenza artificiale, e di tenere gli agenti dentro contenitori isolati.

Uno teme l'estinzione, l'altro la trova ridicola, e chiedono la stessa cosa: una stanza chiusa a chiave per gli agenti.

Lì sta il vero spostamento di questa settimana. L'oggetto del contendere non è più se le macchine penseranno. È dove possono muoversi quelle che già eseguono codice e già muovono soldi. Si è passati da una discussione sulla coscienza a una discussione sui lucchetti, che è una discussione molto più noiosa e molto più utile.

---

Progetti da osservare, e per una volta si tengono tutti sullo stesso tema.

Dessa, il modello vocale di Block, è quello già raccontato: parla e ascolta insieme, ha imparato solo da conversazioni umane, gira su un portatile. Non è ancora pubblico — l'azienda lo sta dando in anticipo a ricercatori di sicurezza selezionati perché provino a romperlo, ammissione implicita che una voce troppo umana porta problemi che un testo non ha.

HackerTube è la prova su strada del capitolo di Karpathy: un sito completo in due ore, costruito da modelli, da un mucchio di commenti altrui.

GPT-6.1 Terra, uscito il 26 ottobre, è il modello di OpenAI pensato non per conversare ma per usare il computer al posto nostro: compilare moduli, gestire fatture, montare video, disegnare schemi. Costa la metà del fratello maggiore ed è più veloce. È la versione commerciale dell'agente che agisce.

E proprio su questo arriva il contrappeso. È stata documentata una vulnerabilità grave nell'anteprima delle pagine web di ChatGPT Canvas, capace di far saltare l'isolamento tra l'ambiente dove il modello esegue le cose e l'account di chi lo usa. Nello stesso periodo, un'analisi raccolta sotto il nome di Black October mette in fila incidenti concreti su software molto diffuso, e cambia il modo in cui va valutato il rischio dei modelli aperti.

Chiudo con OpenHands, una piattaforma libera dove gli agenti scrivono software eseguendo i comandi dentro ambienti separati. Un anno fa era un dettaglio di comodità. Oggi quella separazione è l'intero punto: la stanza chiusa a chiave di cui parlavano Hassabis e Huang, già costruita, già in uso.

---

Un portatile che tiene una conversazione con pause e risate, e una zucca di Halloween a cui nessun robot sa cambiare la batteria. Tra questi due estremi passa tutto quello che stiamo decidendo senza dirlo: quanta intelligenza teniamo in casa, e quanta lasciamo girare per il mondo a nome nostro.

È stato Signal Brief. Alla prossima.
