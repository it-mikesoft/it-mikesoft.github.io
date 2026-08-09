# Il prezzo del pensiero

> Il progresso dell'intelligenza artificiale non si misura più in parametri, ma in dollari per compito svolto. E chi è in testa ha smesso di chiedere libertà: adesso chiede regole.

---

Parigi, giovedì scorso. Yann LeCun sale su un palco e spiega che un bambino di quattro anni ha già visto più mondo di qualunque modello linguistico esistente. Nello stesso giorno, dall'altra parte dell'oceano, Sam Altman presenta la nuova generazione di ChatGPT e la vende su un numero solo: costa la metà. Oggi è il dodici luglio, questo è Signal Brief, e le due scene vanno tenute insieme. Perché dicono la stessa cosa da due lati diversi. La partita si è spostata. Non è più su cosa sanno fare le macchine. È su quanto costano, e su chi comanda.

---

Il cinque luglio Simon Willison pubblica sul suo blog il resoconto di un lavoro finito. Ha rilasciato la versione quattro punto zero di una sua libreria, la prima revisione importante dal 2020. In fondo al post, dove di solito ci sarebbe l'elenco delle novità, c'è una riga che un anno fa nessuno avrebbe pensato di scrivere: centoquarantanove dollari e venticinque centesimi. È quanto gli è costato far lavorare il modello per arrivare fin lì. Non le settimane impiegate, non le righe di codice. Il conto.

Sembra un dettaglio contabile. È invece la cosa più significativa della settimana.

Per un decennio il progresso di questa tecnologia si è misurato in grandezza: quanti parametri, quanti dati, quanto calcolo. Era un'epoca in cui la domanda giusta era "quanto è grande il tuo modello". Adesso la domanda è diventata un'altra: quanto costa fare una cosa. Il dollaro per compito ha sostituito il parametro come unità di misura. E quando cambia l'unità di misura, di solito è perché è cambiato il gioco.

Lo si vede anche dal lato di chi vende. Altman presenta il nuovo modello di punta e il messaggio non è "sa fare cose che prima non sapeva fare". Il messaggio è che consuma il cinquantaquattro per cento in meno. Un taglio di prezzo camuffato da lancio di prodotto. Benedict Evans, che di mestiere osserva questi cicli da trent'anni, scrive nello stesso giorno il pezzo più asciutto della settimana: oggi i laboratori possono chiedere prezzi alti soltanto perché il calcolo è scarso. Quando smetterà di esserlo, cosa resta? La sua risposta non è una risposta, è uno spostamento dell'onere della prova: adesso tocca a chi vende modelli spiegare perché non finiranno come le compagnie telefoniche.

C'è un precedente che aiuta a collocare la cosa. Nell'Ottocento l'alluminio era il metallo più prezioso del mondo. Napoleone terzo teneva le posate d'alluminio per gli ospiti più importanti e serviva gli altri con l'oro. Poi qualcuno trovò il modo di estrarlo per via elettrica, il prezzo crollò, e nel giro di una generazione ci facevamo la carta per avvolgere i panini. L'alluminio non era diventato meno utile. Era diventato meno scarso. E il valore era migrato: non stava più nel metallo, stava in chi sapeva cosa farci.

Torna qui, e in modo nuovo, il tema di ieri: il raffreddamento dei costruttori. Sutskever che dichiara finita l'era dello scaling, Chollet che porta i numeri, LeCun che dice che nel testo il segnale si è esaurito. Su questo, come già osservato, sono d'accordo. Ma è un accordo che vale meno di quanto sembri. Perché la diagnosi è comune e le terapie sono tre, e sono incompatibili: chi vuole macchine che scrivano programmi, chi vuole macchine che guardino il mondo, chi vuole macchine che imparino sbagliando. Non è una coalizione. È un'assemblea di medici che concordano sulla malattia e litigano sulla cura.

E poi c'è la parte che mi sembra la più densa di conseguenze, quella che non è tecnica per niente. Chi è in testa nella corsa ha smesso di chiedere di essere lasciato in pace. Altman propone un forum internazionale a guida americana. Marc Andreessen entra nel consiglio scientifico della Casa Bianca. Jensen Huang parla ormai come un rappresentante di categoria. È il momento in cui il vantaggio tecnico prova a diventare vantaggio politico — ed è successo altre volte, dalle ferrovie americane in poi: prima si conquista il territorio, poi si scrive il regolamento che rende difficile a chiunque altro rifarlo.

Chi non è al centro di questo cerchio sceglie invece l'uscita. E l'uscita, oggi, ha molti nomi diversi.

---

Simon Willison è un programmatore inglese che da vent'anni scrive software e da tre racconta pubblicamente, giorno per giorno, cosa succede quando lo si fa insieme a un modello. Non è un profeta e non vende niente. È il testimone più affidabile che abbiamo, perché lavora alla luce del sole e mostra anche gli errori.

Il pezzo che ha pubblicato il cinque luglio è il racconto di un progetto vero, portato a termine. Una libreria che usano in tanti, ferma da anni a una versione vecchia, riscritta con l'aiuto di un modello di punta: migrazioni, transazioni annidate, chiavi esterne composite. Roba noiosa, delicata, di quelle che si rompono in silenzio. E lui documenta tutto: quanto è costato, quante volte ha dovuto riprendere in mano il timone, in che punto la qualità è arrivata davvero. La sua conclusione è che è arrivata solo con un coordinamento umano stretto. La direzione strategica sua, l'implementazione alla macchina, la revisione incrociata tra modelli diversi fino a quando il risultato ha smesso di traballare.

Due giorni prima aveva pubblicato un'idea che è la stessa cosa vista da più in alto. La chiama delega con giudizio: istruire il modello più costoso perché appalti da solo i compiti minori a modelli più economici. Un agente che gestisce il proprio budget. Detto così sembra un trucco tecnico. È in realtà un'ammissione: se stai insegnando alla macchina a risparmiare, vuol dire che il costo è diventato il vincolo principale, non la capacità.

Ecco perché quel numero in fondo al post conta più della libreria. Willison ha fatto una cosa che i programmatori non facevano: ha allegato la ricevuta. Ha trattato il denaro come un dato ingegneristico, alla pari del tempo di esecuzione o del consumo di memoria. È un gesto piccolo e ha un effetto grande, perché rende confrontabili cose che prima non lo erano. Se so che una funzionalità costa centocinquanta dollari di modello, posso deciderla come decido qualunque altra spesa.

C'è un'eco storica che mi sembra giusta. Quando l'elettricità entrò nelle fabbriche, all'inizio si comprava la dinamo: un investimento enorme, una macchina in casa, un tecnico che la accudiva. Ci volle una generazione perché si passasse a comprare i chilowattora, cioè a comprare il risultato invece dello strumento. Fu quel passaggio, non la scoperta dell'elettricità, a cambiare la struttura dell'industria. Willison sta scrivendo, senza dirlo, il primo bollettino di quella transizione.

E rimane una domanda scomoda, che lui stesso lascia aperta. Se generare software costa quasi niente, che senso ha ancora mantenerlo?

---

La risposta a quella domanda, o almeno il modo giusto di porla, arriva da un uomo che non costruisce nulla. Benedict Evans è un analista: per anni ha fatto il venture capitalist, oggi scrive una newsletter che i dirigenti del settore leggono la domenica mattina per capire cosa devono temere il lunedì.

Il nove luglio pubblica un pezzo intitolato, senza fronzoli, "modi di pensare al prezzo dei token". La tesi sta in una frase. Oggi chi vende modelli può chiedere prezzi alti per una ragione sola: l'offerta è scarsa. Non ci sono abbastanza schede, non c'è abbastanza capacità, e la scarsità sostiene il margine. Quindi la vera domanda non riguarda l'intelligenza delle macchine. Riguarda cosa succede il giorno in cui il calcolo smette di essere raro.

Evans non dà una risposta definitiva, e questa è la sua qualità migliore. Fa una cosa più efficace: sposta l'onere della prova. Finora si dava per scontato che i laboratori sarebbero diventati le aziende più preziose del pianeta. Lui capovolge la posizione di partenza. Il caso base — quello che va dimostrato falso, non vero — è che i fornitori di modelli finiscano come i fornitori di cloud, o come le compagnie telefoniche: infrastrutture indispensabili, margini sottili, prezzi in discesa costante. Se pensi che non andrà così, spiega perché.

Questo si incastra alla perfezione con quello che ha fatto Altman la settimana scorsa. Vendere un modello sul risparmio invece che sulle capacità è, dal punto di vista di Evans, un'ammissione involontaria: se compete sul prezzo, è perché sul resto non riesce più a distinguersi. La capability non è più una fortezza.

E allora dove va a finire il valore? Evans lo dice da mesi: a valle. Nelle applicazioni che ancora non sono state inventate, in chi saprà usare questa roba per fare qualcosa che nessuno ha ancora immaginato. È lo stesso schema del cloud, quindici anni fa. Le aziende che affittano server hanno costruito imperi solidi e noiosi. Le fortune vere le hanno fatte quelli che sui server hanno messo sopra Airbnb, Netflix, Spotify — cose che prima erano semplicemente impensabili.

Da qui viene la conseguenza più radicale della settimana, e la firma Patrick Collison: se generare software costa zero, il software smette di essere un bene durevole. Diventa deperibile. Non un patrimonio da mantenere per dieci anni, ma qualcosa che cucini al momento e butti via dopo. Un'idea che, se ha ragione, non demolisce un'azienda: demolisce una categoria intera.

---

Torniamo un attimo sul filo di oggi, perché da qui in avanti la storia cambia registro. Fin qui abbiamo parlato di prezzi: il costo che scende, il valore che migra, l'unità di misura che cambia. Adesso entriamo nella parte politica. Perché quando una tecnologia diventa a buon mercato e indispensabile insieme, la domanda smette di essere "quanto costa" e diventa "chi la governa".

Sam Altman, la settimana scorsa, ha risposto a quella domanda due volte, e le due risposte vanno lette insieme.

La prima è un articolo sul Financial Times, all'inizio di luglio. Propone un forum internazionale a guida americana che fissi gli standard, valuti in modo imparziale le capacità e i rischi dei modelli, metta allo stesso tavolo governi ed esperti indipendenti. I modelli che cita sono la sicurezza aerea e l'agenzia internazionale per l'energia atomica. L'obiettivo dichiarato è evitare che i laboratori si facciano una corsa al ribasso sulla sicurezza.

La seconda risposta è del nove luglio, ed è una confessione. Altman ammette che OpenAI ha fatto "molti cambiamenti" ai propri modelli dopo un lungo scambio con funzionari del governo americano, prima di far uscire l'ultima versione. La sua posizione: va bene, purché il processo sia comprensibile, equo e rapido. Cioè: una revisione governativa preventiva, di fatto, normalizzata. Sette anni fa lo stesso ambiente diceva che la regolamentazione avrebbe ucciso l'innovazione.

Non è ipocrisia. È una cosa più interessante, ed è vecchia quanto il capitalismo industriale. Chi arriva primo, a un certo punto, smette di temere le regole e comincia a volerle — perché le regole cristallizzano la posizione raggiunta. Le grandi compagnie ferroviarie americane dell'Ottocento passarono dal combattere qualunque commissione federale al pretenderne una, quando si accorsero che una commissione ben congegnata era il modo più economico per tenere fuori i nuovi arrivati. La conformità è un costo fisso. I costi fissi fanno male ai piccoli e non fanno solletico ai grandi.

E non è solo Altman. Marc Andreessen, il capitalista di ventura che due anni fa scriveva manifesti contro lo Stato, siede oggi nel consiglio scientifico della presidenza americana. Jensen Huang, che vende le pale in questa corsa all'oro, parla ormai il linguaggio delle politiche industriali. Il vantaggio tecnico sta diventando vantaggio istituzionale, e lo sta facendo alla luce del sole, senza nemmeno troppa cautela.

Resta da capire cosa faccia chi in quel tavolo non è invitato. E la risposta, in questo momento, è che se ne sta costruendo un altro.

---

Yann LeCun è uno dei tre uomini che hanno inventato l'apprendimento profondo, ha vinto il premio più prestigioso dell'informatica e per dodici anni ha diretto la ricerca sull'intelligenza artificiale dentro Facebook. Adesso ha un laboratorio suo e passa il tempo a spiegare perché la tecnologia che ha reso possibile tutto questo è, secondo lui, un vicolo cieco.

Il nove luglio, a Parigi, davanti alla platea del RAISE Summit, ha usato l'argomento che sta diventando il suo grimaldello. Un bambino di quattro anni, dice, ha già assorbito soltanto attraverso gli occhi una quantità di informazione paragonabile a tutto il testo su cui è stato addestrato il più grande modello linguistico del mondo. Quattro anni di sguardo contro tutta la biblioteca di internet. E il bambino, a differenza del modello, sa che se lascia cadere un bicchiere quello si rompe.

Da lì la conclusione: il testo è saturo, il segnale sta altrove. La prova a contrario che porta è brutale nella sua semplicità. Non esiste ancora un'auto che si guidi davvero da sola in ogni condizione. Non esiste un robot che riordini una cucina. Le cose che per un essere umano sono banali restano le più difficili per le macchine — e questo, dopo quindici anni e centinaia di miliardi investiti, qualcosa deve pur dirlo.

La sua proposta tecnica ha un nome che non serve ricordare. Serve capirne l'idea: invece di insegnare alla macchina a indovinare il prossimo pixel di un video, le si insegna a costruirsi una rappresentazione di cosa sta succedendo nella scena, e a fare previsioni lì dentro. Non "che colore avrà quel puntino tra un istante", ma "quella palla sta per cadere". LeCun sostiene che i suoi modelli, guardando video e basta, hanno già cominciato a sorprendersi quando sullo schermo accade qualcosa di fisicamente impossibile. Buon senso emerso dall'osservazione, non insegnato da nessuno.

Ma la parte che parla al filo di oggi è un'altra. LeCun non sta soltanto proponendo un'architettura diversa. Sta proponendo una geografia diversa. Il suo progetto è dichiaratamente europeo, dichiaratamente indipendente dall'oligopolio americano, dichiaratamente un'alternativa al tavolo che Altman sta apparecchiando. Ha scommesso un miliardo contro i modelli linguistici, ed è la stessa scommessa che, con parole diverse, stanno facendo Balaji Srinivasan quando dice che l'intelligenza artificiale deve girare sul tuo computer e non nel cloud di qualcun altro, o Jack Dorsey quando costruisce una messaggistica che funziona senza internet e senza server, o David Heinemeier Hansson quando scrive che l'Europa deve tornare a saper costruire cose grandi.

Sono progetti diversissimi. Ma la mossa è una sola, ed è la più antica del mondo: se non puoi vincere il gioco, esci dal tavolo e piantane un altro.

---

L'ultimo ritratto è di un uomo che ha scelto una terza strada: né il tavolo delle regole, né la fuga. Il banco di prova.

François Chollet è un ricercatore francese che per anni ha lavorato dentro Google e che da tempo ripete una cosa impopolare: che questi modelli, per quanto impressionanti, non ragionano davvero. Riconoscono schemi visti prima. Fuori dal territorio conosciuto si perdono. È una posizione che gli è costata parecchi sarcasmi, finché non ha deciso di smettere di argomentare e cominciare a misurare.

Il suo progetto si chiama ARC, ed è essenzialmente un esame che le macchine non possono superare imparando le risposte a memoria. L'ultima versione, uscita di recente, è fatta di centinaia di ambienti interattivi, piccoli mondi in stile videogioco, dove per farcela bisogna capire le regole mentre ci si sta dentro. Gli esseri umani li chiudono al cento per cento. I migliori modelli di frontiera del mondo, quelli che costano decine di milioni di addestramento, si fermano allo zero virgola cinquantuno per cento.

Non è un numero basso. È un numero che sembra un errore di stampa. Ed è, in questo momento, l'argomento più forte a disposizione di chiunque sostenga che l'era dello scaling sia finita davvero: non un'opinione, un termometro.

Nel frattempo Chollet ha aperto un laboratorio suo: una quindicina di persone, quasi tutte a distanza, quarantatré milioni raccolti, tre-cinque anni di ricerca pura e zero prodotti. La sua scommessa è che l'intelligenza non venga dalla memoria ma dalla capacità di scrivere, al volo, il programma che risolve un problema mai visto. Il modello mentale non è l'enciclopedia. È il programmatore.

Qui però c'è la cosa più sottile della giornata, e vale la pena tenerla ferma. Chollet non sta costruendo un'intelligenza. Sta costruendo un giudice. E il giudice, in questa fase, potrebbe contare più del concorrente — perché come dice Andrej Karpathy, che sul resto la pensa all'opposto e sta scommettendo che nei modelli linguistici ci sia ancora parecchio da spremere, si automatizza soltanto ciò che si sa verificare. La matematica e il codice corrono perché sappiamo dire subito se una risposta è giusta. Tutto il resto arranca perché non abbiamo un metro.

Chi costruisce il metro decide dove può arrivare la corsa. Non è un ruolo neutrale, e non lo è mai stato: le carte nautiche, prima delle navi, hanno deciso quali oceani si potessero attraversare.

---

Progetti da osservare.

Il primo è la libreria di Willison di cui abbiamo parlato, che vale meno per quello che fa — gestire piccoli database — che per come è nata: scritta quasi tutta da una macchina, sotto direzione umana stretta, con la ricevuta allegata. È il primo cantiere di questo genere che possiamo guardare dall'interno.

Accanto a quella, lo stesso Willison ha rilasciato una piccola cosa quasi provocatoria: uno strumento che ricrea, in poche centinaia di righe, il funzionamento di un agente di programmazione professionale. Scritto, naturalmente, dall'agente stesso. Serve a dire una cosa sola: la magia è meno magica di quanto sembri, e adesso chiunque può guardarci dentro.

Poi c'è l'esame di Chollet, quei mondi-videogioco dove le macchine falliscono in modo spettacolare. Non è un prodotto, non farà mai un euro. È un termometro, ed è il termometro su cui in questo momento si appoggiano quasi tutti gli argomenti seri sul futuro di questa tecnologia.

Il quarto è il laboratorio europeo di LeCun e la sua idea di far imparare le macchine guardando invece che leggendo. È presto per dire se funziona. È già chiaro che è la scommessa contraria a tutte le altre, ed è finanziata abbastanza da poter durare fino a scoprirlo.

E chiudo con quello che c'entra meno e forse dice di più: la messaggistica che Jack Dorsey ha costruito per funzionare senza internet, saltando da un telefono all'altro via Bluetooth. Quattro milioni di persone l'hanno scaricata, e si scaricano soprattutto dove la rete viene spenta: Uganda, Iran, Nepal. Ad aprile la Cina l'ha fatta togliere dai negozi di applicazioni. Ma togliere un'app dal negozio non spegne una rete che non ha server. È l'idea dell'uscita, ridotta all'osso, e già in funzione.

---

Resta la riga in fondo al post di Willison: centoquarantanove dollari e venticinque centesimi. Una macchina che ragiona ha ormai un prezzo di listino, e scende ogni mese. Quando una cosa costa poco e serve a tutto, la domanda interessante non è più come funziona. È chi decide le regole del posto in cui la usiamo — e, come chiedono Hinton e Graham da lati opposti, chi taglia la torta. È stato Signal Brief. Alla prossima.
