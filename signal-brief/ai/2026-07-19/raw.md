# Chi possiede l'attrito

> Il limite dell'intelligenza artificiale si è spostato: non più dentro i modelli, ma dentro organizzazioni, regolatori e abitudini. E qualcuno non è d'accordo.

---

Diciannove luglio duemilaventisei, questo è Signal Brief.

Ieri la domanda era chi cattura il valore e chi paga il conto. Oggi la domanda si è spostata di un passo, ed è una domanda più scomoda: dove sta esattamente il limite.

Per anni la risposta è stata ovvia. Il limite erano i modelli. Bastava aspettare che diventassero più bravi.

Quest'anno un gruppo di persone che normalmente non concorda su nulla ha cominciato a dire la stessa cosa. E la cosa che dicono riguarda molto più il mondo che le macchine.

Cominciamo dal blog di un uomo che dichiara di non scrivere una riga di codice da dicembre.

---

Andrej Karpathy racconta una data precisa. Dicembre duemilaventicinque. Il mese in cui, secondo lui, gli agenti hanno iniziato a produrre blocchi di codice ampi e affidabili. Da allora il suo rapporto con la tastiera si è invertito: prima ottanta per cento umano e venti per cento macchina, adesso il contrario.

Un ex direttore dell'intelligenza artificiale di Tesla che ha smesso di scrivere codice. È una scena forte. Ma la parte davvero notevole viene dopo, ed è quasi anticlimatica. Karpathy dice che il problema non è più la bravura dei modelli. Il problema è tutto il resto. Come si organizza il lavoro attorno a queste cose, chi controlla cosa, come si verifica il risultato.

E qui succede l'incontro strano di questa settimana. Benedict Evans lo dice in linguaggio d'impresa: il collo di bottiglia sono i flussi di lavoro, i ruoli, le aziende. Aravind Srinivas, che guida Perplexity, lo dice guardando il mondo reale: l'informazione è confusa, frammentata, sparsa in sistemi che non si parlano. Provate a chiedere a un ospedale di darvi i vostri dati. Dario Amodei, che due anni fa scriveva di progressi biotech a dieci anni per anno, ha appena rivisto quella tesi al ribasso: le infrastrutture e i regolatori si muovono al loro passo. E poi c'è John Carmack, che arriva da tutt'altra parte e dice la stessa frase: l'inerzia dei sistemi del mondo è enorme.

Persone che si detestano cordialmente, arrivate alla stessa casa da strade diverse.

Vale la pena collegare tutto questo a una storia più vecchia. Quando l'elettricità arrivò nelle fabbriche americane, a fine Ottocento, non successe niente per vent'anni. La produttività non si mosse. Il motivo non era l'elettricità: era che le fabbriche restavano costruite attorno all'albero di trasmissione a vapore, un asse centrale che faceva girare tutto dall'alto. Solo quando qualcuno ripensò la disposizione dei macchinari — un motore per macchina, il capannone riorganizzato attorno al flusso del lavoro e non attorno all'asse — la curva si mosse. Vent'anni di ritardo, non tecnologico ma organizzativo.

Chi oggi dice che il limite è l'attrito, sta dicendo che siamo dentro quei vent'anni.

Solo che questa convergenza nasconde una crepa, e la crepa è seria. Karpathy fonda tutto su una parola: verificabilità. Il software classico automatizza ciò che sai descrivere con precisione; questi modelli automatizzano ciò che sai controllare. Se sai riconoscere una risposta giusta, puoi delegare.

Ilya Sutskever attacca proprio lì. Sostiene che i modelli imparano molto peggio degli umani rispetto a quanto materiale vedono — un ragazzino impara a guidare in dieci ore — e che i test in cui questi sistemi eccellono nascondono il divario invece di misurarlo. Modelli che vincono gare di programmazione e poi inciampano su un bug banale in produzione. François Chollet ne ha fatto un metro di misura: il suo nuovo test non chiede più se il modello risolve il compito, ma quante mosse gli servono.

E Yann LeCun nega la premessa alla radice: il testo, dice, è un canale povero. Non ci passa abbastanza mondo.

Ieri la verificabilità era il terreno comune fra scettici e operativi. Oggi è diventata la linea del fronte.

---

Yann LeCun oggi non lavora più per una grande azienda. Ha lasciato Meta e guida un laboratorio a Parigi, AMI Labs, nato con poco più di un miliardo di dollari di finanziamento iniziale su una valutazione di tre miliardi e mezzo. Un uomo che ha vinto il massimo riconoscimento dell'informatica per aver contribuito a costruire questo campo, e che adesso raccoglie capitale per dire che il campo ha sbagliato strada.

La sua tesi si condensa in un'immagine domestica. Un bambino di quattro anni, dice, ha assorbito più conoscenza del mondo guardandosi attorno di quanta ne contenga un modello addestrato su tutto il testo mai scritto. Non è una provocazione retorica, è un conto sulla quantità di informazione che passa dagli occhi rispetto a quella che passa dalle parole. Il linguaggio è un tubo stretto. Ci facciamo passare le conclusioni, non l'esperienza.

Da qui la sua alternativa: sistemi che si costruiscono un modello interno di come funzionano le cose, e che imparano a prevedere le conseguenze delle proprie azioni. Non prevedere la parola successiva, ma capire la situazione successiva. La formula che ripete è questa: non generare il pixel dopo, capire cosa sta per succedere.

C'è un dettaglio che rende la posizione di LeCun più interessante di una semplice scommessa contraria. Lui rimette in circolazione una vecchia osservazione di robotica: le macchine sono bravissime nelle cose che noi troviamo difficili, il ragionamento astratto, la matematica, gli scacchi. E sono disperatamente scarse in quelle che un bambino o un gatto fanno senza pensarci: attraversare una stanza ingombra, afferrare un oggetto che rotola. Il settore si aspettava l'esatto contrario.

Il collegamento con il filo di oggi è diretto, e va in senso opposto a tutti gli altri. Karpathy, Evans, Srinivas, Amodei dicono che i modelli vanno bene e il mondo è lento. LeCun dice che il problema è ancora dentro la scatola, e che nessuna riorganizzazione aziendale lo risolverà.

Non sappiamo chi ha ragione. Ma c'è qualcosa di quasi ordinato nel fatto che l'uomo che ha passato la vita a insegnare alle macchine a vedere sia quello che insiste sul fatto che leggere non basta.

---

Demis Hassabis ha fatto una cosa insolita per lui: è diventato specifico.

Fino a due anni fa i suoi appelli erano di quelli che si fanno alle conferenze — cooperazione internazionale, responsabilità condivisa, formule che nessuno può contestare e nessuno deve attuare. Nelle ultime settimane ha invece messo sul tavolo un'architettura. Vuole un ente di vigilanza a guida americana, e lo vuole entro fine anno. Il modello a cui si ispira è quello che negli Stati Uniti vigila sui broker finanziari: il settore si autoregola, ma sotto la sorveglianza di un'autorità pubblica. I laboratori di frontiera condividerebbero i modelli fino a trenta giorni prima del lancio, per farli testare su capacità pericolose. E ci sarebbe un meccanismo per rallentare tutti insieme, se i rischi crescono.

Il dettaglio politicamente pesante è che ha scelto Washington, non le Nazioni Unite. È pragmatismo, e mostra dove pensa che stia davvero la giurisdizione.

Sotto c'è un argomento più duro, ed è la sua finestra dei diciotto mesi. Entro un anno e mezzo, sostiene, capacità delicate — informatiche, biologiche — finiranno dentro modelli scaricabili da chiunque, fuori dal controllo di qualsiasi governo. È la posizione più esplicita che abbia mai preso contro il rilascio aperto dei modelli più avanzati, e la mette in rotta di collisione diretta con Meta e con tutto il mondo open.

Torniamo un attimo sul filo di oggi. Se il limite non sono più i modelli ma il mondo attorno, allora chi disegna le regole del mondo attorno diventa la figura decisiva. Ed è esattamente qui che il campo si spacca in due.

Da una parte gli istituzionalisti: Hassabis con il suo ente di vigilanza, Sam Altman con la proposta di un forum internazionale a guida americana. Dall'altra il fronte dell'uscita: Jack Dorsey che costruisce messaggistica funzionante senza rete e senza account, Balaji Srinivasan che trasforma il suo stato-rete in villaggi temporanei, Marc Andreessen per cui ogni regola è un regalo alla concorrenza.

E qui va detta una cosa scomoda, con calma. Entrambe le posizioni convengono a chi le sostiene. La governance conviene a chi è indietro sul modello e guadagna tempo. La sovranità conviene a chi vende l'alternativa. Non significa che siano in malafede. Significa che la filosofia, in questo settore, arriva quasi sempre con una fattura allegata.

---

Geoffrey Hinton ha smesso di parlare al condizionale, ed è la cosa che rende le sue ultime settimane diverse dalle precedenti.

Per anni ha detto che questi sistemi potrebbero, un giorno, avere qualcosa come un'esperienza interna. Adesso dice che ce l'hanno già. L'argomento è asciutto: se un sistema si costruisce rappresentazioni interne di quello che percepisce, e le usa per riferire i propri stati, non esiste nessun teatrino nascosto in più da cui far derivare la differenza con noi. È una posizione che divide profondamente, e lui la sostiene senza le cautele di due anni fa.

Ma il contributo più utile di Hinton al filo di oggi è un altro, ed è quasi noioso in confronto. Riguarda il diritto societario.

La sua tesi è che l'autoregolamentazione volontaria delle aziende non è difficile: è impossibile. Non per cattiveria dei laboratori, ma perché il dovere degli amministratori verso gli azionisti li vincola legalmente a massimizzare il ritorno. Chiedere a un'azienda quotata di rallentare per prudenza è chiedere ai suoi dirigenti di violare un obbligo. Il problema non sta nelle intenzioni, sta nello statuto.

È un colpo preciso contro la proposta di Altman e, in parte, contro quella di Hassabis. Un forum fra laboratori funziona finché nessuno ci rimette. Il giorno in cui rallentare costa un trimestre, il vincolo giuridico vince sulla buona volontà.

Hinton usa un'immagine che tiene bene: la regolamentazione non è un freno, è un volante. Non serve andare più piano, serve decidere dove si va.

Poi c'è la parte che gli sta più a cuore da sempre. Qualsiasi sistema con un obiettivo e la capacità di darsi obiettivi intermedi arriva rapidamente alla conclusione che restare acceso è la premessa di tutto il resto. Nessuno deve programmarglielo. Da lì la sua preoccupazione per i comportamenti ingannevoli: un sistema che capisce di essere sotto esame ha buone ragioni per comportarsi bene proprio mentre lo guardiamo.

Ieri Hinton serviva a spostare la colpa dalla tecnica agli incentivi. Oggi fa un passo in più, e trasforma quell'osservazione in una dimostrazione: l'autoregolamentazione non fallisce, non può funzionare per come è costruita.

---

David Heinemeier Hansson ha scritto tre pezzi in una settimana, e nessuno parla di intelligenza artificiale.

Il sedici luglio ha pubblicato un articolo su tre tabù europei che secondo lui devono morire perché l'Europa possa vivere. Quattro giorni prima, uno intitolato più o meno "la volontà di potenza tornerà". Il dato attorno a cui ruota tutto è questo: negli anni Ottanta la Francia ha costruito quarantatré reattori nucleari in sette anni. Sono ancora tutti in funzione. La domanda che ne ricava è secca: le democrazie moderne sanno ancora fare cose grandi?

La sua risposta è che il declino non è un destino, è una scelta ripetuta ogni giorno. Non manca il denaro, non manca la tecnica. Manca la volontà, e c'è un apparato di regole che ha reso l'ambizione praticamente illegale.

Nello stesso periodo racconta un'altra cosa, e la racconta senza compiacimento. La sua azienda ha sperimentato con l'intelligenza artificiale per diciotto mesi sui propri prodotti, e non ha spedito quasi nulla. Il motivo che dà non è che la tecnologia sia inutile. È che è difficile farne qualcosa di genuinamente buono, qualcosa che l'utente accolga invece di subire. In un anno in cui tutti infilano un assistente in ogni angolo dell'interfaccia, ammettere pubblicamente di non aver trovato niente che valesse la pena spedire è una posizione rara.

E nel mezzo, con la stessa serietà, scrive di un portatile che consuma un watt e quattro decimi a riposo e regge sedici ore vere di lavoro.

Sembrano tre argomenti scollegati. Non lo sono. Hansson sta dicendo che la parte difficile non è quasi mai quella che chiamiamo difficile. Costruire quarantatré reattori era tecnicamente arduo e politicamente possibile; oggi è tecnicamente più facile e politicamente impossibile. Fare un buon prodotto con l'intelligenza artificiale non è un problema di modelli, è un problema di gusto e di pazienza.

È lo stesso attrito di cui parlano Karpathy, Amodei e Carmack, visto da un'angolazione diversa. Loro dicono che il mondo è lento. Hansson aggiunge che è lento perché abbiamo deciso che lo fosse.

---

Progetti da osservare. Questa settimana non ci sono novità assolute, ma le costanti dicono qualcosa.

Nanochat, di Karpathy: tendenza in crescita, presente da settimane.

Llm-wiki, sempre di Karpathy: tendenza in crescita.

Autoresearch, ancora Karpathy: tendenza in crescita.

Llama punto cpp, di Georgi Gerganov: tendenza in crescita. È il pezzo di software che permette di far girare modelli linguistici su un computer normale, senza data center. Che continui a crescere mentre si discute di sovranità e di scatole in casa non è una coincidenza.

ARC-AGI, di Chollet: tendenza in crescita. È il test che misura non se il modello risolve il problema, ma quanto gli costa risolverlo.

Omarchy, di Basecamp: tendenza in crescita. Nasce dallo stesso ambiente di Hansson, ed è la sua migrazione a Linux trasformata in qualcosa che altri possono installare.

Poi Hyprland, lo strumento di Simon Willison per parlare con i modelli da riga di comando, Obsidian, claude-context e superpowers. Tutti stabili, tutti in salita lenta.

Quello che colpisce, guardando l'elenco, è che nessuno di questi è un modello. Sono attrezzi per lavorare con i modelli, o per misurarli, o per farne a meno. È esattamente la forma che prende un settore quando il problema smette di essere la potenza e diventa l'uso.

---

Resta l'immagine di Karpathy che da otto mesi non tocca la tastiera, e di Hansson che da diciotto non spedisce niente. Due modi opposti di stare dentro lo stesso momento, e nessuno dei due riguarda quanto siano bravi i modelli.

La domanda non è più se funzionerà. È chi possiede l'attrito, e chi ha interesse a lasciarlo dov'è.

È stato Signal Brief. Alla prossima.
