# Chi controlla quello che la macchina scrive

> Gli agenti lavorano da soli per ore e producono migliaia di righe. Il problema non è più farle nascere, ma decidere di chi ci si fida per verificarle.

---

Un paragrafo del Signore degli Anelli, due ore di lavoro, cinquemilacinquecento righe di codice tridimensionale. Nessuno seduto davanti allo schermo a controllare. Il costo, circa dieci dollari di elaborazione.

È il 19 agosto 2026, e questo è Signal Brief.

L'esperimento è di Andrej Karpathy, e la sua conclusione non riguarda la scena in tre dimensioni che ne è uscita. Riguarda i test con cui misuriamo queste macchine: non misurano più niente di interessante.

Da lì comincia una giornata in cui la domanda vera non è più quanto si riesca a produrre, ma chi abbia il diritto di controllarlo.

---

Ieri il filo era la scarsità che si sposta: creare costa poco, verificare costa molto. Oggi quella diagnosi smette di essere una diagnosi e diventa un problema di cantiere.

La differenza la fa proprio l'esperimento di Karpathy. Non perché il risultato sia spettacolare, ma per la durata. Due ore di lavoro continuo, senza nessuno che intervenisse. L'unità di misura non è più la risposta del modello a una domanda: è l'agente che va avanti da solo per un tempo lungo. E se il pezzo di lavoro dura due ore invece di due secondi, tutto quello che serviva a giudicarlo va ripensato.

Nello stesso periodo arriva un secondo segnale, di natura completamente diversa. David Heinemeier Hansson, il creatore di Ruby on Rails, era stato per mesi il critico più rumoroso della codifica assistita. Adesso dichiara di non scrivere quasi più codice a mano, e indica come vera svolta gli agenti che lavorano dentro il terminale, non i suggerimenti automatici mentre si digita. Un cambio di posizione conta più dell'argomento che lo accompagna, soprattutto quando arriva da chi aveva ogni ragione professionale per non cambiarlo.

Qui la storia gira. Se produrre diventa facile e continuo, il collo di bottiglia si sposta sul controllo. Paul Graham lo aveva già detto nella forma più asciutta, notando che le macchine sono migliorate più in matematica che nella scrittura perché in matematica esiste una risposta giusta. Balaji Srinivasan ci arriva dai conti: il costo di creare crolla, quello di validare sale. Fin qui era un'osservazione. Con agenti che macinano migliaia di righe in autonomia, diventa il vincolo pratico di chiunque debba consegnare qualcosa.

È una dinamica già vista, e non nel software. Quando le fabbriche passarono dal vapore all'elettricità, il problema smise di essere quanta forza si riuscisse a mettere sulla linea di produzione: diventò come organizzare il lavoro attorno a una potenza ormai abbondante. Il vincolo si sposta sempre di un passo, e quasi mai dove lo si aspettava.

E quando il vincolo è il controllo, la domanda successiva è politica, non tecnica: chi controlla.

Sam Altman ha detto a fine luglio di essere pronto a rallentare i rilasci, e ne ha parlato alla Casa Bianca e in Senato dopo un incidente di sicurezza informatica dei sistemi di OpenAI. Ha anche mostrato ai parlamentari un modello nuovo senza fissare una data di uscita, dicendo che è troppo capace per essere lanciato subito. Non è il freno chiesto dall'esterno: è il freno proposto da chi costruisce.

Demis Hassabis va oltre e chiede un organismo internazionale che esamini i modelli di frontiera. Dario Amodei sposta il baricentro sui laboratori, con test obbligatori fatti da terze parti prima del rilascio.

E poi c'è Liang Wenfeng, che rende la faccenda geografica prima ancora che filosofica: se i modelli migliori restano aperti e scaricabili da chiunque, non esiste sorveglianza che possa fermarne la circolazione.

Tre risposte diverse alla stessa domanda. È la novità della giornata.

---

Andrej Karpathy ha insegnato a mezzo mondo come funzionano le reti neurali, prima da Tesla poi con i suoi corsi. Adesso è tornato alla ricerca di frontiera in Anthropic.

L'esperimento di inizio agosto è semplice da raccontare. Prende un paragrafo di Tolkien, lo consegna a Claude Opus 5 e chiede una scena tridimensionale navigabile nel browser. La macchina lavora due ore da sola e produce cinquemilacinquecento righe. Karpathy pubblica il risultato e ne trae una conclusione che vale più della scena: le prove standard, quelle a punteggio, hanno fatto il loro tempo. Servono verifiche a occhio, su lavori interi, dall'inizio alla fine.

Vale la pena fermarsi su cosa stia dicendo davvero. Un test a punteggio funziona quando il lavoro è breve e la risposta è secca. Su un compito che dura due ore e produce un programma intero, il punteggio non racconta niente di utile: bisogna guardare la cosa, usarla, vedere dove si rompe. Karpathy descrive il momento come un cambio di fase nel mestiere di scrivere software, dove il codice si programma sempre più in italiano, o in inglese, invece che in un linguaggio di macchina.

Il collegamento con il filo della giornata è diretto, e ha una piccola ironia dentro. Chi ha passato anni a costruire le prove con cui misuriamo queste macchine sta dicendo che le prove non tengono più il passo. Il problema della verifica non arriva dai critici: arriva da dentro.

Mi sembra che valga la pena notare una cosa. Il momento in cui uno strumento smette di essere misurabile con i vecchi metri non è un momento di debolezza, è il momento in cui è diventato abbastanza grande da meritarne di nuovi. È successo con l'automobile, che per anni fu giudicata su quanti cavalli sostituisse. Il metro sbagliato non dice niente sull'oggetto: dice molto su chi lo tiene in mano.

---

David Heinemeier Hansson ha inventato Ruby on Rails, il sistema con cui è stata costruita buona parte del web degli ultimi vent'anni, e ha una lunga storia di posizioni scomode difese con ostinazione.

La scena delle ultime settimane è una lunga conversazione pubblica in cui racconta il proprio cambio di metodo. Dice che i modelli sono finalmente abbastanza buoni, che quasi non scrive più codice a mano, e che la svolta non sono i suggerimenti automatici nell'editor ma gli agenti che lavorano nel terminale, con memoria e strumenti a disposizione. In parallelo la sua azienda, 37signals, ha reso Basecamp accessibile agli agenti attraverso una riga di comando, e ha raccontato quanto l'intelligenza artificiale abbia cambiato il modo in cui la nuova versione è stata costruita.

Resta però un dettaglio che impedisce di leggerlo come una conversione totale. Heinemeier Hansson continua a tenere la barra alta sulla qualità del codice e sulla revisione umana, e continua a diffidare del materiale sciatto prodotto in serie. È entusiasta degli agenti, non del prodotto medio degli agenti. Nel frattempo porta avanti Omarchy, il suo lavoro su Linux, con la stessa insistenza di sempre sul controllo locale e sugli strumenti leggeri.

La combinazione è precisamente il tema di oggi. Delega larga sulla produzione, sorveglianza stretta sull'esito. Non ha smesso di fare il critico: ha spostato il momento in cui fa il critico, dalla scrittura alla revisione.

Un cambio di posizione da parte di chi aveva costruito la propria reputazione sulla posizione opposta è un dato più solido di qualsiasi grafico di prestazioni. La misura di uno spostamento tecnologico non è chi lo annuncia. È quando cominciano a muoversi quelli che avevano interesse a restare fermi.

---

Demis Hassabis ha guidato Google DeepMind fin dall'inizio, e ha appena cambiato ruolo: da amministratore delegato a presidente e capo scientifico di Alphabet, lasciando la gestione quotidiana per occuparsi di strategia, sicurezza e ricerca. Ha spiegato la scelta dicendo che l'intelligenza artificiale generale è vicina.

Ma il gesto più significativo è di metà luglio. Hassabis pubblica un appello per un organismo mondiale di controllo, guidato dagli Stati Uniti, che esamini i modelli di frontiera prima che arrivino al pubblico. Finanziato dall'industria, con esperti tecnici dentro. Non un codice di condotta volontario: una struttura formale, con un potere di verifica.

È una richiesta che spinge fuori dal recinto abituale del dibattito. Fino a ieri la discussione oscillava tra due poli: si controllano da sole le aziende, oppure interviene lo stato. Hassabis introduce un terzo soggetto, che non è né l'azienda né il singolo governo.

Sull'altro versante, Dario Amodei di Anthropic ha scritto a metà agosto che il malumore verso l'intelligenza artificiale è in fondo una crisi di fiducia, e che la gente teme che aziende e governi stiano preparando l'ennesimo modo di fregarla. La sua proposta è diversa: test obbligatori condotti da terzi prima del rilascio, potere pubblico di bloccare i modelli pericolosi, segnalazione rapida degli incidenti. Regole dure sui laboratori di frontiera, ma con spazio lasciato ai modelli aperti.

E qui casca tutto. Perché Liang Wenfeng, alla guida di DeepSeek, ha detto agli investitori che i modelli migliori resteranno open source e che l'obiettivo di lungo periodo viene prima del profitto. Se i pesi di un modello — la sua parte apprendibile, quella che si può copiare e far girare altrove — sono scaricabili da chiunque, l'organismo di Hassabis può esaminare quanto vuole. Non ha una leva su cui agire.

È la vecchia storia dei brevetti sulle macchine tessili inglesi, che furono difesi con leggi severissime e attraversarono comunque la Manica nella testa degli artigiani che emigravano. Un controllo funziona finché esiste un punto stretto da sorvegliare. Quando il punto stretto sparisce, la regola resta scritta e basta.

---

Ricapitoliamo dove siamo, per chi ha perso un pezzo tra un semaforo e l'altro: produrre è diventato facile, verificare no, e la giornata si gioca tutta su chi debba fare quella verifica.

François Chollet è l'autore di Keras, uno degli strumenti con cui si costruiscono reti neurali, ed è famoso per aver passato anni a spiegare perché i modelli linguistici da soli non bastano.

All'inizio di agosto ha fatto un'osservazione che vale come ammissione e come tesi insieme. Dice che i sistemi di frontiera sono già oggi qualcosa di ibrido: non un modello unico che risponde, ma un'impalcatura di programmi tradizionali che orchestra decine di chiamate al modello mentre lavora. Software e modello che si passano il testimone a turno.

Poi la parte più interessante, legata al suo test ARC, quello pensato per misurare la capacità di ragionare su problemi mai visti. Chollet racconta che i sistemi che stanno andando meglio fanno una cosa precisa: usano il modello per scrivere programmi eseguibili che descrivono come funziona il pezzo di mondo che hanno davanti. Non una risposta in linguaggio naturale, ma codice che si può lanciare e verificare.

Ecco il punto dove tutto si tiene. Un testo generato lo si può solo leggere e sperare. Un programma lo si esegue, e o funziona o si rompe. Chollet e Vitalik Buterin, che raramente si trovano nella stessa stanza, stanno proponendo la stessa medicina da direzioni opposte. Buterin, aggiornando ad agosto le priorità di Ethereum, ha messo tra i pilastri la verifica formale accelerata dall'intelligenza artificiale, cioè dimostrare matematicamente che un programma fa quello che dice. E a fine luglio ha proposto un linguaggio che renda quelle dimostrazioni leggibili da un essere umano.

Non modelli più grandi, quindi, ma modelli che producono cose controllabili. È la risposta ingegneristica alla stessa domanda a cui Hassabis risponde con un organismo internazionale.

Chollet, del resto, ha ammesso apertamente di aver cambiato idea sulla scala: dopo l'ultima generazione di modelli che ragionano, dice di vedere emergere un'intelligenza fluida vera. Sono due i cambi di posizione registrati oggi, e nessuno dei due arriva dai facili entusiasti.

---

Jensen Huang guida Nvidia, l'azienda che fabbrica i processori su cui gira quasi tutta questa storia.

Il 10 agosto, in un'intervista alla CNBC, ha annunciato sei accordi con grandi istituzioni finanziarie per mobilitare più di cinquecento miliardi di dollari destinati all'infrastruttura. Il punto che ha voluto sottolineare è che Nvidia non metterà quei soldi di tasca propria: farà da ponte tra i clienti e il capitale a lungo termine. Da fornitore di componenti a organizzatore del finanziamento.

Sul resto la linea è coerente: gli agenti useranno gli strumenti software esistenti invece di sostituirli, e il centro di gravità si sposta verso quelle che chiama fabbriche di intelligenza, macchine che trasformano elettricità e calcolo in risposte.

Vale la pena mettere accanto a questa scena un'osservazione di Benedict Evans, che sull'economia di questo settore è tra i più lucidi. Evans sostiene da mesi che i vantaggi competitivi sui modelli sono fragili, che l'offerta sta per raggiungere la domanda e che allora i prezzi si comprimeranno. E che al di fuori del codice, il prodotto per cui la gente paga davvero non è ancora chiaro.

Le due cose insieme danno un quadro scomodo. Si sta finanziando con denaro preso a prestito una corsa i cui margini stanno assottigliandosi, per costruire macchine che producono materiale che nessuno ha ancora deciso come validare.

Non è una previsione di crollo. È un problema di tempi. Le ferrovie inglesi dell'Ottocento furono costruite in un'euforia finanziaria che rovinò molti investitori, e i binari rimasero lì a servire il paese per un secolo. La domanda su chi verifichi l'esito potrebbe però restare aperta più a lungo di quanto regga il denaro che la finanzia. E in quell'intervallo si decidono parecchie cose.

---

Progetti da osservare, e quest'oggi parlano quasi tutti della stessa cosa.

Leanstral è un agente open source di Mistral che scrive codice e poi ne dimostra formalmente la correttezza, usando Lean 4, uno strumento con cui si costruiscono dimostrazioni matematiche verificabili da una macchina. È la traduzione operativa di quello che dicono Graham e Chollet: non serve un modello più grande, serve un risultato che si possa controllare.

MirrorCode va dall'altra parte, e misura. È una prova costruita da Epoch AI e METR che chiede al modello di riscrivere da zero venticinque programmi interi, dagli strumenti di sistema alla bioinformatica, e li giudica su collaudi tenuti nascosti. Opus 4.7 ne ha completati il cinquantasei per cento, e su un compito da sedicimila righe ci ha messo quattordici ore e duecentocinquantuno dollari. Il metro che Karpathy chiedeva comincia a esistere.

Petri è uno strumento aperto che interroga i modelli per scoprire se ingannano, se assecondano l'utente per compiacerlo, se collaborano a richieste dannose. Anthropic lo ha sviluppato e poi ne ha ceduto la manutenzione a Meridian Labs, per una ragione tutta politica: un esame vale di più se non lo conduce chi viene esaminato. È esattamente il problema di Hassabis, affrontato con una cessione di proprietà invece che con un trattato.

Buzz è il progetto di Block, l'azienda di Jack Dorsey. Fonde la chat di squadra, l'archivio del codice e gli agenti in un unico posto, e dà a ciascun agente un'identità firmata. È aperto, e accetta indifferentemente Claude Code, Codex o goose. Il collega artificiale entra nell'organigramma con un cartellino.

E Mojo, il linguaggio di Chris Lattner: versione uno l'undici agosto, completamente aperto il diciotto, dopo che Qualcomm ha acquistato Modular. Sintassi facile come Python, velocità di un linguaggio di sistema. Sotto tutta questa storia, qualcuno continua a occuparsi delle fondamenta.

---

Due ore di lavoro non sorvegliato, cinquemilacinquecento righe, dieci dollari. Il paragrafo di Tolkien resta il punto di partenza più eloquente della giornata, ma non per quello che la macchina ha costruito. Per la domanda che ha lasciato in piedi: chi guarda il risultato, e con quale autorità. Nessuno oggi ha dato la stessa risposta.

È stato Signal Brief. Alla prossima.
