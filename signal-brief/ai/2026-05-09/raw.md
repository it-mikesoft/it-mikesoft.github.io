# La crepa sotto i mille miliardi

> La cassaforte spinge sull'AI come non mai, mentre il banco di lavoro dei ricercatori ammette di non avere ancora le idee giuste. Un episodio sulla frattura.

---

Ginevra, ventitré aprile. In una sala del Digital World Conference, Geoffrey Hinton — uno degli inventori del deep learning, settantotto anni — descrive l'intelligenza artificiale di oggi come un'auto velocissima senza volante. Pochi giorni dopo, a San Francisco, Sam Altman racconta a un'altra platea che i prossimi mille e quattrocento miliardi di dollari di compute sono già impegnati. Stesso campo, stessa settimana, due frasi che non si parlano. Quella crepa fra chi mette i soldi e chi fa la ricerca è il filo di oggi. È nove maggio, e questo è Signal Brief.

---

Una scena di fine marzo aiuta a inquadrare bene quello che sta succedendo. Quartier generale di Y Combinator, San Francisco. Sul palco, fireside chat: a sinistra François Chollet, ricercatore francese che da anni progetta benchmark per misurare quanto un'intelligenza artificiale sia davvero intelligente. A destra Sam Altman, capo di OpenAI. Chollet svela ARC-AGI-3, l'ultima versione del suo test: centinaia di piccoli ambienti interattivi, niente istruzioni, l'agente deve esplorare, capire le regole, trasferire l'apprendimento da un livello al successivo. Risultato sui modelli più avanzati che il mondo ha oggi: zero virgola cinquantuno per cento. Gli umani fanno cento.

In quella stanza c'erano insieme due narrative che, fuori da quella stanza, non riescono più a stare nella stessa frase. La prima è quella della cassaforte: Altman impegna mille e quattrocento miliardi per costruire data center; Jensen Huang, qualche giorno fa al Knowledge di ServiceNow a Las Vegas, parla di un'economia da cinquanta trilioni gestita da agenti AI e di un fabbisogno di compute cresciuto del mille per cento; Jack Dorsey ha appena tagliato il quaranta per cento dei dipendenti di Block scommettendo che il middle management sia un cerotto cognitivo che gli agenti possono togliere. La seconda narrativa è quella del banco di lavoro: Hinton parla di auto senza volante, Yann LeCun definisce gli LLM un vicolo cieco, Ilya Sutskever dichiara morta l'era dello scaling, Demis Hassabis ammette in un podcast con Y Combinator che mancano una o due idee fondamentali che ancora nessuno ha trovato. Se mettete in fila i nomi, la prima lista è fatta di chi raccoglie capitali, la seconda di chi fa ricerca da decenni.

Mi sembra che la cosa più interessante sia proprio questa: per la prima volta da tre anni, la temperatura nelle due stanze non coincide. Fuori si vende l'AGI come un treno in arrivo. Dentro si dice che il treno ha bisogno ancora di binari che non sono stati posati.

Vale la pena prendere un parallelo storico. Fine ottocento, elettrificazione delle fabbriche americane. La dinamo c'era. I motori elettrici esistevano. Le aziende li compravano e li mettevano dove prima c'era il motore a vapore: una sola grande fonte centrale, collegata da cinghie e alberi alla catena di produzione. Per circa vent'anni la produttività non si mosse. La rivoluzione vera arrivò quando qualcuno capì che si poteva mettere un piccolo motore su ogni macchina, ridisegnando la fabbrica intera. L'infrastruttura era arrivata prima del modo di usarla. Il capitale era già stato speso, e per due decenni nessuno sapeva ancora bene cosa farne. Oggi siamo in qualcosa di simile: tantissimo compute, costruito a velocità folle, e una domanda aperta su cosa farci girare sopra che davvero giustifichi quei numeri.

Sotto questa frattura ne corre una seconda, più sottile. Da una parte chi possiede il modello — i grandi laboratori, le piattaforme centralizzate, gli agenti gestiti dall'alto. Dall'altra chi possiede l'esperienza: Andrej Karpathy, che sposta il suo uso di AI dal generare codice al curare una piccola enciclopedia personale di appunti collegati; Vitalik Buterin, che compra GPU di gruppo con gli amici per non lasciare la propria vita al cloud; David Heinemeier Hansson, fondatore di Basecamp, che chiama tutto questo malleable computer — il computer che ognuno può rimodellare, perché l'AI rimuove la barriera che teneva l'open source una promessa di libertà che quasi nessuno usava davvero.

Sono due fili, ma di fatto sono lo stesso: quanto durerà la promessa abbastanza da giustificare il conto, e dove migra il valore se la promessa scivola. Questa è la mappa di oggi.

---

Il primo personaggio della settimana è Demis Hassabis, capo di Google DeepMind. Britannico, ex prodigio degli scacchi, fondatore di DeepMind nel 2010, premio Nobel per la chimica nel 2024 per il lavoro su AlphaFold. Per chi non lo conosce, è uno dei pochi nomi che frequenta le stesse stanze dei capi di OpenAI ma viene da una scuola completamente diversa: la scuola dei laboratori di ricerca, non delle startup di prodotto.

A fine aprile è andato al podcast di Y Combinator. Stessa settimana in cui a Londra usciva la sua biografia ufficiale, scritta da Sebastian Mallaby. Nell'intervista Hassabis ha detto due cose che messe insieme spostano il discorso. La prima: ancora pensa che l'AGI possa arrivare entro il 2030, cinquanta per cento di probabilità. La seconda, nuova, più pesante: per arrivarci mancano una o due idee algoritmiche fondamentali che nessuno ha ancora trovato. Non basta scalare i modelli attuali, non basta il chain-of-thought, non basta il reinforcement learning come lo conosciamo oggi. Servono salti che ancora non sappiamo fare.

Detto da chi ha un budget di ricerca virtualmente illimitato dentro Google, è una frase importante. Vuol dire che il sistema AI di oggi sa molte cose ma non sa ricombinarle bene su problemi nuovi, non ha una memoria che si accumula, non ragiona davvero su sé stesso. Sono cose che la neuroscienza ci dice esistere nel cervello umano, e che i modelli attuali, semplicemente, non hanno.

Hassabis lega questa diagnosi a una scelta politica. Sostiene che chi costruisce AI non possa venire da venti miglia quadrate degli Stati Uniti — una frecciata gentile alla concentrazione di laboratori nella Bay Area. Difende Londra come sede di DeepMind, parla di pluralismo geografico come argine al rischio cognitivo: se tutti i ricercatori vengono dalla stessa città, dalla stessa scuola, frequentano gli stessi caffè, gli errori di pensiero diventano collettivi.

Nel frattempo gestisce una doppia vita. Di giorno DeepMind, di notte Isomorphic Labs, l'azienda che applica la stessa tecnologia di AlphaFold alla scoperta di farmaci. I primi trial umani in oncologia sono attesi per fine anno. Il dettaglio è gustoso: lo stesso uomo che ammette pubblicamente che mancano idee fondamentali sta anche portando in clinica una molecola progettata da un'AI per attaccare un tumore. È coerente, in realtà: l'applicazione concreta è dove anche un sistema imperfetto può fare la differenza, e proprio l'applicazione concreta finanzia poi la ricerca lunga.

Quello che mi colpisce è il tono. Hassabis parla con la calma di un ricercatore che ha tempo. Mentre la cassaforte si scalda — Altman, Huang, Dorsey — la voce dei laboratori si fa più cauta, più tecnica, e in qualche modo più tagliente. È un'asincronia che il 2026 sta esponendo, capitolo dopo capitolo.

---

Il secondo personaggio è François Chollet. Ingegnere francese, ha creato Keras — la libreria che ha reso il deep learning accessibile a chiunque sappia un po' di Python. Ha lavorato a Google per anni, poi nel 2024 ha lasciato per fondare Ndea, un piccolo laboratorio con Mike Knoop. La scommessa di Ndea: la strada per l'AGI passa dalla program synthesis, cioè far comporre piccoli programmi al modello, non solo predire la prossima parola.

La scena di Chollet di queste settimane è il lancio di ARC-AGI-3, il benchmark di cui parlavamo prima. Non è solo un test, è una posizione politica. Chollet da anni ripete una cosa che si può dire in due frasi semplici. I modelli attuali sono bravissimi a riconoscere schemi che hanno già visto. Sono cattivi a inventare regole nuove di fronte a un problema mai visto. ARC-AGI è progettato esattamente per misurare la seconda cosa, e la prima versione del 2019 è ancora sostanzialmente non risolta.

ARC-AGI-3 alza l'asticella. Non più puzzle statici, ma ambienti interattivi tipo videogioco, dove l'agente deve muoversi, capire l'obiettivo, ricordare cosa ha provato. Centinaia di mondi, migliaia di livelli. Risultato: gli umani fanno cento per cento. I modelli più avanzati che esistono oggi fanno zero virgola cinquantuno. Non zero, ma quasi.

Quel numero è il cuore del messaggio. Quando Altman, Huang, Dorsey parlano di agenti che gestiranno la maggior parte delle transazioni o sostituiranno il middle management, stanno descrivendo agenti che oggi, su un test costruito apposta per misurare se sanno davvero agire, fanno meno dell'uno per cento del lavoro umano. Chollet non lo dice in modo polemico. Lo mette su una leaderboard pubblica e lascia che il numero parli. La sua proposta è che quella leaderboard diventi un sistema di allarme: il giorno in cui un modello salta da uno per cento a venti, sapremo che qualcosa di nuovo è successo. Per ora, niente.

In parallelo Chollet porta avanti Ndea. La sua tesi è che la strada non sia far cantare meglio i modelli linguistici, ma usarli come bussola dentro una ricerca di programmi: l'AI come scrittore di piccoli pezzi di codice che risolvono il problema specifico, non come oracolo che risponde a tutto. Paragona la program synthesis di oggi al deep learning del 2012, prima che qualcuno mostrasse che funzionava davvero.

C'è un aspetto quasi letterario in tutto questo. Chollet, dentro Y Combinator, fianco a fianco con Altman, lancia il benchmark che dice il vostro re è nudo. Non lo dice con questo tono. Lo dice nel modo gentile dei francesi che hanno lavorato vent'anni a Google. Ma il numero zero virgola cinquantuno, sul tabellone, non si discute.

---

Ricapitoliamo per chi si è distratto un attimo: il filo di oggi è la distanza tra la scena di chi mette i miliardi sull'AI e la scena di chi la costruisce davvero. Sul palco di Y Combinator, Chollet ha appena messo un numero: zero virgola cinquantuno. Adesso passiamo dall'altra parte della stanza, da chi quei miliardi li sta spendendo.

Il terzo personaggio è Jack Dorsey. Cofondatore di Twitter, capo di Block — l'azienda che possiede Square, Cash App e una grossa tesoreria in Bitcoin. A febbraio Dorsey ha tagliato il quaranta per cento dei dipendenti di Block. Non sotto pressione di mercato: il primo trimestre è uscito con i profitti lordi in crescita del ventisette per cento anno su anno. Il taglio è stato deliberato, ideologico in senso letterale: Dorsey crede che gli agenti AI possano sostituire il middle management.

Il due aprile, insieme a Roelof Botha di Sequoia, ha pubblicato un saggio intitolato Da gerarchia a intelligenza, e ha registrato un podcast in cui dice che ogni azienda può diventare una mini-AGI. La sua tesi è che il middle management non sia una funzione necessaria, ma un workaround per i limiti cognitivi degli umani: non riusciamo a coordinare in tanti, allora inventiamo i capi intermedi. Se gli agenti AI riescono a coordinare al posto nostro, quel layer sparisce. Dorsey vuole che tutti i seimila dipendenti che restano in Block riportino direttamente a lui entro un anno, con due o tre livelli di gerarchia totali.

La parte interessante è che Dorsey si contraddice in modo strutturale con Hinton e Hassabis. Hinton, dal suo palco di Ginevra, dice che gli agenti di oggi sono auto senza volante. Hassabis dice che mancano una o due idee fondamentali. Dorsey scommette il quaranta per cento del suo personale sul fatto che invece sono già abbastanza buoni adesso. Uno dei due ha ragione, e nei prossimi due anni lo scopriremo dai bilanci di Block.

C'è anche un sotto-tema interessante. In parallelo Dorsey ha cambiato posizione su Bitcoin: non più solo riserva di valore, ma moneta da spendere. Block ha dichiarato ventottomila trecento bitcoin in tesoreria, ha lanciato una specie di rubinetto Bitcoin per onboarding nuovi utenti. Ha anche, controvoglia, accettato di supportare le stablecoin — una piccola rottura ideologica per il purista che era. Vista dall'alto è una stessa direzione: meno gerarchia, meno intermediari, software che fa da middle management e moneta che si muove senza banca centrale. Una visione coerente del lavoro e del denaro come due strati che si possono riscrivere.

Se avrà ragione lui o avrà ragione Hassabis, è una scommessa con la posta che vediamo tutti.

---

L'ultimo personaggio della settimana è David Heinemeier Hansson, che tutti chiamano DHH. Programmatore danese, ha creato Ruby on Rails — il framework con cui sono nate Twitter e Shopify. Cofondatore di Basecamp e HEY. Per anni ha incarnato la voce dell'open source pragmatico: niente cloud quando puoi fare da solo, niente complessità quando una cosa semplice basta.

La settimana scorsa DHH ha pubblicato un post che ha chiamato The malleable computer, il computer plasmabile. La tesi sta in poche frasi. L'open source aveva sempre promesso una libertà: tu hai il codice, puoi cambiarlo, puoi farlo tuo. Nella pratica quasi nessuno cambiava nulla, perché modificare un programma vero è difficile. L'AI rimuove la barriera. Se chiedi a un modello di aggiungere un pulsante a Basecamp, di togliere una funzione che non ti piace di un editor, di forkare un'app per uso personale, oggi succede. Quindi la promessa dell'open source diventa per la prima volta operativa: ogni utente può essere il forker del proprio software.

Detto in altro modo, DHH dice una cosa simile a Karpathy con il suo LLM-wiki, e simile a Buterin con le GPU di gruppo: il valore non sta nel modello centrale, sta nel piccolo bordo personale dove il modello incontra la vita di chi lo usa. Il modello commoditizza, il contesto privato è il vantaggio che resta.

Per dare corpo a questa idea, DHH si è fatto una distribuzione Linux personale, Omarchy, basata su Arch Linux con il compositore Hyprland. In trenta giorni ha collezionato circa centocinquantamila installazioni. Il ventuno aprile ha radunato centotrenta persone a New York per Omacon, una piccola convention dove il tema dichiarato era amicizia significa vedere la stessa verità sui computer. Frase che sembra strana e invece dice tutto: la malleabilità non è solo software, è una comunità di persone che ha lo stesso modo di pensare cosa sia proprio.

Sul piano del lavoro, in parallelo, DHH rifiuta il framing dell'AI come project manager di agenti. Lui vuole continuare a scrivere codice. L'AI come amplificatore, non come delega. È un'opzione opposta a quella di Dorsey: invece di togliere il middle management, togliere il bisogno di scaricare ad altri.

Mi sembra che DHH, Karpathy e Buterin siano tre facce dello stesso filo. La differenza con Altman, Huang, Dorsey non è ideologica, è di disegno. Da una parte si costruisce un'infrastruttura che parla con cento milioni di utenti dall'alto. Dall'altra si costruisce uno strato sottile sul laptop di ognuno. Tra dieci anni il bilancio di chi avrà avuto ragione si potrà fare guardando dove sono migrati i soldi, e dove sono migrate le persone.

---

Quattro o cinque progetti da osservare, tutti coerenti col filo di oggi.

Il primo si chiama nanochat. È un piccolo repository pubblicato da Karpathy che permette di addestrare da zero un modello tipo GPT-2 in circa due ore, su una macchina con otto schede grafiche di fascia alta. Non serve a competere con i modelli giganti. Serve a dire una cosa: la fabbrica completa entra in poche centinaia di righe di codice. Un singolo ricercatore, oggi, può vedere il mostro intero in faccia.

Il secondo è una pratica più che un prodotto, ma vale come progetto: si chiama LLM-wiki. Karpathy ha pubblicato come piccolo file pubblico le istruzioni per usare un agente AI come curatore di una piccola enciclopedia personale dentro Obsidian, l'editor di note che molti già usano. Articoli interlinkati, controllo di salute fatto dall'AI. È il pattern alternativo al butta tutto al cloud: memoria esplicita, ispezionabile, tua.

Il terzo è llama-cpp, di Georgi Gerganov. Un motore scritto in C che permette di far girare modelli linguistici su un laptop normale, senza mandare niente fuori. È la base di tutto lo stack di AI locale di cui parla Buterin, ed è diventato lo standard di fatto per chi vuole un'AI che non lasci traccia.

Il quarto è Omarchy, la distribuzione Linux di DHH che dicevamo prima. Non è solo un sistema operativo, è il segnale che esiste una domanda reale di un computer personale che non sia un macOS o un Windows.

Il quinto da segnalare è ARC-AGI-3 stesso, di Chollet. Non è un prodotto di consumo, ma un termometro pubblico. Il giorno in cui quel numero salirà davvero, il discorso sull'AGI cambierà da solo. Per ora resta un numero piccolo che pesa molto, e che chiunque può andare a vedere.

---

Resta in mente, di tutta questa giornata, un'immagine: due stanze separate, una in cui si firmano contratti per mille e quattrocento miliardi e si tagliano lavori a migliaia, l'altra in cui qualcuno scrive su una lavagna manca un'idea fondamentale. Il prossimo decennio dipenderà da quanto in fretta quelle due stanze torneranno a parlarsi. È stato Signal Brief. Alla prossima.
