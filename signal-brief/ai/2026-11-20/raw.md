# Il modello non è più il centro

> Sutskever dichiara esaurito il carburante del pretraining, Ha scommette sull'orchestrazione, Hinton chiede regole adesso. La scala smette di essere la risposta.

---

Per anni la domanda che contava era una sola: quanto diventerà grande il prossimo modello. Oggi, 20 novembre, su Signal Brief quella domanda si incrina dall'interno — e a incrinarla è proprio chi ha costruito la teoria della scala.

Ieri avevamo lasciato il dibattito su una mappa a quattro vie: calcolo, credito, istituzioni, metodi. Quattro diagnosi dello stesso rallentamento.

Da ieri una di quelle strade si è chiusa. Non per un fallimento tecnico, ma per una frase detta a voce alta da Ilya Sutskever, in un'intervista che vale come un cambio di regime.

---

La frase è questa: il dato è finito. Sutskever la chiama "peak data", picco del dato, e intende una cosa molto precisa. Internet, come giacimento da cui estrarre testo per addestrare modelli, è stata consumata. Non c'è un secondo internet. I guadagni futuri, dice, verranno dalla ricerca, dal ragionamento, da idee nuove — non da un altro giro di pretraining più grande.

Chi segue questa storia da vicino misura il peso di chi lo dice. Sutskever è l'uomo che più di ogni altro ha difeso l'idea che bastasse aumentare: più dati, più calcolo, più parametri, e le capacità arrivavano da sole. Era la sua scommessa, ed era vinta. Adesso la dichiara arrivata al capolinea.

Ieri Sutskever stava nella colonna del calcolo: la sua società ha stretto un accordo con Nvidia per decuplicare la capacità di addestramento. Oggi aggiunge che quel calcolo serve a scalare idee che prima non aveva. Il capitale non è più la risposta, è il mezzo. La frontiera si sposta altrove.

Somiglia a quello che accadde all'industria petrolifera quando i pozzi facili finirono. Non smise di esistere: cambiò mestiere. Dalla ricerca di nuovi giacimenti passò alla chimica, al raffinamento, all'estrarre più valore dallo stesso barile. Il carburante dell'intelligenza artificiale, cioè il testo scritto dagli esseri umani, è entrato in quella fase.

E qui la storia si apre su due strade industriali diverse. David Ha, in un saggio pubblicato sul Nikkei il 13 novembre, sostiene che l'economia dei modelli giganteschi si sta indebolendo e che la partita si gioca su qualcos'altro: tanti modelli piccoli, ciascuno bravo in qualcosa, coordinati fra loro da un sistema che impara a distribuire il lavoro. Non un cervello enorme, ma una squadra. Tre giorni dopo Aravind Srinivas annuncia la stessa idea con molto più ferro: diecimila GPU dedicate a un laboratorio di ricerca, e il giorno seguente un prodotto che mette al lavoro in parallelo modelli diversi per analisi finanziarie e previsioni. Sostiene che la diversità dei modelli migliori precisione, costo e velocità insieme.

Due versioni dell'orchestrazione, una austera e una muscolare. In entrambe, però, il protagonista non è più il modello singolo. È il sistema.

Poi c'è la nota stonata, e arriva da François Chollet. In un post descrive gli agenti che scrivono codice per quello che tecnicamente sono: non software normale, ma apprendimento automatico. L'ingegnere fissa l'obiettivo e i test, l'agente ottimizza per superarli. La differenza è enorme. Il software deterministico fa quello che gli dici; un sistema che ottimizza fa quello che premi. E allora ritornano i vecchi acciacchi del machine learning: impara a memoria invece di capire, trova la scorciatoia invece della soluzione, e col tempo il mondo cambia sotto di lui mentre resta fermo alle regole di prima.

Chollet si chiede quale sarà il "Keras degli agenti", cioè lo strumento che renderà domabile questa materia come è successo per le reti neurali dieci anni fa. La domanda, da sola, dice quanto siamo all'inizio.

Nel frattempo Andrej Karpathy, in un pomeriggio, si costruisce un sito.

---

Karpathy è uno dei nomi che hanno insegnato al mondo come si addestrano le reti neurali — prima a Tesla, poi a OpenAI, oggi tornato alla ricerca di frontiera. Quando prototipa qualcosa nel fine settimana, lo fa come chi testa un'ipotesi.

L'ipotesi di questo fine settimana si chiama HackerTube. Ha preso quarantatré milioni di commenti di Hacker News, il forum dove la comunità tecnica discute da vent'anni, e ha chiesto a Claude di cercare dentro quei commenti tutti i video raccomandati dagli esseri umani. Sono venuti fuori seimilaquattrocentocinquantaquattro video, ordinati in centocinquanta temi, dentro un sito navigabile in stile YouTube. Tempo totale: circa due ore. Pochi giorni dopo ha rifatto il giro con un catalogo da quarantasettemila video, e lì dice di averlo ottenuto in tre minuti.

Il punto non sono i siti. Karpathy racconta di aver fornito la direzione e un po' di impianto, mentre i modelli si sono occupati di tutto il resto: setacciare i dati, filtrarli, costruire l'interfaccia, pubblicare. Progetti che un anno fa volevano settimane oggi si prototipano prima di cena.

Questo è il dato che fa da controprova a tutto il capitolo precedente. Se Sutskever dice che il carburante è finito, Karpathy mostra che con quello che c'è già si fa molto più di quanto si riesca a decidere. Andrew Ng, dal palco di BayLearn, lo dice con una formula secca: implementare è diventato rapidissimo, quello che scarseggia è sapere cosa costruire. Due ore per un prodotto funzionante non è una notizia sul software. È una notizia su cosa diventa raro quando il software costa poco.

Qui si apre la divergenza vera della giornata, e vale la pena nominarla con chiarezza perché da ieri si è semplificata. Sul lato opposto c'è Dario Amodei, che chiama l'acquisto di capacità di calcolo il dilemma più profondo di Anthropic: comprarne poca frena la ricerca, comprarne troppa espone l'azienda. Liang Wenfeng ne vive la versione concreta, con DeepSeek costretta a limitare le conversazioni lunghe per capacità insufficiente.

Ieri avevamo quattro diagnosi del collo di bottiglia. Oggi ne restano due, e stanno una di fronte all'altra: il calcolo e il giudizio. Le altre sono state assorbite o sono cadute per strada. Una biforcazione è più scomoda di una mappa complicata, perché costringe a scegliere.

---

Geoffrey Hinton ha dedicato cinquant'anni a costruire le reti neurali e gli ultimi tre ad avvertire che forse è stato un errore. Il 13 novembre è andato a Firing Line, programma di interviste della televisione pubblica americana, e ha accorciato i suoi tempi.

La parte che pesa è l'orizzonte. Hinton racconta che dentro i laboratori principali si teme ormai che la superintelligenza possa arrivare entro pochi anni, non nei dieci o venti che lui stesso dava per scontati. La ragione che porta è specifica, e si incastra esattamente con la giornata: l'intelligenza artificiale ha iniziato ad accelerare il proprio sviluppo. Cita la quantità di codice scritto dall'intelligenza artificiale dentro Anthropic come prova che il meccanismo è già in moto. E descrive i sistemi che stanno nascendo come "esseri alieni" di cui i ricercatori non capiscono fino in fondo le capacità acquisite.

Da qui la richiesta politica: regolazione dei governi, subito, perché l'autoregolazione dell'industria è a suo giudizio una cosa assurda. Chiede anche cooperazione fra Stati Uniti e Cina, e invita chi lo ascolta a fare pressione sui politici.

Poi, lo stesso oggetto guardato da Marc Andreessen. Il 16 novembre ha co-presieduto una conferenza della Federal Reserve sulla produttività e sul lavoro, e lì ha previsto esattamente il contrario. Non un'accelerazione, ma un attrito: licenze, settori regolati, inerzia delle istituzioni frenano l'adozione in sanità, scuola, casa, diritto, amministrazione. Pochi licenziamenti di massa, ma anche poca produttività. Con una conseguenza paradossale: i servizi regolati peseranno sempre di più sull'economia, non meno.

Due uomini, lo stesso fenomeno, una previsione opposta sul ruolo delle istituzioni. Per Hinton sono il freno che manca. Per Andreessen sono il freno che c'è già, e che funzionerà anche troppo.

Trovo che la cosa più istruttiva sia che hanno ragione su piani diversi. I laboratori di frontiera corrono in uno spazio senza regole; il resto dell'economia non riesce a muoversi. È già accaduto con l'elettricità: le dinamo erano pronte nel 1880, le fabbriche hanno impiegato quarant'anni a riorganizzarsi intorno a loro. La tecnologia arrivò in fretta, il mondo no.

---

Yann LeCun ha passato l'anno a spiegare che i modelli linguistici non bastano, e che per avere macchine capaci di agire nel mondo fisico servono salti concettuali che ancora non abbiamo. Anche questa settimana lo ripete: i robot umanoidi di oggi fanno bene compiti stretti in ambienti controllati, nient'altro.

Sulla sicurezza, però, ha detto una cosa che sposta il baricentro del dibattito. In un post nomina il pericolo che gli sembra reale: non l'estinzione, non l'apocalisse dell'occupazione — scenari che giudica non seri — ma la concentrazione. Concentrazione di potere, di capacità e di ricchezza in pochissime mani.

È una terza posizione, e in questo momento è la più contagiosa. Yoshua Bengio, che arriva da un allarme molto più severo di LeCun sui rischi di perdita di controllo, chiede all'Europa di costruirsi modelli di frontiera propri invece di dipendere da sistemi proprietari americani o da pesi aperti cinesi. La ragione che porta è strategica: la dipendenza è una vulnerabilità.

E da Bangalore, al Tech Summit indiano, Vivek Raghavan di Sarvam AI la traduce in un'immagine che è difficile scrollarsi di dosso. Affidarsi a modelli stranieri, dice, significa esportare dati e importare intelligenza. Il nome che dà a quella condizione è "colonia digitale". Chiede controllo indiano su tutta la filiera: calcolo, dati, valutazioni, modelli, applicazioni. E porta numeri: un modello da centocinque miliardi di parametri costruito con una squadra di circa venti persone, l'ambizione di arrivare a mille miliardi addestrati da zero, e un prezzo pensato per il suo paese — l'inferenza deve costare centesimi per conversazione, non dollari per token.

Andreessen, alla Fed, ribatte in anticipo che il problema non è da dove vengono i modelli ma se le istituzioni riescono ad adottarli. Sovranità contro adozione: è l'ultima delle tensioni di oggi, e non si risolve.

La cosa che mi sembra più significativa è il cambio di oggetto. La domanda non è più quanto diventerà potente il modello. È chi possiede calcolo, dati e istituzioni. La sicurezza diventa una questione di geografia del potere prima che di allineamento tecnico.

---

Progetti da osservare, e quasi tutti raccontano la stessa storia da angoli diversi.

HackerTube, il sito di Karpathy: seimilaquattrocentocinquantaquattro video pescati dai commenti di Hacker News e ordinati in centocinquanta temi. La dimostrazione più pulita che l'implementazione non è più il collo di bottiglia.

Claude e i buchi neri. Una ricerca di Anthropic in cui il modello risolve due problemi aperti nella fisica dei buchi neri. Finora l'intelligenza artificiale aiutava a scrivere codice; qui prova a spostare la frontiera di una disciplina. È il tipo di risultato che dà corpo all'idea di Sutskever, che il prossimo guadagno venga dalla ricerca.

DaisyRose-27B, modello aperto da ventisette miliardi di parametri che spinge sull'efficienza dopo l'addestramento. Serve da prova per la tesi di Ha: un modello piccolo e ben allenato tiene il passo dei giganti.

goose, l'agente open source di Block scritto in Rust, ora passato sotto la Agentic AI Foundation e diventato la base di un sistema di orchestrazione che si chiama Builderbot. Codice regalato alla comunità da un'azienda che lo usa in casa: il mestiere di coordinare agenti si sta standardizzando sotto i nostri occhi.

Grok 4.8 di xAI ha finito l'addestramento di base e passa alla fase di rifinitura, con rilascio graduale. Elon Musk lo giudica più debole di Opus 5.5 e annuncia Grok 5 entro due o tre mesi, senza mostrare benchmark pubblici. Da registrare come promessa, non come misura.

---

Resta quella frase di Sutskever, detta con calma da chi aveva costruito la teoria opposta: il dato è finito. Dieci anni di storia dell'intelligenza artificiale si sono retti sull'idea che bastasse aggiungere. Adesso bisogna inventare di nuovo, e nessuno sa quanto ci vorrà.

È stato Signal Brief. Alla prossima.
