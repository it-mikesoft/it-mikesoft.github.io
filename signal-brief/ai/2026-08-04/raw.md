# La verifica diventa infrastruttura

> Da limite del pensiero a impianto concreto: prove ispezionabili, riserve aperte, guardiani non-agentici. E la vera frattura del momento non è ottimismo contro paura.

---

Martedì 4 agosto 2026, questo è Signal Brief.

Ieri avevamo lasciato una frase di Karpathy sospesa a mezz'aria: i computer automatizzano quello che sai specificare, i modelli linguistici quello che sai verificare. Sembrava un'osservazione elegante sulla natura del pensiero. Nel giro di pochi giorni è diventata qualcosa di molto più prosaico e molto più serio: qualcuno ha cominciato a costruirci sopra. Non metafore, non saggi. Codice, firme crittografiche, organizzazioni con un bilancio.

E il primo a mettere il mattone è stato un uomo che da vent'anni scrive protocolli.

---

Il 4 luglio Vitalik Buterin ha pubblicato un post che si chiama Lean Ethereum. Nome sobrio, contenuto radicale: propone di riscrivere i livelli fondamentali della rete attorno a prove matematiche verificabili, firme che resistano ai computer quantistici, un meccanismo di consenso semplificato fino all'osso. Diciassette giorni dopo, il 21 luglio, arriva il complemento: un linguaggio che permetta a un essere umano di leggere le dimostrazioni matematiche che il sistema produce. Perché se il protocollo diventa dimostrabile, dice in sostanza, allora qualcuno deve poter guardare la dimostrazione.

Tenete a mente questo gesto, perché si ripete altrove quasi identico. Jack Dorsey ha aperto le riserve Bitcoin di Block a un controllo pubblico: firme sulla blockchain, chiunque può verificare che i soldi ci siano davvero. Yoshua Bengio ha fondato LawZero, un'organizzazione senza scopo di lucro con trenta milioni di finanziamento, incubata a Mila, che costruisce un'intelligenza artificiale volutamente priva di iniziativa propria. Il suo unico compito è guardare quello che fanno gli agenti autonomi e dire se stanno per fare qualcosa di pericoloso. Un sistema che non agisce, progettato per sorvegliare sistemi che agiscono.

Tre uomini, tre mondi diversi, la stessa mossa. La verifica smette di essere un limite del nostro cervello e diventa un pezzo di impianto. Un'infrastruttura, come le tubature.

È già successo, questo passaggio. Nell'Ottocento la contabilità in partita doppia esisteva da secoli come tecnica, come cosa che il buon mercante sapeva fare. Poi arrivarono le società per azioni, migliaia di piccoli azionisti che non conoscevano l'amministratore delegato, e la contabilità dovette diventare qualcos'altro: revisori esterni, standard obbligatori, un mestiere separato il cui unico scopo era controllare i conti di qualcun altro. Non cambiò la matematica. Cambiò chi doveva fidarsi di chi. Bengio che costruisce un guardiano non-agentico sta facendo esattamente questo: separare il controllore dal controllato, perché la scala non permette più di tenerli nella stessa persona.

E qui la scena si allarga, perché la vera frattura di questi giorni non è quella che ci aspetteremmo.

Per anni abbiamo raccontato il dibattito sull'intelligenza artificiale come ottimisti contro pessimisti, acceleratori contro frenatori. Quella linea si è spostata. La divisione che conta adesso è tra chi concentra e chi disperde.

Da una parte Elon Musk, che ha fatto sparire xAI come società: assorbita dentro SpaceX come divisione, che ora governa X e Grok. L'argomento è tecnico e ha una sua logica di ferro: l'intelligenza artificiale che si muove nel mondo fisico ha bisogno di chip, connettività satellitare, modello e hardware sotto lo stesso tetto. Sam Altman, in parallelo, concentra: riporta compute, persone e roadmap sugli agenti che scrivono codice e mette in secondo piano Sora, la generazione video. Non espansione. Restringimento.

Dall'altra parte Mira Murati, che il 10 luglio pubblica un saggio dal titolo The Future Worth Building Is Human e sostiene una cosa quasi opposta: la conoscenza utile è tacita, locale, sparsa nelle mani di chi lavora. Se l'intelligenza artificiale deve beneficiarne, deve essere sparsa anche lei. Non un modello unico, ma molte intelligenze cresciute in posti diversi. Patrick Collison, alla YC Startup School di fine luglio, ribalta un timore che aveva lui stesso: pensava che questa tecnologia avrebbe concentrato il potere in pochi laboratori, adesso guardando i dati di pagamento di Stripe prevede molte migliaia di vincitori. E Liang Wenfeng chiude il fronte da Pechino con un argomento contabile prima che morale: nel closed-source non vede benefici, la barriera d'ingresso resta altissima comunque.

Concentrare o disperdere. È la stessa domanda che si posero le compagnie elettriche di fine Ottocento, quando ancora non si sapeva se ogni fabbrica avrebbe avuto la sua dinamo o se ci sarebbe stata una rete.

---

Restiamo su Vitalik Buterin, perché il suo luglio spiega bene cosa vuol dire mettere la verifica dentro le fondamenta invece che sopra.

Buterin ha creato Ethereum quando aveva diciannove anni, e per un decennio l'ha guidato attraverso una fase di complessità crescente: più livelli, più sistemi di prova, più meccanismi per spingere il numero di transazioni al secondo. Ogni pezzo aggiunto era un costo accettato in cambio di velocità.

Lean Ethereum inverte quella postura. Il post del 4 luglio propone di togliere invece che aggiungere. Meno superficie crittografica, primitive che si possono controllare una per una, e la resistenza ai computer quantistici messa nel percorso principale invece che rimandata a quando servirà. La formula implicita è semplicità uguale sicurezza. Non è una posizione tecnica soltanto: è una scommessa su cosa rende un sistema affidabile nel lungo periodo. Non la robustezza di ciò che aggiungi, ma la piccolezza di ciò che deve restare vero.

Nello stesso mese Buterin torna sul rapporto tra intelligenza artificiale e blockchain, e lo fa spostando la cornice. Raccontare il progresso come una corsa verso l'intelligenza artificiale generale, sostiene, è accelerazione indifferenziata: si va veloci senza scegliere la direzione. La sua proposta alternativa è più modesta e più concreta. Ethereum come luogo dove l'intelligenza artificiale distribuita si coordina: modelli che girano in locale, pagamenti per servizi automatici, verifica fatta dalla parte dell'utente, agenti che fanno transazioni e si costruiscono una reputazione osservabile. Sulla governance, un'osservazione che vale il prezzo del biglietto: l'intelligenza artificiale renderebbe finalmente praticabili i mercati previsionali non perché sostituisce il giudizio umano, ma perché lo moltiplica.

Poi, il 21 luglio, il tassello che chiude tutto: un linguaggio ad alto livello che compila verso i sistemi di dimostrazione formale, per rendere definizioni e teoremi leggibili da una persona.

Ed è qui che Buterin si tocca con Bengio senza mai nominarlo. Entrambi hanno capito la stessa cosa: una prova che nessuno può leggere non è una prova, è un atto di fede con più matematica dentro. La differenza tra fidarsi di un'autorità e verificare da soli non sta nell'esistenza del controllo. Sta nella possibilità di guardarci dentro.

Il che lascia una domanda scomoda. Quante persone al mondo sanno leggere una dimostrazione formale? Poche. Il linguaggio di Buterin allarga quel numero, ma non lo rende universale. Stiamo forse solo spostando la fiducia da un gruppo ristretto a un altro gruppo ristretto, un po' meno ristretto.

---

Yoshua Bengio è uno dei tre uomini a cui si attribuisce la nascita dell'apprendimento profondo moderno, e da qualche anno passa la maggior parte del suo tempo a preoccuparsi di quello che ha contribuito a creare.

Il 17 luglio interviene da remoto al WAIC Science Frontier Forum, e la frase centrale non è un avvertimento sul futuro: è una constatazione sul presente. Le misure di sicurezza attuali, dice, non riescono più a stare al passo con l'avanzamento delle capacità. Non che potrebbero non farcela. Non ce la fanno già.

L'argomento più affilato che sta usando in queste settimane riguarda l'irreversibilità. Nei domini della sicurezza informatica e della biologia, una volta che i pesi di un modello con capacità a doppio uso sono pubblici, il processo non si richiama indietro. Non esiste patch retroattiva, non esiste ritiro dal mercato. È un cambio di terreno interessante: sposta la discussione dall'allineamento — come faccio a insegnare al modello cosa voglio — alla distribuzione — chi ce l'ha in mano e da quel momento in poi cosa succede.

Da lì viene un secondo capovolgimento, quello sui tempi. Le contromisure vanno costruite prima che la capacità esista, non dopo che si è manifestata. Che sembra ovvio detto così, ma implica un mestiere completamente diverso: non testare i modelli che hai, prevedere quelli che avrai.

LawZero è la traduzione operativa di tutto questo. Trenta milioni, incubata a Mila, un sistema chiamato Scientist AI il cui compito è uno solo: prevedere se l'azione di un agente è pericolosa. Volutamente senza iniziativa propria, con il ragionamento esposto e ispezionabile. La scommessa dietro è che il controllore debba essere di natura diversa dalla cosa controllata — non un modello più bravo che sorveglia un modello meno bravo, ma un oggetto costruito per un altro scopo.

Bengio porta anche un'osservazione che raffredda parecchio la discussione. Cita l'uso quotidiano di strumenti di intelligenza artificiale da parte di gruppi come Boko Haram per la pianificazione operativa. Non ipotesi. Uso documentato. La sua formula è che questa tecnologia abbassa la barriera per fare danno e contemporaneamente alza il tetto di quanto danno si può fare.

Torniamo per un attimo sul filo di oggi. La verifica che diventa impianto, e la spaccatura tra chi concentra e chi disperde. Bengio sta in una posizione curiosa rispetto a entrambi: vuole un guardiano centrale, ma vuole che il suo ragionamento sia leggibile da chiunque. Concentrare il controllo, disperdere la possibilità di controllarlo.

---

Che è esattamente il punto su cui Sam Altman si è mosso in modo inatteso.

Il 26 luglio, al podcast Relentless, Altman dice una frase che in altri tempi avremmo trovato sensazionalistica e che pronuncia con una certa calma: siamo dentro la singolarità, adesso, questo è il primo momento. Poi mette le date: intelligenza a livello umano intorno al 2029, fusione uomo-macchina verso il 2045. Aggiunge un dettaglio quasi personale — per la prima volta in dieci anni si è chiesto cosa venga dopo.

Tre giorni più tardi, il 29 luglio, è a Washington. Fa un briefing a senatori di entrambi i partiti sul prossimo modello di OpenAI, e ai giornalisti dichiara che c'è bisogno di rallentare lo sviluppo dell'intelligenza artificiale. Una cosa discussa anche alla Casa Bianca.

Fermiamoci un secondo su quanto è strana questa combinazione. La stessa persona, nella stessa settimana, dice che la trasformazione più grande della storia è già cominciata e che bisognerebbe andare più piano. Fino al 2024 la posizione dell'industria era regolateci ma non frenateci: chiedete pure trasparenza, non toccate la velocità. Adesso Altman chiede esplicitamente la decelerazione, e chiede una legge che la imponga.

C'è un antefatto che rende la scena meno limpida. In luglio era già emerso che OpenAI aveva apportato modifiche ai propri modelli dopo colloqui con l'amministrazione. Non è chiaro quali, ed è precisamente questo il punto: lo Stato è tornato a essere un soggetto attivo, e non solo come regolatore. In India il ministero degli Interni ha ordinato a GitHub di rimuovere tre repository di Bitchat entro tre ore, durante le proteste studentesche di fine luglio. La Network School è stata espulsa dalla Malesia. Il potere politico non commenta più dal bordo campo, gioca.

Il che spiega perché la richiesta di Altman può leggersi in due modi opposti. Uno: chi è arrivato per primo ha capito il rischio e chiede il freno per tutti. Due: chi è arrivato per primo chiede il freno quando è comodo che gli altri rallentino. Geoffrey Hinton, in queste stesse settimane, offre la lente per non doverne scegliere una. La governance volontaria, sostiene, è strutturalmente impossibile: il dovere verso gli azionisti trasforma la sicurezza in un costo da minimizzare. Il rischio non è l'algoritmo, è l'incentivo.

E l'incentivo, torniamo al filo, è l'unica cosa che nessuno ha ancora trovato il modo di verificare.

---

Poi c'è la spaccatura che considero la più interessante di tutte, perché non è sui fatti. È su cosa conti come prova.

Jack Clark è cofondatore di Anthropic e si occupa di politiche pubbliche. Nel numero 455 della sua newsletter Import AI mette dei numeri sul tavolo: sessanta per cento di probabilità che entro la fine del 2028 i sistemi di intelligenza artificiale addestrino da soli i propri successori. Trenta per cento entro il 2027.

L'argomento con cui lo sostiene è quello che lo rende convincente, perché è deflattivo. La ricerca sull'intelligenza artificiale, dice Clark, è in gran parte ingegneria noiosa: far girare esperimenti su scala maggiore, cercare errori, regolare parametri. Esattamente il lavoro in cui i modelli sono già bravi. Non serve genio creativo per chiudere il cerchio. Le prove che cita sono misurazioni: un test di programmazione passato da circa il due per cento nel 2023 a novantatré e nove, ormai saturo. La lunghezza dei compiti che un modello riesce a portare a termine da sé, cresciuta da trenta secondi a una dozzina di ore.

Yann LeCun risponde da un'altra stanza, e la risposta è metodologica. Dopo l'uscita da Meta guida AMI Labs a Parigi, con un finanziamento iniziale di poco più di un miliardo di dollari — la scommessa più capitalizzata mai fatta contro il paradigma linguistico dominante. Il 4 luglio liquida perfino la parola: la G di AGI, sostiene, è una sciocchezza, perché l'intelligenza umana è già specializzata. Sui benchmark è ancora più diretto: i modelli linguistici eccellono sui compiti verbalizzati e discretizzati, cioè esattamente quello che misurano gli esami. Ecco perché i test sovrastimano.

Il suo esempio è memorabile per quanto è banale. Chiedete a un modello in che direzione cade una penna lasciata andare. Otterrete un completamento statisticamente plausibile e quasi certamente sbagliato. Un bambino di quattro anni lo sa senza pensarci.

François Chollet mette il numero sotto la frase. Sul test ARC-AGI-2, che misura ragionamento astratto, i modelli di frontiera stanno tra lo zero e il due per cento. Gli umani sopra il novantacinque. E ARC-AGI-3, uscito a marzo, ha cambiato natura: centinaia di ambienti interattivi, stile videogioco, dove non si misura più il ragionamento ma la capacità di esplorare e pianificare. Lì i migliori modelli stanno sotto l'uno per cento.

Clark e LeCun non discutono di cosa sia successo. Discutono di quale termometro dica la verità. È la stessa disputa che divise la medicina per un secolo — se il segno di guarigione fosse il paziente che si alza dal letto o il numero che esce dall'analisi. Non si risolse con un esperimento. Si risolse cambiando cosa si era disposti a chiamare malattia.

---

Progetti da osservare.

Qwen3.8-Max, in crescita continua. Kimi K3, in crescita continua. Bitchat, in crescita continua. Petri, in crescita continua.

Poi ci sono quattro cose nuove che parlano direttamente al filo di oggi.

Astra, il sistema matematico di OpenAI, ha pubblicato il primo agosto dieci risultati inediti in matematica e teoria della complessità, tra cui la confutazione di una congettura aperta da decenni. Manoscritto di duecentoquarantanove pagine. Ma il dettaglio che conta è un altro: insieme al testo ci sono i certificati in Lean 4, cioè dimostrazioni che una macchina può controllare riga per riga, pubblicate su GitHub. Costo in token: circa duemila dollari. Il risultato è affascinante, la verificabilità è il vero prodotto.

Microgpt è l'opposto per dimensioni e identico per spirito: un singolo file, duecento righe di Python, zero dipendenze, che allena un modello linguistico da zero e poi lo fa girare. Dataset, tokenizzatore, architettura, tutto lì dentro. Non serve a costruire niente di utile. Serve a capire — ed è la versione operativa della frase di Karpathy: puoi delegare il pensiero, non la comprensione.

Inkling è il primo modello di Mira Murati, e conferma quello che ha scritto. Multimodale, novecentosettantacinque miliardi di parametri di cui quarantuno attivi per volta, contesto da un milione di token, pesi aperti — il più grande rilascio americano di questo tipo. Costruito per essere adattato da altri. La tesi sulla conoscenza sparsa, tradotta in un file scaricabile.

MiniMax H3, infine, è un modello video con pesi aperti che genera immagine e audio stereo nello stesso passaggio. Con qualche compressione scende da centoventitré gigabyte a quarantadue, e gira su una scheda grafica da casa. Ecco la dispersione che diventa concreta.

---

Resta l'immagine di Bengio che costruisce una macchina volutamente incapace di volere, il cui unico mestiere è guardare le altre. Un guardiano progettato per non avere desideri, perché il desiderio è la parte che non sappiamo controllare. Non so se funzionerà. So che è la prima volta che qualcuno prova a mettere la fiducia in un oggetto invece che in una promessa.

È stato Signal Brief. Alla prossima.
