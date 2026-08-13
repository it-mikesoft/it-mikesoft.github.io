# L'impalcatura intorno al modello

> Il centro del dibattito si sposta dalla rete neurale al sistema che la circonda. E sul freno, per la prima volta, parla anche chi accelera.

---

C'è un momento, in ogni tecnologia, in cui smettiamo di guardare il pezzo e cominciamo a guardare la macchina intorno al pezzo. Il motore a scoppio contava fino a un certo punto: poi hanno contato le strade, i distributori, le officine. Questa settimana l'intelligenza artificiale attraversa esattamente quel passaggio. È Signal Brief, oggi è il 13 agosto. E la scena che apre la giornata non è l'annuncio di un modello più grande, ma un uomo che passa due ore a guardare una macchina costruire da sola un mondo in tre dimensioni.

---

L'uomo è Andrej Karpathy, uno che i modelli linguistici li ha smontati pezzo per pezzo per lavoro. In un post racconta questo esperimento: un modello, un budget di un milione di parole-macchina, circa due ore di lavoro continuato. Il risultato è un mondo tridimensionale ispirato al Signore degli Anelli, cinquemilacinquecento righe di codice generate senza che nessuno stesse lì a correggere. La frase che conta, però, è quella subito dopo. Karpathy dice che stiamo uscendo dal territorio dei test brevi — il classico "disegnami un pellicano in bicicletta" — perché quei test non misurano più niente di utile.

È un'osservazione tecnica che nasconde un cambio di paradigma. Per anni abbiamo giudicato questi sistemi come si giudica uno studente all'esame orale: una domanda, una risposta, un voto. Adesso il criterio diventa un altro, più simile a come si giudica un collaboratore: regge un compito lungo? Riprende il filo quando sbaglia? Arriva in fondo? La differenza tra un colloquio e una settimana di lavoro insieme.

Dall'altra parte del ragionamento, per strade completamente diverse, arriva François Chollet allo stesso punto. Chollet ha passato anni a costruire test per misurare il ragionamento delle macchine, e in un intervento di inizio agosto propone una lettura che ribalta l'oggetto stesso della discussione. Quello che chiamiamo modello di frontiera, sostiene, non è più una rete neurale: è una rete dentro un'impalcatura che coordina decine, centinaia di chiamate. E questa cosa ha già un nome vecchio nella storia dell'informatica — sistema neurosimbolico. Il pezzo che tutti guardano fa una parte del lavoro. Il resto lo fa la struttura intorno.

Vale a dire che il centro di gravità si è spostato mentre stavamo guardando altrove. Un po' come è successo nelle fabbriche col passaggio dal vapore all'elettricità: per vent'anni si sono limitati a sostituire il motore centrale, e la produttività non si muoveva. Il salto è arrivato quando qualcuno ha ripensato la disposizione delle macchine intorno all'energia. Non il motore: l'architettura.

Patrick Collison, che guida Stripe e quindi vede le cose dal lato dei pagamenti e delle imprese, tira la conseguenza economica. In una conversazione della settimana scorsa sostiene che il software verrà sempre più prodotto su richiesta, nel momento in cui serve. La sua immagine è la pizza: non un prodotto in scaffale, ma qualcosa che si fa quando lo ordini. Se ha ragione, il valore si sposta dal software confezionato al momento della domanda — e questo per chiunque venda licenze è un pensiero che toglie il sonno.

Torna qui un filo di ieri, quello di Benedict Evans: se i modelli diventano infrastruttura, il valore migra verso l'alto, nei prodotti. Solo che ieri era una domanda aperta — i laboratori riusciranno a difendere prezzi da bene raro? Adesso Evans la dà per risolta. I modelli sono tubature. Il denaro sta in quello che ci passa dentro.

E in mezzo a tutto questo, una voce che sposta l'asticella molto più in là. Marc Andreessen, ospite di un podcast, dice che la soglia dell'intelligenza generale l'abbiamo attraversata circa tre mesi fa. Non che arriverà: che è già successa, e il dibattito è in ritardo sui fatti.

---

Yann LeCun risponde a quella frase senza rispondere a quella frase, ed è la cosa più interessante della settimana.

LeCun è uno dei tre uomini a cui si fa risalire la rinascita delle reti neurali, ed è anche quello che da anni ripete che i modelli linguistici sono un vicolo cieco. Il 4 agosto pubblica un post che è, nella sua sobrietà, molto netto. Dice che questi strumenti sono utilissimi — cercare informazioni, riassumere, scrivere codice, fare matematica — ma che nella forma attuale non sono una strada verso l'intelligenza umana. Manca la comprensione del mondo fisico, manca la memoria che dura, manca la capacità di pianificare.

Il contrasto con Andreessen è quasi comico nella sua nettezza. Uno dice: è già successo tre mesi fa. L'altro dice: non stiamo nemmeno camminando nella direzione giusta. Sono due persone che guardano gli stessi sistemi, negli stessi mesi, e vedono due cose incompatibili.

Ma c'è un dettaglio biografico che rende la posizione di LeCun più densa. Continua il movimento notato ieri: la critica che si mette a costruire. LeCun sta lasciando Meta per fondare una propria impresa dedicata a quella visione alternativa — sistemi che imparano guardando il mondo, come fa un bambino nei primi mesi, prima ancora di parlare. Il 5 agosto è stato riportato il suo ingresso in una società di venture. Chi passava il tempo a dire che la strada era sbagliata adesso spende soldi e reputazione per aprirne un'altra.

E qui il suo dissenso incrocia direttamente il filo di oggi. Se Chollet dice che l'impalcatura intorno al modello sta facendo il lavoro pesante, LeCun risponde in anticipo che l'impalcatura non può sostituire quello che manca. Puoi coordinare mille chiamate a un sistema che non capisce come cade un bicchiere dal tavolo: avrai mille chiamate, non la comprensione.

Mi sembra che questa sia la divergenza vera del momento, molto più della lite sull'AGI. Non "quanto siamo vicini", ma "che cosa stiamo effettivamente costruendo". Se l'intelligenza dei sistemi attuali sta nella struttura che li circonda, allora migliorarla è ingegneria e può andare avanti a lungo. Se invece manca un pezzo di fondo, nessuna quantità di impalcatura lo produrrà — e ci accorgeremo del vuoto solo quando i compiti diventeranno abbastanza strani.

---

Poi c'è la frase che nessuno si aspettava di sentire da quella parte del tavolo.

Sam Altman guida OpenAI, l'azienda che più di ogni altra ha impresso il ritmo degli ultimi anni. Il 2 agosto dice pubblicamente che forse è il momento di regolare il passo dello sviluppo, per dare alla società il tempo di irrobustirsi intorno alle nuove capacità. Non un ripensamento sull'ambizione: un ragionamento sui tempi. Ed è comunque la prima volta che il freno viene nominato da chi sta sull'acceleratore.

Nella stessa settimana Altman è a Washington: incontra senatori e funzionari della Casa Bianca per mostrare in anteprima il prossimo modello e discutere di test volontari sulla sicurezza informatica, dopo un incidente recente. Il gesto racconta più della dichiarazione. Fino a poco tempo fa un laboratorio andava a Washington per difendersi da una regola; adesso ci va per anticiparla.

Il contrappunto è Jack Clark, che in Anthropic si occupa di impatto pubblico. La metafora del pedale del freno la usa da anni: serve un modo per rallentare o fermare, se le cose vanno storte. Nell'ultimo numero della sua newsletter mette insieme una rassegna di idee su sistemi che migliorano se stessi e un lavoro sulla misurazione della fase finale dell'addestramento, quella in cui oggi si decide gran parte di quello che un modello sa fare davvero.

Ieri il freno era una lamentela tecnica: mancano i pedali, mancano i sensori. Oggi diventa una faccenda politica, con un fronte che si allarga. Ma con una nota che vale la pena dire con calma: il fronte si allarga tra chi osserva, non tra chi ha messo più capitale sul tavolo. Nessuno ha rallentato niente. Si è cominciato a dire che si potrebbe.

È la stessa dinamica dei primi anni dell'automobile. Le cinture, i limiti di velocità, i freni idraulici non sono arrivati perché qualcuno ha annunciato che sarebbe stato saggio. Sono arrivati dopo, quando i morti sono diventati abbastanza da rendere il problema impossibile da rimandare. La domanda aperta è se stavolta si riesca a invertire l'ordine.

Yoshua Bengio prova a farlo per via tecnica. La sua fondazione lavora a sistemi deliberatamente privi di iniziativa propria, costruiti per capire e sorvegliare gli altri sistemi. Ieri era una dimostrazione formale: l'iniziativa autonoma emerge da sola quando una macchina impara imitando. Oggi è diventato un programma industriale — costruire guardiani che non possano trasformarsi in ciò che sorvegliano.

---

Torniamo un attimo sul filo di oggi, prima di andare avanti. Tre movimenti: il centro si sposta dal modello all'impalcatura, il freno entra nel vocabolario anche di chi accelera, e i pesi aperti smettono di essere una questione ideologica. È su quest'ultimo punto che si muove Mira Murati.

Murati ha guidato la parte tecnica di OpenAI e adesso ha un laboratorio suo. A metà luglio presenta il primo modello della casa: pesi aperti, addestrato da zero, pensato per essere adattato da chi lo usa. Aggiunge un dettaglio che dice molto sulla direzione: la versione piccola è paragonabile a quella grande a un quarto delle dimensioni. Non la corsa alla taglia massima — la corsa alla taglia giusta.

Il ragionamento intorno è più interessante del prodotto. La sua tesi è che la conoscenza che rende utile una macchina sta sparsa nel mondo, nei posti, nei mestieri, nelle comunità. E che quindi anche le macchine devono stare sparse, per raccoglierla. Da qui la posizione sulla sicurezza: esiste una via di mezzo tra pubblicare tutto senza guardare e tenere tutto chiuso in laboratorio.

Andrew Ng va oltre e capovolge l'argomento classico. In un intervento di inizio agosto sostiene che i modelli aperti risultino più sicuri di quelli chiusi. Non più liberi: più sicuri. Perché sono ispezionabili, perché li guardano in molti, perché gli errori vengono trovati prima. È esattamente la discussione che il software libero ha già fatto trent'anni fa, e che allora sembrava paradossale allo stesso modo: come può essere più solido un sistema di cui chiunque può leggere il funzionamento? La risposta, per il software, si è dimostrata col tempo.

La differenza rispetto ad allora è il peso politico. Sul tavolo americano si discute a quale livello di capacità un rilascio aperto vada fermato, e nel dibattito compare come metro di misura un modello cinese a pesi aperti. Il che ci porta al vincolo materiale, quello che le discussioni tendono a rimuovere.

Liang Wenfeng, di DeepSeek, in una lunga conversazione con investitori riduce il ritardo cinese a una faccenda di schede grafiche. Non talento, non idee: capacità di calcolo. Aggiunge che i modelli migliori resteranno probabilmente aperti, perché apertura e ricavi non si escludono. E sostiene che le alternative cinesi all'hardware americano stiano diventando competitive.

Mi sembra che qui stia il punto meno detto della giornata. Si può discutere all'infinito di apertura, di freni, di soglie. Sotto tutto questo ci sono capannoni pieni di macchine che consumano corrente. Sasha Luccioni riporta regolarmente il conto lì — data center ed energia. È la parte della storia che non fa titolo, e che decide chi può stare al tavolo.

---

Progetti da osservare.

Il primo è quasi un manifesto. Karpathy ha pubblicato autoresearch: seicentotrenta righe di codice che lasciano a un agente il compito di condurre da solo esperimenti di apprendimento automatico su una singola scheda grafica. La macchina riscrive il proprio codice di addestramento, l'umano aggiorna soltanto la descrizione dell'obiettivo. Venticinquemila stelle in cinque giorni. È l'impalcatura di cui parlava Chollet, ridotta all'osso e messa in pubblico.

Nella stessa famiglia c'è prime-agent, un'impalcatura open source dove il modello ha un solo strumento a disposizione e riscrive da sé le proprie istruzioni mentre lavora. Chi l'ha costruita dichiara un risultato molto alto su un test di ragionamento difficile, e attribuisce il salto alla struttura, non al modello sottostante. Se il dato regge, è la prova più diretta della tesi di oggi.

Poi DeepSeek V4 Pro, uscito il 12 agosto. Un modello enorme che ne attiva solo una piccola parte per volta — come un'azienda con migliaia di dipendenti dove a ogni pratica ne lavorano cinquanta. I numeri sulla programmazione sono a un soffio dai migliori sistemi occidentali. È Liang Wenfeng che dimostra la sua tesi coi fatti.

Jack Dorsey ha rilasciato Buzz, una chat di gruppo aperta dove ogni agente ha un'identità verificabile, dei permessi e una traccia di quello che fa. Come un badge aziendale, ma per i software. È la sua scommessa contro gli strumenti di lavoro che usiamo oggi.

E infine Ballet, che genera collegamenti tra programmi diversi senza che nessuno li scriva a mano. Il software su richiesta di Collison, in versione modesta e funzionante.

---

Resta l'immagine di Karpathy che guarda per due ore una macchina costruire un mondo, senza intervenire. Non è la potenza del modello a colpire, ma il fatto che nessuno stesse a guardare il singolo passo. Forse la domanda giusta non è più quanto siano intelligenti questi sistemi, ma quanto tempo siamo disposti a lasciarli soli. È stato Signal Brief. Alla prossima.
