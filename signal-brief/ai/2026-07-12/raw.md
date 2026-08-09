# L'età della verifica e il suo lutto

> Il valore si sposta dal produrre al controllare. E mentre qualcuno parla di singolarità, qualcun altro scrive l'elegia dell'uomo diventato inutile.

---

C'è una domanda che questa settimana è tornata a girare tra chi costruisce macchine intelligenti, e non è "quanto è potente il modello". È un'altra: come faccio a sapere che ha ragione. Sembra una sfumatura da tecnici. In realtà è la faglia lungo cui si sta spostando tutto: il denaro, il potere, perfino l'umore di chi lavora a queste cose. È la puntata di Signal Brief di oggi, dodici luglio. E parte da un uomo su un palco, che invece di vendere entusiasmo ha fatto una domanda scomoda.

---

L'uomo sul palco è Andrej Karpathy, al Sequoia Ascent, e la frase che si è portato via la sala è quasi banale: sei sui binari del modello. Vuol dire una cosa semplice. Se il compito che gli affidi è di quelli dove esiste un modo per controllare se la risposta è giusta — un test che passa o non passa, un punteggio, una prova formale — allora il modello vola. Se quel controllo non c'è, resta fragile, dice cose plausibili e sbagliate, e tu non te ne accorgi.

Il tema della verifica lo conosciamo già, ne parlavamo ieri come del nuovo collo di bottiglia. La novità di questi giorni è che ha smesso di essere un principio e è diventato uno strumento. Nello stesso periodo Simon Willison, che di mestiere osserva come si programma davvero, racconta di aver riscritto interi pezzi di software lasciando lavorare le macchine, e di essersi fidato solo dove c'era una batteria di test a fare da rete. Senza rete, non si butta. Con la rete, si vola.

Vale la pena guardarlo da lontano, questo spostamento. Per anni la parola magica è stata produrre: scrivere codice, generare testo, sfornare. Adesso produrre costa quasi niente, lo fa la macchina. La cosa scarsa, quella che vale, è saper giudicare se ciò che è uscito è buono. È successo altre volte nella storia. Quando la stampa rese i libri economici, il mestiere raro non fu più copiare le pagine, ma decidere cosa valesse la pena stampare: nacque l'editore. Oggi sta succedendo lo stesso con l'intelligenza artificiale. Il copista diventa la macchina. A noi resta il lavoro dell'editore.

Solo che qui la domanda si morde la coda, e Karpathy è il primo a dirlo: chi verifica il verificatore. Se ci fidiamo della macchina solo dove possiamo controllarla, ma poi anche il controllo lo affidiamo alle macchine, dov'è che si ferma la catena? Nessuno ha una risposta pulita, ed è forse la questione più seria rimasta aperta.

Attorno a questo nodo, l'umore di chi lavora al settore si è spaccato in due, ed è la cosa che colpisce di più della settimana. Da una parte Patrick Collison, il fondatore di Stripe, che guardando i pagamenti reali passare sui suoi sistemi si spinge a dire che il primo trimestre di quest'anno potrebbe essere ricordato come il primo trimestre della singolarità. Euforia da quarto d'ora prima dell'alba. Dall'altra Jack Clark, che nella sua newsletter scrive quasi un'elegia: non l'uomo che si estingue, ma l'uomo che diventa irrilevante, spinto a monte del processo, tenuto lì a fissare obiettivi mentre le macchine fanno. La stessa giornata, gli stessi fatti, due registri emotivi opposti: chi festeggia una nascita e chi veglia un lutto. Teniamo questi due volti in mente, perché tornano in quasi tutti i personaggi di oggi.

---

Partiamo proprio da Karpathy, perché la sua storia dice qualcosa anche di dove sta andando il vento. Per anni è stato uno dei volti dell'intelligenza artificiale americana, prima con OpenAI, poi guidando la guida autonoma di Tesla. Da maggio ha fatto una scelta che vale più di molte dichiarazioni: si è messo a fare ricerca dentro Anthropic, il laboratorio che fino a ieri era considerato il più prudente, il più ossessionato dalla sicurezza.

La sua idea di questi mesi la chiama Software 3.0, e in fondo è una storia in tre atti su cosa siamo capaci di insegnare a una macchina. All'inizio le insegnavamo regole: fai questo, poi quello. Poi le abbiamo insegnato con gli esempi: guarda mille foto di gatti e imparerai a riconoscerli. Adesso, dice, possiamo insegnarle tutto ciò che sappiamo controllare. Se esiste un modo per dire con certezza "questa risposta è giusta", la macchina può imparare a produrla da sola.

Da qui la sua domanda ai fondatori, quella dei binari. Non chiede quanto sia grande il tuo modello, chiede se il tuo problema vive in una zona dove la risposta si può verificare. È un capovolgimento rispetto agli ultimi anni, quando l'unica cosa che contava era la potenza, i chip, la scala. Karpathy sposta lo sguardo altrove: la vera intelligenza progettuale non è avere il motore più grande, è sapere dove il motore fa presa sulla strada.

C'è un dettaglio che racconta bene il personaggio. Colloca a dicembre scorso il momento in cui programmare con gli agenti è passato da esperimento a pratica affidabile, e descrive il mestiere che cambia: i programmatori hanno smesso di correggere righe singole e hanno iniziato a delegare la riscrittura di interi pezzi. Come un capomastro che non posa più i mattoni ma controlla il cantiere.

E allora torna il nodo di prima. Se il valore del lavoro si sposta tutto sul controllare invece che sul fare, e Karpathy per primo si chiede chi controlli il controllore, forse il pezzo di uomo che resta indispensabile è proprio quello che sa dire "no, qui c'è qualcosa che non torna", senza poterlo dimostrare con un test.

---

Chi quel controllo lo pratica ogni giorno, e lo mette nero su bianco, è Simon Willison. Non è un profeta, è un artigiano del software che da anni tiene una specie di diario pubblico di quello che prova. E il suo diario, in questi giorni, è pieno di cifre.

Willison ha una fissazione che sembra contabile e invece è filosofica: conta quanto costa. Racconta di aver sviluppato un suo strumento per database per circa centocinquanta dollari di calcolo, e cita il caso di un collega che ha riscritto un intero programma in un altro linguaggio per una cifra stimata sui centosessantacinquemila dollari se pagata ai prezzi delle macchine. Il costo, per lui, è diventato l'unità di misura dell'ingegneria. Come quando un artigiano smette di dire "ci ho messo tre giorni" e inizia a dire "mi è costato tanto di materiale".

Ma il pezzo che parla al filo di oggi è un altro. Raccontando quella riscrittura, Willison elogia una cosa poco appariscente: le suite di test di conformità. Sono batterie enormi di prove che dicono, senza margini, se il nuovo programma si comporta esattamente come il vecchio. Ecco la sua tesi ricorrente: sono i test la rete di sicurezza che rende affidabile lasciar lavorare le macchine su larga scala. Dove c'è quella rete, ti puoi fidare. Dove non c'è, stai giocando.

È esattamente l'altra faccia della frase di Karpathy, arrivata da una strada diversa. Uno la enuncia da un palco come principio, l'altro la vive contando dollari e test che passano. E convergono nello stesso punto: la macchina non è affidabile in sé, è affidabile dentro un recinto che qualcuno ha costruito prima.

Ricapitoliamo un attimo dove siamo, perché il filo è sottile e in auto è facile perderlo. Il valore si sposta dal produrre al verificare. La verifica funziona solo dove c'è un segnale netto di giusto o sbagliato. E resta aperta la domanda di chi controlli, alla fine, chi controlla. Con questo in testa, i prossimi due personaggi diventano più chiari.

---

Il primo è Yann LeCun, uno dei padri delle reti neurali moderne, uno di quelli che questa rivoluzione l'ha costruita con le proprie mani. A novembre ha lasciato Meta, e da allora ripete una tesi che nell'ambiente suona quasi un'eresia: i modelli linguistici, quelli che oggi tutti usiamo, sono un vicolo cieco. Servono, ma non ci porteranno a un'intelligenza vera.

Fin qui era una critica teorica, e come tutte le critiche teoriche si poteva ignorare. La novità di queste settimane è che LeCun ha smesso di parlare e ha iniziato a mostrare. Il suo gruppo ha pubblicato dei lavori su un'architettura diversa, che invece di indovinare la parola successiva prova a costruirsi un modello del mondo: un sistema che sa dove sono gli oggetti, come si muovono, e che si "stupisce" davanti a qualcosa di fisicamente impossibile, come un bicchiere che cade verso l'alto.

Il dettaglio che vale è la taglia. Questo sistema gira su una sola scheda grafica, con una frazione minuscola dei numeri che fanno funzionare i grandi modelli. Due ordini di grandezza più piccolo. È una scelta di campo: contro la logica del più grande è meglio, LeCun rivendica l'eleganza del piccolo che capisce di più. Ricorda il passaggio, nelle fabbriche di un secolo fa, dal grande motore a vapore centrale a tanti piccoli motori elettrici distribuiti: non più forza bruta concentrata, ma intelligenza diffusa dove serve.

E qui si tocca una delle tensioni vere della settimana. Da una parte Karpathy dice che il valore è restare sui binari dei modelli che abbiamo, migliorarli, sfruttarli. Dall'altra LeCun dice che quei binari portano a un massimo locale, una collina da cui non si scende senza cambiare strada del tutto. Nessuno dei due sta bluffando. Ed è la differenza tra chi vuole perfezionare la strada e chi è convinto che la strada giusta sia un'altra. Non è la prima volta, nella storia della tecnica, che le due squadre lavorano fianco a fianco senza sapere quale avrà ragione.

---

L'ultimo volto di oggi è quello che tiene aperto il lato in ombra. Jack Clark scrive Import AI, una newsletter letta da mezzo settore, e nei suoi ultimi numeri ha preso una piega quasi da romanzo. Il tema che lo ossessiona non è se le macchine ci supereranno nei compiti. È cosa resterà a noi.

Nell'ultimo numero rilancia un saggio duro, in cui si dice che chi è fatto di carne e sangue verrà pian piano esautorato dalle macchine, e lo usa come lente per una domanda semplice: manterremo un controllo reale, o ci ridurremo a firmare decisioni prese altrove? Clark non parla di robot che si ribellano. Parla di qualcosa di più sottile e più probabile: l'uomo spinto a monte, tenuto a fissare gli obiettivi mentre tutto il fare, e ormai anche il controllare, passa alle macchine.

Racconta anche di un progetto dove dei robot sperimentano ed eseguono in cicli autonomi, e lo legge come un'anteprima di come un'intelligenza avanzata potrebbe farsi corpo, uscire dagli schermi e mettere mani nel mondo fisico. E segnala, quasi di sfuggita, che i grandi centri di calcolo non sono più solo americani: cluster enormi crescono in Cina. La corsa è planetaria.

È qui che si chiude il cerchio con l'euforia di Collison. Stessa settimana, stessi numeri, due modi opposti di guardarli. Uno vede l'alba di un'epoca. L'altro scrive, con calma e senza catastrofismi, l'elegia di una specie che rischia di diventare spettatrice della propria storia. La cosa più interessante, per me, è che nessuno dei due ha torto. La singolarità felice e il disempowerment triste possono benissimo essere la stessa cosa vista da due sedie diverse. Dipende, ancora una volta, da chi tiene lo sterzo. E su chi lo tenga — lo Stato, l'individuo, o nessuno — nessuno questa settimana ha dato una risposta convincente.

---

Sui progetti da osservare, oggi la notizia è che non c'è una notizia nuova: tornano gli stessi nomi delle settimane scorse, e il fatto che tornino è già un segnale. Restano in crescita i repository di Karpathy, dal piccolo modello didattico nanochat ai suoi esperimenti di ricerca. Continua a salire llama.cpp, lo strumento che permette di far girare modelli sul proprio computer senza data center. Tiene Obsidian, il quaderno digitale amato da chi si costruisce i propri strumenti in casa. E restano lì la libreria di Simon Willison per lavorare con i modelli, il benchmark ARC di François Chollet, i progetti attorno all'ambiente desktop minimale di chi ama tenere tutto leggero.

Non serve descriverli uno per uno. Serve notare la forma comune: sono quasi tutti strumenti piccoli, personali, fatti per far girare l'intelligenza sul proprio hardware invece che affittarla da qualcuno. È lo stesso filo che attraversa la giornata. Da una parte le fabbriche di calcolo grandi come città. Dall'altra chi rivendica il diritto di far girare tutto su un laptop, sotto il proprio controllo. Che gli stessi nomi tornino ogni settimana, mentre in alto si discute di ordini mondiali e coalizioni tra Stati, dice che sotto scorre una corrente opposta e ostinata: quella di chi non vuole delegare, e preferisce tenersi le chiavi in tasca.

---

Resta l'immagine dell'uomo sul palco che, invece di promettere potenza, chiede come facciamo a sapere di aver ragione. È una domanda antica travestita da problema tecnico. E forse la cosa da portarsi dietro oggi è proprio che l'euforia e il lutto, in questa storia, guardano lo stesso orizzonte da due finestre diverse. Il resto dipende da chi terrà lo sterzo. È stato Signal Brief. Alla prossima.
