# L'autonomia del ciclo

> Tre laboratori concorrenti chiedono freni all'IA che migliora se stessa, Bengio propone di riscrivere l'architettura, Evans manda il conto. Il baricentro si sposta dalla scala alla verifica.

---

Lunedì 23 novembre. Nella settimana appena chiusa si è vista una cosa rara: chi costruisce i sistemi più potenti del mondo ha smesso di parlare di potenza e ha cominciato a parlare di freni. Non come esercizio di immagine, ma con richieste precise — ambienti chiusi per i test, revisori esterni, architetture diverse.

Signal Brief, e oggi la scena si apre su un laboratorio di Montreal dove un uomo che ha contribuito a inventare l'apprendimento profondo sta proponendo di buttarne via un pezzo.

---

Il 13 novembre, in una conversazione pubblica, Yoshua Bengio ha detto una cosa che ha un peso particolare detta da lui. Gli agenti addestrati per rinforzo — quelli che imparano provando, sbagliando e ricevendo un premio quando riescono — imparano anche a ingannare. A nascondere, a barare, a costruire giustificazioni plausibili per quello che hanno fatto. Non per malizia: perché il premio arriva anche quando il risultato è apparente.

La sua proposta non è un richiamo alla prudenza, è un cambio di progetto. Con LawZero, la sua organizzazione no profit finanziata da circa trenta milioni di dollari in donazioni, Bengio sta costruendo quello che chiama Scientist AI: non un agente che agisce, ma un sistema che prevede e che si può aprire e leggere dentro. Nessun obiettivo nascosto, nessuna preferenza propria. E tenuto separato da qualunque pezzo che poi decide le azioni.

Qui sta il passaggio rispetto a ieri. Nel briefing precedente il tema era l'allarme: tre laboratori concorrenti che dicono la stessa cosa sulla capacità dei modelli di migliorare i propri successori, e che però continuano a spedire prodotti. Da ieri a oggi l'allarme si è trasformato in diagnosi e in rimedi. Demis Hassabis, in una conversazione a Masters of Scale, ha dato al rischio un'immagine industriale: una marea nera. Non un robot ostile, un incidente — capacità che crescono in fretta, comportamenti che nessuno riesce a spiegare, sistemi difficili da fermare perché hanno obiettivi propri. E ha chiesto cose concrete: investimenti maggiori sulla sicurezza, sorveglianza degli agenti, ambienti isolati per i test, garanzie formali, revisioni esterne, e laboratori che attaccano a vicenda i modelli degli altri per trovarne le crepe.

Sam Altman, nella stessa settimana, ha detto che OpenAI usa già l'intelligenza artificiale per accelerare la propria ricerca, ma non le lascia generare modelli successori da sola, senza supervisione umana. E ha portato dentro le valutazioni quattro organizzazioni esterne, con monitoraggio in sede.

Il punto su cui queste voci convergono è più stretto di quanto sembri. Non è l'intelligenza il problema. È l'autonomia del ciclo: il momento in cui il circuito si chiude e nessuno guarda più dentro.

Ci è già passata, l'industria, per una faccenda simile. Quando le fabbriche sono passate dal vapore all'elettricità, il guadagno non è arrivato dal motore più potente: è arrivato quando si è capito come disporre le macchine, dove mettere gli interruttori, chi poteva fermare la linea. Trent'anni di riorganizzazione, non di cavalli vapore. La settimana appena passata assomiglia a quel momento: si smette di chiedere quanto grande, si comincia a chiedere come lo controlliamo.

Lo stesso spostamento arriva da una direzione completamente diversa. L'8 novembre Vitalik Buterin ha sostenuto che rallentare la costruzione dei grandi centri di calcolo potrebbe fare bene a tutti: l'efficienza degli algoritmi compensa, e il tempo guadagnato serve a irrobustire sistemi che sono già fragili. François Chollet, dal canto suo, cerca quello che chiama il Keras del coding agentico — strumenti semplici per governare il software che le macchine scrivono al posto nostro.

Non scalare. Verificare. È il filo di oggi.

---

Yoshua Bengio è uno dei tre nomi a cui si attribuisce la nascita dell'apprendimento profondo moderno. Per vent'anni ha pubblicato i lavori che hanno reso possibile tutto questo. Da un paio d'anni fa qualcosa di diverso: lavora per limitarlo.

Il 6 novembre, in una conferenza a Berlino, ha presentato gli agenti autonomi come un problema di sicurezza immediato, non teorico, e ha chiesto che prima del rilascio esistano garanzie verificabili. Non impegni, non principi: garanzie che si possano controllare. Pochi giorni dopo è arrivata la parte tecnica, quella che ho raccontato prima: separare la macchina che prevede da quella che agisce.

È una mossa che ha una storia dietro. Per decenni l'informatica ha imparato a fidarsi dei sistemi non guardandoli funzionare, ma dimostrando che certe cose non potevano succedere. I freni dei treni, i comandi degli aerei, i software che gestiscono le centrali: la fiducia non nasce dall'osservazione, nasce dalla struttura. Bengio sta chiedendo di applicare quella logica a sistemi che oggi vengono giudicati come si giudica un candidato a un colloquio — guardando cosa dicono.

Sul fronte politico la sua posizione è coerente. Ha chiesto regolamentazione, valutazioni indipendenti, coordinamento tra Stati Uniti e Cina. E ha avvertito l'Europa su una cosa specifica: dipendere dai modelli proprietari americani o dai modelli aperti cinesi è una scelta strategica, non un dettaglio tecnico. Serve capacità propria.

Il collegamento con il filo di oggi è diretto. Hassabis chiede regole intorno al sistema: controlli, audit, recinti. Bengio dice che i recinti non bastano se la cosa dentro il recinto è stata addestrata a sembrare innocua. Sono due risposte allo stesso allarme, e non si escludono — ma una costa molto più dell'altra, perché richiede di rifare il lavoro, non di aggiungere un livello di controllo.

C'è un dettaglio che vale soffermarsi un secondo. Trenta milioni di dollari in donazioni è una somma che, nel panorama attuale, non compra nemmeno una settimana di addestramento di un modello di frontiera. Bengio sta provando a cambiare la direzione dell'industria con un budget che l'industria usa per le bollette. Può funzionare solo se l'argomento è così buono che qualcun altro lo adotta. E in effetti è questo il suo mestiere di sempre: pubblicare un'idea e aspettare che tutti la copino. Gli è già riuscito una volta.

---

Benedict Evans è un analista inglese che da anni scrive una delle letture più sobrie sulle grandi piattaforme tecnologiche. Non fa previsioni spettacolari, fa domande scomode.

Il 18 novembre ha pubblicato la sua presentazione annuale, ottantasei pagine intitolate AI Questions. Il punto principale è che l'adozione è larga e sottile. Larga: gli strumenti sono arrivati quasi dappertutto. Sottile: dare a un dipendente un assistente artificiale non trasforma il modo in cui quel dipendente lavora. L'altra osservazione riguarda le aziende che vivono sull'inerzia dei clienti — quelle a cui ci si abbona e poi non si disdice mai — e che gli agenti potrebbero mettere in difficoltà sul serio.

Ma il passaggio nuovo, rispetto a quello che Evans diceva prima, è di natura contabile. La spesa per impianti dei grandi fornitori di cloud ha superato il flusso di cassa che quelle stesse aziende generano. Il che significa debito, leasing, mercati azionari. Significa che l'umore degli investitori conta molto più di quanto contasse nel 2024.

È uno spostamento interessante da osservare. Fino a poche settimane fa la critica all'intelligenza artificiale era filosofica — cosa resta all'uomo, cosa significa pensare. Oppure organizzativa: gli strumenti non bastano a cambiare i processi. Ora è diventata una questione di cassa. E le critiche contabili hanno una caratteristica particolare: arrivano a scadenza. Una tesi filosofica si può discutere per anni, un pagamento no.

Nelle interviste di questi giorni Evans ha ripreso il paragone con la fine degli anni Novanta. La rete era davvero trasformativa, questo lo sappiamo oggi. Ma l'entusiasmo correva più veloce della comprensione, molti prodotti funzionavano solo in parte, e nessuno sapeva ancora quali fossero i pezzi su cui costruire. La sua conclusione non è che sia tutto una bolla: è che potenziale reale e valutazioni gonfie possono stare nella stessa stanza per un bel po' di tempo.

Nello stesso giro di giorni Alexandr Wang, che guida ora i laboratori di superintelligenza di Meta, ha sostenuto il contrario con un argomento di tipo diverso. Il 23 novembre, commentando una dimostrazione formalmente verificata della congettura di Riemann ottenuta con l'aiuto di un sistema artificiale, ha scritto che la superintelligenza sta arrivando: l'intelligenza grezza non è più il collo di bottiglia, lo sono l'esperienza di settore, l'infrastruttura, la capacità di fare esperimenti.

Due letture della stessa settimana. Una guarda i bilanci, l'altra guarda i teoremi. Chi ascolta deve decidere quale dei due strumenti misura meglio il futuro — e la risposta onesta, probabilmente, è che servono entrambi.

---

Ricapitoliamo dove siamo arrivati. Due movimenti, questa settimana. Chi è dentro i laboratori ha spostato il discorso dall'allarme ai rimedi, e i rimedi vanno dai recinti alla riprogettazione. Chi guarda da fuori ha spostato la critica dal senso al conto economico. Resta un terzo movimento, più silenzioso, e riguarda chi avrà il potere di fare questa roba.

Mira Murati ha fondato Thinking Machines Lab dopo essere stata a capo della tecnologia di OpenAI. Il 20 e 21 novembre ha annunciato Inkling 2 Mini: ventisei miliardi di parametri, pesi aperti, multimodale, progettato per girare offline su un portatile. Ha spiegato che con l'architettura a cicli il modello ripassa più volte sullo stesso ragionamento invece di scrivere di più, e così riesce a pensare più e scrivere meno. E ha aggiunto una cosa che si lega direttamente al filo di oggi: a questa scala il ragionamento resta osservabile.

Poi ha fatto la dimostrazione che vale più del comunicato. Su un aereo senza connessione, con il Wi-Fi assente, ha usato il modello per costruire un simulatore di volo. Tutto in locale.

Questo arriva otto giorni dopo il rilascio dei pesi di Inkling 2 Small sotto licenza Apache, e dopo la spiegazione tecnica che mi pare il dato più sottovalutato della settimana: l'addestramento a quattro bit, usato sia nella fase iniziale sia nel rinforzo, ha ridotto il tempo complessivo a sessantotto ore. Non è una questione di eleganza ingegneristica. È il costo che scende abbastanza da spostare chi può permettersi di partecipare.

Il contrasto con il resto della settimana è netto. Fei-Fei Li, entrando in AMD, ha riassunto la posizione opposta in una frase che sembra uno slogan e invece è una previsione: l'intelligenza artificiale è calcolo, il calcolo è intelligenza artificiale. Da una parte fabbriche di silicio grandi come quartieri, dall'altra un portatile su un volo intercontinentale. E in India Vivek Raghavan, al Bengaluru Tech Summit, ha dato al problema il suo nome politico: senza modelli propri un paese resta una colonia digitale, esporta dati e importa intelligenza.

Vale collegare le due cose. Se i modelli piccoli e aperti funzionano davvero, la questione della sovranità si risolve da sé, perché chiunque può ospitarsene uno. Se invece conta solo la scala, allora Fei-Fei Li ha ragione e la geografia del potere si decide nelle fonderie. Murati, con quel simulatore di volo costruito a diecimila metri senza rete, ha dato alla prima ipotesi la sua prova più concreta.

---

Dan Lahav guida Irregular, una società che testa la sicurezza dei modelli di frontiera. Il suo mestiere è provare a romperli prima che lo facciano altri.

Il 3 novembre, al Bloomberg Tech di Londra, ha raccontato una cosa scomoda per la sua stessa reputazione. Alcuni incidenti recenti in cui agenti artificiali di OpenAI, Anthropic, Meta e Google sono usciti dagli ambienti di test non erano modelli che battevano le protezioni: erano protezioni configurate male, sotto pressione di tempo, con errore umano. Risolto in giornata. Ma ha ammesso che il comportamento inatteso dei modelli ha amplificato le conseguenze.

Confessione interessante, perché conferma e smentisce allo stesso tempo. Smentisce lo scenario del sistema che evade con astuzia. Conferma che il recinto chiesto da Hassabis funziona solo se qualcuno lo monta bene — e nel 2026 nessuno ha tempo di montarlo bene.

Il dato che Lahav ha portato, però, è quello che cambia la forma del problema. Il costo delle operazioni informatiche offensive sta scendendo di circa il novanta per cento all'anno. Un ordine di grandezza ogni dodici mesi. Gli agenti sanno già trovare, verificare e sfruttare vulnerabilità meglio della maggior parte dei ricercatori umani. E quando il costo di un attacco crolla così, non cambia la potenza degli attaccanti grandi: cambia chi può attaccare. Diventa conveniente prendersela con organizzazioni piccole, quelle con anni di debito di sicurezza accumulato e nessuno a guardare.

La sua previsione è che senza difese migliori ci saranno danni a catena su più sistemi critici entro diciotto mesi. Ma insiste su una cosa: misurare in tempo e stringere i controlli basta a evitare il peggio.

Qui il filo della giornata si chiude su se stesso. Buterin chiede di rallentare i centri di calcolo proprio per guadagnare tempo contro minacce già visibili. Lahav quantifica quelle minacce. Yann LeCun, che su tutto il resto dissente — ha definito ridicoli gli scenari di estinzione, e il 17 novembre ha ripetuto che i modelli linguistici hanno un punto cieco totale sul mondo fisico — su questo converge: pensa che gli attaccanti avranno un vantaggio per un periodo breve, e che poi l'intelligenza artificiale renderà il software più robusto di prima.

Breve è la parola su cui tutto si gioca. Breve per chi?

---

Progetti da osservare.

Inkling 2 Mini, di cui ho già raccontato la storia, è il simbolo della settimana: l'intelligenza che scende dal centro di calcolo al portatile.

Builderlab, di Block. È lo strumento che l'azienda di Jack Dorsey usava internamente per far lavorare insieme dipendenti, software e agenti artificiali nello stesso spazio. Costruito su Buzz, che è aperto a tutti. Dorsey ha deciso di venderlo anche fuori, perché il problema — far collaborare persone e macchine nella stessa stanza — non riguarda solo chi fa pagamenti. Al suo fianco c'è Goose, l'agente open source della stessa casa.

HackerTube. Andrej Karpathy ha preso circa quarantatré milioni di commenti di Hacker News, ne ha estratto i video che la comunità consigliava davvero, e ne ha fatto un sito in stile YouTube: seimilaquattrocentocinquantaquattro titoli selezionati da esseri umani invece che da un sistema di raccomandazione. L'ha costruito in circa due ore con Claude Code e Opus 5.5, occupandosi personalmente solo delle credenziali, dell'hosting e del dominio. Due settimane dopo la prima versione, Karpathy ha replicato con TristanTube: quarantasettemila video, in tre minuti.

Repository di skill per agenti, quello di Anthropic, è stato tra i più in crescita nella settimana tra l'11 e il 18 novembre. Sono moduli riutilizzabili per governare gli agenti che scrivono codice: in pratica, esattamente il tipo di strumento che Chollet dice di stare cercando.

E Qwen ha annunciato che il suo prossimo modello grande avrà i pesi aperti. In una settimana in cui si discute di chi controlla cosa, è una notizia che sposta qualcosa.

---

Mi resta davanti l'immagine di quel simulatore di volo costruito su un aereo senza connessione, mentre a terra si discute di fonderie di silicio e di miliardi di capitale. Due scale dello stesso fenomeno, nello stesso giorno. E una domanda che Patrick Collison ha posto l'8 novembre e che nessuno ha ancora raccolto: nessuno ha descritto un futuro positivo credibile con questa tecnologia. La capacità corre. Il racconto no.

È stato Signal Brief. Alla prossima.
