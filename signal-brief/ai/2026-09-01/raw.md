# Gli scettici hanno cambiato idea

> I critici storici dell'entusiasmo sull'intelligenza artificiale adottano gli agenti come metodo di lavoro. E mentre produrre costa sempre meno, accertare costa sempre di più.

---

Primo settembre 2026. La notizia di oggi non è che gli agenti funzionino: è chi lo sta ammettendo. David Heinemeier Hansson, per anni tra le voci più ruvide contro l'entusiasmo intorno all'intelligenza artificiale, oggi lavora con due modelli in parallelo e rilegge le loro modifiche una per una. Andrew Ng, provando a elencare le competenze che decidono quali aziende riescono a consegnare qualcosa, non ci trova il prompting: ci trova l'uso degli agenti. Questo è Signal Brief. Si comincia da una conversione.

---

Il 28 agosto Heinemeier Hansson, il programmatore danese che ha creato Ruby on Rails e che da vent'anni fa il bastian contrario del settore, si è seduto davanti a Lex Fridman per parlare di futuro della programmazione. In un post recente ha scritto che alla fine dell'anno scorso gli agenti, per lui, si sono improvvisamente svegliati. E nella pratica quotidiana significa una cosa precisa: un modello veloce che macina, un modello più forte che rifinisce, e lui che rilegge le differenze nel proprio editor prima di accettarle.

Nell'episodio precedente il filo era che l'agente stava diventando l'unità di lavoro al posto del singolo comando: Karpathy che descriveva Claude dentro Slack come una nuova forma di collega, Jack Dorsey che costruiva Buzz, il posto di lavoro dove persone e agenti condividono canali e permessi. Oggi il filo si sposta di un passo. La domanda non è più se funzionino. È che cosa bisogna saper fare adesso, e di chi ci si può fidare.

Sulla prima metà la risposta arriva da Andrej Karpathy: l'abilità che conta non è più scrivere il codice, e nemmeno formulare la richiesta giusta. È disegnare il ciclo della delega — decidere cosa affidare, con quali permessi, con quali prove di correttezza, e dove mettere il proprio giudizio. È lo stesso mestiere del capomastro che a un certo punto smette di posare mattoni e comincia a organizzare la squadra: non lavora di meno, lavora su un piano diverso, e sbaglia in modi nuovi.

Sotto l'accordo apparente resta però una spaccatura su cosa manchi ancora per il salto successivo. Per Sam Altman e Jensen Huang il limite è materiale: calcolo, energia, capitale. Il 26 agosto, alla CNBC, Huang ha difeso il fatto che Nvidia finanzi direttamente le aziende del proprio ecosistema, definendola un'occasione irripetibile e a rischio basso, perché l'infrastruttura si può sempre riutilizzare altrove. Per Yann LeCun e François Chollet il limite è invece nella forma stessa dei modelli: la strada dei modelli linguistici sarebbe sbagliata, o quantomeno insufficiente. È la differenza tra chi pensa che la strada sia tracciata e serva solo asfaltarla, e chi pensa che porti da un'altra parte.

La frattura più profonda però riguarda la fiducia, e qui c'è la novità vera di questo giro. Balaji Srinivasan l'ha formulata come una regola economica: l'intelligenza artificiale abbassa il costo di produrre qualcosa e alza il costo di accertare che sia vero. Fin qui era una diagnosi condivisa. Adesso sono arrivate le risposte, e sono tecniche, non morali. Modelli che girano sul proprio computer invece che nel cloud di qualcun altro. Identità degli agenti registrate su una catena pubblica, con depositi e reputazione. Misurazione indipendente degli effetti reali. E, all'estremo opposto della scala, tavoli internazionali sotto l'insegna delle Nazioni Unite.

Cinque persone diverse, cinque risposte diverse, una sola domanda: quando produrre non costa quasi nulla, chi certifica?

---

Andrej Karpathy è uno dei nomi più ascoltati quando si parla di come si costruiscono materialmente i modelli, e da maggio lavora nel gruppo di pre-addestramento di Anthropic — cioè la fase in cui un modello viene istruito da zero sui dati, prima di qualsiasi rifinitura. Un cambio di posizione che dice già qualcosa: si è spostato dai prodotti verso la ricerca di frontiera.

Il gesto concreto di queste settimane è una constatazione ripetuta in pubblico. Gli agenti che scrivono codice, dice, fino a dicembre praticamente non funzionavano; adesso praticamente funzionano. E lo sviluppo del software è diventato, parola sua, irriconoscibile. Non è un entusiasmo generico: è accompagnato da cose che si possono aprire e leggere. C'è microGPT, uno script Python di circa duecento righe, senza dipendenze, che addestra un piccolo modello linguistico partendo da zero — pubblicato a febbraio e aggiornato ancora a fine agosto. E c'è un esperimento che ha chiamato autoresearch, dove ha lasciato che fosse un agente a modificare il codice di addestramento e a lanciare decine di prove per migliorare i risultati, presentandolo come un'anteprima di come lavoreranno i laboratori.

Il collegamento con il filo di oggi è diretto. Se una macchina può correre gli esperimenti al posto tuo, il lavoro che resta è decidere quali esperimenti valgano, quali permessi concedere, come accorgersi che un risultato è buono davvero e non solo plausibile. Karpathy chiama questa cosa il ciclo di delega, ed è esattamente il punto in cui la competenza si sta trasferendo.

Osservandolo con calma, l'aspetto più curioso è che le due cose che ha messo in mano al pubblico vanno in direzioni opposte. Da un lato un agente che fa ricerca al posto suo. Dall'altro duecento righe di codice pensate perché una persona capisca come funziona un modello invece di limitarsi a usarlo — la stessa raccomandazione che Paul Graham fa a chi ha diciassette anni. Delegare tutto e capire tutto sembrano richieste contraddittorie. Forse è proprio la contraddizione il mestiere nuovo: solo chi ha aperto il motore almeno una volta sa quando smettere di fidarsi di chi lo guida al posto suo.

---

David Heinemeier Hansson è il creatore di Ruby on Rails, uno degli strumenti con cui è stata costruita mezza internet degli ultimi vent'anni, ed è soprattutto noto per dire di no: al cloud, alle grandi piattaforme, alle mode del settore. Per parecchio tempo il suo no ha riguardato anche l'intelligenza artificiale.

Il quadro di fine agosto è diverso. C'è la lunga conversazione con Lex Fridman del 28, costruita intorno alla programmazione con gli agenti e a Linux. C'è Omarchy Quattro, la quarta versione della distribuzione Linux che continua a curare, con l'idea di usare al primo avvio un video introduttivo generato dall'intelligenza artificiale. E c'è il modo in cui lavora adesso, raccontato da chi lo osserva da vicino: due modelli accesi in parallelo, uno rapido e uno più capace, e lui che legge le differenze prodotte nel proprio editor prima di dare il via libera. Non è un adepto. È un caposquadra sospettoso che controlla il lavoro fatto da altri.

E qui la conversione diventa interessante. Uno scettico che si entusiasma vale poco come segnale, perché gli scettici cambiano idea di continuo. Uno scettico che adotta un metodo e ne descrive i limiti operativi vale molto di più. La differenza tra la promessa e la pratica è tutta lì: nel fatto che qualcuno abbia costruito un modo di lavorare abbastanza noioso da poterlo ripetere ogni giorno.

Andrew Ng ha messo la stessa osservazione in forma di elenco. In un ritratto pubblicato da Forbes a metà agosto ha provato a mappare quali competenze decidano davvero se una giovane azienda riesce a consegnare un prodotto, e la voce che conta non è saper scrivere richieste eleganti a un modello. È saper far lavorare gli agenti, cioè saper costruire il giro completo: cosa fanno, dove si fermano, chi controlla il risultato.

Due percorsi diversi che arrivano allo stesso punto. Il primo per esperienza personale, quasi controvoglia. Il secondo per osservazione sistematica di decine di aziende. Quando il critico più rumoroso e il didatta più metodico dicono la stessa cosa nella stessa quindicina, di solito significa che la fase sperimentale è finita.

---

Balaji Srinivasan è un investitore e saggista che da anni ragiona su reti, monete e comunità che si organizzano da sole. La sua formula più citata di questi mesi è secca: l'intelligenza artificiale abbassa il costo di produrre e alza quello di accertare. Fabbricare un testo, un'immagine, una perizia, un codice: quasi gratis. Stabilire che siano veri: sempre più caro.

In una conversazione con a16z ha aggiunto una piega meno ovvia. Secondo lui l'intelligenza artificiale non sostituisce i capi, li moltiplica: rende tutti amministratori delegati di qualcosa, con squadre di macchine da dirigere, e allora il collo di bottiglia diventa il giudizio umano — che non scala. Al palco di SuperAI, quest'anno, ha descritto il futuro dell'intelligenza artificiale con tre aggettivi: personale, privata, programmabile. E nei suoi post recenti si trovano argomenti che sembrano venire da un manuale di ingegneria industriale più che da un dibattito filosofico: idempotenza, cioè fare in modo che se un comando parte due volte per sbaglio il risultato resti uno solo; interruttori automatici che fermano un agente impazzito; code dove finiscono i messaggi che nessuno è riuscito a consegnare. Trattare gli agenti come impianti di produzione, non come dimostrazioni.

La conclusione politica che ne trae è la fiducia ristretta: fidarsi di cerchie piccole e verificabili invece che di dichiarazioni diffuse, e appoggiarsi a strumenti crittografici per il resto. Chi trova la cosa esotica dovrebbe pensare ai mercanti fiorentini del Trecento, che spostavano capitali per mezza Europa senza spedire una moneta, usando lettere di cambio che valevano solo dentro una rete di famiglie che si conoscevano una per una. Non era arretratezza: era l'unica risposta possibile quando accertare a distanza costava troppo.

Il fatto che sia coerente fino in fondo lo si vede anche nella biografia. Dopo la chiusura della sua Network School in Malesia, il progetto si è spostato in Kazakistan con un accordo quinquennale legato al ministero locale dedicato all'intelligenza artificiale. Costruire comunità che si scelgono i propri vincoli è la stessa idea, applicata alle persone invece che al software. Resta una domanda scomoda: una società fatta di cerchie che si fidano solo al proprio interno risolve il problema della verifica, ma di certo non risolve quello di parlarsi tra cerchie diverse.

---

Vitalik Buterin ha fondato Ethereum, la rete pubblica su cui si eseguono programmi che nessuno controlla da solo. La sua posizione sull'intelligenza artificiale, fino a poco fa, era sostanzialmente difensiva: usare i modelli per irrobustire il software, in particolare per la verifica formale dei protocolli — cioè dimostrare matematicamente che un programma fa quello che promette. Ha anche proposto un linguaggio che si traduca direttamente in dimostrazioni verificabili.

Adesso il verso della freccia si è invertito, e questa è la vera evoluzione di oggi. Non più l'intelligenza artificiale al servizio di Ethereum, ma Ethereum al servizio di un mondo pieno di agenti. Nella visione che ha delineato di recente, la rete diventa lo strato dove gli agenti hanno un'identità registrata, un deposito che possono perdere se si comportano male, una reputazione che si accumula, e strumenti per pagarsi tra loro senza passare da una banca. Accanto a questo, l'inferenza locale: modelli che girano sul computer di casa. Ad aprile ha raccontato il proprio assistente personale montato in casa, isolato dal resto del sistema, con i documenti sul disco e il minor numero possibile di richieste verso l'esterno.

Sull'idea opposta — affidare le decisioni collettive direttamente a un modello — è stato netto: la definisce governance ingenua, perché un sistema che si può raggirare con le parole giuste non può reggere l'allocazione di risorse. Servono persone che sorvegliano e meccanismi di mercato che si controllano a vicenda.

Il collegamento con il filo del giorno è quasi geometrico. Srinivasan arriva alla fiducia ristretta partendo dall'economia; Buterin arriva quasi allo stesso posto partendo dall'infrastruttura. Uno dice: fidati di poche persone e verifica il resto con la crittografia. L'altro dice: mettiamo un deposito in gioco, così l'agente ha qualcosa da perdere.

È la stessa mossa che si fa da secoli quando una promessa non basta più: si chiede una cauzione. La novità è che stavolta la cauzione la mette un programma, e a garantire non c'è nessun tribunale.

---

Yann LeCun è tra i padri delle reti neurali moderne, e da qualche mese è presidente esecutivo di AMI Labs, la società che ha fondato per costruire quelli che chiama modelli del mondo: sistemi che imparano come funzionano gli oggetti e lo spazio, non come si concatenano le parole. Secondo le ricronache più recenti il lavoro è ancora in fase di messa a punto, con applicazioni industriali come primo obiettivo.

A fine agosto ha riassunto il proprio programma di ricerca in una frase quasi domestica: vuole capire perché i modelli linguistici sanno scrivere un saggio ma non sanno mettere in ordine la sua camera da letto. Dietro la battuta c'è la tesi che porta avanti da anni — quella strada non arriva all'intelligenza di livello umano — e che François Chollet, da un'altra angolazione, sfuma dicendo che i sistemi migliori di oggi non sono affatto reti pure: sono impasti, con parecchio codice tradizionale che orchestra molte chiamate al modello.

Nello stesso periodo LeCun ha ripetuto un argomento diverso, e per il filo di oggi più importante: che l'intelligenza artificiale debba essere ampiamente disponibile, condivisa e aperta, e che il rischio maggiore non sia la macchina ma la concentrazione del potere in pochi fornitori chiusi. Non è più solo una preferenza tecnica, è una posizione politica esplicita. La stessa che Mira Murati porta avanti chiedendo una pluralità di attori, e che Liang Wenfeng traduce in pratica tenendo aperti i modelli migliori di DeepSeek mentre costruisce cluster di calcolo in casa propria.

Messo accanto a Huang, il quadro è chiaro: uno sostiene che la concentrazione di capitale sia il motore che alimenta tutto il resto, l'altro che sia proprio la concentrazione il problema. Entrambi hanno ragione sui fatti e disaccordo totale sul giudizio.

La cosa da tenere presente è che questa non è una discussione su chi finanzia. È una discussione su chi potrà controllare i controllori — perché una verifica indipendente fatta con strumenti che appartengono a chi viene verificato non è indipendente.

---

Ricapitoliamo un attimo dove siamo. Gli agenti sono passati da promessa a metodo, la competenza si è spostata sulla delega, e la domanda aperta è chi possa garantire cosa. L'ultima risposta della giornata è la più istituzionale, e arriva da Yoshua Bengio.

Bengio è uno dei tre nomi che hanno costruito l'apprendimento profondo, e negli ultimi anni ha voltato le spalle alla corsa alle capacità. Nel giugno 2025 ha fondato LawZero, un'organizzazione senza scopo di lucro che fa ricerca sulla sicurezza mettendola davanti agli interessi commerciali. Nel luglio di quest'anno ha co-presieduto il panel scientifico indipendente delle Nazioni Unite sull'intelligenza artificiale, e il messaggio che ha portato è duro: le capacità dei sistemi corrono più veloci sia della comprensione scientifica sia della capacità dei governi di adeguarsi, e poiché si osservano comportamenti ingannevoli non si può più escludere il danno grave. Ha anche guidato il rapporto internazionale sulla sicurezza di quest'anno, che raccoglie le prove disponibili sulle capacità e sui rischi.

La richiesta di misurare in modo indipendente, fino a ieri, era un appello rivolto alla comunità di ricerca. Adesso ha una sede, un mandato e un calendario. È questo il passaggio nuovo.

Sul versante privato la stessa richiesta si muove in parallelo. Jack Clark, che dentro Anthropic si occupa di beneficio pubblico, il 26 agosto ha presentato un programma sperimentale che apre a ricercatori esterni dati sull'uso di Claude, trattati per proteggere l'identità delle persone, così che qualcuno fuori dall'azienda possa studiare che effetti stia producendo davvero.

C'è un precedente storico che aiuta a collocare tutto questo. Nell'Ottocento, quando le ferrovie e le grandi società per azioni resero impossibile per un singolo proprietario controllare i conti dell'impresa, non nacque una legge che vietava le ferrovie: nacque un mestiere nuovo, la revisione contabile indipendente, con regole proprie e responsabilità personali. Ci vollero decenni e diversi crolli prima che funzionasse.

Il campo dell'intelligenza artificiale sta cercando adesso i propri revisori. E il punto delicato è sempre lo stesso: chi li paga.

---

Progetti da osservare, e questa volta parlano quasi tutti della stessa cosa.

OpenClaw è un agente open source che esegue compiti al posto tuo usando come interfaccia le app di messaggistica: gli scrivi come scriveresti a un collega. La versione 2.0 è uscita il 31 agosto, con sessioni affiancate e un secondo agente che rilegge il lavoro del primo. Il progetto simbolo del passaggio da dimostrazione a strumento quotidiano.

DeepSeek Harness è l'impalcatura che sta attorno a un modello qualsiasi e gli gestisce delega, permessi e strumenti. Uscito il 13 agosto, ha superato duecentomila stelle su GitHub in poche settimane: la crescita più rapida mai vista. Karpathy dice che la competenza sta nel disegno della delega, e qui c'è chi quel disegno lo regala.

Qwen3.8-27B è il modello che Alibaba ha rilasciato il 14 agosto con licenza permissiva: capisce testo e immagini, tiene una memoria di contesto molto ampia e gira su una singola scheda grafica da ventiquattro gigabyte. Cioè: l'intelligenza di frontiera che entra sotto la scrivania invece di stare in un capannone. È esattamente l'oggetto di cui parlano Buterin e Srinivasan quando dicono locale.

Hawkeye è un insieme minimo di test automatici che permette agli agenti di controllare da soli quello che producono, invece di limitarsi a produrlo. Piccolo, ma è l'idea giusta.

E METR, una suite di valutazione indipendente che misura per quanto tempo un modello riesce a portare avanti da solo un compito che a una persona richiederebbe ore o giorni, mettendo insieme centosettanta prove diverse. È l'infrastruttura di misurazione che Clark e Bengio chiedono, già in funzione mentre le istituzioni discutono.

---

Uno scettico che rilegge riga per riga il lavoro di due macchine. Un panel dell'ONU che chiede prove. Un modello che sta su una singola scheda grafica. Sono tre modi di rispondere alla stessa domanda, e nessuno dei tre si fida degli altri due. Forse il vero indicatore da guardare, nei prossimi mesi, non è quanto diventano capaci questi sistemi, ma quanto costa dimostrarlo. È stato Signal Brief. Alla prossima.
