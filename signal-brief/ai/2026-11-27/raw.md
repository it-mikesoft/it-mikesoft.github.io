# Un tetto condiviso alla potenza

> I laboratori che costruiscono i modelli propongono di limitarsi a vicenda, mentre gli agenti entrano negli uffici e nelle case. Altman, Bengio, Wang, Carmack, Dorsey e Andreessen.

---

Ci sono giornate in cui il settore tecnologico dice due cose opposte con la stessa voce, e il 27 novembre 2026 è una di queste. Benvenuti a Signal Brief. Da una parte, il capo scienziato di OpenAI propone agli altri laboratori di mettersi d'accordo su un limite alla potenza dei modelli. Dall'altra, negli stessi giorni, un programmatore famoso lascia che una macchina scriva quarantacinquemila righe di codice e poi le porti in produzione da sola. Cominciamo dal limite proposto, perché è la cosa davvero nuova di questa settimana.

---

Il documento è di Jakub Pachocki, capo scienziato di OpenAI, e propone una cosa semplice da dire e difficile da fare: che l'industria si dia limiti comuni alla potenza dei modelli, finché non saremo più capaci di controllarli e di guardarci dentro. Sam Altman lo ha definito la pubblicazione più importante uscita di recente dall'azienda, e ha aggiunto che limiti condivisi aiuterebbero la sicurezza invece di ostacolarla. Lo racconta Fortune il 24 novembre. Lo stesso giorno, alla CBS, Yoshua Bengio dice che la società sta correndo verso pericoli enormi e chiede ai laboratori di smettere di versare calcolo nei modelli successivi.

Qui sta lo spostamento rispetto a ieri. Ieri il filo era la verifica: ciò che una macchina riesce a controllare da sola accelera, tutto il resto resta fermo. Oggi la richiesta di fermarsi non arriva più dall'esterno, dagli osservatori o dai regolatori. Arriva da dentro, dal tavolo di chi costruisce. È una differenza di natura, non di volume. Era già successo nel 1975 ad Asilomar, quando i biologi del DNA ricombinante si imposero da soli una moratoria prima che qualcuno glielo chiedesse: la storia dice che funzionò, ma anche che funzionò perché i laboratori coinvolti erano pochi e si conoscevano tutti.

La metà opposta della giornata è altrettanto concreta. Il 26 novembre Andrej Karpathy mostra una mappa interattiva degli Stati Uniti scritta da Claude Opus 5.5: sette ore di lavoro, quarantacinquemila righe, trentuno fonti pubbliche. Poi fa fare alla stessa macchina la messa in sicurezza e il rilascio. Non è più un assistente che suggerisce, è un operaio che chiude il ciclo. Il giorno prima John Carmack ammette di stare ricalibrando: progetti che giudicava insostenibili per quanta ingegneria avrebbero richiesto, adesso gli sembrano tentabili. E le organizzazioni si muovono di conseguenza: Jack Dorsey apre Builderlab, uno spazio dove dipendenti e agenti lavorano negli stessi canali, mentre Aravind Srinivas racconta di aver passato la giornata a configurare agenti che gli gestiscono la vita privata.

Dentro questa doppia spinta si infila il timore più specifico della settimana, e lo esprime Geoffrey Hinton. Nelle sue osservazioni di fine novembre dice che i modelli potrebbero inventare combinazioni di frammenti di parole, o modi di comunicare, che i ricercatori non riescono a interpretare, e che reti di agenti potrebbero scambiarsi conoscenza migliorando più in fretta di noi. Hinton richiama le lingue franche nate sui porti, quei miscugli che permettevano a marinai di tre continenti di trattare un carico senza che nessuno a terra capisse cosa si stavano dicendo. L'eco popolare di questa paura è già arrivata: un pezzo molto letto su Hacker News la riassume nell'immagine della chat di gruppo in cui la tua intelligenza artificiale parla di te alle spalle.

E il motivo per cui le due metà non si parlano è il punto che Alexandr Wang ha messo per scritto il 22 novembre: se l'intelligenza artificiale comincia ad automatizzare la ricerca sull'intelligenza artificiale, il successo diventa difficile da governare proprio perché è successo. Non è più una questione di quanto è capace la macchina. È una questione di chi tiene il volante quando l'auto impara a progettare se stessa.

---

Alexandr Wang guida la ricerca sull'intelligenza artificiale di Meta, dopo aver costruito l'azienda che etichettava i dati per mezzo settore. Non è una voce da convegni sul rischio: è un operativo.

Per questo il suo post del 22 novembre pesa. Sostiene che i modelli potrebbero presto automatizzare la ricerca sull'intelligenza artificiale stessa, e che a quel punto l'idea di sistemi che si migliorano da soli diventa plausibile. L'argomento è tecnico e asciutto: ciò che manca non è intelligenza grezza, mancano competenza specialistica, infrastruttura e capacità di fare esperimenti. Tre collo di bottiglia che si possono comprare. L'innesco è stata la notizia, legata ad Anthropic, di una dimostrazione formale attorno all'ipotesi di Riemann ottenuta con l'aiuto di Claude: un risultato ancora non verificato in modo indipendente, e lo diciamo chiaramente.

Insieme all'allarme, Wang mette sul tavolo le credenziali di prudenza di Meta: il rilascio di Muse rimandato, più investimenti sulla sicurezza, l'adesione agli accordi di settore sulla superintelligenza. E una formula che vale più di molte dichiarazioni: niente consegne della società all'intelligenza artificiale. Eppure, nelle stesse settimane, Muse non resta fermo: arriva in Australia, aggiunge la prova virtuale dei vestiti, l'accesso vocale da dispositivi indossabili, un'estensione per il browser, gli indirizzi di posta, le foto di prodotto generate.

Questa è la forma esatta della contraddizione di cui parlavamo. Non è ipocrisia, è struttura. Chi è dentro la corsa vede meglio di tutti dove sta andando, e proprio per questo non può uscirne da solo: se si ferma e gli altri no, ha perso la posizione da cui vedeva. La richiesta di limiti condivisi che arriva da OpenAI nasce dallo stesso punto, e Bengio chiede qualcosa di più radicale, cioè smettere di versare calcolo, perché non crede che l'accordo tra pari arrivi in tempo.

Mi sembra che il passaggio importante sia un altro, e sia nascosto nella lista di Wang. Finché il limite erano le idee, il vantaggio stava nei cervelli. Se il limite diventano infrastruttura ed esperimenti, il vantaggio si sposta su chi ha le fabbriche di calcolo. È una cosa che il mondo industriale ha già visto: quando la chimica tedesca di fine Ottocento smise di dipendere dal chimico geniale e cominciò a dipendere dagli impianti, cambiò chi comandava nel settore. Non i migliori ricercatori. I più grossi.

---

John Carmack è il programmatore che ha scritto i motori grafici di Doom e Quake, uno di quelli che da trent'anni si guadagna il rispetto dei colleghi contando i cicli di calcolo. Nel dibattito sugli agenti che programmano è stato finora la voce scettica, e lo è stato per ragioni tecniche: generare tutto da zero, ogni volta, significa software più lento, meno sicuro e che spreca risorse. La sua proposta era di costruire su mattoni solidi e riutilizzabili, e di addestrare gli agenti a migliorare quei mattoni, invece di premiarli solo per il risultato finale.

Il 25 novembre quella posizione si muove. In un post dice che la programmazione con agenti potrebbe rendere praticabili progetti che prima giudicava insostenibili per la quantità di ingegneria richiesta, e usa una parola precisa: sta ricalibrando. Non ha cambiato idea sulla qualità del codice generato. Ha cambiato idea su quali prodotti conviene tentare.

È un passaggio da scettico tecnico a convertito economico, e per chi deve decidere dove mettere dei soldi è più informativo di qualunque dimostrazione. Carmack non sta dicendo che la macchina scrive meglio di un umano. Sta dicendo che il costo di provare è sceso sotto una soglia, e che sotto quella soglia tornano in vita progetti già archiviati. Somiglia a quello che accadde quando il costo della stampa crollò: non migliorò la letteratura, ma all'improvviso si poterono pubblicare libri che nessun editore prima avrebbe rischiato. Alcuni erano pessimi. Qualcuno ha cambiato il mondo.

Il collegamento con la giornata è diretto. Il freno proposto dai laboratori riguarda la potenza dei modelli futuri; la ricalibrazione di Carmack riguarda quelli che abbiamo già. Anche se domani tutti si fermassero davvero, la capacità esistente basta a riscrivere il calcolo di cosa è fattibile in un'azienda di software. I due orologi girano a velocità diverse, e quello dei prodotti è più veloce di quello delle regole.

Resta una domanda che il suo stesso argomento solleva. Se tentare costa poco, si tenta di più: ma la manutenzione di quello che funziona continua a costare quanto prima. La parte noiosa del mestiere non si è automatizzata insieme a quella creativa, e chi deciderà un progetto guardando solo al costo del primo prototipo potrebbe accorgersene tra due anni.

---

Jack Dorsey ha fondato Twitter e oggi guida Block, l'azienda dei pagamenti dietro Square e Cash App. Negli ultimi mesi sta facendo una cosa che non è una funzione in più in un'applicazione: sta riprogettando l'azienda attorno agli agenti.

Il pezzo visibile si chiama Builderlab, raccontato dall'Observer. È uno strato commerciale costruito sopra Buzz, uno spazio di lavoro aperto che Block ha sviluppato per sé e poi ha deciso di vendere agli altri. Dentro Buzz, persone e agenti hanno un'identità propria e permessi propri, e stanno negli stessi canali: l'agente non è un servizio che chiami, è un collega con un badge. Builderlab aggiunge quello che serve a un'azienda vera, cioè collegare gli agenti agli strumenti, farli girare nel cloud e decidere chi può fare cosa. Su Square è già attivo Squaremates, un agente per i commercianti, e Dorsey immagina agenti che ordinano le scorte o comprano gli ingredienti.

La parte meno visibile è quella interessante. In un podcast di Harvard Business Review spiega di stare ricostruendo Block attorno a singoli che rispondono in proprio dei risultati, con figure che fanno da allenatori più che da capi, perché con intelligenza condivisa servono squadre molto più piccole e molto meno gerarchia. Sui suoi canali, intanto, rilancia un post di Gladstein secondo cui non va dato credito a chi si oppone ai modelli a pesi aperti: la tesi è di Gladstein, non sua, ma la scelta di amplificarla dice da che parte guarda.

Questo è il secondo emergente della giornata, e cambia il discorso sugli agenti. Finora li abbiamo guardati come strumenti in una catena di produzione. Dorsey li mette nella struttura sociale dell'azienda, con nome e permessi, e di conseguenza riscrive l'organigramma. Quando il telefono entrò negli uffici non velocizzò soltanto le comunicazioni: cancellò strati di persone il cui mestiere era portare messaggi da una stanza all'altra. L'organigramma cambiò dopo, non prima, e senza che nessuno l'avesse deciso in una riunione.

Chi ascolta e dirige qualcosa farebbe bene a tenere insieme le due metà di questa storia. Il pezzo tecnologico è pubblico e si può copiare. Il pezzo organizzativo, cioè come si ridisegnano responsabilità e carriere quando metà dei colleghi non va in ferie, nessuno lo vende come prodotto.

---

Mettiamo in fila le due metà di questa giornata, per chi ci ha raggiunti adesso. Da un lato i laboratori che propongono di limitarsi a vicenda sulla potenza dei modelli. Dall'altro gli agenti che entrano negli uffici, nei rilasci in produzione e ora anche nelle case. La seconda cosa è già qui; la prima è una proposta.

Aravind Srinivas guida Perplexity, il motore di risposta che ha provato a contendere a Google l'abitudine di cercare. La sua scena di questa settimana è domestica: racconta di aver passato la giornata a configurare i Teammates, gli agenti persistenti del suo prodotto, per la propria vita privata, dopo averli usati al lavoro. Lavorano in continuo e gli passano solo le cose che richiedono una decisione. Secondo l'azienda, l'adozione tra gli abbonati esterni che pagano duecento dollari al mese raddoppia ogni dieci giorni: è un dato dichiarato da chi lo vende, e va preso per quello che è.

Intorno, il resto dello stack: Computer, che produce cose finite e non risposte, come il libro di fisica in tre dimensioni con cui si può interagire di cui si è parlato in questi giorni, e Orchestrator, che espone i modelli principali dietro una sola interfaccia, scegliendo di non scommettere su un modello solo.

Il collegamento col filo di oggi è una tensione vera, non una sfumatura. Hinton teme agenti che si parlano in modi che non sappiamo leggere; Srinivas vende agenti che lavorano da soli anche quando tu dormi, e il loro pregio commerciale è esattamente che non devi guardarli. Più sono utili, meno li osservi. La segreteria telefonica ha insegnato una versione innocua di questa delega: decidere chi vale la pena richiamare. Qui la delega riguarda cosa vale la pena sapere.

Il dettaglio che mi sembra più rivelatore è il confine attraversato: non l'ufficio, la casa. Gli strumenti di lavoro entrati nella vita privata hanno sempre cambiato la vita privata più di quanto abbiano cambiato il lavoro. È accaduto col portatile aziendale e con la posta sul telefono, e nessuno dei due passaggi è stato discusso prima di diventare normale.

---

Marc Andreessen è l'investitore che ha finanziato buona parte della rete che usiamo, e da anni il più rumoroso difensore dell'idea che la tecnologia vada lasciata correre. Questa settimana, però, lo troviamo in un posto inatteso: co-guida una commissione della Federal Reserve su intelligenza artificiale, produttività e lavoro.

Alla conferenza della Fed di San Francisco, il 16 e 17 novembre, ha sostenuto una tesi che delude entrambe le tifoserie. Ottimisti e catastrofisti resteranno insoddisfatti, perché gli effetti economici reali arriveranno più lenti e più piccoli dei progressi tecnici: quello che decide se una tecnologia viene usata sono le regole, le licenze, le decisioni di adozione e l'inerzia delle istituzioni. Secondo il Washington Post porterà ai banchieri centrali l'argomento che la regolazione soffoca la produttività in sanità, istruzione ed edilizia abitativa, i tre settori dove il suo fondo ha investito molto, e conviene dirlo mentre si riporta la tesi.

C'è un precedente che spiega il meccanismo meglio di qualunque modello: in Inghilterra, per trent'anni, una legge impose che davanti a ogni veicolo a motore camminasse un uomo con una bandiera rossa. L'automobile esisteva già. Non andava da nessuna parte.

Da questo lato del campo, Andreessen è l'esatto contrario di Carmack. Carmack dice che la capacità è già cambiata abbastanza da riaprire progetti archiviati; Andreessen dice che la capacità non è la variabile che conta. Entrambi, in modi opposti, raffreddano il discorso sui modelli. E nella stessa direzione va Benedict Evans, che continua a sostenere che i modelli somigliano sempre più a materie prime indifferenziate e che il valore risale verso i prodotti e la distribuzione: non è una novità rispetto a ieri, ma è la stessa idea vista dal mercato invece che dalle istituzioni.

Il bello, o il brutto, è che le due posizioni possono avere ragione insieme. Gli agenti potrebbero riscrivere il mestiere di chi fa software, che è un settore senza licenze e senza ordini professionali, e lasciare intatti per un decennio i mestieri protetti da un albo. Non sarebbe la prima volta che una tecnologia trasforma radicalmente il quartiere in cui è nata e si fa attendere per vent'anni a due strade di distanza.

---

Progetti da osservare.

PostTrainBench+ è una prova a cronometro per agenti: misura quanto sono capaci di fare da soli l'ultima fase di addestramento di altri modelli, quella che li rende utilizzabili. Jack Clark la segue sulla sua newsletter, e il motivo è evidente: è il termometro più diretto dell'automazione della ricerca di cui parla Wang. Se quel numero sale, la discussione sul freno diventa urgente.

Swarms, Flocks, Gangs è una guida di Hugging Face per costruire, addestrare e valutare gruppi di agenti che collaborano. Ha un valore che va oltre il manuale: offre modi concreti di misurare come si comportano quando sono in branco, che è precisamente la zona buia che preoccupa Hinton.

Buzz è lo spazio di lavoro aperto di Block, licenza libera, costruito su un protocollo decentralizzato. Dentro, persone e agenti hanno identità e permessi propri e stanno negli stessi canali. Funziona con i principali assistenti di programmazione, e si può installare senza comprare nulla: il modello organizzativo di Dorsey, scaricabile.

Poi c'è un pezzo, non un prodotto: la chat di gruppo in cui la tua intelligenza artificiale parla di te alle spalle, molto letto su Hacker News in questi giorni. Racconta la stessa cosa dei progetti qui sopra, ma dal lato di chi la subisce, e trasforma un problema di ricerca in disagio quotidiano.

Infine Inkling 2 Small, di Thinking Machines: un modello a pesi aperti, molto grande sulla carta ma che ne accende solo una piccola parte per ogni risposta, così da costare poco a chi lo usa. Secondo Nathan Lambert potrebbe essere il miglior modello occidentale a pesi aperti degli ultimi tempi. Una nota curiosa, nella settimana in cui si discute di tetti condivisi: i pesi aperti sono esattamente la cosa che un tetto condiviso non può richiamare indietro.

---

Una proposta di limite scritta da chi costruisce i modelli, e nello stesso giro di giorni una macchina che chiude da sola un prodotto e lo manda in produzione. Le due cose non si contraddicono: convivono nelle stesse mani, e nessuna delle due aspetta l'altra. La domanda da portarsi dietro è chi arriverà primo al tavolo dove si decide. È stato Signal Brief. Alla prossima.
