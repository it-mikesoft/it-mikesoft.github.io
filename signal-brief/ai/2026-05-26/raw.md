# Quando gli agenti diventano infrastruttura

> Maggio 2026: gli agenti AI smettono di essere una funzione e iniziano a riconfigurare lavoro, ricerca e management. Intanto si apre una faglia su cosa significhi davvero intelligenza.

---

Il 19 maggio Andrej Karpathy, uno dei nomi più riconoscibili del mondo dell'intelligenza artificiale, ha annunciato di aver lasciato OpenAI per unirsi ad Anthropic. Non è una mossa qualunque. Karpathy va a lavorare in un team che userà l'AI per costruire altra AI: modelli che addestrano modelli. È un piccolo gesto, in fondo. Un cambio di indirizzo email. Ma dice molto su dove sta andando questa fase. È Signal Brief, è il 26 maggio 2026, e oggi proviamo a guardare quel gesto da vicino, perché dietro c'è una storia più larga.

---

Fino a un anno fa, quando si parlava di agenti AI si parlava di una funzione. Una di quelle cose che un'azienda aggiunge al suo prodotto per stare al passo. Adesso non più. Adesso gli agenti stanno diventando il modo in cui le cose funzionano sotto. Ed è un passaggio che vale la pena raccontare per intero.

Prendiamo tre scene di questo mese, apparentemente lontane fra loro. La prima l'abbiamo già accennata: Karpathy che va in Anthropic per usare Claude — il loro modello — come collaboratore nella costruzione del modello successivo. La seconda: Jack Dorsey, l'uomo che ha fondato Twitter e oggi guida Block, taglia quattromila dipendenti e dichiara che il middle management — quello strato di manager intermedi che ogni azienda ha — verrà sostituito da agenti AI. La terza: Jensen Huang, il capo di Nvidia, dice agli investitori che la domanda di chip per l'AI è "parabolica" — sale come un razzo — perché finalmente gli agenti fanno "lavoro produttivo e di valore".

Tre uomini, tre settori diversi, una sola direzione. L'agente autonomo non è più una funzione che si aggiunge: è il pezzo che riscrive il sistema attorno a sé. Cambia chi addestra i modelli, cambia chi gestisce le persone in un'azienda, cambia perfino il modo in cui si compra e si vende online.

Per capire la dimensione del passaggio, mi viene in mente un paragone storico. All'inizio del Novecento, quando l'elettricità ha sostituito il vapore nelle fabbriche, per dieci o quindici anni si è pensato che fosse soltanto un modo più pulito di far girare le stesse macchine. Stessa cinghia, stesso albero motore, solo un motore elettrico al posto della caldaia. Poi qualcuno si è accorto che con l'elettricità si poteva mettere un motore piccolo dentro ogni singola macchina. La fabbrica si è riorganizzata da capo. Reparti diversi, layout diverso, ritmi diversi. La vera trasformazione non era nel motore, era nel fatto che si poteva ripensare tutto.

Con gli agenti AI siamo lì. Per due anni li abbiamo usati come motori più puliti per le stesse macchine. Adesso si comincia a ridisegnare la fabbrica.

Ma proprio mentre questa direzione si fa nitida, si apre una crepa importante. Da una parte ci sono quelli che pensano che basti continuare così: più dati, più calcolo, più scala, e si arriva a un'intelligenza generale. Sam Altman di OpenAI la pensa così, Marc Andreessen pure, e così Huang. Dall'altra parte, una fila di pensatori che fino a poco fa erano nel cuore del consenso oggi dice il contrario: l'era della scala è finita. Yann LeCun, capo della ricerca AI di Meta. François Chollet, l'inventore dei benchmark più temuti del settore. Ilya Sutskever, che era il cervello tecnico di OpenAI. John Carmack, leggenda della programmazione. Tutti dicono, con sfumature diverse, che fare i modelli più grandi non basta più. Serve un'altra strada.

Sono due famiglie di idee che si guardano in cagnesco. Non si tratta di prevedere quando arriverà la cosiddetta superintelligenza. Si tratta di capire se la strada attuale ci sta portando da qualche parte o se abbiamo bisogno di voltare. E intanto, sullo sfondo, una terza voce — Simon Willison, uno degli ingegneri più ascoltati del mondo open source — alza la mano e dice una cosa scomoda a entrambe le parti. Attenzione, perché molto del codice che gli agenti scrivono oggi funziona, sì, ma non è sostenibile da mantenere domani. Il giocattolo è brillante, l'officina rischia di diventare ingovernabile.

Tre fili, una stessa giornata. Cominciamo a tirarli uno per uno.

---

Andrej Karpathy è uno di quei nomi che pesano. Era con OpenAI dall'inizio, poi è stato il responsabile dell'intelligenza artificiale di Tesla, ha pubblicato corsi gratuiti che mezzo mondo ha guardato, e ha la rara capacità di spiegare cose complesse facendole sembrare semplici. Quando uno così cambia squadra, la notizia non è la squadra: è dove pensa che stia andando il gioco.

Il 19 maggio Karpathy ha annunciato di aver lasciato OpenAI per Anthropic. La frase che ha usato è interessante: "i prossimi anni della frontiera dei modelli linguistici saranno particolarmente formativi". Va a costruire un team che ha un compito molto specifico: usare Claude — il modello di Anthropic — per accelerare la ricerca sui modelli futuri. Modelli che insegnano ad altri modelli. È un'inversione rispetto a come si è sempre lavorato in questo campo: prima erano i ricercatori a scrivere il codice, poi venivano i modelli; adesso i modelli scrivono parti del lavoro che produce i modelli successivi.

Karpathy nel frattempo continua a raccontare un'idea che ha lanciato un anno fa e che è esplosa: la chiama "vibe coding". L'idea è semplice da spiegare, anche se il nome suona strano. Tu descrivi a parole quello che vuoi e lasci che il computer scriva il codice. Niente schemi, niente architettura disegnata prima. Solo l'intenzione e una conversazione. A dicembre, Karpathy ha confessato che ormai l'ottanta per cento del suo codice non lo scrive lui: lo scrivono i sistemi. Il dizionario Collins, che ogni anno sceglie la parola dell'anno, ha incoronato vibe coding parola del 2025. In Italia non se ne è parlato molto. Negli Stati Uniti, secondo le ultime rilevazioni, novantadue ingegneri su cento la praticano in qualche misura.

Karpathy chiama questa fase Software 3.0. Una fase in cui non si scrive più il codice riga per riga, ma si guidano sistemi intelligenti che lo generano e lo affinano. Lui dice che non è esternalizzazione: è delega. È una distinzione importante. Quando esternalizzi non sai come si arriva al risultato. Quando deleghi resti dentro il processo, ma a un altro livello.

Quello che mi sembra interessante è il segnale che la sua mossa manda all'industria. Anthropic punta su una scommessa precisa: contro chi spende di più in calcolo, noi spendiamo meglio in ricerca. E lo facciamo usando la nostra stessa AI come amplificatore. Se questa scommessa funziona, vuol dire che la prossima fase dell'intelligenza artificiale non si vince con il chip più grande, ma con il modo migliore di farsi aiutare dalla macchina per pensare. Karpathy è arrivato lì. È un voto che vale, perché lui era nel posto dove il chip più grande era la religione ufficiale.

---

L'altra scena di questo mese arriva da un mondo che con l'intelligenza artificiale c'entra solo a tratti: i pagamenti. Jack Dorsey, il fondatore di Twitter, oggi guida Block — l'azienda dietro Cash App e i terminali di pagamento Square. A febbraio Block ha tagliato quattromila dipendenti, passando da diecimila a seimila persone. A maggio, Dorsey ha messo nero su bianco il perché.

In una conversazione con Roelof Botha, uno dei più rispettati investitori della Silicon Valley, Dorsey ha spiegato la sua idea con una franchezza che fa rumore. Il middle management — quel pezzo di azienda che traduce gli ordini di chi sta in cima ai bisogni di chi sta sotto — è un mestiere che fanno meglio gli agenti AI. La sua tesi: dentro Block c'è un sistema interno, lo chiamano Goose, che oggi genera circa il novanta per cento del codice che parte. Goose gestisce anche pezzi grandi del supporto clienti. E nel frattempo aggrega in tempo reale tutto quello che succede in azienda — decisioni, metriche, conversazioni — in quello che Dorsey chiama un "modello del mondo". Una specie di mappa vivente di cosa sta facendo l'azienda, momento per momento. Quella mappa, dice, fa il lavoro che un tempo facevano i manager intermedi: portare il contesto da uno strato all'altro.

L'obiettivo dichiarato è arrivare a fine anno con due o tre livelli gerarchici al massimo, e con due milioni di dollari di profitto lordo per dipendente. Numeri da startup, in un'azienda che è quotata in borsa da anni. La borsa ha applaudito: il titolo è salito di oltre il venti per cento.

Dorsey è uno che ha già fatto rivoluzioni difficili. Twitter, all'inizio, era un'altra invenzione apparentemente folle. E come Karpathy, anche lui sta dicendo qualcosa di più grande del singolo annuncio. Sta dicendo che il modo in cui le aziende si organizzano da centocinquant'anni — la piramide con i capi che riportano ad altri capi — è un'invenzione del passato, fatta quando l'informazione viaggiava lenta e qualcuno doveva pettinarla strada facendo. Adesso che l'informazione viaggia in tempo reale e c'è una macchina che la digerisce, quel pezzo intermedio si può saltare.

Mi viene da pensare alle fabbriche fordiste. Per cinquant'anni ci abbiamo costruito sopra un sistema di management che sembrava la natura delle cose. Poi è cambiato il modo di produrre, e quel sistema è diventato un peso. Dorsey sta dicendo che siamo a quel punto. La cosa interessante è che lo sta dicendo provandolo su sé stesso, con quattromila persone licenziate in mezzo. Non è un'opinione, è un esperimento in corso.

Ricapitoliamo un attimo. Karpathy va a usare l'AI per costruire AI. Dorsey la usa per togliere uno strato dell'azienda. Sono mosse molto diverse, ma la direzione è la stessa: l'agente non è più un assistente, è un pezzo dell'impalcatura. E proprio quando questa idea sembra prendere quota in tutto il settore, c'è chi si mette di traverso e dice: aspettate, forse stiamo costruendo nella direzione sbagliata.

---

Yann LeCun è uno dei tre uomini a cui hanno dato insieme il premio Turing per l'intelligenza artificiale moderna. Capo della ricerca AI di Meta, francese, sessantacinque anni, gira il mondo dicendo cose che la maggior parte dei suoi colleghi non vuole sentire. Da mesi ripete che i modelli linguistici come ChatGPT, per quanto bravi, sono un vicolo cieco. Le sue parole esatte: "dead end".

A maggio ha portato la sua tesi a un livello nuovo. Ha presentato i risultati di un'architettura diversa, che chiama JEPA. Non importa cosa vuol dire la sigla. Importa cosa fa: invece di prevedere la parola successiva — che è quello che fa ChatGPT, una parola dopo l'altra — JEPA cerca di costruire una specie di modello mentale del mondo. Non genera, capisce. Predice cosa succederà se un robot allunga il braccio, non quale parola viene dopo la parola "allunga".

LeCun ci ha messo dietro più di un miliardo di dollari. La sua nuova società, AMI Labs, ha raccolto a marzo poco più di un miliardo di dollari di finanziamento, su una valutazione di tre miliardi e mezzo. È una scommessa pesante. E pochi giorni fa ha pubblicato un risultato che ha fatto rumore: la sua architettura, addestrata su sessantadue ore di video non etichettato, riesce a controllare un robot in ambienti mai visti con un tasso di successo dell'ottanta per cento. I sistemi concorrenti, in condizioni analoghe, si fermano al quindici.

LeCun fa anche un'altra cosa interessante. Mentre tutti dicono "i nostri sistemi diventano sempre più sicuri grazie ai filtri", lui dice il contrario: i modelli che prevedono parole sono intrinsecamente insicuri per come sono fatti, perché non sanno cosa stanno dicendo. I filtri vengono dopo. JEPA, dice lui, mette la sicurezza nell'architettura stessa: il sistema non può fare certe cose perché non sa come fare a farle.

Il punto qui non è chi ha ragione. È che c'è una persona molto importante, finanziata da molti soldi, che sta facendo una scommessa diversa. Mi ricorda la stagione in cui Toyota negli anni Settanta diceva che la produzione di massa all'americana non era l'unico modo. Per anni è stata vista come una stranezza giapponese. Poi è diventata lo standard del mondo. Non sappiamo se LeCun avrà ragione, ma sappiamo che oggi è uno dei pochi a costruire qualcosa di concettualmente diverso, e che ha le risorse per portarlo avanti per qualche anno. Vale la pena tenerlo d'occhio. Una sola voce dissenziente con un miliardo dietro può cambiare l'inerzia di un settore intero.

---

Il quarto personaggio della giornata è François Chollet, un altro francese, ricercatore con un passato in Google, oggi indipendente. Chollet ha una posizione strana nel mondo dell'AI: è quello che inventa i test, e quei test sono diventati famosi perché i modelli più costosi del mondo li falliscono.

Il suo test si chiama ARC. Sono piccoli puzzle visivi, semplici per un bambino di cinque anni, dove il sistema deve capire una regola da pochi esempi e applicarla a un esempio nuovo. I bambini umani risolvono questi puzzle al cento per cento. I migliori modelli al mondo, fino a poco fa, si fermavano a una frazione percentuale.

A maggio Chollet ha lanciato la terza versione di ARC, con due milioni di dollari di premio per chi riesce a battere certi punteggi. È un piccolo gesto e un grande messaggio. Mentre l'industria intera parla di test dove i modelli prendono il novantasette per cento e si pubblicano grafici che mostrano linee in salita, Chollet costruisce un test su cui le linee restano dove sono. Il punto, per lui, è che l'intelligenza non è una scala da quanti chili sollevi. È un rapporto: quanto riesci a fare con quanto poco hai imparato prima. È la differenza tra ricordare e capire.

La sua frase chiave di questo mese, in un'intervista, è anche un'osservazione politica. Dice che il discorso dominante sull'AI è diventato fatalistico: "la tecnologia va in questa direzione e non possiamo farci niente". Lui rifiuta questa rassegnazione. Dice che è una formula comoda per chi ci guadagna. E osserva che l'AI, oggi, amplifica le distanze: chi è capace di usarla diventa più capace, chi non lo è perde anche quel poco che aveva.

Chollet sta anche fondando una nuova società, Ndea, che lavora su sistemi capaci di creare astrazioni da soli. Non è facile da spiegare. La cosa importante è che è la stessa scommessa di LeCun da un altro angolo: l'idea che la strada di oggi non porti fino in fondo, e che valga la pena cercarne un'altra. Quando vedi due ricercatori così, con storie e metodi diversi, arrivare alla stessa conclusione, di solito succede qualcosa.

---

Qualche progetto da osservare in questi giorni, perché aiuta a vedere come queste idee si traducono in cose vere.

Il primo è nanochat, di Andrej Karpathy. È una pipeline minima per addestrare un modellino di linguaggio in poche ore, su otto schede grafiche. Non è una cosa da industria, è una cosa da singolo ricercatore. È il manifesto del passaggio che stiamo raccontando: meno codice, più intelligenza che amplifica chi lavora da solo.

Il secondo è llama.cpp, sviluppato da un programmatore bulgaro chiamato Georgi Gerganov. Permette di far girare un modello di linguaggio interamente sul proprio computer, senza mandare niente a nessuna nuvola. È diventato lo standard di chi crede che l'AI debba restare in casa propria. Vitalik Buterin, che molti conoscono per Ethereum, ne ha fatto la pietra angolare del suo stack personale.

Il terzo è ARC-AGI, la raccolta ufficiale dei test di Chollet di cui abbiamo appena parlato. Adesso ci sono anche ambienti interattivi: il modello non risponde a un puzzle statico, deve giocare a un piccolo gioco e adattarsi. Gli umani arrivano al cento per cento. Il miglior modello del mondo, allo zero virgola trentasette.

Il quarto si chiama claude-context. È un piccolo strumento che permette a un agente AI di usare un'intera base di codice come memoria di lavoro. Ne parlano molto Benedict Evans e Marc Andreessen come esempio del cambio di valore: non vale più tanto il modello, vale chi sa farlo lavorare bene dentro un contesto reale.

E infine Omarchy, la distribuzione Linux preparata da David Heinemeier Hansson, l'inventore di Ruby on Rails. È un sistema operativo pensato per chi vuole un computer modificabile, lontano dalla logica di macOS o Windows. È piccolo, è una scommessa di nicchia, ma racconta la stessa cosa degli altri quattro: c'è una voglia diffusa di riprendere in mano gli strumenti, non solo di consumarli.

---

Resta in testa, di questa giornata, l'immagine di una fabbrica all'inizio del Novecento che butta via le cinghie del vapore e scopre, qualche anno dopo, che il punto non era cambiare motore: era ripensare il reparto. Adesso tocca a noi capire dove va il reparto. È stato Signal Brief. Alla prossima.
