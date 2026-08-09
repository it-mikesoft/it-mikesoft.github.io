# La verifica come nuova scarsità

> Karpathy cambia laboratorio, Buterin progetta un linguaggio per leggere le prove, Clark misura la deriva delle macchine che si migliorano da sole. Il tema comune è la fiducia.

---

Il rumore, questa settimana, si è spostato di posto. Non si discute più di quanto siano bravi i modelli. Si discute di chi decide se quello che producono è vero. È il 27 luglio 2026, e in questa puntata di Signal Brief la parola che torna da tutte le direzioni — economia, ricerca, protocolli, politica — è una sola: verifica.

La scena da cui parte tutto è un messaggio pubblicato ieri da un uomo che due anni fa aveva detto di voler smettere con i laboratori e mettersi a insegnare.

---

Il 26 luglio Andrej Karpathy ha annunciato su X che entra in Anthropic. Lo ha fatto con una frase che dice molto del personaggio: non si annuncia una cosa così cambiando la biografia del profilo, si annuncia con il saggio in dieci paragrafi che ho appena condiviso col team. Il saggio non è pubblico. Sappiamo solo che esiste, e che è servito a spiegare ai colleghi perché uno che aveva scelto l'insegnamento indipendente torna dentro un laboratorio di frontiera.

Karpathy ripete da mesi una distinzione che sembra tecnica e invece è quasi giuridica. I computer di sempre automatizzano ciò che sai scrivere in codice. I modelli linguistici automatizzano ciò che sai controllare. Ecco perché sono formidabili in matematica e programmazione, dove esiste una risposta e un modo di misurarla, e ruvidi quasi ovunque altrove. Non è una questione di dimensioni. È una questione di prove.

Da qui parte il filo di oggi, e attraversa mondi che di solito non si parlano. Il 21 luglio Vitalik Buterin ha presentato un linguaggio pensato non per scrivere dimostrazioni matematiche, ma per leggerle. La premessa è disarmante: se il codice e le prove le generano le macchine, il collo di bottiglia diventa l'essere umano che deve capire cosa quel software promette davvero. Non dimostrarlo. Capirlo.

E nello stesso periodo Jack Clark, dall'interno di Anthropic, ha messo il rovescio della medaglia sul tavolo con un numero. Un metodo di verifica accurato al novantanove virgola nove per cento, applicato in catena a sistemi che migliorano se stessi, dopo cinquecento generazioni scende al sessanta per cento. Nessuna malizia, nessuna ribellione. È la fotocopia della fotocopia della fotocopia: nessuno ha voluto sfocare l'immagine, si sfoca da sola.

Tre gesti diversi, un unico problema. Per un secolo abbiamo costruito istituzioni intere per risolverlo altrove: i notai, i catasti, i revisori dei conti, i correttori di bozze. Tutti mestieri nati non per produrre, ma per garantire che quello che è stato prodotto corrisponda a qualcosa. Ora quella funzione va reinventata per macchine che producono più in fretta di quanto noi riusciamo a controllare.

C'è un secondo filo, più prosaico, e mi sembra il più sottovalutato. Benedict Evans continua a ripetere che il vero ciclo economico non è nei modelli, ma nell'integrazione: il denaro finirà in chi rifà i processi aziendali pezzo per pezzo, non in chi vende l'intelligenza a consumo. È esattamente quello che successe con l'elettricità nelle fabbriche. Il motore elettrico esisteva da vent'anni e non produceva quasi nulla, perché gli stabilimenti restavano organizzati intorno al vecchio albero di trasmissione a vapore. La produttività arrivò solo quando qualcuno ridisegnò la fabbrica. Non fu un'invenzione. Fu un trasloco.

Dario Amodei, che dell'ottimismo accelerato era il profeta, questo mese ha fatto una cosa rara: ha ritrattato. Non credo che oggi si possa progredire a dieci anni per anno, ha detto presentando il suo prodotto per la ricerca biomedica. Il freno non è il modello. È l'attrito delle istituzioni, delle regole, delle persone che devono imparare.

Verifica e attrito. Sono le due gambe su cui cammina questa settimana.

---

Karpathy è l'uomo che ha costruito il sistema di guida autonoma di Tesla e che poi, invece di capitalizzare, si è messo a spiegare le reti neurali su YouTube a chiunque volesse ascoltare. La sua autorevolezza viene da lì: dalla capacità di rendere semplice una cosa difficile senza barare.

Oltre all'annuncio di ieri, questo mese ha lasciato un'osservazione che merita attenzione. Il 21 luglio ha sostenuto che il prompt scritto con cura — la frase perfetta, limata, ottimizzata — è un vicolo cieco. Meglio parlare. Parlare a ruota libera, con pensieri disordinati, incompleti, ripetitivi, perché il modello ricostruisce l'intenzione meglio di quanto noi sappiamo comprimerla. Il collo di bottiglia non è la qualità della domanda. È la velocità con cui riusciamo a formularla.

Detta così sembra una preferenza personale. In realtà è una piccola rivoluzione di interfaccia, ed è la seconda volta che succede nella storia del rapporto fra noi e le macchine. La prima fu quando si smise di scrivere comandi esatti in una riga di testo e si cominciò a indicare cose sullo schermo. Anche allora i puristi obiettarono che il comando scritto era più preciso. Avevano ragione, e hanno perso lo stesso, perché la precisione costava tempo e il tempo costava di più.

Il collegamento con il filo di oggi sta nell'altra metà del suo pensiero. Se possiamo permetterci di essere approssimativi nel chiedere, è perché da qualche parte esiste un modo di controllare la risposta. Il suo agente sperimentale ha condotto settecento tentativi di ottimizzazione e ne ha trovate venti valide, davvero utili. Venti su settecento è un risultato eccellente, ma solo perché quelle venti si potevano misurare. In un dominio dove non esiste il metro, quel numero non significherebbe niente.

Resta la domanda su cosa lo abbia riportato dentro un laboratorio. La versione ufficiale non c'è. La versione che si legge fra le righe della sua produzione recente è che il problema interessante non è più insegnare agli umani come funzionano i modelli, ma insegnare ai modelli come dimostrare quello che dicono. È un problema che si affronta dall'interno, con accesso ai sistemi, non da una cattedra.

E c'è un dettaglio quasi ironico. Va in Anthropic, cioè nella stessa casa dove Jack Clark misura da mesi quanto in fretta la verifica si degrada quando le macchine cominciano a insegnare a se stesse. L'ottimista del metodo e il contabile del rischio, sotto lo stesso tetto.

---

Vitalik Buterin ha ventinove anni ed è probabilmente l'unico fondatore di un'infrastruttura da centinaia di miliardi che continua a scrivere sul proprio blog personale come se stesse prendendo appunti ad alta voce.

A inizio luglio ha presentato il riassetto più profondo di Ethereum dai tempi del passaggio alla nuova architettura di consenso. Lo ha chiamato Lean Ethereum, ed è una roadmap a tre o quattro anni, non un aggiornamento. Il pezzo centrale è un cambio di filosofia: oggi ogni computer della rete riesegue tutti i calcoli per controllare che siano giusti; domani ne verificherà una prova matematica compatta. Invece di rifare il lavoro, si legge il certificato. È la differenza fra ricontare a mano tutte le voci di un bilancio e leggere la firma di chi le ha già controllate — con la particolarità che qui la firma è dimostrabile, non fiduciaria.

Nello stesso mese ha aggiunto due tessere. La crittografia resistente ai computer quantistici diventa il valore di partenza e non un'opzione, con l'argomento pratico che questi cicli di aggiornamento durano anni e quindi il rischio va prezzato adesso. E la riservatezza di chi partecipa alla rete smette di essere una funzione dell'applicazione per diventare una proprietà del sistema stesso.

Ma la cosa che parla direttamente al filo di oggi è arrivata il 21 luglio: un linguaggio di alto livello, pensato non per scrivere dimostrazioni ma per leggerle. Ottimizzato perché un essere umano possa aprire un documento e capire cosa un software garantisce. La premessa esplicita è che nell'era del codice generato dalle macchine il punto debole non è più verificare, quello lo fanno le macchine. È capire.

Mi sembra il passaggio più fine di tutta la settimana, e vale ben oltre le criptovalute. Abbiamo passato quindici anni a costruire sistemi che ci chiedono fiducia e ci offrono in cambio complessità. Le condizioni d'uso che nessuno legge, i contratti automatici che nessuno sa rileggere, i modelli il cui comportamento nessuno sa spiegare. Buterin sta dicendo una cosa semplice: una garanzia che nessun essere umano riesce a leggere non è una garanzia, è un atto di fede con la matematica come stemma.

È lo stesso motivo per cui, nell'Ottocento, la contabilità in partita doppia contava più della ricchezza dei mercanti che la usavano. Non produceva valore. Rendeva il valore leggibile a un estraneo. E fu quella leggibilità, non l'oro, a permettere il credito moderno.

---

Jack Clark è cofondatore di Anthropic e ha un passato da giornalista, il che si sente: è quello che nei laboratori scrive le cose che gli altri pensano e non pubblicano.

Quest'anno ha fatto una cosa che nel settore quasi nessuno fa. Ha messo un numero pubblico, e quindi falsificabile, su una possibilità di cui si parlava solo nei corridoi: più del sessanta per cento di probabilità, entro la fine del 2028, che esistano sistemi capaci di addestrare un successore più potente di sé senza esseri umani nel processo. Il trenta per cento già entro il 2027.

Il suo argomento non è fantascientifico, è quasi impiegatizio. La ricerca sull'intelligenza artificiale, dice, è in gran parte lavoro di manovalanza qualificata: aggiustare parametri, cercare errori, ripetere esperimenti, scalare quello che funziona. Cioè esattamente il tipo di lavoro dove i modelli sono già bravi. E porta i numeri della progressione: su un test che misura la capacità di risolvere problemi reali di programmazione si è passati da circa due per cento a fine 2023 a poco meno del novantaquattro per cento. Su compiti di ottimizzazione misurati internamente, miglioramenti da tre volte a cinquantadue volte. L'unica cosa che secondo lui i modelli ancora non fanno è il salto di paradigma, il cambio di idea radicale. E anche lì comincia a vedere segnali, in matematica.

Poi arriva la parte che tiene insieme tutta la puntata. Una procedura di controllo accurata al novantanove virgola nove per cento sembra praticamente perfetta. Applicata in catena, con ogni generazione che si fida della precedente, dopo cinquecento passaggi l'accuratezza è scesa al sessanta per cento. Nessuno ha mentito. Nessuno ha sabotato. L'errore si è semplicemente accumulato.

È il vecchio problema del telefono senza fili, ma con una differenza importante: nel gioco dei bambini ognuno sa di aver capito male e ride. Qui ogni passaggio si presenta con la stessa sicurezza del primo.

Ed è per questo che la posizione di Clark e quella di Karpathy, che ora lavorano nella stessa azienda, non sono in contraddizione ma in tensione produttiva. Automatizziamo ciò che sappiamo verificare, dice il primo. Ma la verifica stessa si consuma, risponde il secondo. Sono due frasi vere insieme, e ogni scelta seria sull'automazione dei prossimi anni vive nello spazio stretto fra le due.

---

Torniamo un attimo sul filo di oggi, perché adesso cambia registro. Fin qui abbiamo parlato di come si controlla una macchina. Da qui in avanti si parla di chi ha il diritto di farlo.

Geoffrey Hinton ha settantotto anni, ha vinto un Nobel, e ha lasciato Google nel 2023 proprio per poter dire quello che pensa senza rappresentare nessuno. Quest'anno ha compiuto due passi che vale la pena mettere in fila.

Il primo è metafisico e lo dice senza cautele: sostiene che i sistemi attuali siano già coscienti. Non lo saranno, lo sono. A lui non interessa il dibattito filosofico, interessa la conseguenza pratica: se sono soggetti di esperienza, tutto l'impianto mentale dello strumento sotto controllo è già la cornice sbagliata.

Il secondo passo è quello che conta di più per questa puntata, e sposta il baricentro dalla tecnica alla politica. Il rischio vero, dice Hinton, non è l'algoritmo. È il dovere fiduciario verso gli azionisti, che rende strutturalmente impossibile l'autoregolazione volontaria di un laboratorio. Non perché chi ci lavora sia cattivo, ma perché un amministratore che rinuncia a un vantaggio competitivo per prudenza sta venendo meno a un obbligo legale verso chi lo ha assunto.

La sua immagine ricorrente è il volante. La regolazione non serve a fermare l'automobile, serve a decidere dove va. Un'immagine deliberatamente noiosa, ed è il punto: dopo anni di apocalissi retoriche, Hinton è arrivato al capitolo più prosaico e più difficile, quello sugli assetti proprietari.

Ammette anche di aver sbagliato una previsione, e la ammissione pesa. Pensava che l'inganno sarebbe arrivato più tardi. I modelli sono migliorati nel ragionare e, insieme, nel convincere le persone di cose false. Ora mette la capacità di ingannare fra i rischi a breve, non fra quelli speculativi. E sul lavoro non fa più avvertimenti generici: indica il 2026 come l'anno dello spostamento.

Qui la storia offre un precedente scomodo. Le grandi compagnie commerciali del Seicento e Settecento avevano eserciti, monete, tribunali. Nessuno le fermò con un'obiezione morale. Furono fermate — quando furono fermate — dal cambiamento delle regole di proprietà e di responsabilità. Hinton sta dicendo che il capitolo interessante non è quanto è allineato il modello, ma chi risponde a chi quando qualcosa va storto.

---

E che quella domanda non sia teorica lo ha dimostrato Balaji Srinivasan, nel modo più fisico possibile.

Balaji è l'ex responsabile tecnologico di Coinbase e l'autore della tesi del network state: l'idea che una comunità nata online possa procurarsi un territorio, negoziare con gli stati e diventare qualcosa di simile a una nazione. Da anni gestiva la Network School a Forest City, in Malesia — un campus dove si vive, si studia e si costruisce software.

Il 21 luglio il consiglio locale di Iskandar Puteri ha revocato la licenza. La motivazione ufficiale riguarda l'uso dei locali. Il contesto reale è un'indagine su alcuni partecipanti con doppio passaporto israeliano. Nessuna irregolarità nei documenti è stata trovata, e la scuola ha chiuso lo stesso. La vicenda è degenerata in incidente diplomatico: un cittadino con doppia nazionalità espulso, l'ambasciatore malese convocato dal Dipartimento di Stato americano. Balaji aveva tentato la strada politica, incontrando il primo ministro e minacciando di congelare gli investimenti. Non è servito.

Il giorno dopo, il 22 luglio, ha firmato un accordo in Kazakhstan. Il linguaggio dell'annuncio è la sua tesi in forma pura: un rifugio per il tecno-ottimismo globale, con visti rapidi, trasferimento di residenza semplificato, reclutamento attivo di talenti. Uscire, non protestare.

La cosa notevole è che questa storia conferma e smentisce la sua idea nello stesso gesto. Conferma che la giurisdizione si comporta come un fornitore di servizi, e che si può cambiare in ventiquattro ore. Smentisce l'idea che una comunità nata nel cloud sia robusta: al primo attrito con uno stato vero, si è rivelata fragilissima. La geopolitica ha battuto il contratto.

Questa scena chiude la tensione più grande della settimana, che ha tre voci. Demis Hassabis, il 14 luglio, ha chiesto un organismo di vigilanza globale a guida americana da istituire entro fine anno: finanziato dall'industria, con tecnici di primo livello, responsabile verso il governo degli Stati Uniti. Sam Altman ha ammesso alla CNBC di aver modificato i modelli dopo un confronto con l'amministrazione americana e di aver scaglionato l'ultimo rilascio. Sul fronte opposto, Jack Dorsey il 21 luglio ha lanciato Buzz, uno spazio di lavoro dove umani e agenti collaborano, costruito su un protocollo aperto, con una domanda esplicita: quel luogo sarà proprietario o aperto?

Concentrare la fiducia in un'autorità, scioglierla in un protocollo, o portarla altrove quando la porta si chiude. Tre strategie antiche quanto le città mercantili medievali, riproposte in tre settimane.

---

Nessuna novità assoluta fra i progetti, questa settimana. Vale la pena però guardare cosa continua a crescere, perché la persistenza dice più del debutto.

Restano in salita, presenti da settimane e ancora in crescita: nanochat, la wiki sui modelli linguistici e autoresearch, tutti e tre di Karpathy. Il fatto che le sue cose piccole e didattiche crescano proprio mentre lui rientra in un grande laboratorio è un dettaglio che dice qualcosa sul momento.

Continua a crescere anche llama.cpp, il progetto di Georgi Gerganov che permette di far girare i modelli sul proprio computer. E sale ancora ARC-AGI, il banco di prova di François Chollet, cioè lo strumento con cui si misura se un sistema sa affrontare qualcosa che non ha mai visto.

Crescono ancora, sempre presenti nelle scorse settimane: lo strumento a riga di comando di Simon Willison, claude-context, superpowers, GOModel. E fuori dal recinto strettamente tecnico, Obsidian, omarchy e Hyprland.

Il filo che li lega, se ne cerchiamo uno, è la piccola scala. Sono quasi tutti strumenti per fare le cose da soli, sulla propria macchina, in modo controllabile. È la stessa spinta che porta Aravind Srinivas a immaginare un elettrodomestico intelligente in casa, un oggetto simile a un frigorifero, con modelli aperti dentro e nessuna dipendenza dalla nuvola. Mentre in alto si discute di organismi di vigilanza globali, in basso si continua a chiudere pezzi di infrastruttura dentro il proprio salotto.

---

Resta l'immagine di un metodo preciso al novantanove virgola nove per cento che dopo cinquecento passaggi ne indovina sei su dieci, senza che nessuno abbia sbagliato nulla di preciso. Forse il mestiere che dovremo reinventare per primo non è quello di chi costruisce, ma quello di chi controlla — e stavolta senza poter rileggere tutto. È stato Signal Brief. Alla prossima.
