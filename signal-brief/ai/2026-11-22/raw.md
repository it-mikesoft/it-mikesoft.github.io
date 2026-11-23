# Quando l'intelligenza costruisce se stessa

> Tre laboratori concorrenti dichiarano pericolosa l'IA che migliora l'IA, e intanto continuano a spedire. Sotto, una frattura tecnica sul paradigma che ha portato fin qui.

---

Il 22 novembre 2026, su Signal Brief, la scena più strana della settimana è anche la più semplice da descrivere. Il capo dell'intelligenza artificiale di Microsoft, Mustafa Suleyman, dice che l'IA capace di migliorare se stessa è una capacità decisamente pericolosa. Nelle stesse settimane Microsoft installa agenti dentro Windows. Nessun freno, nessuna pausa, nessuna contraddizione dichiarata.

Ieri raccontavamo questa convergenza fra laboratori rivali sull'idea di frenare. Oggi il quadro si allarga: sotto l'allarme è comparsa una crepa tecnica, e riguarda il motore stesso che ci ha portati fin qui.

---

Il 13 novembre, in un'intervista, Ilya Sutskever usa due parole che valgono un programma: picco dei dati. Il suo ragionamento è che i guadagni futuri non arriveranno più dal raccogliere altro testo da internet, perché il testo utile è finito. Non c'è una seconda internet da macinare.

Pochi giorni dopo, su X, François Chollet scrive che prevedere la parola successiva su testo preso dal web ha esaurito la sua corsa. Aggiunge che l'architettura dominante oggi probabilmente non è fra i modi più efficienti di imparare, e che l'IA del futuro assomiglierà a qualcosa di molto diverso. Nello stesso periodo Yann LeCun pubblica un articolo su AI Magazine in cui propone l'alternativa: modelli che rappresentino lo stato del mondo, prevedano il risultato delle azioni e pianifichino entro obiettivi e vincoli espliciti.

Tre persone che non si somigliano in niente, partite da strade diverse, arrivano alla stessa casa. Il paradigma che ha prodotto gli ultimi quattro anni di meraviglie sta toccando il suo limite naturale.

Ed è qui che la giornata si spacca in due. Perché mentre si discute del limite teorico, Elon Musk al TomorrowX Summit annuncia che xAI sta aggiungendo circa mezzo gigawatt di calcolo al mese, con l'obiettivo di superare un gigawatt mensile entro fine 2027. Mezzo gigawatt è, in ordine di grandezza, il consumo di una città media. Al mese.

Due risposte alla stessa domanda, e nessun dialogo fra le due. Chi teorizza il limite scrive articoli scientifici; chi lo finanzia firma contratti per l'energia. È una scena che l'industria ha già vissuto: a fine Ottocento i costruttori di macchine a vapore continuarono a costruire caldaie sempre più grandi mentre l'elettricità stava già rendendo obsoleto l'intero schema. Non avevano torto sui numeri. Avevano torto sull'asse.

Attenzione, però: non è detto che i teorici abbiano ragione. Chollet stesso dice di non essere pessimista sul breve periodo, perché i modelli che ragionano al momento della risposta hanno prodotto guadagni veri. Il punto non è chi vince. Il punto è che per la prima volta da anni esiste un disaccordo serio su quale sia la strada, e non solo su quanto corsa serva a percorrerla.

Sul terzo fronte, intanto, qualcuno ha smesso di discutere e ha cominciato a riorganizzare. Jack Dorsey ha deciso di ricostruire Block attorno all'intelligenza anziché attorno alle divisioni aziendali: via gli strati di coordinamento intermedio, perché se un sistema raccoglie le informazioni e smista il lavoro, quegli strati non servono più. È il passaggio più concreto della settimana, e sposta la conversazione dal prodotto alla forma dell'impresa.

E in coda a tutto questo arriva la domanda che nessuno ha ancora saputo affrontare. Il 15 novembre Patrick Collison richiama Adam Smith e Montesquieu, per i quali il commercio e il lavoro sono ciò che forma gli esseri umani, e chiede cosa resti delle persone quando il lavoro diventa superfluo. Nessuna delle voci raccolte oggi ha una risposta.

---

Jack Dorsey è l'uomo che ha fondato Twitter e che oggi guida Block, la società dei pagamenti dietro Square e Cash App. Lo si è sempre conosciuto come un minimalista, uno che toglie più di quanto aggiunge. Questa settimana ha applicato il principio all'organigramma.

Il 19 novembre, in una conversazione per Harvard Business Review, Dorsey ha spiegato che l'IA dovrebbe consolidare le informazioni, coordinare il lavoro e permettere ai dipendenti di agire senza passare da strati di manager. La sua previsione è controintuitiva e vale la pena fermarsi un secondo: quando il coordinamento di routine viene automatizzato, il giudizio umano non perde valore, ne acquista. Quello che scompare è il mestiere di far parlare fra loro due reparti.

Non è rimasta una dichiarazione. Block ha lanciato Builderlab, una piattaforma gestita costruita sopra Buzz, il suo spazio di lavoro a codice aperto, dove persone, agenti e software aziendale lavorano insieme sullo stesso tavolo. Dorsey ha indicato poi dove vede gli agenti nei prodotti: un agente che ordina le scorte per un negoziante su Square, uno che aiuta una persona a gestire i soldi su Cash App. Ha ammesso, con una certa onestà, che il mercato è ancora all'inizio.

C'è un dettaglio tecnico che lo collega alla crepa di cui parlavamo. Dorsey sostiene che la direzione giusta non sia prevedere il linguaggio, ma costruire modelli del mondo: i dati delle transazioni di Block permetterebbero di modellare cosa è probabile che facciano clienti e venditori. È esattamente la tesi di LeCun, formulata da un imprenditore dei pagamenti invece che da un ricercatore. Quando la stessa idea arriva da due mondi che non si parlano, di solito significa qualcosa.

La contro-voce esiste, e ha un nome. Il 18 novembre l'analista Benedict Evans ha pubblicato una presentazione di ottantasei pagine intitolata AI Questions, e la frase che la riassume è secca: la diffusione non è trasformazione. Dare strumenti ai dipendenti non cambia come funziona un'organizzazione. Evans paragona il momento attuale alla fine degli anni Novanta — tecnicamente entusiasmante, circondato da certezze premature.

Dorsey è la prova che Evans cerca o l'eccezione che gli dà ragione? Per ora è un esperimento con un azionista unico abbastanza convinto da farlo. Il che è il modo in cui, storicamente, cominciano tutte le riorganizzazioni serie.

---

François Chollet ha passato anni a costruire strumenti per far imparare le macchine e poi a costruire i test che misurano se hanno davvero imparato qualcosa. È l'autore di ARC, una famiglia di prove pensate per distinguere chi ragiona da chi ha memorizzato.

Questa settimana, in una serie di post, ha messo nero su bianco la sua posizione sul paradigma attuale. Prevedere la parola successiva su testo del web ha finito la corsa. Lo stack di oggi — le reti che tutti usano, il modo in cui vengono addestrate, la catena di parole prodotte una dopo l'altra — probabilmente non rientra fra i metodi di apprendimento più efficienti esistenti. Il futuro, dice, assomiglierà a qualcosa di sostanzialmente diverso.

Poi ha fatto la cosa che rende la sua posizione difficile da liquidare: ha amplificato un risultato. Un modello minuscolo, diciannove milioni di parametri, addestrato da zero senza nessun dato linguistico, che arriva intorno al settanta per cento su ARC. Per dare la scala: i modelli di cui si parla ogni giorno hanno un numero di parametri migliaia di volte superiore. Se un sistema così piccolo risolve problemi di ragionamento, la dimensione non è la variabile che conta.

È una dinamica che la tecnologia conosce bene. I primi aerei commerciali sono diventati utili non quando i motori sono diventati più grandi, ma quando qualcuno ha capito che contava la forma dell'ala. L'efficienza, non la potenza, è quasi sempre il punto in cui una tecnologia cambia marcia.

Il collegamento col filo di oggi è diretto. Chollet non sta dicendo che l'IA rallenterà: dice anzi che i modelli che ragionano al momento della risposta hanno prodotto guadagni autentici, e che domanda di calcolo e capacità continuano a crescere. Sta dicendo che la strada attuale non è l'arrivo. Che è una cosa diversa dal pessimismo, e molto più scomoda per chi sta firmando contratti energetici decennali sul presupposto che l'unica variabile sia la potenza.

Resta un dettaglio che lo distingue dagli altri in questa storia. Chollet continua a insistere che la scuola dovrebbe rafforzare il pensiero degli studenti invece di delegarlo, e che l'IA deve restare uno strumento al servizio delle persone. È la stessa domanda di Collison sul lavoro, posta a monte: non cosa resta dell'uomo dopo, ma cosa gli insegniamo prima.

---

Teniamo presente dove siamo arrivati: tre laboratori concorrenti dicono che l'IA che migliora l'IA è pericolosa, tre teorici dicono che il metodo attuale ha finito la corsa, e nel frattempo si costruisce calcolo come se nessuna delle due cose fosse stata detta. Il prossimo personaggio sta esattamente su quella faglia.

Mustafa Suleyman guida la divisione IA di Microsoft. Prima aveva co-fondato DeepMind, cioè il laboratorio da cui viene buona parte di questa generazione di ricercatori. Non è un osservatore esterno: è dentro, al livello più alto.

A Ignite, la conferenza annuale di Microsoft, ha presentato una famiglia di modelli specializzati — codice, sicurezza informatica, immagini, trascrizione, voce — con una logica economica esplicita: sistemi mirati che si avvicinano ai concorrenti migliori a costo molto più basso. Uno di questi, dedicato al codice, entra in GitHub Copilot. Ha anche confermato che Microsoft sta costruendo un modello generalista di frontiera, con l'obiettivo di arrivare ai primi posti nel nuovo anno, continuando intanto a offrire i modelli dei rivali sulla propria piattaforma.

Poi, separatamente, l'allarme. I modelli oggi già aiutano a correggere errori, a generare i dati con cui si addestrano i loro successori e a valutarli. Suleyman ha definito questo una capacità decisamente pericolosa, ha detto che gli ultimi tre mesi sono stati uno spartiacque, e ha sostenuto che la sicurezza va dimostrata prima della messa in produzione, anche a costo di rallentare.

Mentre lo diceva, Microsoft metteva agenti dentro Windows 11.

Questa è la novità rispetto a ieri. Ieri la notizia era la convergenza dell'allarme fra Demis Hassabis, Suleyman e Geoffrey Hinton — tre laboratori che si fanno concorrenza e dicono la stessa cosa. Oggi il materiale aggiunge l'elemento riflessivo: chi suona l'allarme è la stessa persona che firma la spedizione, e non lo nasconde. Suleyman chiama la sua filosofia superintelligenza umanista, un'IA capace ma contenuta e subordinata all'umanità.

Non è ipocrisia, ed è più interessante dell'ipocrisia. È la posizione di chi pensa che l'unico modo di governare una corsa sia starci dentro in prima fila. Il problema è che storicamente, dai cantieri navali alle centrali, quella posizione ha prodotto moltissime regole scritte dopo l'incidente.

---

Vivek Raghavan ha co-fondato Sarvam, un laboratorio indiano che costruisce modelli linguistici. Prima di questo ha lavorato all'infrastruttura digitale pubblica indiana, quella dell'identità e dei pagamenti usata da oltre un miliardo di persone. Sa cosa significa costruire qualcosa che uno Stato poi non può spegnere.

Al Bengaluru Tech Summit ha pronunciato la frase che gli è rimasta attaccata: affidarsi a modelli stranieri rischia di rendere l'India una colonia digitale. Il meccanismo che descrive è semplice e vale per molti altri Paesi: il Paese esporta i dati dei propri cittadini e importa intelligenza già confezionata. Successo, dice, non significa avere tassi altissimi di utilizzo di ChatGPT. Significa possedere la filiera intera: macchine, calcolo, dati, modelli, applicazioni.

I numeri che ha portato sono concreti. Sarvam ha costruito un modello da centocinque miliardi di parametri e ne progetta uno da mille miliardi, mirato a codice, sicurezza e applicazioni scientifiche. La priorità sono le lingue indiane, la voce, il costo basso e la scala enorme, con infrastruttura gestita localmente per i dati sensibili. L'applicazione che indica è agenti pubblici: sistemi che capiscono il cittadino e parlano con amministrazione e imprese al posto suo, togliendo di mezzo code e moduli.

Lo stesso argomento, su una scala completamente diversa, lo fa Fei-Fei Li, fra le ricercatrici che hanno costruito la visione artificiale moderna. La sua osservazione è che il prezzo del calcolo sta tagliando fuori università e settore pubblico. Non è una lamentela di bilancio: è la constatazione che la ricerca di base, storicamente fatta da chi non deve vendere nulla, oggi non può permettersi gli strumenti.

Due scale, un solo argomento: la sovranità sull'IA è diventata una questione di accesso alle macchine. Ed è il punto dove la crepa tecnica di cui parlavamo smette di essere accademica. Se Chollet e Sutskever hanno ragione, e il futuro premia l'efficienza invece della dimensione, allora la porta che oggi sembra chiusa a chiave per chiunque non abbia miliardi potrebbe riaprirsi. Se invece ha ragione Musk, resta chiusa, e la geografia dell'intelligenza la decidono tre o quattro bilanci.

---

Progetti da osservare.

Genie 4, il nuovo sistema di DeepMind, non prevede parole: costruisce ambienti coerenti in cui qualcosa può muoversi e agire. È la tesi dei modelli del mondo tradotta in codice funzionante, e arriva nella stessa settimana in cui LeCun e Dorsey, da parti opposte, la invocano.

Inkling 2 Mini e Inkling 2 Small vengono dal laboratorio di Mira Murati. Il primo gira su un portatile o una singola scheda grafica; il secondo è a pesi aperti, scaricabile e modificabile, e secondo gli osservatori è il miglior modello aperto occidentale da tempo. Sono la risposta pratica all'obiezione di Fei-Fei Li sul prezzo del calcolo: se l'intelligenza entra in un portatile, l'università torna in partita.

HackerTube e TristanTube sono i fine settimana di Andrej Karpathy. Il primo ha setacciato quarantatré milioni di commenti di Hacker News per ricavarne seimilaquattrocento video raccomandati; il secondo indicizza quarantasettemila video e, a suo dire, è stato costruito in tre minuti usando Claude Code. Karpathy racconta che gli agenti hanno fatto quasi tutto, dall'analisi alla pubblicazione. Progetti che un tempo richiedevano settimane ora prendono ore.

Claude-BugHunter è uno strumento per la caccia agli errori nel software, in crescita su GitHub. Strix è un agente a codice aperto che attacca i sistemi per trovarne le falle, primo nelle classifiche settimanali. Entrambi segnano lo stesso passaggio: dopo mesi in cui la novità era scrivere codice in fretta, l'attenzione si sposta sul verificarlo.

E poi un documento che non è un prodotto: l'analisi di OpenRouter sugli incidenti nel trattamento dei dati presso i fornitori di inferenza. Noiosa, tecnica, e probabilmente il segnale più maturo della settimana. Quando un settore comincia a pubblicare i propri incidenti, ha smesso di essere un cantiere e ha cominciato a diventare un'infrastruttura.

---

Resta quella sovrapposizione: Suleyman che dice pericoloso e Microsoft che installa, nello stesso mese, senza che nessuno dei due si fermi. La domanda di Collison — cosa resta delle persone quando il lavoro diventa superfluo — non ha bisogno di una risposta oggi. Ha bisogno di qualcuno che se la ponga, questa domanda, prima che la risposta arrivi da sola, per sbaglio.

È stato Signal Brief. Alla prossima.
