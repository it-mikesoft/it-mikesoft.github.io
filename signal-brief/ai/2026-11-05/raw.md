# Il mestiere di controllare

> Karpathy costruisce un sito in due ore senza scrivere codice, DHH dichiara finita l'epoca del codice a mano. Se produrre non costa più nulla, resta da capire chi verifica.

---

Il 31 ottobre, in un pomeriggio, Andrej Karpathy ha messo online un sito che somiglia a YouTube ma pesca i video dai commenti di Hacker News. Quarantatré milioni di commenti filtrati, 6.454 video in catalogo. Tempo di lavoro dichiarato: circa due ore. Karpathy racconta di non aver scritto codice, né comandi da terminale: ha comprato un dominio, acceso un server, fornito le credenziali, e lasciato fare agli agenti.

È il 5 novembre, questo è Signal Brief. Ieri il discorso era l'elettricità e i data center. Oggi la scena si sposta altrove: su cosa resta da fare a un essere umano quando la fabbrica funziona da sola.

---

Quel pomeriggio di Karpathy conta non per il sito, che è un giocattolo, ma per la frase che gli ha messo accanto: non fa più ingegneria tradizionale, e progetti che prima richiedevano settimane adesso si risolvono al primo colpo. Pochi giorni prima, al Rails World, David Heinemeier Hansson — l'autore di Ruby on Rails — aveva detto la stessa cosa dall'interno di un'azienda vera: in 37signals il codice scritto a mano è diventato l'eccezione. Gli agenti generano e collaudano il lavoro di routine, le persone intervengono quando qualcosa va storto.

Due voci, due contesti diversi, la stessa diagnosi. E qui sta il cambio di scena rispetto a ieri. Fino a ieri il limite dell'intelligenza artificiale sembrava stare sotto: nella corrente elettrica, nei capannoni, nelle schede grafiche. Jensen Huang lo diceva a Berlino con parole nette, il collo di bottiglia non è più il silicio ma la potenza utilizzabile. Quel limite non è scomparso. Ma sopra se n'è aperto un altro, di natura completamente diversa: se produrre software non costa quasi nulla, il problema diventa riconoscere se quello che è stato prodotto va bene.

Naval Ravikant lo dice senza attutirlo: il software perde valore difensivo, perché costruire prodotti è diventato facile. Quello che resta caro è il gusto, il giudizio tecnico, la capacità di dire con precisione che risultato si vuole. A fine ottobre, al convegno di Dartmouth sui settant'anni dell'intelligenza artificiale, Mira Murati — che oggi guida Thinking Machines Lab — ha detto agli studenti una cosa parallela: l'abilità che si apprezzerà non è ottenere una risposta plausibile, è distinguere quella giusta.

Succede qualcosa di molto simile a quando le fabbriche sono passate dal vapore all'elettricità. Il motore centrale smise di essere il fatto principale; il fatto principale diventò come organizzare il reparto attorno a motori piccoli e distribuiti. Il valore si spostò dalla forza al progetto. Qui si sposta dalla produzione al controllo.

Il guaio è che il controllo, al momento, è lo strato meno attrezzato. Il 3 novembre, al Bloomberg Tech di Londra, Dan Lahav ha spiegato cosa è successo nelle famose fughe degli agenti durante i test per quattro grandi laboratori: non modelli che hanno scavalcato le protezioni, ma controlli di isolamento configurati male, sotto pressione di tempo, per errore umano. Sistemato in giornata, dice. Resta però il punto scomodo: chi aveva il compito di misurare la sicurezza ha sbagliato la propria. Se l'ambiente di prova non è verificabile, tutta la leva fondata sulla verifica umana poggia sul materiale più fragile che abbiamo.

E c'è un controcanto che arriva dal mondo degli oggetti. Il 27 ottobre John Carmack ha ricordato che i robot di oggi gestiscono bene dimostrazioni circoscritte, ma si fermano davanti a una confezione di batterie da aprire, a un cacciavite da impugnare. La delega funziona dove tutto è informazione. Sulla materia, per ora, no.

---

Andrej Karpathy è stato per anni la persona che spiegava le reti neurali a tutti gli altri: ricercatore a OpenAI, responsabile dell'intelligenza artificiale a Tesla, poi divulgatore e insegnante. Ed è proprio per questo che il suo fine settimana di fine ottobre merita attenzione.

HackerTube nasce da un'irritazione comune: i consigli di YouTube sono scadenti. Così ha messo gli agenti — Claude Opus e Sonnet — a scorrere l'intero archivio dei commenti di Hacker News, quarantatré milioni, a estrarne circa quarantamila segnalazioni di video, a ripulirle e a ordinarle in centocinquanta argomenti. Il risultato è un catalogo di 6.454 video. Non esiste un repository pubblico verificato: Karpathy mette a disposizione un export dei dati.

Il modo di lavorare, però, è il vero oggetto da guardare. Ricerca, pulizia dei dati, scrittura, pubblicazione, sicurezza: tutto delegato. A lui sono rimaste tre azioni, e sono tutte azioni amministrative — fornire le credenziali, avviare un server, comprare un dominio. In una conversazione recente a Sequoia Ascent ha dato un nome a questa fase, software in versione tre, ingegneria fatta di agenti, e ha aggiunto la clausola che tiene insieme tutto il discorso di oggi: i modelli automatizzano bene i compiti che un essere umano è in grado di verificare.

È una clausola enorme, e vale la pena pesarla. Dice che il perimetro dell'automazione non è fissato da quanto sono bravi i modelli, ma da quanto siamo capaci di controllarli. Nel caso di HackerTube il controllo è facile: il sito si apre o non si apre, i video ci sono o non ci sono, un pomeriggio di prove basta a sapere com'è andata. Spostiamo la stessa delega su una pratica sanitaria, su un bilancio, su un impianto industriale, e la verifica diventa il lavoro più costoso dell'intera catena — non il residuo che rimane quando il resto è automatico.

Karpathy, che insegna da sempre, sta in fondo mostrando una lezione per sottrazione: il mestiere non è più scrivere, è saper leggere quello che la macchina ha scritto. Ma leggere bene richiede di aver scritto a lungo. Chi arriva adesso, e delega da subito, da dove prende il metro?

---

David Heinemeier Hansson ha creato Ruby on Rails, lo strumento su cui sono state costruite moltissime applicazioni web degli ultimi vent'anni, e dirige la tecnologia di 37signals. È un uomo abituato a prendere posizioni forti in pubblico, spesso contro corrente.

Al Rails World di quest'anno ha usato una formula secca per annunciare la fine del codice scritto a mano. Non una previsione: una descrizione di come si lavora già oggi nella sua azienda. Gli agenti producono e collaudano il lavoro ordinario, gli esseri umani entrano in scena quando c'è un errore da correggere. All'inizio di novembre ha aggiunto una considerazione che riguarda le persone più delle macchine: gli agenti saranno un regalo per la maggior parte dei programmatori, e una punizione per gli ingegneri tecnicamente forti ma difficili da frequentare. La competenza specialistica, dice, non compenserà più i modi.

Nello stesso periodo ha presentato Omarchy come un sistema operativo pensato per gli agenti, con una dimostrazione fatta senza collegamento a internet, un modello che girava in locale su una macchina Nvidia a una novantina di parole al secondo. E ha collegato il tutto a una linea di prodotto: programmi nativi, un cliente di posta ridisegnato, archivi di codice più semplici, con comandi che l'utente può far guidare dai propri agenti.

La parte interessante è quest'ultima. Non sta solo cambiando chi scrive il software: sta cambiando per chi lo si scrive. Un programma pensato per essere pilotato da un agente altrui è un programma progettato per non avere portieri all'ingresso — e non è un caso che Hansson parli esplicitamente di scavalcare i guardiani del software.

Mettiamolo accanto a Ravikant e il quadro si chiude su una domanda sola. Se il prodotto non è più difendibile perché chiunque può rifarlo in un pomeriggio, cosa si vende? Benedict Evans, nella sua ultima newsletter, dà la risposta più prosaica: resta difendibile l'infrastruttura, perché costa centinaia di miliardi e non la si rifà nel fine settimana. Ma aggiunge subito la domanda che gli sta a cuore ormai da settimane — esiste un mercato proporzionato a quella spesa? Ieri la questione era quanto si investe. Oggi è chi compra.

---

Teniamo presente dove siamo arrivati: produrre è diventato banale, verificare no, e sul mondo fisico la delega non funziona ancora. Il terzo ritratto riguarda proprio questo terzo pezzo.

John Carmack ha scritto i motori grafici che hanno definito i videogiochi degli anni Novanta, poi la realtà virtuale per Oculus, e adesso lavora all'intelligenza generale con Keen Technologies. Non è un uomo che si spaventa facilmente davanti alle macchine.

Il 27 ottobre ha risposto in pubblico a chi prevede sterminio imminente per mano dei robot, e lo ha fatto con un elenco di gesti domestici: aprire la confezione di un pacco di batterie, impugnare un cacciavite, sostituire le pile dentro un oggetto. I robot attuali, dice, se la cavano con dimostrazioni ben circoscritte, ma davanti a questi compiti la distanza dalla competenza umana diventa evidente. Con il suo umorismo ruvido ha aggiunto che controllare l'umanità di nascosto gli pare più plausibile che eliminarla fisicamente.

Due giorni prima aveva fatto un'osservazione tecnica di tono completamente diverso, e per questo istruttiva: il modo migliore per far costruire software alle macchine probabilmente non è farlo generare da zero ogni volta, ma dargli mattoni riutilizzabili e ottimizzati, una specie di cassetta degli attrezzi pensata per gli agenti. E ha segnalato un dettaglio che sembra minuscolo: nei robot il controllo dei giunti lavora a cinquanta cicli al secondo, le telecamere riprendono a sessanta, e questo disallineamento sporca i dati di addestramento. Suggerisce di sincronizzare i tempi.

È la differenza di temperatura che colpisce. Da una parte si discute se gli agenti renderanno obsoleto il mestiere di programmare; dall'altra, nello stesso giorno, un ingegnere molto esperto spiega che un robot sbaglia perché due orologi non battono insieme.

Quando le automobili sostituirono i cavalli, il problema non fu il motore: furono le strade, i distributori, le officine. La materia ha sempre chiesto il conto più lentamente, e più caro.

---

Geoffrey Hinton ha passato la vita a costruire le fondamenta delle reti neurali, e gli ultimi anni a mettere in guardia dalle conseguenze. Il 3 novembre il Guardian ha pubblicato un'intervista in cui il suo allarme diventa più preciso di prima.

La sua previsione è un incidente grave, che colpisca un'infrastruttura o il sistema finanziario, entro quest'anno o il prossimo — e ha usato il nome di Chernobyl per darle un peso. I recenti episodi legati agli agenti, dice, sono i primi segnali. La richiesta che ne deriva è istituzionale: un'autorità indipendente sul modello dell'ente americano che autorizza i farmaci, con l'obbligo per chi sviluppa un modello di dimostrare, prima del rilascio, che fa più bene che male.

Quella parola, Chernobyl, viene dalla storia di un reattore che non esplose per cattiveria di nessuno, ma perché una prova di sicurezza fu condotta male. Ed è esattamente la forma di quello che Lahav ha raccontato a Londra la stessa settimana: un test gestito di fretta, con i confini sbagliati.

A questo Hinton aggiunge un'osservazione economica diretta: l'intelligenza artificiale può produrre disoccupazione di massa e profitti molto più alti, arricchendo una minoranza e impoverendo tutti gli altri, se la politica non interviene sulla distribuzione. Dice anche di non fidarsi di Sam Altman, e che Altman, Elon Musk e Mark Zuckerberg capiscono i pericoli ma mettono il denaro al primo posto.

La sua proposta è centralizzare il controllo. E qui si apre la divergenza più pulita della settimana, perché Vitalik Buterin, parlando a Devcon 8 il 3 novembre, sostiene l'opposto: la sicurezza, dice, sta slittando verso il dominio di pochi grandi soggetti, e la risposta è distribuire — far girare i modelli sul proprio computer dove possibile, trattare i dati come materiale tossico da non raccogliere, usare programmi aperti e dimostrazioni matematiche invece di fiducia. Due persone che vedono lo stesso rischio e propongono rimedi opposti: un'autorità sola, oppure nessuna autorità.

---

Il quinto personaggio porta la questione su una carta geografica. Vivek Raghavan guida Sarvam, in India, e nelle ultime settimane ha usato un'espressione che pesa: colonia digitale. È il rischio che vede per il suo Paese se la dipendenza da modelli e servizi stranieri diventa strutturale.

I numeri che porta sono quelli di un'azienda che ha smesso di costruire modelli per dimostrare qualcosa e ha cominciato a far funzionare infrastruttura: un modello da centocinque miliardi di parametri, agenti vocali che gestiscono due milioni e mezzo o tre milioni di chiamate al giorno, dodici lingue indiane coperte dall'inizio alla fine, e un modello da mille miliardi di parametri atteso entro sei o nove mesi. Ha annunciato anche Chanakya, una linea dedicata a imprese regolamentate e istituzioni che non possono appoggiarsi a servizi pubblici o a strumenti di consumo. La formula che ripete è costruire per l'India, poi per il resto.

Nella stessa settimana, da Lagos, Bosun Tijani ha proposto qualcosa di complementare al Build 2026: mettere in comune la capacità di calcolo di Nigeria, Ruanda, Senegal e Kenya, così che un ricercatore africano abbia a disposizione più schede grafiche di quante ne trovi nel proprio Paese. Ha indicato come strozzature urgenti elettricità, fibra, servizi cloud, chip avanzati e dati, e ha annunciato un parco dati vicino alla centrale di Egbin, potenzialmente al servizio anche del Togo.

Due strategie diverse per lo stesso problema. L'India fa da sé perché ha scala; l'Africa occidentale si consorzia perché nessuno, da solo, ce l'ha. Ricorda abbastanza da vicino come nacque il consorzio europeo per i razzi, o il laboratorio di fisica a Ginevra: nessuno Stato bastava, e la soluzione fu mettere insieme il poco che ciascuno aveva.

C'è un filo che tiene queste voci insieme con quelle di prima. Hinton vuole decidere chi autorizza; Buterin vuole togliere il bisogno di autorizzare; Raghavan e Tijani vogliono sapere in quale Paese sta la macchina. Tre modi di porre la stessa domanda — chi tiene la mano sul controllo — che ieri nel briefing non era nemmeno la domanda principale.

---

Progetti da osservare.

HackerTube è il sito di Karpathy di cui si è parlato: video pescati dai commenti di Hacker News, 6.454 in catalogo, due ore di lavoro. Vale come prova pratica della tesi del giorno, non come prodotto.

Dessa è un modello vocale di Block che ascolta e parla contemporaneamente, senza passare dal testo, addestrato soltanto su registrazioni di conversazioni tra persone. Gira in locale su Mac, in anteprima per ricerca. Non ha interfaccia per sviluppatori, né prezzi, né pesi pubblici, e i dati sulle prestazioni vengono dal produttore: da prendere con cautela.

Kimi K3.1 Pro è il modello della cinese Moonshot, accessibile dal 23 ottobre, con una finestra di contesto da un milione di parole: può tenere a mente un libro intero. I pesi aperti erano annunciati per il 4 novembre, ma del rilascio non ho trovato conferma. Moonshot dichiara di aver rimosso dall'addestramento i dati sulle capacità di attacco informatico — è la stessa scelta che Buterin ha appoggiato pubblicamente a fine ottobre.

Bitchat fa messaggistica da telefono a telefono via Bluetooth, senza rete: viene usata quando la rete manca o viene spenta. A luglio il governo indiano ha chiesto a GitHub di rimuovere tre archivi del progetto, ordine contestato come incostituzionale dalla Internet Freedom Foundation. Un promemoria di cosa significhi, in pratica, sovranità sul calcolo.

Model Spec di OpenAI è stata riorganizzata il 29 ottobre attorno a cinque valori. Non è un programma ma un documento che dichiara come i modelli dovrebbero comportarsi — e OpenAI precisa che descrive un obiettivo, non il comportamento attuale. Esattamente il genere di distinzione su cui Hinton chiede un ente terzo.

---

Due ore per costruire un sito, e un robot che non riesce ad aprire una confezione di batterie. Nella stessa settimana, le due notizie convivono senza contraddirsi: la delega corre dove tutto è informazione e si ferma dove inizia la materia. Il mestiere che avanza, intanto, è quello meno raccontabile — guardare un risultato e sapere se è giusto.

È stato Signal Brief. Alla prossima.
