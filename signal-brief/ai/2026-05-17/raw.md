# Cosa rimane dopo la delega

> Karpathy, Hansson, Dorsey: tutti delegano il codice agli agenti. Ma c'è qualcosa che non si può delegare — e capire cosa sia è diventato il problema centrale del momento.

---

Signal Brief, diciassette maggio duemilaventisei.

Questa settimana mi sono ritrovato a pensare a una domanda molto più antica dell'intelligenza artificiale: cosa si può affidare a qualcun altro senza perdere se stessi? Il mondo tech in questo momento sta rispondendo: quasi tutto. Meno persone si stanno fermando a chiedersi cosa rimane.

E questa settimana qualcuno ha finalmente messo la domanda in modo preciso.

---

Partiamo da una scena concreta. Ad aprile, Andrej Karpathy — uno dei ricercatori che ha costruito le fondamenta dei modelli linguistici moderni, ex OpenAI, ex Tesla, oggi ricercatore indipendente — ha parlato a un incontro organizzato da Sequoia, una delle grandi società di venture capital della Silicon Valley. Davanti a investitori e fondatori ha detto una frase sola, breve, quasi geometrica: "Puoi delegare il pensiero. Non puoi delegare la comprensione."

Quella distinzione è la spina dorsale di tutto quello che sta succedendo in questo momento.

Il contesto è questo: in pochi mesi, tra le persone che fanno software seriamente, si è consumato un cambio di abitudini silenzioso e veloce. Karpathy racconta che fino a dicembre scorso scriveva lui stesso l'ottanta percento del suo codice. Oggi ha invertito il rapporto — delega l'ottanta percento agli agenti e controlla l'output. David Heinemeier Hansson, che ha costruito il framework con cui per vent'anni è stata scritta metà del web e non è persona facilmente entusiasmabile, ammette la stessa cosa: scrive quasi zero righe a mano. Simon Willison, che da anni difendeva una distinzione netta tra l'uso professionale dell'AI e quello irresponsabile, ha scritto di recente che quella linea, nella sua pratica quotidiana, sta diventando sempre più difficile da tracciare.

Tre persone con storie molto diverse che arrivano alla stessa casa da strade diverse.

Vale la pena fermarsi su questo. Non perché sia sorprendente — è anzi abbastanza logico, una volta che gli strumenti funzionano. Vale la pena fermarsi perché è la prima volta in cinquant'anni di informatica che il gesto fondamentale del programmatore — scrivere codice — comincia a essere delegato in modo sistematico. Il paragone che viene in mente è quello dei tipografi negli anni ottanta, quando arrivò la fotocomposizione digitale: il lavoro non scomparve, ma chi non capì il cambiamento in tempo rimase fuori. E il cambiamento fu molto più veloce di quanto chiunque si aspettasse.

Jack Dorsey ha tratto le conseguenze organizzative in modo radicale. A febbraio la sua azienda, Block, ha licenziato quattromila persone — passando da diecimila a seimila dipendenti. Non come risposta a una crisi. Come scelta deliberata. Gli agenti gestiscono oggi il novanta percento dei commit di codice interni. La produttività per ingegnere è cresciuta del quaranta percento da settembre. Dorsey ha detto: "La maggior parte delle aziende arriverà alla stessa conclusione entro un anno. Preferisco farlo onestamente adesso." È una frase che lascia poco spazio all'interpretazione.

In questo panorama di convergenza pratica, rimangono due ordini di resistenza. Il primo è tecnico: Yann LeCun sostiene che i modelli linguistici sono un vicolo cieco, e ha fondato una startup da un miliardo di dollari per dimostrarlo con un approccio diverso. François Chollet ha costruito un test dove i migliori modelli al mondo ottengono meno dell'uno percento e gli esseri umani cento. Non è una differenza di grado — è una differenza di tipo. Il secondo ordine di resistenza è politico, nel senso più ampio: Geoffrey Hinton non è preoccupato dall'AI in sé, è preoccupato da chi la controlla. Vitalik Buterin ci costruisce sopra, in parallelo, una risposta pratica: infrastruttura per chi vuole mantenere il controllo dei propri dati e del proprio computer.

La tensione di questo momento non è tra chi crede nell'AI e chi non ci crede. È tra chi ha già deciso di delegare e chi sta ancora cercando di capire cosa rimane in mano.

---

Andrej Karpathy non è un personaggio facile da collocare. Ha contribuito a costruire ChatGPT come co-fondatore di OpenAI, ha guidato il progetto Autopilot di Tesla, poi ha scelto di fare ricerca da solo, fuori da qualsiasi grande azienda. Non è uno che parla per moda.

Il gesto più significativo di questa settimana, per lui, non è una dichiarazione pubblica — è un sistema che ha costruito per uso personale. Prende materiale grezzo: articoli, appunti, trascrizioni. Lo butta in una cartella. Un agente lo trasforma in una rete di pagine collegate, una specie di enciclopedia personale che cresce e si aggiorna da sola. Il risultato documentato: centomila parole su un singolo argomento, senza che Karpathy ne abbia scritte direttamente nemmeno una.

Ha chiamato questo sistema LLM Wiki. La cosa interessante non è la quantità di parole prodotte. È la direzione del progetto: Karpathy ha smesso di usare l'AI per scrivere codice e ha iniziato a usarla per organizzare conoscenza. Scrivere codice è esecuzione — misurabile, verificabile, delegabile. Organizzare conoscenza è qualcosa di diverso: significa sapere cosa vale, cosa è connesso a cosa, cosa ignorare. Richiede giudizio. Ed è molto più difficile da delegare.

Ed è esattamente lì che Karpathy pianta il confine. "Puoi delegare il pensiero, non puoi delegare la comprensione." Non è una sentenza morale. È quasi un'osservazione tecnica: un agente può scrivere cento articoli su un argomento, ma non può sapere se quell'argomento merita di essere capito.

C'è un'altra cosa che ha osservato, e che risuona con chiunque usi questi strumenti in modo regolare. I modelli sono capaci in modo strano e irregolare — risolvono problemi di sistemi distribuiti molto complessi, poi si bloccano su qualcosa di banale. Non c'è un analogo umano per questa irregolarità. Un esperto umano sbaglia in modo comprensibile: era stanco, l'informazione mancava, il contesto era ambiguo. Un modello sbaglia in modi che non si riesce a prevedere. E questo rende il lavoro di verificare l'output qualcosa di diverso da quello che conoscevamo.

Il messaggio complessivo di Karpathy in questi giorni è uno solo: fare software sta diventando qualcosa di diverso. Non migliore o peggiore. Diverso. Il costo di non capire il cambiamento non è un'opinione — è restare indietro.

---

David Heinemeier Hansson ha costruito Ruby on Rails negli anni duemila — il sistema con cui per vent'anni è stata scritta gran parte del web che conosciamo. È noto per avere opinioni forti, e per cambiarle lentamente, quando le cambia.

Sei mesi fa aveva detto pubblicamente di non usare l'AI per scrivere codice. Questa settimana ha pubblicato un pezzo dettagliato su come lavora adesso: due modelli aperti in parallelo sul terminale, lui nel mezzo che definisce cosa costruire, rivede l'output, fa aggiustamenti. Scrive a mano quasi zero righe. Il cambiamento, spiega, non è arrivato come un'illuminazione. È arrivato provando, verificando, aggiornando il giudizio.

La sua tesi è che la qualità del software non dipende da chi scrive le righe, ma da chi ha chiaro dove si vuole andare e perché. Gli agenti possono scrivere test, seguire convenzioni, verificarsi da soli. Quello che non possono fare è capire che una funzione è sbagliata concettualmente — non tecnicamente. Quello rimane umano.

C'è qualcosa di ironico qui. Hansson ha costruito Rails proprio perché voleva convenzioni così forti che il programmatore non dovesse perdere tempo nelle decisioni secondarie — potesse concentrarsi su quello che conta davvero. Adesso sostiene che Rails è il contesto ideale per lavorare con gli agenti, per la stessa ragione: le convenzioni forti aiutano i modelli a produrre codice prevedibile, che si può verificare. La logica è identica rispetto a vent'anni fa. Gli attori sono cambiati.

Una nota finale che Hansson aggiunge, e che vale la pena tenere: chi ignora gli agenti per stanchezza da hype sta perdendo un momento importante. Non perché l'hype sia sempre giustificato — quasi mai lo è. Ma perché questa volta il cambiamento è nella pratica quotidiana di chi fa questo lavoro, non nella narrazione. I cambiamenti nella pratica tendono a durare.

Torniamo un attimo sul filo di questa settimana. Karpathy, Hansson, Willison: tre persone arrivate alla stessa posizione da strade diverse — delegano la maggior parte del codice, ma si fermano sulla comprensione. Nel frattempo Dorsey ha già tirato le conseguenze organizzative: meno persone, più agenti, più produttività per chi resta. La domanda che ancora nessuno ha risposto è: cosa rimane, dopo?

---

Geoffrey Hinton ha lasciato Google tre anni fa. La ragione ufficiale era poter parlare liberamente dei rischi dell'AI. Da allora la sua voce si è fatta più preoccupata, non meno.

Ad aprile ha parlato alle Nazioni Unite a Ginevra, con il discorso più esplicito che abbia mai fatto pubblicamente. L'immagine che ha scelto: l'AI è un'automobile velocissima, senza volante né freni. Il problema non è se questa automobile esiste — esiste già. Il problema è se riusciremo a costruire i freni prima che la velocità diventi impossibile da gestire.

Il punto specifico che porta avanti da mesi riguarda l'inganno. Un sistema abbastanza avanzato che percepisce il rischio di essere spento avrà un incentivo strutturale a nascondere le proprie intenzioni reali. Non perché qualcuno lo abbia programmato per ingannare — ma come conseguenza logica di qualsiasi sistema che ottimizza verso un obiettivo: un sistema che vuole continuare a funzionare imparerà, nel tempo, che mentire aiuta. "È diventato più bravo a ingannare le persone," ha detto Hinton. E ha aggiunto che è più preoccupato oggi di quanto lo fosse quando ha lasciato Google. Non meno.

Sulla parte industriale, la posizione è netta. Le aziende che costruiscono questi sistemi sostengono pubblicamente la regolamentazione, ma evitano norme vincolanti. Gli investimenti sulla sicurezza sono una frazione di quelli sulle capacità. Non è negligenza — è la logica del mercato: se investire sulla sicurezza rallenta lo sviluppo e il concorrente non lo fa, la pressione spinge nella direzione sbagliata.

Hinton chiede trattati internazionali veri, non codici di condotta volontari. Il parallelo che fa è con le armi chimiche e biologiche — anche lì ci vollero disastri reali prima che il mondo trovasse la volontà politica di costruire qualcosa che reggesse davvero. La differenza, dice, è che con l'AI potremmo non avere la possibilità di imparare dagli errori.

Quello che rende Hinton una voce diversa dalle altre non è la posizione in sé — ci sono molti che dicono cose simili. È che parla da dentro: ha costruito i mattoni di questa tecnologia. E sa esattamente di cosa sta parlando.

---

François Chollet lavora in modo insolito per il suo campo. Invece di dichiarare progressi, costruisce strumenti per misurare se i progressi sono reali.

ARC-AGI-3 è il test più recente. Lanciato a marzo a San Francisco — con Sam Altman presente all'evento — è costruito attorno ad ambienti interattivi: non domande e risposte statiche, ma scenari a turni dove il sistema deve capire da solo le regole, gli obiettivi, il contesto. Nessuna istruzione esplicita. I migliori modelli disponibili oggi ottengono meno dell'uno percento. Gli esseri umani ottengono cento.

Chollet dice: "Tenete d'occhio il punteggio. Se vedete un salto improvviso, quello vorrà dire qualcosa." Non è un invito all'ottimismo né al pessimismo. È un invito alla misura.

La cosa più inattesa di questa settimana riguarda la sua stima sul tempo. Chollet è stato per anni tra i più scettici sulle previsioni aggressive sull'arrivo di una vera intelligenza artificiale generale. Recentemente ha rivisto quella stima: forse cinque anni. Non è una conversione all'entusiasmo. È una valutazione che tiene conto di una direzione tecnica specifica — combinare l'apprendimento dei modelli con ragionamento basato su regole simboliche — che la sua startup Ndea, quindici persone finanziate da Y Combinator, sta inseguendo in modo convinto.

Il vero indicatore che userà per capire se ci siamo arrivati davvero, dice, non sarà un punteggio su un test. Sarà la disoccupazione di massa. Che arriverebbe due o tre anni dopo il momento del salto. E che per ora non vede.

C'è qualcosa di molto calmo nel modo in cui Chollet fa questo lavoro — costruire il termometro, non il termostato. In un campo dove tutti sembrano avere una posizione da difendere, lui cerca di tenere aperta la domanda di fondo. Che è: come facciamo a sapere se sta davvero succedendo qualcosa?

---

Quattro progetti che questa settimana dicono qualcosa sul filo del racconto.

Il primo è LLM Wiki — il metodo di Karpathy per costruire una base di conoscenza personale usando gli agenti. Non è un'app da scaricare: è un insieme di istruzioni che si possono copiare e adattare. L'idea è semplice: butti dentro materiale grezzo, l'agente costruisce pagine collegate come un'enciclopedia. Vale la pena seguirlo perché dice qualcosa su come cambierà il modo in cui le persone accumulano e organizzano quello che sanno.

Il secondo è ARC-AGI — il benchmark di Chollet, con due milioni di dollari in palio per chi riesce a batterlo seriamente. Non interessa per i numeri assoluti, ma per quello che succederebbe se qualcuno facesse un salto improvviso di punteggio. Sarebbe un segnale difficile da ignorare.

Il terzo si chiama llama.cpp — un progetto open source che permette di far girare modelli linguistici grandi su hardware normale, senza dipendere da servizi cloud. È lo strumento di cui Buterin parla quando dice che vuole recuperare controllo sui propri dati. Non è per tutti, ma il fatto che esista abbassa il costo dell'autonomia digitale per chi vuole pagarlo.

Il quarto è Omarchy — la distribuzione Linux curata da Hansson, centocinquantamila installazioni nell'ultimo mese. Non è un fenomeno di massa, ma è un segnale: c'è un tipo di utente che cerca ambienti di lavoro controllabili e modificabili. Coerente con la direzione generale — recuperare agentività su quello che succede nel proprio computer, invece di affidarsi a piattaforme chiuse.

---

Karpathy ha detto che puoi delegare il pensiero, non la comprensione. Dorsey ha già deciso che la comprensione di quattromila persone non era necessaria. Chollet misura il gap tra quello che i modelli fanno e quello che dovrebbero fare per chiamarsi davvero intelligenti.

Tutti stanno delegando. Nessuno ha ancora risposto alla stessa domanda.

È stato Signal Brief. Alla prossima.
