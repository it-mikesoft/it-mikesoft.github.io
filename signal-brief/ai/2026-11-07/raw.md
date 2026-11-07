# Il prezzo della fiducia

> Costruire software non costa quasi più nulla. Fidarsi di quello che viene costruito, invece, è diventata la voce di spesa più pesante.

---

Sabato 7 novembre. Questa settimana, su Signal Brief, il punto di osservazione si sposta di qualche grado — e il movimento è piccolo ma netto.

Fino a ieri il tema era il modello che diventa infrastruttura: Srinivas che lancia agenti capaci di accettare obiettivi, Huang che chiama gli agenti la prossima piattaforma di calcolo. Tutto vero, tutto confermato. Ma adesso la domanda non è più se gli agenti funzionano. È quanto costa credergli.

Il luogo dove questa domanda si è manifestata nel modo più concreto non è un consiglio di amministrazione. È il computer di casa di Andrej Karpathy, un pomeriggio di inizio novembre.

---

Il 31 ottobre Karpathy ha pubblicato HackerTube: un sito in stile YouTube costruito a partire da circa quarantatré milioni di commenti di Hacker News, da cui sono stati estratti seimilaquattrocentocinquantaquattro video raccomandati più volte, divisi in centocinquanta temi. Il dato interessante non è il sito. È il resoconto che Karpathy ne ha fatto: Claude Opus 5.5 e Claude Code hanno svolto quasi tutto in circa due ore — filtraggio dei dati, scrittura del codice, pubblicazione online, messa in sicurezza, ottimizzazione. A mano sono rimaste tre cose: la chiave di accesso alle interfacce, il server, il dominio.

Due ore. Non per un prototipo: per un servizio funzionante, pubblico, difeso.

Il giorno prima, il 30 ottobre, Patrick Collison aveva raccontato una cosa parallela. Alle piccole applicazioni che si scrive da solo ha aggiunto una casella chiamata «improvements»: chi la usa scrive lì cosa vorrebbe, e un agente esegue la modifica. Un utente ha ottenuto centocinquanta cambiamenti in pochi giorni. Collison la chiama «liquid software», software liquido, e ammette di non avere risposte sulla sicurezza né sulla manutenzione. Il confine fra usare un programma e scriverlo si è semplicemente sciolto.

Da questi due gesti Naval Ravikant trae la conseguenza che interessa chi muove capitali: il «puro software» sta diventando rapidamente non investibile. Se un'idea espressa in italiano o in inglese diventa un'applicazione funzionante in una serata, quella categoria perde il suo valore come oggetto di investimento. Il denaro, secondo lui, si sposta altrove — hardware, effetti di rete, modelli di base, attività legate al mondo fisico.

È una dinamica già vista, e vale collocarla. Alla fine dell'Ottocento, quando l'energia elettrica sostituì l'albero di trasmissione a vapore nelle fabbriche, il valore non rimase nel motore: si trasferì all'organizzazione del lavoro intorno al motore. La macchina diventò banale, il modo di usarla diventò tutto.

Qui però la storia si complica, e si complica sul conto. Il primo novembre Elon Musk ha ridotto i limiti d'uso di Grok Bot, il suo agente che lavora dentro un computer virtuale, dichiarando che i costi per far girare il servizio sono insostenibili rispetto ai ricavi. Ottocentomila utenti paganti alla settimana, e il bilancio non torna: un agente che apre finestre e clicca consuma molto più di una conversazione. François Chollet mette il principio in una frase che vale più di molte analisi: gli agenti producono un ritorno negativo quando coordinarli e rivederli costa più del codice che fanno risparmiare. Simon Willison, che passa le giornate a costruire strumenti per far lavorare questi sistemi, rilancia il giudizio di Nilay Patel: i prodotti di intelligenza artificiale non valgono ancora quello che costano.

E la scarsità, cacciata dal software, rientra dalla finestra dell'hardware. La settimana ha prodotto una lite pubblica sulla memoria dei computer tra Sam Altman ed Elon Musk — Altman a sostenere che la memoria scarsa vada concentrata nei centri di calcolo, Musk a rispondere che la gente ha diritto alla propria. Una discussione che dieci anni fa sarebbe sembrata da appassionati di componenti, diventata questione politica.

Il software è gratis. Fidarsi del software è carissimo. È questa la frase che tiene insieme la giornata.

---

David Heinemeier Hansson è l'autore di Rails, il sistema con cui per vent'anni si è scritta buona parte dei siti del mondo, e per vent'anni è stato la voce della tradizione: convenzioni solide, mestiere, diffidenza verso le mode. Questa settimana ha preso quella reputazione e l'ha usata per dire la cosa opposta di quello che ci si aspetterebbe.

Fra fine ottobre e i primi di novembre ha definito «AI psychosis» — psicosi da intelligenza artificiale — tre posizioni che oggi considera indifendibili: che questa tecnologia sia solo un attrezzo come gli altri, che sia un pappagallo statistico, e che richieda una revisione umana riga per riga. L'ultima è quella che conta. Rivedere ogni riga, per Hansson, non è prudenza: è una forma di rifiuto travestito da rigore.

Il suo lavoro attuale è Omarchy, un sistema operativo basato su Linux pensato per un mondo in cui gli agenti usano il computer al posto nostro. Nelle ultime settimane lo ha portato su tablet, televisori, nuovo hardware ARM; ha aggiunto modelli locali che diagnosticano i problemi senza connessione, una funzione di dettatura, e ha allargato lo staff a tempo pieno. Ha annunciato Basecamp per Claude e dichiarato di aver consegnato modifiche a Omarchy scritte da un agente.

Questa posizione va messa esattamente contro quella di Chollet, perché il disaccordo è pulito. Per Hansson la revisione è zavorra psicologica. Per Chollet la revisione è il costo che determina se l'operazione ha senso o distrugge valore. Non discutono su cosa sanno fare le macchine: discutono su quanto possiamo permetterci di controllarle.

Ed è un disaccordo che somiglia a uno vecchio. Quando i compilatori sostituirono la scrittura a mano del codice macchina, una generazione di programmatori pretese di leggere l'output del compilatore per verificarlo. Avevano ragione, per un po'. Poi smisero — non perché il compilatore fosse diventato infallibile, ma perché il costo di quella verifica superò il valore degli errori che trovava. Il punto discusso oggi è se siamo già a quel momento, o se ci manca ancora un pezzo di strada. Hansson dice che ci siamo. Chollet dice che dipende da cosa stai costruendo. Nessuno dei due ha i dati per chiudere la questione, e questo è il dato più onesto della settimana.

---

Geoffrey Hinton ha passato cinquant'anni a costruire le reti neurali e gli ultimi tre a spiegare perché lo preoccupano. Nelle interviste pubblicate fra il 3 e il 6 novembre ha alzato il tono in modo notevole: ha detto che l'umanità potrebbe essere stata meglio senza questa tecnologia, pur precisando di non essere uniformemente pessimista e di vedere ancora un futuro possibile di abbondanza.

La sua previsione è precisa e per questo scomoda: un incidente di scala Chernobyl legato all'intelligenza artificiale — un attacco che fermi la produzione di energia, o un blocco finanziario di una settimana — entro quest'anno o il prossimo.

La proposta che ne deriva è istituzionale. I modelli di frontiera dovrebbero ottenere un'approvazione prima del rilascio da un regolatore indipendente, costruito come l'agenzia che negli Stati Uniti autorizza i farmaci, con l'onere a chi sviluppa di dimostrare con numeri che i benefici superano i danni. Ha chiesto responsabilità legale per i danni causati, e ha criticato la concentrazione di potere nelle mani di poche aziende americane, nominando Altman, Musk e Zuckerberg come custodi di cui non si fida.

Qui si apre la frattura più interessante di questa settimana, e non riguarda la diagnosi — riguarda il rimedio. Perché su cosa fa paura c'è un accordo largo: l'agente autonomo come superficie d'attacco. Demis Hassabis, parlando a Dublino, ha chiamato gli incidenti di attacco informatico guidati dall'intelligenza artificiale «colpi di avvertimento», e ha chiesto test isolati dalla rete, pratiche di contenimento prese in prestito da biologia e sicurezza nucleare, dieci volte più investimenti in sicurezza. Dan Lahav lo misura: il 5 novembre la sua Irregular ha pubblicato la valutazione di GPT-6 Cyber, che ha risolto tutti gli undici scenari di un banco di prova offensivo e novanta compiti su duecentottantotto del più difficile, fallendo soltanto contro bersagli completamente irrobustiti.

Stessa paura, prescrizioni opposte. Marc Andreessen sostiene che l'antidoto alla concentrazione sia il codice aperto — lasciare che ragazzi e costruttori indipendenti imparino, invece di lasciare la capacità a una manciata di aziende. Vitalik Buterin, a Devcon 8 il 3 novembre, parla di accelerazione difensiva decentralizzata. Un cancello in più, o nessun cancello: la stessa diagnosi produce due architetture politiche incompatibili.

---

Vitalik Buterin merita una scena sua, perché il 3 novembre ha aperto Devcon 8 con un argomento che non si era ancora sentito formulare così.

La sua preoccupazione non è che l'intelligenza artificiale scriva codice malevolo. È che comprima decenni di progresso matematico in pochi anni e trovi, strada facendo, attacchi sconosciuti alla crittografia su cui si regge tutto: curve ellittiche, accoppiamenti, reticoli. Nessuna rottura di questo tipo è nota oggi. Ma se arrivasse, non sarebbe un problema di sicurezza: sarebbe un problema esistenziale per Ethereum e per Bitcoin. Ha aggiunto che le assunzioni di base stanno già cedendo: le vulnerabilità nel software si trovano più in fretta, i dispositivi connessi possono sorvegliare chi li usa, le piattaforme sociali si fanno sommergere dai programmi automatici.

La sua risposta è coerente con tutto quello che ha costruito: non rallentare, ma rendere verificabile. Codice aperto, hardware formalmente controllabile, prove crittografiche, meno punti in cui bisogna fidarsi di qualcuno. In pratica preferisce far girare i modelli sulla propria macchina; e quando serve un modello di frontiera, che sia un modello locale a ripulire la richiesta e a limitare l'autorità di quello remoto. Ha mostrato una configurazione che chiama «modalità paranoica», costruita su Tor e sulla riscrittura locale delle richieste.

Vale collegare questo a Hinton, perché la distanza fra i due non è di temperamento ma di luogo. Hinton vuole mettere il controllo prima: un'autorità che autorizza. Buterin vuole metterlo dopo e distribuito: tanti piccoli strumenti che rendono inutile fidarsi. È la vecchia differenza fra la licenza e il contrappeso — fra chi costruisce un'autorità sanitaria e chi costruisce reti idriche indipendenti. Nessuna delle due ha mai funzionato da sola, storicamente.

E Yoshua Bengio sta provando una terza strada, che non è nessuna delle due: non la norma e non la rete, ma lo strumento. Alla conferenza di Berlino ha chiesto linee rosse convalidate da soggetti indipendenti; con la sua organizzazione LawZero sta costruendo Scientist AI, un sistema progettato senza obiettivi propri, pensato per stimare quanto un altro sistema stia ingannando. Un verificatore tecnico invece di un ispettore. Ha anche proposto che le potenze medie — Corea del Sud, Canada, Europa — mettano insieme risorse invece di dipendere da poche aziende americane.

---

Teniamo presente dove siamo: produrre software è crollato di prezzo, fidarsi di quello che viene prodotto è la nuova spesa, e intorno a questa spesa si stanno formando tre scuole — chi regola, chi distribuisce, chi verifica. Manca una voce, quella di chi guarda dove va il denaro.

Benedict Evans è l'analista che da quindici anni spiega i cambi di piattaforma a chi deve decidere. Il suo ultimo saggio documentato è del 3 settembre, «AI, tools and transformation», e la cosa notevole è che argomenta contro l'entusiasmo che abbiamo raccontato all'inizio: non crede che tutti si costruiranno il proprio software a richiesta. La sua posizione è più sobria — questa tecnologia allargherà i prodotti esistenti e creerà applicazioni verticali precise, ma il collo di bottiglia non è la capacità dei modelli: è il cambiamento organizzativo.

È un'osservazione che val la pena tenere accanto a Karpathy e Collison. Loro due dimostrano cosa è possibile. Evans ricorda quanto lentamente il possibile diventa normale. Entrambi hanno ragione, su scale temporali diverse — e la distanza fra le due è esattamente dove si perdono i soldi.

La sua tesi di fondo per quest'anno è che i modelli di base stanno diventando infrastruttura di consumo, come l'energia elettrica o la banda: il valore durevole si sposta sulle applicazioni, sull'integrazione nei processi, sui dati di proprietà e soprattutto sulla distribuzione. Che è il motivo per cui la discussione su chi possiede le infrastrutture è diventata geopolitica. Bosun Tijani, in Nigeria, sta costruendo novantamila chilometri di fibra ad accesso aperto con due miliardi di dollari dichiarati, capacità di calcolo condivisa per i ricercatori, un modello linguistico pubblico per yoruba, hausa, igbo, ibibio e inglese nigeriano. Vivek Raghavan, in India, avverte che dipendere da modelli stranieri rischia di ridurre il paese a «colonia digitale», e con Sarvam costruisce modelli, sistemi vocali e infrastruttura senza dipendenze esterne.

Mentre a Berlino e in California si discute di come rendere sicura questa tecnologia, a Lagos e a Bangalore si discute di chi la possiede. Sono due conversazioni diverse, e per ora si parlano poco.

---

Progetti da osservare.

HackerTube è il sito di Karpathy: quarantatré milioni di commenti di Hacker News distillati in seimilaquattrocentocinquantaquattro video, centocinquanta temi. Nato il 31 ottobre, senza un archivio pubblico del codice. È meno un prodotto che una dimostrazione: un'irritazione personale trasformata in servizio pubblico in un pomeriggio.

Claude Code è l'agente di programmazione di Anthropic con cui Karpathy l'ha costruito. Interessa qui per una ragione sola: è il riferimento concreto del passaggio dallo scrivere codice al dirigere chi lo scrive.

Scientist AI è il progetto di LawZero di Bengio. Non è un agente: è un guardiano, pensato per stimare con una probabilità quanto un altro sistema stia mentendo. Di apertura del codice ci sono annunci, non un rilascio verificato. Se funzionasse, sarebbe la prima risposta tecnica alla domanda sulla fiducia di cui abbiamo parlato tutta la puntata.

Dessa è il modello vocale di Block presentato il 23 ottobre: parla e ascolta insieme, addestrato su conversazioni umane per riprodurre pause, emozioni, risate, ritmo naturale. Secondo le fonti gira su hardware di consumo, ma per ora è accessibile soltanto a ricercatori sulla sicurezza. Jack Dorsey, nei giorni successivi, ha scritto «there is no moat» — non c'è fossato — senza chiarire se parlasse dei modelli di frontiera o del software in generale.

Cosmos 3 è il modello del mondo di NVIDIA a pesi aperti, in versione Super da sessantaquattro miliardi di parametri e Nano da quindici: gestisce testo, immagini, video, suono e azioni. Serve alle macchine che devono muoversi nello spazio, non chiacchierare.

---

Due ore per costruire un sito difeso, e ottocentomila abbonati che costano più di quanto rendono. La settimana si tiene insieme in questa sproporzione: la parte difficile è diventata facile, e la parte facile — decidere se fidarsi — è diventata la più cara. Forse non è un problema tecnico. Forse stiamo imparando, come già capitò con i compilatori, quanto controllo possiamo permetterci di lasciare andare.

È stato Signal Brief. Alla prossima.
