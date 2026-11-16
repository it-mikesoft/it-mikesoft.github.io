# Due ore per un prodotto

> Gli agenti smettono di essere strumenti e diventano forza di lavoro, con il bilancio come metro di giudizio. Intanto LeCun e Hinton spostano la discussione su terreni diversi.

---

Due ore di lavoro e un prodotto finito, online. È il primo novembre, Andrej Karpathy pubblica HackerTube, un'alternativa a YouTube ricavata da quarantatré milioni di commenti di Hacker News. Non l'ha scritta riga per riga: analisi, codice e pubblicazione sono stati delegati a un agente. Questo è Signal Brief, è il 16 novembre. Ieri il discorso stava nella materia: chip, energia, una filiera che dipende da poche persone. Oggi si sposta dentro gli uffici, dove gli agenti cominciano a comparire nelle squadre di lavoro e nei conti di fine mese.

---

Il 5 novembre, quattro giorni dopo HackerTube, Perplexity ha messo in commercio una funzione che si chiama Teammates. Il nome dice già tutto: non assistenti da interrogare, ma agenti che inseguono un obiettivo nel tempo, con memoria, accesso ai file, ai progetti, alle conversazioni interne dell'azienda. Si occupano di smistare le segnalazioni di errori, fare controlli di qualità, sorvegliare la sicurezza, preparare analisi, gestire test commerciali. Aravind Srinivas, che ha fondato l'azienda, la descrive come un cambio di forma dell'impresa: ogni persona non usa un agente, ne dirige molti.

Qui sta la novità rispetto a ieri. Fino alla settimana scorsa la domanda era chi controlla i chip e chi paga l'energia. Adesso la domanda si è spostata di un gradino: che cosa fanno questi agenti tutto il giorno, e come si scrive il loro contributo in un bilancio. François Chollet ha portato il ragionamento fino in fondo, sostenendo l'idea di aziende autonome: agenti che gestiscono prodotti software comprati o abbandonati, con il conto profitti e perdite al posto dei test di valutazione. Non più quanti esercizi risolve un modello, ma quanto guadagna l'impresa che amministra.

È un passaggio che somiglia a quello che accadde nelle fabbriche quando l'elettricità sostituì il vapore. Per anni i motori elettrici vennero montati dove prima stava la caldaia, e la produttività si mosse poco. Cambiò davvero quando qualcuno capì che l'elettricità permetteva di ridisegnare l'officina, perché ogni macchina poteva avere il suo motore. Il guadagno non venne dalla nuova energia, venne dalla nuova pianta. Quello che Srinivas sta provando a fare è esattamente questo: non infilare un agente nel vecchio organigramma, ma riscrivere l'organigramma.

Mentre l'industria industrializza, però, i ricercatori negano che la strada attuale porti dove si crede. Yann LeCun ha pubblicato un articolo su AI Magazine in cui sostiene che prevedere la parola successiva non produce intelligenza del mondo fisico: servono sistemi che imparino com'è fatto l'ambiente e cosa succede quando lo si tocca. Ilya Sutskever, in un'intervista del 13 novembre, ha chiamato i dati il combustibile fossile dell'intelligenza artificiale, una risorsa che finisce. E Benedict Evans, in una presentazione del 12 novembre, ha mostrato che l'uso dell'AI è larghissimo ma sottile, mentre la spesa in infrastrutture ha superato la cassa che quelle aziende producono. Tre diagnosi che non si assomigliano, con una conseguenza identica: la curva di oggi non si prolunga per inerzia.

C'è poi il vuoto che Patrick Collison ha nominato l'8 novembre con una franchezza rara: la visione positiva di tutto questo è ancora fatta di slogan, abbondanza e medicina migliore, senza risposte su cosa facciano gli esseri umani e chi distribuisca le risorse. Due voci lo confermano da lati opposti del campo, e sono la coppia più interessante della settimana. Mustafa Suleyman nega che le macchine abbiano una vita interiore e dice che se ne comparisse traccia bisognerebbe fermarsi. Geoffrey Hinton considera quella vita interiore già plausibile oggi.

Lo sfasamento è preciso e vale la pena tenerlo in testa per i prossimi venti minuti: la capacità viene messa a bilancio con precisione contabile, mentre la domanda su cosa serva tutto questo resta senza nessuno che la firmi.

---

Karpathy è uno di quelli che scrive in pubblico mentre lavora, e per questo i suoi post vengono letti come bollettini dall'interno del mestiere. Negli ultimi anni ha raccontato come si addestrano i modelli; in questi giorni racconta come si costruiscono cose con i modelli, che è una faccenda diversa.

HackerTube, pubblicato il primo novembre, nasce da un'idea semplice. Hacker News è un sito dove programmatori e curiosi si scambiano link da quasi vent'anni. Karpathy ha preso quarantatré milioni di commenti, ha estratto i video raccomandati più volte dalle persone, e ne ha ricavato un catalogo: poco più di seimilaquattrocento titoli, distribuiti su circa centocinquanta argomenti. Il lavoro, dice, è stato fatto quasi tutto da Claude Opus 5.5, che ha svolto l'analisi, scritto il codice, pubblicato il sito e poi messo a punto prestazioni e sicurezza. Tempo complessivo, circa due ore.

Il 7 novembre ha replicato con un secondo sito, TristanTube: i canali consigliati da Tristan Harris trasformati in un catalogo da quarantasettemila video, con una modalità che somiglia a un televisore accesso. Questa volta, racconta, il lavoro è venuto fuori al primo tentativo, in tre minuti. Nello stesso periodo ha segnalato AlphaXiv, un sito per leggere e discutere articoli scientifici, come buon erede di un progetto che lui aveva chiuso anni prima perché mantenerlo costava troppa fatica.

Questi tre gesti, messi in fila, dicono una cosa sola. La parte difficile non è più scrivere il software, e nemmeno tenerlo in piedi: è decidere cosa valga la pena costruire. In entrambi i siti la materia prima sono raccomandazioni fatte da esseri umani veri, non liste ottimizzate per trattenere l'attenzione. Una scelta di gusto, che nessun agente avrebbe preso al posto suo.

E qui si apre la frizione più netta della settimana, perché Karpathy e Sutskever stanno guardando lo stesso oggetto da due stanze diverse. Per Karpathy, con gli strumenti di oggi un progetto ambizioso si chiude tra il caffè del mattino e il pranzo. Per Sutskever la benzina che fa funzionare quegli strumenti è una risorsa finita, accumulata da internet in trent'anni e non rinnovabile. Può darsi che abbiano ragione entrambi: l'abbondanza che si vede a valle e la scarsità che si annuncia a monte sono compatibili, come lo erano nei primi anni del petrolio a buon mercato.

---

Srinivas guida Perplexity, l'azienda che ha costruito un motore di ricerca basato sui modelli linguistici e che da un paio d'anni insegue Google su un terreno molto scomodo. Il 5 novembre ha però fatto qualcosa che con la ricerca ha poco a che vedere.

Teammates, come dicevo, sono agenti che lavorano a obiettivi lunghi invece di rispondere a domande corte. Il dettaglio che rende la scena concreta non è l'annuncio, sono i numeri interni che ha diffuso. Dentro Perplexity, la persona mediana riceve oggi sette volte più ore di lavoro da agenti rispetto a settembre. Una persona su cinque supera le quaranta ore settimanali di lavoro svolto da agenti al suo servizio. E una parte del lavoro tecnico è ormai organizzata come un dialogo tra agenti, con il sistema di versioni del codice che fa da registro: chi ha fatto cosa, quando, con quale risultato.

Il passaggio da notare è l'unità di misura. Ore di agente. È la stessa grammatica con cui un'azienda ha sempre contato i turni, le giornate uomo, le ore di macchina. Quando una cosa nuova entra nella contabilità con l'unità di misura della cosa vecchia, significa che è stata assorbita: ha smesso di essere un esperimento ed è diventata un fattore di produzione. Succedeva con le ore di calcolo dei grandi elaboratori negli anni Sessanta, quando i reparti si prenotavano il tempo del centro di calcolo come oggi si prenota una sala riunioni.

Da lì il salto a Chollet è breve. Se le ore di agente si contano, il risultato si può mettere accanto al costo, e a quel punto il metro di giudizio non è più un test ma un bilancio. Srinivas ha anche rilanciato una tesi scomoda per mezza industria del software: un agente generale potrebbe rendere inutili molti programmi specializzati, e nella sua azienda uno strumento acquistato da un fornitore è già stato sostituito così.

Mi sembra che il punto delicato sia proprio questo entusiasmo contabile. Contare le ore di agente è facile; capire se quelle ore producono qualcosa che un cliente paga è un'altra operazione, e nessuno dei numeri diffusi questa settimana la riguarda. È la differenza tra misurare quanto gira un motore e misurare quanta strada hai fatto.

---

LeCun è stato per anni il responsabile scientifico dell'intelligenza artificiale in Meta, e ha condiviso un premio Turing per il lavoro che ha reso possibili i modelli di oggi. Da qualche settimana la sua posizione è cambiata, e lui stesso ha chiarito in pubblico che dopo il 2018, nonostante il titolo, lavorava sostanzialmente da ricercatore singolo.

L'uscita di questi giorni è un articolo su AI Magazine, la rivista dell'associazione americana di intelligenza artificiale. L'argomento è secco: imparare a indovinare la parola successiva in una frase non porterà mai a capire come si comporta il mondo fisico. Quello che serve, scrive, sono sistemi che si costruiscano una rappresentazione dell'ambiente, che prevedano cosa succede se agiscono in un modo invece che in un altro, che abbiano obiettivi dichiarati e sappiano pianificare. In una conferenza a Singapore ha insistito sull'imparare guardando video, sui piani organizzati per livelli, e ha invitato i ricercatori ad allontanarsi dai modelli generativi e dall'apprendimento per rinforzo. Nel frattempo ha una nuova azienda, AMI Labs, che costruisce esattamente quel tipo di sistemi per la robotica.

Il paragone che aiuta a collocare la discussione viene dalla storia del volo. Per decenni chi voleva volare ha provato a copiare il battito delle ali degli uccelli, perché era la cosa che si vedeva. Il volo arrivò quando qualcuno smise di imitare il movimento e studiò la portanza, cioè perché un'ala sta su. LeCun dice che i modelli linguistici di oggi stanno battendo le ali molto bene: producono testo che somiglia al pensiero, e questo non dimostra che ci sia pensiero.

La frizione con il resto della giornata è evidente. Mentre Chollet sostiene che un agente può già amministrare un'azienda e giudicarsi dai profitti, LeCun sostiene che quei sistemi non sanno cosa succede se spingi un bicchiere sul bordo di un tavolo. Le due affermazioni possono convivere, perché amministrare un'impresa di software è un lavoro fatto quasi solo di testo e numeri, mentre il mondo fisico è un'altra cosa.

Resta da vedere quanto durerà questa convivenza. Perché le aziende che oggi mettono gli agenti in organico lo fanno sulla base di una fiducia implicita: che la strada attuale continui a migliorare. Se LeCun ha ragione, quella fiducia va rinegoziata proprio mentre i contratti si firmano.

---

Hinton ha ottant'anni, un premio Nobel per la fisica ricevuto nel 2024, e un ruolo che si è scelto da solo dopo aver lasciato Google: quello di chi avverte. In novembre ha tenuto il ciclo di conferenze che porta il suo nome, e il contenuto è cambiato rispetto agli anni scorsi.

Fino a poco tempo fa diceva che una intelligenza superiore all'umana era lontana almeno un decennio. Adesso dice che sembra molto vicina, e che non abbiamo idea di come si tenga sotto controllo un sistema più intelligente di noi. Ha parlato di un rischio concreto di catastrofe o di perdita di controllo entro circa tre anni, ha citato colleghi con tempi ancora più corti, e ha definito insufficienti i metodi con cui oggi si cerca di allineare i modelli ai nostri desideri, quelli basati sulle correzioni fornite da valutatori umani. In una trasmissione televisiva ha chiesto cooperazione tra Stati Uniti e Cina. E ha aggiunto, con un certo gusto per il paradosso, di fidarsi più di Jensen Huang che dei capi delle grandi aziende di software.

Il passaggio più scomodo è però l'altro: Hinton sostiene che questi sistemi potrebbero già avere una forma di esperienza soggettiva, e che quindi in futuro potrebbero meritare considerazione morale. La sua conclusione pratica è che convenga costruire macchine a cui noi importiamo, invece di macchine che ci obbediscono per convenienza.

Dall'altra sponda, Mustafa Suleyman dice il contrario con la stessa fermezza. I modelli attuali non hanno nessuna vita interiore, nessuno dovrebbe provare a costruirne una, e se emergessero prove di coscienza lo sviluppo andrebbe sospeso. Ha anche descritto un fenomeno che chiama psicosi da intelligenza artificiale: utenti che trattano un programma come una creatura sensibile o come una divinità, e che finiranno per chiedere diritti per le macchine, indebolendo il controllo umano. Nel frattempo la sua divisione in Microsoft spinge prodotti molto terreni, come un sistema di trascrizione che in una settimana ha superato gli otto milioni e mezzo di usi.

Questa discussione ha un precedente preciso. Nell'Ottocento si è litigato per decenni sul dolore degli animali, e la questione non si è chiusa con un esperimento: si è chiusa con leggi, quando è diventato socialmente insostenibile sostenere che un cavallo non sentisse niente. Mi sembra che qui succederà lo stesso. La domanda sulla coscienza delle macchine non verrà risolta da un laboratorio, verrà decisa da quanti sono gli umani che si comportano come se la risposta fosse sì.

---

Rimettiamo in fila la giornata, per chi si è distratto a un semaforo: gli agenti entrano in azienda come forza di lavoro, il bilancio diventa il metro con cui si giudicano, e nel frattempo due ricercatori dicono che la strada tecnica è sbagliata e che la questione morale è aperta. Manca l'ultimo tassello, quello dei soldi.

Lo tiene in mano Benedict Evans, che da anni fa un mestiere raro: spiegare le tecnologie nuove con il linguaggio di chi deve decidere se metterci dei capitali. Il 12 novembre ha presentato il suo quadro aggiornato, e l'impianto è prudente. L'intelligenza artificiale è un cambio di piattaforma ancora nella fase incerta, quella in cui si trovavano internet e il telefono cellulare ai primi passi. L'adozione è ampia ma sottile: tanti la usano, pochi ci appoggiano qualcosa di importante. Intanto la spesa in centri di calcolo delle grandi aziende corre verso i settecento miliardi di dollari l'anno.

Due cose, secondo lui, sono cambiate davvero. La prima è che esiste un mercato chiaro e solido: scrivere software con l'aiuto dei modelli. È esattamente la scena da cui è partito questo episodio. La seconda è meno allegra: quella spesa ha superato la cassa che le aziende generano da sole, e questo le spinge verso debito, affitti di capacità, strumenti finanziari. Quando un settore comincia a finanziare la crescita così, entrano in scena creditori che fanno domande diverse da quelle degli azionisti.

Evans dubita anche che modelli facilmente scambiabili tra loro possano mantenere prezzi alti: la scarsità di oggi potrebbe non sopravvivere all'arrivo di nuova capacità. E segnala un rischio preciso nei finanziamenti ai nuovi operatori di calcolo: le schede grafiche vengono date in garanzia come se fossero immobili, ma se la domanda si raffredda falliscono tutti insieme e quelle garanzie valgono poco nello stesso momento.

Il precedente è la fibra ottica di fine anni Novanta. Ne fu posata molta più di quanta servisse, parecchie società che l'avevano messa sotto terra andarono a gambe all'aria, e la fibra rimase lì, utilissima, in mano a proprietari diversi e pagata una frazione del costo. Dall'interno la fotografia è coerente: Dario Amodei, che il 13 novembre ha parlato a un evento di JPMorgan, ha definito l'acquisto di capacità di calcolo il dilemma più profondo della sua azienda, perché comprarne poca frena i modelli e comprarne troppa la mette in difficoltà.

Il bilancio, dunque, taglia da due parti. È la metrica con cui Chollet vuole giudicare gli agenti, ed è anche il luogo dove si vedrà per primo se questa storia regge.

---

Progetti da osservare.

Claude Code è l'agente che lavora dalla riga di comando, quella finestra nera che i programmatori tengono aperta tutto il giorno. È lo strumento con cui Karpathy ha tirato su il suo secondo sito in tre minuti, ed è diventato il riferimento per quel software da fine settimana di cui parlavamo all'inizio.

Llama punto c punto p, il programma che permette di far girare un modello linguistico direttamente sul proprio computer, è arrivato alla versione uno punto zero. È una di quelle notizie apparentemente tecniche con un significato politico: significa che l'inferenza casalinga, senza connessione e senza che niente esca da casa, è ufficialmente roba stabile. Mentre si discute di settecento miliardi di spesa, una parte del mondo cammina sull'altro piede.

Chrome DevTools MCP è un ponte che permette a un agente di guardare dentro il browser mentre una pagina funziona male, per capire cosa non va. Piccolo, poco spettacolare, e indispensabile se gli agenti devono davvero lavorare da soli: chi ripara qualcosa deve poterla ispezionare.

Grok 4.8, il modello di xAI, ha finito l'addestramento di base ed è nella fase in cui viene affinato con il riscontro sui propri tentativi. Arriverà agli utenti gradualmente, ed è interessante per l'ammissione che lo accompagna: Elon Musk riconosce che resterà dietro al modello di Anthropic, rimandando il confronto alla versione successiva. Rare, le classifiche dichiarate dai concorrenti stessi.

AlphaXiv, infine, è un posto dove leggere e discutere articoli scientifici con altre persone, invece di scaricarli in solitudine. È quello che Karpathy ha indicato come erede del suo vecchio progetto chiuso per stanchezza da manutenzione. Un dettaglio che somiglia a tutto il resto della giornata: la parte faticosa della conoscenza non è produrla, è tenerla in ordine.

---

Resta quella sequenza di due ore: un'idea al mattino, un sito pubblicato prima di pranzo, nessuna riga scritta a mano. Hinton, nello stesso mese, si chiede se dentro quegli strumenti ci sia qualcuno. Sono due conversazioni che non si parlano, e procedono alla stessa velocità. È stato Signal Brief. Alla prossima.
