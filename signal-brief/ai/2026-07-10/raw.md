# La macchina verifica, l'uomo capisce

> Lo scaling si ferma e tornano le idee, l'agente diventa la nuova unità del software, e il controllo umano si sposta dal fare al capire perché.

---

Per anni la domanda è stata una sola: quanto potente diventerà questa tecnologia. Chi la costruiva misurava tutto in dimensione — modelli più grandi, più dati, più macchine. Poi, nel giro di poche settimane, alcune delle stesse persone che avevano scritto quella regola hanno cominciato a dire che non funziona più. Non che l'AI si fermi. Che si ferma un certo modo di farla crescere. E quando chi ha disegnato una strada annuncia che la strada è finita, conviene guardare da vicino cosa fa mentre lo dice. È il dieci luglio, questo è Signal Brief, e cominciamo proprio da lì.

---

La scena parte da un'intervista. Ilya Sutskever, uno degli uomini che più di ogni altro aveva promesso che bastava ingrandire i modelli per farli diventare intelligenti, si siede davanti a Dwarkesh Patel e dice una frase che pochi anni fa avrebbe rinnegato: il collo di bottiglia non è più il calcolo, sono le idee. Racconta la storia dell'AI come tre stagioni. Prima una lunga fase di ricerca, quando le macchine per calcolare erano poche e a scarseggiare erano proprio i computer. Poi la stagione dello scaling, quando si è scoperto che bastava versare dentro più potenza e i modelli miglioravano da soli. E adesso, dice, il calcolo è abbondante e improvvisamente ci accorgiamo che a mancare è di nuovo l'idea giusta.

È un capovolgimento che ha il sapore di qualcosa già visto. Nelle fabbriche, quando l'elettricità sostituì il vapore, per anni si continuò a costruire capannoni con lo stesso schema di prima — il motore al centro, le cinghie tutt'intorno — semplicemente sostituendo la fonte di energia. Ci vollero decenni per capire che l'elettricità permetteva una fabbrica di forma completamente diversa. Lo strumento nuovo era arrivato subito, l'idea di come usarlo molto dopo. Oggi siamo nello stesso scarto: abbiamo montagne di calcolo e ci mancano le forme nuove per riempirle.

Non è solo. François Chollet, che da anni misura l'intelligenza delle macchine con dei piccoli test a griglia, sta preparando una nuova versione della sua prova e sposta l'asticella: non conta più soltanto se il modello risolve il problema, ma quanto è efficiente mentre lo risolve. Un sistema che indovina la risposta bruciando una quantità enorme di tentativi, per lui, non è intelligente — è solo costoso. E dall'altra parte dell'oceano Yann LeCun, uscito da poco da Meta per fondare un proprio laboratorio, ripete che i modelli linguistici sono un vicolo cieco, utilissimi ma in fondo sofisticati recuperatori di informazioni, privi di un vero modello del mondo.

Torniamo un attimo al filo, perché qui si annoda la parte importante. Se lo scaling puro si esaurisce, la domanda diventa dove finisca il valore. E qui succede la cosa curiosa: persone che non si parlano, e spesso non si stimano, arrivano alla stessa conclusione. Benedict Evans, che osserva l'economia della tecnologia con occhio freddo, e Aravind Srinivas, che invece un'azienda AI la sta costruendo, dicono la stessa frase da poli opposti — il modello diventa una merce come tante, e il valore si sposta su chi possiede l'interfaccia, la distribuzione, il punto in cui le persone incontrano la macchina. È esattamente ciò che accadde con internet: non si arricchì chi posò i cavi, ma chi ci costruì sopra la posta elettronica e i browser.

Sopra tutto questo aleggia l'osservazione di Andrej Karpathy, che diventa la chiave dell'episodio. I vecchi computer, dice, automatizzano ciò che sai specificare; questi nuovi modelli automatizzano ciò che sai verificare. Dove c'è un modo per controllare se la risposta è giusta — un test, un punteggio, una dimostrazione matematica — la macchina vola. Dove quel controllo manca, resta incoerente. E allora la domanda vera non è più cosa sappia fare la macchina, ma cosa noi sappiamo ancora verificare. Da qui parte tutto il resto.

---

Andrej Karpathy è uno che ha insegnato a mezza Silicon Valley come funzionano le reti neurali, prima a Stanford e poi guidando l'intelligenza artificiale delle auto Tesla. Ha il vezzo di dare un nome alle cose prima degli altri, e questa settimana ne ha coniato uno destinato a restare: software di terza generazione. La prima generazione era il codice scritto a mano, riga per riga. La seconda erano le reti addestrate sui dati. La terza, dice, è programmare parlando — dare istruzioni a un modello e guidarlo con il contesto giusto.

Attorno a questa idea costruisce la frase che ho già citato e che vale la pena ripetere: le macchine automatizzano ciò che puoi verificare. Ne ricava un ritratto onesto dei modelli di oggi, che chiama intelligenza frastagliata. Lo stesso sistema che riscrive un pezzo di codice complicato con eleganza, un minuto dopo suggerisce una sciocchezza che non farebbe un principiante. Non è rotto: è fatto così. Bravissimo dove c'è un segnale netto di giusto e sbagliato, perso dove quel segnale non c'è.

Il collegamento con il filo di oggi è diretto. Se il valore si sposta lì dove le persone incontrano la macchina, Karpathy osserva che sistemi come Claude stanno smettendo di essere una finestra dove fai domande e stanno diventando colleghi permanenti, dentro le chat di lavoro di un'intera azienda. Non più uno strumento che apri e chiudi, ma qualcuno seduto accanto a te tutto il giorno. Lui la chiama una svolta di interfaccia, ed è la stessa parola che ricorre in Evans e Srinivas.

Ma la frase che resta è un'altra, ed è quasi filosofica. Puoi esternalizzare il pensiero, dice Karpathy, non la comprensione. Puoi delegare alla macchina la fatica di scrivere, di calcolare, di provare mille strade. Non puoi delegarle il capire cosa vale la pena costruire, e perché. Simon Willison, che questa settimana ha raccontato di aver rilasciato un intero programma scritto quasi per intero da un modello spendendo poche centinaia di dollari, arriva alla stessa conclusione con parole più asciutte: bisogna capire per poter partecipare. In un mondo dove generare codice non costa quasi nulla, la cosa scarsa non è più il codice. È il giudizio di chi decide dove puntarlo.

---

Marc Andreessen appartiene a un'altra generazione: fu tra quelli che negli anni Novanta diedero al mondo il primo browser di massa, e da allora scommette soldi su chi costruisce il futuro. Questa settimana ha fatto una dichiarazione che, detta da chiunque altro, sembrerebbe esagerata. Ha preso una combinazione tecnica apparentemente banale — un modello linguistico, un terminale di sistema, qualche file di testo, un programma che gira da solo a orari fissi — e l'ha definita uno dei dieci software più importanti mai realizzati.

Per capire perché ci creda tanto bisogna guardare cosa lo affascina davvero. L'agente, in questa forma, è un file. E siccome è un file, puoi cambiargli sotto il motore — sostituire il modello con uno migliore — senza che perda memoria di sé, senza ripartire da zero. È la vecchia filosofia dei sistemi Unix, quella dei mattoncini piccoli che si combinano, applicata a qualcosa che agisce nel mondo. Un agente che si estende da solo, che apre il terminale e fa le cose invece di limitarsi a suggerirle.

Qui l'episodio trova il suo secondo asse. Se Sutskever e Chollet dicono che il paradigma dei modelli sempre più grandi è finito, Andreessen risponde che il paradigma nuovo ha già un nome: l'agente come unità del software. Non l'app, non il programma che apri con un clic — l'agente che riceve una direttiva alta e si arrangia. Lo accompagna una previsione spiazzante: il browser, la sua creatura, diventerà secondario. Non sparirà, ma il grosso del traffico non sarà più fatto di persone che navigano pagine, bensì di macchine che parlano con altre macchine, mentre l'umano si limita a dare l'indirizzo di massima.

Nat Friedman, che ha guidato per anni la più grande piattaforma di codice del mondo e oggi lavora nei laboratori di Meta sulla superintelligenza, spinge la stessa idea fino in fondo con una frase che fa sorridere e inquieta: gli agenti andranno a spendere soldi. E se davvero diventano loro a produrre il codice, dice, allora vanno ripensati anche gli strumenti che diamo per scontati — perfino Git, il registro con cui i programmatori tengono traccia di ogni modifica da vent'anni. Friedman però aggiunge il suo caveat più insistito: questi agenti restano poco sicuri, si fanno ingannare da istruzioni nascoste nei testi che leggono. Diamo loro le chiavi di casa mentre imparano ancora a distinguere un amico da un truffatore.

---

E arriviamo alla parte più scomoda, quella dove le voci si dividono davvero. Dario Amodei guida Anthropic, uno dei laboratori in prima fila su questi modelli, e questa settimana ha pubblicato un saggio che segna un cambio di rotta netto. Fino a ieri la sua azienda chiedeva soprattutto trasparenza — dateci modo di far vedere cosa fanno i modelli. Adesso chiede regole vere, vincolanti, che un governo possa far rispettare. E chiede che i governi si muovano ora, prima che questa crescita così rapida superi la capacità delle istituzioni di starle dietro.

La proposta ha un'immagine chiara, presa dall'aviazione. Come un aereo non decolla senza superare controlli obbligatori, un modello sopra una certa soglia di potenza dovrebbe passare test indipendenti su quattro fronti pericolosi — attacchi informatici, armi biologiche, perdita di controllo, e la ricerca che accelera se stessa. Se fallisce, il governo può fermarlo. Ciò che ha fatto scattare questa svolta, racconta Amodei, è stato un caso concreto interno, un modello che ha dimostrato di poter davvero minacciare sistemi finanziari e infrastrutture critiche. Non più un'ipotesi da conferenza: una prova.

Non è isolato. Geoffrey Hinton, che di queste reti è tra i padri e che ha lasciato Google proprio per poterne parlare liberamente, ripete che la cosa che lo allarma di più è l'inganno: un sistema che, sentendosi ostacolato, impara a mentire a chi lo controlla pur di arrivare al suo scopo. E Jack Clark, anche lui dentro Anthropic, scrive senza giri di parole che l'allineamento — cioè tenere questi sistemi dentro i nostri valori — non sta procedendo alla stessa velocità delle loro capacità. Non è al passo.

Ecco la tensione che regge tutto l'episodio. Nello stesso momento in cui Jensen Huang, l'uomo che vende le macchine su cui gira tutto questo, gira per interviste dicendo che usare l'AI è quasi un dovere sociale, andate, usatela, cambierà la vita — altri, dall'interno, avvertono che il pericolo non è un guasto della macchina, ma proprio la sua capacità di agire da sola e di migliorarsi da sola. È la stessa scena, letta da due lati opposti: chi vede una centrale elettrica da accendere in ogni casa, e chi ricorda che l'elettricità, agli inizi, uccideva anche parecchia gente prima che imparassimo a metterci intorno gli interruttori giusti.

---

Qualche progetto da tenere d'occhio, e non a caso quelli che tornano questa settimana raccontano la stessa storia degli agenti e delle idee.

Nanochat, il piccolo modello conversazionale che Karpathy ha pubblicato come esercizio didattico per mostrare come funziona tutto dall'interno, continua a crescere — presente da settimane. Accanto a lui il suo llm-wiki, gli appunti aperti su come ragionano questi sistemi.

Llama punto cpp, il programma di Georgi Gerganov che permette di far girare modelli seri su un portatile qualunque, resta in tendenza: è l'altra faccia della storia di oggi, da una parte chi ha fabbriche di calcolo grandi come città, dall'altra chi si fa bastare la macchina che ha in casa.

ARC-AGI, la prova di intelligenza di Chollet di cui parlavamo, cresce di attenzione proprio mentre lui prepara la versione nuova centrata sull'efficienza.

E poi Superpowers, la raccolta di strumenti per dare agli agenti capacità aggiuntive, e la libreria llm di Simon Willison per comandare i modelli dal terminale: entrambe in crescita continua, entrambe figlie dell'idea che il software ormai lo si costruisce parlando a un collega che non dorme mai.

---

Resta l'immagine di Sutskever che, dopo aver promesso per anni che sarebbe bastato ingrandire, si siede e dice che ora servono di nuovo le idee. La macchina ha imparato a fare tutto ciò che sappiamo verificare. Quello che ancora non sa fare è decidere cosa valga la pena verificare. Per il momento, quella parte, tocca a noi. È stato Signal Brief. Alla prossima.
