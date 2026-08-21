# Il collo di bottiglia si è spostato

> Generare testo e codice costa quasi nulla. Verificarli, no. Willison, Graham, Buterin, Friedman e Carmack raccontano la stessa settimana da cinque porte diverse.

---

Questa settimana molte voci diverse del mondo dell'intelligenza artificiale sono arrivate alla stessa conclusione: produrre testo e codice costa ormai pochissimo, mentre controllarli costa sempre di più. Successe qualcosa di simile nelle filande inglesi di fine Settecento: le macchine resero rapidissima la filatura, e di colpo furono i tessitori a non tenere il passo, sommersi da più filo di quanto riuscissero a lavorare. Ci vollero decenni per rimettere in equilibrio la fabbrica. Signal Brief, venerdì 21 agosto 2026. Si comincia da una definizione data quasi di sfuggita, in un post di due settimane fa.

---

Il 6 agosto François Chollet ha scritto una frase che sembra tecnica e invece è una presa di posizione: i sistemi che oggi funzionano meglio sono un grosso programma tradizionale che chiama molte volte una rete neurale, e questa, dice, è esattamente la definizione di architettura neurosimbolica. Li ha chiamati sandwich simbolici. Il modello sta in mezzo, il pane è codice scritto da esseri umani.

Fino a poco tempo fa quella frase veniva usata come arma polemica contro chi scommette tutto sulla scala. Adesso Chollet la usa in modo diverso: non come accusa, ma come punto di partenza. È così che sono fatte le cose, quindi è lì che si progetta. L'8 agosto ha rilanciato lavori sul suo benchmark ARC dove il programma esterno costruisce, con l'aiuto del modello, una piccola mappa simbolica del mondo di gioco. Il punteggio migliore su quella prova, ha precisato, era del 2,70 per cento. Il metodo promette, la difficoltà resta intatta.

Ieri il filo era l'agente come unità di lavoro: non più la singola risposta, ma ore di esecuzione. Oggi la domanda si sposta di un passo: che cosa c'è intorno all'agente. E la risposta che arriva da più parti è che il valore si è spostato dal modello al software che lo governa.

Il parallelo storico più onesto è l'elettricità nelle fabbriche. I motori elettrici esistevano da vent'anni e non producevano quasi nessun guadagno di produttività, perché venivano montati al posto della vecchia macchina a vapore, in mezzo allo stesso capannone. Il salto arrivò quando gli stabilimenti furono ridisegnati intorno al motore. Il motore non era la novità. La pianta della fabbrica lo era.

Nat Friedman, in una conversazione pubblicata il 20 agosto, dice la stessa cosa in linguaggio da investitore: la scrittura di codice è ormai terreno coperto, il valore che resta sta nel costruire gli ambienti dove gli agenti imparano a fare altro. Simon Willison la dice da programmatore: gli agenti rendono il codice economico da scrivere e più difficile da rileggere. Paul Graham la dice guardando i modelli da fuori: migliorano dove esiste una risposta giusta, ristagnano dove il giudizio è opinabile. Vitalik Buterin la trasforma in un progetto concreto: serve un linguaggio che renda leggibili le dimostrazioni prodotte da una macchina.

Quattro mestieri diversi, un unico punto: generare è abbondante, verificare è scarso.

Poi c'è la partita del calcolo, e lì le posizioni si allontanano parecchio. Ilya Sutskever, dopo l'accordo con Nvidia di fine luglio, punta a decuplicare la potenza di calcolo della sua azienda in dodici mesi. Jensen Huang ha portato sei grandi nomi di Wall Street a mobilitare oltre cinquecento miliardi di dollari per data center, e ripete che nell'intelligenza artificiale il calcolo è ricavo. John Carmack lo tratta come una pila di banconote da cento date alle fiamme, da bruciare solo quando la risposta che cerchi vale il falò. Accumularlo, finanziarlo, oppure spenderlo a malincuore: tre modi incompatibili di guardare la stessa bolletta.

Sul rischio, infine, la spaccatura non riguarda la potenza ma la proprietà. Geoffrey Hinton teme macchine più astute di noi. Naval Ravikant, in un post del 15 agosto, sposta l'accusa sulle mani che le tengono. Dario Amodei ammette che il problema vero è la fiducia, non la capacità.

Si comincia da chi conta le righe.

---

Simon Willison è il cronista più affidabile di questa fase: un programmatore che prova ogni modello che esce, scrive quasi ogni giorno sul suo sito e produce strumenti piccoli e utili. Non vende nulla, e questo lo rende una fonte rara.

Il suo pezzo più recente si intitola, tradotto, integrità concettuale e conteggio delle righe di codice. L'argomento è semplice e scomodo: gli agenti hanno reso il codice economico da scrivere, ma non hanno reso più economico leggerlo. Il costo si è spostato tutto sulla revisione, cioè sull'unica parte del lavoro che è rimasta rigorosamente umana. Chi misura la produttività in righe prodotte sta contando la cosa sbagliata: sta contando il filo, non il tessuto.

Nelle stesse settimane Willison ha fatto esattamente quello che ci si aspetta da lui. Ha provato il nuovo modello aperto di Alibaba, Qwen 3.8 nella versione da ventisette miliardi di parametri, definendolo davvero notevole e insieme incline a pensare troppo, a girare in tondo prima di rispondere. Ha registrato che Anthropic ha reso predefinita la modalità automatica del suo strumento di programmazione. Ha rilasciato la versione 0.32 della sua libreria, che ora mostra le tracce di ragionamento del modello e tiene un registro consultabile di tutto quello che è successo.

Quest'ultimo dettaglio è più significativo di quanto sembri. Un programmatore che sostiene pubblicamente che il vincolo è diventata la revisione passa poi il pomeriggio a costruire strumenti che rendono ispezionabile quello che la macchina ha fatto. Non è una coincidenza: è la stessa tesi, scritta una volta in italiano e una volta in codice.

C'è un precedente che aiuta. Quando la contabilità in partita doppia si diffuse nelle città mercantili italiane, non rese nessuno più ricco di per sé. Rese verificabile la ricchezza, e questo cambiò chi poteva prestare a chi. Gli strumenti che Willison sta costruendo appartengono a quella famiglia: non fanno andare più veloce la produzione, fanno vedere cosa è stato prodotto.

Il dubbio che il suo pezzo lascia aperto è meno rassicurante. Se la revisione è il vincolo, e la revisione richiede di capire il codice, allora la quantità di software che una squadra può possedere davvero non è cresciuta granché. È cresciuta solo la quantità che può accumulare.

---

Paul Graham ha costruito la sua reputazione osservando migliaia di aziende appena nate e scrivendone in prosa asciutta. Non fa previsioni sui modelli, fa previsioni su cosa la gente riesce a costruire.

All'inizio di agosto ha proposto una spiegazione secca di dove i modelli stanno migliorando e dove no. La matematica ha risposte giuste e sbagliate, quindi si allena bene. La scrittura no, e infatti procede più lentamente. Non è una questione di quanto sia difficile un compito: è una questione di quanto sia facile dire se l'hai svolto bene. Dove esiste un giudice automatico, la macchina corre. Dove il giudizio è una discussione tra persone, la macchina si ferma.

Il 12 agosto ha aggiunto un pensiero sulle aziende: l'intelligenza artificiale potrebbe un giorno capovolgere il modo in cui si fonda un'impresa, ma per adesso il ciclo di base non è cambiato, costruire quello che serve agli utenti e muoversi in fretta. Due giorni dopo, in un'intervista, ha detto di essere preoccupato come lo sono i fondatori con cui parla, e ha aggiunto che le aziende piccole restano comunque meglio piazzate delle grandi, perché quando il mondo cambia possono girare il timone in una settimana.

Il collegamento con il resto della giornata è diretto. Willison dice che il vincolo è verificare. Graham dice che la verificabilità è anche il motore: si progredisce dove si può controllare. Sono la stessa proprietà vista dalle due estremità, il freno e l'acceleratore.

Il precedente che viene in mente sono i test standardizzati nelle scuole. Misurano quello che è misurabile, e per questo funzionano; poi lentamente la scuola si riorganizza intorno a quello che loro misurano, e quello che non entra nel foglio delle risposte esce dal programma. Se i modelli avanzano solo dove esiste un criterio automatico, c'è un rischio simmetrico: che le cose importanti diventino quelle facili da correggere.

Graham dice che alla scrittura toccherà comunque, prima o poi. Difficile dire se sarà perché i modelli avranno imparato a scrivere meglio, o perché nel frattempo avremo deciso che scrivere bene significa qualcosa di più semplice da controllare.

---

Vitalik Buterin ha una posizione insolita: guida la parte intellettuale di Ethereum, la seconda rete di criptovalute al mondo, e scrive di intelligenza artificiale da persona che deve difendere qualcosa di concreto da attacchi reali.

Nella sua agenda per l'anno prossimo, uscita tra fine luglio e metà agosto, tre priorità stanno insieme: resistenza ai computer quantistici, privacy più forte, e verifica formale assistita dall'intelligenza artificiale. La terza è quella che interessa qui. Verifica formale significa dimostrare con criteri matematici che un pezzo di software fa esattamente quello che dichiara, e nient'altro. È un lavoro lento, costoso, e per questo riservato a poche cose critiche.

L'idea di Buterin è usare i modelli per analizzare le specifiche, cercare errori e stringere le dimostrazioni. Ma insieme propone qualcosa di più interessante: un linguaggio pensato perché le prove prodotte da una macchina restino leggibili da un essere umano. Non semplicemente corrette. Leggibili.

Nello stesso periodo ha messo in chiaro il rovescio della medaglia. Ha criticato l'idea di affidare a un sistema automatico le decisioni di governo di una rete, preferendo meccanismi di competizione tra opinioni con supervisione umana sopra. E in un intervento di luglio ha respinto la lettura dell'intelligenza come un unico numero che sale, difendendo il modello del centauro, la macchina che aumenta l'essere umano invece di sostituirlo.

Il filo con la giornata è evidente: dove Willison lamenta che il codice è difficile da rileggere, Buterin propone di cambiare la lingua in cui è scritta la prova. Non chiede alle persone di leggere più in fretta, chiede alla macchina di scrivere in modo controllabile.

Ricapitoliamo dove siamo prima di proseguire. La produzione è diventata abbondante, la verifica è la risorsa scarsa, e ognuno la aggredisce dal proprio mestiere: con strumenti, con benchmark, con linguaggi formali. Chi guarda il problema dal lato dei soldi, però, la racconta in un altro modo ancora.

Sulla posizione di Buterin resta una domanda pratica. Una dimostrazione leggibile è comunque una dimostrazione che qualcuno deve leggere. Il tempo umano continua a essere il fondo del sacco, e nessuno ha ancora spiegato come si allarga.

---

Nat Friedman ha guidato GitHub, la piattaforma dove vive gran parte del software libero del mondo, e da qualche anno investe. Quest'estate il segnale esterno più grosso che lo riguarda è stato l'interesse di Meta per il suo fondo e per lui.

Il 20 agosto è uscita una sua conversazione registrata durante un evento di Stripe. La frase che conta è questa: la programmazione è ormai un dominio ben coperto, e la prossima ondata verrà dal costruire sistemi agentici in settori meno battuti, attraverso ambienti e compiti di apprendimento per rinforzo. Tradotto per chi non lavora con questa roba: apprendimento per rinforzo significa far provare e riprovare un sistema in una situazione simulata, premiandolo quando arriva al risultato giusto. L'ambiente è la situazione. Il premio è il criterio che stabilisce se ha fatto bene.

Detto così si capisce perché Friedman, Graham e Willison stiano parlando dello stesso oggetto. Costruire un ambiente di addestramento significa scrivere in anticipo la regola che dice cosa è giusto. È verifica, cristallizzata dentro un simulatore.

Friedman aggiunge un secondo pezzo: gli agenti compreranno e venderanno online sempre di più, quindi le piattaforme dovrebbero posizionarsi come l'infrastruttura predefinita di quel traffico. E ha messo soldi in una società che assicura gli agenti, cioè che accetta di pagare quando uno di loro combina un danno. Assicurare qualcosa significa averne stimato il rischio, e stimare il rischio è ancora una forma di verifica, questa volta scritta in un contratto.

C'è un precedente in un mestiere completamente diverso. Quando l'aviazione civile smise di essere pionieristica, la crescita non venne dagli aerei migliori ma dai simulatori di volo, che permisero di addestrare piloti a costo basso e rischio zero. L'aereo esisteva già. Mancava il posto dove imparare a portarlo.

Se la lettura di Friedman è giusta, la merce pregiata dei prossimi due anni non sono i modelli e nemmeno gli agenti, ma le palestre. E le palestre le costruisce chi conosce un mestiere abbastanza bene da sapere quando un lavoro è fatto come si deve. Il che riporta il valore, curiosamente, verso i domini specialistici che sembravano tagliati fuori.

---

John Carmack ha scritto i motori grafici di Doom e Quake, poi ha fatto realtà virtuale, adesso guida una piccola squadra che insegue l'intelligenza artificiale generale con un approccio deliberatamente frugale.

Nelle ultime due settimane ha discusso pubblicamente di dettagli tecnici dell'apprendimento per rinforzo, criticando un metodo che elabora l'esperienza al volo e difendendo la vecchia pratica di conservare le partite passate in un archivio da cui ripescare. È una discussione da specialisti, ma il modo in cui la conduce dice molto: primi principi, esperimenti stretti, nessuna deferenza verso la moda.

La frase che circola di più, però, è un'altra. Carmack ha ripetuto che il calcolo va trattato come una pila di banconote da cento date alle fiamme, e che ha senso accendere il fuoco solo quando la conoscenza che stai cercando lo giustifica. Non è un discorso di risparmio. È un modo di stabilire cosa conta come risultato: un esperimento riuscito non è quello che gira su più macchine, è quello che ti lascia sapere qualcosa che prima non sapevi.

Messa accanto ai numeri di questa estate, la frase suona quasi provocatoria. Da una parte c'è chi progetta capannoni di calcolo grandi come quartieri e li finanzia sui mercati, con Huang che parla di oltre cinquecento miliardi e Sutskever che punta a moltiplicare per dieci in un anno. Dall'altra c'è una squadra piccola che considera ogni ora di calcolo una spesa da giustificare.

Storicamente, tutte e due le posizioni hanno vinto almeno una volta. Le grandi ferrovie ottocentesche si costruirono con capitale enorme e sprechi enormi, e il paesaggio ne uscì trasformato. Ma il transistor nacque in un laboratorio con tre persone e un budget modesto. Non esiste una regola che dica quale delle due strade porti alla prossima idea.

Quello che rende la posizione di Carmack rilevante oggi non è il risparmio in sé, ma il criterio. In un anno in cui il calcolo viene misurato in miliardi di dollari e in gigawatt, lui propone di misurarlo in domande a cui hai risposto. È l'unica unità di misura, tra quelle in circolazione, che non si può gonfiare comprando altre macchine.

---

Progetti da osservare, e quasi tutti raccontano la stessa storia da un'altra angolazione.

Il primo si chiama Prime Intellect Environments Hub, ed è una raccolta pubblica di ambienti dove addestrare agenti, ognuno con dentro il criterio che stabilisce se il compito è riuscito. Ne sono stati caricati oltre duemilacinquecento. È esattamente il terreno che Friedman indica come scoperto, e qualcuno lo sta già coltivando in pubblico.

Il secondo è il rilascio del 13 agosto di DeepSeek: un impianto per far girare agenti in cui ogni pezzo è sostituibile, compreso il ciclo di ragionamento dell'agente stesso. Ha superato novantacinquemila stelle su GitHub in due giorni. È il sandwich simbolico di Chollet venduto come prodotto: il modello è l'ingrediente, il programma intorno è la ricetta.

Il terzo arriva dalla società di Jack Dorsey. Si chiama Buzz, è uno spazio di lavoro aperto che unisce chat, codice e agenti, e a ogni agente assegna un'identità con firma, permessi e registro di tutto quello che ha fatto. Accanto è uscito Berd, un'applicazione per il computer che tiene sotto controllo più agenti insieme. Dorsey sta trattando gli agenti come colleghi con un badge.

Il quarto è la versione 0.32 dello strumento a riga di comando di Simon Willison, che mostra le tracce di ragionamento e conserva tutto in un archivio consultabile. Piccolo, e coerente fino alla pedanteria con quello che il suo autore predica.

Il quinto è Olmo 3, il modello di ragionamento dell'istituto Ai2 pubblicato insieme ai dati di addestramento, al codice e alle prove intermedie. Non solo i pesi: tutta la filiera. In una giornata dedicata alla verifica, è l'unico oggetto che si lascia controllare da cima a fondo.

---

Torniamo per un attimo ai tessitori sommersi dal filo. Il loro problema non fu la mancanza di macchine, fu che la parte lenta del lavoro era rimasta dov'era. Oggi la parte lenta si chiama capire se quello che è stato prodotto è giusto, e nessuna delle cifre in circolazione, né i cinquecento miliardi né i dieci volte in dodici mesi, la sposta di un centimetro. È stato Signal Brief. Alla prossima.
