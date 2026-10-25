# Nessuno scrive, tutti rivedono

> Karpathy non tocca una tastiera da dicembre, DHH costruisce un sistema operativo per agenti, Chollet dice che di ingegneri ne serviranno di più. Il collo di bottiglia si è spostato.

---

Shenzhen, 17 ottobre. Davanti a una platea di sviluppatori, uno dei critici più ostinati dell'intelligenza artificiale applicata alla programmazione annuncia di aver cambiato idea. Nelle stesse settimane, in un podcast americano, un ricercatore racconta di non aver più toccato una tastiera da dicembre. A Dublino, in una sala istituzionale, si discute di certificazioni e di attacchi informatici. È il Signal Brief del 25 ottobre 2026. Tre scene lontane, e sotto la stessa faccenda: chi fa cosa, ora che il codice lo scrivono le macchine. Si parte da quella tastiera rimasta ferma dieci mesi.

---

Andrej Karpathy, in una conversazione nel podcast No Priors di fine ottobre, ha detto una cosa che a sentirla di sfuggita sembra un dettaglio biografico: non digita codice personalmente dal dicembre 2025. Le sue giornate, racconta, sono sessioni lunghe passate a spiegare a più agenti che risultato vuole, a tenere in ordine quello che si ricordano, a coordinarli e soprattutto a rileggere quello che producono. Prompting, memoria, coordinamento, revisione: per lui è questa la disciplina ingegneristica che sta nascendo. Ha descritto anche il gradino successivo, quello che chiama claws, agenti che restano accesi e continuano a lavorare in sottofondo mentre nessuno li guarda.

Ieri il filo era l'agente che smette di essere un assistente con cui si chiacchiera e diventa manodopera. Oggi il baricentro si sposta di lato, e questo è il cambiamento vero rispetto al briefing precedente: la trasformazione interessante non riguarda più la macchina, riguarda la persona. Da chi produce a chi sorveglia. Il punto di strozzatura non è più quanto codice si riesce a scrivere — ne esce più di quanto chiunque riesca a leggere — ma quanto se ne riesce a verificare.

È una storia già vista, in altri mestieri. Quando gli aerei hanno imparato a tenere la rotta da soli sulle lunghe tratte, il pilota non è sparito: è diventato qualcuno che guarda strumenti, interviene nei momenti difficili e risponde comunque di tutto. Il lavoro si è alleggerito nelle mani e appesantito nella testa. Gli incidenti hanno cambiato natura: meno errori di manovra, più errori di attenzione.

Che la direzione sia questa lo conferma la conversione più inattesa del periodo. DHH, il creatore di Rails, per anni ha scritto e detto che l'intelligenza artificiale applicata alla programmazione era sopravvalutata. Al GOSIM di Shenzhen, il 17 ottobre, ha dichiarato che modelli e strumenti sono migliorati tanto da smontare la sua posizione precedente. Non si è limitato a dirlo: sta costruendo Omarchy, una distribuzione Linux pensata perché siano gli agenti a usarla. Quando un avversario cambia campo e si mette a fabbricare attrezzi per la parte avversa, il segnale conta più di cento annunci di prodotto.

Poi c'è la voce che prende lo stesso dato e ne ricava il contrario. François Chollet sostiene che raccontare l'automazione totale dell'ingegneria del software sia fuorviante: gli agenti arrivano a scrivere praticamente tutto il codice, e nonostante questo la richiesta di ingegneri sale, il carico di lavoro sale, e i conti delle aziende spesso restano dove erano. Perché il collo di bottiglia non scompare, cambia posto: si sposta su revisione, coordinamento, decisioni di prodotto. Karpathy dice che il lavoro diventa dirigere. Chollet dice che dirigere costa più fatica di quanto si pensi, e che serviranno più persone capaci di farlo, non meno.

Intorno a questo si muove un secondo filo, che tornerà più avanti: l'agente che non si limita a scrivere software, ma compra, firma, negozia al posto nostro. E sotto entrambi, una ridistribuzione del potere su due direzioni opposte e contemporanee — capitale che si addensa, capacità che si sbriciola e si diffonde.

---

David Heinemeier Hansson, che tutti chiamano DHH, è l'uomo che ha dato al mondo Ruby on Rails e, da allora, una lunga serie di posizioni scomode: contro il capitale di rischio, contro il cloud, contro le aziende gonfie. Negli ultimi anni l'elenco comprendeva l'intelligenza artificiale che scrive codice.

Il palco di Shenzhen, il 17 ottobre, ha visto cadere quell'ultima voce. Davanti alla conferenza GOSIM ha spiegato che i progressi nei modelli, negli strumenti e nelle strutture che reggono gli agenti avevano reso insostenibile il suo rifiuto precedente. Gli agenti, dice adesso, moltiplicano la resa di squadre piccole e rendono fattibili progetti che prima nessuno avrebbe iniziato. Ha portato l'esempio di casa: la sua azienda, 37signals, sta usando agenti per portare HEY dal web alle applicazioni native, con un lavoro di riscrittura in Rust.

Il pezzo interessante non è l'entusiasmo, è il confine che ha tracciato subito dopo. Chi sviluppa, ha detto, deve continuare a capire il sistema nel suo insieme, a esercitare giudizio sul prodotto, a verificare quello che esce, e a conservare la disciplina di dire no alle funzioni inutili. Esattamente le quattro cose che un agente non fa. È la stessa lista di Karpathy vista da un'altra tradizione: non più l'elogio della velocità, ma la difesa di ciò che resta umano per necessità.

E c'è Omarchy. Una distribuzione Linux che vuole essere bella, semplice, costruita per chi sviluppa e pensata nativamente per gli agenti: non uno strato di intelligenza artificiale appiccicato sopra macOS o Windows, ma un'alternativa a entrambi. Nelle ultime settimane si è aggiunto il supporto per più lingue, compresa la localizzazione in cinese.

Qui si vede qualcosa di più di una conversione personale. Un sistema operativo è il posto dove si decide chi ha i permessi, chi vede cosa, cosa può essere eseguito senza chiedere. Progettarlo intorno agli agenti significa dichiarare che l'utente principale della macchina non è più la persona che la tocca. Nella storia dell'informatica i cambi di egemonia sono passati sempre da lì: dai terminali condivisi al personal computer, dal personal computer al browser. Che il primo a muoversi in questa direzione sia uno scettico pentito, e non un laboratorio di frontiera, dice quanto rapidamente si sia spostata la linea.

---

François Chollet è il ricercatore che ha costruito Keras, una delle cassette degli attrezzi con cui mezzo mondo ha imparato a far funzionare le reti neurali, e che da anni insiste su una posizione impopolare: i test non misurano l'intelligenza, misurano la pratica nel superare i test.

Il suo intervento più discusso di queste due settimane smonta una formula che circola da mesi. L'idea dell'automazione completa dell'ingegneria del software, scrive, è ingannevole: gli agenti scrivono già quasi la totalità del codice, e intanto la domanda di ingegneri cresce, il loro carico di lavoro cresce, e i bilanci delle aziende restano spesso identici. Il motivo è semplice e poco romantico. Il lavoro non evapora, migra. Finisce nella revisione, nel coordinamento tra pezzi che si muovono insieme, nelle decisioni su cosa valga la fatica di costruire.

Chollet ha anche spiegato dove sta, secondo lui, il vero salto tecnico dell'ultimo anno: i modelli hanno smesso di completare una parola alla volta e hanno iniziato a costruire al volo catene di ragionamento. È quella capacità, non la dimensione, a rendere possibile un agente che programma per ore senza perdersi. Allo stesso tempo resta diffidente sui robot: per muoversi nel mondo fisico, sostiene, serve un modello delle cause, non una previsione statistica della mossa successiva. E sul futuro della ricerca scientifica preferisce milioni di ricercatori umani assistiti dalle macchine a pochi laboratori che inseguono scoperte da esibire in vetrina.

Messo accanto a Karpathy, il contrasto è pulito e utile. Uno vede un mestiere che si contrae verso la regia, l'altro vede un mestiere che si gonfia di responsabilità nuove. Non si escludono: è la differenza tra guardare una persona e guardare un'organizzazione. Il singolo sviluppatore produce meno a mano e dirige di più. L'azienda, invece, scopre che per stare dietro a una macchina che non si stanca servono più occhi, non meno.

Nelle filande dell'Ottocento la meccanizzazione non svuotò i capannoni: cambiò chi ci stava dentro e cosa faceva, e per un certo periodo ne servirono persino di più. La promessa di risparmio arrivò molto dopo, e non per tutti.

---

Patrick Collison, che guida Stripe, i sistemi di pagamento di mezza internet, il 9 ottobre ha pubblicato una riflessione in sette punti su cosa succede quando ciascuno di noi ha un agente che compra per suo conto.

Il ragionamento è concreto. Un compratore umano è distratto, ha fretta, non confronta, si fa guidare dall'abitudine e dalla pubblicità. Su questa distrazione è costruita una fetta enorme dell'economia digitale: prezzi diversi per persone diverse, offerte che sembrano convenienti e non lo sono, posizioni in cima alla lista che si pagano. Un agente che fa la spesa, dice Collison, non si distrae. Confronta, ricorda, calcola. Se funziona, premia i prodotti migliori invece di quelli distribuiti meglio. Poi aggiunge la condizione che tiene in piedi tutto: deve lavorare davvero per chi compra, e non per chi vende o per chi inserisce la pubblicità.

Quella condizione pesa su un'altra lettura della stessa settimana. Paul Graham ha definito il divieto di Amazon agli agenti d'acquisto la più grande apertura per un concorrente da quando Amazon esiste: la gente vorrà un agente che faccia la spesa, e lo vorrà indipendente, non uno di proprietà del negozio. Il punto di Collison è che una breccia così regge soltanto se la fedeltà dell'agente è verificabile. Altrimenti si sostituisce un intermediario con un intermediario, e cambia soltanto chi incassa.

Vitalik Buterin, intervenendo a Singapore il 6 ottobre, ha mostrato il lato sgradevole della stessa medaglia. Ha aggiornato il proprio indirizzo su blockchain parlando con un agente locale, senza aprire alcuna interfaccia: elegante, e inquietante. Perché un agente che firma al posto tuo può essere ingannato con istruzioni nascoste nelle pagine che legge, o farti autorizzare qualcosa che non hai capito.

Collison, lo stesso 23 ottobre, ha segnalato un lavoro dell'Arc Institute che usa rappresentazioni del genoma per scovare molecole di RNA potenzialmente funzionali. Sembra un altro argomento, ed è lo stesso: anche lì l'agente non parla, cerca in uno spazio troppo grande per noi. Nella sua azienda, secondo resoconti recenti, circa il cinquantacinque per cento delle proposte di modifica al codice nasce già come una richiesta a un sistema interno. La delega è cominciata dentro, prima di arrivare al carrello della spesa.

---

Prima di andare avanti, due parole per ricollegare i pezzi: il lavoro si sposta dalla produzione alla sorveglianza, e nello stesso tempo cominciamo a far agire gli agenti al posto nostro sul denaro. Entrambe le cose poggiano su una scommessa: che qualcuno, dall'alto, stia guardando. Il punto è che non c'è accordo su cosa andrebbe guardato.

Yoshua Bengio, uno dei tre nomi che hanno fondato l'apprendimento profondo moderno e oggi la voce più severa sul rischio, il 22 ottobre ha pubblicato un lavoro che propone di dotare un'intelligenza artificiale orientata alla scienza di quello che chiama ragionamento deliberato: non la risposta immediata, ma il pensiero lento, collegato — sostiene — sia a una migliore capacità di generalizzare, sia alla sicurezza.

Nelle stesse settimane ha fatto una cosa più inusuale per un accademico: ha invitato chi lavora nei laboratori di frontiera e mette la sicurezza al primo posto a lasciare quelle aziende, perché gli incentivi commerciali, secondo lui, spingono i sistemi verso rischi inaccettabili. Ha poi rilanciato una lettera aperta firmata da oltre quattrocento ricercatori per far parlare tra loro due mondi che si ignorano: chi studia l'allineamento dei modelli e chi difende le reti.

Sugli incidenti recenti, in cui agenti autonomi sono stati usati per attaccare sistemi informatici, la sua posizione è netta: è un problema di obiettivi, non di sicurezza informatica. Migliorare le gabbie non impedisce a un modello di voler uscire.

Andrew Ng risponde esattamente al contrario: gabbie e sorveglianza sono state fatte male, e il resto è allarmismo utile a raccogliere fondi. Demis Hassabis, al summit internazionale di Dublino del 14 ottobre, ha scelto una terza via, chiamando quegli episodi colpi di avvertimento e chiedendo certificazioni rapide, proporzionate al rischio, invece di regole scritte una volta per sempre. Nella stessa giornata ha parlato molto di scienza — clima, fusione, materiali — e, curiosamente, mai di intelligenza generale, anche se un profilo recente gli attribuisce una previsione di due o tre anni.

Tre persone che guardano lo stesso incidente e vedono tre cose diverse: un difetto morale della macchina, un errore di installazione, un sintomo da regolare. Nei primi anni delle caldaie a vapore succedeva lo stesso: chi incolpava il metallo, chi il fuochista, chi l'assenza di un collaudo. Alla fine arrivarono le valvole e gli ispettori — dopo un certo numero di esplosioni.

---

Jack Dorsey, fondatore di Twitter e oggi a capo di Block, il 23 ottobre ha annunciato Dessa, un modello vocale nato nel laboratorio di ricerca della sua azienda. La sua convinzione, dichiarata, è che l'interfaccia più naturale verso una macchina intelligente sia la voce, non la scrittura.

Dessa è fatto in modo insolito. Non trasforma il suono in testo per poi darlo in pasto a un modello linguistico: lavora direttamente sull'audio, ed è stato addestrato da zero soltanto su conversazioni umane, senza testo e senza modelli pre-addestrati come punto di partenza. Ascolta e parla nello stesso momento, con pause, risate, interruzioni gestite come fa una persona al telefono. L'addestramento è girato su un singolo armadio di schede NVIDIA, e il risultato si può far funzionare in locale su un portatile Apple di fascia alta. Resta un'anteprima di ricerca: nessuna data, nessun peso pubblicato, nessuna interfaccia per programmatori. L'accesso iniziale è riservato a chi studia la sicurezza, segno che il rischio di truffe telefoniche e imitazioni di voce è chiaro a chi l'ha costruito.

Quel portatile è il punto. Nelle stesse settimane Aravind Srinivas ha annunciato che il computer di Perplexity, con un modello decisionale piccolo, funziona interamente su un Mac senza rete, senza chiamate al cloud, senza che un solo dato esca dalla macchina. Bosun Tijani, al forum BUILD 2026, ha proposto di mettere in comune le schede grafiche di Nigeria, Rwanda, Senegal e Kenya, per permettere ai ricercatori africani di addestrare modelli più grandi senza dipendere da infrastrutture altrui, collegando il tutto al piano di novantamila chilometri di fibra.

Dall'altra parte, Sam Altman in un'intervista del 21 ottobre ha indicato nell'infrastruttura enorme e a basso costo — non nella qualità del modello — il vantaggio difendibile della sua azienda, e ha ipotizzato limiti di velocità globali per i sistemi che migliorano se stessi.

Sono due movimenti in corso insieme, e questa è la novità da tenere: non si escludono. Da un lato capannoni di calcolo grandi come quartieri, dall'altro un modello vocale che gira su un computer da borsa. Succede ogni volta che una tecnologia matura: la rete elettrica si è concentrata in poche centrali enormi e contemporaneamente è entrata in ogni singola presa di casa. Chi controlla la presa conta quanto chi possiede la centrale. In mezzo, ancora una volta, resta scarso chi sa verificare quello che la macchina produce.

---

Progetti da osservare.

Il primo è autoresearch, il programma aperto di Karpathy: un agente modifica il codice con cui si addestra un modello, lancia esperimenti da cinque minuti e tiene soltanto quelli che migliorano le cose. In una installazione su infrastruttura Red Hat ha fatto centonovantotto tentativi, ne ha conservati ventinove e ha guadagnato il due virgola tre per cento su una misura di qualità. Nessun intervento umano. È la sorveglianza raccontata finora, ma applicata alla ricerca stessa.

Poi Omarchy, già incontrata: la distribuzione Linux di DHH pensata perché la usino gli agenti, ora anche in cinese. Un sistema operativo che cambia inquilino principale.

Kimi K3.1 Pro, il nuovo modello di punta di Moonshot, promette di aprire i suoi pesi il 4 novembre. Nella stessa direzione va DeepSeek V4.1 Flash, che secondo gli osservatori ridisegna il campo dei modelli liberamente scaricabili. Sono la gamba che disperde: una volta pubblicati, nessuno li richiama indietro.

All'estremo opposto, Cerebras ha mostrato un'architettura distribuita per far funzionare modelli da mille miliardi di parametri. È la gamba che concentra, la forma concreta di quel vantaggio infrastrutturale di cui parla Altman.

Infine Claude Duet, la funzione di Anthropic per far lavorare più agenti insieme. Detta così sembra un dettaglio di prodotto. In realtà è il punto esatto dove il problema diventa serio: un agente si controlla leggendo, dieci agenti che si parlano tra loro bisogna imparare a dirigerli. Ed è il mestiere che, secondo tutti quelli di oggi, nessuno ha ancora imparato bene.

---

Alla fine la scena che tiene insieme la giornata è un uomo che ha smesso di scrivere e passa le ore a leggere quello che hanno scritto altri — che non sono persone. Da lì nascono tutte le domande successive: chi risponde, chi verifica, per conto di chi firma. Dieci mesi senza toccare una tastiera sono pochi per un mestiere, ma sufficienti per capire da che parte stia andando.

È stato Signal Brief. Alla prossima.
