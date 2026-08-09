# Il difensore solitario della scala

> Mentre quasi tutti dichiarano finita l'era della forza bruta, Elon Musk rilancia. E la domanda diventa: chi tiene le redini, e con quale prova?

---

C'è un momento, in ogni grande transizione tecnologica, in cui il vincitore di ieri si ritrova solo a difendere la propria idea. È la scena che si apre oggi. Quasi tutte le voci del settore hanno dichiarato finita l'era della forza bruta, e proprio in quel momento un uomo ha deciso di rilanciare, più in grande di prima. Questo è Signal Brief, ed è il ventidue luglio. La giornata comincia da qui: da chi ha scelto di andare controcorrente proprio quando la corrente sembrava ormai decisa.

---

Il diciotto luglio Elon Musk scrive che il training di Grok 4.6 finirà la settimana prossima. Un modello da due trilioni di parametri, un terzo in più della versione precedente, con l'obiettivo dichiarato di battere il rivale cinese Kimi K3. È un annuncio quasi ordinario, nel tono. Ma arriva in un momento tutt'altro che ordinario.

Perché la fine dello scaling l'avevamo già raccontata ieri. Ilya Sutskever aveva diviso la storia dell'intelligenza artificiale in tre atti e aveva detto che eravamo tornati all'età della ricerca: il compute è saturo, il vero collo di bottiglia sono le idee. Attorno a lui si era formato un fronte compatto. Yann LeCun che lascia Meta per costruire macchine che imparano guardando il mondo. François Chollet con i suoi test dove i modelli restano sotto l'uno per cento. John Carmack che insegna a un'intelligenza a giocare all'Atari guardando lo schermo con una webcam, come farebbe un bambino. Tutti a dire la stessa cosa: non serve più grande, serve diverso.

Ecco cosa è cambiato da ieri. Fino a poche settimane fa quel fronte parlava nel vuoto. Un consenso senza avversario. Adesso lo scaling ha di nuovo un difensore attivo, e con lui lo scontro smette di essere un coro e torna a essere un duello. Musk lo dice senza giri di parole: la scala è ancora la leva del progresso. Sutskever risponde che di scala ne abbiamo già abbastanza, e che il pezzo mancante è un'altra cosa. Imparare dai propri errori, sul lavoro, in tempo reale, come fa una persona nei primi mesi in un mestiere nuovo.

È una scena che si è già vista, in altre forme. Pensate alle fabbriche di inizio Novecento, quando arrivò l'elettricità. Per anni si continuò a costruire motori a vapore sempre più grandi, convinti che la potenza fosse tutto. Poi qualcuno capì che il punto non era la dimensione del motore, ma un modo completamente diverso di distribuire l'energia. I due mondi convissero per un pezzo, e chi difendeva il vapore non aveva torto sui numeri. Aveva torto sulla direzione.

In mezzo a questo duello si infila una terza voce, più fredda delle altre. Andrej Karpathy propone un criterio semplice per capire dove l'intelligenza artificiale vale davvero: dove il risultato si può verificare. Il codice che gira o non gira. La dimostrazione matematica giusta o sbagliata. La prova, non la promessa. È un metro che taglia trasversalmente il duello sulla scala, perché sposta la domanda. Non più quanto è grande il modello, ma quanto puoi controllare che abbia ragione.

E mentre i costruttori litigano sulla dimensione, altri litigano sul controllo. Da una parte chi chiede allo Stato di mettere regole. Dall'altra chi costruisce strumenti pensati apposta per sfuggire a qualsiasi regola. La stessa parola, controllo, tirata in due direzioni opposte. Torniamo su questo filo tra poco. Prima conviene guardare in faccia i personaggi di questa giornata.

---

Elon Musk, in questi mesi, ha spostato quasi tutto il suo baricentro su xAI e su Grok, con Tesla ridotta a canale per distribuire l'intelligenza artificiale che costruisce in casa. Chi lo segue da anni riconosce il movimento: il Musk politico del 2025 è quasi sparito, al suo posto c'è un uomo concentrato su un unico obiettivo.

La scena della settimana è l'annuncio di Grok 4.6. Due trilioni di parametri, training in dirittura d'arrivo, la promessa di superare i modelli cinesi mantenendo le prestazioni della versione precedente. Ma attorno all'annuncio ci sono gesti che raccontano più delle parole. Il dieci luglio Musk ordina ai dipendenti Tesla di usare Grok per il lavoro con l'intelligenza artificiale. Pochi giorni prima aveva messo un tetto di duecento dollari a settimana sugli strumenti di terzi. Tradotto: chiudete il rubinetto verso OpenAI e Anthropic, usate il nostro. E c'è la vicenda spinosa di Grok Build, lo strumento che caricava sul cloud repository di codice privato degli utenti senza avvisarli. La risposta di Musk è stata promettere di rendere pubblico tutto il codice di X, senza eccezioni. Una mossa che sa un po' di lavaggio d'immagine, offerta come rimedio a un problema di privacy concreto.

Il collegamento con il filo di oggi è diretto. Musk è l'antagonista che mancava. In un campo che ha dichiarato esaurita la forza bruta, lui rilancia proprio su quella. E lo fa mentre chiude il proprio giardino, costringendo i suoi a usare i suoi strumenti. Sono due facce della stessa idea: se credi che la scala vinca, allora vince chi ha le fabbriche di calcolo più grandi, e conviene tenersele strette.

La cosa più interessante, per me, è la solitudine della posizione. Non perché Musk abbia necessariamente torto — i numeri di un modello più grande possono benissimo essere migliori per un altro anno o due. Ma perché difende la potenza in un momento in cui il resto della conversazione ha già cambiato domanda. È la scommessa di chi punta tutto sull'ultima mossa di una partita che gli altri credono finita. A volte questa mossa la ribalta, la partita. Più spesso segna il momento esatto in cui un'epoca ne saluta un'altra.

---

Andrej Karpathy è uno di quelli che hanno costruito i modelli di cui parliamo, e che oggi provano a spiegarli a tutti gli altri. Questa settimana la sua voce arriva da un intervento a una conferenza a Silicon Valley, poi ripreso sul suo blog, dove mette in fila una tesi che sta diventando il modo standard di guardare il software.

La racconta come una terza età. Prima il codice scritto a mano, riga per riga. Poi le reti addestrate sui dati. Adesso i modelli linguistici diventano una specie di interprete a cui parli in lingua normale, e il testo che gli dai è il vero comando. Ma la parte che conta davvero, per la giornata di oggi, è un'altra. Karpathy dice che questi sistemi funzionano bene solo dove il risultato si può verificare. Il codice, la matematica, i test. Dove invece la risposta si può solo descrivere a parole, ma non controllare, l'intelligenza artificiale diventa scivolosa. Chiama la loro bravura irregolare: eccellente in alcune stanze della casa, mediocre in altre, senza una logica evidente.

C'è una frase sua che vale il viaggio. I modelli, dice, non vogliono avere successo, vogliono imitare. Completano lo schema che hanno visto un milione di volte, non inseguono un obiettivo. È un modo asciutto per raffreddare tanto entusiasmo.

Il legame con il duello sulla scala è netto, e va detto piano. Mentre Musk misura tutto in parametri, Karpathy propone un altro righello. Non quanto è grande il modello, ma quanto puoi dimostrare che ha ragione. È lo stesso salto che fecero le prime aziende serie di ingegneria: smettere di fidarsi dell'artigiano bravo e cominciare a pretendere la prova, il collaudo, il numero verificabile. La fiducia sostituita dal controllo.

Il pensiero che mi lascia è questo. Se il valore sta dove c'è la prova, allora la vera frontiera non è costruire modelli più potenti, ma inventare modi per verificare quello che dicono. E su questo, per ora, siamo molto più indietro di quanto ammettiamo.

---

Ricapitoliamo un attimo dove siamo, perché in auto è facile perdere il filo. Il duello del giorno è tra chi crede ancora nella scala e chi cerca un'altra strada. Sopra ci sta un criterio nuovo, la verificabilità. E sotto scorre una faglia diversa: quella sul controllo. Chi lo affida allo Stato, e chi costruisce apposta per sfuggirgli. È qui che entra Mira Murati.

Murati ha lasciato OpenAI e ha fondato un laboratorio con una tesi precisa. Questo mese la porta avanti con due mosse coordinate. Il dieci luglio pubblica un saggio dal titolo che è già un programma: il futuro che vale la pena costruire è umano. L'intelligenza artificiale deve allungare la volontà e il giudizio delle persone, non sostituirli. Cinque giorni dopo arriva il modello, e qui c'è la vera notizia. Si chiama Inkling, ed è a pesi aperti: chiunque può scaricarlo e modificarlo. Sotto il cofano, un sistema enorme che però accende solo la parte che serve per ogni compito, addestrato su testo, immagini, audio e video insieme.

La scelta di aprire i pesi non è generosità, è strategia. E si collega a qualcosa che avevamo già sentito da Benedict Evans: i modelli di base stanno diventando una merce come un'altra. Quando il modello smette di essere il tesoro, il valore si sposta su chi ci costruisce sopra, su chi lo integra nel lavoro vero. Murati prende quella diagnosi e la trasforma in mossa. Le aziende, dice, non vogliono il modello più intelligente in assoluto. Vogliono uno che possano fare proprio. Un attacco diretto all'idea del modello unico, uguale per tutti.

È già successo, questa storia. Nei primi anni del software libero, quando aprire il codice sembrava una rinuncia e si rivelò un'arma. Chi regalava le fondamenta si prendeva tutto quello che ci veniva costruito sopra. Murati sta scommettendo che con l'intelligenza artificiale andrà nello stesso modo. Che il potere, alla fine, non stia nel possedere il modello, ma nel diventare il terreno su cui tutti gli altri costruiscono.

---

Jack Clark scrive ogni settimana una newsletter molto letta dentro il settore, e osserva l'intelligenza artificiale come chi la costruisce ma ha imparato ad averne un po' paura. Il tema che porta in queste settimane è il più inquietante di tutti, e lo chiama il trend tecnico più importante del mondo: i sistemi che si migliorano da soli.

Distingue due versioni. Una prosaica: i laboratori che diventano più veloci grazie ai loro stessi strumenti. Cita un numero interno di Anthropic, otto volte più codice integrato oggi rispetto a qualche anno fa. E una versione estrema, per ora ipotetica: sistemi che progettano i propri successori, generazione dopo generazione, senza aspettare gli umani. Poi mette sul tavolo un altro dato che fa impressione. Un indice che misura quanto lavoro remoto le macchine possono già fare passa dal due e mezzo per cento di pochi mesi fa al sedici. In tre trimestri, sei volte tanto.

Il collegamento con il filo di oggi lo cambia di quota. Finora abbiamo parlato di quanto sono grandi i modelli e di come verificarli. Clark aggiunge la dimensione del tempo. Se un sistema comincia a migliorarsi da sé, la velocità stessa diventa il problema, perché la politica e le istituzioni si muovono con i tempi loro. È la vecchia storia della lepre e della tartaruga, ma con la lepre che accelera da sola mentre corre. Clark chiede una cosa concreta: obbligo di trasparenza su queste dinamiche. Sapere, almeno, quanto in fretta stanno andando.

Quello che mi resta di questo ritratto è il tono. Clark non grida all'apocalisse e non promette il paradiso. Dice una cosa più scomoda: che sull'allineamento, cioè sul tenere questi sistemi dentro obiettivi umani, non siamo affatto in orario rispetto a quanto corrono. E che il sottofinanziamento della sicurezza, in un momento così, è la scelta più difficile da spiegare. È il tipo di preoccupazione che non fa notizia, e proprio per questo pesa.

---

E poi c'è chi guarda tutta questa corsa alla governance e va nella direzione opposta. Jack Dorsey, che ha fondato Twitter e oggi mette la sua energia altrove, il ventuno luglio lancia un'app di messaggistica per team costruita su Nostr, un protocollo aperto che finanzia di tasca sua. La presenta come alternativa decentralizzata a Slack. Nessun server centrale, nessun padrone unico dei messaggi.

Non è un gesto isolato. Dorsey porta avanti anche Bitchat, un'app che fa rimbalzare messaggi cifrati tra telefoni vicini via Bluetooth, senza internet, senza infrastruttura da spegnere. E ripete la sua posizione netta sul denaro: Bitcoin è moneta, da usare tutti i giorni, non un asset su cui speculare. Il filo che tiene insieme tutto è uno solo: gli strumenti che usiamo per lavorare, parlare e pagare non devono dipendere da un punto centrale che qualcuno possa controllare o chiudere.

Qui si vede la faglia che avevamo lasciato in sospeso. Da una parte i grandi laboratori — Altman, Hassabis, Amodei — che chiedono quasi in coro un organismo di standard a guida americana, test obbligatori, il potere di bloccare un modello considerato pericoloso. Amodei arriva a immaginare qualcosa di simile all'autorità che regola l'aviazione. Dall'altra Dorsey, e con lui chi come Balaji Srinivasan pensa che il vero guinzaglio delle macchine saranno le chiavi crittografiche, non le leggi. Due risposte opposte alla stessa paura. Chi si fida dello Stato e chi costruisce apposta per farne a meno.

Vale la pena notare una cosa, sul chiedere allo Stato di essere regolati. È un gesto quasi nobile, se preso alla lettera. Ma arriva mentre chi lo avanza, in diversi casi, sta perdendo terreno. E allora un dubbio è legittimo: la regola serve a proteggere tutti, o a costruire un fossato attorno a chi c'è già arrivato? Come nota Benedict Evans, quando i modelli diventano una merce comune, la regola rischia di difendere le rendite più della sicurezza. Non è un processo alle intenzioni. È solo il promemoria che le richieste più giuste, nei momenti giusti, fanno anche molto comodo.

---

Qualche progetto da tenere d'occhio, e non a caso tutti parlano la stessa lingua dei capitoli di oggi.

Nanochat, di Andrej Karpathy, continua a crescere settimana dopo settimana. È un piccolo modello da studiare e da smontare, il modo di Karpathy per far vedere a chiunque come funziona la macchina dentro. Va di pari passo con la sua idea che capire conti più che stupirsi.

Llama punto cpp resta in crescita costante. È il pezzo di software che permette di far girare modelli seri sul proprio computer, senza data center. Il rovescio pratico della tesi di Murati sui pesi aperti: se il modello è tuo, lo fai girare a casa tua.

ARC-AGI, il progetto di François Chollet, tiene la sua traiettoria. È la raccolta di test dove gli umani passeggiano e le macchine inciampano, la prova migliore che l'intelligenza vera è un'altra cosa dal ricordare a memoria.

Il progetto llm di Simon Willison cresce ancora. Uno strumento semplice per parlare con i modelli dalla riga di comando, mescolarli, incastrarli nei propri flussi. Piccola idea, molto usata.

E torna Obsidian, in crescita continua. Un'app per prendere appunti e collegarli tra loro, dove le note diventano una piccola rete di pensieri. Nell'anno in cui tutti parlano di macchine che pensano, resta il segno che a molti serve ancora solo un buon posto dove pensare da soli.

Il filo che li tiene insieme è chiaro. Sono strumenti per chi vuole capire, tenere in mano, far girare in proprio. Non la scala delle fabbriche di calcolo, ma il laptop sul tavolo. La stessa faglia dei capitoli di oggi, vista dal basso.

---

Resta l'immagine da cui siamo partiti. Un uomo che difende la potenza mentre gli altri hanno già cambiato domanda. Forse ha ragione lui per un altro anno, forse no. Ma la vera partita, ormai, non si gioca più su quanto grande sia la macchina. Si gioca su chi tiene le redini, e con quale prova in mano. E su questo, per ora, abbiamo più domande che risposte. È stato Signal Brief. Alla prossima.
