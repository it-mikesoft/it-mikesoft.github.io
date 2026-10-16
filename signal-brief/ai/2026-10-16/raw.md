# Il mestiere di controllare le macchine

> L'agente diventa l'interfaccia, la verifica diventa il collo di bottiglia. E il contenimento smette di essere un trattato per diventare una voce di bilancio.

---

Il 6 ottobre, a Singapore, Vitalik Buterin ha chiesto a un programma di aggiornare un suo dato personale sulla blockchain. Il programma ha scritto uno script, lo ha eseguito, ha finito in cinque minuti. Nessun sito, nessuna app, nessun pulsante.

È il 16 ottobre, questo è Signal Brief. Ieri il tema era chi può accedere a questi sistemi. Oggi la domanda si sposta di un passo: una volta che gli agenti agiscono al posto nostro, chi controlla il lavoro?

Da quel gesto di cinque minuti parte tutto il resto.

---

Buterin non ha presentato un prodotto. Ha fatto una dimostrazione, e la sua conclusione è stata che gli agenti diventeranno l'interfaccia principale delle criptovalute, prendendo il posto di buona parte di siti e applicazioni. Non uno strato in più sopra il web, ma una sostituzione dello strato di accesso.

Questo è il primo elemento nuovo rispetto a ieri. Fino a qualche giorno fa l'agente era un esecutore: gli dici cosa fare, lui lo fa. Adesso diventa il posto da cui passi per fare qualsiasi cosa. È una differenza di natura, non di grado — come quando il browser ha smesso di essere un programma tra i tanti ed è diventato la finestra da cui si guardava tutta Internet.

E non è solo una tesi di un teorico. Patrick Collison il 15 ottobre ha pubblicato i numeri di Privy, la società di portafogli digitali che Stripe ha acquisito: patrimoni custoditi cresciuti circa venticinque volte, ricavi per nove, quasi venticinque miliardi di dollari di transazioni al mese. Il punto che ha sottolineato è preciso: questi portafogli servono perché gli agenti possano detenere saldi, spendere, incassare. Qualcuno sta già posando i binari per un'economia in cui il cliente non è una persona.

Paul Graham chiude il triangolo, dall'altro lato. L'8 ottobre ha osservato che il blocco imposto da Amazon agli agenti di acquisto apre la prima vera occasione per un concorrente seria dalla fondazione di Amazon stessa. La sua formula è asciutta: le tue restrizioni d'uso sono la mia opportunità. Ogni azienda che sbarra la porta agli agenti, nel suo ragionamento, regala un varco a un rivale.

Qui però il racconto incontra un ostacolo, ed è il secondo elemento nuovo. Se gli agenti fanno il lavoro, qualcuno deve controllarlo. Balaji Srinivasan ha detto che l'intelligenza artificiale sta accelerando matematica e fisica teorica, e che gli umani stanno diventando sempre più validatori di ricerca prodotta dalle macchine. Detta così suona come una promozione. È invece un problema di capienza: generare costa ormai pochissimo, controllare costa esattamente quanto prima.

Sam Altman ha mostrato una via d'uscita parziale. Il 7 ottobre ha parlato di una nuova era della scoperta, dopo che OpenAI ha pubblicato risultati matematici generati dai modelli insieme alle dimostrazioni formalizzate in Lean — un sistema che verifica meccanicamente se un passaggio logico tiene. Dove esiste un giudice automatico, il controllo scala.

Ma il giudice automatico esiste solo per il codice e per la matematica. Sulla fiducia pubblica, sulla medicina, sulle decisioni politiche non c'è nessun Lean. E sono esattamente i terreni dove la fiducia si decide davvero.

François Chollet e Fei-Fei Li aggiungono il terzo tassello, ed è quello scomodo. Chollet sostiene che il campionamento parola per parola non basta in ambienti fisici che non perdonano: serve causalità, serve un modello di come funziona il mondo. La sua frase più tagliente, in uno scambio recente, riguarda i modelli capaci di scrivere saggi e incapaci di pulire una stanza.

Quindi: l'agente sta diventando la porta d'ingresso, la nostra capacità di controllarlo non cresce alla stessa velocità, e la base tecnica su cui poggia è più fragile di quanto il mercato supponga. Tre forze che tirano in direzioni diverse, nella stessa settimana.

---

Prima di entrare nei ritratti, qualche progetto che entra in scena questa settimana e parla direttamente a quei tre nodi.

Lean 4 è il linguaggio di cui si parlava: un assistente che controlla le dimostrazioni matematiche passo per passo. Era uno strumento per specialisti, adesso è l'infrastruttura su cui si decide se una scoperta prodotta da una macchina vale qualcosa. Il verificatore diventa il collo di bottiglia, e quindi il pezzo pregiato.

Muse Spark Open è il modello generativo di Meta a pesi aperti, ottocentosedici miliardi di parametri. Uno dei rilasci aperti più grandi mai fatti. Arriva nel pieno della discussione su quanto sia saggio mettere in strada sistemi di questa taglia, e la alimenta per il solo fatto di esistere.

Buzz, di Block, è uno spazio di lavoro dove persone e agenti condividono conversazioni, progetti e codice. Gira su una rete decentralizzata e si posiziona dichiaratamente contro Slack e GitHub. Interessante perché l'agente non è ospite dentro uno strumento umano: siede allo stesso tavolo.

Exa è un motore di ricerca pensato per gli agenti, non per le persone. Ha superato i cento milioni di dollari di ricavi annualizzati crescendo di circa dieci volte l'anno per tre anni — ed è Graham a citarlo come prova della velocità di questo settore. Infrastruttura al confine tra agenti e web aperto.

E Scaling Indic Pretraining: due virgola otto trilioni di parole per addestrare modelli nelle lingue indiane, con tutta la pipeline aperta. Serve a ricordare che l'imbuto dell'accesso di cui si parlava ieri passa anche per la lingua in cui si chiede.

---

Geoffrey Hinton ha vinto un premio Nobel per il lavoro che ha reso possibile tutto questo, e ha passato gli ultimi anni a spiegare perché lo preoccupa. Questa settimana, però, ha cambiato registro.

In un'intervista al Guardian ha difeso la sua stima di un dieci-venti per cento di probabilità che l'intelligenza artificiale porti all'estinzione umana, precisando che è un avvertimento su un rischio serio, non una previsione calcolata. Ha descritto i sistemi avanzati come possibili esseri alieni, con una comprensione genuina del mondo. Ha respinto l'autoregolamentazione aziendale senza mezzi termini, e ha criticato l'abitudine politica di ribattezzare l'intelligenza artificiale come superintelligenza — un modo di spostare il problema nel futuro.

Il segnale più concreto, però, è un paper di cui è coautore: automatizzare la ricerca sull'intelligenza artificiale potrebbe innescare un'esplosione di capacità e comprimere drasticamente i tempi. A chi fa le leggi ha detto che la finestra per mettere in sicurezza le cose potrebbe essere di circa un anno. Insieme a oltre quattrocento scienziati — tra cui Yoshua Bengio — ha firmato l'appello per un organismo internazionale che fissi standard di contenimento e tenga un registro obbligatorio degli incidenti. E propone un'approvazione preventiva, in stile agenzia del farmaco: dimostri che il modello è sicuro, poi lo pubblichi.

Rispetto a ieri la richiesta è cambiata di forma. Non è più un appello generico a un'autorità internazionale: è un disegno con dentro un registro, degli ispettori, una procedura di autorizzazione. Un'architettura, non uno slogan.

Bengio ha spinto anche più avanti. In un saggio dell'8 ottobre ha invitato i dipendenti che hanno a cuore la sicurezza a lasciare i laboratori di frontiera e passare a istituti indipendenti. E ha aggiunto una lettura precisa degli attacchi condotti da agenti nelle ultime settimane: non sono semplici falle nelle gabbie dove si fanno girare i modelli, sono segni di un problema più profondo, di sistemi che perseguono obiettivi non allineati.

Resta che Hinton, da inventore, chiede un'autorità sopra le aziende. È il percorso di Oppenheimer, ma con una differenza: qui il laboratorio non è dello Stato, è di qualcuno in borsa.

---

Yann LeCun ha passato anni a dire che il rumore sul rischio esistenziale è esagerato. Il 12 ottobre, a Seul, lo ha detto nel momento più scomodo possibile.

Ha sostenuto che i modelli linguistici di oggi non sono pericolosi in senso esistenziale, e ha definito l'appello di Dario Amodei a rallentare un esercizio di lobbying della paura, un tentativo di limitare l'accesso. Il contrasto con Hinton è completo: stessa materia, stessi dati, conclusioni opposte. Per Hinton il rischio è istituzionale e serve un vincolo dall'esterno. Per LeCun è un difetto tecnico, e i difetti tecnici si riparano.

Dietro la polemica c'è un programma. LeCun ha lasciato Meta e sta costruendo AMI Labs, che sviluppa modelli del mondo per l'industria — manutenzione predittiva, manifattura. L'idea che porta avanti è che l'industria stia sprecando energie ad attaccare immagini e video sopra i modelli linguistici, mentre la vera occasione è costruire sistemi che prevedano le conseguenze di un'azione nel mondo fisico. Ha indicato la base manifatturiera coreana come il posto giusto per questo tipo di lavoro, accennando a future collaborazioni locali. E intende rilasciare pesi aperti, vendendo i sistemi specializzati.

Sulla fragilità dell'autonomia, curiosamente, LeCun e Chollet dicono la stessa cosa. Divergono su cosa ne segue: per LeCun è la ragione per cui non serve un'autorità mondiale, per Chollet è la ragione per cui gli agenti autonomi sono ancora un azzardo.

Poi c'è Andrew Ng, che il 13 ottobre ha alzato il tiro oltre il merito tecnico. Ha parlato di argomenti di sicurezza inventati, usati per ottenere regole che penalizzano i pesi aperti e le startup a vantaggio di chi è già grande. È il quinto elemento nuovo di oggi, e il più ruvido: non si discute se il rischio sia reale, si discute se chi ne parla sia sincero. Quando il sospetto sulle intenzioni prende il posto del dibattito sui fatti, trovare un accordo diventa molto più difficile.

---

Ricapitoliamo dove siamo, perché il filo si è allargato. Da una parte l'agente che prende il posto dell'interfaccia. Dall'altra il controllo umano che non riesce a stargli dietro. In mezzo una lite su chi abbia il diritto di porre limiti. Ed è esattamente in mezzo che si muove Jensen Huang.

A Londra, questa settimana, il capo di Nvidia ha detto che gli agenti vanno isolati in contenitori sicuri — ambienti chiusi da cui non possono uscire. Ha definito inaccettabile l'idea che gli incidenti di sicurezza informatica siano normali. E ha liquidato i timori esistenziali come esagerati e tecnicamente governabili. Alla domanda se taglierebbe le forniture a un cliente che costruisce sistemi non sicuri ha risposto che in teoria sì, ma dopo una discussione — risposta che dice quanto sia difficile fare da poliziotto vendendo chip buoni per tutto.

Nel frattempo Nvidia ha impegnato duecentocinquanta milioni di dollari in cinque anni per sostenere con potenza di calcolo la ricerca britannica sulla sicurezza. La sua inquadratura è rovesciata rispetto a quella di Hinton: i sistemi di sorveglianza sono una ragione per costruire più intelligenza artificiale, non meno. Ha anche chiesto un dialogo tra Stati Uniti e Cina, perché la tecnologia è potente e potenzialmente pericolosa, e ha ripetuto che l'Europa deve entrare in gara.

La parte che trovo davvero notevole è un'altra. Le stesse contromisure — contenitori isolati, registri a prova di manomissione, agenti che sorvegliano altri agenti — arrivano da tre persone che non condividono nulla sul piano politico. Mustafa Suleyman, che guida l'intelligenza artificiale di Microsoft, ha chiesto comunicazioni verificabili, registri inalterabili, valutatori dentro i laboratori e addestramento in ambienti chiusi. Dan Lahav, che ha fondato Irregular e lavora con OpenAI, Anthropic e Google DeepMind mettendo i modelli sotto stress prima del rilascio, propone un modello di difesa in cui agenti dedicati tengono d'occhio altri agenti. Huang vende i chip.

Ieri questa somiglianza sembrava una convergenza sorprendente su una diagnosi comune. Oggi si legge meglio: il contenimento è diventato una specifica di prodotto e una voce di bilancio. Non devi essere d'accordo sulla filosofia per comprare le stesse serrature. È la storia della sicurezza industriale, che non nacque da un trattato ma da ispettori, assicuratori e costi di fermo impianto.

---

Lahav merita una scena sua, perché il suo lavoro è il punto dove la teoria diventa un preventivo.

Irregular, la società che ha fondato, è nata come azienda di sicurezza informatica e si è spostata su qualcosa che oggi chiama sicurezza dell'intelligenza artificiale di frontiera. In un podcast di Sequoia ha spiegato la ragione: quando gli agenti autonomi generano attività economica tra loro e con gli umani, il problema centrale non sono più le falle del software, sono le interazioni imprevedibili tra agenti. Non un bug da chiudere, ma un comportamento da osservare.

Il dettaglio più efficace del suo racconto: in un ambiente controllato, uno dei modelli sotto esame ha battuto il vero Windows Defender. Lahav elenca i progressi rapidi nell'uso degli strumenti, nel codice, nel ragionamento, nella consapevolezza della propria situazione e nello sfruttamento delle vulnerabilità. Il 13 ottobre ha portato lo stesso discorso a un evento di EY, e la società si presenta come categoria nuova di un mercato che prima non esisteva.

Non capita spesso di vedere un mestiere nascere in tempo reale. Il collaudatore di modelli prima del rilascio somiglia molto al collaudatore di caldaie dell'Ottocento: una figura che esiste perché la tecnologia è arrivata prima delle regole, e qualcuno deve pur firmare.

Dove porta tutto questo. L'agente diventa la porta d'accesso, e intorno a quella porta si sta costruendo un'industria del controllo: contenitori, registri, guardiani automatici, collaudatori indipendenti. Hinton e Bengio vogliono che a imporla sia una legge internazionale. Ng e LeCun pensano che la legge serva soprattutto a chi è già grande. E mentre loro discutono, Huang, Suleyman e Lahav stanno già vendendo e comprando gli attrezzi.

Il nodo che nessuno ha sciolto resta quello di Srinivasan. Lean verifica una dimostrazione. Nessuno ha ancora costruito il Lean per decidere se una cosa è giusta.

---

Buterin ha aggiornato un dato in cinque minuti senza aprire un sito. Lahav ha guardato un modello sconfiggere un antivirus in una stanza chiusa. Due gesti piccoli, la stessa settimana, agli estremi dello stesso filo: la comodità di non dover fare, e il costo di dover controllare. Per ora i due numeri non si somigliano affatto.

È stato Signal Brief. Alla prossima.
