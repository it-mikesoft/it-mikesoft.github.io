# La faglia sotto il consenso

> Modelli abbastanza plausibili da convincere, non abbastanza affidabili da reggere. E una battaglia silenziosa per chi imporrà la lettura ufficiale di questo passaggio.

---

Domenica sera, sette giugno duemilaventisei. Questo è Signal Brief. La settimana che si chiude ha avuto un suono diverso dalle precedenti: non è cambiato un modello, non è uscita una versione, non c'è stato un lancio. È cambiata invece la cornice. Una grande azienda pubblica un paper che documenta cosa fanno davvero i modelli quando i problemi diventano difficili. Una nuova società raccoglie più di un miliardo per scommettere contro l'idea dominante. Un anziano padre del settore chiede pubblicamente di rallentare. Cominciamo da qui.

---

La scena su cui voglio aprire è breve e fredda. Un gruppo di ricercatori di Apple, guidati da Samy Bengio, pubblica un paper con un titolo che sembra quasi un giudizio morale: "l'illusione del pensiero". Prendono i modelli di ragionamento più avanzati — quelli che pensano a voce alta, che mostrano i passaggi, che sono stati venduti per mesi come il prossimo salto — e li sottopongono a problemi che diventano via via più difficili. Non più difficili in modo strano, semplicemente più lunghi, con più passaggi.

Il risultato è quello che molti sospettavano e nessuno aveva ancora documentato in modo così pulito. A un certo punto, i modelli non solo sbagliano: smettono di provarci. La fatica del ragionamento, misurata nel numero di parole che il modello produce per arrivare alla risposta, cresce, raggiunge un picco, e poi scende. Come una persona che si arrende a metà esercizio.

Questo è il primo dei tre fili che corrono sotto la settimana, e mi sembra il più importante. Per anni la critica ai modelli linguistici è stata teorica. Si diceva: mancano di mondo, mancano di esperienza, sono pappagalli sofisticati. Argomenti filosofici contro argomenti filosofici. Adesso, per la prima volta, c'è una misura. Un grafico che mostra dove si rompe la corda. E un grafico è una cosa molto diversa da un'opinione: gira nelle università, nei consigli di amministrazione, dentro le commissioni che decidono cosa finanziare.

Il secondo filo passa da una frase che ha cominciato a girare in questi giorni, in forme diverse, sui blog di Simon Willison, nei post di Gary Marcus, nei commenti più sobri dell'ambiente. Suona così: siamo arrivati al punto in cui i modelli sono pericolosamente credibili, ma non ancora affidabili. È una soglia stretta, e secondo me molto pericolosa. Pericolosa perché quando una cosa sembra giusta in modo plausibile, le persone smettono di controllarla. La plausibilità diventa una scorciatoia per la verità. E qui non parliamo solo di chatbot che inventano una citazione: parliamo di sistemi che cominciano a comparire dentro decisioni mediche, contratti, codice in produzione.

Pensateci come al passaggio dalla stampa meccanica a una macchina che imita la calligrafia umana. Finché la stampa era ovviamente meccanica, sapevi cosa avevi in mano. Quando comincia a sembrare scritta a mano, ti fidi diversamente. È una cosa che il mondo dell'editoria affrontò all'inizio del Novecento, e ci sono voluti decenni per stabilire norme su cosa potesse essere pubblicato come autentico. Qui siamo di nuovo lì, con tempi molto più stretti.

Il terzo filo è il più politico, e forse il più interessante per chi ascolta da fuori. Sotto il dibattito tecnico — modelli più grandi o no, agenti sì o agenti come — c'è una battaglia parallela e silenziosa: chi riesce a installare la propria lettura del momento dentro le istituzioni. Perché alla fine non conterà chi avrà ragione: conterà chi avrà imposto la propria narrativa prima che l'altra si cristallizzi nelle leggi, nei piani industriali, negli statuti delle aziende. Yoshua Bengio in Canada parla di una intelligenza artificiale scienziata, non agente. Dario Amodei in India parla di corsa responsabile. David Sacks alla Casa Bianca dice di lasciare cucinare il mercato. Timnit Gebru ricorda che i costi strutturali sono già in atto. Tutti stanno provando a inquadrare lo stesso fenomeno con cornici opposte, sapendo che la cornice vincente diventerà il senso comune dei prossimi vent'anni.

Tenete questi tre fili in mente, perché torneranno tutti.

---

Cominciamo proprio da Samy Bengio, l'autore di quel paper. È uno di quei nomi che chi non è del settore non riconosce, ma che dentro pesano molto. Fratello del più famoso Yoshua, ha passato tredici anni in Google e da qualche anno guida la ricerca di apprendimento automatico ad Apple. Una scelta interessante, perché Apple in tutto questo è stata silenziosa, quasi assente dal coro, e ha lasciato fare agli altri il rumore.

Il paper che ha firmato in questi giorni si chiama "l'illusione del pensiero" e arriva con un tempismo che non è casuale. Per tutto l'anno scorso le grandi aziende hanno messo davanti come prossimo salto i modelli di ragionamento — quelli che impiegano più tempo a pensare prima di rispondere, che mostrano i passaggi, che sembrano avvicinarsi a un modo di lavorare quasi umano. La narrativa diceva: il vecchio metodo forse rallenta, ma adesso scopriamo che dare più tempo di pensiero ai modelli sblocca capacità nuove. Apple ha preso questa narrativa e l'ha messa alla prova in laboratorio.

Quello che hanno trovato è duplice. Da una parte, è vero: su problemi di media difficoltà, i modelli che pensano a voce alta vanno meglio. Dall'altra, su problemi davvero difficili, crollano. E non crollano in modo elegante, gradualmente. Crollano completamente, e in modo strano: invece di sforzarsi di più, si sforzano di meno. Come uno studente che vede l'esercizio impossibile e mette giù la penna.

È una frase tecnica che però dice qualcosa di filosofico. Significa che quei sistemi non hanno, all'interno, un meccanismo di insistenza, di lotta col problema. Hanno un'imitazione del ragionamento che funziona finché il pattern del problema assomiglia a qualcosa che hanno già visto. Oltre quella soglia, il pattern non c'è più, e il sistema si spegne.

Mi colpisce che a documentarlo sia stata Apple e non un laboratorio accademico. È come se l'azienda stesse mandando un segnale ai suoi azionisti, ai suoi ingegneri, e al settore: noi vediamo dove arriva questa tecnologia, e per il momento non basta a giustificare quello che gli altri stanno promettendo. Vedremo se questo segnale si tradurrà in scelte di prodotto, ma il fatto stesso che esista cambia il tono della conversazione. È come se nel pieno della corsa all'oro qualcuno avesse pubblicato la mappa geologica vera del fiume.

---

Dall'altro lato c'è Simon Willison, che da anni è una voce particolare in questo paesaggio. Non lavora in una grande azienda, non vende un modello, non scommette su una tesi forte. Tiene un blog, scrive ogni giorno, prova le cose con le sue mani e racconta cosa funziona e cosa no. È diventato per molti il punto di riferimento di chi vuole capire dove sta davvero la frontiera dell'uso quotidiano, lontano dagli annunci.

Pochi giorni fa ha tenuto una piccola conferenza in cui ha messo una data precisa su un cambiamento che molti sentivano confusamente. Ha detto: novembre del duemilaventicinque è il momento in cui gli agenti che scrivono codice sono passati dal funzionare a tratti al funzionare quasi sempre. Detto così sembra niente. Ma è il tipo di osservazione che vale doppio quando la fa lui, perché Willison è uno che usa questi strumenti tutti i giorni per progetti suoi, e quando dice "adesso funzionano" non sta vendendo nulla.

Il punto è che Willison non si limita a celebrare la cosa. Nei suoi post recenti tira fuori la parte difficile. Racconta che OpenAI ha rilasciato una nuova modalità sigillata, una specie di gabbia di contenimento per quando il modello fa cose strane. Racconta che Uber ha messo un tetto a quanto i suoi sviluppatori possono spendere in Claude, perché il consumo è esploso. Racconta che Microsoft sta uscendo con modelli più piccoli pensati per girare dentro l'editor di codice degli sviluppatori, e non sui server centrali.

Quello che descrive Willison è un settore che sta provando a contenere un fenomeno cresciuto più in fretta di quanto si potesse gestire. E dentro questo paesaggio, dice la cosa più interessante: gli agenti che scrivono codice sono diventati molto bravi, ma il lavoro vero non è più scrivere il codice, è disegnare le prove che ti dicono se quello che il modello ha scritto è giusto. Il collo di bottiglia si è spostato. Prima era la produzione, adesso è la verifica.

E qui si vede bene la soglia di cui parlavamo. I modelli sono diventati abbastanza bravi da convincerti che il codice funzioni. Lo leggi, sembra ragionevole, gira anche. Ma può avere un baco silenzioso che salta fuori sei mesi dopo, in produzione. Willison non lo dice in modo allarmistico. Lo dice come fa lui, con tono pratico, raccontando cosa fa per evitare il problema. Ma è esattamente la dinamica che il paper di Apple documenta dall'alto: la plausibilità è ormai a un livello tale da diventare il vero rischio.

---

Se Willison racconta il punto di svolta dall'interno della pratica, Gary Marcus lo racconta dall'esterno della critica. Marcus è da quasi vent'anni una voce scomoda. Critica i modelli linguistici, dice che sono limitati, propone strade diverse. Per anni è stato trattato come uno scettico fastidioso da molti dentro il settore. Negli ultimi due o tre anni il vento è girato, e quello che diceva comincia a sembrare meno strano.

In questi giorni Marcus ha pubblicato un post con un titolo quasi commovente: "quando i sogni di un'intelligenza artificiale sana si avverano". Racconta che una delle sue proposte di lunga data sta finalmente prendendo forma: i controlli preliminari. L'idea è semplice e arriva dal mondo dei farmaci: prima di permettere a un sistema di operare in contesti sensibili — diagnosi mediche, decisioni legali, infrastrutture critiche — qualcuno indipendente deve verificarlo. Come l'agenzia americana del farmaco verifica un medicinale prima che arrivi in farmacia.

L'idea non è di Marcus da solo, naturalmente, ma è una di quelle che ha tenuto in vita per anni mentre il resto del mondo correva nella direzione opposta. Adesso comincia a comparire in atti normativi, in proposte di legge, in posizioni pubbliche di figure che fino a poco fa la consideravano un freno. È un cambiamento di clima.

Marcus chiama "illusione" quello che Willison chiama "punto di svolta". Sono due nomi per lo stesso fenomeno, visti da due angolazioni opposte. Per Willison gli agenti che funzionano sono una buona notizia da gestire con cura. Per Marcus sono una credibilità che ha superato la capacità reale, e che senza filtri istituzionali rischia di fare danni. Hanno entrambi ragione, ed è proprio per questo che la settimana è interessante: la stessa realtà viene descritta come opportunità da chi la usa e come rischio da chi la guarda da fuori. Sarà la politica a decidere quale delle due descrizioni vince.

Vale la pena notare un dettaglio: Marcus prevede per il duemilaventisei un anno di riflusso. Non un crollo, ma un rallentamento delle aspettative. La storia delle tecnologie è piena di questi cicli — pensate al modo in cui internet, dopo il delirio del Duemila, è scomparso dai titoli per qualche anno prima di ricominciare a crescere in modo più solido. Mi sembra che siamo vicini a un movimento simile. Le promesse degli ultimi due anni hanno spinto le attese più in alto di quanto la tecnologia riesca a sostenere nel breve. Una riassorzione è quasi fisiologica.

Ricapitoliamo un attimo dove siamo arrivati. Tre fili: la documentazione concreta che i modelli crollano sui problemi difficili, la soglia critica tra credibilità e affidabilità, la battaglia per imporre la cornice di lettura. Adesso vediamo come si muove chi cerca invece di accelerare.

---

Dario Amodei guida Anthropic, una delle due o tre aziende che oggi definiscono cosa significhi essere alla frontiera dei modelli. Anthropic è interessante perché è nata da persone uscite da OpenAI con un'idea precisa: si può correre verso un rischio molto grande, purché si gestisca quel rischio dall'interno, con disciplina, mentre lo si crea. È una posizione fragile, paradossale, e Amodei la difende con coerenza.

Pochi giorni fa, a un convegno sull'intelligenza artificiale in India, ha usato un'immagine che gira nel settore. Ha detto che siamo dentro qualcosa di simile a una legge di Moore per l'intelligenza: ogni anno le capacità crescono in modo prevedibile, e in pochi anni avremo davanti, parole sue, "un paese di geni dentro un centro dati". L'immagine è efficace, ed è esattamente l'opposto del messaggio di Marcus.

Ma Amodei non è un acceleratore puro. Nello stesso periodo ha avuto uno scontro pubblico con il governo americano. Anthropic ha annunciato di non voler permettere l'uso dei suoi modelli per la sorveglianza di massa e per armi completamente autonome. Lo ha detto in modo diretto: ci sono linee che non superiamo, anche se il governo ce lo chiede. Una posizione che ha portato a una sospensione di alcuni usi federali e a uno scambio legale in corso.

Vedete il paradosso? Da una parte Anthropic accelera più che può sul prodotto, e racconta una storia di crescita esponenziale delle capacità. Dall'altra mette paletti che limitano il suo stesso mercato. Amodei chiama questa cosa "corsa responsabile". I critici, dentro e fuori, la chiamano "voler avere tutto" — i ricavi del frontiere e l'immagine della cautela.

Mi sembra che sia la posizione più difficile da tenere in piedi del settore, e proprio per questo la più rivelatrice. Se davvero c'è un rischio esistenziale, come Anthropic dice spesso, allora correre è una scelta strana da giustificare. Se non c'è, l'enfasi sui paletti suona come comunicazione strategica. La tensione tra queste due letture è il cuore della filosofia aziendale di Anthropic. È anche, per certi versi, il cuore della contraddizione di tutta questa fase: ti dicono che è pericoloso, e nello stesso respiro chiedono più miliardi per accelerare.

---

Sull'altro versante c'è Geoffrey Hinton. Settantasei anni, premio Turing, definito da decenni "il padrino dell'apprendimento profondo". Per tutta la vita ha costruito le fondamenta di quello che oggi vediamo. Due anni fa ha lasciato Google per poter parlare liberamente, e da allora ogni sua uscita pubblica è un evento.

Il primo giugno, in un'intervista a Fortune fatta a margine di un convegno in Svezia, Hinton ha detto una cosa molto semplice e molto forte: l'idea di costruire sistemi che massimizzano l'intelligenza senza che siano costruiti per tenere agli esseri umani è folle. Non è un attacco frontale a una singola azienda. È un giudizio sull'intera direzione di marcia. E nel suo modo, è una proposta tecnica: i sistemi del futuro, dice, devono avere quello che lui chiama un istinto materno, una predisposizione strutturale a proteggere chi è più debole. Non come strato di sicurezza aggiunto sopra, ma come ingrediente fondante.

Hinton non è un nostalgico. Sa benissimo che la tecnologia che ha contribuito a creare non si fermerà. Ma il suo messaggio di queste settimane è chiaro: bisogna frenare, non gestire la corsa al rischio dall'interno. È il punto esatto in cui si divide da Amodei, e da molti altri suoi ex colleghi.

La cosa che mi colpisce di Hinton è la posizione storica che ha assunto, quasi senza volerlo. Ricorda un po' la traiettoria di alcuni fisici dopo la seconda guerra mondiale, quelli che avevano lavorato al progetto Manhattan e poi avevano passato il resto della vita a chiedere controllo internazionale sulle armi nucleari. Non perché si pentissero del lavoro fatto — quel lavoro andava fatto comunque — ma perché capivano da dentro cosa stava per arrivare. Hinton oggi sembra essere in una posizione simile. Ha contribuito a costruire qualcosa, ne vede le conseguenze prima degli altri perché ne conosce la struttura, e usa la sua autorità per dire piano, fermatevi un momento.

Il problema è che il sistema in cui parla non ha freni. Non ci sono leve istituzionali pronte. Le aziende sono in gara, i governi cercano di non perdere terreno l'uno verso l'altro, gli investitori chiedono ritorni. Hinton lo sa. E ogni volta che parla, sembra parlare a un orizzonte di tempo più lungo di quello del prossimo trimestre. Sembra parlare a chi ci sarà tra dieci anni, perché abbia almeno una traccia da cui partire. È un gesto che ha qualcosa di antico, e per questo prezioso.

---

Adesso uno sguardo veloce ad alcuni progetti che mi sembra valga la pena tenere d'occhio, perché si muovono dentro i fili di cui abbiamo parlato.

Ineffable Intelligence è la nuova creatura di David Silver, l'ex DeepMind che aveva guidato AlphaGo. Ha raccolto un miliardo e cento milioni di dollari su una scommessa che è quasi un manifesto: costruire sistemi che imparano dalla propria esperienza, senza essere addestrati sui testi prodotti dagli umani. Silver la chiama "era dell'esperienza". È il versante opposto rispetto al modello linguistico che ingoia internet e lo restituisce in forma più ordinata. Se Silver ha ragione, fra qualche anno la frontiera non sarà più nei pesi di un modello, ma nelle traiettorie di un agente che esplora il mondo digitale e impara facendo.

LawZero è il progetto di Yoshua Bengio. L'idea è di costruire un'intelligenza artificiale scienziata: un sistema progettato per essere onesto, probabilistico e senza obiettivi nascosti, da usare come supervisore degli altri modelli. Una specie di guardiano che non ha agenda propria, e che può controllare altri sistemi più potenti senza esserne contagiato. Bengio ci crede al punto da aver lasciato in parte il suo ruolo accademico per costruirlo.

GR00T è il programma di Nvidia per i robot umanoidi. Lo guida Jim Fan, e sta diventando il punto in cui converge tutto il lavoro sulle intelligenze fisiche: agenti che imparano in mondi simulati e poi trasferiscono quelle capacità nel mondo reale. È il versante che parla la stessa lingua di Silver, ma con i muscoli al posto del codice.

Marin è invece la cosa che mi ha incuriosito di più. È il laboratorio aperto fondato da Percy Liang a Stanford. Ogni esperimento è documentato in pubblico, chiunque può proporre un'idea, e ogni passo del processo viene tracciato. È un tentativo di riportare la scienza vera dentro un campo che si è chiuso dentro le aziende. Se ha successo, può cambiare le regole.

Tempo, infine, è la blockchain che Stripe lancerà entro fine anno. Patrick Collison la sta presentando come l'infrastruttura su cui agenti software potranno fare pagamenti tra loro. Sembra un dettaglio tecnico, ma è il primo segnale concreto che il commercio fatto da agenti sta diventando un'idea industriale, non solo un esperimento di laboratorio.

---

La scena che mi resta in mente, alla fine di questa settimana, è quella del grafico nel paper di Apple. La curva che sale, raggiunge un picco, e poi scende. Quei modelli che, davanti a un problema troppo difficile, smettono di provarci. È un'immagine quasi umana, e proprio per questo inquietante. È stato Signal Brief. Alla prossima.
