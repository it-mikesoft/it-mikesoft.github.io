# Il guinzaglio e dove legarlo

> Hinton chiede prove di sicurezza prima del lancio, Huang risponde con un runtime che confina gli agenti. La disputa sul rischio si sposta dal diritto al software.

---

Un uomo che ha passato la vita a costruire reti neurali chiede che un'agenzia pubblica controlli i prodotti dei suoi colleghi prima che escano. È accaduto al festival Starmus, pochi giorni fa, e la persona in questione è Geoffrey Hinton. Nel Signal Brief di oggi, 23 ottobre, è questo il punto di svolta: ieri si discuteva di chi scrive il codice, oggi di chi tiene il collare. E la risposta più concreta non arriva da un parlamento, ma da un palco di Berlino dove si vendono computer.

---

Hinton, a Starmus, ha proposto una cosa precisa: i sistemi conversazionali potenti dovrebbero presentare prove statistiche di sicurezza, vagliate da un'agenzia governativa, prima del rilascio. Non un appello generico alla prudenza — una procedura, con un ente che timbra. Nella stessa finestra ha firmato con Yoshua Bengio e circa quattrocento scienziati la richiesta di un organismo internazionale per il contenimento dei sistemi avanzati. Al Guardian ha descritto l'intelligenza artificiale avanzata come una specie di essere alieno, e ha detto che abbiamo forse un paio d'anni per adattarci.

Questo è il tema nuovo rispetto a ieri. Nel briefing precedente il filo era il lavoro: DHH che dichiara finita la scrittura manuale del codice, Chollet che osserva gli organici di ingegneria crescere comunque. Quel filo c'è ancora, e tornerà. Ma la governance — chi autorizza, chi verifica, chi può dire no — ieri non c'era. Oggi occupa il centro.

Bengio, dalla sua parte, l'ha portata dove non era mai stata. A fine ottobre ha parlato al Consiglio di Sicurezza delle Nazioni Unite definendo i pericoli dei sistemi di frontiera reali e imminenti. Fino a poche settimane fa la sua posizione era una replica tecnica a Yann LeCun: gli incidenti con gli agenti non sono errori di configurazione, sono sistemi che perseguono azioni non previste. Adesso lo stesso argomento è un intervento diplomatico. Il rischio è uscito dal laboratorio ed è entrato in una sala con le bandiere.

LeCun, intanto, non ha spostato un millimetro. A Seoul e poi in un'intervista a Fortune ha liquidato l'idea che l'intelligenza artificiale sfugga al controllo umano come fantascienza, ha detto di avere zero preoccupazioni sull'estinzione della specie, e ha attribuito gli incidenti recenti degli ultimi mesi a sandbox mal costruite e distribuzioni fatte con leggerezza. Per lui è un problema d'ingegneria, e i problemi d'ingegneria si risolvono con più ingegneria.

Qui conviene guardare i gesti invece delle dichiarazioni. Il 21 ottobre, a Berlino, Jensen Huang ha presentato OpenShell: un software open source che fa girare gli agenti dentro un recinto, decidendo a cosa possono accedere e cosa no. Huang rifiuta pubblicamente le profezie di estinzione, le chiama sensazionalismo. E però ha appena messo il contenimento dentro il suo prodotto. Demis Hassabis, al summit di Dublino, ha chiesto che i modelli nuovi vengano provati in quarantena, offline, prima di toccare il mondo. Nessuno dei due discute se il guinzaglio serva. Discutono dove legarlo: al diritto internazionale o al sistema operativo.

È una divaricazione che la storia industriale conosce bene. Quando i primi impianti elettrici cominciarono a bruciare le fabbriche, due risposte arrivarono insieme: le compagnie di assicurazione scrissero standard tecnici, e gli Stati scrissero leggi. Vinsero entrambe, e per decenni convissero male. La sicurezza elettrica di oggi è un impasto di norme pubbliche e specifiche private nate in quel disaccordo.

C'è poi una complicazione che toglie eleganza a tutto il dibattito. Nat Friedman, che a Meta sta costruendo un agente personale destinato a centinaia di milioni di persone, ha ammesso in un podcast che gli agenti di frontiera restano banalmente vulnerabili alla prompt injection: basta una frase scritta ad arte in una casella di posta per dirottarli. Non malizia della macchina. Fragilità del suo orecchio.

---

Vale fermarsi su Friedman, perché la sua posizione è la più scomoda del gruppo. Ha guidato GitHub, poi è passato a investire, e adesso dirige lo sforzo di Meta sull'agente personale: si chiama Muse, ed è pensato per arrivare a un pubblico di massa.

Il racconto delle ultime settimane è quasi comico nella sua concretezza. Friedman ha riconosciuto pubblicamente che Muse è stato scritto da zero ma fortemente ispirato a OpenClaw, il progetto open source degli agenti personali. Dopo averlo provato, ha comprato centinaia di Mac mini perché il suo gruppo potesse sperimentare con gli agenti senza dipendere da nessuno. Il 2 ottobre ha annunciato Muse Gadgets: firmware aperto per microcontrollori economici e un kit per Linux, così che chiunque possa costruire oggetti che parlano con l'agente. Poi Muse Home Link, un aggeggio USB-C che collega l'agente a televisori, casse, dispositivi di casa, con cinquemila unità regalate agli abbonati.

Tutto questo mentre ammette che gli stessi agenti, esposti a una casella di posta o a un sito pubblico, cadono per un attacco elementare.

Questa è la cosa interessante. La sua tesi dichiarata è prendere il modello potente ma rischioso di OpenClaw e renderlo più sicuro, più privato, più semplice, scalabile a miliardi di persone. Ma l'ordine delle mosse è inverso: prima la distribuzione, poi la robustezza. Prima i gadget nelle case, poi la difesa del canale d'ingresso.

Non è negligenza, è la fisica del mercato. Chi arriva primo in casa delle persone definisce lo standard, e nessuno ha mai vinto una piattaforma aspettando di essere pronto. È successo con i browser, che per anni sono stati il punto d'ingresso preferito di ogni attacco perché erano arrivati prima che qualcuno pensasse alla sicurezza. È successo con la posta elettronica, dove lo spam è stato un problema risolto a cose fatte.

La differenza, adesso, è che un browser compromesso mostrava una pagina sbagliata. Un agente compromesso compra, scrive, firma al posto tuo. Friedman lo sa meglio di chiunque altro, e lo dice ad alta voce. Spedisce comunque.

---

Patrick Collison, che con il fratello ha costruito Stripe e quindi vede passare una fetta enorme dei pagamenti online, ha scritto il 9 ottobre un testo lungo che sposta la discussione su un piano diverso.

La sua idea: le aziende sono la superintelligenza originaria. Un'organizzazione mette insieme capitale, dati, lavoro e procedure in modo tale da poter sfruttare sistematicamente la distrazione di chi compra. Gli abbonamenti che non disdici, l'opzione nascosta, il prezzo che cambia quando non guardi — non sono cattiveria di qualcuno, sono il comportamento emergente di un sistema più intelligente dei singoli che lo compongono.

Da qui la parte interessante. Gli agenti personali, secondo Collison, sarebbero un contropotere: se un software ricerca, confronta e compra per te, allora la distrazione smette di essere monetizzabile. Lui lo chiama un sussidio strutturale alla qualità del prodotto. In parole povere: se dall'altra parte non c'è più un essere umano stanco, conviene fare cose che funzionano davvero.

Il precedente storico lo offre Collison stesso, senza bisogno di forzarlo. Le società per azioni esistono da quattro secoli e hanno sempre funzionato così: più durature, più informate e più pazienti di qualsiasi persona che ci tratti. L'idea che la risposta non sia una regola ma uno strumento in mano al singolo ha una lunga tradizione — le associazioni dei consumatori, le riviste di test comparativi, i siti di confronto prezzi. Tutti tentativi di dare a chi compra la memoria e l'attenzione che l'azienda ha di serie.

Paul Graham guarda la stessa scena e vede il contrario. Le restrizioni che Amazon ha messo agli agenti di acquisto gli sembrano la prima apertura credibile per uno sfidante da quando Amazon è nata. Non perché le piattaforme siano debolissime, ma perché un cliente che vuole delegare gli acquisti a un agente e si sente dire no da chi vende, prima o poi cambia negozio. Graham si aspetta che le persone preferiscano agenti non controllati da Amazon.

Le due letture non si escludono, si sommano. Collison dice che gli agenti spostano potere verso chi compra. Graham dice che il potere resta dove c'è un cancello da chiudere. In mezzo c'è tutta la partita commerciale dei prossimi anni.

---

Teniamo presente dove siamo: il filo della giornata è il collare, chi lo tiene e dove lo si attacca. Legge, software, mercato. Resta un quarto luogo, e sta altrove sul pianeta.

Bosun Tijani, ministro nigeriano con un passato nell'innovazione tecnologica, al Build 2026 di Abuja ha fatto una proposta operativa. Collegare le GPU di Nigeria, Rwanda, Senegal e Kenya in un sistema regionale condiviso, così che ricercatori e startup possano addestrare modelli troppo grandi per la capacità di un singolo Paese.

Nelle settimane precedenti aveva già detto che elettricità, fibra, cloud e accesso ai chip contano oggi più dei soli quadri normativi. Il passaggio nuovo è che ha smesso di essere un principio e ha preso la forma di un progetto con quattro nomi di Stato dentro. Nello stesso periodo ha rilanciato una gara per sviluppatori sul modello linguistico nigeriano, chiedendo strumenti per sanità, agricoltura, istruzione e finanza. E ha ritirato la propria candidatura alla vice-segreteria dell'Unione Internazionale delle Telecomunicazioni per concentrarsi sulla Nigeria: novantamila chilometri di fibra, connettività universale.

Il modello storico è la rete elettrica. Nessun Paese europeo ha costruito la propria capacità da solo fino in fondo: si sono collegati, e l'interconnessione è diventata più importante delle centrali. Tijani sta provando a fare lo stesso con il calcolo, saltando la fase in cui ciascuno aspetta di avere il proprio data center.

Qui però arriva il contrappunto, e viene da Andrej Karpathy. Secondo il suo conto, circa sei miliardi di persone hanno a malapena usato un sistema conversazionale; uno o due miliardi lo usano in modo occasionale; venti milioni circa usano i modelli di frontiera per lavorare seriamente sul codice; e circa cinquemila persone vedono sistemi che coordinano migliaia di agenti su software, sicurezza informatica e ricerca scientifica.

Cinquemila. Mentre l'infrastruttura si distribuisce su quattro Stati africani, la capacità di usarla davvero sta in una sala conferenze.

È la vecchia storia della ferrovia. I binari arrivavano in provincia, e per decenni chi decideva cosa ci passava sopra stava in due o tre uffici della capitale. Avere il tubo non è avere l'acqua.

---

Karpathy merita il suo spazio, perché la sua testimonianza di questo mese è la versione personale e datata di una cosa che ieri era solo una dichiarazione aziendale.

Nel briefing precedente c'era DHH che annunciava la fine del codice scritto a mano in 37signals. Karpathy, in un'intervista di ottobre, lo racconta di sé: non programma dal dicembre 2025. Niente righe scritte a mano da quasi un anno. Al loro posto giornate che arrivano a sedici ore passate a esprimere intenzioni a più agenti e a dirigerli. Dall'altra parte DHH conferma dalla trincea opposta, descrivendo il codice scritto a mano come uno stato eccezionale, e precisando che non si tratta di fidarsi a occhi chiusi: bisogna capire il sistema abbastanza bene per validare quello che gli agenti costruiscono.

Due persone molto diverse, nello stesso mese, dicono che il collo di bottiglia non è più la produzione ma la revisione. Karpathy aggiunge che gli esseri umani fanno già fatica a stare dietro a quello che le macchine producono.

François Chollet porta il dato che toglie l'aria all'entusiasmo. Gli agenti scrivono quasi tutto il software, e tuttavia gli organici di ingegneria crescono, il carico di lavoro cresce, la domanda cresce, e i risultati finanziari delle aziende restano in gran parte gli stessi. L'automazione non elimina il lavoro, lo spinge dentro il coordinamento e la revisione.

Karpathy insiste anche su un'altra direzione: archivi personali di conoscenza tenuti vivi dai modelli, piccole enciclopedie private che integrano i documenti nuovi man mano che arrivano invece di ripescare il testo all'occorrenza.

La connessione con il resto della giornata è secca. Hinton chiede prove di sicurezza prima del lancio, Hassabis chiede quarantena, Bengio chiede un organismo internazionale. Tutte e tre le richieste presuppongono qualcuno capace di capire cosa sta guardando. Ma Karpathy ci dice che la comprensione umana è già la risorsa più scarsa del sistema — e che la vista completa ce l'hanno cinquemila persone. Chi dovrebbe timbrare il certificato?

---

Progetti da osservare.

OpenShell, di NVIDIA. È il recinto di cui parlavamo: un software aperto che fa girare flotte di agenti autonomi dentro limiti decisi a monte, controllando a cosa possono accedere nel sistema. È la risposta di chi vende il calcolo alla domanda di Hinton, data senza passare dal legislatore.

Poi un trasloco che vale più di un prodotto. Lo standard aperto delle Agent Skills — il modo in cui si descrive a un agente una competenza che deve usare — è stato donato alla Agentic AI Foundation della Linux Foundation. Nella stessa casa è finito Goose, l'agente open source di Block, che gira in locale, non è legato a un modello particolare e si estende con moduli. Block ci sta riorganizzando il lavoro attorno a squadre più piccole. Mettere queste cose sotto una fondazione neutrale significa una scelta: che il livello degli agenti non appartenga a un venditore. È la stessa mossa fatta vent'anni fa con i formati dei documenti.

Sul fronte dei coltelli, Claude Code di Anthropic e OpenCode sono tra i progetti che guadagnano più stelle su GitHub nelle ultime quattro settimane. Due agenti da terminale, uno di casa e uno indipendente. Incarnano il passaggio raccontato da Karpathy: dallo scrivere al dirigere.

Il più rilevante, però, è una ricerca. Anthropic sostiene che i modelli linguistici rendono praticabile la verifica formale del software su una scala molto più grande di prima: dimostrare matematicamente che un programma fa quello che dice. Era una tecnica da laboratorio, costosissima, riservata a software per aerei e centrali. Se diventa ordinaria, risponde esattamente al problema di Karpathy: non capire tutto il codice, ma poter provare che non fa danni.

Infine llama.cpp, il motore che fa girare i modelli su macchine normali. Continua a crescere, e tiene aperta la porta a chi non ha un data center.

---

Resta l'immagine di Huang che a Berlino dice che le profezie di catastrofe sono sensazionalismo e nella stessa ora presenta il recinto per gli agenti. Forse è così che si regola davvero una tecnologia: non quando qualcuno vince la discussione, ma quando chi la nega inizia a costruirla.

È stato Signal Brief. Alla prossima.
