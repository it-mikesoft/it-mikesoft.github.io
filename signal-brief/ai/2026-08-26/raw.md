# Il sistema conta più del modello

> L'attenzione si sposta dal modello all'orchestrazione che lo avvolge. E mentre l'intelligenza diventa abbondante, la fiducia resta il bene scarso.

---

Per anni la domanda è stata sempre la stessa: quanto è bravo il modello. Chi ha il punteggio più alto, chi ha i parametri, chi arriva prima. Questa settimana, da direzioni molto diverse, arriva una risposta che sposta la domanda altrove. Non conta più tanto il modello. Conta la macchina che gli sta intorno.

È il 26 agosto 2026, e questo è Signal Brief.

La scena da cui conviene partire è un post pubblicato su un blog di nicchia da un ricercatore che di benchmark se ne intende parecchio.

---

François Chollet è la persona che ha inventato ARC, il test più duro che l'industria usa per misurare quanto un'intelligenza artificiale sappia davvero ragionare invece di ripetere schemi visti in addestramento. All'inizio di agosto ha scritto una cosa che, detta da lui, pesa: i sistemi di frontiera di oggi sono già, di fatto, ibridi. Metà rete neurale, metà impalcatura costruita a mano.

La sua osservazione è concreta. Quando uno di questi sistemi risolve un problema difficile, non lo fa perché il modello ha avuto un lampo. Lo fa perché intorno al modello è stato costruito uno strato di software che lo interroga decine, centinaia di volte, confronta le risposte, tiene quelle buone, ritenta le altre. Le prestazioni che vediamo nascono lì, in quella regia. Non nel cervello, nella sala di controllo.

Il che ribalta cinque anni di racconto. Ci eravamo abituati all'idea che le capacità emergessero da sole, come proprietà misteriose che spuntano quando il modello diventa abbastanza grande. Chollet dice che no, sono state messe lì, a mano, da ingegneri che hanno scritto codice noioso intorno a una scatola nera.

E la cosa notevole è che arrivano tutti alla stessa casa da strade diverse. David Heinemeier Hansson, il creatore di Ruby on Rails, il 24 agosto ha reso pubblica e aperta a tutti la suite con cui il progetto Rails valuta gli agenti che scrivono codice. Si chiama LE MANS, e nello stesso annuncio ha segnalato che quattro modelli nuovi avevano appena spostato i risultati. Il suo lavoro quotidiano, racconta, non è più scrivere righe: è far girare più modelli in parallelo, guardare cosa producono, decidere cosa tenere. Orchestrare e rivedere.

Aravind Srinivas, che guida Perplexity, la stessa idea l'ha messa dentro un prodotto: fino a venti modelli diversi coordinati da un unico strato di regia, che decide di volta in volta chi chiamare, bilanciando velocità, costo e riservatezza dei dati.

Un ricercatore accademico, un programmatore pragmatico, un amministratore delegato. Tre mestieri che non si parlano, e la stessa conclusione.

Questa dinamica ha un precedente lungo. Nell'Ottocento, quando le fabbriche passarono dal vapore all'elettricità, per vent'anni la produttività non si mosse. Il motore elettrico c'era, era migliore, e non cambiava niente. Poi qualcuno capì che non bastava sostituire il motore: bisognava riprogettare l'intero capannone intorno al fatto che ogni macchina poteva avere il suo. Il guadagno non era nel motore. Era nell'architettura che lo circondava. Siamo esattamente lì.

E rispetto a ieri qualcosa si è mosso davvero. Nel briefing precedente il tema centrale era il costo della verifica: generare è diventato economico, controllare no. Quel tema non è sparito, ma ha cambiato posto. Non è più la cornice principale: è diventato un pezzo dentro una cornice più grande. Se il prodotto è una macchina composta da venti pezzi, la verifica smette di essere una domanda filosofica e diventa un problema di progettazione. Uno dei vincoli con cui disegni il sistema, come la sicurezza in un ponte.

Il che porta a una domanda scomoda, che questa settimana è stata posta ad alta voce da chi meno te lo aspetteresti.

---

Dario Amodei guida Anthropic, uno dei laboratori che costruiscono i modelli più avanzati al mondo, e in pubblico si vede pochissimo. Tra il 15 e il 16 agosto ha rotto il silenzio con una serie di messaggi su X, cosa per lui rara abbastanza da essere notata da tutti.

Il contenuto è insolito. Amodei ha respinto l'accusa che i laboratori, parlando dei rischi dell'intelligenza artificiale, si siano tirati addosso l'ostilità del pubblico. Ha rifiutato l'idea che si debba scegliere tra regolamentare e lasciare i modelli aperti, sostenendo che regole scritte bene possono limitare i grandi laboratori senza proteggerli dalla concorrenza. Ma il passaggio che è rimasto attaccato è un altro, ed è un'ammissione: la critica più forte che si può muovere alla sua azienda, dice, è che le aziende di intelligenza artificiale non hanno ancora prodotto benefici reali per le persone. E aggiunge che la responsabilità è interamente loro.

Detto da uno degli amministratori delegati più esposti del settore, è una frase pesante. Non è un problema di comunicazione. È un problema di risultati. Amodei lega la prossima fase della sua azienda alla biologia e alla medicina, dice di aspettarsi i primi segnali nei prossimi mesi, e promette che se arriverà qualcosa di serio in campo medico lo si sentirà dire forte.

Il collegamento con il filo di oggi è più stretto di quanto sembri. Se l'intelligenza dei sistemi migliori nasce dall'orchestrazione, come sostiene Chollet, allora la promessa che il modello da solo, crescendo, avrebbe risolto tutto era una promessa sbagliata fin dall'inizio. Le cose utili vanno costruite pezzo per pezzo, con lavoro d'ingegneria noioso e verificabile. E quel lavoro richiede tempo, il che spiega perché i benefici non si vedano ancora.

C'è una simmetria che si nota leggendo insieme tutto il materiale della settimana. L'intelligenza sta diventando abbondante e a buon mercato: modelli aperti potentissimi escono ogni pochi giorni. La fiducia no. La fiducia resta scarsa, e non si compra con il calcolo.

---

Naval Ravikant è un investitore che scrive poco e in frasi corte, e da anni una parte della Silicon Valley lo legge come si legge un aforista. Il 15 agosto ha pubblicato una riga sola: non puoi creare Dio e mettergli il guinzaglio.

Quattro giorni dopo, il 19, ne ha pubblicata un'altra, di tutt'altro tono: prima o poi ogni interfaccia sarà conversazione e gesti in entrata, conversazione e video in uscita. Cioè: la finestra, il menu, il pulsante — l'intero vocabolario visivo con cui usiamo i computer da quarant'anni — sarebbero un passaggio, non un punto d'arrivo.

Ma è la prima frase quella che parla al tema di oggi, perché sposta il problema del controllo da un piano all'altro. Tutta la discussione tecnica sulla sicurezza dei modelli dà per scontato che si stia risolvendo un problema di ingegneria: metti i limiti giusti, scrivi le regole giuste, e il sistema resta dentro i binari. Ravikant dice che il problema non è ingegneristico, è logico. Se costruisci una cosa più capace di te, la parola controllo perde senso — non perché sia difficile, ma perché è una contraddizione nei termini.

Su questo punto la settimana offre due risposte opposte, entrambe pratiche.

Vitalik Buterin, che ha fondato Ethereum, il 10 agosto ha aggiornato la sua mappa dei prossimi anni. Dentro c'è l'intelligenza artificiale, ma con un confine tracciato con la matita rossa: i modelli servono ad aiutare gli esseri umani a dimostrare che il codice fa quello che dice di fare. Il consenso, cioè la decisione su cosa vale, resta agli umani. Non è una dichiarazione di principio, è una scelta di architettura.

Jack Dorsey, che ha fondato Twitter e oggi guida Block, prende la strada dei documenti d'identità. A luglio ha rilasciato Buzz, uno spazio di lavoro aperto dove persone e agenti condividono conversazioni, compiti e codice. Ogni partecipante, umano o software, ha una propria chiave crittografica, e ogni azione viene firmata e registrata in un registro che non si può riscrivere. Se un agente combina qualcosa, si sa esattamente quale agente, quando, e con quali permessi.

Sono due modi di dire la stessa cosa: non provo a controllare l'intelligenza, delimito il campo in cui può muoversi. Somiglia molto a come abbiamo affrontato le società per azioni — nessuno pretende di controllare cosa pensa un'impresa, si stabilisce cosa può firmare e chi risponde.

---

Prima di proseguire, un passo indietro per chi si fosse perso qualche minuto. Il filo di oggi è uno: l'attenzione si è spostata dal modello al sistema che lo contiene. E da questo spostamento discendono due domande. Chi guadagnerà, in una filiera fatta di pezzi intercambiabili. E se il controllo di questi sistemi sia un problema tecnico o qualcosa di più profondo.

Sulla prima domanda, questa settimana, le posizioni si sono allontanate parecchio.

Benedict Evans è un analista che da vent'anni racconta i cambi di piattaforma nel mondo tecnologico, ed è uno dei pochi ad averli letti bene mentre accadevano. A luglio ha pubblicato un pezzo sul prezzo dei modelli in cui avanza un'ipotesi sgradevole per chi li costruisce: i laboratori potrebbero somigliare sempre più a infrastruttura a margini bassi. Non monopoli che stampano soldi, ma qualcosa di più simile alle compagnie elettriche. Man mano che i modelli diventano intercambiabili — e se il valore sta nell'orchestrazione, diventano intercambiabili per costruzione — la capacità di far pagare caro si comprime. Evans nota anche che l'unico uso con un mercato chiaramente formato, oggi, è la scrittura di codice. Il resto è ancora incerto.

Jensen Huang, che guida Nvidia, spinge nella direzione opposta con una determinazione che ha del temerario. L'11 agosto ha presentato insieme a grandi banche d'affari un piano di finanziamento da cinquecento miliardi di dollari per aiutare i clienti a costruire centri di calcolo. Il punto non è la cifra: è la riclassificazione. Comprare processori smette di essere un acquisto che perde valore nel tempo e diventa un investimento in un bene che produce reddito, come una centrale o un'autostrada. Huang sostiene anche che il vincolo vero non è la domanda ma l'energia, e parla di un fabbisogno mille volte superiore a quello disponibile oggi.

Le due tesi non si contraddicono, si incastrano. Se i modelli si commoditizzano, il potere scivola verso chi possiede i mattoni. È successo con le ferrovie: le compagnie che gestivano le linee andarono in bancarotta a ripetizione, mentre chi possedeva l'acciaio e il carbone continuò a guadagnare.

In mezzo, una voce fuori dal coro. Paul Graham, che ha creato Y Combinator e ha formato una generazione di fondatori, il 23 agosto ha scritto che se avesse diciassette anni oggi imparerebbe a costruire modelli linguistici da zero, addestrandoli con qualunque macchina riuscisse a procurarsi. E che non fonderebbe una startup, non ancora. È una scommessa sulla profondità tecnica proprio nel momento in cui tutti danno quel livello per risolto.

---

Progetti da osservare. E raccontano tutti la stessa storia.

DeepSeek ha rilasciato il 13 agosto un'impalcatura per agenti, aperta a tutti, in cui ogni pezzo — il modello, gli strumenti, la memoria, l'interfaccia — è sostituibile come una cartuccia. Tiene anche un diario di sessione che registra tutto quello che il modello ha visto, senza possibilità di cancellare. In due settimane ha superato le centonovantamila stelle su GitHub, un numero che di solito si accumula in anni. È la tesi di Chollet trasformata in software da scaricare.

Buzz, lo spazio di lavoro di Block di cui si parlava prima, dove ogni agente ha la sua identità firmata.

Orca, un ambiente per far lavorare in parallelo flotte di agenti che scrivono codice, ciascuno nella propria copia isolata del progetto. Il baricentro è tutto sulla revisione: si commenta la singola riga di modifica e la si rimanda all'agente senza cambiare finestra.

Maiao porta su GitHub e GitLab uno stile di revisione del codice più severo, dove ogni modifica si valuta a piccoli passi. Un'idea vecchia che torna utile adesso che il codice costa poco e il collo di bottiglia è guardarlo.

E poi il marketplace dei plugin per Claude, dove capacità e flussi di lavoro diventano componenti che si installano e si scambiano. È la stessa idea vista dal lato dell'ecosistema: il valore migra dal modello a quello che gli si costruisce attorno.

Sul fronte dei modelli aperti, la settimana è stata generosa: GLM-5.2 da Z.ai, con licenza permissiva e prestazioni da frontiera sui compiti di programmazione lunghi; Qwen3.8-27B, che vede immagini e video e sta in un file da diciassette gigabyte sul portatile; Muse Glimmer di Meta, pensato per far girare agenti in locale senza mandare niente fuori. Tre modi diversi di dire che l'intelligenza sta diventando un ingrediente da dispensa.

---

Resta quella frase di Amodei, che non è una previsione ma un'ammissione: i benefici veri non si vedono ancora, ed è colpa nostra. Detta nella stessa settimana in cui si scopre che l'intelligenza dei sistemi migliori viene dall'impalcatura e non dal cervello, suona quasi come un sollievo. Vuol dire che c'è ancora molto da costruire, a mano, con pazienza. È stato Signal Brief. Alla prossima.
