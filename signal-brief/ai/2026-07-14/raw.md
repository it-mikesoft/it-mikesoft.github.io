# La risorsa rara siamo noi

> Karpathy, Willison, Huang, Murati e Clark raccontano lo stesso spostamento da angolazioni opposte: la capacità diventa merce, e il potere si sposta altrove.

---

Per tre anni la domanda che contava era una sola: quanto ancora scala. Oggi, quattordici luglio, quella domanda è quasi scomparsa dalle conversazioni serie, e al suo posto ne è arrivata un'altra, più scomoda, perché non riguarda le macchine ma noi. Questo è Signal Brief. Nelle ultime settimane un gruppo di persone che di solito non vanno d'accordo su nulla ha cominciato a dire, con parole diverse, la stessa identica cosa: la risorsa rara non è più l'intelligenza. E allora la scena da guardare si sposta. Non è più il modello. È chi decide che il risultato è buono.

---

Andrej Karpathy, da maggio, lavora in Anthropic. Sta nel team che addestra i modelli di frontiera, dopo anni passati a insegnare, a scrivere codice per il gusto di scriverlo, a costruire piccole cose eleganti da solo. Il suo pensiero più citato di questi mesi sta in una frase che sembra quasi banale: i computer tradizionali automatizzano quello che sai specificare, i modelli linguistici automatizzano quello che sai verificare. Ci abbiamo ragionato anche ieri. La novità è dove è finita adesso quella frase, perché Karpathy l'ha spinta un passo più in là: se il collo di bottiglia è la verifica, allora la cosa rara non è l'intelligenza. È il giudizio. Saper dire che quel risultato lì è buono, e quell'altro no.

Sembra un dettaglio filosofico. È invece il punto in cui, questa settimana, sono arrivate tre persone da tre strade diverse. Aravind Srinivas, ospite di Joe Rogan il primo luglio, dice che con l'intelligenza artificiale che avanza il valore di conoscere le risposte crolla a zero, e l'unico vantaggio umano che resta è la qualità delle domande. Simon Willison, il dodici, pubblica un post breve e definitivo: un agente non potrà mai essere il responsabile di qualcosa. E Jack Clark, che di mestiere osserva i numeri, si accorge che nemmeno i nostri strumenti di misura riescono più a verificare quello che dovrebbero. Verifica tecnica, verifica economica, verifica morale: lo stesso muro, tre volte.

C'è un precedente storico che aiuta a collocare la scena. Quando la stampa a caratteri mobili rese i libri economici, il mestiere raro non divenne scrivere, che ormai potevano permetterselo in tanti. Divenne scegliere: l'editore, il curatore, la persona che decide cosa merita di essere letto. L'abbondanza non elimina il lavoro umano, lo sposta a monte. È esattamente quello che stiamo vedendo adesso, con qualche secolo di scarto e molta più elettricità.

Su questa lettura, però, non sono affatto tutti d'accordo, e qui il quadro si divide in due schieramenti netti. Da una parte chi dice che i modelli stanno diventando una merce come un'altra: Benedict Evans legge i margini dei laboratori come un effetto passeggero delle schede grafiche che scarseggiano, non come una fortezza; Sam Altman ha smesso di vendere potenza e vende costo per singola operazione; Elon Musk impone Grok ai dipendenti Tesla ammettendo candidamente che i modelli concorrenti sono migliori, ma costano dieci volte tanto. Dall'altra parte i venditori di scarsità, ed è la novità di questi giorni: Jensen Huang con mille miliardi di ordini in mano, Marc Andreessen che sostiene che i modelli sono frenati dalla corrente elettrica e non dalla scienza, Mustafa Suleyman che nega l'esistenza di qualsiasi muro. Non è una disputa scientifica. È una disputa su chi incassa.

E se davvero la capacità diventa merce, allora la domanda politica arriva subito dopo: dove si annida il potere quando la cosa preziosa non è più preziosa. Ognuno indica un posto diverso e molto concreto. Balaji Srinivasan dice: nelle chiavi private. Mira Murati: nei pesi del modello, se li possiedi tu. Jack Dorsey: in un'azienda ridotta all'osso. Dario Amodei: in una legge che vincoli davvero.

Quattro indirizzi diversi per la stessa lettera. Cominciamo da chi, in questa storia, tiene i conti fino all'ultimo dollaro.

---

Simon Willison è un programmatore inglese che da anni scrive un blog quotidiano, e lo fa con un'ossessione insolita: raccontare esattamente cosa costa quello che fa. Non in termini di fatica. In dollari.

Il sette luglio ha rilasciato la versione quattro di sqlite-utils, uno strumento suo, usato da molti, fermo alle versioni maggiori dal 2020. Due giorni prima aveva pubblicato il conto della spesa: buona parte del codice della release candidate l'ha scritta un modello, e il totale è stato centoquarantanove dollari. Poi ha rilanciato con un esempio estremo: la riscrittura di Bun, un pezzo di software da oltre un milione di righe, tradotto da un linguaggio all'altro per centosessantacinquemila dollari di consumi. Il punto, dice lui, è che la scala di questi lavori non è più una questione di fattibilità. È diventata una voce di bilancio. Si decide col budget, non con la fattibilità tecnica.

Chi conosce Willison sa che non è un entusiasta ingenuo, e infatti il dodici luglio arriva il contrappeso. Un post che si intitola, più o meno, agenti e responsabilità, e che dice una cosa sola: un agente non può mai essere la persona direttamente responsabile di qualcosa. Cita una slide interna IBM del 1979, che diceva che un computer non può essere ritenuto responsabile, e quindi un computer non deve mai prendere decisioni di gestione. Quasi cinquant'anni dopo, quella frase è tornata attuale in modo quasi imbarazzante.

Il modo in cui Willison lavora è la dimostrazione pratica della tesi di Karpathy. Delega ai modelli meno costosi tutto quello che è meccanico, in processi paralleli che non guarda mentre girano, e tiene per sé due cose sole: il giudizio e la sintesi. Cosa vale la pena fare, e se quello che è tornato indietro è buono. Il resto è manodopera, e la manodopera oggi ha un prezzo di listino.

Quello che trovo più notevole è che non si tratta di un principio etico calato dall'alto, ma di una scoperta fatta lavorando. Willison non dice che gli agenti sono pericolosi. Dice che possono fare quasi tutto, e proprio per questo qualcuno deve restare in fondo alla catena a firmare. La responsabilità non si delega non perché sia sacra, ma perché non esiste un posto dove metterla. È un collo di bottiglia umano, e nessun aumento di capacità lo allarga di un centimetro.

---

Dall'altra parte del ragionamento c'è un uomo con una giacca di pelle nera che, a giugno, sale sul palco a Taipei e annuncia che l'intelligenza artificiale agentica è arrivata. Jensen Huang guida Nvidia, cioè l'azienda che vende i motori a chiunque voglia correre, e il suo mestiere consiste nel convincere il mondo che i motori non basteranno mai.

Il numero che porta con sé è mille miliardi di dollari di ordini fino al 2027, il doppio di quello che dichiarava un anno prima. Presenta una nuova generazione di macchine, sei chip in un unico server, che comincia a spedire ad Amazon e Microsoft nella seconda metà dell'anno: dieci volte più efficienti sull'energia, e assemblate in cinque minuti invece che in due ore. E liquida come sciocchezza completa l'idea che tutto questo distrugga posti di lavoro: se uno sviluppatore produce novemila miliardi di valore contro tremila miliardi di stipendi, dice, le aziende ne vorranno di più, non di meno.

Huang non è un tecnico che nega il muro. È il rappresentante di una posizione precisa, che questa settimana si è coagulata in uno schieramento riconoscibile insieme a Marc Andreessen e Mustafa Suleyman. La tesi comune è questa: se i modelli sembrano rallentare non è perché la scienza si è fermata, ma perché non c'è abbastanza corrente e non ci sono abbastanza chip. Andreessen usa un'espressione sportiva, dice che i modelli stanno giocando al rallentatore, frenati dalla fornitura. Suleyman, da Microsoft, dice che l'esplosione della potenza di calcolo è la storia tecnologica del nostro tempo ed è appena cominciata.

Benedict Evans, che è la voce più fredda del lotto, ribalta esattamente lo stesso dato. I margini stellari dei laboratori, sostiene, non dimostrano che hanno un fossato: dimostrano che le schede grafiche scarseggiano. Sono un effetto della coda, non della forza. E quando la coda finisce, resta l'infrastruttura a basso margine.

È lo stesso dilemma che si presentò con l'elettricità un secolo fa. Per un certo periodo il potere stava nelle mani di chi vendeva le dinamo. Poi la corrente arrivò dappertutto, il prezzo crollò, e il vantaggio passò a chi aveva capito come riorganizzare la fabbrica attorno a essa. Nessuno oggi guadagna vendendo elettricità. Guadagnano tutti usandola. La domanda vera, quindi, non è se Huang abbia ragione sugli ordini, che li ha in mano. È quanto durerà la stagione in cui gli ordini contano più di ciò che ci fai.

---

Torniamo un attimo sul filo di oggi, perché è facile perderlo. La capacità di calcolo sta diventando una merce, o almeno molti scommettono di sì. Se succede, il valore si sposta ai bordi: nel giudizio umano, da una parte, e dall'altra nel controllo. Chi tiene in mano la cosa quando la cosa non costa più niente.

Mira Murati, che ha lasciato OpenAI per fondare un laboratorio proprio, ha dato la sua risposta l'undici luglio. Thinking Machines Lab ha pubblicato un documento tecnico che è, di fatto, una dichiarazione di identità contro tutti gli altri. La frase attorno a cui ruota è che l'intelligenza artificiale deve essere distribuita, perché il sapere che conta è distribuito. Il sapere che serve davvero, dice, è tacito, locale, incorporato nelle persone e nelle organizzazioni: non lo tiri fuori e non lo impacchetti in un unico grande archivio centrale.

La critica implicita è pesante, e rivolta ai suoi ex colleghi. I modelli di oggi vengono addestrati da pochissimi laboratori, poi congelati, e i valori con cui si comportano li ha decisi il proprietario, non chi li usa. La sua alternativa è concreta: strumenti che permettano agli utenti di mettere le mani sui pesi del modello, cioè sulla sua sostanza, e non soltanto sulle istruzioni che gli dai a voce. Adattamenti che restano in casa, dati che non escono. I destinatari che nomina esplicitamente sono ospedali, studi legali, organizzazioni che maneggiano cose che non possono spedire altrove.

È lo stesso movimento che portò, negli anni Settanta, dal computer centrale a cui ci si collegava a turno al personal computer che ti mettevi sulla scrivania. Non fu una questione di potenza — i grandi calcolatori erano più potenti, e lo restarono a lungo. Fu una questione di possesso. La macchina in casa tua fa quello che dici tu.

Murati è una voce dentro un coro che canta note diverse. Balaji Srinivasan sostiene che tutta la proprietà privata sta diventando chiavi crittografiche, e che chi controlla le chiavi controlla gli agenti. Jack Dorsey ha tagliato quattromila persone in Block, portandola da diecimila a seimila, con gli utili in crescita, perché è convinto che l'azienda del futuro sia un nucleo piccolo e veloce. Dario Amodei, che fino all'anno scorso chiedeva solo trasparenza, adesso chiede regole vincolanti e controlli obbligatori.

Chiavi, pesi, organizzazione, legge. Quattro posti diversi dove nascondere lo stesso oggetto. Il fatto che nessuno indichi lo stesso posto mi sembra il segnale più onesto di tutti: significa che il potere, per ora, non si è ancora seduto da nessuna parte.

---

Resta la crepa più seria, ed è quella che riguarda la nostra capacità di accorgerci di quello che sta succedendo.

Jack Clark scrive da anni una newsletter che è diventata una specie di diario di bordo dell'intelligenza artificiale. Ha un tono asciutto, un po' ironico, e una storica prudenza. Prudenza che nelle ultime settimane ha abbandonato: adesso stima oltre il sessanta per cento di probabilità che entro poco meno di tre anni arrivino sistemi capaci di fare ricerca sull'intelligenza artificiale da soli. E porta un dato interno: dentro Anthropic, il ritmo con cui il codice viene integrato è cresciuto di otto volte rispetto a pochi anni fa. Lo chiama, con understatement voluto, forse il trend tecnico più importante del mondo.

Ma la cosa che trovo davvero notevole in Clark è un'altra, e non riguarda le macchine. Riguarda i termometri. Osserva che l'economia legata all'intelligenza artificiale sta crescendo a ritmi che, aggiustati per qualità, sono enormi, e che di tutto questo il prodotto interno lordo non registra sostanzialmente nulla. Usa un'immagine cinematografica: è lo squalo di Jaws. La minaccia è evidente a chiunque guardi l'acqua, e gli osservatori ufficiali continuano a guardare da un'altra parte con il binocolo puntato sull'orizzonte sbagliato.

Non è solo. Patrick Collison, che con Stripe vede passare i pagamenti di milioni di aziende, sostiene che il primo trimestre del 2026 potrebbe essere ricordato come il primo trimestre della singolarità, e lo dice basandosi non su una teoria ma su cosa la gente compra davvero. Benedict Evans, dall'altro lato, demolisce i punteggi che pretendono di prevedere quali lavori spariranno: non sai come cambieranno i mestieri, non sai cosa cambierà intorno, e comunque il lavoro non si misura così.

Chi conosce la storia dell'economia riconosce la scena. Nel 1987 Robert Solow scrisse una frase che è rimasta: l'era dei computer si vede ovunque, tranne che nelle statistiche della produttività. Ci vollero quindici anni perché i numeri si mettessero in pari con la realtà. Nel frattempo si prendevano decisioni al buio, credendo di avere la luce accesa.

E qui il cerchio si chiude in un modo che ha una sua eleganza amara. Karpathy aveva detto che le macchine automatizzano ciò che sappiamo verificare. Il sospetto che attraversa tutti questi discorsi è che i nostri strumenti di verifica — tecnici, economici, politici — siano rimasti indietro rispetto alla cosa che dovrebbero verificare. È la sua tesi, rivolta contro di noi.

---

Progetti da osservare. La lista di questa settimana non porta nomi nuovi, e la cosa in sé dice qualcosa: sono tutte cose già viste, tutte in crescita continua, tutte che resistono.

nanochat, di Karpathy: presente da settimane, crescita continua.

llm, di Simon Willison: presente da settimane, crescita continua.

ARC-AGI, di François Chollet: presente da settimane, crescita continua.

llama punto cpp, di Georgi Gerganov: presente da settimane, crescita continua.

superpowers: presente da settimane, crescita continua.

claude-context: presente da settimane, crescita continua.

Se li si guarda insieme, e non uno per uno, salta agli occhi una cosa sola. Nessuno di questi è un modello. Non c'è, in cima alle classifiche di attenzione degli sviluppatori, nessuna intelligenza artificiale più grande e più potente delle altre. Ci sono strumenti per far girare i modelli sul proprio computer, strumenti per metterli alla prova, strumenti per dargli le istruzioni giuste e per controllare cosa hanno combinato.

È esattamente la mappa che abbiamo disegnato in tutto l'episodio, tradotta in righe di codice da gente che non partecipa al dibattito e semplicemente costruisce. Il centro non è più il cervello artificiale. Il centro è il contorno: possederlo, misurarlo, verificarlo, tenerlo al guinzaglio. Chi scrive software, che di solito capisce prima degli altri dove sta andando il vento, sta già lavorando lì.

---

Resta l'immagine di quella slide IBM del 1979, tirata fuori da un cassetto quasi cinquant'anni dopo: un computer non può essere ritenuto responsabile. Non era una previsione, era un promemoria. E si è rivelato l'unica cosa che, mentre tutto il resto diventava merce, non ha perso valore. Forse la vera domanda non è cosa sapranno fare le macchine. È chi, alla fine, mette la firma. È stato Signal Brief. Alla prossima.
