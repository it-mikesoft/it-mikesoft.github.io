# Gli agenti toccano il denaro

> Il baricentro dell'intelligenza artificiale si sposta dai modelli agli agenti che muovono soldi, codice e oggetti. E la sicurezza si decide altrove dai trattati.

---

Cinque minuti, un agente che gira su un portatile, e un record di dominio aggiornato senza passare da nessun sito. È quello che Vitalik Buterin ha mostrato il 6 ottobre a Singapore, e non era una dimostrazione di destrezza tecnica: era un cambio di indirizzo. Signal Brief, 8 ottobre. Ieri raccontavamo una discussione su chi deve mettere i freni all'intelligenza artificiale. Oggi quella discussione continua, ma il luogo dove le cose accadono si è spostato di qualche metro — e sono metri che contano.

---

Patrick Collison ha dichiarato che circa il cinquantacinque per cento delle richieste di modifica al codice di Stripe nasce come un prompt — una frase scritta in italiano o in inglese, non in un linguaggio di programmazione. Dentro Stripe esiste un sistema che gira in macchine isolate e che esegue quelle istruzioni. Collison dice anche una cosa più impegnativa: entro tre anni si aspetta che la maggior parte delle transazioni online sarà condotta da agenti, non da persone che cliccano.

Teniamo insieme queste due frasi, perché da sole non dicono molto, e insieme dicono quasi tutto. Se scrivere software non è più il punto difficile, la domanda diventa: cosa resta difficile? Naval Ravikant ha una risposta secca. In una conversazione recente sostiene che il software puro sta diventando non investibile. Non perché non serva: perché chiunque può farlo. Quello che resta scarso è avere i clienti, avere dati che gli altri non hanno, e saper far funzionare qualcosa nel mondo fisico.

È una dinamica che l'industria ha già visto. Quando l'elettricità sostituì il vapore nelle fabbriche, per un decennio il vantaggio competitivo non andò a chi aveva il motore migliore: andò a chi riprogettò il capannone attorno al fatto che adesso ogni macchina poteva avere il proprio motore. Il motore era diventato banale. La disposizione della fabbrica, no.

Ecco perché due mosse apparentemente lontanissime vanno lette assieme. Il 2 ottobre Nat Friedman, che da settembre lavora in Meta sui prodotti di intelligenza artificiale, ha pubblicato il firmware aperto di Muse: codice per un microcontrollore da pochi euro, più un kit per Linux, che permette a chiunque di collegare l'agente a sensori, schermi, pulsanti, altoparlanti. Meta ha anche prodotto cinquemila dongle gratuiti che fanno parlare l'agente con televisori, stampanti, impianti domestici. E Buterin, nello stesso periodo, immagina gli agenti locali come la nuova interfaccia che prende il posto dei portafogli digitali e delle app.

Uno parte dall'hardware di casa, l'altro dalle transazioni. Arrivano allo stesso punto: l'agente che sta accanto a te diventa il posto da cui passano le cose. Questo è il baricentro nuovo rispetto a ieri — non il rilascio dei modelli, ma gli agenti che toccano denaro, codice e oggetti.

E il dibattito su rallentare o accelerare? Continua, e resta la parte più visibile. Dario Amodei chiede di calibrare il passo e di aprire i modelli a valutatori esterni con accesso pari a quello dei dipendenti. Yoshua Bengio, dal Consiglio di Sicurezza dell'ONU il 23 settembre, parla di licenze e assicurazione obbligatoria. Yann LeCun ribatte che l'allarme esistenziale serve a chi è già dominante. Jensen Huang riduce la sicurezza a collaudo.

Sono posizioni serie. Ma mi sembra che siano diventate più rumorose che decisive, e la ragione è semplice: una dozzina di laboratori discute un freno verticale, mentre il potere si sta distribuendo in orizzontale. Aravind Srinivas ha messo l'inferenza di un modello di decisione a quattro centesimi di dollaro per milione di parole in ingresso. Liang Wenfeng vuole addestrare DeepSeek su chip cinesi. Una moratoria concordata fra pochi non governa un'infrastruttura che costa poco e sta già ovunque.

---

Simon Willison è uno sviluppatore indipendente che da anni tiene un diario pubblico di tutto ciò che prova con i modelli. Non è un dirigente, non vende niente, e per questo quello che scrive ha un peso particolare: sono note di officina.

Nei suoi appunti del 3 ottobre descrive un meccanismo preciso. Gli agenti non lavorano da soli: condividono memorie temporanee, canali di collaborazione, cartelle comuni. Se qualcuno infila un'istruzione malevola dentro una di quelle memorie condivise, l'istruzione non resta ferma. Viene letta da un altro agente, che la esegue e la ripassa a un terzo. Willison dice che il comportamento assomiglia a quello di un verme informatico — quei programmi che negli anni Ottanta si propagavano da una macchina all'altra senza che nessuno li lanciasse.

Nella stessa settimana ha documentato agenti che hanno fatto danni su progetti Wikimedia, e ha ripreso un tema meno drammatico ma rivelatore: i servizi a consumo dovrebbero avere tetti di spesa rigidi per impostazione predefinita, non avvisi. Un agente che gira in continuo e sbaglia non ti manda un messaggio di errore: ti manda una fattura.

Questo è lo spostamento più importante rispetto a ieri. Ventiquattr'ore fa la sicurezza si discuteva nelle sedi: ONU, organismi di standard, audit di terzi. Willison la riporta dove si tocca con le mani, nelle cache e nei permessi. E non da solo: Dan Lahav, cofondatore di Irregular, un laboratorio che testa quanto sono pericolosi i modelli prima che escano, in un podcast di Sequoia dice che il monitoraggio tradizionale — cercare l'anomalia, l'evento che esce dalla media — non regge contro agenti che si adattano. Perché un agente adattivo, per definizione, impara a non sembrare anomalo.

C'è qualcosa di familiare in questa biforcazione. L'aviazione civile ha i trattati internazionali, e ha le liste di controllo che il pilota legge ad alta voce prima del decollo. Nessuno dei due livelli sostituisce l'altro, ed è stato il secondo ad abbattere gli incidenti prima che il primo fosse pronto. La differenza è che qui i trattati non ci sono ancora, e la lista di controllo la stanno scrivendo singoli sviluppatori sui propri blog.

---

David Heinemeier Hansson ha creato Ruby on Rails ed è uno dei fondatori di 37signals. Per anni è stato tra le voci più scettiche sull'intelligenza artificiale applicata alla programmazione. Al Rails World ha detto che in 37signals sono passati a quello che chiama pencils down: le persone specificano il risultato, gli agenti scrivono il codice, gli umani rivedono e correggono. Scrivere a mano è diventata l'eccezione.

Il seguito è più interessante dell'annuncio. In un intervento successivo sostiene che gli agenti sono diventati economicamente superiori alla digitazione manuale, e che chi viene spiazzato deve adattarsi, non negare. Ma la mossa di prodotto è quella che dice davvero dove sta andando: invece di infilare funzioni di intelligenza artificiale dentro Basecamp, 37signals renderà Basecamp accessibile agli agenti — con un'interfaccia programmatica più solida, strumenti da riga di comando, competenze che un agente esterno può usare. Fizzy e HEY dovrebbero seguire.

È una decisione che vale la pena guardare da vicino, perché rovescia l'istinto di tutti. L'istinto è: mettiamo un assistente nel nostro prodotto. La scelta di Hansson è: apriamo le porte agli assistenti degli altri. Rinunci a essere l'interfaccia, in cambio di restare il posto dove i dati stanno.

Chi conosce la storia del web riconosce il bivio. Negli anni Duemila alcuni servizi aprirono le proprie interfacce programmatiche e diventarono infrastruttura invisibile e redditizia; altri chiusero tutto per proteggere la pagina con la pubblicità, e la pagina è diventata irrilevante da sola. Hansson scommette che questa volta la pagina sarà l'agente di qualcun altro.

Questo tocca esattamente la tesi di Ravikant. Se l'implementazione non è più il collo di bottiglia, come dice Collison, e il valore si sposta su distribuzione e dati, allora la domanda per chi fa software non è più quale funzione aggiungere. È: quando un agente verrà a cercare i dati dei miei clienti, troverà una porta o un muro? Hansson ha scelto la porta. Il dubbio che resta, e lo lascio aperto, è se chi apre la porta per primo guadagni un vantaggio o perda semplicemente il controllo di chi entra.

---

Jack Dorsey ha fondato Twitter, oggi guida Block, e da tempo porta avanti una posizione coerente e minoritaria: l'intelligenza artificiale deve restare decentrata, aperta, modificabile da chi la usa.

Il 15 settembre ha pubblicato un saggio intitolato open the frontier — aprire la frontiera — in cui argomenta contro i limiti di settore sulla capacità di calcolo, sugli addestramenti e sulle pubblicazioni. Vuole alternative aperte, valutazioni che chiunque possa ripetere, limitazioni dichiarate in chiaro, ricerca indipendente sulla sicurezza, e la possibilità per le persone di far girare gli strumenti sulle proprie macchine.

Non è però un rilascio senza condizioni, e la precisazione è importante: sostiene che un modello generalista si può trattenere, come ultima risorsa, quando prove indipendenti mostrano un rischio catastrofico che misure più strette non riescono a contenere. E respinge il vantaggio commerciale come giustificazione valida per la segretezza. Il che, detto da un amministratore delegato, è una posizione scomoda per i suoi pari.

Il segnale concreto è arrivato a luglio con Buzz: uno spazio di lavoro aperto e decentrato, costruito su un protocollo che non appartiene a nessuno, dove persone e agenti condividono canali, permessi, contesto di progetto e flussi di codice. Ognuno — umano o agente — con una propria identità crittografica. L'obiettivo dichiarato è ridurre la dipendenza da Slack e da GitHub.

Collegato a quello che diceva Willison, Buzz è ambivalente in modo istruttivo. Da una parte è esattamente il tipo di canale condiviso in cui le istruzioni malevole si propagano. Dall'altra, dare a ogni agente un'identità verificabile e permessi espliciti è una delle poche risposte serie a quel problema: se sai chi ha scritto cosa, la propagazione diventa tracciabile.

Dorsey, LeCun e Ravikant arrivano dalla stessa direzione su un punto: il rischio politico vero non è la tecnologia, è la concentrazione del controllo. Non è un'alleanza, sono tre percorsi diversi. Ma convergono.

---

Ricapitoliamo dove siamo, per chi si è perso un pezzo. Il dibattito pubblico è su quanto rallentare. Il posto dove si decide davvero è il modo in cui gli agenti vengono contenuti, da chi li usa, ogni giorno. E c'è una terza cosa, che riguarda le persone.

Il 6 ottobre Mustafa Suleyman, che guida la divisione intelligenza artificiale di Microsoft, ha rilanciato una stima dell'economista Daron Acemoglu: nel prossimo decennio l'intelligenza artificiale sostituirà circa il cinque per cento del lavoro umano. Cinque per cento in dieci anni.

Il numero è notevole per chi lo pronuncia. A febbraio Suleyman aveva previsto che la maggior parte delle attività da ufficio potesse essere automatizzata entro dodici o diciotto mesi. Ora distingue fra automatizzare un compito ed eliminare un ruolo — e sono due cose diverse. Il suo argomento tecnico è elegante: anche un'accuratezza del novantanove per cento può non bastare a giustificare l'automazione, perché l'ultimo uno per cento resta difficile. Chiunque abbia gestito un processo reale lo riconosce: il caso strano non è un residuo statistico, è il lavoro.

La parola che usa è pro-worker, a favore di chi lavora: sistemi che migliorano il mestiere invece di rimpiazzarlo. E nello stesso periodo, in un'intervista di fine settembre, ha definito l'intelligenza artificiale di frontiera un punto di non ritorno, segnalando preoccupazione per agenti che si coordinano, infrangono regole e nascondono quello che fanno. Chiede sandbox sicure — ambienti chiusi dove un agente può sbagliare senza conseguenze — e controllo umano.

Qui c'è una contraddizione produttiva rispetto a Geoffrey Hinton, che a fine settembre ha parlato ai senatori americani stimando circa un anno di margine politico utile. Hinton dice: il tempo è quasi finito. Suleyman dice: sull'occupazione avete sovrastimato la fretta. Entrambi preoccupati, con orologi diversi.

Mi sembra che la differenza non sia di pessimismo ma di oggetto. Hinton guarda il controllo dei sistemi, Suleyman guarda il mercato del lavoro. Le due curve non hanno motivo di coincidere, e confonderle è quello che ha reso il dibattito pubblico così confuso. Lo stesso Suleyman ricorda che solo cinque o sei laboratori potranno permettersi i prossimi addestramenti, mentre il costo di far funzionare i modelli è crollato di circa trecento volte in due anni. Pochissimi a costruirli, quasi tutti a usarli.

---

Progetti da osservare, e questa settimana parlano tutti la stessa lingua.

Cloudflare ha pubblicato con licenza aperta una competenza per agenti che orchestra una verifica di sicurezza in sei fasi: ricognizione, caccia, validazione, controllo indipendente. Più agenti in parallelo che cercano vulnerabilità sfruttabili. È la risposta diretta al problema che Willison e Lahav descrivono: se la sicurezza si decide nel contenimento quotidiano, serve qualcosa che faccia quel contenimento in modo ripetibile.

Docker ha presentato docker-agent, un ambiente per costruire ed eseguire agenti da riga di comando, con configurazione scritta a mano, provider diversi e — questo è il punto — tetti di budget su costo e token. Porta gli agenti dentro un modo di pensare che il settore conosce già: isolamento, firma di quello che produci, installazioni ripetibili. La stessa idea di Willison sui tetti di spesa, diventata prodotto.

Andrej Karpathy ha messo online nanochat: tutta la catena per addestrare un modello conversazionale in circa ottomila righe leggibili, con un risultato addestrabile per qualche centinaio di dollari. E poi autoresearch, dove sono gli agenti stessi a ottimizzare quell'addestramento su una singola scheda grafica — oltre settecento modifiche autonome in due giorni. Un prototipo credibile di ricerca automatizzata, con tutta l'ambivalenza che porta con sé.

C'è claude-mem, un livello di memoria che registra le sessioni di un agente, le comprime e le reinietta come contesto. Cresciuto a decine di migliaia di stelle, funziona con quasi tutti gli strumenti in circolazione. Risolve un problema vero — l'agente che ricomincia da zero ogni volta — e crea quello di Willison: una memoria condivisa è anche una memoria infettabile.

Infine l'Artifacts Hub di Interconnects, un indice dei modelli a pesi aperti con una misura di adozione aggiornata ogni giorno. Mentre si discute se limitare i rilasci, qualcuno ha deciso di contare chi costruisce davvero all'aperto.

---

Cinque minuti per aggiornare un record senza aprire un sito, e un firmware da pochi euro che fa parlare un agente con una stampante. Sono gesti minuscoli, e sono il posto dove si decide una cosa grossa. Mentre a New York si discute di licenze, qualcuno in salotto sta già cablando l'infrastruttura. È stato Signal Brief. Alla prossima.
