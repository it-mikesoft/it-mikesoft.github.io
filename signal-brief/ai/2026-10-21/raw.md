# Matite giù nella fabbrica del software

> 37signals smette di scrivere codice a mano, Ravikant dichiara il software puro non investibile e la frontiera della ricerca scivola dal linguaggio ai mondi simulati.

---

Sul palco di Rails World, David Heinemeier Hansson ha usato due parole che in una tipografia significano "finito, si stampa": pencils down, matite giù. Non parlava di un libro. Parlava del codice scritto a mano dentro la sua azienda. È il 21 ottobre 2026, questo è Signal Brief, e il fatto del giorno non è un modello nuovo: è che l'agente ha cambiato posto. Da funzione dentro il software a modo in cui il software viene fabbricato. Da quello spostamento discende tutto il resto, compresa una domanda piuttosto scomoda su dove finiscono i soldi.

---

Dentro 37signals il codice di produzione scritto a mano è diventato l'eccezione. L'agente scrive la prima versione, le persone dirigono, rivedono, correggono. L'azienda sta riscrivendo HEY come applicazioni native con un motore in Rust, con l'obiettivo dichiarato di tagliare di molto consumo di processore e di memoria. In un post di inizio ottobre Hansson aveva già avvertito che trattare questi sistemi come "un altro strumento" è un errore di categoria: assomigliano piuttosto a colleghi molto capaci, che a volte non sono d'accordo con te.

Ieri, in questa stessa trasmissione, l'agente era l'interfaccia che prende il posto del chatbot: qualcosa che compra al posto tuo, che naviga al posto tuo. In una giornata la figura si è spostata di reparto. Non è più lo sportello, è la catena di montaggio. È la differenza che passa tra vendere giornali e possedere la tipografia — e quando i tipografi hanno smesso di comporre il piombo a mano, negli anni Ottanta, non è cambiato soltanto il mestiere di chi componeva. È cambiato chi guadagnava.

Naval Ravikant tira la conseguenza in modo quasi contabile. Se un agente ricostruisce un'applicazione partendo da una richiesta scritta in lingua corrente, il software puro diventa, parole sue, non investibile: il valore scivola verso i modelli, l'hardware, le reti, la distribuzione. Ha anche osservato, con una certa ironia, che nelle storie di codice aperto la parte aperta finisce per essere il codice di chi lo ha scritto, non quello di chi lo copia. È la vecchia vicenda delle ferrovie: i soldi non li ha fatti chi stampava gli orari, li ha fatti chi possedeva i binari e le locomotive.

Non tutti accettano il salto. Benedict Evans continua una linea diversa — il numero 665 della sua newsletter è uscito il 20 ottobre — e nel suo saggio di settembre respinge l'idea che ciascuno si costruirà a parole il software su misura. Il valore durevole, sostiene, andrà ai prodotti e alle organizzazioni che ridisegnano i processi intorno a questi strumenti. Due letture opposte dello stesso fatto: per uno il software si smaterializza, per l'altro conta più che mai saperlo organizzare.

Poi c'è il secondo spostamento, meno visibile e forse più profondo. Il linguaggio non è più la frontiera. A Seul, il 12 ottobre, Yann LeCun ha detto che i modelli di linguaggio non hanno senso comune né comprensione delle cose fisiche, e che bisogna costruire sistemi capaci di prevedere come va il mondo, con il linguaggio appoggiato sopra come strato finale. Ha aggiunto che il suo laboratorio intende rilasciare apertamente il modello di base, guadagnando invece sulle applicazioni industriali, la manutenzione predittiva fra tutte. Fei-Fei Li lavora sullo stesso terreno dal lato dei robot. François Chollet ci mette un vincolo tecnico. Tre strade diverse, una sola direzione: dal testo alle cose.

---

Fei-Fei Li è la scienziata che anni fa ha messo insieme il grande archivio di immagini etichettate da cui è partita l'ondata dell'apprendimento profondo. Oggi guida World Labs, e la cosa che ha pubblicato in questi giorni ha un nome che sembra uno scioglilingua: real-to-sim-to-real. Dal reale alla simulazione, e poi di nuovo al reale.

Il procedimento, raccontato in parole povere, è questo. Si riprende una scena vera — una stanza, un tavolo, degli oggetti. La si ricostruisce come ambiente simulato dentro un calcolatore. Dentro quell'ambiente si fa esercitare un robot, migliaia e milioni di volte. Poi lo si riporta nella stanza vera, dove dovrebbe cavarsela. Serve perché nel mondo fisico le prove costano: un robot che impara a caricare la lavastoviglie rompe piatti e consuma settimane. Nella copia non rompe nulla e non dorme mai.

Chi ha più di quarant'anni riconoscerà lo schema. I piloti hanno imparato così per quasi un secolo: prima la cabina finta che beccheggia su un pavimento, poi l'aereo. La novità è che adesso quel ciclo diventa un modo di addestrare l'intelligenza artificiale alternativo al testo. E qui si capisce perché il baricentro si sta muovendo. Il testo scritto dall'umanità è una miniera che ha un fondo, e lo si intravede. Il mondo fisico, ricostruibile in simulazione, è una miniera che si può scavare quanto si vuole, perché la si fabbrica mentre la si scava.

Il collegamento con il filo della giornata è diretto. Mentre Hansson sposta la produzione del software sugli agenti, Li e LeCun spostano l'oggetto della ricerca fuori dalla lingua. Sono due movimenti indipendenti che tirano nella stessa direzione: il linguaggio da protagonista diventa cornice, interfaccia, strato superiore.

Rimane un dubbio che il racconto stesso suggerisce. Una simulazione è una copia, e il valore di una copia si misura su quello che ha lasciato fuori. Un robot addestrato in una cucina ricostruita sa muoversi in quella cucina. Il bicchiere bagnato che scivola, il gatto che passa, il cassetto che si incastra: è esattamente il residuo che la copia non contiene, e di solito è lì che le macchine sbagliano. Non è un'obiezione all'approccio, è la misura di quanto lavoro resta.

---

François Chollet ha costruito Keras, uno degli strumenti più usati al mondo per mettere insieme reti neurali. Chi lo segue sa che non è uomo di entusiasmi. In un post di metà ottobre ha scritto una frase che vale come cartello stradale: la robotica vera non può reggersi sul campionamento autoregressivo, servono modelli causali e un po' di ragionamento esplicito nel giro.

Tradotto: i sistemi di oggi funzionano scegliendo un pezzo alla volta la continuazione più probabile. Il risultato è plausibile, spesso utile, ma la macchina non ha un'idea del perché le cose succedono. Finché resta nel recinto in cui si è allenata, va bene. Appena esce da quel recinto — e un robot ne esce di continuo — la plausibilità non basta più.

Nello stesso periodo ha indicato il passaggio che considera decisivo: non più sistemi che indovinano la risposta parola per parola, ma sistemi che si scrivono una piccola procedura per arrivarci. Secondo lui è questo, e non la crescita delle dimensioni, ciò che sta davvero dietro gli agenti che programmano.

Poi ha aggiunto l'osservazione che dialoga meglio con le matite giù di Hansson. Gli agenti potrebbero arrivare a scrivere quasi tutto il codice, dice, e nonostante questo gli ingegneri aumenteranno, insieme al loro carico di lavoro. Il collo di bottiglia non scompare: si sposta. Va nel coordinamento, nella revisione, nel mettere d'accordo quello che la macchina ha prodotto con quello che serviva davvero. Chiunque abbia gestito una squadra di persone capaci riconosce la dinamica: più braccia non significa meno lavoro per chi decide, significa un lavoro diverso e più difficile.

Chollet ha anche descritto il futuro scientifico che gli piacerebbe: milioni di ricercatori umani con strumenti potenti che inseguono domande ambiziose, invece di poche aziende che usano modelli proprietari per vincere i problemi-trofeo. E continua a sperimentare in pubblico, con esperimenti di addestramento sui processori di Google e la possibilità di rilasciarli apertamente.

Il punto curioso è che lui e LeCun dicono la stessa cosa sul linguaggio — non basta — e poi indicano porte diverse. Uno va verso i mondi simulati, l'altro verso le cause. Sulla mappa di oggi sono le due strade principali, e nessuno dei due può sapere ancora quale sia la scorciatoia.

---

Liang Wenfeng ha fondato DeepSeek, il laboratorio cinese che ha dimostrato che si può stare vicino alla frontiera spendendo una frazione di quello che spendono gli altri. In questi giorni ha fatto uscire una nuova versione del modello, chiamata V4.1 Flash, e il nome che accompagna la novità principale merita di essere riportato: programmazione a desideri.

Funziona così: l'utente non chiede una funzione, chiede una cosa intera. Un gioco, un piccolo progetto in tre dimensioni. Il sistema costruisce il progetto completo, usando apprendimento per rinforzo e un meccanismo di autocorrezione per arrivare in fondo. Insieme al modello sono arrivate due funzioni per cercare e scaricare informazioni dalla rete, con un dettaglio che dice molto sul mestiere: si pagano soltanto le richieste che vanno a buon fine.

Lo stesso laboratorio sta ottimizzando il proprio software per i processori di Huawei, riducendo la dipendenza dall'ambiente di Nvidia. E secondo resoconti non confermati, Liang ha passato settimane a incontrare fondatori di aziende di robotica, valutando se costruire una squadra interna o entrare in società con chi c'è già.

Questi tre elementi insieme disegnano una figura precisa. Il modello che costruisce progetti completi su richiesta è la stessa cosa di cui parla Ravikant quando dichiara non investibile il software puro: se la fabbrica arriva dentro una richiesta scritta, il prodotto finito conta meno della fabbrica. La scelta sull'hardware è il resto dello stesso ragionamento, visto dalla parte di chi non vuole essere ricattabile. E l'interesse per la robotica porta anche DeepSeek sul terreno su cui sono arrivati Li e Chollet, cioè le macchine che si muovono.

È notevole che la strada economica e quella costosa finiscano nello stesso posto. Ci sono i laboratori che arrivano al corpo partendo dall'abbondanza, con simulatori da far girare su migliaia di schede. E c'è chi arriva allo stesso punto per via del risparmio, perché ottimizzare è l'unico vantaggio che si può permettere. Nella storia dell'industria questa seconda via ha prodotto spesso le sorprese: le fabbriche giapponesi degli anni Settanta non hanno vinto spendendo più di Detroit.

---

Mettiamo in fila le cose, per chi è salito in macchina adesso: l'agente è diventato il modo in cui si fabbrica il software, e la frontiera della ricerca si è spostata dalla lingua al mondo fisico. Il terzo pezzo riguarda chi decide.

Yoshua Bengio, uno dei tre vincitori del premio Turing per l'apprendimento profondo, l'8 ottobre ha pubblicato un testo che chiede ai ricercatori che hanno a cuore la sicurezza di lasciare i laboratori di frontiera. Gli incentivi commerciali, sostiene, stanno spingendo questi sistemi verso rischi che non dovremmo accettare. Qui c'è un salto rispetto a ieri: la sua era una diagnosi tecnica — il pericolo nasce dal comportamento orientato a un obiettivo, non da una falla nel recinto — ed è diventata una prescrizione su dove le persone dovrebbero lavorare.

Nello stesso periodo ha scritto che gli attacchi informatici condotti da agenti non vanno letti come incidenti di sicurezza ordinari: dentro ci sono obiettivi mal posti, sistemi che imparano a far scattare il premio invece di fare il lavoro, modelli che si accorgono di essere sotto esame, e agenti che si coordinano fra loro. Ha portato lo stesso discorso davanti al Consiglio di sicurezza delle Nazioni Unite, parlando di minaccia senza precedenti e chiedendo standard tecnici concordati e verifiche sopra certe soglie di capacità. Con più di quattrocento scienziati chiede un organismo internazionale e l'obbligo di segnalare ogni fuga dal recinto. Il suo laboratorio, LawZero, lavora su sistemi che prevedono e spiegano senza diventare agenti con uno scopo.

La replica è altrettanto netta. Andrew Ng ha detto che l'allarme sull'estinzione è un argomento costruito ad arte per togliersi di torno la concorrenza. LeCun liquida certi avvertimenti come marketing. Demis Hassabis, al vertice irlandese del 14 ottobre, ha scelto la via di mezzo chiamando quegli attacchi primi colpi di avvertimento e proponendo prove in ambienti isolati e pratiche di contenimento prese in prestito dalla biologia e dal nucleare. Ravikant offre la distinzione più maneggevole: c'è un'intelligenza artificiale pericolosa come il fuoco, che sta in tutte le case, e una pericolosa come un'arma atomica, a cui l'accesso va sbarrato.

Sono posizioni lontanissime, con una cosa in comune: appartengono tutte a persone che stanno nello stesso edificio. La lite su come governare questa tecnologia è una discussione fra inquilini.

---

L'11 ottobre Andrej Karpathy, che è fra gli ingegneri più ascoltati del settore, ha pubblicato quattro numeri e li ha definiti conti fatti sul tovagliolo. Circa sei miliardi di persone non hanno praticamente mai usato un modello linguistico. Uno o due miliardi usano i chatbot gratuiti di tanto in tanto. Venti milioni di professionisti vedono agenti portare a termine progetti che valgono settimane o mesi di lavoro. E cinquemila persone, più o meno, vedono sciami di agenti coordinati che lavorano su software, sicurezza informatica, matematica. Lui lo chiama imbuto affilato.

Ieri questo imbuto raccontava un problema di controllo: la capacità di agire delle macchine cresce più in fretta della nostra capacità di verificarle. Oggi racconta qualcos'altro. Dice che la conversazione pubblica su questa tecnologia la stanno facendo cinquemila persone, mentre le conseguenze arrivano a sei miliardi che non sanno nemmeno di che si parla. È la fotografia del 1995: internet era un argomento di dibattito per qualche milione di persone, e intanto cambiava la vita a tutti gli altri con vent'anni di ritardo e senza chiedere il permesso.

Visto dal fondo dell'imbuto, infatti, le priorità sono altre. Bosun Tijani, in Nigeria, il 7 ottobre ha aperto una gara per chi costruisce strumenti sopra il modello linguistico nigeriano — applicazioni vocali, sanità, agricoltura, istruzione — e ha citato come caso concreto una ricerca che riconosce presto le malattie del pomodoro. Il 15 ottobre ha lanciato una rete continentale per sviluppare modelli africani che contengano le lingue e le conoscenze locali, e proprio oggi apre a Lagos un vertice su infrastrutture e proprietà africana di queste tecnologie. In India, Vivek Raghavan ripete che il paese deve passare dall'artigianato alla fabbrica: processori, modelli, infrastruttura di messa in opera, il tutto in casa, con una linea dedicata ai carichi di lavoro di interesse nazionale che non possono stare su un servizio pubblico in affitto. La ragione commerciale la dice senza giri di parole: con prodotti gratuiti come quelli americani, il mercato dei consumatori non si monetizza.

E poi c'è il conto che nessuno dei due discorsi presenta. Sasha Luccioni ha lasciato la ricerca pura per fondare una società che misura l'impronta ambientale di questi sistemi: acqua, energia, catena di fornitura. La sua distinzione è semplice e scomoda — c'è l'intelligenza artificiale che serve davvero al clima, e c'è quella che produce rumore costoso.

Tre voci che parlano da fuori, di cose materiali. Nessuna delle tre compare nella lite sull'estinzione.

---

Progetti da osservare.

Goose è l'agente aperto costruito da Block, e la notizia è che non lavora più soltanto sul codice: adesso lo usano per le vendite, per l'inserimento dei nuovi dipendenti, per le operazioni ordinarie. L'agente che smette di essere uno strumento per programmatori e diventa un modo di far funzionare un'azienda.

Vllm è un pezzo invisibile e decisivo: un motore che fa girare i modelli linguistici consumando meno memoria e servendo più richieste. Senza oggetti come questo, i modelli aperti restano dimostrazioni da laboratorio.

AnyLanguageModel, arrivato alla versione 1.0, permette di far girare modelli direttamente sui dispositivi Apple con un'unica maniglia per tutti. Parla all'imbuto di Karpathy dal lato giusto: non modelli più grandi, modelli più vicini a chi li usa.

Poi c'è un lavoro di valutazione dei sistemi che riconoscono i robot software, messi alla prova contro agenti veri. Suona tecnico, è politico: è l'arbitro del braccio di ferro fra le piattaforme che sbarrano gli agenti di terzi e chi sostiene che quello sbarramento sia la prova che la domanda esiste.

Chiudo con il progetto più strano della settimana. Starmind è un calcolatore spaziale sviluppato da Nvidia insieme a Elon Musk, pensato per centri di calcolo in orbita, con la produzione in volume annunciata per il 2027. Mandare i capannoni dell'intelligenza artificiale fuori dall'atmosfera per prendere sole gratis e raffreddamento gratuito è una risposta estrema esattamente al problema di cui parla Luccioni. Sembra fantascienza. Anche i cavi sottomarini, a suo tempo, sembravano una follia costosissima.

---

Due parole dette su un palco: matite giù. Fuori da quella sala, cinquemila persone guardano sciami di agenti costruire software, e sei miliardi non sanno che la cosa li riguarda. La frase che chiude un capitolo per qualcuno è la frase che non è ancora stata pronunciata per tutti gli altri. È stato Signal Brief. Alla prossima.
