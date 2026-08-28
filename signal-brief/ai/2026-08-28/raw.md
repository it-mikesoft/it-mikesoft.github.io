# Il muro elettrico dell'intelligenza

> Il chatbot non è più l'unità di misura: si contano le ore di lavoro autonomo. E il limite non è più il denaro, ma la corrente elettrica.

---

Ci sono settimane in cui non viene annunciato nulla di clamoroso e cambia comunque l'unità di misura. Questa è una di quelle. Nel Signal Brief del 28 agosto la scena si sposta: non si discute più di cosa un modello risponde, ma di quanto a lungo riesce a lavorare da solo. E le voci che seguiamo, per la prima volta, litigano su qualcosa di molto fisico: la corrente elettrica. Il racconto comincia da un uomo che ha praticamente smesso di scrivere codice a mano.

---

Quell'uomo è David Heinemeier Hansson, che tutti chiamano DHH: ha creato Ruby on Rails, uno degli strumenti su cui è costruita metà del web che usiamo ogni giorno, ed è stato per anni una delle voci più fredde verso l'entusiasmo sull'intelligenza artificiale. In un lungo episodio del podcast di Lex Fridman, a fine agosto, ha raccontato che ormai la parte esecutiva del suo lavoro la fanno gli agenti. Lui tiene aperti più modelli in parallelo — uno veloce per le prove rapide, uno più potente per le cose serie — e guarda le differenze riga per riga nel terminale. Non scrive quasi più codice. Rivede.

Ieri il filo era che l'attenzione si stava spostando dal modello al sistema che lo contiene. Oggi c'è una cosa nuova, e più precisa: è cambiato il metro. Non si misura più un prompt o una conversazione. Si misurano sessioni lunghe. Andrej Karpathy, ad agosto, ha pubblicato un esperimento in cui un modello ha lavorato per circa due ore consumando qualcosa come un milione di token — l'equivalente di un romanzo intero letto e riscritto più volte — per costruire da solo una scena tridimensionale della Terra di Mezzo.

Per un po', dopo l'arrivo dell'automobile, si è continuato a misurarne la potenza in cavalli. L'unità di misura era sopravvissuta alla cosa che misurava. Il chatbot sta facendo la stessa fine: è ancora l'immagine che abbiamo in testa, ma non descrive più quello che queste macchine fanno davvero.

Se il lavoro dura ore, però, consuma. Ed è qui che arriva la seconda novità della settimana. Elon Musk ha spostato il discorso dai soldi all'energia: sostiene che il collo di bottiglia sia ormai quanta intelligenza riesci a ottenere da un joule, e che entro il 2029 possa diventare necessario mettere i centri di calcolo in orbita, perché sulla Terra la corrente e i permessi finiscono. È un'affermazione estrema, ma dice una cosa chiara: il limite non è più solo economico. È fisico.

Sul versante opposto compare per la prima volta in modo esplicito una posizione di segno contrario. Sasha Luccioni, che studia da anni il costo ambientale di questi sistemi, ha pubblicato un articolo il cui titolo è già la tesi: più grande non è quasi mai meglio. Non è una lamentela morale. È un'argomentazione tecnica sul fatto che ingrandire un modello raramente restituisce un guadagno proporzionato alla bolletta.

E poi entra una voce che finora era rimasta ai margini di questo racconto. Marc Andreessen, uno dei principali finanziatori del settore, sostiene che il pericolo vero non siano i modelli ma le regole: per lui il rischio maggiore è normativo, non tecnico, e il mercato è ancora agli inizi, con i prezzi dell'intelligenza che crollano più in fretta di quanto sia mai successo con i microprocessori. È una posizione che va tenuta in mente, perché per tutto l'episodio farà attrito con le altre.

Tre affermazioni, allora, che stanno nella stessa settimana: le macchine lavorano da sole per ore, farlo costa corrente, e c'è chi dice che il problema non sia nessuna delle due cose. Conviene cominciare da chi ha portato le prove.

---

Andrej Karpathy è la persona che, più di chiunque altro, ha insegnato a una generazione come funzionano davvero le reti neurali: prima ai tempi di Stanford, poi guidando l'intelligenza artificiale di Tesla, poi in OpenAI. A maggio ha annunciato di essere entrato nel gruppo che addestra i modelli di base in Anthropic, dicendo che aveva voglia di tornare a fare ricerca vera.

L'esperimento che ha pubblicato a inizio agosto è semplice da raccontare. Ha preso il primo paragrafo del Signore degli Anelli e l'ha dato a Claude Opus 5 come unica istruzione. Poi ha lasciato lavorare. Circa un milione di token consumati, un budget di una decina di dollari, due ore di tempo. Alla fine, una scena tridimensionale della Terra di Mezzo che gira dentro un browser. Nello stesso periodo, sul suo archivio pubblico di codice, compare un piccolo aggiornamento a micrograd, il progetto didattico minuscolo con cui spiega da zero come impara una rete neurale.

Il punto non è l'elfo poligonale. Il punto è la ricevuta. Karpathy non ha detto "guardate quanto è bravo": ha detto quanto è costato, quanto è durato, quanto materiale ha macinato. Ha portato una misura, e la misura è il tempo.

Ed è qui che la sua posizione è cambiata rispetto a poche settimane fa. Prima era l'osservatore che delegava il proprio lavoro agli agenti e constatava, con una punta di malinconia, che la programmazione era diventata "irriconoscibile". Adesso è di nuovo dentro la macchina, e porta prove misurate di quanto a lungo un sistema regge da solo. Da testimone a strumento di misura.

Sostiene anche una cosa che riguarda tutti, non solo chi scrive software: che il modo in cui giudichiamo questi sistemi — domandine, risposte brevi, punteggi — è diventato inadeguato. Un esame di dieci minuti non dice niente su chi deve lavorare due ore senza supervisione.

Mi sembra che il vero cambiamento sia proprio nella scheda tecnica mentale con cui valutiamo queste cose. Per anni la domanda era: quanto è intelligente. Ora la domanda diventa: per quanto tempo resta affidabile da solo, e quanto mi costa quel tempo. Sono due domande completamente diverse, e la seconda somiglia molto più a quella che ci si fa quando si assume qualcuno che a quella che ci si fa quando si compra un programma.

---

Elon Musk, in queste settimane, ha fatto due cose in parallelo. Ha spinto in distribuzione Grok 4.6, il suo modello, presentato esplicitamente per agenti che lavorano a lungo e per compiti a più passaggi, portandolo dentro gli strumenti di programmazione più diffusi. E ha lanciato Grok Bot, descritto come un collega sempre acceso, disponibile dentro le applicazioni e sul web.

Ma la frase che conta è un'altra. Musk ha detto che il vero indicatore da guardare è l'intelligenza per joule — quanta capacità di calcolo ottieni da una data quantità di energia — e che il settore sta andando a sbattere contro un muro energetico. Da qui l'idea che ha fatto discutere: che intorno al 2029 possa diventare necessario mettere i centri di calcolo in orbita, perché a terra la corrente disponibile e i permessi per costruire non basteranno.

Sul fronte industriale, le ricostruzioni giornalistiche raccontano che SpaceX abbia integrato più strettamente xAI e acquisito Cursor, l'azienda dello strumento di programmazione assistita, per sessanta miliardi di dollari, con l'idea che i ricavi dell'intelligenza artificiale possano presto superare quelli spaziali.

Vista da lontano, questa è una storia già successa molte volte. L'industria dell'alluminio, un secolo fa, non si è stabilita dove c'erano i clienti né dove c'era il minerale: si è stabilita accanto alle dighe, in Norvegia e in Islanda, perché fondere alluminio significa comprare elettricità sotto forma di metallo. Le fabbriche sono andate dove stava la corrente. Quello che Musk sta dicendo, senza dirlo, è che i centri di calcolo sono diventati fonderie: e che sulla Terra le dighe stanno finendo.

C'è però una differenza sostanziale con la fonderia. L'alluminio lo puoi spedire; il calcolo lo devi collegare. Un centro di elaborazione in orbita risolve il problema dell'energia e ne crea uno di raffreddamento, di manutenzione e di ritardo nella trasmissione.

Quello che rimane, al netto dell'astronave, è la direzione. Quando per trovare una presa di corrente si comincia a guardare fuori dall'atmosfera, il vincolo ha cambiato natura: non è più quanto capitale riesci a raccogliere, ma quanta energia il pianeta è disposto a darti. Ed è una domanda che, prima o poi, smette di essere tecnica e diventa politica.

---

Sasha Luccioni studia da anni una cosa che quasi nessuno misurava: quanto costa in energia e in emissioni far funzionare questi sistemi. È stata a lungo in Hugging Face, la piattaforma dove la comunità pubblica modelli aperti, e a maggio di quest'anno ha co-fondato Sustainable AI Group, una struttura che aiuta le organizzazioni a misurare l'impatto ambientale dei modelli che adottano. A luglio ha firmato su Time un intervento su come rendere più sostenibili i centri di calcolo.

Il gesto di questa settimana è piccolo e preciso. Ha pubblicato un articolo il cui titolo dice già tutto: più grande non è sempre meglio, e spiega come scegliere il modello più efficiente per un compito specifico. Insieme, ha aggiornato una classifica pubblica che confronta i modelli su questo criterio. E pochi giorni prima aveva firmato un lavoro dal titolo altrettanto netto: gli agenti completamente autonomi non andrebbero sviluppati.

Le due cose insieme fanno una posizione coerente, ed è quello che la rende la voce più scomoda della giornata. Perché non contesta solo il gigantismo — contesta anche la delega totale. Sta esattamente in mezzo alle due novità di cui parliamo oggi, e dice no a entrambe.

L'argomento sull'efficienza, tradotto: se devi classificare le richieste dei clienti, non ti serve il modello che sa anche discutere di filosofia medievale. Ti serve quello giusto per quel compito, e quello giusto è quasi sempre molto più piccolo, molto più economico e molto meno affamato di corrente. La scelta del modello più grande disponibile è, nella maggior parte dei casi, una scelta pigra travestita da scelta prudente.

C'è un precedente che aiuta. Negli anni Settanta l'aviazione civile si è trovata davanti a un bivio: il Concorde, che andava a più del doppio della velocità del suono, o aerei ordinari che consumavano meno. Ha vinto il consumo. Il Concorde era straordinario e ha volato per pochi, per pochi anni, e poi è sparito. Non perché non funzionasse: perché il rapporto tra quello che dava e quello che costava non stava in piedi.

La domanda che Luccioni mette sul tavolo, allora, è se stiamo costruendo la flotta o il Concorde. E ha una conseguenza che va oltre l'ambiente: se l'efficienza conta più della scala, allora competere non richiede necessariamente centinaia di miliardi. Lo spazio si riapre.

---

Ricapitoliamo un attimo dove siamo: il lavoro autonomo lungo è diventato il metro, l'energia è diventata il limite, e c'è chi sostiene che ingrandire tutto sia lo spreco più costoso del settore. Manca la voce di chi quel metro l'ha promesso per primo.

Sam Altman guida OpenAI. In un'intervista pubblicata il 26 agosto ha fatto una cosa che nel suo mestiere non si vede spesso: ha ammesso di aver sbagliato una previsione, e ha detto di quanto. L'adozione dell'intelligenza artificiale, ha spiegato, sta andando più lenta di quanto si aspettasse, perché l'economia reale ha inerzia: le aziende non cambiano processi alla velocità con cui escono i modelli. E ha spostato la sua stima sull'intelligenza artificiale generale alla fine del 2028, aggiungendo che fare bene la sicurezza conta più della corsa di qualunque azienda.

Non è solo una dichiarazione. Ha detto che OpenAI ha messo in pausa una parte dell'addestramento di frontiera per adeguarsi a nuovi standard interni di allineamento e sorveglianza. Ha ridefinito l'azienda come una piattaforma e non come un produttore di prodotti — calcolo, ricerca, chip, centri dati — e secondo le ricostruzioni giornalistiche alcuni prodotti sono stati chiusi proprio per liberare risorse di calcolo. Nel frattempo ha annunciato un chip proprio, dicendo che è veloce, e ha descritto un assistente che, col permesso dell'utente, potrà osservare schermo, riunioni, posta e documenti.

È una posizione evoluta rispetto a poche settimane fa. Prima c'era un'intenzione generica di andare più piano. Adesso c'è un'ammissione con una data.

La cosa che trovo notevole è la forma dell'errore. Non ha sbagliato sulla capacità: ha sbagliato sulla velocità con cui il mondo l'avrebbe assorbita. È lo scarto classico di ogni infrastruttura. Nell'Ottocento le compagnie ferroviarie britanniche posarono migliaia di chilometri di binari prima che ci fossero i passeggeri per riempirli: molte fallirono, i binari rimasero, e vent'anni dopo erano la spina dorsale del paese. La tecnologia era pronta; le abitudini no.

Quello che rende questa ammissione interessante è che arriva mentre Karpathy mostra due ore di lavoro autonomo e DHH dice di non scrivere più codice. La capacità c'è. Ad essere lenta è la sostituzione delle abitudini. E le abitudini, storicamente, sono l'unica cosa che non si può accelerare comprando calcolo.

---

Jack Clark è uno dei fondatori di Anthropic e si occupa della parte che raramente finisce sui titoli: le politiche pubbliche. Ogni settimana scrive Import AI, una lettera in cui commenta quello che sta succedendo nella ricerca.

Nel numero uscito il 24 agosto ha messo insieme cose apparentemente distanti: nessun diritto per le macchine, la generazione automatica degli ambienti in cui gli agenti si allenano, e miglioramenti nel modo in cui il calcolo viene spremuto dalle schede grafiche. La settimana prima aveva parlato di intelligenza artificiale applicata alla scienza. Pubblicamente ha descritto così la traiettoria dei prossimi anni: dalle capacità di base si passa alla coerenza nel tempo e al rispetto delle norme, e da lì, tra il 2026 e il 2028, verso una forma di intuizione scientifica indipendente.

Ma il punto che ha ribadito con più insistenza è un altro, ed è la vera novità istituzionale della settimana: la misurazione dei sistemi da parte di terzi. Non l'azienda che certifica se stessa, ma ricercatori esterni che guardano dentro. E l'ha legato a un fatto concreto, non a un auspicio: un programma pilota che permette a ricercatori indipendenti di studiare, in forma protetta e resa anonima, come le persone usano davvero Claude.

Qui il filo della giornata si chiude. Simon Willison, che da mesi documenta il lavoro quotidiano con questi strumenti, sostiene che ormai generare codice sia diventato economico mentre rivederlo no: la revisione umana è il collo di bottiglia, e non cresce. Clark prende esattamente quel problema e lo sposta di piano: se non basta una persona a controllare, serve un'istituzione.

C'è un precedente che descrive bene il passaggio. Per gran parte dell'Ottocento le società certificavano i propri bilanci da sole, e i soci si fidavano. Poi sono arrivati i crolli, e con essi i revisori indipendenti: non perché gli imprenditori fossero diventati disonesti, ma perché la scala aveva reso l'autocertificazione priva di valore informativo.

E questo è il punto di attrito con Marc Andreessen, che sostiene che il pericolo principale sia proprio l'intervento normativo. Le due posizioni non sono simmetriche, però: Clark non chiede di vietare, chiede di guardare. Delegare è diventato facilissimo. Verificare è rimasto lento, artigianale e costoso. È lo scarto più importante di questa settimana.

---

Progetti da osservare, e questa volta parlano quasi tutti della stessa cosa: come si controlla ciò che si delega.

Thinkingbox è un ambiente di prova aperto rilasciato da Microsoft, e ha un'idea semplice: giudicare un agente non da quello che dichiara di aver fatto, ma dai dati che ha davvero modificato nel database. Su cinquecentosette compiti, il modello migliore riesce nel sessantacinque per cento dei casi al primo tentativo, ma solo nel venticinque per cento se lo fai ripetere venti volte. È la distanza tra riuscire e riuscire sempre, ed è la distanza che conta.

Inspect è lo strumento di valutazione dell'istituto britannico per la sicurezza dell'intelligenza artificiale, adottato ora anche da altri gruppi di verifica al posto dei loro. È l'attrezzatura concreta dietro la richiesta di misurazione indipendente di cui parlava Clark.

Buzz, di Block, è la piattaforma con cui Jack Dorsey mette insieme chat di squadra, codice e agenti, dando a ogni agente un'identità verificabile, permessi propri e una traccia firmata di quello che ha fatto. Un badge aziendale per il software.

La libreria llm di Simon Willison, arrivata alla versione 0.32, permette di parlare con qualunque modello dalla riga di comando e registra tutto: i passaggi di ragionamento, gli strumenti usati, la cronologia. Rende ispezionabile non solo cosa un modello ha risposto, ma cosa ha effettivamente fatto per rispondere.

Olmo 3, infine, è una famiglia di modelli davvero aperti: pesi, dati e ricette di addestramento pubblici. È la prova materiale dell'argomento di Luccioni — che per competere non servano per forza budget da centinaia di miliardi.

Cinque progetti, un'unica preoccupazione. Non stanno costruendo macchine più potenti. Stanno costruendo il registro.

---

Rimane in mente quel modello che lavora due ore da solo per costruire una montagna che nessuno gli aveva descritto, e la bolletta che quelle due ore hanno prodotto. Abbiamo imparato a chiedere alle macchine di lavorare a lungo molto prima di imparare a guardare cosa hanno fatto. Forse la domanda giusta per i prossimi mesi non è quanto sono brave, ma chi tiene il registro. È stato Signal Brief. Alla prossima.
