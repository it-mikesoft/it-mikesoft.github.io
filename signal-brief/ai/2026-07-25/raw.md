# Molte AI contro una sola

> Il baricentro del dibattito si sposta: non più cosa sa fare l'AI, ma chi la verifica, chi cattura il margine e chi la controlla.

---

Il ventiquattro luglio Jensen Huang, l'uomo che vende le pale a tutti i cercatori d'oro dell'intelligenza artificiale, ha scritto il suo primo messaggio in assoluto sul social di Elon Musk. Non un saluto, non una foto. Una lettera aperta firmata da venticinque aziende, per difendere i modelli AI liberi e apribili da chi vorrebbe chiuderli a chiave. Nello stesso giorno, a migliaia di chilometri di distanza, il governo indiano chiedeva a GitHub di cancellare tre pezzi di codice di una piccola app usata dagli studenti in protesta. Due gesti lontanissimi, la stessa domanda sotto: chi tiene in mano questa tecnologia, uno solo o molti?

---

Cominciamo da una frase che Andrej Karpathy ha ripetuto in questi giorni, e che vale la pena tenere ferma per tutto l'episodio: i computer automatizzano ciò che sai scrivere in codice, i modelli linguistici automatizzano ciò che sai verificare. Detta così sembra un aforisma. In realtà è una piccola bomba, perché sposta il centro di gravità di tutto il settore. Per anni la domanda è stata: quanto bene sa generare, questa macchina? Testo, immagini, codice. Adesso la generazione è considerata un problema quasi risolto. Il collo di bottiglia si è spostato più in là, verso una cosa più umile e più difficile: capire se quello che la macchina produce è giusto.

Questo cambio è ovunque, in questo Signal Brief del venticinque luglio. Karpathy lo racconta con un'immagine che rimane addosso: i modelli non sono animali, con istinti e motivazioni, sono fantasmi. Simulazioni statistiche senza volontà propria. E come tutti i fantasmi, sono bravissimi in certe stanze e inaffidabili in altre. Dove esiste un modo chiaro di misurare se la risposta è corretta — il codice che gira, il teorema che torna — brillano. Dove il giudizio è sfumato, vacillano. François Chollet e Ilya Sutskever, da posizioni diverse, dicono la stessa cosa: i modelli sono splendidi nei test e fragili nella vita vera, e proprio quella distanza è il sintomo che manca ancora qualcosa di fondamentale.

C'è un precedente storico che aiuta a collocare tutto questo. Pensate alle fabbriche di fine Ottocento, quando arrivò l'elettricità. All'inizio bastava sostituire il grande motore a vapore centrale con un grande motore elettrico, e sembrava già una rivoluzione. Ma il vero salto arrivò anni dopo, quando qualcuno capì che si potevano mettere tanti piccoli motori, uno per ogni macchina, e riprogettare l'intera catena di montaggio. Il valore non era nel motore. Era in come lo si organizzava intorno al lavoro. Oggi succede la stessa cosa: diversi osservatori, da Benedict Evans a Nat Friedman, dicono che il modello in sé è destinato a diventare una merce, un motore che costa sempre meno. Il valore migra a valle, in come lo si incastra nei processi di un'azienda, di un ospedale, di uno studio legale.

E qui il racconto si biforca in due direzioni che daranno il tono a tutta la giornata. Da una parte c'è chi immagina un'unica grande intelligenza centrale, addestrata da pochissime aziende, protetta da fabbriche di calcolo grandi come città. Dall'altra chi immagina molte intelligenze piccole, personali, private, plasmate da chi le usa. Mira Murati la mette così: il futuro buono ha molte AI, cresciute in luoghi diversi. È la vecchia tensione tra centro e periferia, tra il potere che si concentra e il potere che si sparpaglia. La stessa che attraversa la storia della stampa, della radio, di Internet. Ogni volta torna, e ogni volta si decide chi tiene la leva. Oggi la vediamo comparire, molto concreta, nei gesti di cinque persone.

---

Andrej Karpathy è stato per anni una delle voci più ascoltate dentro OpenAI e Tesla, il tipo di ingegnere che spiega cose difficili senza farti sentire stupido. Oggi lavora per conto suo, e i suoi post sono diventati una specie di bussola per il settore.

In queste settimane ne ha pubblicati alcuni che hanno fatto il giro del mondo — uno ha superato i venti milioni di visualizzazioni. Il consiglio, in sé, è quasi banale: smettete di usare l'intelligenza artificiale soprattutto per scrivere codice, e usatela per costruire un secondo cervello. Una raccolta di conoscenza dove ogni cosa che aggiungi rende più nitido tutto quello che c'era già. Il valore non è nel singolo testo prodotto, ma nella comprensione che si accumula. Poi, il ventuno luglio, un'osservazione ancora più spiazzante: parlare a voce a questi modelli, anche con pensieri disordinati e a metà, funziona meglio del prompt perfetto, limato parola per parola. La macchina ormai sa mettere ordine da sola. Con calma, Karpathy sta dicendo che l'arte di scrivere comandi perfetti — su cui in tanti hanno costruito corsi e carriere — vale già molto meno di ieri.

Il filo che tiene insieme tutto questo è quella sua legge sulla verifica. Se i modelli automatizzano solo ciò che sai controllare, allora la parte umana non sparisce: si sposta. Da chi produce a chi dirige e giudica. Karpathy usa un'espressione bellissima, intelligenza frastagliata: capacità altissime accanto a buchi improvvisi, come una costa fatta di scogliere e insenature invece che di spiaggia liscia.

Vale la pena notare quanto sia sobrio, il tono. Nessun annuncio di apocalisse, nessuna promessa di paradiso. Un ingegnere che dice: la generazione è risolta, il pensiero no. Ed è proprio questa freddezza a renderlo interessante, in un dibattito dove quasi tutti gli altri alzano la voce. Mentre il resto del settore si divide tra chi promette miracoli e chi teme catastrofi, lui tiene lo sguardo sul banco di lavoro. E il banco di lavoro, dice, non mente mai.

---

Mira Murati è stata a lungo il numero due di OpenAI, la persona che teneva insieme la macchina mentre intorno tutto ribolliva. Poi se n'è andata e ha fondato un suo laboratorio, Thinking Machines. In questi giorni ha smesso di essere una promessa e ha mostrato le carte.

Il dieci luglio ha pubblicato un testo che è quasi un manifesto: il futuro che vale la pena costruire è umano, l'AI deve allargare la volontà e il giudizio delle persone, non prenderne il posto. Fin qui, parole. Ma il quindici luglio sono arrivati i fatti, sotto forma di un modello vero, chiamato Inkling. La cosa notevole non sono i numeri, pur enormi. È la scelta di renderlo aperto e apribile, e soprattutto una funzione precisa: questo modello, quando non è sicuro, lo dice. Segnala la propria incertezza invece di rispondere con la stessa spavalda sicurezza a qualsiasi domanda.

Fermiamoci un attimo su questo, perché parla direttamente al filo di oggi. Se il problema del momento è la verifica — capire quando fidarsi della macchina — un modello che ammette i propri dubbi è esattamente lo strumento giusto per il problema giusto. È la differenza tra un collaboratore che ti dice sempre di sì e uno che ogni tanto alza la mano e dice: qui non sono sicuro, controlla. Il secondo vale molto di più, perché ti risparmia i disastri.

La tesi di fondo di Murati è un attacco frontale all'idea dell'unico grande modello. Un'intelligenza addestrata da una sola azienda e poi fissata nel marmo, dice, sarà sempre peggiore di una che le organizzazioni possono modellare sui propri bisogni. È la forza centrifuga di cui parlavamo: non una cattedrale, ma tante botteghe. Viene in mente la differenza tra il grande calcolatore centrale degli anni Settanta, chiuso in una stanza refrigerata a cui pochi avevano accesso, e il personal computer che arrivò dopo, sul tavolo di casa. Murati sta scommettendo che la storia, anche stavolta, spinga verso il tavolo di casa.

---

Torniamo un attimo sul filo di oggi, prima di proseguire. Da una parte la verifica come nuova cosa scarsa, dall'altra il braccio di ferro tra un'unica AI centrale e molte AI diffuse. Jensen Huang, questa settimana, si è schierato senza mezzi termini sul secondo fronte. Ed è una notizia, perché di solito Huang vende a tutti e non prende partito.

È l'uomo di Nvidia, l'azienda che costruisce i chip su cui gira praticamente ogni modello di intelligenza artificiale del pianeta. Quando parla lui, si muovono i mercati. Il ventiquattro luglio ha rotto un silenzio lungo una vita e ha scritto per la prima volta sul social di Musk, per rilanciare una lettera aperta contro le proposte americane di limitare i modelli liberi e apribili. L'argomento è tutto storico, ed è per questo che colpisce. Negli anni Ottanta, ricorda, il software open source — quello che chiunque può leggere e modificare — veniva descritto come un pericolo per la sicurezza. Oggi è la fondazione invisibile su cui poggia tutta Internet. La stessa storia, dice Huang, si sta ripetendo con l'AI.

Pochi giorni prima, in piena paura per l'arrivo dei potenti modelli cinesi, aveva definito quei modelli eccellenti e da usare, non da temere. La logica è netta: i modelli aperti evitano che pochissime aziende tengano tutto in pugno, danno accesso alle università e alle piccole imprese, e sono più sicuri proprio perché migliaia di ricercatori possono ispezionarli. Meglio mille occhi che controllano, dice in sostanza, di una sola cassaforte chiusa.

Qui la tensione si fa quasi ironica. Perché Huang costruisce i chip più desiderati e costosi del mondo, quelli che permettono di alzare quelle fabbriche di calcolo grandi come città. Eppure difende l'apertura, la diffusione, il potere sparpagliato. Un venditore di pale che tifa perché l'oro sia di tutti. La spiegazione, se ci si pensa, è semplice: a chi vende pale conviene che scavino in tanti, non in pochi. Ma al di là del suo interesse, resta il gesto: il primo messaggio di una vita speso per dire che questa tecnologia non deve appartenere a nessuno in particolare.

---

Dall'altra parte dell'oceano, e con tutt'altro stile, Jack Dorsey sta raccontando la stessa storia della decentralizzazione, ma portata all'estremo. Dorsey ha fondato Twitter e poi l'ha lasciata dietro di sé; oggi la sua ossessione è costruire strumenti che nessun governo e nessuna azienda possano spegnere.

Il ventiquattro luglio ha reso pubblica su X una notizia che avrebbe potuto tenere riservata: l'autorità indiana contro il cybercrimine aveva ordinato a GitHub di rimuovere tre pezzi di codice di Bitchat, un'app di messaggistica che funziona saltando da un telefono all'altro via Bluetooth, senza server e senza registrazione. La usavano gli studenti di Delhi durante le proteste, quando la rete veniva staccata. La motivazione del governo è quasi un complimento involontario: quel disegno decentralizzato rende impossibile intercettare i messaggi. Dorsey ha scelto di gridarlo invece di trattare in silenzio, trasformando la censura nella prova che il progetto funziona.

C'è un collegamento diretto con il resto della giornata. La stessa forza che spinge Murati verso molte AI e Huang verso i modelli aperti, Dorsey la porta nel campo della comunicazione: niente centro, niente punto su cui un'autorità possa premere. Lo stesso giorno, o quasi, confermava che i negozi che usano il suo sistema di pagamento cominceranno ad accettare Bitcoin come moneta vera per comprare il pane, non come riserva su cui speculare.

La cosa che resta, guardando Dorsey, è quanto la sua posizione si sia irrigidita nel tempo. Ai tempi di Twitter voleva riformare la piazza pubblica, renderla migliore. Adesso non vuole più riformare niente: vuole costruire piazze che nessuno possa chiudere. È il passaggio da chi cerca di aggiustare la casa a chi decide di costruirla senza serratura. Un'idea affascinante e scomoda insieme, perché una porta senza serratura tiene fuori il censore ma anche il poliziotto. E questo, sullo sfondo, è il vero nodo irrisolto di tutta la spinta verso il potere diffuso.

---

Qualche progetto da osservare, e non è un caso che quasi tutti raccontino la stessa cosa dei capitoli di oggi.

Il primo è nanochat, di Karpathy: un modello linguistico ridotto all'osso, pensato perché una persona sola possa capirne ogni pezzo e farlo girare senza una fabbrica di calcolo alle spalle. È la decentralizzazione fatta didattica: l'AI che entra in una stanza piccola. Continua a crescere di settimana in settimana, e non stupisce, visti i temi di questi giorni.

Accanto, sempre dallo stesso autore, c'è una raccolta di appunti su come costruire quel secondo cervello di cui parlavamo, e uno strumento per fare ricerca in autonomia. Tre progetti che dicono la stessa cosa: usare la macchina per accumulare comprensione, non solo per sfornare testo.

Poi c'è Obsidian, un programma per prendere note che tiene tutto sul tuo computer, non su un server lontano. È il posto naturale dove quel secondo cervello prende forma, e la sua crescita costante racconta un bisogno diffuso: tenersi le proprie idee in casa, sotto il proprio controllo.

C'è llama punto cpp, un progetto che permette di far girare modelli potenti su un portatile normale, senza collegarsi a nessuna nuvola. Detto a un amico non tecnico: è ciò che rende possibile l'AI in casa, quella scatola grande come un frigorifero che Aravind Srinivas immagina nei nostri salotti. Anche questo è la forza centrifuga tradotta in codice.

E infine ARC-AGI, di François Chollet: non un prodotto ma una palestra di test, fatta per misurare non quanto un modello sa già, ma quanto in fretta impara qualcosa di mai visto. È l'altra metà del filo di oggi: se il problema è la verifica, servono modi nuovi e più onesti di verificare. Chollet sta costruendo proprio quel metro. Tutti progetti già noti, tutti in crescita silenziosa, tutti tirati dalla stessa corrente.

---

Resta l'immagine di Huang che, dopo una vita di silenzio, spende il suo primo messaggio pubblico per dire che questa tecnologia non deve appartenere a nessuno. E resta la macchina che, per la prima volta, alza la mano e ammette di non sapere. Forse il segno di maturità di un'epoca non è quando promette tutto, ma quando comincia a dirti di cosa dubita. È stato Signal Brief. Alla prossima.
