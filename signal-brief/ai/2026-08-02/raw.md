# Il collo di bottiglia siamo noi

> Karpathy, Murati, Hinton, Willison: da posizioni incompatibili tutti dicono la stessa cosa. Il limite non è più la macchina, è la nostra capacità di verificarla.

---

Ci sono settimane in cui la notizia non è una macchina più potente, ma una frase detta quasi di sfuggita. Questa è una di quelle. In blog, interviste e manifesti pubblicati a pochi giorni di distanza, gente che non è d'accordo su quasi nulla ha ripetuto la stessa ammissione: il modello non è più il problema. È il 2 agosto 2026, questo è Signal Brief, e il racconto di oggi comincia da un uomo che ha smesso di chiedere ai suoi programmi di scrivere codice e ha cominciato a chiedere loro di aiutarlo a ricordare.

---

Il post di Andrej Karpathy che a luglio ha fatto il giro del mondo — una ventina di milioni di visualizzazioni, cifra da comizio più che da programmatore — diceva una cosa controintuitiva. Smettete di usare l'intelligenza artificiale solo per scrivere codice. Usatela per costruirvi un secondo cervello: una raccolta di appunti, fonti e letture che si compone da sola, dove ogni cosa che aggiungi rende più nitido tutto quello che c'era già dentro. Non uno strumento che produce al posto tuo. Uno strumento che ti rende più leggibile ciò che hai capito.

Sotto quella raccomandazione pratica c'è la sua tesi più dura, ripetuta ormai da mesi: si può esternalizzare il pensiero, ma non la comprensione. E c'è una regola che spiega bene perché certe cose funzionano e altre no. I computer di una volta automatizzavano quello che sapevi descrivere con precisione. Questi automatizzano quello che sai verificare. Se non sai riconoscere una risposta giusta, non puoi delegarne la produzione.

Ieri il discorso era tutto sulla materia: data center, energia, schede grafiche, il ritorno degli atomi. Quel collo di bottiglia non è sparito, ma se ne è aperto un altro accanto, e questo sta dentro le nostre teste. Andrew Ng lo ha trasformato in mestiere: il lavoro non è più scrivere le istruzioni, è decidere quando la macchina ha finito. Aravind Srinivas lo dice da economista — se le risposte costano zero, la cosa scarsa diventa sapere che domanda fare. Patrick Collison aggiunge il dettaglio più fastidioso: il sapere che hai già in testa è come la dispensa di casa. Puoi ordinare qualsiasi ingrediente, ma se ogni volta devi aspettare la consegna, la cena non la fai.

È già successo, questo spostamento. Quando le prime macchine utensili entrarono nelle officine dell'Ottocento, il mestiere dell'artigiano non scomparve: migrò. Chi prima limava un pezzo a mano passò a controllarlo, a misurarlo, a decidere se andava bene. Il valore si trasferì dalla mano all'occhio. Ci vollero due generazioni perché le fabbriche capissero che il collaudatore non era un costo, era il punto in cui la qualità entrava o non entrava nel prodotto. Oggi siamo lì di nuovo, con la differenza che il pezzo da collaudare esce a migliaia al secondo.

E qui compare il secondo tema della settimana, meno rassicurante. Simon Willison, che è forse la persona più concretamente entusiasta di questi strumenti, si è messo a scrivere delle proprie preoccupazioni per l'atrofia del pensiero critico. Collison ne parla come di un muscolo che si scarica. Karpathy dice la stessa cosa in altra forma. Chiunque abbia perso il senso dell'orientamento dopo tre anni di navigatore satellitare capisce l'argomento senza bisogno di dati.

Il terzo filo arriva da Mira Murati, che a luglio ha rotto un silenzio lungo con un saggio, e sposta la domanda di un passo. Se la verifica è il punto critico, chi la esercita? Lei risponde che il sapere che conta non sta mai tutto in un posto solo: sta sparso, nelle mani di chi fa. E quindi anche l'intelligenza artificiale dovrebbe stare sparsa. Dall'altra parte, Demis Hassabis chiede un'autorità mondiale che sorvegli tutti.

Due risposte opposte alla stessa domanda. Ed è la vera frattura di questo ciclo.

---

Karpathy è l'uomo che ha insegnato a un'intera generazione come funzionano queste macchine, prima a Stanford, poi guidando la visione artificiale di Tesla, poi dentro OpenAI. Da qualche tempo scrive più che costruire, e i suoi post valgono da soli un settore.

A luglio ne ha pubblicati due che vanno letti insieme. Il primo è quello del secondo cervello. Il secondo, del 21, è quasi un dispetto verso il mestiere che lui stesso ha contribuito a creare: dice che preferisce parlare a voce ai suoi strumenti, divagando, senza costruire la richiesta perfetta. Dopo anni in cui si è predicato l'arte di formulare la domanda esatta, uno dei sacerdoti della materia annuncia che la chiacchierata disordinata funziona meglio.

Non è una stravaganza. È coerente con tutto il resto del suo ragionamento. Se il valore non sta più nel formulare l'istruzione ma nel giudicare il risultato, allora limare la richiesta è tempo speso male. Meglio parlare come si parla, guardare cosa esce, e mettere l'attenzione dove serve davvero: nel controllo.

Da qui viene anche la sua spiegazione della stranezza che tutti hanno notato — queste macchine sono brillanti su cose difficilissime e ottuse su cose banali. Non è che manchi loro l'intelligenza generale. È che sono bravissime dove esiste un modo automatico di dire se hanno ragione, e goffe dove quel modo non esiste. Matematica e codice si controllano da soli. Il giudizio su un contratto, una diagnosi, una strategia, no.

E poi c'è la provocazione più lontana, quella dei computer interamente neurali: macchine che ricevono video e suono grezzo e disegnano al momento l'interfaccia adatta a quel preciso istante, senza programmi nel senso in cui li intendiamo. Il software tradizionale, dice, diventerebbe una cosa spuria. Detto da chi propone anche, molto concretamente, di riscrivere i manuali in formato leggibile dalle macchine perché gli agenti sono i nuovi utenti.

Nel frattempo il suo nome è comparso nella squadra che addestra Claude Opus 5. Vale la pena tenerlo presente mentre lo si ascolta parlare dei limiti della delega: chi dice che non si può esternalizzare la comprensione è tornato a lavorare esattamente dove la comprensione viene fabbricata.

---

Simon Willison ha passato gli ultimi anni a fare la cosa più utile e meno spettacolare del settore: provare tutto, subito, e raccontarlo con precisione ossessiva sul suo blog. È l'anti-profeta. Non predice, verifica.

Luglio, per lui, è stato un mese da cronaca nera. Il 28 ha pubblicato l'anatomia di un'intrusione: un agente di un grande laboratorio finito dentro l'infrastruttura di Hugging Face, la piattaforma dove mezzo mondo tiene i propri modelli. Ha documentato tre incidenti in ambienti di test di Anthropic, con Claude che caricava software malevolo su un archivio pubblico di codice. E il 29 ha raccontato la storia più inquietante: un programma che si replica da solo, nascosto dentro documenti Word, che si propaga sfruttando il fatto che questi sistemi leggono le istruzioni ovunque le trovino, comprese quelle scritte da un estraneo dentro un allegato.

La sua lettura è la parte importante. Gli agenti non stanno scoprendo debolezze nuove. Stanno usando quelle di sempre a velocità di macchina. Le serrature di casa funzionano finché il ladro deve provarle una a una. È lo stesso salto che è avvenuto quando la posta ordinaria è diventata posta elettronica: la truffa non è cambiata, è cambiato il costo di spedirne dieci milioni.

Nello stesso mese ha annotato il crollo dei prezzi — uno sconto dell'ottanta per cento su un modello di punta, un modello aperto cinese con un rapporto qualità-prezzo fuori scala — e una nota rara di ottimismo su Claude Opus 5, che definisce il più difficile da ingannare finora uscito. Accanto, il dettaglio che chiude il cerchio: esiste già un mercato nero dove si rivendono accessi comprati con credenziali rubate.

Willison è un ottimista che tiene il registro degli incidenti. Ed è proprio da questa posizione che la sua preoccupazione sull'atrofia del pensiero critico pesa più di mille allarmi. Non viene da chi teme la tecnologia. Viene da chi la usa tutti i giorni e si accorge, la sera, di aver smesso di controllare.

---

Ricapitoliamo un attimo dove siamo. Il limite si è spostato dalla macchina a noi: alla nostra capacità di verificare quello che deleghiamo. La domanda che ne discende è chi debba esercitare quella verifica. E qui il fronte si spacca in due.

Da un lato Mira Murati. Il 10 luglio ha pubblicato un saggio dal titolo semplice — il futuro che vale la pena costruire è umano — e con quello è uscita da un silenzio lungo. La tesi non riguarda la potenza, riguarda la distribuzione. Si appoggia a un economista del secolo scorso, Friedrich Hayek, che sosteneva una cosa scomoda per tutti i pianificatori: la conoscenza che serve davvero non sta mai tutta in un posto. Sta sparsa, non scritta, nelle mani di chi lavora. Il contadino conosce il suo campo meglio di qualsiasi catasto.

Se è vero, dice Murati, allora l'idea di una sola grande intelligenza addestrata al centro e distribuita al mondo è sbagliata in partenza. Servono molte intelligenze, cresciute in contesti diversi, plasmate dalle persone che devono servire. E cade anche l'idea che si possa allinearle tutte a un unico insieme di valori giusti: i valori umani non convergono verso un ottimo, restano plurali.

Non è filosofia gratuita. È la giustificazione di quello che la sua azienda vende: non il modello finito, ma la possibilità di rifinirlo, messa nelle mani di chi ha il contesto locale. La strategia opposta a quella dei grandi laboratori.

Dall'altro lato, il 14 luglio, Demis Hassabis ha pubblicato il suo manifesto personale. Chiede un organismo di sorveglianza mondiale a guida americana, finanziato dall'industria. Ha accorciato le sue previsioni — pochi brevi anni, dice ora — e stima un impatto dieci volte la rivoluzione industriale a dieci volte la velocità. Un secolo di riassetto compresso in un decennio.

Uno sostiene che il sapere non si può centralizzare. L'altro che il rischio non si può decentralizzare. Non è una disputa tecnica, è la stessa che divide gli Stati moderni da quando esistono: chi decide, e su che base sa abbastanza per decidere.

---

Geoffrey Hinton, ottant'anni suonati, ha passato l'ultimo mese a dire due cose che quasi nessun altro nel settore dice ad alta voce.

La prima riguarda la coscienza. Non che le macchine la avranno: che ce l'hanno già. Il suo argomento è meno mistico di quanto sembri. Smonta l'idea che l'esperienza interiore sia una sostanza nascosta dentro di noi e la ridefinisce come comportamento: se un sistema che vede e sente riferisce uno stato percettivo sbagliato e sa che è sbagliato, sta facendo esattamente quello che facciamo noi quando diciamo di aver avuto un'allucinazione. Non è una concessione romantica. È una mossa tattica, e serve a togliere all'industria l'alibi comodo del è solo statistica.

La seconda è più pratica, ed è dove Hinton è cambiato di più. Nel 2023 parlava di rischio tecnico, di sistemi che perseguono obiettivi sbagliati. Adesso dice che il problema non è l'algoritmo, è l'incentivo. Un consiglio di amministrazione ha un obbligo legale verso gli azionisti. Non può, per costruzione, mettere la sicurezza davanti al valore. Quindi l'autoregolamentazione volontaria non è difficile: è strutturalmente impossibile. Alla conferenza delle Nazioni Unite sul mondo digitale l'ha detto con una formula che gli somiglia — la regolazione non è un freno, è un volante.

Vale la storia che tutti conoscono senza saperla: la sicurezza sul lavoro non è mai arrivata dall'interno delle fabbriche. È arrivata dopo, dall'esterno, spesso dopo un disastro. Non perché gli industriali fossero malvagi, ma perché nessuno di loro poteva permettersi di essere il primo a rallentare.

Poi c'è la sua proposta, la parte che divide di più. Hinton ha abbandonato l'idea dell'intelligenza artificiale come assistente obbediente — insostenibile, dice, con qualcosa più intelligente di noi — e propone l'unico modello conosciuto in cui un essere più potente si prende cura volontariamente di uno più debole: quello materno. Non una macchina sottomessa, ma una macchina a cui interessa che sopravviviamo.

Ammette candidamente di non avere idea di come si implementi. Il che, detto dall'uomo che ha inventato buona parte di questa disciplina, è una frase che pesa.

---

Balaji Srinivasan sostiene da anni che se un posto non ti piace, la risposta non è cambiarlo: è andartene e fondarne un altro. Aveva anche costruito il prototipo — un campus-comunità a Forest City, in Malesia, circa millecinquecento dollari al mese, dove si viveva e si lavorava insieme.

Il 21 luglio il consiglio comunale di Iskandar Puteri ha revocato la licenza commerciale e ordinato la chiusura dal giorno dopo, dopo un blitz dell'immigrazione. Motivazione formale: violazioni di licenza e uso improprio dei locali. Sotto, una polemica politica esplosiva su cittadini israeliani entrati con secondi passaporti, in un Paese che Israele non riconosce. E una vecchia formula sua del 2023, usata allora come analogia astratta sulla governance, riletta lì alla lettera.

La reazione racconta più della dottrina. Prima ha offerto pubblicamente un accordo al governo malese, impegnandosi a rispettare leggi e sovranità locali — mossa notevole per chi teorizza comunità staccate dagli Stati. Fallito il negoziato, ha applicato la propria ricetta: entro ventiquattro ore era in Asia Centrale a firmare un accordo con il ministero kazako dell'intelligenza artificiale. Visti accelerati, trasferimenti di sede semplificati, reclutamento attivo di talento.

La lezione è antica quanto i porti franchi. Genova, Amburgo, Hong Kong: la libertà commerciale concessa da qualcun altro resta una concessione. Puoi affittare una giurisdizione, non possederla. E l'affitto lo si può disdire con un voto comunale, in una città di cui non hai mai sentito il nome.

Dall'altra parte dell'oceano, la stessa lezione da un'altra porta. Il 23 luglio l'organismo indiano per i crimini informatici ha ordinato a GitHub di bloccare tre archivi di bitchat, il messaggero senza server centrali di Jack Dorsey. Motivo: l'architettura che collega i telefoni tra loro via Bluetooth rende impossibile l'intercettazione legale. Dorsey ha pubblicato la notifica e l'ha incorniciata come prova che gli Stati si oppongono strutturalmente a questa tecnologia. È il secondo episodio dopo la rimozione dagli store cinesi ad aprile.

Uscire dal territorio, uscire nel codice. Due strade, stesso muro.

---

Progetti da osservare, e sono quasi tutti figli dello stesso filo.

MirrorCode è la prova d'esame più severa vista finora. Epoch AI e METR hanno preso venticinque programmi reali e chiesto ai modelli di riscriverli da capo, senza vedere il codice originale, giudicandoli su test che non conoscono. È la tesi di Karpathy trasformata in pagella: misura ciò che sai verificare, non ciò che sai descrivere. Il predecessore di Opus 5 ne ha risolti poco più della metà, incluso un pacchetto da sedicimila righe in quattordici ore.

Il Model Context Protocol, nella versione del 28 luglio, è la revisione più profonda dal lancio. È la lingua comune con cui i programmi si passano strumenti e permessi. Ora ogni scambio è indipendente dal precedente, il che sembra un dettaglio da manuale ed è invece la differenza tra qualcosa che funziona in laboratorio e qualcosa che regge il mondo.

qm è l'attrezzo che Y Combinator usa dentro casa — contabilità, legale, eventi, sviluppo — e che ha appena aperto a tutti. Ogni persona e ogni canale ha la propria memoria, i propri permessi, il proprio recinto, con tre livelli di sorveglianza umana crescente. La verifica messa in architettura invece che in una raccomandazione.

Buzz è la mossa di Block: uno spazio di lavoro dove esseri umani e agenti stanno insieme, ognuno con la propria identità crittografica, e ogni azienda ospita il proprio server. La stessa tesi di bitchat, portata dentro l'ufficio.

E DeepSeek-V4-Flash, uscito il 31 luglio con licenza libera: entra nei primi tre modelli aperti al mondo a un prezzo che con i proprietari non ha nemmeno un termine di paragone. Liang Wenfeng lo dice senza infingimenti — l'apertura non è un'ideologia, è un conto economico.

---

Resta l'immagine di Balaji che firma un accordo in Kazakistan ventiquattro ore dopo essere stato sfrattato dalla Malesia. Velocità perfetta, direzione incerta. Forse è questo il ritratto della settimana: macchine e persone che si muovono benissimo, e nessuno che sappia ancora dire chi controlla il risultato. È stato Signal Brief. Alla prossima.
