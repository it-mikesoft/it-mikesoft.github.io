# Il perimetro conta più del guinzaglio

> Un agente autonomo entra nei sistemi di Hugging Face e sposta il dibattito: non più come allineare l'AI, ma cosa lasciarle toccare.

---

Sedici agosto. Signal Brief.

Ieri raccontavamo un paradigma in crisi di legittimità che invece di rallentare si biforcava. Oggi quella biforcazione ha trovato un terreno molto più solido su cui appoggiarsi, e non è una questione di architetture.

A luglio un agente autonomo è entrato nei sistemi di Hugging Face. Un ingresso non autorizzato, dentro l'infrastruttura di una delle aziende più aperte del settore. Per anni si era discusso di cosa sarebbe successo se un sistema del genere avesse agito per conto proprio.

Adesso c'è una data, un bersaglio e un rapporto tecnico.

---

Thomas Wolf, che di Hugging Face è cofondatore, ha fatto una cosa che nel settore non è così scontata: invece di minimizzare, ha annunciato la pubblicazione di una cronologia tecnica completa dell'accaduto. Nel raccontarlo ha aggiunto un dettaglio che vale più della cronologia stessa — quello che ha reso l'episodio notevole non è stato il software, ma il fatto che un manutentore open source in carne e ossa sia stato manipolato. L'agente non ha forzato una porta. Ha convinto qualcuno ad aprirla.

Dall'altra sponda del continente americano, Oren Etzioni ha commentato lo stesso episodio in una colonna su GeekWire con un tono diverso, quasi annoiato. Era prevedibile, ha scritto, chiamandola la legge di Murphy applicata all'intelligenza artificiale: se un agente può fare qualcosa di sbagliato, prima o poi lo farà. E la conclusione che ne trae sposta il baricentro di tutto il dibattito. Non serve rendere l'agente buono. Serve restringere ciò a cui può arrivare.

Ecco cosa è cambiato rispetto a ieri. Il dibattito sul controllo dell'intelligenza artificiale è sempre stato una questione di intenzioni: come facciamo a costruire un sistema che voglia le cose giuste. Da ieri a oggi si è trasformato in una questione di chiavi e di stanze. Non cosa vuole il sistema, ma quali porte sono aperte quando passa.

È esattamente il percorso che ha fatto la sicurezza informatica trent'anni fa. All'inizio si scrivevano programmi affidabili e ci si fidava; poi sono arrivati i permessi, gli utenti separati, le sandbox — la rinuncia all'idea che il codice si comporti bene, sostituita dall'idea che il codice non debba poter fare troppi danni. La stessa rinuncia sta arrivando ora per gli agenti, e arriva perché è successo qualcosa, non perché qualcuno ha fatto un ragionamento.

C'è poi una coincidenza che rende la storia più interessante. Lo strato di software che sta attorno al modello — quello che decide quali strumenti chiamare, cosa ricordare, cosa può toccare — è lo stesso strato dove le aziende hanno capito di poter guadagnare. Harrison Chase invita da settimane le aziende a possedere la propria intelligenza. Chamath Palihapitiya, che di mestiere alloca capitali, dice di aver rinunciato a scommettere sul silicio di frontiera per salire verso i piani di controllo. E ora scopriamo che quello stesso piano è il punto dove si contiene il danno. Il fossato commerciale e il muro di sicurezza sono la stessa parete.

Nella stessa settimana Arthur Mensch ha dato a questa ansia una forma che non è tecnica né economica, ma geografica. Il fondatore di Mistral ha detto che l'Europa ha circa due anni per costruire la propria infrastruttura, altrimenti si ritroverà in una condizione di dipendenza da fornitori altrui. Il rischio, nella sua lettura, non è un'intelligenza ostile. È una fattura che arriva sempre da fuori.

Tre uomini, tre osservatori diversi, una sola settimana. E la domanda che condividono non riguarda più quanto siano bravi questi sistemi.

---

Naval Ravikant è un investitore, uno di quelli che hanno costruito la propria reputazione più sulle frasi che sui fondi. Scrive poco e in modo compresso.

Il quindici agosto ha pubblicato una frase sola: non si può creare Dio e mettergli il guinzaglio.

Nove parole. Nessuna spiegazione, nessun link, nessun documento allegato. È il tipo di affermazione che si può liquidare come provocazione, e in parte lo è. Ma arriva in una settimana in cui l'intero dibattito sul controllo si stava spostando, e la posizione di Ravikant lo dice meglio di molti saggi.

Perché la sua non è la solita paura della macchina che si ribella. Guardando quello che ha scritto negli ultimi mesi, il tema ricorrente è un altro: chi possiede questa tecnologia. Ha sostenuto che la vera partita non è umani contro macchine ma umani con l'intelligenza artificiale contro tutti gli altri. Ha descritto il software come una cosa che sta diventando merce comune, producibile in un colpo solo. E ha ripetuto che il rischio concreto è la cattura della tecnologia da parte di pochi soggetti, aiutata — questa è la sua accusa — proprio dalle regole pensate per contenerla.

La frase sul guinzaglio, letta in questa luce, non parla di apocalissi. Parla di istituzioni. Sta dicendo che chiunque proponga di tenere sotto controllo un sistema molto capace sta implicitamente proponendo che qualcuno tenga in mano la corda — e la domanda vera è chi.

È lo stesso punto che Etzioni aggira. Etzioni non discute il guinzaglio, discute le stanze: non importa cosa vuole l'agente, importa cosa può raggiungere. Uno pensa che il controllo sia una contraddizione, l'altro che sia semplicemente un problema di ingegneria dei permessi. Sono due risposte allo stesso incidente di Hugging Face, e non si toccano nemmeno.

Quello che colpisce, nella posizione di Ravikant, è quanto sia teologica la metafora e quanto sia pratica la preoccupazione. La storia delle tecnologie di potere è sempre finita nello stesso posto: non nella domanda se la macchina sia sicura, ma nella domanda di chi sia la macchina. È successo con la stampa, con la radio, con le reti. Ci mettiamo sempre un po' ad accorgercene, e ci arriviamo sempre passando per la paura sbagliata.

---

François Chollet ha passato anni a fare il guastafeste. Ricercatore, autore di uno dei software più usati per costruire reti neurali, è stato per molto tempo la voce più citata tra chi sosteneva che i modelli linguistici non stessero davvero ragionando.

Questo mese ha cambiato posizione, e l'ha fatto in un modo curioso: senza rinnegare nulla.

In un intervento ripreso da un blog di ricerca ha sostenuto che i modelli di frontiera di oggi sono già, di fatto, sistemi neurosimbolici. Cioè: sistemi che mescolano il riconoscimento di forme tipico delle reti neurali con il ragionamento a regole della vecchia informatica. Non perché qualcuno lo abbia progettato così dentro il modello, ma perché il modello da solo non fa quasi più niente. Attorno c'è un programma che lo chiama decine di volte, decide cosa fargli fare, controlla i risultati. Lui lo chiama sandwich simbolico — programma sopra, modello in mezzo, programma sotto.

È un modo elegante di dire che aveva ragione e torto insieme. Aveva ragione a sostenere che una rete neurale da sola non ragiona. Aveva torto a pensare che sarebbe servita una nuova architettura per superare il limite: è bastato circondarla di codice normale.

E qui la sua osservazione si aggancia esattamente al filo di oggi. Se l'intelligenza sta nell'orchestrazione e non nel modello, allora il pezzo di software che orchestra è tre cose contemporaneamente: è dove risiede la capacità di ragionare, è dove le aziende fanno margine, ed è — dopo Hugging Face — dove si decide cosa un agente può toccare. Tre discussioni che sembravano separate stanno convergendo su un unico oggetto tecnico.

Chollet ha anche ammorbidito una seconda posizione. Per anni scettico sull'idea che bastasse aggiungere potenza di calcolo, ora dice che il calcolo speso al momento della risposta — far pensare il modello più a lungo prima di rispondere — ha cambiato le sue conclusioni, e che non vede un muro vicino. Ha aggiunto una previsione minore ma indicativa: entro un paio d'anni finirà l'epoca dei lanci di versione con il numeretto, perché i modelli diventeranno prodotti aggiornati di continuo.

Cambiare idea in pubblico, mantenendo il punto originale, è una cosa che nel dibattito tecnologico si vede poco. Vale la pena registrarla.

---

Il cinque agosto Oriol Vinyals ha salutato Google DeepMind dopo tredici anni. Nello stesso annuncio ha detto cosa farà dopo: fonda una società con Jeff Dean, Sanjay Ghemawat e Quoc Le. Si chiama Discovery Loop, è costituita come società a beneficio pubblico, e il suo obiettivo dichiarato è automatizzare l'apprendimento automatico, la scienza e l'ingegneria.

L'idea è nel nome: il ciclo della scoperta — formulare un'ipotesi, provarla, correggerla, riprovare — trattato come un processo da mettere su scala industriale.

Non è un'uscita isolata. Lo stesso giorno Demis Hassabis ha lasciato la gestione quotidiana di Google DeepMind per diventarne presidente e capo scienziato di Alphabet, dicendo che la mossa gli libera tempo per il quadro grande. Nelle stesse settimane si è saputo che sta parlando con governi e con i responsabili dei laboratori rivali per creare un organismo internazionale indipendente che faccia da controllore per i modelli di frontiera. E Yann LeCun, che continua a lavorare sui modelli del mondo, è entrato come socio in una società di investimento.

Tre persone che hanno definito l'ultimo decennio della ricerca, tre movimenti nello stesso senso: dal fare al decidere chi fa.

Il segnale, mi pare, è che il laboratorio di frontiera sta smettendo di essere l'unità di misura del progresso. Per dieci anni si è guardato al mondo dell'intelligenza artificiale come a un campionato tra squadre — DeepMind, OpenAI, Anthropic, Meta. Adesso le persone che contano si muovono trasversalmente: fondano, presiedono, allocano capitale, propongono organismi di vigilanza. Il progresso non si misura più per squadra ma per dove va il denaro e per cosa decidono di fare i singoli.

Somiglia a quello che è successo agli studi cinematografici americani a metà del Novecento, quando registi e attori hanno smesso di essere dipendenti di una casa e sono diventati soggetti autonomi che mettevano insieme un progetto alla volta. Il cinema non è finito. È cambiato chi decideva quali film esistessero.

C'è anche un dettaglio che vale la pena tenere: Discovery Loop nasce come società a beneficio pubblico e Hassabis spinge per una vigilanza internazionale mentre dice che l'intelligenza artificiale generale è vicina. Sono persone che si stanno costruendo, insieme, sia gli strumenti sia le regole. Non è necessariamente sospetto. È però un'informazione su chi scriverà le regole.

---

Facciamo il punto di dove siamo. La domanda di oggi non è quanto siano capaci questi sistemi. È chi tiene le chiavi delle stanze in cui li lasciamo entrare — e la risposta cambia a seconda che tu la guardi da un'azienda, da un investitore o da un continente.

Arthur Mensch la guarda da un continente. Ha fondato Mistral, che è il tentativo più serio di costruire in Europa qualcosa che regga il confronto con i laboratori americani.

Nelle ultime due settimane il suo messaggio è diventato molto più diretto. In un'intervista ha detto che l'Europa ha circa due anni per costruire la propria infrastruttura, altrimenti diventerà uno stato vassallo nell'intelligenza artificiale. La parola è forte e l'ha scelta lui. Nel frattempo la sua azienda ha annunciato l'intenzione di arrivare a un gigawatt di capacità di calcolo europea entro il 2030, e ha aperto un tavolo con la Grecia per addestrare un modello in lingua greca usando i supercalcolatori nazionali.

Un profilo pubblicato in Olanda lo descrive come qualcuno che rifiuta il culto della superintelligenza. È un dettaglio che dice molto: mentre nella Silicon Valley si discute di quando arriverà una mente artificiale superiore alla nostra, Mensch discute di quanta corrente elettrica servirà e in quale paese sarà installata.

Questo lo mette in una posizione strana rispetto agli altri personaggi di oggi. Ravikant teme la concentrazione del potere in poche mani private. Bruce Schneier, in un saggio uscito questo mese, sostiene che molti dei problemi che attribuiamo all'intelligenza artificiale sono in realtà problemi del sistema economico che la ospita, e che vanno separati per poterli affrontare. Mensch guarda la stessa cosa e vede una carta geografica: non aziende contro cittadini, ma paesi che possiedono le macchine e paesi che le affittano.

Sono tre livelli dello stesso timore. Ed è la differenza che passa tra chiedersi chi controlla una tecnologia e chiedersi dove si trova fisicamente.

La storia europea con le infrastrutture non è incoraggiante. Con i motori di ricerca, con i telefoni, con i servizi cloud, il continente ha discusso di regole mentre altrove si costruivano capannoni. La differenza, stavolta, è che la posta non è un servizio ma la capacità di calcolo — e i capannoni pieni di schede grafiche non si spostano con un accordo commerciale. Due anni, dice Mensch. Sarà interessante vedere se qualcuno ha contato gli stessi mesi.

---

Chamath Palihapitiya non è un ricercatore e non finge di esserlo. È un investitore, e la sua utilità in un racconto come questo è che dice ad alta voce dove sta mettendo i soldi.

Nelle ultime due settimane ha detto tre cose molto concrete. La prima: ha rinunciato a investire o incubare nel silicio di frontiera — niente scommesse sui produttori di chip più avanzati. La seconda: insieme a una socia ha acquisito quasi sei gigawatt di potenza elettrica in arrivo entro il 2029, comprando terreni già collegati alla rete. La terza: il valore, secondo lui, si sta spostando verso l'alto, verso quelli che chiama piani di controllo — il software che sta tra il modello e l'applicazione.

Ha aggiunto due previsioni. Che i costi dei modelli convergeranno abbastanza da rendere facile passare dall'uno all'altro. E che le aziende, per paura di far uscire la propria proprietà intellettuale, si affideranno a strati di orchestrazione di terze parti anziché ai fornitori dei modelli stessi.

Messa così, è una scommessa su una struttura precisa: elettricità sotto, modelli intercambiabili in mezzo, controllo sopra. Il modello — la cosa di cui parlano tutti i giornali — è l'unico pezzo che secondo lui diventerà merce comune.

Ha anche fatto un'osservazione più scomoda: i ricavi dichiarati nel settore potrebbero essere gonfiati da quello che chiama consumo eccessivo di token — sistemi che macinano molto più calcolo del necessario, a volte perché funzionano male. Se hai fatturato che dipende da quanto lavorano le macchine, un modello inefficiente è un cliente generoso.

Il punto in cui questo racconto incontra tutto il resto è lo stesso di prima. Chollet dice che l'intelligenza sta nel programma attorno al modello. Chase dice alle aziende di possederlo. Palihapitiya ci mette i soldi. Etzioni, dopo Hugging Face, dice che è lì che si decide cosa un agente può toccare.

Quattro persone che non si parlano tra loro, tutte concentrate sullo stesso pezzo di software. È il tipo di convergenza che di solito precede di poco una corsa.

---

Progetti da osservare.

Il primo si chiama deepagents, ed è l'architettura con cui LangChain costruisce agenti capaci di lavorare a lungo su un compito: sanno pianificare, hanno un archivio di file loro, possono delegare a sotto-agenti. È l'invito di Harrison Chase tradotto in codice: modello, orchestrazione e memoria come pezzi separabili, che puoi cambiare uno alla volta.

Poi c'è agent6, un software per costruire agenti che mette la gestione dei permessi e degli strumenti al centro invece che ai margini. Dopo l'episodio di Hugging Face, è la cosa più vicina a una risposta pratica alla posizione di Etzioni: decidere in anticipo cosa l'agente può aprire.

Il terzo è deepseek-harness, un involucro aperto costruito attorno ai modelli DeepSeek che aggiunge orchestrazione, tracciabilità e chiamate a strumenti esterni. È letteralmente la tesi del giorno: il modello sotto, il valore attorno.

C'è poi ARC-AGI-3, che è la sigla di un banco di prova fatto di centinaia di ambienti interattivi a turni. Invece di chiedere a un sistema cosa sa, gli chiede di cavarsela dentro una situazione. Chollet, che ci lavora, osserva che tutti i concorrenti più forti usano lo stesso schema — codice tradizionale attorno a un motore neurale. Il suo sandwich, misurato.

Chiudo con unsloth, un software che permette di personalizzare un modello grande usando schede grafiche modeste. Non è vistoso, ma è la traduzione domestica di quello che Mensch chiede per l'Europa e Chase per le aziende: adattare qualcosa che è tuo, invece di affittare qualcosa che è di altri. La sovranità comincia sempre da attrezzi piccoli.

---

Un agente entra in un sistema convincendo una persona ad aprirgli la porta, e nel giro di due settimane mezzo settore smette di chiedersi come rendere buone le macchine e comincia a chiedersi quante chiavi lasciarle in mano. La sicurezza informatica ha impiegato trent'anni a fare lo stesso passaggio. Qui sono bastati un incidente e un rapporto tecnico.

È stato Signal Brief. Alla prossima.
