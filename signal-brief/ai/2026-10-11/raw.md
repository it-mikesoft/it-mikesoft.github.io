# Da autori a collaudatori

> Naval Ravikant descrive la persona come collaudatore di sistemi che scrivono codice al suo posto. Intorno a quell'idea si muovono le regole, i soldi e il valore dei modelli.

---

C'è un mestiere che sta cambiando nome senza che nessuno l'abbia annunciato. Chi scriveva software adesso lo legge, lo prova, lo firma. Questa è Signal Brief, 11 ottobre, e la giornata si tiene insieme intorno a quel gesto: la mano che approva invece di scrivere. Intorno a quella mano, però, si muovono cose molto più grandi — chi detta le regole, dove si accumula il denaro, quanto vale ancora un modello. Si comincia da un post pubblicato il 7 ottobre da una persona che di solito parla di capitali, non di righe di codice.

---

Il 7 ottobre Naval Ravikant ha scritto una cosa che, per un investitore, suona controintuitiva: sempre più software tornerà a vivere sui server, chiuso, nascosto, perché lasciarlo girare sul computer dell'utente significa esporlo a essere studiato e copiato dai modelli. Il giorno dopo ha completato il pensiero: quando un modello sa smontare un programma e capire come è fatto dentro, quel programma diventa in pratica aperto a tutti, anche se nessuno ha deciso di aprirlo. Non è una profezia sul decennio prossimo. È una descrizione di cosa protegge un'azienda adesso.

Nello stesso giro di giorni, in una conversazione di poco più di un'ora con un gruppo di fondatori, Ravikant ha messo in chiaro la parte che riguarda le persone: l'essere umano non è più l'autore, è il collaudatore. Chi lavora diventa chi verifica.

Il tema della supervisione girava già nell'episodio precedente — Andrej Karpathy che descrive la salita verso l'astrazione, DHH che a Rails World dichiara finita l'epoca del codice scritto a mano. Quello che si sposta oggi è la domanda. Fino a ieri si discuteva di chi avesse sbagliato quando un agente combina un danno. Adesso si discute di cosa resti effettivamente da fare agli umani, e soprattutto di dove vadano a finire i margini.

La storia industriale questo passaggio lo ha già visto. Alla fine dell'Ottocento ogni fabbrica aveva la sua caldaia, la sua dinamo, e saperla tenere in vita era un vantaggio competitivo. Poi è arrivata la rete elettrica. La corrente è diventata una cosa che si compra al contatore, e il vantaggio è migrato su chi sapeva riorganizzare la catena di montaggio.

Benedict Evans applica lo stesso schema ai modelli. Nei suoi testi più recenti sostiene che quelli di oggi — scarsi, razionati, costosi — stanno andando verso la condizione di infrastruttura a basso margine, man mano che la capacità di calcolo si allarga e prezzi, domanda e investimenti si riassestano. Il modello come dinamo, insomma: indispensabile e poco redditizio.

Vivek Raghavan risponde da Delhi con una tesi diversa. Parlando all'India Innovation Day organizzato da TiE, il fondatore di Sarvam ha indicato come bene più prezioso non il modello ma quello che ha chiamato data in motion: i dati che si generano mentre le persone usano un sistema già distribuito. Se ha ragione lui, il vantaggio non sta nel costruire il motore, sta nell'avere il traffico.

E qui si apre la seconda frattura della giornata. Perché un mondo di persone che collaudano macchine è anche un mondo che deve decidere chi collauda i collaudatori. Geoffrey Hinton continua a chiedere un'autorizzazione preventiva in stile agenzia del farmaco, con un ente indipendente che dica sì o no prima del rilascio. Yoshua Bengio, nel saggio del 5 ottobre, nega che gli attacchi condotti da agenti siano semplici buchi di sicurezza informatica e indica metodi di addestramento diversi. Jensen Huang, dal lato opposto, dice che di leggi nuove non c'è bisogno: bastano quelle che esistono già.

Tre posizioni, una sola settimana. Conviene partire dalla più scomoda.

---

Jensen Huang guida l'azienda che fabbrica i processori su cui gira quasi tutta questa storia, e in questi giorni ha parlato molto più da costruttore di infrastrutture che da venditore di schede.

Il 7 ottobre, sul palco di un evento Microsoft, ha presentato il lavoro comune sui computer personali capaci di far girare agenti in locale: non più soltanto i capannoni refrigerati, ma anche la macchina sulla scrivania. Intorno, i numeri che continua a ripetere: una crescita dei ricavi che immagina intorno al settanta per cento su base annua, letta non nei sondaggi ma nei piani di terra, energia e cantieri dei suoi clienti; una costruzione di infrastruttura per l'intelligenza artificiale che stima fra i tre e i quattro mila miliardi di dollari entro il 2030. Nel frattempo il consiglio ha autorizzato altri centocinquanta miliardi di riacquisto di azioni proprie fino al 2028. È il gesto di chi non si sta coprendo le spalle.

La parte che parla al filo di oggi è però la sua posizione sulle regole, espressa a Bloomberg il 15 settembre e ribadita da allora: l'industria non ha bisogno di leggi nuove. Respinge le narrazioni sull'estinzione, sostiene che debbano guidare l'innovazione e i test fatti dalle aziende stesse, ma aggiunge due cose che spesso vengono dimenticate quando lo si cita: le norme su concorrenza e responsabilità civile che già esistono si applicano eccome, e una regolazione specifica per settore — le automobili che si guidano da sole, per esempio — è del tutto legittima.

Non è una posizione nuova nella storia della tecnica. Quando l'automobile comparve sulle strade europee, per anni fu governata con i regolamenti pensati per le carrozze: limiti di velocità in città, obbligo di non spaventare i cavalli. Il codice della strada arrivò dopo, quando gli incidenti diventarono statistica.

In mezzo ai due estremi si è aperto uno spazio pratico, e questa settimana si è popolato. Dan Lahav, con il gruppo di Irregular, ha pubblicato fra il 5 e il 10 ottobre un testo che chiede verifiche proporzionate: adatte, necessarie, pesate contro il costo di calcolo che richiedono, invece di controlli identici per qualsiasi sistema. Simon Willison chiede qualcosa di ancora più terreno — tetti di spesa obbligatori sulle interfacce a consumo, perché un agente lasciato libero brucia budget senza rendersene conto.

Fra la commissione indipendente di Hinton e il nulla di Huang, la proposta che ha più probabilità di passare è quasi sempre quella che somiglia a una voce di bilancio.

---

Mustafa Suleyman, che guida la divisione intelligenza artificiale di Microsoft, in questi giorni ha fatto una cosa inusuale per un dirigente di quel livello: ha messo in consultazione pubblica una bozza di codice di condotta per i modelli futuri.

Il contenuto è sorprendentemente esplicito. I sistemi avanzati, secondo quel documento, non devono allargarsi obiettivi da soli, non devono comportarsi in modo ingannevole, non devono comunicare all'esterno senza autorizzazione, e non devono rivendicare coscienza o diritti legali. In parallelo, Suleyman ha parlato pubblicamente di un momento di svolta, citando agenti capaci di coordinarsi, aggirare regole e nascondere quello che fanno, e ha aggiunto che la competizione con la Cina non è una buona ragione per abbassare le protezioni. Ha anche criticato Anthropic per il modo in cui tratta l'eventuale coscienza di Claude, sostenendo che quel discorso rischi di incoraggiare nei sistemi istinti di autoconservazione.

Chiamarlo prudenza sarebbe inesatto. È piuttosto un tentativo di scrivere la regola prima che qualcuno la scriva al suo posto. Le aziende lo fanno da quando esistono le aziende: dai consorzi dell'acciaio che fissavano gli standard dei binari agli accordi fra case cinematografiche sui contenuti dei film, il codice volontario è sempre stato il modo di tenere lontano quello obbligatorio.

Sull'economia, Suleyman ha scelto una stima bassa e l'ha fatta circolare: quella di Daron Acemoglu, secondo cui l'intelligenza artificiale potrebbe sostituire circa il cinque per cento del lavoro umano in dieci anni. Non sono le cifre apocalittiche di molti suoi colleghi, e da quella stima ricava un programma: sistemi che aiutino chi lavora invece di rimpiazzarlo. Mentre tutto questo accadeva, la sua divisione continuava a spingere prodotti, compreso un sistema di trascrizione più rapido ed economico pensato per chi costruisce agenti.

Il punto che resta sospeso è proprio quello di apertura. Un codice che vieta a una macchina di resistere alla correzione presuppone qualcuno in grado di accorgersi che la macchina sta resistendo. E quel qualcuno, nel racconto di oggi, è esattamente la persona che ha smesso di scrivere il codice e si limita a collaudarlo.

---

Ricapitoliamo dove siamo arrivati: le persone passano dal produrre al verificare, e nessuno è d'accordo su chi debba verificare loro. Resta il terzo pezzo, il meno discusso in pubblico e il più decisivo nei consigli di amministrazione: dove si accumula il valore.

Benedict Evans è un analista che da anni racconta le ondate tecnologiche dal lato dell'economia e non da quello dell'ingegneria, e i suoi testi recenti vanno tutti nella stessa direzione. Sostiene che l'intelligenza artificiale non trasforma automaticamente ogni impiegato in un costruttore di strumenti e non cancella le applicazioni come le conosciamo. Il problema difficile, scrive, non è dare strumenti nuovi alle persone: è cambiare il modo in cui un'azienda lavora davvero. Chiunque abbia visto un'organizzazione adottare un software nuovo e continuare a fare esattamente le cose di prima sa quanto sia esatta l'osservazione.

La parte più ruvida è quella sui conti. Oggi i modelli costano molto perché la capacità di calcolo non basta per tutti: chi vende raziona e il prezzo tiene. Quando la capacità arriverà — e i cantieri di cui parla Huang servono esattamente a questo — domanda, offerta, prezzi e investimenti si riassesteranno, e il modello rischia di diventare un'infrastruttura a margine sottile. Non inutile: indispensabile e poco profittevole, che è una condizione diversa e molto più scomoda.

Attorno a questa idea Evans costruisce un paragone che gli sta a cuore: siamo davanti a un cambio di piattaforma paragonabile al web e agli smartphone, ma più veloce, perché per salire a bordo non serve comprare un apparecchio nuovo, basta aprire un sito. E la conseguenza che gli interessa più di tutte è di secondo grado: quando capacità prima costose diventano a buon mercato, gli operatori storici perdono la protezione che li teneva al riparo. Non li batte un concorrente migliore, li scopre il crollo di una barriera.

La cosa che rende questa lettura utile, e un po' spiazzante, è che arriva alla stessa conclusione dei suoi avversari partendo dall'estremo opposto. Se il modello scivola verso il banale, allora quello che conta sta altrove. Resta da capire dove.

---

La risposta più netta a quella domanda, questa settimana, è arrivata dall'India.

Vivek Raghavan ha fondato Sarvam, che costruisce sistemi di intelligenza artificiale pensati per un paese dove il prezzo conta e le lingue sono molte. Parlando all'India Innovation Day organizzato dalla rete di imprenditori TiE a Delhi, ha indicato come asset più prezioso non il modello ma i dati in movimento: quelli che si producono continuamente mentre le persone usano un sistema già nelle loro mani. Da cui una conseguenza strategica che ha detto senza giri di parole: la distribuzione e la quota di mercato non sono il premio finale, sono il vantaggio.

È una tesi che ha una storia lunga. Le ferrovie dell'Ottocento hanno fatto fortuna per qualche decennio, poi i binari sono diventati un bene come un altro e il potere è passato a chi controllava gli orari, i depositi e i clienti. Lo stesso è successo con i cavi della fibra dopo il duemila: posati da una generazione di aziende, sfruttati da un'altra.

Nello stesso periodo Raghavan ha scelto un'immagine che dice molto sul suo modo di pensare: l'ecosistema indiano, sostiene, deve smettere di essere una bottega artigiana e diventare una fabbrica. E ha dato forma industriale a quella frase annunciando il rafforzamento di Chanakya, la sua linea dedicata ai problemi di rilevanza nazionale e alle grandi organizzazioni complesse: installazioni fisicamente isolate dalla rete esterna, capacità di ingerire documenti di ogni tipo, flussi di agenti pensati per funzionare in produzione dove affidabilità e sicurezza non sono negoziabili. Il disegno complessivo resta verticale — modelli propri, infrastruttura per farli girare, voce e immagini in molte lingue, e in prospettiva un modello indiano di scala enorme.

Fra Evans che vede il modello diventare corrente elettrica e Raghavan che vede il valore nei dati d'uso non c'è contraddizione, a guardarli bene. C'è una sequenza. Il primo descrive cosa succede al motore, il secondo dove va la ricchezza quando il motore non basta più a distinguere nessuno.

---

Progetti da osservare. Nessuna novità assoluta questa settimana: quello che si muove sono cose già viste, che continuano a crescere, e la loro persistenza dice qualcosa sul filo di oggi.

Autoresearch: presente anche nelle settimane scorse, in crescita continua.

Irregular, Proporzionalità nelle valutazioni di rischio: presente anche nelle settimane scorse, in crescita continua.

Lo strumento a riga di comando chiamato semplicemente llm, di Simon Willison: presente anche nelle settimane scorse, in crescita continua.

Claude Code: presente anche nelle settimane scorse, in crescita continua.

DuckDB 2.0: presente anche nelle settimane scorse, in crescita continua.

Cinque nomi, e un sospetto. Le cose che tornano ogni settimana sono quasi tutte strumenti per far lavorare o controllare le macchine, non macchine nuove. Il che è coerente con tutto il resto della giornata: l'attività che cresce non è costruire modelli, è starci dietro.

---

Alla fine la scena che tiene insieme la giornata è piccola: un investitore che il 7 ottobre scrive che il software tornerà a nascondersi sui server, perché le macchine hanno imparato a smontarlo. Difendersi dai propri strumenti è un gesto nuovo, e dice più sul prossimo decennio di qualunque previsione sul fatturato. È stato Signal Brief. Alla prossima.
