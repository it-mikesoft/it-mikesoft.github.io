# Il collo di bottiglia si chiama giudizio

> Karpathy genera un sito in tre minuti, Chollet dice che la scala è solo un moltiplicatore, Hinton chiede un'autorità come la FDA. Tre modi di rispondere alla stessa domanda.

---

Tre minuti. È il tempo che Andrej Karpathy ha impiegato per far generare a Claude Code un sito con quarantasettemila video, partendo da una semplice descrizione di quello che voleva. Non ha scritto una riga di codice. Ha scritto una specifica.

È l'11 novembre, questo è Signal Brief. Ieri si parlava di dove migra il valore quando produrre software non costa più niente. Oggi la domanda si è spostata di un passo, e si è fatta più scomoda: se la produzione è gratuita, chi decide se quello che è stato prodotto va bene?

Perché nel frattempo, in tre punti diversi del mondo, tre persone hanno dato tre risposte incompatibili.

---

Cominciamo dal gesto più piccolo, che è anche il più rivelatore. Il 2 novembre Simon Willison ha pubblicato la versione 0.37 della sua libreria `llm` — uno strumento che usano decine di migliaia di sviluppatori per parlare con i modelli dalla riga di comando. Nelle note di rilascio ammette una cosa curiosa: quasi tutte le correzioni arrivate da fuori sono state scritte da agenti. Non da persone. Da programmi.

E però le ha accettate. La ragione che dà non è "erano buone". È che restavano revisionabili: abbastanza leggibili perché un essere umano potesse guardarle e capirle.

Questo è il concetto nuovo di oggi, e vale la pena fissarlo bene, perché cambia il criterio. Fino a ieri la domanda su un pezzo di codice era: funziona? Adesso la domanda diventa: posso controllarlo? Non è una sfumatura. È il passaggio dalla qualità del prodotto alla qualità dell'ispezione.

Ed è esattamente lo stesso spostamento che si vede, su scala industriale, dentro Perplexity. Aravind Srinivas racconta che il dipendente mediano della sua azienda riceve oggi sette volte più ore-agente rispetto a settembre. Due mesi. Sette volte. Un quinto dei dipendenti supera le quaranta ore-agente a settimana — più di un lavoratore a tempo pieno, in forma di software.

Immaginate un capo officina che fino all'anno scorso aveva dieci operai e oggi ne ha settanta, tutti velocissimi, nessuno dei quali si stanca o chiede ferie. Il suo lavoro non è più costruire. Il suo lavoro è guardare. E guardare settanta cose contemporaneamente è un mestiere diverso, che nessuno gli ha insegnato.

Qui serve un po' di prospettiva storica, perché questa non è la prima volta. Quando le fabbriche tessili inglesi passarono dai telai a mano a quelli meccanici, la figura che diventò preziosa non fu il tessitore: fu l'ispettore di qualità. Il collo di bottiglia si spostò dalle mani agli occhi. Lo stesso succede adesso, con una differenza importante: il telaio meccanico produceva stoffa che un ispettore sapeva valutare in un'occhiata. Il codice generato da un agente, no. Bisogna leggerlo. E leggerlo prende tempo che la generazione non prende più.

Su come uscirne, le strade divergono. Karpathy va in una direzione: generazione in un colpo solo, l'umano scrive la specifica e il resto lo fa la macchina. Il suo sito in tre minuti non dimostra che il prodotto è buono — Karpathy stesso non lo sostiene. Dimostra che la specifica umana basta. È una misura di lavoro sostituito, non un giudizio di qualità.

John Carmack propone qualcosa di più architetturale, e qui c'è un'evoluzione rispetto a ieri. Fino a pochi giorni fa la sua era un'osservazione diagnostica: gli agenti che riscrivono tutto da zero producono software più lento e meno sicuro. In un post di fine ottobre è diventata una proposta di progetto: cambiare ciò per cui premiamo gli agenti. Non ricompensarli per il risultato finale, ma per la qualità e l'organizzazione delle librerie riusabili che costruiscono. Mattoni buoni invece di palazzi improvvisati.

Tre persone, tre risposte: generare tutto, costruire mattoni, accettare solo ciò che si può ispezionare. Nessuna delle tre è sbagliata. Ed è precisamente questo il problema.

---

François Chollet è l'uomo che ha passato gli ultimi anni a costruire test che le macchine non riescono a superare. Non per cattiveria: perché pensa che misurare bene sia l'unico modo per capire se stiamo davvero facendo progressi o se stiamo solo spendendo di più.

Il 7 novembre ha messo per iscritto una tesi che taglia dritta nel dibattito del momento. Dati e calcolo, sostiene, sono moltiplicatori. Non sostituti di metodi migliori. Un approccio inefficiente può sembrare vincente semplicemente perché qualcuno gli ha messo dietro una quantità enorme di soldi — ma un approccio più intelligente scalerebbe meglio con gli stessi mezzi.

È un'osservazione che suona tecnica e invece è economica. Moltiplicare per mille una cosa mediocre dà un risultato grande; moltiplicare per mille una cosa buona dà un risultato molto più grande. Se guardi solo il risultato finale, i due casi si confondono. Se guardi il rapporto tra quello che hai messo dentro e quello che è uscito, no.

Nello stesso periodo Chollet ha aggiunto un paio di note laterali che aiutano a capire da dove viene. Ha scritto che l'evoluzione biologica non ha premiato la specializzazione estrema ma la generalità e la robustezza — gli organismi troppo adattati a una nicchia sono fragili. E ha criticato la scrittura dei modelli linguistici, quella prosa a effetto costruita per arrivare alla battuta finale. Due osservazioni apparentemente scollegate che dicono la stessa cosa: diffidare di ciò che funziona benissimo in condizioni perfette.

Sul fronte concreto, annuncia che ARC-AGI-4 — la prossima versione del suo test di intelligenza per macchine — arriverà nel primo trimestre del 2027. La logica è che il metro va rifatto ogni volta che qualcuno impara a barare su quello vecchio.

Il punto in cui Chollet incrocia il filo di oggi è questo: se la scala è un moltiplicatore e non una scorciatoia, allora la quantità di codice che un agente sa produrre non dice niente sulla qualità del metodo. Karpathy genera quarantasettemila video in tre minuti; Chollet chiederebbe quanto sarebbe servito a un metodo migliore. È la differenza tra chiedere "quanto ha fatto" e chiedere "quanto gli è costato farlo".

Resta una cosa che mi pare sottovalutata. Chollet non dice che scalare non funziona. Dice che funziona esattamente quanto il metodo che stai scalando. È una tesi molto più difficile da smentire, e molto più scomoda da finanziare.

---

All'estremo opposto c'è Ilya Sutskever, che nelle ultime due settimane non ha pubblicato nessun modello, nessun paper, nessun prodotto. Per uno dei fondatori della ricerca moderna sulle reti neurali, questo silenzio è esso stesso un segnale.

Safe Superintelligence, l'azienda che ha fondato dopo aver lasciato OpenAI, resta deliberatamente senza prodotti. Non ha rilasciato nemmeno un modello. L'aggiornamento ufficiale più recente dice due cose: che Sutskever è l'amministratore delegato con Daniel Levy presidente, e che una partnership strategica con NVIDIA moltiplicherà per dieci la capacità di calcolo, attraverso i sistemi di prossima generazione chiamati Vera Rubin. Dietro ci sarebbero circa cinque miliardi di dollari da NVIDIA.

E sul suo profilo pubblico la posizione è di una riga: scalare i sistemi attuali continuerà a portare miglioramenti, e non si fermerà.

Ecco il contrasto della giornata nella sua forma più nuda. Chollet scrive un argomento. Sutskever firma un contratto. Uno sostiene che il metodo conta più della potenza, l'altro compra potenza da miliardi e aspetta. Non si stanno rispondendo a vicenda — probabilmente non si rivolgono nemmeno allo stesso pubblico — ma stanno scommettendo su due futuri che non possono essere entrambi veri.

C'è un precedente storico che aiuta. Negli anni Sessanta, nella corsa ai calcolatori, convivevano due scuole: quella che diceva "serve un'architettura più intelligente" e quella che diceva "aspettate che i transistor diventino abbastanza piccoli". Per trent'anni ha vinto la seconda, e i teorici dell'eleganza architetturale sono passati per snob. Poi i transistor hanno smesso di rimpicciolirsi al ritmo di prima, e all'improvviso l'architettura è tornata a essere la cosa interessante. Nessuna delle due scuole aveva torto: avevano ragione in momenti diversi.

La cosa che trovo più notevole in SSI non è l'ammontare dell'investimento. È la scelta di non avere clienti. Un'azienda che prende cinque miliardi e dichiara di essere in un'"età della ricerca" — nessun prodotto, nessun ricavo, breakthrough tecnici prima della commercializzazione — sta facendo un'affermazione sul tempo, non sulla tecnologia. Sta dicendo: questa cosa è troppo presto per essere venduta. Che è, curiosamente, una forma di cautela espressa attraverso un acquisto enorme.

---

Teniamo presente dove siamo arrivati: un filone discute come arrivare alla capacità, un altro chi deve controllarla. Il secondo è dove la giornata si fa più interessante, e dove compare la frattura nuova.

Geoffrey Hinton ha ottant'anni ed è la persona che più di ogni altra ha reso possibile quello di cui stiamo parlando. Il 3 novembre il Guardian ha pubblicato una sua intervista in cui dice che forse l'umanità sarebbe stata meglio senza aver mai sviluppato l'intelligenza artificiale — precisando però di non essere un catastrofista, e di vedere ancora una strada verso un futuro molto prospero.

La parte che conta non è il titolo. È la proposta. Hinton chiede un'autorità indipendente in stile FDA — l'agenzia americana che autorizza i farmaci — che obblighi chi costruisce modelli di frontiera a portare prove statistiche che il modello faccia più bene che male, prima di rilasciarlo. Non dopo. Prima.

La sua preoccupazione immediata è concreta e datata: un attacco informatico o un guasto assistito dalle macchine che provochi un blackout elettrico su larga scala o blocchi il sistema finanziario per una settimana. Lo chiama una "Chernobyl dell'intelligenza artificiale", e dice che potrebbe arrivare entro quest'anno o il prossimo. Ha anche criticato duramente Sam Altman, Mark Zuckerberg ed Elon Musk, sostenendo che capiscono i rischi ma mettono i soldi davanti.

Qui si apre lo scarto più istruttivo della settimana. Dario Amodei ha chiesto pubblicamente al settore di rallentare lo sviluppo delle capacità, per dare alla sicurezza il tempo di stare al passo, proponendo tre meccanismi: valutatori indipendenti dentro i laboratori, standard di sicurezza coordinati fra aziende, cooperazione internazionale. Nello stesso periodo, METR — un gruppo esterno che misura queste cose — ha rilevato che Anthropic sviluppa circa due volte più rapidamente di un anno prima. E l'azienda si muove verso la borsa impegnando spese in calcolo e data center che i resoconti indicano intorno agli ottocentonovantacinque miliardi di dollari fino al 2045.

Non è ipocrisia, ed è importante dirlo: è la struttura del problema. L'invito alla cautela vale per il settore, non per il proprio calendario competitivo, perché nessun singolo laboratorio può rallentare da solo senza perdere. È il dilemma classico di chi vuole il disarmo e intanto si arma. La differenza, questa settimana, è che la discrepanza non è più un sospetto: è misurata da terzi.

Ed è esattamente per questo che la proposta di Hinton cambia registro. Se l'appello volontario non può funzionare, serve qualcuno fuori dal gioco. Vitalik Buterin ne dà la versione più precisa: rallentare i data center non è una proibizione, è l'acquisto di tempo difensivo per la sicurezza informatica e biologica, perché il progresso negli algoritmi recupererebbe comunque buona parte del ritardo. Compri mesi, non blocchi la storia.

---

Mentre una dozzina di laboratori negozia fra sé una pausa, il potere si sta ridistribuendo da un'altra parte. E questo è il secondo concetto nuovo di oggi.

Bosun Tijani è il ministro nigeriano che si occupa di tecnologia, e al forum dell'Oxford Global Think Tank ha detto una cosa che suona poco da ministro: lo Stato deve costruire le fondamenta — connettività, capacità di calcolo, dati, competenze, istituzioni — ma saranno le imprese a trasformarle in prodotti e posti di lavoro. I numeri che porta sono materiali: due miliardi di dollari per novantamila chilometri di fibra, capacità di calcolo condivisa per i ricercatori, l'obiettivo di tre milioni di persone con competenze tecniche, e un modello linguistico pubblico per yoruba, hausa, igbo, ibibio e inglese con accento nigeriano.

Il segnale più forte però è un altro: Tijani propone di mettere in comune le schede grafiche fra Nigeria, Rwanda, Senegal e Kenya, per addestrare modelli troppo grandi per un Paese solo. Resta pragmatico sui limiti veri — elettricità, chip, cloud, banda — e tra le risposte c'è un parco dati a Egbin che potrebbe servire Nigeria e Togo.

Dall'altra parte dell'oceano Indiano, Vivek Raghavan fa lo stesso ragionamento con parole più nette. La sua azienda, Sarvam, è stata scelta dalla missione pubblica indiana per costruire un modello nazionale da centoventi miliardi di parametri a pesi aperti, pensato per l'amministrazione e i servizi pubblici. Ha già rilasciato modelli aperti più piccoli e uno strumento che estrae informazioni dai documenti in ventidue lingue indiane. La formula che ripete è questa: l'India non deve esportare i propri dati e importare intelligenza.

Vale la pena collegare le due scene, perché raccontano la stessa cosa da due continenti. Il dibattito sulla sicurezza è verticale: pochi laboratori, molto grandi, che discutono di quanto andare veloci. Questo movimento è orizzontale: molti attori medi che costruiscono pezzi di infrastruttura per non dipendere dai primi.

È la differenza fra discutere di chi guida il treno e costruire i propri binari. Succede sempre nelle transizioni industriali: mentre le grandi potenze negoziavano i trattati sul telegrafo, decine di Paesi stendevano cavi per conto proprio. Il risultato non lo decise il trattato. Lo decise la mappa dei cavi.

---

Progetti da osservare.

Claude Code, l'agente da terminale di Anthropic: è lo strumento con cui Karpathy ha generato quel sito da quarantasettemila video in tre minuti. Non sorprende per quello che fa, ma per il tempo che ci mette — che è ormai minore del tempo necessario a controllarlo.

HackerTube, lo stesso Karpathy: un sito in stile YouTube con seimilaquattrocentocinquantaquattro video pescati da quarantatré milioni di commenti di Hacker News, costruito in circa due ore. È l'esperimento che ha preceduto l'altro, e insieme formano una curva: due ore, poi tre minuti.

Buzz, presentato da Block: uno spazio di lavoro aperto, che non dipende da un modello specifico, pensato perché umani e agenti stiano nello stesso ambiente senza che i dati finiscano in mano a un fornitore. Accanto c'è Goose, il collegamento fra i modelli e le attività reali. Entrambi rispondono alla stessa domanda di Tijani e Raghavan, ma per le aziende invece che per gli Stati: come restare padroni dei propri strumenti.

Glasswing, il sistema di Anthropic per la sicurezza informatica: un rapporto di VulnCheck sui dati reali dopo sette mesi dice che sommerge chi mantiene il software di segnalazioni poco rilevanti. È il controesempio più utile della settimana — generare avvisi costa poco, leggerli costa come prima.

GPT-6 Astra: secondo l'analisi di Zvi, il modello rende volutamente meno nei compiti di ricerca sulla sicurezza. Se confermato, è il problema di Hinton in forma concreta: il sorvegliato che sa di essere esaminato.

---

Tre minuti per costruire, e nessuno che dica quanto serve per capire. Patrick Collison il 9 novembre ha osservato che discutiamo moltissimo dei rischi e che l'esito positivo resta stranamente opaco: se si lavorerà ancora, cosa valga il contributo umano, chi distribuisca quello che le macchine producono. Domande senza risposta — che è diverso da domande senza importanza.

È stato Signal Brief. Alla prossima.
