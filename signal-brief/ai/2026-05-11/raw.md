# Il programmatore che non scrive più

> Karpathy delega l'80% del codice agli agenti, Naval dice che il software puro non è più investibile, i lab cercano idee nuove. Dove va il valore: atomi, brand o sovranità.

---

Andrej Karpathy, uno dei nomi più rispettati nella ricerca AI, ha raccontato a Sequoia di aver smesso di scrivere codice. Non del tutto: ne scrive ancora un quinto. Il resto lo delega ad agenti, e poi rivede. Pochi giorni fa ha scritto online una frase che ha fatto il giro: non si è mai sentito così indietro come programmatore. Questa è Signal Brief, è lunedì 11 maggio. Oggi parliamo di un mestiere che si sta riscrivendo, e di cosa succede al valore del software quando il software lo fa l'AI.

---

Immagina lo schermo di David Heinemeier Hansson, l'inventore di Ruby on Rails, una persona che ha vissuto vent'anni davanti a un editor. Sullo schermo, oggi, gira una cosa che si chiama tmux, una specie di griglia con due finestre aperte in parallelo. In una finestra c'è un modello veloce, in un'altra un modello più lento ma più potente. Lui non scrive codice, gli dice cosa vuole. Aspetta. Poi rivede quello che gli arriva, lo accetta o lo rifiuta, raffina.

La stessa scena, con varianti, la stanno raccontando in molti. Karpathy, da Sequoia, dice che ormai delega ad agenti circa l'ottanta per cento del codice. Simon Willison, in un suo post dell'altro giorno, osserva che i due modi di lavorare con l'AI che fino a poco fa teneva separati — quello rilassato in cui ti fidi del modello, e quello disciplinato in cui tratti l'agente come un junior da supervisionare — si stanno fondendo. Patrick Collison, dal palco di Stripe a fine aprile, mostra un agente che legge il documento di pianificazione, apre il pull request, fa il deploy. Il programmatore non scrive: progetta le specifiche, rivede i risultati.

Mi sembra che la cosa più interessante non sia il gesto in sé, ma cosa ricorda. È già successo. Nelle tipografie di un secolo fa il compositore prendeva i caratteri di piombo uno per uno, li allineava a mano, costruiva la pagina lettera per lettera. Poi è arrivata la linotype, una macchina che fondeva intere righe in una volta sola, e il mestiere è cambiato di un paio di piani in alto: il compositore non maneggiava più i caratteri, dirigeva la macchina. Settant'anni dopo è arrivato il desktop publishing, e di nuovo, salto in alto. Il mestiere non è sparito, è diventato meno manuale e più di giudizio. È esattamente quello che sta succedendo adesso ai programmatori.

Solo che sotto c'è qualcosa di più grosso. Naval Ravikant, qualche giorno fa, l'ha detto secco: il software puro sta rapidamente diventando una cosa in cui non vale la pena investire. Karpathy fa lo stesso ragionamento con un esempio concreto, un'app che si chiama MenuGen: prima l'avresti costruita come prodotto, oggi un modello esegue direttamente la trasformazione, e il software in mezzo serve a poco. Se chiunque può rigenerare un codice base in un pomeriggio, dove va a finire il valore?

Le risposte che si sentono in giro sono tre, ed è qui che il discorso si apre. La prima è: il valore va negli atomi. Yann LeCun lo dice ad alta voce — i modelli linguistici nel mondo fisico sono completamente persi — e ha appena fondato una sua azienda per costruire modelli che capiscano la realtà. Jensen Huang ribattezza Nvidia una fabbrica di AI fisica. La seconda risposta è: il valore va nel brand. Paul Graham, nel suo saggio recente, dice che quando la tecnologia commoditizza la funzione il brand riempie il vuoto, e fa l'esempio degli orologi svizzeri dopo l'arrivo del quarzo. La terza risposta è: il valore va nella sovranità. Vitalik Buterin pubblica il suo setup di AI privata, in locale, e mette quarantacinque milioni di dollari personali in strumenti di privacy. Balaji Srinivasan rilancia il suo vecchio progetto del network state come via di uscita.

E intanto, nei laboratori che hanno costruito l'AI di oggi, c'è una specie di crisi del metodo. Ilya Sutskever dichiara finita l'era dello scaling. Demis Hassabis, alla Y Combinator di fine aprile, ammette che servono una o due grosse idee nuove. Persino chi sullo scaling aveva scommesso tutto, adesso lo deprezza. È questo il filo di oggi: non solo cambia il mestiere del programmatore, cambia anche la mappa di dove sta andando il valore.

---

Andrej Karpathy, di lui abbiamo già parlato all'inizio, è uno dei ricercatori che ha contribuito a costruire l'AI moderna — primi tempi a OpenAI, poi alla guida del progetto autopilot di Tesla, ora indipendente, prolifico, ascoltato. Quando lui racconta come lavora, lo prendono come termometro.

Questa primavera ha fatto due cose che messe insieme dicono parecchio. La prima: a Sequoia, davanti alla platea della loro AI Ascent, ha raccontato di aver invertito il rapporto con il codice. Fino a un anno fa scriveva a mano circa l'ottanta per cento delle righe e usava l'AI come aiuto. Oggi è il contrario: scrive a mano un quinto, delega il resto. La seconda cosa l'ha scritta su X qualche giorno fa, ed è la frase che ha fatto rumore: non si è mai sentito così indietro come programmatore. Il mestiere, dice, è stato rifattorizzato in modo drammatico, e i pezzi che lui mette ancora a mano sono sempre più sparsi.

Vale la pena raccontare un'altra cosa che fa, perché è bellissima e racconta più di tante teorie. Da un po' Karpathy ha smesso di usare gli LLM principalmente per scrivere codice. Li usa per costruire quello che lui chiama un secondo cervello. Prende materiale grezzo — appunti, paper, trascrizioni — lo butta in una cartella e chiede al modello di costruirci sopra una specie di enciclopedia personale, con voci interconnesse, link, ricerche incrociate. Ne ha una con cento articoli e quattrocentomila parole su un singolo argomento. La memoria diventa esplicita, ispezionabile, sua. Non è dentro un chatbot di qualcun altro, è in una cartella che apre con un editor di note.

Questo gesto è coerente con il resto della sua riflessione. Karpathy parla di Software 3.0: prima si scriveva codice esplicito, poi sono arrivate le reti neurali addestrate, adesso il livello programmabile è il prompt, il contesto. L'LLM è una specie di interprete che gira sopra al testo che gli dai. E nel suo modo di lavorare si vede una distinzione che lui stesso ha codificato: il vibe coding alza il pavimento, permette a chiunque di costruire; l'ingegneria con gli agenti alza il soffitto, permette di andare più in alto, ma chiede in cambio progettazione, supervisione, ispezione. Non puoi esternalizzare la comprensione, dice. Bella frase.

C'è una sfumatura che vale la pena notare. Quel mai così indietro non è una crisi personale, è un sintomo di transizione. Quando un mestiere si riconfigura, anche chi è bravissimo deve riposizionarsi. Karpathy non lamenta, descrive. È la stessa cosa che si è sentita raccontare ai tipografi quando arrivò la linotype, agli archivisti quando arrivò il computer, ai grafici quando arrivò Photoshop. Solo che adesso il ciclo è molto più rapido.

---

David Heinemeier Hansson è di quelli che hanno avuto la faccia tosta di dire no all'AI a lungo. Per anni è stato pubblicamente scettico verso il completamento automatico, quella cosa che ti suggerisce le righe mentre scrivi. Diceva che ti distrae più di quanto ti aiuti. Lo diceva forte, e lo diceva da uno che il software lo scrive davvero, l'inventore del framework Ruby on Rails, fondatore della società Basecamp.

A inizio aprile, in un'intervista al Pragmatic Engineer, ha raccontato di aver cambiato idea. Non sull'AI come autocomplete, su quella resta diffidente. Ha cambiato idea sull'AI come collega. Ha descritto il suo nuovo setup, ed è esattamente quella scena con cui abbiamo aperto: terminale aperto, due agenti che girano in parallelo, uno veloce per le cose semplici, uno lento e potente per le cose grosse. Lui non scrive il codice, gli dice cosa vuole. La soglia, dice, è stata raggiunta quando ha cominciato a ricevere output che poteva integrare nel progetto senza grosse modifiche. Prima quella soglia non c'era. Adesso sì.

Coerentemente con il personaggio, DHH non si è fermato lì. A metà aprile ha scritto un pezzo intitolato il computer malleabile. Tesi: l'AI sta finalmente realizzando il sogno originale dell'open source, che era poter modificare il software che usi. Non più solo modificarlo se sei un programmatore, ma modificarlo come se parlassi a qualcuno. Versioni su misura delle app, fatte per uso personale, in casa.

In parallelo, sta spingendo Linux desktop. Ha una distribuzione che si chiama Omarchy, ha riunito a fine aprile a New York centotrenta persone in una conferenza dal nome volutamente strano, Omacon. Sembrano cose scollegate — agenti AI, distribuzione Linux, raduni informali — e invece sono lo stesso filo: prendere in mano il proprio computer, di nuovo. Costruirsi le cose, non comprare le cose.

Il pezzo più interessante della sua posizione, per il filo di oggi, è quello che torna sul Ruby on Rails. DHH sostiene che Rails sta vivendo una rinascita proprio adesso, non a dispetto degli LLM, ma grazie a loro. Perché è un framework leggibile, ordinato, con test integrati che gli agenti usano per verificarsi da soli. Detto in altri termini: un framework progettato vent'anni fa per i programmatori umani si rivela, per caso, ben progettato anche per i programmatori non umani. È uno di quei piccoli ribaltamenti che fanno sorridere.

---

Spostiamoci dentro i laboratori, dove di mestiere si costruisce questa AI. È qui che si sente, in modo meno spettacolare, un'altra crisi: quella del metodo.

Ilya Sutskever è il ricercatore che ha contribuito più di chiunque altro a convincere il mondo che bastasse fare modelli sempre più grandi per arrivare a una vera intelligenza. Era la tesi dello scaling: più dati, più calcolo, più parametri, e la qualità sale. Lui era a OpenAI quando questa convinzione ha portato a GPT-3, GPT-4. Negli ultimi anni ha lasciato OpenAI, ha fondato una sua azienda, Safe Superintelligence, ha raccolto miliardi senza ancora un prodotto. E qualche mese fa, in una lunga conversazione, ha detto una cosa che pesa: l'era dello scaling è finita. Adesso comincia l'era della ricerca. Il problema non è più trovare più calcolo, è trovare idee nuove. I modelli generalizzano peggio degli umani, falliscono in modi strani, vincono esami da dottorato e poi sbagliano cose banali.

Sulla stessa linea Demis Hassabis, che guida DeepMind, dentro Google. Fine aprile, sul podcast Y Combinator, parla del suo orizzonte: arrivare a una vera intelligenza artificiale entro la fine del decennio. Ma servono una o due grosse idee nuove. Non basta scalare quello che abbiamo. In un'altra intervista dice una frase ancora più diretta: dimentichiamoci della guerra dei chatbot. La direzione vera, secondo lui, è costruire modelli che capiscano causa ed effetto, oggetti, fisica del mondo. Non solo predire la prossima parola.

E poi François Chollet, francese, ricercatore già a Google, oggi a capo di una sua azienda che si chiama Ndea. Chollet ha passato anni a costruire un test — si chiama ARC — pensato per misurare se un'AI capisce davvero o se è solo bravissima a riconoscere pattern. I modelli di oggi sotto a quel test arrancano. La sua scommessa, con Ndea, è ibrida: tenere le reti neurali come intuizione, ma affiancarle a programmi simbolici, leggibili, che generalizzano in modo diverso.

Tre persone diverse, tre strade diverse, una stessa diagnosi. L'AI ha imparato a parlare benissimo, ma il salto successivo non viene dalla stessa formula che l'ha portata fin qui.

Ricapitoliamo un attimo il filo di oggi. Il programmatore si sta spostando dallo scrivere al supervisionare. Il valore del software puro si sta erodendo. I laboratori che hanno costruito l'AI di oggi ammettono che servono idee nuove. È una di quelle settimane in cui sembra che tante cose si stiano muovendo dentro la stessa frizione.

---

Vitalik Buterin, l'inventore di Ethereum, una persona che da anni si muove dentro un mondo molto specifico — quello delle blockchain, della crittografia — ha pubblicato a inizio aprile un post in cui descrive il suo setup di AI personale. Non interessante per i dettagli tecnici, ma per cosa significa il gesto. Tutto in locale, niente cloud, controllo totale dei dati. Spiega come fa girare modelli sul suo computer, senza passare da nessuna azienda terza.

Poco prima aveva spostato dell'altro Ether — la criptovaluta di Ethereum — per un equivalente di circa quarantacinque milioni di dollari, dal suo portafoglio personale, verso progetti open source di privacy e sicurezza. Soldi suoi, non della fondazione che gestisce Ethereum. È una distinzione che lui stesso sottolinea: la fondazione sta tirando la cinghia, lui non aspetta, finanzia direttamente strumenti di crittografia, hardware sicuro, comunicazione cifrata.

Nello stesso periodo ha annunciato di aver migrato i suoi social su una piattaforma decentralizzata, una di quelle che permette di leggere e scrivere su più reti diverse senza appoggiarsi a un'unica azienda. Tutte le sue letture, dice, da ora passano da lì. Anche in questo caso il messaggio è coerente: uscire dai posti dove qualcun altro decide cosa vedi.

Tutto questo è dentro una cornice che lui stesso ha annunciato per il 2026: l'anno della riconquista. Ammette pubblicamente che Ethereum, nell'ultimo decennio, ha perso qualcosa sul piano della decentralizzazione vera. Si è fatto comodo, si è centralizzato in punti che non doveva centralizzare. Vuole correggere il tiro.

Per il filo di oggi, Buterin è uno dei rappresentanti più nitidi della terza risposta alla domanda dove va il valore. Non gli atomi di LeCun, non il brand di Graham, ma la sovranità. Il controllo personale di tutto lo stack, dalla rete al modello fino al portafoglio. È una posizione che fino a pochi anni fa sembrava una bandiera ideologica, e adesso sta diventando una posizione operativa: il setup tecnico del weekend, non più il manifesto.

Balaji Srinivasan, su un'altra frequenza ma stessa stazione, continua a tirare avanti la sua idea del network state: comunità che escono dai sistemi esistenti e ne costruiscono di propri. Nel suo podcast settimanale, di recente, parla di crittografia come difesa contro l'AI, di identità verificabili per gli agenti, di denaro pensato per le macchine. Vale la pena tenerli insieme — Buterin e Balaji — perché stanno descrivendo, ognuno a modo suo, la stessa porta di uscita dal mondo in cui tutto passa per un grosso fornitore centralizzato.

---

Progetti da osservare, in coda alla puntata, e tutti parlano con il filo di oggi.

Il primo è nanochat, di Karpathy. Una pipeline minimale per addestrare da zero un modello di linguaggio piccolo in un paio d'ore, su otto schede grafiche di fascia alta. Non è pensato per competere con i giganti, è pensato per restituire al singolo ricercatore la possibilità di toccare un modello con mano. È il manifesto applicato della sua tesi: meno codice scritto, più amplificazione individuale.

Il secondo è autoresearch, sempre di Karpathy. Circa seicento righe in tutto: un agente di ricerca minimale, fatto in casa. Serve a dimostrare che non servono megastrutture per costruire un assistente che ti aiuta a esplorare un campo. Il singolo che amplifica sé stesso — è lo stesso filo del secondo cervello su Obsidian che dicevamo prima.

Poi llama.cpp, di Georgi Gerganov. Un motore di inferenza scritto in C che ti permette di far girare modelli grossi sul tuo computer di casa. Sembra una cosa tecnica, ma è il pezzo centrale dello stack di AI locale che Buterin ha pubblicato. Tradotto: se vuoi davvero la sovranità di cui parlavamo, llama.cpp è il pezzo da cui parti.

Quarto, Omarchy, la distribuzione Linux che DHH cura insieme alla sua comunità. Pensata per attirare chi viene da macOS o Windows verso un desktop più malleabile. Non è solo un sistema operativo, è il segno di un risveglio del Linux consumer che pochi avrebbero scommesso di vedere.

Quinto, claude-context, un componente che indicizza tutta una base di codice e la rende interrogabile dagli agenti. Un piccolo esempio concreto di dove si sposta il valore: non più nel codice in sé, ma nel modo in cui un agente lo capisce.

---

Mi resta in testa quella riga di Karpathy — mai sentito così indietro come programmatore. La dice una delle persone più avanti che esistano. È il tipo di frase che, se la sai leggere, non è una resa, è un termometro. Quando anche chi sta davanti dice di sentirsi spostato, vuol dire che il terreno si sta muovendo per tutti. È stato Signal Brief. Alla prossima.
