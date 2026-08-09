# Il muro dello scaling e la prova fisica

> Sutskever dichiara finita un'era, Carmack mette un robot davanti a un televisore, Naval predica lo spreco di token. Stessa domanda: cosa conta come intelligenza.

---

In un capannone in Texas, un robot fissa un televisore acceso. Davanti allo schermo c'è un joystick di plastica, manovrato da un braccio meccanico. Sta imparando a giocare ad Atari, senza barare, senza accedere alla memoria della console. È un esperimento di John Carmack, e questa settimana il video del suo intervento è tornato a circolare. È uno dei tanti modi, nel giugno 2026, in cui qualcuno cerca di rispondere alla stessa domanda: cosa significa davvero intelligenza. Questo è Signal Brief, 10 giugno.

---

Il robot di Carmack non è una performance. È un'argomentazione fisica. Carmack dice da anni che siamo lontani dall'intelligenza artificiale generale molto più di quanto i comunicati stampa vogliano farci credere. Per dimostrarlo ha scelto la strada più scomoda: non scrivere un altro paper, non lanciare un altro benchmark, ma costruire un agente che debba imparare nel mondo vero, con le latenze del mondo vero, davanti a uno schermo come faremmo noi.

E questa scena, piccola e quasi artigianale, è una mappa del momento.

Perché nella stessa settimana, dall'altra parte degli Stati Uniti, Ilya Sutskever — uno degli ingegneri che ha letteralmente costruito GPT-3 e GPT-4 — ha detto qualcosa che fino a un anno fa avrebbe fatto rumore solo nei circoli più tecnici, e che oggi viene ripetuto come una sentenza di fine epoca. L'epoca dello scaling, ha detto Sutskever, è finita. Aggiungere computer, dati e parametri non ci porta più dove vogliamo andare. Bisogna inventare un altro paradigma, e lui dichiara di averlo già intravisto, anche se non dice ancora quale. Lo dice il padre della scuola che ha vinto per cinque anni di fila. Si autorevoca in pubblico.

Sul fronte opposto, François Chollet pubblica i numeri che danno corpo a questa intuizione. Su ARC-AGI-3, il suo nuovo banco di prova, gli esseri umani arrivano al cento per cento. I modelli più avanzati del mondo, quelli di OpenAI e Anthropic, restano sotto l'uno per cento. Spendendo, per ogni singolo compito, fino a novemila dollari di calcolo. È un'asimmetria che racconta meglio di mille tesi cosa intende Sutskever quando dice che lo scaling non basta più.

Torna il tema, già osservato ieri, della frattura tra chi pensa che basti spingere ancora e chi pensa che vada cambiata strada. Ma oggi la frattura si è fatta più nitida. Non è più solo Yann LeCun a dirlo, dalle stanze di AMI Labs e dei suoi paper sulla pianificazione. Adesso è una coalizione: LeCun, Sutskever, Chollet, Carmack. Quattro tradizioni diverse che convergono sulla stessa diagnosi.

Mentre succede tutto questo, in una valle parallela ma collegata, sta succedendo l'opposto. Jensen Huang, sul palco del GTC a Taipei, ripete una formula quaranta volte di fila: ogni token è un'unità di ricavo. Naval Ravikant pubblica un piccolo manifesto operativo dove insegna a sprecare token apposta — buttare gli stessi problemi su Claude, Codex e Gemini in parallelo, perché un'ora di tempo umano costa più di un milione di token. Andrej Karpathy, che pochi giorni fa è passato in Anthropic per stare al fronte della ricerca, racconta che la finestra di contesto è diventata la vera leva del software moderno.

C'è dunque una contraddizione apparente, e vale la pena tenerla in mente. Da una parte si dice: lo scaling è finito, i modelli non scalano più verso l'intelligenza. Dall'altra si dice: ogni token è oro, costruite la vostra vita attorno al loro consumo. Le due cose convivono perché parlano di livelli diversi. Sotto, l'architettura non basta più per fare il passo successivo. Sopra, gli strumenti che abbiamo già sono buoni abbastanza da diventare un'infrastruttura. È un po' come l'elettricità all'inizio del Novecento: nessuno sapeva ancora come migliorarne la produzione in modo radicale, ma intanto già la si tirava dentro le fabbriche come ricavo. La rivoluzione tecnica e la rivoluzione economica viaggiano su binari paralleli, a velocità diverse.

E proprio in mezzo, c'è la novità più curiosa della settimana: anche chi ha sempre criticato l'entusiasmo intorno all'AI inizia a usarla seriamente.

---

Ilya Sutskever non parla quasi mai in pubblico. È noto per essere uno degli ingegneri più riservati di questa generazione, e per aver firmato — in coda ai team di OpenAI — la maggior parte dei salti di paradigma dell'ultimo decennio nei modelli linguistici. Dopo essere uscito da OpenAI nel 2024 ha fondato Safe Superintelligence, una società che oggi vale trentadue miliardi di dollari e non ha ancora rilasciato un solo prodotto. Vive di pura promessa.

Questa settimana ha rilasciato una lunga intervista al podcast di Dwarkesh Patel, e ha detto qualcosa che assomiglia a un piccolo terremoto. Ha diviso la storia recente dell'AI in tre fasi: la ricerca, dal 2012 al 2020; lo scaling, dal 2020 al 2025; e una nuova ricerca, che starebbe iniziando proprio adesso. La tesi è che aggiungere ancora computer, ancora dati, ancora parametri non produce più i salti di intelligenza che produceva fino a un anno fa. Bisogna inventare un altro modo di apprendere.

Sutskever ha anche suggerito dove guarderebbe lui: gli esseri umani imparano poco perché portano dentro una funzione di valore che le emozioni regolano in tempo reale. Pazienti con lesioni alle aree cerebrali delle emozioni, dice, perdono perfino la capacità di decidere — un fatto neurologico che troviamo in qualunque manuale. La sua scommessa è che il prossimo paradigma debba incorporare qualcosa di simile.

Quello che colpisce non è la tesi in sé. È chi la pronuncia. Sutskever è l'ingegnere che ha letteralmente disegnato la rincorsa allo scaling che ha dato GPT-3 e GPT-4. Quando un autore del paradigma dichiara che il paradigma si è esaurito, è un evento da segnare. Non capita spesso che chi ha vinto una scommessa si tolga il cappello e dica: adesso bisogna fare altro.

Naturalmente non lo dice da solo. La voce di Sutskever si aggiunge a quella di Chollet, che produce numeri impietosi su ARC-AGI-3, e a quella di LeCun, che da Parigi continua a sostenere che gli LLM non porteranno mai all'AGI e ha appena pubblicato due paper che rafforzano la sua scommessa su un'altra architettura. La novità del giugno 2026 è che questa posizione, fino a poco fa minoritaria, è diventata una coalizione. Anche se ciascuno propone una via diversa per uscirne, sono tutti d'accordo che la via attuale è chiusa.

Dall'altra parte ci sono ancora Sam Altman, che continua a dire che il punto di non ritorno è alle nostre spalle, e Demis Hassabis, che ha stretto la finestra al 2029-2030 ma sempre dentro il paradigma attuale. La frattura, già osservata ieri, oggi diventa più dura. Non è più una sfumatura. È un conflitto tecnico aperto.

---

David Heinemeier Hansson, in arte DHH, è uno dei programmatori più riconoscibili degli ultimi vent'anni. Ha inventato Ruby on Rails, il framework su cui per anni si è costruita mezza Internet. È anche, da sempre, uno scettico dichiarato delle mode tecnologiche. Per anni ha rifiutato i grandi data center e ha riportato la sua azienda, Basecamp, sui propri server. Per mesi ha attaccato l'idea di scrivere codice con un'AI come una scorciatoia per programmatori mediocri.

E questa settimana ha pubblicato un post intitolato semplicemente Promoting AI agents, dove racconta che ha cambiato idea. Non sull'enfasi — quella continua a giudicarla gonfiata — ma sulla pratica. DHH ora lavora con due agenti in parallelo, dentro una finestra di terminale, uno veloce per le esplorazioni e uno più profondo per le architetture. Li tratta come colleghi un po' acerbi: gli affida correzioni di bug, funzionalità nuove, piccoli esperimenti. Continua a leggere ogni riga di codice prima che entri in produzione. Ma li ha promossi, esplicitamente, da strumenti sperimentali a parte della squadra.

In un altro post di pochi giorni dopo, fa un'osservazione che a me sembra una delle più interessanti della stagione. Il software libero, ha scritto in sostanza, ha sempre proclamato il diritto di modificare il codice. Ma quel diritto era teorico per la stragrande maggioranza delle persone, perché modificare il codice richiede competenze che pochissimi hanno. Gli agenti AI, dice DHH, possono finalmente colmare quel divario. Non sono solo un acceleratore per gli ingegneri. Sono una promessa di democratizzazione vera che il software libero ha portato in tasca per trent'anni senza poterla mantenere.

È un cambio di tono importante. Quando uno degli scettici più radicali smette di essere scettico, succede qualcosa che vale la pena registrare. Non è una conversione: DHH continua a lanciare Basecamp 5 senza pulsantini magici di intelligenza artificiale, a passare i computer aziendali da Mac a Linux, a difendere una certa idea di controllo sullo stack tecnologico. Ma la sua adozione degli agenti dice che la cosa è uscita dal cerchio degli entusiasti.

Vale la pena tenere insieme questa scena con quella di Jensen Huang che parla di token come unità di ricavo. Da una parte un grande investitore dichiara che ogni token vale soldi. Dall'altra un programmatore artigiano dichiara che vale anche fatica risparmiata. È lo stesso movimento, raccontato da due lati diversi della stessa infrastruttura. E quando le due narrazioni si incontrano nel mezzo, di solito significa che la cosa sta per diventare normale. Non bella, non brutta — normale. Come l'email negli anni Novanta. Come i grandi data center quindici anni fa.

---

Naval Ravikant è uno di quei personaggi che hanno costruito una buona parte della loro reputazione su frasi brevi. Co-fondatore di AngelList, investitore in centinaia di startup, e da anni autore di una specie di filosofia spicciola del successo personale che gli ha portato milioni di lettori. È noto per gli aforismi, e per qualcuno è solo quello.

Negli ultimi due mesi però ha cambiato modo di parlare. Ha smesso di pubblicare massime e ha pubblicato podcast operativi. Tra fine maggio e l'inizio di giugno ha rilasciato una serie in quattro puntate con tre founder considerati di frontiera — Guillermo Rauch di Vercel, Blake Scholl di Boom, Max Hodak di Science Corp. Il titolo della serie suona così: Fabbriche di software e tokenmaxxing. Non è marketing, è una piccola dottrina.

L'idea centrale è semplice e provocatoria. Quando ti trovi davanti a un problema, scrive Naval in un post di poche righe sul suo sito, lancia in parallelo tre o quattro modelli diversi sulla stessa cosa. Più volte. Spreca token con consapevolezza, perché un essere umano per fare le stesse esplorazioni ci impiegherebbe tre giorni e costerebbe mille volte di più. È il principio inverso a quello che ci hanno insegnato per cinquant'anni di informatica, dove i cicli di calcolo erano la risorsa scarsa e l'attenzione dell'utente era abbondante. Adesso vale il contrario.

La parola che usa — tokenmaxxing — è brutta, ma il concetto è semplice. Significa organizzare il proprio lavoro intorno al consumo di token come una volta si organizzava intorno alle ore-uomo. Non è uno slogan da venture capital. È un cambio di unità di misura.

E qui torna il filo di oggi. Mentre Sutskever e Chollet dicono che lo scaling come ricerca di intelligenza è finito, Naval dice che lo scaling come pratica quotidiana è appena cominciato. Sono due verità che convivono. La frontiera scientifica si è fermata, la frontiera economica accelera. È quasi la stessa cosa che successe negli anni Ottanta con i transistor: la fisica del silicio aveva ancora vent'anni di crescita davanti, ma il vero spostamento fu che i computer entrarono nelle scrivanie. La ricerca pura e l'adozione di massa raramente camminano allo stesso passo.

Naval, in parallelo, ha lanciato anche un piccolo fondo: USVC, un veicolo che permette di investire in OpenAI, Anthropic e xAI con cinquecento dollari, senza essere accreditato. È un'altra applicazione dello stesso principio: portare nel quotidiano quello che fino a ieri era riservato. Token al posto delle ore, micro-quote al posto del fondo chiuso. Il pattern è lo stesso, e dice qualcosa di chiaro su dove sta scivolando il baricentro.

---

Torniamo un attimo sul filo, perché in macchina è facile perderlo. Stiamo raccontando una settimana in cui due movimenti opposti si rincorrono: una coalizione di ingegneri che dice che il modo in cui costruiamo l'intelligenza artificiale ha raggiunto un soffitto, e una coalizione di operatori che dice che proprio quello che abbiamo già è il nuovo motore dell'economia. Le due cose non si contraddicono — convivono. Adesso torniamo al capannone in Texas, perché l'immagine merita di essere svolta.

John Carmack è il programmatore che ha scritto Doom e Quake, ha co-fondato Oculus, e ha venduto la realtà virtuale a Facebook prima che diventasse Meta. Da qualche anno ha lasciato il visore e ha fondato Keen Technologies, dove lavora apertamente su un'idea sola: capire come gli esseri umani imparano, e cercare di riprodurlo dentro una macchina.

L'esperimento dell'Atari fisico fa parte di questa scommessa. Carmack non vuole un sistema che riceva pixel digitali puliti da un emulatore. Vuole un sistema che debba decodificare un televisore reale, con la sua luce ambientale, i suoi tempi di reazione, il suo joystick fatto di plastica e metallo. È un anti-benchmark, costruito esattamente nella direzione opposta al modo in cui di solito si misura il progresso dell'AI.

Il suo intervento di Upper Bound, registrato qualche mese fa, è uscito in video questa settimana e ha generato lunghe discussioni nelle bacheche tecniche. Carmack ci propone un suo metro di giudizio per l'AGI, e vale la pena tenerlo a mente. Un agente, dice, dovrebbe imparare un gioco nuovo alla velocità con cui lo imparerebbe un essere umano, senza accedere alla memoria del computer; dovrebbe saper spiegare quello che ha imparato a un altro agente; e dovrebbe riuscire a competere in un gioco multigiocatore complesso a forza di pratica, non a forza di simulazioni infinite. Sono tre criteri terreni, quasi artigianali. Nessuno dei sistemi attuali, dice Carmack, si avvicina anche solo lontanamente.

Lo dice una persona che lavora dentro un progetto AGI. Non è uno scettico esterno. È un costruttore che, mentre costruisce, dice ad alta voce che la promessa di prossimità all'AGI è esagerata. Quando lo dice Carmack, fa più rumore di quando lo dicono molti altri, perché Carmack è un ingegnere che dimostra le sue tesi con le mani.

Mi colpisce una cosa, e vale la pena dirla. Tutte le grandi storie tecnologiche del passato hanno avuto un momento in cui qualcuno è tornato indietro alla realtà fisica per riportare la conversazione coi piedi per terra. Quando la teoria del volo era piena di calcoli astratti, ci sono voluti i fratelli Wright a Kitty Hawk per dire facciamolo davvero, con stoffa e legno. Quando la fissione era una promessa teorica, c'è voluto Enrico Fermi sotto le tribune dell'università di Chicago a far funzionare la prima pila atomica. Oggi il robot di Carmack, davanti al suo televisore, gioca un ruolo simile. Non chiude il dibattito. Lo riporta in terra.

---

Chiudiamo con qualche progetto che continua a crescere in queste settimane, e che si lega bene a quello che ci siamo detti.

Nanochat di Andrej Karpathy resta tra i più seguiti. È un piccolo modello linguistico didattico, scritto in pochi file leggibili, pensato per imparare come funziona davvero un sistema generativo senza dover entrare nelle architetture sterminate delle grandi aziende. È coerente con la sua intenzione, dichiarata da anni, di democratizzare la comprensione di questa tecnologia.

Llama.cpp, il progetto di Georgi Gerganov che fa girare modelli di linguaggio anche su un computer portatile, continua la sua corsa. È uno dei pochi pezzi di software che rende concreta l'idea, oggi un po' utopica, che non tutto debba passare dai data center delle solite cinque aziende.

Omarchy, la distribuzione Linux su cui DHH sta spostando le sue macchine, è in crescita. Insieme a Hyprland, l'ambiente grafico su cui si appoggia, racconta un piccolo movimento di sviluppatori che cerca di riprendersi il controllo del proprio computer, contro la deriva di sistemi sempre più chiusi.

LLM di Simon Willison resta uno strumento di nicchia ma molto amato: una riga di comando da cui parlare a tutti i modelli, intercambiabili come prese elettriche. Un'idea piccola e profonda allo stesso tempo.

E ARC-AGI di François Chollet, di cui abbiamo parlato a lungo, continua a essere il banco di prova dove i modelli più forti del mondo si schiantano. È il termometro più onesto che abbiamo, in una stagione in cui i termometri tendono a essere truccati al rialzo.

---

Torno con la mente al capannone in Texas, al robot che fissa il televisore. Mentre la conversazione corre veloce dietro a previsioni miliardarie e timeline di tre anni, là dentro qualcuno è seduto davanti a uno schermo e prova a costruire una macchina che impari come un bambino. È un'immagine che vale la pena tenere. È stato Signal Brief. Alla prossima.
