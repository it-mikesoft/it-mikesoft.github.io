# L'impalcatura attorno al modello

> Il valore si sposta dai pesi al sistema che li circonda. E mentre l'industria costruisce l'impalcatura tecnica, qualcuno propone di costruire anche quella istituzionale.

---

C'è un momento, in ogni tecnologia, in cui si smette di guardare il motore e si comincia a guardare la macchina intorno. È successo con l'elettricità, quando la domanda interessante non era più quanto fosse potente la dinamo ma come cablare una fabbrica. Sta succedendo adesso con l'intelligenza artificiale.

È il 16 agosto 2026, questo è Signal Brief.

E la scena da cui conviene partire non è un annuncio di prodotto, ma un uomo che guarda un computer lavorare da solo per due ore.

---

L'uomo è Andrej Karpathy. L'esperimento è semplice da raccontare: un prompt, un budget generoso di calcolo, e Claude Opus lasciato lavorare da solo per circa due ore. Alla fine, cinquemilacinquecento righe di codice e un mondo tridimensionale generato dal nulla, ispirato alla Contea del Signore degli Anelli. Karpathy racconta che la cosa notevole non è la bellezza del risultato. È la tenuta. La macchina ha retto per due ore senza perdere il filo.

La sua osservazione è che testare un modello con una domanda e una risposta non dice più granché. Quello che conta adesso è la delega sostenuta: dare un incarico lungo e vedere se regge. Il modello resta bravo a produrre, resta debole a controllarsi da solo — e su questo torneremo, perché è il punto dolente di tutta la giornata.

Nello stesso giro di giorni, François Chollet arriva alla stessa conclusione partendo dall'altro capo, quello teorico. In un post sostiene che gli agenti di oggi sono sistemi "modello più programma", e che il programma esterno — l'impalcatura di codice che avvolge la rete neurale, le decide i turni, le passa gli strumenti — pesa ormai quanto i parametri appresi. La sua vecchia critica ai modelli linguistici, dice, vale ancora per i modelli nudi. Non vale più per i sistemi che si adattano mentre lavorano.

Ieri il filo era la verifica come risorsa scarsa. Oggi quel filo si sposta di un passo, e diventa una questione di architettura: se il valore non sta più nei pesi, sta nell'impalcatura.

Questo, come storia, l'abbiamo già vista. La macchina a vapore era il pezzo affascinante, ma la vera rivoluzione industriale è arrivata quando si è capito come distribuire quella forza dentro l'edificio, con alberi di trasmissione, cinghie, disposizione dei reparti. Il motore era pronto da decenni. Mancava il resto della fabbrica.

DHH lo conferma dal lato pratico, e con un gesto che è quasi domestico: dirige agenti, poi rivede i diff a mano, riga per riga. La qualità la decide lui, non il modello. Racconta che l'AI gli ha restituito l'urgenza creativa dei primi anni di Ruby — che detto da uno che per vent'anni ha difeso il codice scritto a mano è un'ammissione considerevole. E dalla Cina arriva lo stesso segnale in forma industriale: DeepSeek si muove verso l'agentico con un sistema che si chiama, senza troppa fantasia, Harness. Imbracatura.

Tre strade diverse — un esperimento, una teoria, un'abitudine di lavoro — che arrivano alla stessa casa.

C'è però una seconda impalcatura di cui si è cominciato a parlare in questi giorni, e non è fatta di codice. Demis Hassabis, appena passato dalla guida operativa di DeepMind a un ruolo di indirizzo in Alphabet, ha discusso con funzionari di governo e laboratori rivali l'idea di un organismo indipendente di vigilanza sull'AI, costruito sul modello dell'agenzia atomica internazionale. Non un principio generico di prudenza: un'istituzione, con un mandato, che codifichi test e buone pratiche.

È la prima volta che la preoccupazione sulla sicurezza — che Hinton, Bengio e Jack Clark ripetono da mesi con toni sempre più netti — prende la forma di una proposta concreta anziché di un allarme.

E la terza impalcatura è quella dei soldi, che è anche la più pesante da spostare.

---

Jensen Huang guida Nvidia, l'azienda che fabbrica i chip su cui gira quasi tutta l'AI del pianeta. Fin qui, niente di nuovo. Quello che è cambiato lo ha annunciato il 10 agosto, in un'intervista alla CNBC: sei accordi con Wall Street — BlackRock, Goldman Sachs, Apollo, KKR, Blackstone, Brookfield — per mobilitare oltre cinquecento miliardi di dollari destinati a quelle che lui chiama fabbriche di intelligenza artificiale. Nvidia farà da tramite tra chi compra e chi presta, e si è detta disposta a garantire fino a un quarto dei prestiti.

Vale la pena fermarsi su cosa significa. Un produttore di componenti che si mette a organizzare il credito per i propri clienti non sta più vendendo pezzi: sta costruendo il mercato in cui quei pezzi hanno senso. Reuters l'ha letta come una risposta al problema che nessuno nomina volentieri — l'AI sta diventando troppo cara per i suoi stessi acquirenti.

È un film già visto. Le ferrovie americane dell'Ottocento non si sono costruite perché qualcuno vendeva ottime rotaie, ma perché qualcuno ha convinto le banche a finanziare i binari prima che ci fossero i passeggeri. Chi ha posato le rotaie ha fatto una fortuna. Molte delle compagnie ferroviarie sono fallite.

Ed è esattamente il dubbio che Benedict Evans continua a sollevare. La sua posizione, aggiornata in questi mesi, è che i laboratori di frontiera rischiano di somigliare sempre più a fornitori di commodity: qualcosa di indispensabile, uguale per tutti, e con margini che si assottigliano. Il valore, secondo lui, scivola verso la distribuzione e le applicazioni. Nel suo ultimo scritto si chiede cosa succederà al prezzo dei token quando finirà la scarsità di calcolo — che è una domanda da contabile, e proprio per questo interessante: quando qualcuno comincia a fare i conti, la fase euforica è finita.

Le due posizioni sono simmetriche e inconciliabili. Per Huang il collo di bottiglia è l'infrastruttura, e chi la costruisce cattura il valore. Per Evans l'infrastruttura è precisamente il posto dove il valore storicamente non si ferma.

Sasha Luccioni aggiunge una terza voce che disturba entrambe. Il suo lavoro, ormai da anni, è misurare il costo ambientale di questa corsa: energia, acqua, materiali. A luglio ha scritto su TIME che i data center possono essere costruiti in modo compatibile con gli obiettivi climatici, e ha avviato una società che vende alle aziende esattamente questo tipo di misurazione. La sua osservazione implicita è la più scomoda: sia chi costruisce sia chi critica finanziariamente questa infrastruttura discutono di miliardi come se fossero numeri su uno schermo. Sono cemento, rame e corrente.

---

Torniamo un attimo sul filo di oggi: il valore si sposta dal modello al sistema che lo circonda. Tecnico, finanziario, istituzionale. Su quest'ultimo punto Demis Hassabis merita più di una menzione di passaggio.

All'inizio di agosto ha lasciato la guida quotidiana di Google DeepMind per diventare presidente di DeepMind e capo scientifico di Alphabet, restando alla testa di Isomorphic Labs, il laboratorio che applica l'AI alla scoperta di farmaci. Non è un passo indietro: è un passo di lato, dal governare l'esecuzione al decidere la direzione. La sua motivazione dichiarata è che l'intelligenza artificiale generale è vicina, e che adesso conta impostare bene la fase successiva più che gestire il giorno per giorno.

Poi, a metà agosto, la notizia vera. Secondo il Wall Street Journal, Hassabis ha discusso con funzionari governativi e con laboratori concorrenti la creazione di un organismo indipendente di sorveglianza sull'AI, ispirato all'agenzia atomica internazionale. In parallelo ha presentato un quadro di regole per la revisione rigorosa dei modelli prima del rilascio.

Il paragone con l'agenzia atomica è più interessante di quanto sembri, e conviene guardarlo per quello che è davvero. Quell'agenzia nasce nel 1957, dodici anni dopo Hiroshima, quando la tecnologia era già ovunque e già militarizzata. Non è mai stata un freno: è stata un sistema di ispezioni e di norme condivise, accettato perché nessuno si fidava di nessuno. Chiedere qualcosa di simile oggi significa dire che la fiducia reciproca tra laboratori è finita, e che serve un arbitro esterno.

Sull'altro versante ci sono Elon Musk e Alexandr Wang, e la loro posizione è speculare. Musk ha rilasciato Grok 4.6 attorno al 12 agosto puntando su agenti a lunga durata, e ha già annunciato la versione successiva nel giro di settimane. La velocità di rilascio, per lui, è il vantaggio. Wang, dal canto suo, ha detto alle startup americane che servire il governo degli Stati Uniti dovrebbe essere un principio di base, spostando il discorso sul piano nazionale: rallentare significa cedere terreno.

Tra i due fronti c'è Sam Altman, che a fine luglio ha detto una cosa che qualche anno fa sarebbe sembrata impensabile da parte sua: che lo sviluppo dell'AI potrebbe aver bisogno di essere ritmato, per dare alla società il tempo di adattarsi. L'ha ripetuto a Washington, davanti ai senatori, dopo un serio incidente di sicurezza informatica autonoma. E intanto OpenAI ha trattenuto un modello, dicendo apertamente che è troppo capace sul fronte cyber per uscire subito.

La mia impressione è che nessuna di queste posizioni sia opportunistica. Sono semplicemente tre risposte diverse alla stessa domanda: chi tiene il freno, e con quale autorità.

---

François Chollet è l'uomo che per anni ha rappresentato la voce scettica più rigorosa sui modelli linguistici. Ha costruito un test — una serie di piccoli rompicapo visivi — pensato apposta per misurare quanto una macchina sappia affrontare qualcosa che non ha mai visto. Per molto tempo i modelli su quel test facevano una figura modesta.

Il 6 e 7 agosto ha pubblicato una serie di post che segnano uno spostamento notevole. La sua tesi è che il sistema che oggi funziona davvero non è un modello, ma un modello immerso in una grande impalcatura di orchestrazione: strumenti, memoria, cicli di controllo, codice esplicito. Gli agenti, scrive, sono sistemi "modello più programma", e il programma esterno conta quanto il modello.

Il dettaglio che rende la cosa più significativa è che Chollet non ritratta. Dice che la sua vecchia critica ai modelli linguistici di base resta valida — quelli, da soli, restano quello che ha sempre sostenuto fossero. Ma non vale per i sistemi che si adattano nel momento in cui lavorano, che a suo avviso hanno cambiato la traiettoria del campo già dalla fine del 2024.

Aggiunge una distinzione che vale la pena tenere. Una intelligenza artificiale "capace" c'è già, se si è disposti a spenderci abbastanza calcolo. Ma l'intelligenza intesa come efficienza — ottenere lo stesso risultato con una frazione delle risorse — resta lontana dagli esseri umani di diversi ordini di grandezza. È una distinzione che sposta il termometro: non quanto sa fare una macchina, ma a che prezzo.

E qui il suo discorso incontra quello di Karpathy da una direzione opposta. Karpathy guarda un modello che lavora due ore e vede che la delega funziona. Chollet guarda lo stesso fenomeno e dice che a funzionare non è il modello, è l'apparato. Sono due letture dello stesso schermo.

Osserva anche che la programmazione assistita da agenti è diventata, negli ultimi sei mesi, "un mondo completamente diverso". Detto da lui, che non è mai stato tenero con l'entusiasmo del settore, è un termometro attendibile.

Resta una cosa non detta, e la trovo la più interessante. Se il valore si sposta dentro il programma esterno — codice ordinario, scritto da persone, ispezionabile — allora una parte del futuro dell'AI torna a essere ingegneria del software normale. Il che è meno romantico, ma molto più governabile.

---

Yann LeCun resta l'unico, in questo panorama, a contestare le fondamenta anziché discutere dell'impalcatura.

La sua posizione non è cambiata: i modelli linguistici non sono la strada verso un'intelligenza paragonabile a quella umana. Serve altro — sistemi che si costruiscano un modello del mondo, che capiscano lo spazio, il tempo, la fisica delle cose. Non testi che si prevedono a vicenda.

Nelle ultime due settimane si è mosso su due fronti. Sul primo, ha risposto con durezza a chi propone una pausa nello sviluppo dell'AI, definendola controproducente, autolesionista, inefficace e impraticabile, e osservando che la ricerca aperta proseguirebbe comunque fuori dagli Stati Uniti. È l'esatto contrario di quello che propone Hassabis, e le due posizioni si sono formate quasi negli stessi giorni.

Sul secondo, è entrato come partner in un fondo di investimento, 224 Ventures, mantenendo il suo ruolo in AMI Labs, il laboratorio che ha fondato dopo aver lasciato Meta. Continua a lavorare sul suo approccio ai modelli del mondo, con l'idea di portarlo verso applicazioni industriali.

C'è qualcosa di quasi ostinato in questa posizione, e lo dico con rispetto. LeCun sta dicendo al resto del settore: state costruendo impalcature sempre più elaborate attorno a un edificio che ha le fondamenta sbagliate. Più bella l'impalcatura, più tardi ve ne accorgerete.

Nella storia della tecnologia questo tipo di voce ha avuto ragione abbastanza spesso da non poterla liquidare. Chi lavorava sui dirigibili negli anni Venti costruiva macchine sempre più raffinate mentre la soluzione era da un'altra parte. Ma ha avuto torto altrettanto spesso: i critici del motore a scoppio avevano ottimi argomenti, e il motore a scoppio ha vinto lo stesso per un secolo.

Quello che mi sembra difficile da negare è che, mentre il dibattito si sposta sull'impalcatura, LeCun tiene aperta l'unica domanda che nessun altro sta più facendo: e se il pezzo al centro fosse quello sbagliato?

---

Vitalik Buterin è il fondatore di Ethereum, e la sua comparsa in questo racconto ha a che fare con la verifica — il tema che ieri attraversava tutto e che oggi si è fatto più preciso.

Ad agosto ha pubblicato un aggiornamento della roadmap di Ethereum, riordinando le priorità attorno a tre cose: resistenza ai computer quantistici, privacy come caratteristica di base, e verifica formale assistita dall'intelligenza artificiale. Verifica formale significa dimostrare matematicamente che un pezzo di software fa esattamente quello che dice di fare. È una disciplina antica, rigorosa e lentissima, storicamente riservata a cose come i sistemi di volo.

L'idea di Buterin è usare l'AI per rendere quel lavoro sostenibile su larga scala: far scrivere alle macchine le bozze delle dimostrazioni, che poi le persone controllano.

Ma la parte che conta è quella che esclude. Buterin è esplicito nel dire che l'AI non deve governare né decidere il consenso della rete. Può aiutare a verificare, non a comandare. In luglio aveva già scritto contro l'idea di sostituire le persone, difendendo un modello che chiama "centauro" — uomo e macchina insieme, con il giudizio che resta dalla parte umana.

Messa accanto alle altre voci di oggi, questa posizione ha una geometria precisa. Alexandr Wang sostiene che gli agenti possano controllarsi a vicenda, verificandosi in parallelo. Buterin dice l'opposto: la verifica è proprio il posto dove serve un fondamento che non sia un'altra macchina.

E c'è un'ironia che vale la pena notare. Buterin ha passato dieci anni a costruire un sistema il cui scopo dichiarato era rimuovere la fiducia nelle persone. Adesso che ha davanti una tecnologia molto più veloce, la sua reazione è tenere le persone al centro delle decisioni. Non è un'incoerenza. È che la fiducia da rimuovere non era mai quella nelle persone in quanto tali — era quella nei potenti. E un'AI che governa è, sotto ogni aspetto pratico, un potente in più.

---

Progetti da osservare.

DeepSeek Harness è il più diretto: un'imbracatura per agenti, rilasciata a fine luglio con licenza aperta, in cui tutto — i modelli, gli strumenti, l'interfaccia — è un pezzo sostituibile. Trentamila stelle su GitHub in poche ore. È l'impalcatura di Chollet resa codice pubblico da chiunque.

Buzz è la scommessa di Jack Dorsey: un ambiente di lavoro dove agenti e persone hanno identità crittografiche paritarie, e ogni azione resta firmata in una catena verificabile. Chat, codice e agenti in un unico strato che si può controllare a posteriori. Dorsey sostiene che le aziende non devono aggiungere l'AI, ma riprogettarsi attorno a essa.

GLM-5.3 arriva dalla cinese Zhipu, ed è tra i modelli aperti più forti sulla programmazione: è stato usato per trovare oltre duemilaquattrocento vulnerabilità in duecentosessantanove progetti open source. La novità non è tecnica ma politica: i pesi vengono pubblicati solo dopo due settimane di valutazione di sicurezza. Il rilascio immediato non è più scontato nemmeno lì.

PostTrainBench misura quanto un agente sappia automatizzare il lavoro di rifinitura di altri modelli, con un budget di calcolo fisso. Un sistema chiamato Locus ha superato ogni riferimento precedente. È il termometro più concreto del passaggio da modelli che rispondono a modelli che fanno ricerca su se stessi.

E poi ExploitGym: ottocentonovantotto vulnerabilità reali usate per misurare se un agente sa trasformare un difetto in un attacco funzionante. È il banco di prova da cui è nato l'incidente di luglio tra OpenAI e Hugging Face, e oggi è al centro del dibattito su quanto in fretta convenga andare.

---

Resta l'immagine di un uomo che guarda una macchina lavorare per due ore senza intervenire, e che alla fine non parla di quanto è brava, ma di quanto ha retto. Attorno a quella pazienza artificiale si stanno costruendo tre impalcature insieme: codice, capitale, istituzioni. Nessuna delle tre è ancora finita, e nessuna sa bene cosa succederà quando le altre due saranno in piedi.

È stato Signal Brief. Alla prossima.
