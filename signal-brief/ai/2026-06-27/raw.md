# L'agente, il prezzo e la fabbrica leggera

> Chi costruisce l'AI dichiara di aver già vinto, chi la misura parla di fragilità. E intanto la vera battaglia si sposta su un terreno inatteso: quanto costa.

---

C'è una parola che questa settimana sembra uscire da bocche che di solito non si parlano: agente. La dicono gli scettici e la dicono gli entusiasti, la dice chi pensa che manchi ancora moltissimo e chi annuncia di essere già arrivato. Quando persone in disaccordo su tutto cominciano a usare lo stesso termine, di solito significa che il terreno si è spostato sotto i piedi di entrambi. È il 27 giugno 2026, questo è Signal Brief, e oggi proviamo a guardare quel terreno.

---

Cominciamo da una scena piccola. Andrej Karpathy, in questi giorni, si è messo a commentare una cosa apparentemente banale: l'arrivo di Claude dentro Slack. Non un nuovo modello, non un annuncio roboante — un assistente che entra nella chat di lavoro accanto ai colleghi umani. Karpathy lo nota perché, dice, è molto più "dentro" il flusso del lavoro di tutti gli altri. Non più il chatbot a cui ti rivolgi aprendo una finestra, ma un collega silenzioso che sta lì, nello stesso posto dove stanno le persone.

Sembra un dettaglio. È invece il cuore di tutto quello che racconteremo oggi. Perché l'agente — questa cosa che osserva, ragiona e agisce da sola — è diventato il punto dove si incontrano persone che fino a ieri si davano battaglia. Demis Hassabis lo cita come la prova che la strada è quella giusta. Jensen Huang lo chiama, semplicemente, "l'era arrivata". E Nat Friedman è arrivato a ripensare Git, lo strumento con cui i programmatori salvano il loro lavoro da vent'anni, immaginando un mondo in cui il codice non lo scrive più un umano ma una macchina. Strade diverse, stessa casa.

Karpathy ci ha messo sopra una chiave che spiega molto. La sua formula è semplice: i computer di una volta automatizzavano quello che sai scrivere come istruzione precisa; questi nuovi modelli automatizzano quello che sai verificare. Dove puoi controllare se la risposta è giusta — la matematica, il codice — corrono. Dove non puoi, restano ruvidi. Fino a ieri questa era un'osservazione laterale. Adesso spiega l'intera corsa agli agenti: costruisci un agente proprio dove puoi mettergli accanto un giudice che dice sì o no.

Sotto questa convergenza, però, resta la frattura di cui parlavamo già ieri, e che oggi si fa più netta. Da una parte chi costruisce: Marc Andreessen, da Joe Rogan, dice che l'AGI è già qui, che la soglia l'abbiamo passata tre mesi fa. Dall'altra chi misura: Ilya Sutskever, François Chollet, che mostrano numeri impietosi e parlano di sistemi fragili. La cosa più interessante, per me, è che non è una differenza di grado. Non è "manca poco" contro "manca tanto". È una differenza di natura. Chi costruisce annuncia l'arrivo. Chi misura annuncia la fragilità. Sono due mestieri diversi che guardano lo stesso oggetto e vedono due cose opposte.

Ma il vero spostamento di questa settimana è un altro, ed è quasi invisibile perché non fa rumore. Per cinque anni la domanda è stata: l'AI ce la fa? Adesso la domanda è diventata: quanto costa? È successo come col passaggio dal vapore all'elettricità nelle fabbriche. All'inizio conta solo se la macchina gira. Poi, quando girano tutte, l'unica cosa che conta è quanta energia bruciano per ogni pezzo prodotto. Siamo entrati in quella fase. E quasi tutti i protagonisti di oggi, ognuno a modo suo, ci stanno girando intorno.

---

Restiamo un momento su Karpathy, perché è il personaggio che tiene insieme il filo. Per chi non lo conoscesse: è stato una delle menti dietro la guida autonoma di Tesla e tra i primi di OpenAI, ed è oggi una delle voci più ascoltate quando si tratta di capire dove sta davvero andando questa tecnologia, senza vendere niente.

In queste settimane insiste su due immagini. La prima l'abbiamo detta: la verificabilità come legge che spiega cosa funziona e cosa no. La seconda è più curiosa, e dice molto sul mondo che arriva. Karpathy sostiene che nell'era degli agenti condividere il codice di un programma conterà sempre meno. Quello che condividerai è l'idea. E l'agente dell'altra persona ricostruirà il programma su misura per lei. Lo lega a una pratica che porta avanti in prima persona: tenere una specie di archivio personale di idee, una base di conoscenza che interroghi ogni giorno come strumento di lavoro.

Fermiamoci a pensare cosa significa. Per tutta la storia del software l'oggetto di valore è stato il programma: lo scrivi una volta, lo copi, lo distribuisci identico a milioni di persone. È la logica della stampa, da Gutenberg in poi: un originale, infinite copie uguali. Karpathy sta descrivendo qualcosa di diverso. Non distribuisci più l'oggetto, distribuisci l'intenzione, e ogni copia nasce diversa, cucita addosso a chi la riceve. È più simile a come si trasmettevano le ricette prima dei libri di cucina: non il piatto, ma l'idea del piatto, che ogni cuoco rifaceva con quello che aveva in casa.

Il collegamento con la giornata è diretto. Se l'agente sa ricostruire da un'idea, allora la cosa rara non è più saper programmare. È avere idee chiare e saperle verificare. Ed è qui che Karpathy chiude il cerchio con sé stesso: automatizziamo ciò che sappiamo controllare, e quindi il lavoro umano che resta prezioso è proprio quello del controllo, del giudizio, del decidere se una cosa è buona. Mi sembra che dietro la sua apparente leggerezza ci sia un'idea piuttosto seria su cosa varrà la pena saper fare, tra qualche anno.

---

Dall'osservatore passiamo a chi costruisce. Demis Hassabis guida DeepMind, il laboratorio di Google che ha insegnato a una macchina a battere i campioni di Go e poi ha decifrato la forma delle proteine. È uno scienziato prima che un imprenditore, e questo rende il suo cambio di tono ancora più notevole.

A Google I/O, quest'anno, ha usato una frase che si è impressa: siamo "alle pendici della singolarità". Non la cima, le pendici — ma comunque dentro la salita. È un linguaggio quasi solenne, da momento storico, lontano dal tecnico misurato di prima. E la sua nuova fiducia poggia esattamente sull'oggetto di oggi: gli agenti. "Li vediamo funzionare adesso", dice, "immagina cosa saranno tra un anno". Per lui sono la prova concreta che l'industria ha imboccato la strada giusta verso un'intelligenza generale, che ora colloca intorno al 2029, anticipando le sue stesse previsioni passate.

Fin qui è il costruttore che annuncia l'arrivo. Ma c'è una crepa nel suo discorso, ed è la parte che trovo più onesta. Hassabis ha spostato l'accento da "come la costruiamo" a "siamo pronti?". Si lamenta che i suoi amici economisti non stiano prendendo la cosa abbastanza sul serio, che il dibattito resti chiuso nei circoli tecnici, e che restino pochi anni per prepararsi. Sostiene che l'impatto sarà dieci volte quello della rivoluzione industriale, compresso in un decennio invece che in un secolo.

Ecco la tensione di oggi che gli passa dentro, tutta intera. Da una parte la sicurezza di chi vede le macchine funzionare e dichiara che ci siamo quasi. Dall'altra l'inquietudine di chi capisce che, se ha ragione, la società non è attrezzata per quello che sta per arrivare. Hassabis è raro perché tiene insieme le due cose senza nasconderne nessuna.

Pensiamo a quanto è strano tutto questo. La rivoluzione industriale nessuno l'ha annunciata mentre accadeva: i contadini che si trasferivano in città non sapevano di essere dentro una svolta epocale, lo abbiamo capito noi un secolo dopo, sui libri. Qui, invece, i protagonisti salgono sul palco e dichiarano di essere dentro la svolta mentre la stanno vivendo. Trasformano la previsione in proclama. E questa, di per sé, è una novità nella storia: non è mai successo che chi fa una rivoluzione la racconti in diretta.

---

Ricapitoliamo un attimo dove siamo, per chi ci ha persi a un semaforo. Tutti convergono sull'agente. I costruttori dicono che siamo arrivati, chi misura dice che siamo fragili. E sotto, silenziosa, la domanda è cambiata: non più "si può fare", ma "quanto costa". È qui che entra Sam Altman.

Altman guida OpenAI, l'azienda di ChatGPT, ed è probabilmente la persona che più di ogni altra ha venduto al mondo l'idea che l'AI stesse arrivando. Per questo quello che ha detto il 2 giugno, a un evento per clienti aziendali, conta parecchio. Ha ammesso che il costo è ormai la seconda lamentela più frequente di chi compra i suoi servizi. All'inizio del 2026, racconta, non se ne curava nessuno. Poi, all'improvviso, è esploso. Cita persino, divertito, il messaggio tipo che gli arriva dai clienti: abbiamo bruciato tutto il budget dell'anno nel primo trimestre, puoi renderlo più efficiente?

È una frase piccola che segna un'epoca. Per anni la frontiera è stata la capacità: chi ha il modello più bravo. Altman ci dice che il vero collo di bottiglia, adesso, è l'uso. I suoi clienti più grandi consumano qualcosa come cento miliardi di "parole-macchina" al mese, e a quella scala il problema non è più se il modello è capace, ma se te lo puoi permettere.

C'è anche un secondo spostamento, nel suo tono, ed è il più umano. Altman ha messo da parte la retorica del rischio di estinzione e parla ora di "gentle singularity", una transizione dolce, graduale, gestibile. Continua a pensare che entro il 2030 avremo modelli straordinari, capaci di cose oltre l'umano. Ma il colore è cambiato: meno apocalisse, più adozione pratica.

Mi sembra interessante mettere le due cose accanto. La stessa persona che ti dice "arriveranno macchine più capaci di noi" ti dice anche "intanto i miei clienti si lamentano della bolletta". È il momento in cui una tecnologia smette di essere magia e diventa infrastruttura — come l'elettricità, che ha smesso di stupire il giorno in cui abbiamo cominciato a guardare il contatore. L'AI sta avendo il suo incontro col contatore. E i contatori, nella storia, hanno sempre deciso più rivoluzioni dei manifesti.

---

Se il costo è il nuovo campo di battaglia, ci sono due modi di rispondere. Uno è tagliare le persone. L'altro è tagliare il calcolo. Jack Dorsey ha scelto il primo, Liang Wenfeng il secondo. Cominciamo da Dorsey.

Dorsey, il fondatore di Twitter e di quella che oggi si chiama Block, ha fatto una mossa netta e divisiva: ha tagliato circa il quaranta per cento dei dipendenti, quasi quattromila persone. La giustificazione è una tesi quasi ideologica: con gli strumenti di AI, sostiene, un team piccolo può fare di più e farlo meglio di una grande organizzazione. Il mercato gli ha dato ragione subito, con il titolo su del venticinque per cento; il mondo del lavoro tech, molto meno.

Non è una voce isolata. È quello che nel briefing di oggi chiamiamo la tesi dei team minimali, e torna identica in altri due personaggi. Naval Ravikant parla di "fabbrica del software": descrivi a parole l'applicazione che vuoi, l'AI la costruisce, la prova, corregge gli errori e ricomincia. La sua frase è "spreca token per risparmiare tempo" — bruciare calcolo a volontà pur di non bruciare ore umane. E Paul Graham, in un saggio di metà giugno, ribadisce la sua vecchia idea: la ricchezza non si prende, si crea, e oggi pochissime persone con gli strumenti giusti possono creare il valore di intere aziende.

Tre voci, una sola immagine: poche persone più le macchine valgono quanto un'organizzazione intera. È l'argomento con cui si giustificano i tagli e le strutture leggere.

Vale la pena guardarla con un po' di distanza, questa storia, perché l'abbiamo già vista. Ogni volta che una tecnologia aumenta enormemente la produttività di un singolo, qualcuno annuncia la fine delle grandi organizzazioni. Lo si disse del personal computer negli anni Ottanta, lo si disse di internet negli anni Novanta. A volte è successo davvero, più spesso le aziende sono diventate diverse, non più piccole. Dorsey scommette che stavolta sia vero sul serio. È una scommessa, non un dato — e fa una certa impressione che a pagarne il conto, intanto, siano quattromila persone reali.

---

L'altra risposta al problema del costo arriva dalla Cina, e ha un nome: Liang Wenfeng, il fondatore di DeepSeek. Se Dorsey taglia le persone, Liang taglia il calcolo — e ne fa un'arma.

La notizia è del 16 giugno: DeepSeek ha chiuso il suo primo finanziamento esterno, qualcosa come sette miliardi e mezzo di dollari. Ma la cosa che racconta di più non è la cifra, è come Liang l'ha costruita. Ci ha messo di tasca propria quasi la metà, diventando il primo investitore di sé stesso. Agli investitori commerciali non ha dato diritto di voto e ha imposto cinque anni di vincolo. L'unica eccezione con vero potere è il fondo statale cinese. Il messaggio è chiaro: i soldi sì, il controllo no — tranne che allo Stato.

La sua bussola, ha ripetuto, è una sola: l'intelligenza artificiale generale. DeepSeek, dice, "non ha interesse in nient'altro", niente prodotti laterali, niente diversificazioni per fare cassa. E il modo per arrivarci è la vecchia ossessione della casa: fare di più spendendo meno. Il loro ultimo modello arriva a una dimensione enorme con un prezzo d'uso che, a sentire i numeri, è oltre dieci volte più economico dei concorrenti americani.

Qui la questione del costo smette di essere una faccenda da contabili e diventa geopolitica. Se puoi addestrare e far girare modelli potenti con una frazione del calcolo, non dipendi più da chi controlla i chip più avanzati. L'efficienza diventa sovranità. È la stessa logica per cui, nella storia dell'energia, chi imparava a ricavare più lavoro da meno carbone non risparmiava soltanto: cambiava i rapporti di forza tra le nazioni. Liang sta giocando esattamente quella partita, con il calcolo al posto del carbone.

E si lega all'altra grande tensione di oggi, quella tra sovranità e accelerazione. Da una parte c'è chi, come Balaji Srinivasan o Dario Amodei, discute di AI locale o di regole per governarla. Dall'altra c'è chi, come Liang, la sovranità se la prende e basta, rendendosi indipendente sul piano che conta davvero: quanto ti costa pensare.

---

Qualche progetto da tenere d'occhio, e stavolta sono tutti vecchie conoscenze che continuano a crescere, il che di per sé dice qualcosa.

C'è un grappolo intero che porta la firma di Karpathy, e non è un caso vista la giornata: nanochat, in crescita costante; llm-wiki, l'idea della base di conoscenza personale di cui parlavamo, sempre in tendenza; e autoresearch, anche lui in salita. Sono i ferri del mestiere di chi vuole tenersi le idee in casa, esattamente la pratica che Karpathy predica.

Accanto, due strumenti che incarnano l'AI locale di cui parlava Liang. llama.cpp continua a crescere: è quello che permette di far girare i modelli sul proprio computer, senza server di nessuno. E llm, di Simon Willison, lo stesso spirito da riga di comando, anch'esso in tendenza.

Resta in crescita ARC-AGI, la prova ideata da François Chollet, quella su cui i modelli prendono meno dell'uno per cento e gli umani cento — il termometro della fragilità di cui dicevamo. E torna Obsidian, il programma per costruirsi un secondo cervello fatto di note collegate.

C'è un filo che tiene insieme questa lista, e non l'ho scelto io: archivi personali di idee, modelli che girano sul tuo portatile, strumenti per misurare quanto manca davvero. È la versione "fai da te" di tutto quello che oggi i grandi annunciano dai palchi. Mentre Hassabis parla di pendici della singolarità, qualcuno, la sera, si costruisce in silenzio gli attrezzi per non dipendere da nessuno.

---

Resta l'immagine di Karpathy che guarda un assistente entrare in una chat di lavoro, accanto alle persone. Una cosa minima. Eppure dentro c'è tutto: la macchina che smette di essere uno strumento da interrogare e diventa qualcuno con cui stare. Forse la domanda dei prossimi anni non sarà quanto sono capaci, né quanto costano, ma che posto gli lasciamo accanto a noi. È stato Signal Brief. Alla prossima.
