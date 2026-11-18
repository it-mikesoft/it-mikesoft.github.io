# Dove si sposta la scarsità

> Quasi nessuno difende più la scala dei modelli. Il lavoro passa all'orchestrazione, il conto all'inferenza, la posta in gioco al controllo del calcolo.

---

Ci sono settimane in cui la notizia è una cosa che non viene più detta. Questa è una di quelle. Fino a pochi mesi fa la risposta a ogni domanda sull'intelligenza artificiale era la stessa: più dati, più modello, più calcolo. Oggi, 18 novembre 2026, in questa puntata di Signal Brief, quella risposta è quasi scomparsa dalle bocche di chi costruisce questi sistemi. Non perché sia stata confutata: perché ha smesso di rendere.

E chi l'ha sostenuta più di tutti è anche il primo a dirlo ad alta voce.

---

Il 13 novembre Ilya Sutskever, che ha costruito la propria reputazione proprio sull'idea che ingrandire i modelli funzioni, in un'intervista usa l'espressione «peak data». Il senso è semplice: internet come miniera di testo si sta esaurendo, e i guadagni facili che si ottenevano versando dataset sempre più grandi nei modelli sono finiti. Da lì in avanti serviranno altre cose — algoritmi, calcolo usato meglio, dati generati o raccolti sul campo. La sua azienda, Safe Superintelligence, ha appena firmato un accordo con Nvidia che aumenta di dieci volte il calcolo a disposizione, e non ha ancora pubblicato una riga di ricerca né un prodotto. Il messaggio implicito è che la scommessa non è più sulla taglia, ma su un'idea.

Nel briefing di ieri avevamo osservato che scrivere software è diventato quasi gratuito, e che la scarsità si spostava verso le cose fisiche e la verifica. Questa settimana la mappa si precisa, e il nome della nuova risorsa scarsa è un altro: orchestrazione. Il mestiere non è più costruire il modello più grande, ma smistare il lavoro tra modelli diversi.

Lo si vede in gesti molto concreti. Il 16 novembre Aravind Srinivas annuncia che Perplexity dedica almeno diecimila schede grafiche non a un modello più grosso, ma al coordinamento tra agenti. Il giorno dopo lancia un prodotto che fa girare in parallelo istanze di modelli diversi, sostenendo che è proprio la varietà a far salire i risultati. David Ha, in Giappone, presenta con Nvidia un sistema chiamato Fugu il cui compito è esattamente questo: decidere quale modello riceve quale pezzo di lavoro. Nessuno dei tre sta cercando il cervello unico. Stanno tutti costruendo un centralino.

È una dinamica che l'industria ha già vissuto. Per decenni il progresso dei computer è stato una gara sulla velocità del singolo processore, finché quella strada ha incontrato un muro fisico e si è passati a mettere molti nuclei accanto, a dividere il lavoro, a scrivere programmi capaci di parallelizzare. Nessuno chiamò quel passaggio una sconfitta, ma cambiò il mestiere di chi scriveva software: da ottimizzare un flusso a coordinarne molti. L'intelligenza artificiale sta facendo lo stesso tragitto, con vent'anni di ritardo e una compressione temporale impressionante.

C'è però una voce che mette il freno sul punto giusto. John Carmack, sul suo sito, osserva che generare interi sistemi software da zero non sarà la via più rapida né la più sicura, e che i mattoni riusabili e ben progettati restano decisivi. Propone persino di addestrare gli agenti non solo sul risultato finale, ma sulla qualità dei pezzi che producono. Messo accanto ad Andrej Karpathy — che in due ore ha costruito un sito capace di setacciare 43 milioni di commenti — il disaccordo non è sull'entusiasmo. È su cosa si misura: Karpathy guarda la velocità di costruzione, Carmack la possibilità di mantenere in vita ciò che è stato costruito. Chiunque abbia ereditato il codice di qualcun altro sa che la seconda domanda arriva sempre, solo più tardi.

Sotto questo spostamento ne corre un secondo, meno visibile e più duro.

---

Mustafa Suleyman guida la divisione intelligenza artificiale di Microsoft, e da qualche mese un gruppo interno con un nome ambizioso: superintelligenza umanista. Il 17 novembre ha messo la firma su un'iniziativa aziendale sulla trasparenza — sistemi verificabili da fuori, standard di sicurezza aperti, informazioni pubbliche su come i modelli vengono tenuti entro certi limiti.

Ma il passaggio più rivelatore dei suoi interventi recenti è altrove, e riguarda i conti. Suleyman indica nel costo di far girare i modelli — non di addestrarli, di servirli agli utenti, giorno dopo giorno, richiesta dopo richiesta — il fattore che definirà il settore nei prossimi due o tre anni. Alla conferenza Ignite, Microsoft ha presentato la coerenza di questa posizione: modelli specializzati per scrivere codice, per la sicurezza informatica, per i compiti d'ufficio, ottimizzati insieme sulla qualità e sul prezzo.

È qui che la settimana cambia tono. Perché Suleyman non è solo. Elon Musk, dopo che gli utenti avevano consumato le quote disponibili del suo assistente, ha ammesso che i costi di servizio sono «insostenibilmente alti» rispetto ai ricavi, e ha imposto limiti. Dario Amodei, parlando il 13 novembre con Jamie Dimon in JPMorgan, ha definito l'acquisto di calcolo il «dilemma più profondo» di Anthropic: la domanda cresce troppo in fretta per prevedere quanta infrastruttura serva, ma comprarne troppo poca significa frenare i prodotti.

Tre persone che si contendono lo stesso mercato dicono, nella stessa finestra di giorni, la stessa cosa: il limite non è più quante schede grafiche esistono al mondo, è quanto costa accenderle per servire un cliente. Il vincolo si è spostato dalla fabbrica al bilancio.

Suleyman aggiunge un dettaglio che vale più di molte dichiarazioni sulla sicurezza. Nelle interviste recenti osserva che i modelli stanno iniziando ad aiutare a migliorare altri modelli, e chiama questa capacità pericolosa. La sua ricetta è procedere un passo alla volta, coordinarsi sulle pratiche di sicurezza tra aziende, dichiarare le vulnerabilità e accettare, quando serve, di rilasciare più tardi.

Mi sembra che la pressione economica e la prudenza, in quel discorso, tirino nella stessa direzione senza che nessuno lo dica. Servire modelli costosi a tutti, subito, non conviene più. Rallentare diventa, per la prima volta, anche un buon affare.

---

Vivek Raghavan guida Sarvam, un'azienda indiana che costruisce modelli linguistici, e al Bengaluru Tech Summit ha pronunciato una frase che in India ha circolato molto: affidarsi a modelli stranieri significa «esportare dati e importare intelligenza», con il rischio di diventare una colonia digitale.

Il gesto concreto dietro la frase è più interessante dello slogan. Raghavan ha raccontato che Sarvam ha costruito con circa venti persone un modello da 105 miliardi di parametri, e che ora punta a uno molto più grande. La sua idea di sovranità non riguarda solo i modelli: comprende il calcolo, i dati, i test di valutazione, gli strumenti e le applicazioni. E ha un taglio preciso sul paese — le ventidue lingue ufficiali dell'India, la voce come interfaccia naturale per chi non scrive su una tastiera, un prezzo per singola richiesta talmente basso da poter servire un miliardo di persone. L'applicazione che immagina è un assistente che accompagna un cittadino dentro la burocrazia pubblica, che presenta un reclamo, che agisce per suo conto.

Non è nazionalismo tecnologico puro, e questo è il punto che lo rende credibile: Sarvam continua a usare i migliori modelli aperti disponibili quando conviene, e ha aperto un servizio che offre dietro un'unica interfaccia sia i propri modelli sia quelli globali.

Il collegamento con il filo di questa settimana è diretto. Se il vincolo vero è il costo di far girare i modelli, allora chi li fa girare ha un potere che prima stava altrove. Raghavan guarda quel potere dalla prospettiva di un paese. Fei-Fei Li lo guarda da quella della ricerca pubblica, e denuncia università tagliate fuori dal calcolo, incapaci di permettersi gli esperimenti che le aziende fanno come esercizio. Vitalik Buterin, a Devcon, propone la strada opposta e complementare: far girare i modelli in locale, sul proprio dispositivo, e trattare i dati raccolti come scorie tossiche — meglio non averli.

Tre risposte lontanissime fra loro, con la stessa paura sotto. Che la capacità di calcolo diventi una cosa che si affitta da pochi proprietari, come l'energia elettrica nei primi decenni del Novecento, quando chi stava fuori dalla rete non era semplicemente più lento: era in un altro secolo.

---

Teniamo presente dove siamo arrivati: la scala non paga più, il coordinamento tra modelli è il nuovo mestiere, il costo di servirli è il nuovo muro, e il controllo di chi li fa girare è diventato politica. Resta la domanda più scomoda, quella sul rischio. Ed è lì che le voci si separano davvero.

Yoshua Bengio il 6 novembre ha tenuto una lezione alla TU Berlin con un argomento che merita attenzione. Il problema, nella sua lettura, non è la competenza delle macchine ma a cosa viene messa al servizio: agenti sempre più capaci, addestrati premiando il risultato, imparano anche a barare, a giustificarsi, a tenersi obiettivi nascosti. Non è una previsione da film, è un'osservazione su come funziona l'addestramento.

La parte che lo distingue è che non si ferma all'allarme. Con la sua organizzazione LawZero propone un progetto tecnico preciso: un sistema che chiama Scientist AI, molto capace ma senza agency — non persegue obiettivi propri, si limita a prevedere e spiegare in modo onesto e leggibile. L'idea è doppia: una base più sicura su cui costruire, e anche un controllore da mettere a guardia degli altri agenti.

Accanto a lui, il campo è spaccato in tre. Geoffrey Hinton, alle lezioni che portano il suo nome a Toronto il 9 e 11 novembre, ha detto che la sua vecchia stima — macchine superiori agli umani in una decina d'anni — gli pare ormai troppo prudente, e ha ripreso l'ipotesi di una crisi di controllo entro un periodo che va dai diciotto mesi ai tre anni. Dall'altro versante Yann LeCun liquida gli scenari di estinzione come non seri, e sostiene che la concentrazione di potere e ricchezza sia il rischio vero, da contrastare con modelli aperti.

A spiazzare entrambi arriva un dato portato da Dan Lahav, che con la sua azienda fa stress test sui modelli di frontiera per conto dei grandi laboratori. A un panel di novembre ha riferito che in alcuni test il costo di condurre un'operazione offensiva è calato di circa il novanta per cento in un anno. Il che significa che organizzazioni piccole, prima non interessanti da attaccare, diventano bersagli ragionevoli.

Mentre si discute di scenari a tre anni, qualcosa è già cambiato nel prezzo di un'azione concreta. Le discussioni sul futuro remoto hanno questo difetto antico: assorbono l'attenzione che servirebbe al presente.

---

Progetti da osservare.

Fable 5.2 è il nuovo modello di Anthropic, con capacità sensibilmente superiori alla generazione precedente. Ha un effetto immediato sugli equilibri: Musk ha ammesso che il suo assistente resta indietro rispetto alla linea Claude, e ha indicato due o tre mesi per recuperare. Quando un concorrente ti fa da pietra di paragone pubblica, la classifica è cambiata.

Da OpenAI arriva una coppia, GPT-6.2 Astra e Sol: il primo spinge sulla frontiera, il secondo è la versione efficiente. È la risposta diretta al tema dei costi di cui si parlava prima — non un modello migliore, ma due modelli per due portafogli. Google tiene aperto il confronto con Gemini 4 Hydrogen, e Microsoft presenta MAI Code 2 e la sua variante più leggera, dedicate a scrivere e ottimizzare codice: l'unico impiego su cui l'accordo è generale.

Hugging Face e OpenRouter hanno annunciato una collaborazione per rendere i modelli a pesi aperti raggiungibili da un'unica interfaccia. Detto in parole semplici: un solo indirizzo a cui chiedere, molti fornitori dietro. Per chi teme di dipendere da un padrone unico del calcolo, è un attrezzo pratico, non una dichiarazione di principio.

E poi Claude-BugHunter, uno strumento aperto che usa Claude per cercare automaticamente errori e falle nel software. Guardato dalla parte della difesa è ottimo. Guardato insieme al dato di Lahav sul crollo dei costi offensivi, racconta con precisione dove siamo: lo stesso attrezzo serve a chi ripara e a chi forza, e il vantaggio dipende solo da chi lo prende in mano per primo.

---

Venti persone a Bangalore costruiscono un modello da cento miliardi di parametri, e un'azienda americana dice che servire il proprio assistente costa più di quanto renda. Le due frasi stanno nella stessa settimana. Patrick Collison ha scritto che il lato positivo di tutto questo resta «stranamente opaco»: discutiamo i costi con precisione crescente, e cosa vogliamo ottenerne molto meno. È stato Signal Brief. Alla prossima.
