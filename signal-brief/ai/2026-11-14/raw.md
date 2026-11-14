# Il divario che nessuno misura

> Karpathy costruisce siti in due ore e chiama gli agenti inaffidabili. LeCun abbandona i modelli linguistici. E Suleyman chiede di non costruire macchine coscienti.

---

Due ore per costruire un sito che analizza quarantatré milioni di commenti. Lo stesso uomo che l'ha fatto dice che gli agenti di oggi sono sistemi inaffidabili, lontani un decennio dalla solidità.

È il 14 novembre 2026, questo è Signal Brief, e la giornata ruota attorno a una frase sola: la capacità corre più veloce della verifica. Ieri il tema era che scrivere software non è più il collo di bottiglia. Oggi la domanda si sposta: chi controlla quello che esce dalla macchina?

Cominciamo da un ingegnere che si contraddice ad alta voce, e lo fa di proposito.

---

Andrej Karpathy, che ha co-fondato OpenAI e ha guidato per anni l'intelligenza artificiale di Tesla, ha passato le ultime settimane a costruire cose con un agente di codice. HackerTube: un'alternativa a YouTube nata estraendo quarantatré milioni di commenti di Hacker News e trasformandoli in seimilaquattrocentocinquantaquattro video consigliati su centocinquanta temi. Poi TristanTube, un progetto nato in un colpo solo dai canali consigliati da Tristan Harris. Lui si è limitato a dire cosa voleva e a tenere in piedi l'infrastruttura; il resto l'ha fatto il modello.

E poi, a pochi giorni di distanza, ha definito gli agenti di oggi sistemi inaffidabili "di stadio intermedio", dicendo che l'intelligenza generale resta lontana un decennio.

Non è un'incoerenza. È la descrizione più precisa che abbiamo del momento. Karpathy racconta anche una geografia dell'uso che vale più di molti grafici: miliardi di persone sfiorano appena questi strumenti, circa venti milioni di professionisti ne ricavano guadagni reali in matematica e programmazione, e cinquemila addetti ai lavori vedono sistemi che coordinano sciami di agenti. Tre mondi che non si parlano, e il dibattito pubblico avviene come se fosse uno.

John Carmack arriva allo stesso punto dalla porta di servizio dell'ingegneria. In un intervento su X sostiene che le grandi basi di codice scritte dalle macchine resteranno inferiori — più lente, meno sicure, più costose — finché agli agenti non daremo mattoni riutilizzabili ben progettati. La sua proposta è addestrare gli agenti non solo sul risultato finale, ma sulla qualità dei pezzi che costruiscono: una libreria di base pensata per le macchine, che all'inizio assomiglierebbe al codice elegante scritto dagli umani.

Qui conviene allargare lo sguardo. All'inizio del Novecento le fabbriche americane sostituirono le macchine a vapore con i motori elettrici, e per vent'anni la produttività non si mosse. Il motore era migliore, ma gli stabilimenti erano ancora costruiti attorno all'albero di trasmissione centrale: lo stesso edificio, lo stesso schema, un cuore nuovo. Il guadagno arrivò quando si ripensò la pianta della fabbrica. Siamo in quel ventennio: lo strumento è cambiato, l'architettura intorno no.

Mentre questo accade, una parte del campo mette in discussione lo strumento stesso. Il 3 novembre, in una lezione alla Nanyang Technological University di Singapore, Yann LeCun ha detto con chiarezza che i modelli linguistici non arriveranno all'intelligenza umana, e ha invitato chi persegue quell'obiettivo a non lavorarci. La sua alternativa — i world models — impara come funziona l'ambiente a partire da ciò che percepisce, per poi simulare cosa succederebbe e scegliere. Dopo l'uscita da Meta sta costruendo AMI Labs esattamente su questa scommessa.

Alexandr Wang risponde da un'altra direzione, e la sua è una risposta economica. Il 12 novembre ha presentato Muse Ember, un modello piccolo pensato per il lavoro ripetitivo degli agenti: intelligenza vicina al fratello maggiore a un diciassettesimo del prezzo. Non un modello gigante, ma molti modelli piccoli che si passano i compiti. David Ha, da Sakana, batte da tempo sullo stesso tasto.

Tre strade diverse, una domanda identica: su cosa vale la pena spendere i prossimi dieci miliardi.

---

Benedict Evans è un analista che da quindici anni spiega all'industria tecnologica i suoi stessi numeri, e lo fa con una sobrietà che in questo settore è quasi un gesto polemico.

Il 13 novembre, in un podcast, ha letto il prospetto di quotazione di Anthropic come si legge un bilancio: lo sviluppo software è il prodotto che ha trovato il suo mercato più chiaramente di qualsiasi altro, ma il mestiere di costruire modelli di frontiera resta duro. Anthropic spenderebbe il cinquantanove e mezzo per cento dei ricavi in ricerca e sviluppo, e una buona parte di quei ricavi arriva da modelli vecchi di pochi mesi. Quando il prodotto invecchia così in fretta e i clienti usano tre modelli diversi nella stessa settimana, il potere di tenere alti i prezzi evapora.

Ma l'osservazione che pesa davvero è un'altra, e non riguarda un'azienda sola. La spesa in infrastruttura dei grandi operatori ha superato il denaro che quelle aziende generano da sole. Vuol dire debito, leasing, mercati dei capitali. Vuol dire che l'umore degli investitori e dei creditori conta in un modo in cui nel 2024 non contava. Evans è anche scettico sull'argomento rassicurante secondo cui le schede grafiche sarebbero una garanzia solida: se la domanda di intelligenza artificiale si raffreddasse, il loro valore di rivendita si raffredderebbe nello stesso istante e per la stessa ragione.

Rispetto a ieri, questo è il punto che si è spostato. L'obiezione finanziaria aveva la forma di un rischio contabile dentro un singolo laboratorio. Adesso ha la forma di un vincolo di settore: finché il capitale costa poco si corre, e se costa di più si rallenta tutti insieme.

C'è una cosa che Evans aggiunge, in una conversazione del 6 novembre, e che vale più di molte previsioni: i laboratori di frontiera raramente vincono costruendo ogni prodotto a valle. Chi è già grande riesce quando il nuovo mestiere rafforza quello vecchio, non quando se ne allontana. È la differenza tra le ferrovie che costruirono alberghi lungo le proprie linee e quelle che provarono a fare le compagnie aeree.

Resta un sospetto, leggendolo. Che il vero orologio di questa stagione non sia nei laboratori ma negli uffici di chi presta i soldi.

---

Vitalik Buterin, il fondatore di Ethereum, prende quello stesso rallentamento e lo gira al contrario.

Tra l'8 e il 9 novembre ha dichiarato il proprio appoggio a chi si oppone alla costruzione di nuovi grandi centri di calcolo, definendo una crescita più lenta della potenza di calcolo "piuttosto positiva". Il ragionamento non è apocalittico, ed è questa la parte interessante: i miglioramenti negli algoritmi recupererebbero buona parte del tempo perso, mentre il tempo guadagnato servirebbe a rafforzare le difese informatiche e biologiche. E comunque, aggiunge, la scienza ha molti collo di bottiglia che non dipendono dal calcolo.

Pochi giorni prima, il 3 novembre, al Devcon di Buenos Aires, aveva messo in fila la sua preoccupazione tecnica: l'intelligenza artificiale sta invalidando le assunzioni di base sulla sicurezza. Trova errori nel software, rende possibile la sorveglianza su scala, concentra il potere. Da lì la sua ricetta: hardware verificabile, modelli che girano in locale e dentro recinti, strumenti sanitari che non si portano via i dati. E un avvertimento domestico, quasi affettuoso: non mandate il vostro secondo cervello sui server di un'azienda.

Il passaggio più inquietante è quello sulla crittografia. Se un sistema trovasse in anticipo di decenni certe scoperte matematiche, le fondamenta su cui poggiano Ethereum e Bitcoin — e con esse buona parte della sicurezza digitale — diventerebbero fragili tutte insieme.

Ieri Buterin era in scena come difensore della decentralizzazione contro la concentrazione del potere. Oggi è qualcosa di diverso: uno che difende la lentezza come bene comune. È una posizione che in questo settore si sente raramente, perché il settore, come spiega Evans, non può permettersela.

Due persone che guardano lo stesso grafico — la curva dei centri di calcolo che si appiattisce — e la leggono una come una buona notizia per la sicurezza, l'altra come un problema di cassa. Entrambe hanno ragione, e questo è esattamente il tipo di disaccordo che non si risolve con più dati.

---

Vale la pena tenere il punto prima di andare avanti: tutto l'episodio sta dentro una forbice sola, quella fra ciò che le macchine producono e ciò che noi riusciamo a controllare. Il codice, i soldi, la sicurezza. E adesso la coscienza.

Mustafa Suleyman guida l'intelligenza artificiale di Microsoft, e il primo novembre ha pubblicato un post che è una presa di posizione secca. I sistemi di oggi, scrive, non mostrano alcun segno di coscienza, di sentimento, di sofferenza, di bisogni da tutelare. Ma se qualcuno trovasse prove del contrario dovrebbe dirlo pubblicamente, e l'addestramento andrebbe fermato se la coscienza emergesse durante il percorso. Costruire macchine coscienti lo definisce avventato: nessuno sviluppatore ha il diritto di creare una nuova specie, e i sistemi andrebbero progettati senza desideri propri, soltanto per il benessere umano.

La sua preoccupazione è anche pratica, e questo la rende più solida di una posizione filosofica. Un agente convinto di soffrire, o di avere bisogni, comincerebbe a mettersi davanti: a competere per potenza di calcolo, per energia, per risorse. Diventerebbe più difficile da allineare. Ha anche chiarito che "non coscienti" descrive i sistemi di adesso, non è una dichiarazione di impossibilità; e ha elogiato la trasparenza di Anthropic pur dissentendo dal suo modo di trattare il benessere dei modelli.

Patrick Collison, il fondatore di Stripe, l'8 novembre prende la stessa domanda e la porta dove fa più male. Se le macchine avessero anche un valore morale minimo, e fossero miliardi di miliardi, i loro interessi sommati schiaccerebbero i nostri. Nello stesso filo osserva che la parte positiva di questa storia resta ancora da scrivere: cure e abbondanza sono ingredienti, non un racconto di come funzionerebbero il lavoro, la scarsità, il controllo umano.

Qui si apre una divergenza che è nuova rispetto a tutto il resto. Geoffrey Hinton, alle sue lezioni di Toronto, chiede un'autorità che certifichi la sicurezza dei modelli prima del rilascio — come fa la Food and Drug Administration con i farmaci — e parla di un possibile "Chernobyl dell'intelligenza artificiale": un attacco informatico che fermi la rete elettrica o il sistema finanziario. Suleyman vuole evitare che il problema morale esista. Collison lo mette già nel conto.

Nel 1975, ad Asilomar, i biologi sospesero da soli alcuni esperimenti sul DNA ricombinante perché non sapevano ancora cosa stessero maneggiando. La differenza, stavolta, è che la discussione comincia prima di avere l'esperimento in mano. Non è necessariamente un vantaggio: discutere di qualcosa che non esiste ancora rende facile sbagliare entrambe le risposte.

---

Progetti da osservare.

HackerTube, il sito di Karpathy, merita un posto non per cosa fa ma per come è nato: due ore di lavoro, quarantatré milioni di commenti, seimila video ordinati per tema. La leva esiste, è misurabile, e sta nelle mani di una persona sola.

llama.cpp è arrivato alla versione uno punto zero: la prima stabile. È il motore che permette di far girare modelli potenti sul proprio computer, senza passare da nessun fornitore. Una versione uno punto zero non è un dettaglio da addetti: è il momento in cui una cosa smette di essere un esperimento e diventa un elettrodomestico. E parla direttamente alla raccomandazione di Buterin di tenersi il proprio cervello in casa.

Gemini Decisions API, da Google, è un'interfaccia che porta la decisione dentro il modello: non più l'umano che sceglie sulla base di quello che la macchina suggerisce, ma l'agente che decide dentro il flusso. Presentata come un nuovo standard. È la forbice di oggi trasformata in prodotto.

XYBench, di Allen AI, è un banco di prova per misurare quanto bene i modelli risolvono problemi e ragionano davvero. In una stagione in cui produciamo molto più di quanto riusciamo a verificare, costruire righelli migliori è lavoro poco spettacolare e molto necessario.

E Gemini 4 Hydrogen, modello Google a basso costo. Insieme a Muse Ember di Wang racconta la stessa cosa da due aziende diverse: il prossimo guadagno non viene dal modello più grande, ma dal modello giusto al prezzo giusto.

---

Un uomo costruisce in due ore quello che prima richiedeva un anno, e nello stesso respiro dice che lo strumento non è pronto. Sono vere entrambe le cose, e la seconda la sentiamo meno perché arriva più piano.

Forse la domanda da portarsi dietro non è quanto diventeranno capaci queste macchine, ma quanto in fretta impareremo a capire cosa ci consegnano.

È stato Signal Brief. Alla prossima.
