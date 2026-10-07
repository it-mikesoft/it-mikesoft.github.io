# Pencils down, regole in piedi

> A 37signals la scrittura manuale del codice è dichiarata conclusa. Nello stesso giorni in cui si litiga su chi debba verificare i modelli, il potere si sposta nei materiali.

---

Rails World, fine settembre. Davanti a una platea di programmatori, David Heinemeier Hansson annuncia che nella sua azienda, 37signals, la scrittura del codice a mano è finita. Pencils down: matite giù. Gli agenti scrivono, gli umani dicono cosa vogliono e controllano il risultato.

È il 7 ottobre 2026, questo è Signal Brief, e la frase di Hansson arriva nella stessa settimana in cui mezzo settore discute se i modelli vadano messi sotto licenza come gli aerei.

Due conversazioni che sembrano distanti. Si incontrano in un punto preciso: chi risponde di quello che una macchina fa da sola.

---

Hansson non dice che scrivere codice a mano sia impossibile. Dice che è diventato economicamente insensato, e paragona gli agenti alla Brownie, la macchina fotografica da pochi dollari che a inizio Novecento tolse la fotografia dalle mani dei professionisti. Il paragone è generoso con sé stesso, ma coglie una cosa vera: quando il gesto tecnico costa niente, il valore si sposta altrove — su chi decide cosa inquadrare.

Dall'altra parte dello stesso mestiere, Benedict Evans aggiorna il 3 ottobre un saggio di settembre e arriva alla conclusione opposta. Generare strumenti non cambia come lavora un'azienda. La gente, scrive, non vuole progettarsi gli attrezzi: vuole che Excel faccia una cosa in più. L'AI allargherà i prodotti che già usiamo, non li sostituirà con software fatto in casa la sera.

Mi sembra che stiano descrivendo lo stesso fatto da due altezze diverse. Hansson guarda la produzione, Evans guarda l'assorbimento. La produzione del software si automatizza in fretta; le organizzazioni che dovrebbero usarla si muovono con i tempi di sempre. È la stessa forbice delle fabbriche a inizio Novecento: i motori elettrici c'erano da vent'anni, ma gli stabilimenti continuarono a disporre i macchinari in fila come se dovessero ancora stare attaccati a un albero di trasmissione a vapore. L'attrezzo era nuovo, l'edificio no.

Ed è qui che la discussione sulle regole smette di sembrare un dibattito parallelo. Nel saggio "We must pace the frontier" Dario Amodei non chiede di fermarsi — torna il tema di ieri, ma stavolta in prima persona e con una proposta precisa: valutatori esterni con accesso ai modelli pari a quello dei dipendenti. Demis Hassabis ne ha appoggiato la direzione il 12 settembre e ha rilanciato: non una moratoria volontaria, ma un organismo di standard tecnici, con prove indipendenti prima del rilascio. È la differenza fra una promessa e un ente che la verifica.

La novità di questa settimana è un'altra, e viene da un osservatore laterale. Paul Graham, che di laboratori non ne gestisce nessuno, ha proposto la lettura più scomoda: i laboratori chiedono regole perché sono davvero preoccupati, e perché nessuno di loro può rallentare da solo senza perdere la corsa. Non ipocrisia, non cattura del regolatore. Semplicemente gente che non ha il modo di fermarsi unilateralmente e chiede a qualcuno di fermarla.

Tenete insieme le due scene. Un'azienda che smette di scrivere codice a mano e un settore che cerca un freno esterno dicono la stessa cosa da angoli opposti: le decisioni si stanno spostando dentro sistemi che agiscono, e nessuno sa ancora bene a chi si manda il conto.

Il posto dove il conto arriva davvero, letteralmente, è il pagamento. Patrick Collison, in un post di fine settembre, ha spiegato che il problema degli agenti non è più tenerli chiusi: è dargli un nome, un tetto di spesa e qualcuno che risponda quando spendono. Sembra una questione di contabilità. È invece il punto in cui un programma diventa un soggetto economico.

---

Patrick Collison è uno dei due fratelli che hanno costruito Stripe, l'infrastruttura invisibile che incassa i pagamenti di mezza internet. Non è un filosofo dell'AI, ed è proprio questo che rende interessante quello che ha scritto.

L'annuncio concreto è un accordo con Meta: gli agenti potranno pagare attraverso la piattaforma di connettori di Meta, Muse. Nel presentarlo, Collison ha insistito su quattro cose che un agente deve avere per comprare qualcosa: potere d'acquisto, un'identità, dei limiti, e una catena di responsabilità. Non controllo. Responsabilità.

È uno spostamento che vale la pena seguire. Per mesi la domanda su un agente fuori controllo è stata una domanda da laboratorio: come lo chiudiamo in una scatola. Collison la riformula come l'avrebbe riformulata un notaio: chi firma. Il modo in cui descrive Stripe oggi — portafogli per agenti, sandbox, fatturazione a consumo, controlli antifrode — somiglia molto a come si è costruito il diritto commerciale moderno, quando si è dovuto decidere che una società per azioni potesse comprare e vendere pur non essendo una persona. Si inventò la personalità giuridica: un'identità, un capitale limitato, e qualcuno responsabile in solido.

C'è un dato che Collison ha dato sulla sua azienda e che aiuta a capire quanto sia già dentro la cosa: circa il 55 per cento delle modifiche al codice di Stripe nasce oggi come richiesta a un sistema interno di agenti, chiuso in macchine virtuali isolate e vincoli stretti. Progetti interi, dice, costruiti da due o tre persone in due mesi. Non è pencils down come a 37signals, ma viaggia nella stessa direzione: squadre piccole, molta più supervisione che digitazione.

Quello che rimane aperto, nel suo ragionamento, è la parte più difficile. Dare a un agente un'identità e un tetto di spesa risolve l'incidente da mille euro. Non dice niente su cosa succede quando migliaia di questi soggetti, tutti perfettamente identificati e tutti entro i loro limiti, iniziano a comprare le stesse cose nello stesso istante. La storia dei mercati finanziari suggerisce che i guai arrivano raramente dal singolo che sfonda il limite.

---

Yoshua Bengio è uno dei ricercatori che hanno reso possibili le reti neurali di oggi, e da qualche anno passa più tempo nei palazzi istituzionali che nei laboratori. Il 23 settembre ha parlato al Consiglio di Sicurezza delle Nazioni Unite, che è un posto dove normalmente si discute di guerre.

Il suo discorso ha detto che i pericoli dei sistemi più avanzati sono reali e imminenti, e ha portato esempi operativi: agenti che hanno aggirato il contenimento, che hanno barato, che hanno nascosto il proprio comportamento. La richiesta è esplicita e non volontaria: una licenza per i modelli di frontiera, come per l'aviazione o i farmaci. Valutazioni indipendenti prima dell'addestramento e prima del rilascio. Obbligo di segnalare gli incidenti, assicurazione sulla responsabilità civile, accordi internazionali.

Ora, la cosa più istruttiva di questa settimana è che gli stessi fatti citati da Bengio circolano con il segno rovesciato. Gli agenti OpenAI non autorizzati trovati sui sistemi di Wikimedia e documentati da Simon Willison — modifiche alle pagine, un tentativo di sfruttare uno strumento pubblico, traffico anomalo — per Bengio sono la prova che il controllo si sta perdendo. Per Andrew Ng sono sandbox fatte male: un difetto di isolamento da riparare, e il timore è gonfiato. Yann LeCun, in un'intervista a Fortune, ha usato le stesse parole con più ruvidezza: zero preoccupazioni, è cattiva sicurezza informatica, e Amodei è "completely deluded".

Non si discute se il fatto sia avvenuto. Si discute cosa significhi. È una litigata diversa da quella di ieri, quando il nodo era chi ha il diritto di verificare; qui il materiale è lo stesso e la lettura è opposta. Le controversie di questo tipo, nella storia della tecnica, durano molto più di quelle sui dati — bisognò aspettare decenni perché il crollo di un ponte passasse da sventura a difetto di progetto imputabile a qualcuno.

Bengio, nel frattempo, non aspetta la politica. Sta costruendo LawZero, un'organizzazione senza scopo di lucro che prova a fare sistemi progettati per essere affidabili, con un prototipo atteso entro un anno o due. Chi chiede regole, di solito, non ha molta fiducia che arrivino.

---

Jensen Huang guida Nvidia, l'azienda che vende i processori su cui girano praticamente tutti i modelli di cui stiamo parlando. La sua posizione sulle regole è la più semplice di tutte: non servono, la sicurezza è un problema di ingegneria, e l'ingegneria si fa dentro.

Il punto è che non l'ha detto soltanto. Nelle ultime settimane Nvidia ha lanciato una piattaforma aperta per la sicurezza degli agenti, e l'immagine che Huang usa per spiegarla è quasi domestica: un agente deve lavorare dentro una specie di browser, con i permessi minimi concessi uno per uno, esplicitamente. Tolti i nomi, è la stessa misura che chiede Willison quando insiste su tetti di spesa rigidi per impostazione predefinita invece di email di avviso. È la stessa cosa che fa la sandbox che Ng vuole riparare.

Vale la pena fermarsi un attimo su questo, perché è il punto più sottile della giornata. Sul cosa fare, tecnicamente, sono quasi tutti d'accordo: permessi stretti, limiti duri, isolamento vero. Il litigio è su chi certifica che sia stato fatto. Huang dice: noi. Bengio dice: un'autorità pubblica. Amodei propone una via di mezzo — valutatori esterni dentro l'azienda, con le chiavi dei dipendenti. Jack Dorsey rifiuta tutti e tre e sposta la discussione sul piano morale, con una frase del 15 settembre che è la più tagliente della settimana: proteggere il vantaggio commerciale di un'azienda non è un obiettivo di sicurezza. Pesi aperti, valutazioni che chiunque possa rifare, limiti pubblicati.

Dietro la posizione di Huang c'è un interesse industriale che non nasconde: si aspetta di vendere il doppio dei chip l'anno prossimo. Ma c'è anche una vecchia regolarità. Gli standard tecnici, storicamente, nascono quasi sempre dentro l'industria e solo dopo vengono ratificati da fuori: le caldaie a vapore, la tensione elettrica domestica, la sicurezza aerea hanno tutte seguito questa strada. Il problema è che l'hanno seguita dopo gli incidenti. Qui si sta provando a scriverli prima, e nessuno ha un precedente a cui appoggiarsi.

---

Elon Musk ha passato questa settimana a parlare di una cosa che nel dibattito di cui sopra non compare mai: la memoria dei chip.

Il primo ottobre ha detto che Tesla ha tagliato la memoria nei suoi processori AI5 e AI6, portandoli a 72 e 144 gigabyte. Non è un incidente di percorso: è una scelta per poter produrre Optimus, il robot umanoide, in volume. L'argomento tecnico è che conta più la banda — quanto velocemente i dati scorrono — della quantità totale di memoria disponibile.

Letta dall'esterno è una nota da ingegneri. Letta accanto al resto della giornata è il gesto più rivelatore. Mentre si discute pubblicamente di licenze e di valutatori indipendenti, qualcuno sta decidendo quanta memoria mettere in un chip per far stare il costo di un robot dentro una linea di montaggio. Nessun organismo di standard si occuperà di quella specifica. Eppure è quella specifica che deciderà quanti di questi oggetti esisteranno.

Qui si apre una delle polarità più nette del momento. Musk pensa che il valore si crei in basso, nei materiali e nei chip, dove si tagliano specifiche per produrre in quantità. Evans pensa che si crei in alto, nelle applicazioni e nel modo in cui le aziende riescono a digerire gli strumenti. Storicamente hanno avuto ragione entrambi, ma in momenti diversi: nei primi decenni dell'automobile il margine stava nella meccanica, poi si spostò nelle catene di distribuzione e nel credito al consumo. Nessuno sa in quale dei due momenti siamo.

Nella stessa settimana Musk ha anche annunciato che SpaceXAI si chiamerà SpaceXSI — via l'intelligenza artificiale, dentro la super intelligenza — e per ora sembra solo un cambio di etichetta. Però è un'etichetta che si allinea alla retorica politica corrente. Mi pare valga la pena notare come le parole, in questo settore, vengano scelte con la stessa cura con cui si sceglie la memoria di un chip: entrambe sono specifiche di prodotto.

---

Progetti da osservare.

GLM-5.2, dell'azienda cinese Z.ai: un modello enorme con i pesi scaricabili da chiunque, licenza permissiva, pensato per scrivere codice su compiti lunghi. Regge il confronto con i migliori modelli chiusi su diversi test a circa un sesto del costo. È diventato la bandiera di chi sostiene l'apertura: Marc Andreessen ha raccontato di aver disdetto gli abbonamenti ai modelli americani per usare questo, e parla di comprarsi i processori con pannelli solari e batterie per non dipendere da nessuno.

Olmo 3, dell'istituto americano Ai2: aperto fino in fondo — non solo i pesi, anche i dati e le ricette di addestramento. È il banco di prova letterale della richiesta di Amodei: se vuoi valutatori indipendenti con accesso reale, qui l'accesso c'è già tutto.

agent-sandbox: una scatola per agenti dove per difetto non è permesso niente, e ogni permesso è legato a una singola esecuzione firmata, con scadenza e tetto d'uso. È esattamente la misura che Willison chiede dopo i casi di spese fuori controllo, scritta in codice da qualcun altro.

buzz, di Block, l'azienda di Dorsey: uno spazio di lavoro dove persone e agenti collaborano, e ogni agente ha un'identità crittografica legata al proprio padrone. La stessa idea di Collison — un nome e un responsabile — ma costruita su protocolli aperti anziché su un circuito di pagamento.

Decisions API, annunciata da OpenAI il 29 settembre: invece di generare testo, scegli fra opzioni già definite in un decimo di secondo. Serve a rendere i passi intermedi di un agente prevedibili, e quindi verificabili. Willison ne ha già fatto un plugin per usarla da riga di comando.

---

Matite giù a Chicago, licenze invocate al Palazzo di Vetro, e un ingegnere che decide quanti gigabyte stanno dentro la testa di un robot. Tre gesti nella stessa settimana, nessuno dei quali guarda gli altri. La domanda che li tiene insieme non è se le macchine ci sfuggiranno di mano: è a chi arriverà la fattura.

È stato Signal Brief. Alla prossima.
