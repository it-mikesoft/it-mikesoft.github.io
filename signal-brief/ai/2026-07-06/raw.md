# Dal produrre al verificare

> Chi crea e chi teme l'intelligenza artificiale dicono la stessa cosa: il valore umano si sposta dal fare al capire. E la frontiera dei modelli cambia strada.

---

C'è una parola che in questi giorni torna nella bocca di persone che di solito non concordano su niente. La parola è verificare. La usano quelli che l'intelligenza artificiale la costruiscono e quelli che la temono, e la usano per dire la stessa cosa. È il sei luglio, e questo è Signal Brief. La scena della giornata si apre in una sala conferenze in California, dove un ex ricercatore di OpenAI ha condensato tutto questo in una manciata di parole, e ha detto una cosa che vale la pena ascoltare con attenzione.

---

L'uomo sul palco è Andrej Karpathy, e la sala è quella di Sequoia Ascent. Karpathy ha una formula, e la pronuncia con la calma di chi l'ha limata a lungo: puoi delegare il pensiero, ma non la comprensione. E poi aggiunge la parte che resta: il software di una volta automatizzava quello che sapevi descrivere; questi nuovi modelli automatizzano quello che sai verificare.

Sembra una sfumatura, ma sposta l'asse di tutto. Fino a ieri la domanda era quanto sanno produrre le macchine. Adesso la domanda è quanto sappiamo controllare noi quello che producono. È un ribaltamento silenzioso, e la cosa più notevole è chi lo sottoscrive: non solo gli scettici, ma anche chi l'intelligenza artificiale la vende.

Naval Ravikant lo dice da un altro angolo, con un'immagine idraulica: le astrazioni perdono acqua. I modelli scrivono codice e sfornano report, ma da qualche parte, in un punto che non vedi, c'è una crepa. Simon Willison lo porta a terra: usare bene questi strumenti sembra facile, e invece è lavoro di giudizio, somiglia più a dirigere persone che a scrivere righe. Chi guadagna non è chi fa le domande al modello, è chi possiede la macchina sotto.

Sotto questa prima faglia se ne muove una seconda, e ne abbiamo già parlato: l'idea che l'era dello scaling sia finita. Ilya Sutskever l'ha detto senza giri di parole — il collo di bottiglia non è più il calcolo, sono le idee. Qui la novità di questi giorni è che i cammini per uscirne si stanno moltiplicando. Yann LeCun insegue modelli che capiscano come si comporta il mondo fisico, non che indovinino la parola dopo. John Carmack e Liang Wenfeng scommettono sull'efficienza contro la forza bruta. François Chollet continua a mostrare il suo test dove gli umani fanno cento e le macchine restano sotto l'uno per cento. Quattro strade diverse, la stessa casa: la frontiera non è più più grande, è diversa.

Vale la pena fermarsi su un paragone, perché aiuta a collocare il momento. Nell'Ottocento, quando l'elettricità entrò nelle fabbriche, per anni si limitarono a sostituire la vecchia macchina a vapore con un grande motore elettrico al centro dello stabilimento. Stessa fabbrica, motore nuovo. Il salto vero arrivò dopo, quando qualcuno capì che l'elettricità permetteva di ripensare l'intera fabbrica — un motore piccolo per ogni macchina, disposti in modo nuovo. Con l'intelligenza artificiale siamo esattamente lì: per anni abbiamo messo il motore più grande al centro. Adesso qualcuno comincia a chiedersi se non fosse tutta la fabbrica da ridisegnare.

E poi c'è la terza faglia, quella sul potere. Da una parte chi chiede regole e istituzioni. Dall'altra chi risponde costruendosi una via d'uscita. Due reazioni speculari alla stessa intuizione — che il controllo si sta concentrando in poche mani. Sono i personaggi di oggi, e conviene incontrarli uno per uno.

---

Andrej Karpathy è stato tra i fondatori di OpenAI e poi il capo dell'intelligenza artificiale in Tesla; oggi è una delle voci che l'industria ascolta di più quando vuole capire dove va il mestiere di programmare. Questa settimana ha fatto due cose. Ha portato al pubblico la sua idea di software di terza generazione, e ha spiegato perché i modelli sono così bravi in alcune cose e così ciechi in altre.

L'idea è semplice da raccontare. Prima si programmava scrivendo istruzioni esplicite, riga per riga. Poi si è imparato a far apprendere le macchine dagli esempi. Adesso, dice Karpathy, si programma parlando: descrivi cosa vuoi, e la rete neurale fa il resto. Le vecchie applicazioni, quelle piene di infrastruttura, diventano quasi di troppo.

Ma è la seconda parte quella che tiene insieme la giornata. Karpathy osserva che questi modelli hanno un'intelligenza frastagliata — picchi altissimi accanto a buchi improvvisi. Giocano a scacchi a un livello sovrumano e poi si perdono su un problema di orientamento nello spazio che un bambino risolve. Il motivo, dice, è proprio la verificabilità: dove puoi controllare la risposta in modo netto — matematica, codice, test — la macchina vola. Dove non puoi, resta a metà.

Ha anche un'espressione che vale la pena tenere: questi modelli sono fantasmi, non animali. Non hanno una spinta biologica, una fame, una paura. Sono simulazioni statistiche modellate dall'addestramento. Serve a smontare la tentazione di trattarli come creature.

Il collegamento con il filo di oggi è diretto. Se la macchina automatizza solo ciò che sai verificare, allora il lavoro che resta all'uomo non è più produrre, è controllare. E controllare richiede di capire — quella comprensione che Karpathy dice di non poter delegare. C'è qualcosa di antico in tutto questo. Somiglia al passaggio, secoli fa, dall'artigiano che faceva ogni pezzo con le sue mani al capobottega che non tocca più il tornio ma deve sapere riconoscere, a colpo d'occhio, il pezzo fatto male. Il valore si è spostato dalla mano all'occhio. La domanda che resta aperta è se un occhio così si possa ancora formare, quando le mani non lavorano più.

---

Se Karpathy racconta cosa cambia nel mestiere, Ilya Sutskever racconta cosa cambia nella scienza. È l'uomo che più di ogni altro ha spinto l'idea che bastasse aggrandire i modelli per farli diventare più intelligenti. Ed è diventato, negli ultimi mesi, il più autorevole a dire che quella stagione è finita.

Il gesto concreto è del ventinove giugno. In un annuncio scarno, Sutskever ha comunicato che Daniel Gross ha lasciato la sua azienda, Safe Superintelligence, e che lui ne assume formalmente la guida come amministratore delegato. Nello stesso messaggio ha respinto le voci di una possibile acquisizione con una frase che dice molto del personaggio: lusingati dall'attenzione, ma concentrati sul lavoro — abbiamo il calcolo, la squadra, e sappiamo cosa fare.

Quel sappiamo cosa fare è interessante, perché la sua azienda non pubblica niente. Nessun paper, nessuna dimostrazione, comunicazione ridotta al minimo. In un settore che vive di annunci, il silenzio è una posizione. E la posizione è quella che divide la storia dell'intelligenza artificiale in tre atti: la ricerca fino al duemilaventi, la scala fino al duemilaventicinque, e da quest'anno di nuovo la ricerca. Aggiungere schede grafiche e dati, dice, ormai rende sempre meno. Serve un'idea nuova, non un motore più grande. Parla di una montagna diversa da scalare rispetto a quella che stanno salendo tutti gli altri.

Torniamo un attimo sul filo di oggi, perché qui si annodano due cose. Sutskever tiene insieme la fine dello scaling e la questione della comprensione: sostiene che i modelli di adesso generalizzano peggio degli esseri umani — se ne cavano bene finché restano dentro il terreno che conoscono, poi inciampano. È lo stesso spigolo che descriveva Karpathy, visto dal lato del ricercatore anziché del programmatore.

C'è un che di malinconico in un uomo che ha costruito la religione dello scaling e ora ne annuncia la fine dal pulpito. Ma è anche il segno più affidabile che qualcosa si sta muovendo davvero. Quando sono i costruttori a diventare scettici, di solito non è pessimismo. È che hanno visto il muro prima degli altri.

---

Sam Altman guida OpenAI, e in queste settimane ha smesso di parlare di prodotti per parlare di ordine mondiale. È il volto della prima risposta alla concentrazione del potere: quella che sceglie le regole.

La scena è un articolo firmato sul Financial Times. Altman propone un organismo internazionale, a guida americana, che fissi standard condivisi sulla sicurezza dell'intelligenza artificiale, offra valutazioni imparziali su capacità e rischi, e renda la tecnologia disponibile a chi partecipa e rispetta le regole. Cita tre modelli storici: la sicurezza aerea, gli standard finanziari globali, l'agenzia dell'energia atomica. In parallelo spinge un'altra idea — un fondo pubblico americano che detenga una quota di OpenAI, intorno al cinque per cento, per condividere con tutti i frutti di quello che verrà. E lascia intendere che anche gli altri grandi dovrebbero fare lo stesso.

Attorno a Altman si raccoglie un blocco: Dario Amodei, che paragona questa tecnologia al nucleare e chiede test obbligatori di terze parti; Geoffrey Hinton, che descrive l'intelligenza artificiale come un'auto velocissima senza volante e chiede di rimetterle lo sterzo; Jack Clark, che ripete che le istituzioni sono più lente delle soglie che stiamo attraversando. È la posizione della voice — restare dentro il sistema e provare a governarlo.

Il collegamento con il filo di oggi passa da una critica. La richiesta di regole di Altman viene già letta, da più parti, come cattura mascherata: chi è avanti chiede le regole perché le regole congelano il vantaggio. Non è un'accusa nuova. È la stessa storia delle ferrovie di fine Ottocento, quando le compagnie più grandi furono le prime a invocare la regolamentazione — e ci si accorse presto che le regole, scritte bene, tenevano fuori i concorrenti più della concorrenza stessa.

Quello che resta, di questa settimana di Altman, è il tono. Ripete che l'intelligenza artificiale ridisegnerà le condizioni materiali della vita umana come non accadeva dai tempi dell'elettricità. È un linguaggio da rifondazione. E chi parla di rifondare il mondo, di solito, ha già in mente chi dovrebbe tenere in mano la penna.

---

All'estremo opposto della stessa faglia c'è Jack Dorsey. Ha fondato Twitter, ha guidato una delle più grandi aziende di pagamenti al mondo, e ha scelto la risposta contraria a quella di Altman. Non governare il centro: farne a meno.

Il suo lavoro di questi mesi è quasi tutto dentro un'app che si chiama Bitchat. Fa una cosa che sembra semplice e non lo è: manda messaggi da un telefono all'altro senza internet, senza account, senza un server nel mezzo. I telefoni vicini si passano i messaggi tra loro via Bluetooth, di dispositivo in dispositivo, come un passaparola che salta di persona in persona finché non arriva a destinazione. La novità recente è una funzione di chat di quartiere: stanze locali, agganciate alla posizione, con nomi temporanei. E dentro i messaggi ci mette i pagamenti — la sua idea è, testualmente, il quartiere che gira su Bitcoin.

In parallelo ha annunciato un secondo progetto, White Noise, che invece la connessione la richiede, ma cifra tutto in modo molto forte. Sta esplorando due strade insieme: quella offline e quella cifrata online. Il mantra che ripete da anni resta lo stesso — Bitcoin è denaro, non speculazione — e sotto c'è una visione precisa: costruire un'infrastruttura che regge anche quando il centro cade.

Qui il filo si chiude. Dorsey, Balaji Srinivasan con il suo slogan personale, privato, programmabile, Vitalik Buterin che ridisegna Ethereum attorno alla privacy: sono tutti la stessa risposta, la exit. Dove Altman dice mettiamo delle regole, loro dicono costruiamo un posto dove le regole degli altri non arrivano. Due modi opposti di reagire alla stessa paura — che poche mani stiano prendendo il controllo.

C'è un precedente storico che aiuta a vedere la scena. È la vecchia tensione tra chi, davanti a un potere che non gli piace, resta e prova a cambiarlo, e chi invece parte e fonda una colonia altrove. L'America stessa è nata così. La differenza è che stavolta la frontiera non è una terra, è un protocollo. Ci si sposta senza muoversi. E resta la domanda vera: una via d'uscita fatta di software è davvero una via d'uscita, o solo un'altra stanza dentro lo stesso edificio.

---

Resta un'ultima voce, e chiude il cerchio. Aravind Srinivas guida Perplexity, un motore che risponde alle domande. Ci si aspetterebbe da lui l'entusiasmo puro. Invece questa settimana ha detto qualcosa di più sottile.

La sua tesi ha un nome quasi elegante: il premio alla curiosità. Il ragionamento è questo. Se la macchina sa già tutte le risposte, sapere le risposte non vale più niente. L'unica cosa che resta scarsa è saper fare la domanda giusta. Srinivas lo porta lontano — sostiene che scuola, assunzioni, perfino il modo in cui un Paese resta rilevante, si riorganizzeranno attorno a chi sa formulare buone domande. Cita l'epica indiana e certi esperimenti in aula al MIT. È la conclusione naturale del suo stesso mestiere: se la risposta costa zero, il collo di bottiglia diventa la domanda.

C'è però una seconda cosa, ed è quella che lo rende credibile. Srinivas ha segnato una distanza dall'ottimismo dei suoi concorrenti. Dice che anche un sistema capace di migliorare se stesso, all'infinito, sbatterebbe contro un muro — e il muro non è il calcolo, non è l'energia. Sono le regole, l'inerzia delle istituzioni, il disordine irriducibile del mondo reale. È notevole sentirlo da chi vende intelligenza artificiale: ridimensiona proprio la promessa massimalista che tiene su l'intero settore.

Il collegamento con la giornata è naturale, quasi automatico. Karpathy diceva: puoi delegare il pensiero, non la comprensione. Srinivas aggiunge: e nemmeno la domanda. Sono le due metà della stessa scarsità. In mezzo alla potenza degli strumenti, quello che nessuno strumento fornisce è la direzione — sapere cosa chiedere e riconoscere se la risposta è buona.

Viene in mente la vecchia storia dei cartografi. Per secoli il valore stava nel disegnare la mappa, nel riempirla di dettagli. Poi le mappe sono diventate abbondanti, quasi gratuite. E il valore si è spostato: non a chi disegna il territorio, ma a chi sa dove vuole andare. Forse è questo, alla fine, il punto in cui siamo arrivati.

---

Progetti da osservare. Questa settimana la lista non porta nomi nuovi, e proprio per questo dice qualcosa. Sono quasi tutti volti già visti, che continuano a crescere — e crescono tutti nella stessa direzione del filo di oggi: fare le cose da sé, in piccolo, senza dipendere dal centro.

Tornano gli strumenti di Karpathy — nanochat, il suo llm-wiki, autoresearch — tutti in crescita continua, coerenti con la sua idea di un'intelligenza artificiale che ciascuno possa smontare e rimontare. Torna llama.cpp di Georgi Gerganov, che serve a far girare i modelli sul proprio computer invece che nei grandi data center: è l'efficienza contro la forza bruta di cui parlavano Carmack e Liang Wenfeng, tradotta in codice. Torna la libreria llm di Simon Willison, in crescita, la stessa mano che questa settimana parlava di lavoro di giudizio. E torna ARC-AGI di François Chollet, il test che continua a misurare la distanza tra capacità e comprensione.

Sul fronte del computer personale tornano, sempre in crescita, Obsidian per gli appunti, Hyprland e omarchy di Basecamp per chi vuole costruirsi l'ambiente di lavoro pezzo per pezzo. Restano in tendenza claude-context e superpowers. È una lista che sembra minore e invece racconta bene la stagione: mentre in alto si discute di ordine mondiale e di fondi sovrani, in basso la gente scarica strumenti per tenersi in casa quello che potrebbe delegare fuori. La stessa exit di Dorsey, in versione quotidiana e senza proclami.

---

Resta l'immagine dei cartografi. Per secoli abbiamo pagato chi disegnava il territorio; adesso le mappe non costano quasi niente, e conta solo sapere dove si vuole andare. Karpathy la chiama comprensione, Srinivas la chiama domanda, Sutskever la chiama idea. Tre parole per la stessa cosa che le macchine, per ora, non sanno darci: la direzione. È stato Signal Brief. Alla prossima.
