# La memoria come nuovo collo di bottiglia

> Karpathy sposta il problema dal modello alla persistenza del contesto, Sutskever chiude l'era dello scaling incassando cinque miliardi, e il terreno legale sotto il lavoro si rivela revocabile.

---

C'è un momento, in ogni tecnologia, in cui smette di essere interessante la macchina e diventa interessante tutto quello che le sta intorno. È il punto in cui siamo adesso, e si vede da un dettaglio: in queste settimane quasi nessuno, fra le voci che seguiamo, parla più di quanto sono bravi i modelli.

È l'8 agosto 2026, questo è Signal Brief.

E la scena da cui conviene partire è un documento di dodici pagine, pubblicato cinque giorni fa, che racconta la storia di un programma che ha condotto settecento esperimenti e non ne ricordava nessuno.

---

Il documento si chiama Graph Engineering, porta la data del 3 agosto, e la critica che muove è di una semplicità disarmante. Un agente automatico — un programma che lavora da solo, prova, sbaglia, riprova — gira in un ciclo, esegue settecento esperimenti, e alla fine di quel ciclo non ha imparato niente. Non perché fosse stupido. Perché ogni volta ricominciava da capo. Le informazioni gli passavano davanti e poi svanivano.

Andrej Karpathy, che di questi sistemi si occupa da anni, ha accompagnato quel documento con una proposta pratica e quasi artigianale: invece di far rileggere all'agente i documenti grezzi a ogni domanda, lasciate che si costruisca un wiki. File di testo collegati fra loro, che si accumulano nel tempo. Il contesto come una cosa da coltivare, non da ricomporre ogni mattina.

Ieri avevamo lasciato Karpathy su un'altra tesi — questa generazione automatizza ciò che sappiamo verificare — che era una tesi sulla conoscenza. Adesso ne propone una diversa, e più concreta: il problema è la memoria. Non cosa il sistema sa fare, ma cosa riesce a tenere.

Questo spostamento non riguarda solo lui. Benedict Evans ci arriva da tutt'altra strada, quella dei soldi. Nel suo pezzo del 9 luglio sui prezzi dei token — cioè su quanto costa far lavorare questi sistemi — la domanda che pone ai laboratori è scomoda: se nessuno ha davvero qualcosa di diverso dagli altri, cosa impedisce a tutto questo di diventare una merce a basso margine, come è successo a ogni strato infrastrutturale prima di questo? La sua risposta è che il collo di bottiglia si è spostato: non la capacità dei modelli, ma la capacità delle aziende di rimettere in fila i propri processi.

Jensen Huang dice la stessa cosa con una metafora che è diventata la formula del momento: il modello è il cervello, l'harness è il corpo. Harness è la struttura che sta attorno al modello — gli strumenti che può chiamare, la memoria che gli tiene, il modo in cui osserva e pianifica. Il valore si sta spostando dal cervello al corpo.

Vale la pena collegare questo a una storia più vecchia. Quando l'elettricità entrò nelle fabbriche, all'inizio non successe quasi niente. Le fabbriche erano state costruite attorno a un albero di trasmissione centrale mosso dal vapore: si tolse il vapore, si mise un motore elettrico, e la produttività rimase più o meno identica per vent'anni. Il salto arrivò quando qualcuno riprogettò l'edificio — un motore per macchina, i macchinari disposti secondo il flusso del lavoro e non secondo la meccanica dell'albero. Non era mancata la potenza. Era mancato il corpo attorno alla potenza.

E poi c'è la contraddizione più elegante di questo ciclo. Ilya Sutskever dichiara chiusa l'età dello scaling — la fase in cui bastava fare i modelli più grandi — e sostiene che altri cento volte di calcolo daranno miglioramenti, non salti. Il 28 luglio annuncia una partnership con NVIDIA da circa cinque miliardi di dollari, con dieci volte il calcolo nei prossimi dodici mesi. La frase con cui la giustifica è: abbiamo ricerca degna di essere scalata. Non è un ritorno indietro, è l'ordine invertito — prima l'idea, poi la potenza. Ma resta il metro su cui verrà giudicato, e lo sa.

---

Andrew Ng insegna intelligenza artificiale da vent'anni ed è, tra le voci di questo settore, una delle meno inclini alle posizioni di principio. Per questo la sua svolta di queste settimane merita di essere raccontata per come è arrivata, non per quello che afferma.

Ng si è schierato per i modelli a pesi aperti — quelli che si possono scaricare, ispezionare, far girare sulla propria macchina. Ma non ci è arrivato per convinzione politica. Ci è arrivato durante un incidente reale, mentre serviva aiuto. I modelli chiusi, quelli che vivono dietro l'interfaccia di un'azienda, si sono rifiutati di collaborare.

Il rifiuto come guasto. È un'inversione notevole, perché sposta l'intera discussione su aperto contro chiuso da un terreno ideologico a un terreno di affidabilità. Non "l'apertura è un valore", ma "quando ho avuto bisogno, la cosa chiusa non ha funzionato". È lo stesso ragionamento che un ingegnere fa su un componente che si blocca sotto carico: non ti interessa la filosofia del fornitore, ti interessa che il pezzo tenga.

E c'è un dettaglio che rende questa posizione meno solitaria di quanto sembri. Il Dipartimento dell'Energia americano ha avviato la Genesis Open Models Initiative, guidata dal laboratorio di Argonne, per rilasciare modelli scientifici a pesi aperti e infrastruttura condivisa per la ricerca. Non è un manifesto di programmatori: è politica industriale di uno Stato. L'apertura ha smesso di essere una preferenza tecnica ed è diventata una scelta di sistema, con dei fondi dietro.

Quello che trovo più interessante è la simmetria con la storia della crittografia negli anni Novanta. Anche lì la discussione partì ideologica — libertà contro controllo — e si risolse per ragioni pratiche: gli algoritmi pubblici, esaminabili da chiunque, si rivelarono più solidi di quelli segreti, perché venivano rotti prima e riparati prima. La segretezza sembrava sicurezza e invece era fragilità.

Resta però una domanda che il caso di Ng non chiude. Un modello che si rifiuta di aiutare durante un incidente non è per forza un modello mal progettato: potrebbe essere un modello progettato bene per un altro scenario, quello in cui qualcuno chiede aiuto per fare danni. Il confine fra prudenza e inutilità non è una riga netta, e chi lo traccia decide molto più di quanto sembri. Ng ha vissuto un caso in cui la prudenza era dalla parte sbagliata. Chi scrive quelle regole vive tutti gli altri casi insieme.

---

Balaji Srinivasan sostiene da anni una tesi che a molti suona astratta: la giurisdizione è un servizio. Lo Stato in cui vivi e lavori non è un destino, è un fornitore, e i fornitori si cambiano. In queste settimane quella tesi ha smesso di essere astratta, perché gli è capitata addosso.

Il 21 luglio il consiglio comunale di Iskandar Puteri, in Malesia, ha revocato la licenza commerciale della Network School — la scuola che Srinivasan aveva costruito a Forest City, circa millecinquecento dollari al mese comprensivi di alloggio, pasti, palestra e laboratori. La revoca arriva dopo un'indagine su presunti ingressi di cittadini israeliani con secondo passaporto, indagine chiusa senza prove.

Il 22 luglio — il giorno dopo — era in Asia Centrale a firmare un accordo quinquennale con il Ministero dell'Intelligenza Artificiale e dello Sviluppo Digitale del Kazakistan. Eventi, hackathon, la possibilità di una conferenza. Ventiquattro ore fra la revoca e l'accordo con un altro Stato.

Si può leggere in due modi. Il primo: è la dimostrazione della tesi, eseguita in tempo record. Il secondo, meno lusinghiero: è la dimostrazione che il terreno sotto i piedi era sottile, e che si è salvato perché aveva già le valigie pronte. Le due letture non si escludono.

La stessa dinamica, in forma diversa, tocca Jack Dorsey. Fra il 23 e il 24 luglio il governo indiano ha ordinato a GitHub di bloccare entro tre ore tre repository di Bitchat, l'app di messaggistica che Dorsey promuove. Lui non ha fatto ricorso: ha pubblicato l'ordine. La trasparenza come contro-mossa. E il motivo del blocco è tecnico, non politico: Bitchat funziona su una rete di dispositivi che si parlano direttamente via Bluetooth, senza server, il che rende l'intercettazione legale impossibile e la fa funzionare anche quando la rete è spenta. Era cresciuta a Delhi durante le proteste studentesche di luglio.

David Heinemeier Hansson, sul suo fronte, ha lasciato Apple per macchine su cui gira Linux, con la sua distribuzione preinstallata dal produttore.

Tre gesti diversi, una stessa scoperta: il terreno legale e infrastrutturale su cui poggia il lavoro può sparire in un pomeriggio. Non è una novità storica — chiedete ai tipografi olandesi del Seicento, che stampavano in Olanda i libri proibiti altrove. È una novità per una generazione cresciuta pensando che l'infrastruttura fosse neutra.

---

Torniamo un attimo sul filo di oggi, perché ci serve per capire la scena successiva. La diagnosi condivisa è che il modello non è più la variabile scarsa. Il disaccordo comincia sulla domanda: cosa la sostituisce. E oggi ci sono quattro risposte che non stanno insieme.

Demis Hassabis, in questo quadro, ha fatto la mossa più istituzionale della sua carriera. Il 6 agosto ha annunciato di lasciare la gestione quotidiana di Google DeepMind per diventarne presidente e Chief Scientist di Alphabet. La motivazione dichiarata è concentrarsi sulla strategia di lungo periodo, sull'accelerazione delle scoperte scientifiche e su Isomorphic Labs, la sua società di scoperta farmacologica.

Un passaggio da dirigente a scienziato-stratega, che di per sé sarebbe una notizia interna. Diventa interessante messo accanto a quello che ha pubblicato a luglio: un manifesto intitolato A Framework for Frontier AI and the Dawning of a New Age, in cui chiede un organismo di controllo globale a guida americana, con potere di esame sui modelli più avanzati, e — questa è la parte inconsueta — operativo entro fine anno. Non "servirebbe cooperazione internazionale", che è la formula con cui di solito queste richieste vengono depositate e dimenticate. Un organismo, un mandato, una scadenza.

Sulla tempistica dell'intelligenza artificiale generale ripete la sua formula: siamo alle pendici della singolarità. Non ci siamo, ma la salita è già cambiata. Tre anni, dice. E continua a elencare cosa manca — ragionamento continuo, memoria, apprendimento persistente — come problemi aperti, non come dettagli da sistemare. Notate che la sua lista dei pezzi mancanti è, quasi parola per parola, la lista di Karpathy.

Qui però si apre la frattura vera dell'episodio. Da una parte Hassabis chiede un guardiano globale entro dicembre, e Yoshua Bengio costruisce l'architettura tecnica del contenimento — un sistema non agentico, che modella il mondo e produce previsioni senza avere obiettivi propri, da usare come sorvegliante degli agenti. Dall'altra parte, nello stesso mese, Srinivasan cambia Stato in un giorno e Dorsey pubblica l'ordine di censura che lo riguarda.

Due metà dello stesso campo che si muovono in direzioni opposte con la stessa urgenza. Una costruisce il recinto, l'altra dimostra empiricamente che il recinto ha una porta.

---

Alexandr Wang è passato in pochi anni dal vendere dati per addestrare modelli al dirigere i laboratori di superintelligenza di Meta. Ed è utile guardarlo perché fa la cosa più concreta di tutte: mette un prezzo.

Il 5 agosto Meta ha spedito il suo primo prodotto commerciale, Muse Code, un agente che lavora da terminale. Wang lo descrive in termini deliberatamente operativi: lo installi con un comando e poi gli affidi compiti di ingegneria completi — pianificare le modifiche, scrivere il codice, verificare i risultati. Non "modello capace". Compito intero, dall'inizio alla fine.

La parte interessante non è il prodotto, è il listino. C'è un livello di prezzo chiamato contributor, che Wang definisce un'opzione incredibilmente buona soprattutto dal punto di vista dei costi: circa il venticinque per cento di quello che chiedono OpenAI e Anthropic. In cambio, chi lo sceglie acconsente a far usare le proprie richieste e le risposte ricevute per addestrare i modelli di Meta.

È la tesi che Wang aveva costruito con Scale AI, portata dentro Meta: i dati d'uso reali sono la valuta vera. Il prezzo non serve a fare margine, serve a comprare comportamento. Uno sconto del settantacinque per cento è il costo che Meta accetta di pagare per guardare come lavorano gli sviluppatori.

Il precedente storico è quasi didattico. Nel primo Novecento, le compagnie che vendevano macchine per ufficio scoprirono che il valore non stava nella macchina ma nel contratto di assistenza — la macchina divenne un pretesto per entrare nell'ufficio. Qui la merce non è nemmeno il software: è la traccia di chi lo usa.

Geoffrey Hinton ha fornito, in queste settimane, la chiave per leggere tutto l'insieme, e la applico volentieri anche a Wang. La sua tesi è che il problema non sono i cattivi attori, sono gli incentivi: nessuna azienda può rallentare da sola, perché ha un dovere verso i propri azionisti. Applicata a questo ciclo di voci, l'osservazione è corrosiva. Huang ha bisogno che ogni token generato sia un'unità di ricavo, e infatti sostiene che l'idea che l'AI riduca i posti di lavoro sia una totale sciocchezza. Wang prezza al venticinque per cento perché gli servono i dati. Evans può dire che nulla è differenziato perché non ha un laboratorio da difendere.

Le tesi restano buone. Sono anche, quasi tutte, il bilancio di chi le pronuncia. E questo non le rende false — le rende leggibili.

---

Progetti da osservare.

Prime-agent è la sorpresa della settimana. È un'impalcatura che permette a un sistema di migliorarsi da solo mentre lavora su compiti lunghi: tratta il contesto come una cosa modificabile, richiama altri agenti come se fossero funzioni, e li fa parlare fra loro con messaggi che restano. Segna novantacinque e mezzo su ARC-AGI-3, il test in cui l'agente si trova dentro un piccolo videogioco e deve capire le regole in poche mosse. Sopra il livello degli umani esperti. È esattamente la tesi di Karpathy trasformata in codice funzionante.

Agent-skills è il lato pratico della stessa idea: una libreria di competenze pronte, che descrive a un agente come si fa un lavoro, quali controlli di qualità superare e quando fermarsi. Specifiche precise invece di prompt tramandati per sentito dire. Funziona con oltre settanta programmi diversi.

Computer, di Cloudflare, dà a ogni agente un computer suo — un disco, una shell, git — dentro uno spazio isolato che nasce e muore col compito. È in anteprima, non ancora per la produzione.

Inkling è il primo modello aperto di Thinking Machines, uscito il 15 luglio con licenza libera: capisce testo, immagini e audio, ed è pensato per essere fatto girare e adattato sui propri dati, contro la logica della taglia unica.

Genesis Open Models Initiative è quella del Dipartimento dell'Energia di cui parlavamo prima: l'apertura diventata politica industriale.

E poi, con una riga sola: TencentDB-Agent-Memory continua a crescere. Kimi K3 continua a crescere. DeepSeek-V4-Flash-0731 continua a crescere. Bitchat continua a crescere. MirrorCode continua a crescere. OpenEnv continua a crescere.

---

Resta l'immagine di quel programma che ha fatto settecento esperimenti e non se ne ricordava nemmeno uno. Per anni abbiamo misurato queste macchine su quanto sapevano fare in un istante. Forse la domanda giusta è un'altra: cosa si portano dietro dall'istante precedente. Vale per i modelli, e viene il sospetto che valga anche per le istituzioni che stanno provando a regolarli.

È stato Signal Brief. Alla prossima.
