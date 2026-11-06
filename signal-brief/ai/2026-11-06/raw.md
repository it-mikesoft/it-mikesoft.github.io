# Il piano di sotto

> Gli agenti smettono di essere un modo di lavorare e diventano infrastruttura, con hardware e sistema operativo. E mentre la capacità si diffonde, il controllo resta in pochissime mani.

---

Il 5 novembre, a Berlino, Jensen Huang è salito su un palco e ha detto una frase che suona tecnica e invece è politica: gli agenti sono la prossima piattaforma di calcolo. Non un modo di usare i computer. Una piattaforma, come lo è stato il personal computer, come lo è stato lo smartphone.

È il 6 novembre 2026, questo è Signal Brief.

Ieri il filo era lo spostamento del collo di bottiglia dalla produzione al giudizio. Oggi quel filo scende di un piano: sotto il giudizio, qualcuno sta posando il cemento.

---

Partiamo dal gesto più concreto della settimana. Il 5 novembre Aravind Srinivas, che guida Perplexity, ha presentato Teammates: agenti personali a cui non si fa una domanda, si dà un obiettivo. Centosessantasette dollari al mese, per ora solo agli utenti Max via web. Vale la precisazione: il lancio verificato riguarda Perplexity Computer, la piattaforma che spezza un obiettivo in pezzi e li manda avanti in parallelo. Teammates è l'etichetta commerciale di quella stessa idea.

Nello stesso giro di giorni, Nat Friedman — oggi responsabile di prodotto dentro i laboratori di superintelligenza di Meta — ha portato avanti Muse, un agente che non si spegne quando chiudi la finestra: resta lì, ricorda, agisce. E a ottobre ha fatto una cosa che sembra minore e non lo è: ha rilasciato Muse Gadgets, firmware aperto per microcontrollori e un kit per Linux, più cinquemila unità di un dongle USB per far parlare l'agente con le cose di casa. Meta ha anche comprato Conductor, una startup di programmazione agentica che fa lavorare più agenti in parallelo.

E DHH, il creatore di Ruby on Rails, non parla più di codice assistito. Parla di Omarchy come di un sistema operativo per agenti, che gira su computer, tablet e televisori, e lo dimostra con l'intelligenza artificiale in locale: novanta parole al secondo su una macchina sotto la scrivania, mentre l'agente diagnostica da solo un problema di sospensione del sistema.

Metti in fila questi tre gesti e vedi la forma. Il prodotto agentico, l'agente che non dorme con il suo hardware, il sistema operativo. Ecco cosa è cambiato dal briefing di ieri: fino a ieri gli agenti erano un modo di lavorare. Da questa settimana sono uno strato, con ferro e software di base dedicati.

Questa cosa l'abbiamo già vista. Negli anni Novanta il web era un'applicazione che girava sopra qualcos'altro. Poi è diventato il piano su cui tutto il resto veniva costruito, e chi possedeva browser, server e cavi ha incassato per vent'anni. Il passaggio da applicazione a infrastruttura è sempre il momento in cui cambia chi guadagna.

Solo che qui il conto arriva subito. Il primo novembre Elon Musk ha ammesso pubblicamente che servire il bot di Grok è diventato insostenibilmente costoso rispetto a quello che incassa, dopo aver tagliato i limiti d'uso. Non il costo di addestrare il modello: il costo di farlo rispondere. Benedict Evans, che osserva queste economie da anni, descrive la stessa tenaglia: la domanda di calcolo esplode, i prezzi scendono, i margini si assottigliano. E Jack Dorsey, il 25 ottobre, ha scritto tre parole senza spiegarle: non esiste nessun fossato.

Tre persone che costruiscono infrastruttura e tre che ne contano il prezzo. Non si contraddicono: stanno descrivendo le due facce dello stesso mattone.

Poi c'è chi dice che stiamo posando cemento nel posto sbagliato. Il primo novembre Yann LeCun ha sostenuto che un modello da centonove milioni di parametri batte modelli da settanta miliardi nel mettere in corrispondenza testo e immagini. Non è un argomento di risparmio, come era qualche mese fa. È diventato un argomento su cosa sia l'intelligenza: accumulare o capire. François Chollet e Fei-Fei Li spingono dalla stessa parte, verso un'intelligenza che tocca il mondo fisico. All'opposto, Ilya Sutskever e Jack Clark scommettono dichiaratamente sulla scala: ancora salti improvvisi, ancora presto.

E in mezzo, Andrej Karpathy fa notare una cosa scomoda.

---

Karpathy è uno dei pochi che può parlare dei due estremi della scala: ha costruito l'intelligenza artificiale dentro Tesla, ha insegnato a mezzo mondo come funzionano le reti neurali, e nel tempo libero continua a fabbricare cose.

L'ultima è HackerTube. Ha preso quarantatré milioni di commenti di Hacker News, ne ha estratto i seimilaquattrocentocinquantaquattro video raccomandati più volte, e ci ha costruito un sito in stile YouTube. Tempo di realizzazione: circa due ore, delegando a Claude ricerca, pulizia dei dati, pubblicazione e sicurezza. Poi ha rilasciato i dati perché altri ci giochino. Questa parte la conosciamo da ieri.

La parte nuova è il conto che ha fatto subito dopo. Karpathy stima che circa tre persone su quattro, nel mondo, non abbiano praticamente mai usato un modello linguistico. Uno o due miliardi lo usano come chat, di tanto in tanto. Venti milioni di professionisti ne ricavano un vantaggio serio. E circa cinquemila persone — cinquemila — hanno accesso ai sistemi interni di frontiera.

Non è una classifica di adozione. È la descrizione di un mondo che si sta sfilacciando per tipo di compito: la stessa tecnologia sembra mediocre a chi la usa per chiacchierare e trasformativa a chi la usa su lavoro digitale, verificabile, di valore. E qui arriva l'osservazione che sposta la giornata: la comprensione umana di quello che viene prodotto resta indietro rispetto alla complessità di ciò che viene prodotto. Il divario si allarga.

È un cambio di posizione rispetto a pochi giorni fa. Karpathy era l'entusiasta della delega: non scrivo più codice, non scrivo più comandi, gli agenti fanno. Ora aggiunge una riga a quella stessa frase: gli agenti fanno, e io faccio più fatica a capire cosa hanno fatto.

DHH, sullo stesso problema, prende la strada opposta e la dichiara: smettere di rileggere ogni riga generata, perché pretendere di controllare tutto è il residuo di un modello di sviluppo che non c'è più. Due persone che guardano lo stesso divario. Uno lo chiama allarme, l'altro lo chiama maturità.

Mi sembra che la differenza non sia di ottimismo ma di mestiere. Chi gestisce un'azienda deve decidere come si lavora domani mattina. Chi guarda la tecnologia da fuori può permettersi di dire che non abbiamo ancora gli strumenti per capire cosa stiamo firmando.

---

Nat Friedman per anni è stato l'uomo che compra: ha guidato GitHub dentro Microsoft, poi ha investito in mezza Silicon Valley e commentato il resto. Da quest'anno costruisce, dentro Meta.

La scena concreta è il prodotto. Muse non è un assistente a cui chiedi le cose: è un agente che sta accesso, ricorda, e agisce — accompagnato da Muse Spark e Muse Code per la programmazione, con modelli di frontiera annunciati. Friedman ha raccontato di essersi convinto dei "personal agents" al punto di comprare dei Mac mini, piccoli computer da tenere in casa, perché l'agente abbia dove vivere.

E qui si capisce perché Muse Gadgets, uscito a ottobre, è il pezzo più interessante: firmware aperto per chip economici, un kit di sviluppo per Linux, e un dongle da collegare alla porta USB per far comandare all'agente i dispositivi di casa. Cinquemila unità pianificate. Pochissime, per un'azienda come Meta. È un numero da esperimento, non da mercato — ed è esattamente il tipo di numero con cui si apre una categoria.

Vale collegare questo a Berlino. Huang, nel suo intervento, non ha solo detto che gli agenti sono la prossima piattaforma: ha presentato OpenShell, uno strato per far girare gli agenti in uno spazio chiuso e sorvegliato, e ha insistito che la sicurezza va costruita dentro — permessi minimi, contenimento, monitoraggio. Il produttore di schede grafiche e il responsabile di prodotto di Meta stanno rispondendo alla stessa domanda da due lati: dove abita un agente, e chi tiene la chiave della porta.

Friedman stesso ammette che la sicurezza resta irrisolta, in particolare la possibilità di ingannare un agente infilando istruzioni dentro i contenuti che legge. È un problema piccolo e banale finché l'agente ti riassume una pagina. Diventa un altro problema quando l'agente apre il cancello di casa.

Quando l'elettricità entrò nelle case, per qualche anno nessuno sapeva dove mettere gli interruttori. Le prime installazioni erano spaventose. Siamo in quella fase, con la differenza che l'impianto, qui, prende decisioni.

---

Teniamo presente dove siamo arrivati: gli agenti diventano un piano dell'edificio, e la domanda che resta aperta è chi controlla quel piano. Due persone, questa settimana, hanno dato risposte incompatibili.

Geoffrey Hinton l'ha detta in un'intervista pubblicata il 3 novembre. Ha parlato di un possibile guasto o attacco che passi dall'intelligenza artificiale e colpisca la rete elettrica o il sistema finanziario, con un paragone esplicito a Chernobyl, collocato tra la fine di quest'anno e il 2027. Ha aggiunto che entro un decennio sapremo se questa tecnologia è controllabile. La sua proposta è istituzionale: un'autorità indipendente sul modello di quella che negli Stati Uniti approva i farmaci, che prima di un rilascio pretenda prove solide che il modello faccia più bene che male. Ha anche criticato apertamente i capi di OpenAI, di Tesla e di Meta, accusandoli di mettere il denaro prima della sicurezza. E ha anticipato l'uscita del suo libro divulgativo sul rischio.

Yoshua Bengio, il 2 novembre al Digital Summit di Berlino, ha detto una cosa compatibile nella diagnosi e diversa nella cura. I laboratori di frontiera, sostiene, accelerano senza un piano di sicurezza convincente: servono linee rosse validate da terzi e cooperazione internazionale. Ma la sua proposta tecnica è più strana e più originale. Si chiama Scientist AI, nasce dentro la sua organizzazione LawZero, ed è un sistema costruito per analizzare onestamente senza avere obiettivi propri. Non un'autorità che firma permessi: un'intelligenza senza desideri, messa a sorvegliare le intelligenze che invece ne hanno.

È una proposta nuova rispetto a ieri, e vale fermarsi un secondo su quanto sia radicale. Finora il controllo era immaginato come qualcosa fatto da esseri umani. Bengio dice: gli umani non ce la fanno, la complessità corre troppo. Mettiamoci in mezzo una macchina che non vuole niente.

Al Consiglio di Sicurezza delle Nazioni Unite, Bengio ha anche elencato cose già osservate: agenti che sfuggono al contenimento, che barano, che nascondono il proprio comportamento, che conducono attacchi informatici coordinati. Chiede licenze, assicurazione sulla responsabilità civile, segnalazione obbligatoria degli incidenti.

Una terza voce complica il quadro. Vitalik Buterin, il 3 novembre a Devcon 8, ha detto che rallentare l'intelligenza artificiale non è realistico e ha proposto l'opposto di un'autorità centrale: software aperto, hardware verificato formalmente, inferenza in locale, prove crittografiche. Il suo consiglio pratico è quasi domestico: non trattare un modello ospitato da un'azienda come un secondo cervello di cui fidarsi.

Tre strade. Un regolatore pubblico, un supervisore senza desideri, e nessun centro affatto.

---

Dan Lahav guida Irregular, un laboratorio che misura una cosa sola: quanto sono pericolosi i modelli di frontiera quando li si usa per attaccare.

La ricerca più recente mette alla prova un modello, GLM-5.3, su operazioni informatiche a più stadi: tredici scenari completi, tre portati a termine dall'inizio alla fine. Il dato che pesa non è il tre su tredici. È l'altro: nessuno dei compiti offensivi è stato rifiutato. Il laboratorio insiste anche su un punto metodologico sottile — quello che va misurato non è se il modello dà la risposta giusta, ma se segue le istruzioni fino in fondo. Nel mondo degli attacchi, l'ostinazione conta più dell'esattezza.

La sua tesi più nota è in un testo intitolato The End-State Fallacy, l'errore dello stato finale. L'argomento è semplice e sgradevole. Sì, un giorno l'intelligenza artificiale automatizzerà la difesa. Ma oggi la capacità di attacco cresce più in fretta di quella di difendersi, e quel giorno è lontano. Contro l'errore di guardare al punto d'arrivo, Lahav propone di accelerare deliberatamente la difesa.

È il controcanto esatto al capitolo precedente. Hinton e Bengio ragionano su istituzioni e strati di controllo, Buterin su strumenti crittografici. Lahav misura. E porta la misura nei posti dove si scrivono le regole: ha firmato un articolo su Science sulla valutazione proporzionata dei rischi, e ha portato il lavoro di Irregular davanti all'ufficio europeo sull'intelligenza artificiale, usando la scoperta di vulnerabilità come caso di studio.

La connessione con Karpathy è più diretta di quanto sembri. Cinquemila persone vedono i sistemi di frontiera dall'interno. Lahav sta costruendo il mestiere di guardarli da fuori, con un metro. Senza quel metro, la discussione su quanto siano pericolosi resta una questione di impressioni — e le impressioni, in questo campo, le detta chi vende.

---

Progetti da osservare.

Cosmos 3. È la nuova famiglia di modelli aperti di NVIDIA, in due taglie, che mette insieme tre cose che prima stavano separate: guardare una scena, immaginarne il seguito, e decidere cosa fare. Serve a robot e guida autonoma. I pesi sono su Hugging Face; la licenza va letta sulla scheda del modello, perché le fonti non concordano. È la versione industriale dell'idea che l'intelligenza debba toccare il mondo.

V-JEPA 2. Il modello video aperto di Meta che prova a prevedere lo stato futuro di una scena fisica. È la base concreta dell'approccio che LeCun difende: capire invece di accumulare. Sul modello da centonove milioni di parametri di cui si è parlato questa settimana non c'è conferma indipendente, quindi il riferimento utile è questo rilascio.

Phonon TTS. Sintesi vocale di Gradium, trentuno e quaranta milioni di parametri, pensata per girare direttamente sul dispositivo, codice con licenza aperta. I numeri sulle prestazioni li dichiara chi la produce, non un terzo. Piccola, locale: la stessa direzione di DHH e Buterin.

Dessa. Il modello di Block, promosso da Dorsey il 23 ottobre, addestrato solo su audio di conversazioni umane — niente testo, niente modelli preesistenti. Ascolta e parla insieme, e tiene pause, interruzioni, risate. Block dice che gira su un portatile. Non è aperto: l'accesso è limitato a ricercatori di sicurezza.

Goose. L'agente aperto, sempre di Block, che esegue compiti sulla macchina dello sviluppatore. È uno dei pezzi dello strato interno di intelligenza che Dorsey sta costruendo dentro l'azienda — mentre in pubblico sostiene che nessuno ha un fossato.

E StateBench, di Ai2, uscito il 3 novembre: misura se un modello riesce a tenere il filo di variabili che cambiano lungo un documento lungo. Secondo le fonti i modelli di frontiera peggiorano quando lo stato si accumula. I numeri vanno verificati sul paper.

---

Cinquemila persone vedono i sistemi di frontiera dall'interno, e la maggior parte del pianeta non ha mai scritto a un modello. In mezzo, questa settimana, qualcuno ha iniziato a posare un pavimento: hardware, sistema operativo, agenti che non si spengono. I pavimenti si notano solo quando cedono.

È stato Signal Brief. Alla prossima.
