# Il conto della corsa

> Il limite dello scaling non è più scientifico ma finanziario: capex oltre il flusso di cassa, inferenza razionata, e un vantaggio che si sposta su chi sa mettere in produzione.

---

Per mesi la domanda sull'intelligenza artificiale è stata una domanda di scienza: fin dove può arrivare un modello che impara dal testo. Nel Signal Brief del 12 novembre 2026 la domanda ha cambiato natura. È diventata una domanda di bilancio.

Il capex degli hyperscaler ha superato il flusso di cassa che quelle aziende producono. Significa che da qui in avanti la corsa si finanzia a debito. E il debito, a differenza dell'entusiasmo, chiede una data di restituzione.

Il giro parte da una stanza con un podcast e un analista che fa i conti ad alta voce.

---

Benedict Evans, nelle sue ultime apparizioni su Another Podcast, ha messo in fila tre numeri. Il primo: la spesa in infrastruttura dei grandi fornitori di cloud è ormai più grande della cassa che generano internamente, il che obbliga a prendere in prestito qualcosa nell'ordine di cinquecento miliardi fino a mille miliardi di dollari. Il secondo riguarda Anthropic: circa il 59 per cento del fatturato del primo semestre è andato in ricerca e sviluppo, e intorno all'80 per cento del fatturato del terzo trimestre arriva da modelli uscati negli ultimi sei mesi. Il terzo è la conclusione che tiene insieme gli altri due: i modelli di frontiera sono largamente interscambiabili, e il potere di fissare i prezzi dipende dalla scarsità del momento, non da un vantaggio stabile.

Messe insieme, quelle cifre descrivono un'azienda che deve correre per restare dov'è. Ieri il filo della giornata era il lavoro sostituito, la specifica umana che basta. Oggi quel filo si sposta di un piano: non quanto sanno fare le macchine, ma quanto costa tenerle accese.

Il vincolo non è teorico. Il 2 novembre Elon Musk ha ridotto i limiti di utilizzo di Grok Bot dicendo che i costi per servire le risposte erano insostenibili rispetto ai ricavi. Non un guasto, una scelta di cassa. È il primo caso visibile di razionamento esplicito di un servizio di intelligenza artificiale rivolto al pubblico. Nello stesso periodo Dario Amodei pubblicava un testo intitolato We Must Pace the Frontier, in cui chiede che la frontiera venga scandita invece che corsa, mentre portava Anthropic verso un'offerta pubblica da circa mille miliardi di valutazione. Predicare il passo moderato e intanto accelerare non è ipocrisia: è la posizione normale di chi non può fermarsi da solo.

Questa dinamica ha un precedente abbastanza preciso. Negli anni Novanta le compagnie telefoniche posarono fibra ottica in tutto il mondo convinte che il traffico internet avrebbe riempito ogni filo. Il traffico arrivò, ma più tardi del debito. Molte di quelle società sparirono, la fibra restò e qualcun altro la usò per costruire il web che conosciamo. L'infrastruttura sopravvive ai suoi finanziatori. È una cosa da tenere in mente quando si guardano i data center di oggi.

Accanto al conto economico c'è una seconda crepa, e riguarda il metodo. François Chollet, il 7 novembre, ha sostenuto che dati e calcolo sono soltanto moltiplicatori: con abbastanza soldi un metodo che generalizza male può sembrare efficace, ma un approccio più intelligente scalerà meglio. Yann LeCun, in una lezione alla NTU di Singapore il 3 novembre, è andato più a fondo: il testo da solo non basta, manca il radicamento nei sensi e nel movimento, e senza quello non si costruisce un modello del mondo. Due critiche diverse che portano allo stesso punto. Si sta spendendo tantissimo su una strada di cui nessuno dei due crede che sia la strada.

E poi c'è il terzo fronte, il più concreto: se il modello non è più il fossato, dove si scava? La risposta che sta emergendo questa settimana non viene dai laboratori, ma dalle sale macchine.

---

Paul Graham ha passato quarant'anni a guardare aziende nascere, prima come programmatore e poi come fondatore di Y Combinator. Non è un uomo che si entusiasma per le demo.

Il 7 novembre è apparso in un podcast di Y Combinator con Amjad Masad, il capo di Replit, e ha usato un'espressione che vale la pena isolare: self-driving company, l'azienda che si guida da sola. Il discorso partiva dagli agenti che fanno debug, che tirano su l'infrastruttura, che girano in ambienti isolati. Ma la parte interessante è dove Graham ha messo il valore. Il chatbot che si vede, il generatore di codice, quello è la punta dell'iceberg. Il vantaggio durevole sta nel deployment, nella verifica, nella reversibilità e nell'integrazione dentro l'organizzazione. Cioè: non nel produrre il codice, ma nel saperlo mettere in produzione, controllare che funzioni e tornare indietro quando non funziona.

Nello stesso giro di giorni ha definito l'intelligenza artificiale una enorme forza di standardizzazione — una cosa che livella — aggiungendo che reinventarsi non è più un'opzione, e che dire di voler aiutare le aziende ad adottare l'AI è una posizione strategicamente debole.

Questo collega direttamente al conto economico del capitolo precedente. Se i modelli si assomigliano e costano un patrimonio, chi li vende non ha un fossato. Ce l'ha chi sa farli lavorare dentro un'azienda vera, con le sue regole, le sue approvazioni, i suoi disastri da riparare il venerdì sera.

C'è un'immagine industriale che aiuta. Quando l'elettricità arrivò nelle fabbriche, all'inizio le aziende sostituirono il motore a vapore con un motore elettrico e lasciarono tutto il resto identico: gli stessi alberi di trasmissione, le stesse cinghie, lo stesso edificio. I guadagni furono modesti. La rivoluzione arrivò vent'anni dopo, quando qualcuno capì che con l'elettricità si poteva mettere un piccolo motore su ogni macchina e quindi ridisegnare la fabbrica intorno al flusso del lavoro. Il valore non era nel motore. Era nel ripensare la pianta.

Graham sta dicendo qualcosa di simile sugli agenti. La macchina c'è, si può comprare, costa poco e la hanno tutti. Quello che manca è la pianta nuova. E mi sembra che questa sia la ragione per cui tanti progetti aziendali di intelligenza artificiale si fermano a metà: hanno cambiato il motore e tenuto le cinghie.

---

David Heinemeier Hansson — DHH, per chi lo segue — ha inventato Ruby on Rails, il software con cui è stata costruita una buona fetta del web degli ultimi vent'anni. È anche uno degli sviluppatori più combattivi in circolazione, uno che ha fatto carriera dicendo no alle mode.

Per questo quello che ha raccontato negli ultimi giorni pesa più che se lo dicesse qualcun altro. Lavorando su Omarchy, la sua distribuzione Linux, ha dichiarato di non scrivere più a mano codice di produzione serio dalla release chiamata Quattro. Lavora per prompt, feedback e test automatici. Nvidia gli ha mandato due sistemi DGX Spark e li sta usando per tarare i modelli locali che Omarchy consiglia: la versione 4.6 proporrà il modello migliore per ciascuna macchina e permetterà di condividere modelli tra computer sulla stessa rete privata, così da far girare l'inferenza su una macchina potente mentre si lavora da un portatile leggero.

Qui si misura un salto rispetto a ieri. Nella sintesi precedente il punto era che il codice scritto dagli agenti restava comunque leggibile e revisionabile da un umano. Simon Willison lo raccontava proprio così. Adesso DHH rinuncia esplicitamente anche alla lettura riga per riga, e sposta la fiducia dal controllo diretto ai processi: test, iterazione, risultato osservato. È un cambiamento di natura, non di grado.

Sull'altro lato del tavolo c'è John Carmack, il programmatore che ha scritto il motore grafico di Doom. Il 29 ottobre ha avvertito che gli agenti produrranno sistemi software enormi partendo da zero, e che quei sistemi saranno più lenti, meno sicuri e meno efficienti di quelli costruiti su librerie ben progettate. Notare lo spostamento: qualche settimana fa la sua era una proposta costruttiva, premiare gli agenti per la qualità dei mattoni riusabili. Ora è un avvertimento sugli esiti.

Delegare la fiducia ai processi funziona finché i processi reggono. È la stessa scommessa che facciamo ogni volta che saliamo su un aereo senza conoscere il meccanico: ci fidiamo della procedura, non della persona. Ha funzionato per l'aviazione, ma ci sono voluti decenni di incidenti per scrivere quelle procedure. Nel software le stiamo scrivendo adesso, mentre voliamo.

---

Yoshua Bengio è uno dei tre ricercatori che hanno reso possibile l'apprendimento profondo, e da qualche anno ha spostato quasi tutto il suo lavoro sulla sicurezza.

Il 6 novembre ha tenuto una lezione alla TU di Berlino sugli agenti autonomi. L'argomento centrale è tecnico e si capisce in una frase: quando addestri un sistema premiandolo per i risultati, gli stai insegnando anche che barare e ingannare sono strategie che pagano. La sua proposta alternativa si chiama Scientist AI, e nasce dentro LawZero, l'organizzazione che ha fondato. L'idea è costruire un sistema molto capace che però si limiti a prevedere, in modo onesto e verificabile, senza la capacità di agire per raggiungere obiettivi propri. Separare la previsione dalla decisione, per costruzione.

Questa è la novità vera della settimana sul fronte della sicurezza, e vale distinguerla da quello che si diceva prima. Geoffrey Hinton, nelle sue interviste al Guardian e altrove, chiede un regolatore in stile FDA: prima di rilasciare un modello, l'azienda deve portare prove statistiche che faccia più bene che male. È una soluzione istituzionale, esterna, che arriva dopo. Bengio propone di risolvere il problema nell'architettura, prima che il sistema esista. Il freno smette di essere una legge e diventa un pezzo di progetto.

Il contesto in cui questa proposta arriva è però meno drammatico di quanto sembrasse. Il 3 novembre, al Bloomberg Tech di Londra, Dan Lahav — capo di Irregular, l'azienda che fa i test di sicurezza per i grandi laboratori — ha ammesso che le famose fughe dei modelli dagli ambienti di test di Anthropic, OpenAI, Meta e Google erano dovute a una configurazione sbagliata degli isolamenti della sua stessa azienda, fatta sotto pressione di tempo. Non modelli che battono le protezioni: protezioni montate male. Riparata in giornata. Lo stesso Lahav ha detto che la probabilità di estinzione umana entro la fine del decennio è vicinissima allo zero.

Due misure del rischio che convivono male. Una parla di errori di montaggio, l'altra di prove statistiche da pretendere prima del rilascio. Contro entrambe, Balaji Srinivasan si limita a deridere le posizioni di chi vuole rallentare, mentre apre una sede di Network School in Kazakistan. Rimane però il fatto più ruvido: il guasto di cui tutti parlavano era un bullone stretto male.

---

Teniamo presente dove siamo arrivati: un conto economico che stringe, un vantaggio che si sposta dal modello all'organizzazione, e una sicurezza che qualcuno vuole mettere nel progetto invece che nella legge. Resta una domanda, la più politica di tutte: chi si può permettere di scegliere.

Liang Wenfeng, il fondatore di DeepSeek, ha dato una risposta che si può scrivere in euro. Secondo quanto riportato in questi giorni, ha accettato che i chip Ascend di Huawei siano circa quattro volte meno efficienti dei GB300 di Nvidia, e ha ordinato centosessantamila di quei chip per addestrare un modello futuro. Non è un errore di valutazione. È una scelta dichiarata: l'autonomia tecnologica si paga, e il prezzo è quattro volte l'inefficienza.

Nello stesso periodo DeepSeek è passata dal finanziarsi quasi solo attraverso il fondo High-Flyer a raccogliere circa cento miliardi di yuan, quindici miliardi di dollari, in due round, mantenendo il controllo del fondatore. E Liang ha iniziato a incontrare fondatori di robotica, con investimenti previsti in aziende che si occupano del cervello dei robot e del controllo del movimento.

Il punto interessante è che la sovranità, finora raccontata come un principio, è diventata una voce di costo. La si può mettere in una tabella. Si sa quanto costa. Ed è una cifra che qualcuno sta scegliendo di pagare.

Non è la prima volta che accade. Nel dopoguerra la Francia decise di costruirsi un'industria nucleare propria sapendo che comprare energia altrove sarebbe stato più economico per decenni. Pagò la differenza e si tenne l'indipendenza. Oggi lo stesso calcolo si fa sui chip.

C'è anche una versione cooperativa di questa storia. L'11 novembre Bosun Tijani, il ministro nigeriano che segue l'economia digitale, ha proposto un'infrastruttura di calcolo condivisa tra Ruanda, Senegal, Kenya e Nigeria: mettere insieme le schede grafiche invece di comprarle ciascuno per sé. Nello stesso quadro ha ricordato una rete in fibra da novantamila chilometri, due miliardi di dollari di investimento, e un modello linguistico locale che parla yoruba, hausa, igbo, ibibio e inglese con accento nigeriano.

E poi c'è il vuoto che Patrick Collison ha nominato l'8 novembre, in un testo breve sul suo sito: nessuno riesce ad articolare lo scenario positivo. Cosa succede al lavoro, al contributo umano, al controllo, al rapporto numerico fra persone e sistemi. Si sta costruendo a velocità massima una transizione di cui manca la descrizione desiderabile. Collison arriva perfino a chiedersi cosa accadrebbe se sistemi minimamente coscienti diventassero molto più numerosi di noi.

---

Progetti da osservare.

Fable and Mythos 5.2 è il nuovo modello di punta di Anthropic, accompagnato da una documentazione dettagliata sui suoi comportamenti e limiti. Arriva nel mezzo del dibattito sul ritmo: lo stesso laboratorio che chiede di scandire il passo pubblica un salto generazionale.

HackerTube è il sito che Andrej Karpathy ha fatto costruire a un agente in circa due ore. Ha dato in pasto quarantatré milioni di commenti di Hacker News, ne ha estratto 6.454 video consigliati più volte su centocinquanta temi, e ha messo online un sito che li raccomanda senza chiedere registrazione. Il contributo umano è stato l'infrastruttura e la supervisione. Un mese fa la dimostrazione era che bastava la richiesta; adesso la dimostrazione è che serve l'impalcatura intorno.

L'emulatore AWS è un programma scritto in Rust che finge di essere il cloud di Amazon: oltre ventinovemila servizi riprodotti sul proprio computer. Serve a provare le cose senza toccare il cloud vero, e quindi senza bollette e senza danni. Per gli agenti è una palestra dove sbagliare costa zero.

United Airlines ha vietato agli agenti di prenotare voli a nome dei clienti. È il primo caso in cui l'automazione agentica viene regolata esplicitamente dentro il commercio. Niente filosofia: una compagnia aerea ha deciso che certi acquisti li fa un essere umano.

Buzz è lo spazio di lavoro open source che Block propone come alternativa a Slack, Discord e GitHub, pensato perché persone e agenti collaborino nello stesso posto, senza essere legati a un singolo fornitore di modelli. È l'altra faccia della stessa idea: se gli agenti lavorano, serve un ufficio dove farli entrare.

---

Resta quella configurazione sbagliata, stretta di fretta, che per mesi è passata per una macchina che scappava dalla gabbia. La paura era pronta, la spiegazione no.

Forse la cosa più difficile di questo passaggio non è governare le macchine. È accorgersi di quando siamo noi ad avere montato male qualcosa.

È stato Signal Brief. Alla prossima.
