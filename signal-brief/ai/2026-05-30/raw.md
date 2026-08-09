# Tre strade verso la macchina pensante

> Maggio 2026, i grandi nomi dell'intelligenza artificiale si dividono in tre correnti rivali. Sotto, cresce la sfiducia verso le promesse di automazione totale.

---

Maggio 2026 si chiude con un'immagine strana. Tre gruppi di persone — alcuni dei nomi più importanti dell'intelligenza artificiale — non sono più d'accordo nemmeno su cosa stiano cercando. Alcuni dicono che bastano modelli più grandi. Altri dicono che la strada è chiusa e ne serve un'altra. Altri ancora rifiutano la corsa e tornano alle cose semplici che funzionano. Nel mezzo, un pubblico che comincia a non fidarsi più di niente, nemmeno delle email che riceve. Da qui parte la puntata di oggi di Signal Brief.

---

Il 19 maggio Andrej Karpathy ha lasciato OpenAI per Anthropic. Per chi non lo conosce, Karpathy è uno dei nomi storici di questa generazione di ricercatori. Ha cofondato OpenAI insieme a Musk e Altman, ha guidato l'autopilota di Tesla, è il professore che ha insegnato deep learning a Stanford a una generazione di studenti. Quando uno così cambia squadra, si nota.

Il dettaglio che colpisce di più, però, non è il passaggio. È come Karpathy racconta sé stesso negli ultimi mesi. Dice di essere in uno stato di psicosi da intelligenza artificiale. Non scrive codice da dicembre. Lavora sedici ore al giorno con uno sciame di agenti software, e la proporzione tra quello che scrive a mano e quello che delega alle macchine è passata da ottanta a venti, a zero a cento. Niente. Non scrive più nulla a mano. Ha inventato due termini per descrivere quello che fa: prima vibe coding, che è diventato virale, poi agentic engineering, che è una versione più seria della stessa cosa. E aggiunge un dettaglio quasi imbarazzante: ha ansia quando non ha consumato abbastanza token nel mese, perché sa che gli altri esploratori come lui ne stanno consumando di più.

Tenete a mente questa immagine, perché racconta bene dove siamo arrivati. Un ricercatore di prima fascia che si descrive in uno stato alterato, in competizione con sé stesso su quanto deve far lavorare le macchine al posto suo. Mi ricorda quei chimici di inizio Novecento che provavano sostanze su loro stessi per capirle. Solo che oggi la sostanza è il modello linguistico, e la cavia è l'ingegnere.

Adesso allarghiamo lo sguardo. Maggio 2026 è il mese in cui il consenso sull'intelligenza artificiale si è rotto in tre pezzi.

Il primo pezzo è quello di Sam Altman, di Demis Hassabis di Google DeepMind, di Jensen Huang di Nvidia. Loro credono ancora che la strada giusta sia continuare a far crescere i modelli, costruire data center grandi come città, e arrivare a un'intelligenza generale tra tre e cinque anni. Hassabis lo dice con una metafora bella: dice di sentirsi ai piedi della singolarità. Huang vende già il primo chip pensato per far girare miliardi di agenti, e parla di un mercato da duecento miliardi di dollari solo per quello.

Il secondo pezzo è quello di Yann LeCun, di François Chollet, di Ilya Sutskever. Tre nomi pesanti che dicono la cosa opposta. Dicono che ingrandire i modelli ha sbattuto contro un muro. Aggiungere parametri non basta più. Servono idee nuove. LeCun ci ha investito un miliardo di dollari in un'architettura diversa. Chollet ha lasciato Google per dedicarsi a misurare l'intelligenza vera con un nuovo test, in cui gli umani prendono cento per cento e i migliori modelli di oggi prendono lo zero virgola tre.

Il terzo pezzo è quello dei pragmatici. John Carmack, l'ingegnere leggendario dei videogiochi, che lavora con il padre del reinforcement learning su un robot che gioca ad Atari guardando lo schermo con una telecamera. Simon Willison, che maneggia ogni giorno modelli linguistici e racconta cosa funziona davvero. Benedict Evans, che con calma dice che è impossibile prevedere quali lavori spariranno, e cita la storia dei contabili. Con il computer dovevano scomparire, e invece sono ancora qui, cento anni dopo.

Tre strade, tre rischi diversi. E nessuno di loro sa di stare percorrendo quella sbagliata.

Sotto, intanto, succede un'altra cosa. Paul Graham, il fondatore di Y Combinator, ha scritto che le email scritte dall'intelligenza artificiale stanno erodendo la fiducia tra le persone. Willison segnala che le segnalazioni di vulnerabilità di sicurezza fasulle generate dai modelli sono cinque volte tante rispetto al 2024, e i manutentori del software libero stanno bruciando. È un paradosso curioso. La stessa tecnologia che promette di automatizzare tutto sta erodendo la fiducia minima che serve per accettare che venga automatizzato. Ne parliamo nei prossimi minuti.

---

Karpathy l'abbiamo già incontrato. Vale la pena tornare su di lui un minuto, perché la sua mossa di maggio è il segnale più chiaro di cosa stia diventando il lavoro di ricerca sull'intelligenza artificiale.

Karpathy ha quarant'anni, è nato in Slovacchia, è cresciuto in Canada. Ha studiato con Geoffrey Hinton, uno dei padri della disciplina di cui parliamo. Era cofondatore di OpenAI, poi è andato a Tesla a guidare la squadra dell'autopilota, poi è tornato in OpenAI, poi se n'è andato a fondare una piccola scuola di formazione AI. A maggio annuncia che entra in Anthropic. Si occuperà di pre-training, cioè della parte profonda, la più scientifica, di come si addestrano i modelli grandi.

Quello che racconta del suo ultimo anno è strano. Dice che è stato il suo periodo più produttivo di sempre, e contemporaneamente il più allucinato. Sedici ore al giorno con gli agenti, niente codice scritto a mano, ansia da consumo di token. Per descrivere quello che fa ha coniato due termini. Il primo, vibe coding, suona quasi giocoso. Significa programmare seguendo la sensazione, lasciando che sia il modello a tirare fuori il codice mentre tu giudichi a vista. Poi ha sostituito quel termine con uno più serio, agentic engineering. Ingegneria con gli agenti. È un piccolo gesto di maturazione, come quando una parola entrata in cucina come scherzo finisce sul ricettario.

La cosa interessante per me è il collegamento con il filo della giornata. Karpathy non è uno scaling puro come Altman, e non è un teorico dei nuovi paradigmi come LeCun. È un esploratore pratico che entra ad Anthropic per studiare empiricamente fino a dove arriva il modello attuale prima di rompersi. È il pragmatista estremo. Invece di ragionare a tavolino sui limiti, ci sbatte contro al massimo della velocità possibile.

C'è un precedente che mi è venuto in mente leggendolo. Negli anni Sessanta i piloti collaudatori del programma X-15 portavano gli aerei a quota e velocità che nessuno aveva mai sperimentato, non per costruire qualcosa di nuovo, ma per vedere a quale punto la fisica diceva basta. Karpathy oggi sta facendo la stessa cosa con i modelli di linguaggio. Vola alto, vola veloce, e ogni tanto racconta cos'ha visto.

---

Dall'altra parte del dibattito c'è Yann LeCun. Anche lui è uno dei nomi storici. Francese, capo della ricerca AI a Meta da molti anni, ha vinto il Turing Award insieme a Hinton e Bengio. Tradizionalmente la voce scettica nell'industria.

A maggio LeCun fa due cose. Per prima cosa attacca pubblicamente i grandi capi azienda che descrivono l'intelligenza artificiale come una minaccia esistenziale. Dice che hanno un interesse finanziario a esagerare l'impatto dei loro prodotti, e che questo messaggio è estremamente distruttivo per i ragazzi. Consiglia ai diciassettenni di iscriversi all'università, di studiare fisica o ingegneria elettrica, e di non ascoltare le previsioni catastrofiche. Niente di nuovo qui rispetto alle rivoluzioni industriali passate, dice. Il vapore non ha cancellato i lavori, li ha cambiati.

La seconda cosa è più tecnica. LeCun continua a promuovere un'architettura alternativa che si chiama JEPA. Si può descrivere così: invece di insegnare al modello a indovinare la parola successiva, gli si insegna a costruirsi una rappresentazione del mondo. Una mappa interna delle cose, non una macchina da completamento automatico. Ha messo circa un miliardo di dollari su questa idea. Per ora non funziona meglio dei modelli mainstream, ma LeCun è convinto che la strada degli altri si stia chiudendo, e che la sua si stia aprendo.

In mezzo c'è una scaramuccia divertente con Elon Musk. Musk a maggio passa il tempo a presentare la sua azienda spaziale per la quotazione in borsa — la più grande mai tentata nella storia — e a fondere xAI dentro SpaceX. LeCun lo prende in giro. Dice che Musk promette risultati l'anno prossimo da anni, e che predica rigore scientifico mentre diffonde teorie complottiste sui social. È una piccola guerra di nervi tra due persone che si conoscono bene da molto tempo.

Il legame con il filo di oggi è netto. LeCun rappresenta la corrente che dice: il consenso degli ultimi tre anni è sbagliato, le macchine attuali non capiscono il mondo, e finché non costruiamo modelli che lo capiscono davvero non andremo da nessuna parte. È una posizione che somiglia a quella dei fisici di fine Ottocento, quelli che dicevano che la fisica classica era completa, pochi mesi prima che arrivasse Einstein. LeCun pensa che il suo Einstein non sia ancora arrivato. Ma sente che è vicino.

---

Mentre Karpathy esplora i limiti e LeCun ne propone di nuovi, Jensen Huang vende le pale ai cercatori d'oro. Huang è il capo di Nvidia. È taiwanese, parla con una giacca di pelle nera che è ormai un personaggio a sé, ed è probabilmente l'uomo più importante dell'intelligenza artificiale di oggi. Quello senza cui nessuno di questi modelli esisterebbe.

A maggio Nvidia presenta una cosa nuova. Un chip che si chiama Vera. È diverso dai famosi chip grafici che Nvidia produce da anni. Non serve ad addestrare i modelli, serve a far girare gli agenti. Quei piccoli sistemi che fanno le cose al posto tuo. Huang dice una frase che vale la pena ripetere: nel mondo ci saranno miliardi di agenti, e ciascuno avrà bisogno del suo piccolo cervello dedicato. Nel primo anno ne ha già venduti per venti miliardi di dollari.

Poi Huang fa altre due cose in maggio che vale la pena raccontare. Pubblica un nuovo investimento in Taiwan da centocinquanta miliardi di dollari l'anno, dieci volte il livello storico, confermando che la produzione dei chip resta lì, sull'isola, dove tutto è cominciato. E concede un'intervista in cui spiega che la sua filosofia di leadership è fatta di critica continua. Dice che non si può passare un giorno senza ricevere critica, e che la sua aria severa è ereditata dai genitori taiwanesi. La cita perché secondo lui spiega come si tiene insieme un'azienda da cinque trilioni di dollari di valore.

Il legame con il filo è chiaro. Huang è la voce della corrente che pensa che la strada giusta sia quella che stiamo già percorrendo, solo molto più velocemente. Più chip, più data center, più agenti, fino a quando l'intelligenza generale arriva. Non discute teoria. Vende infrastruttura. È un po' come quei costruttori di ferrovie americani dell'Ottocento. Non sapevano se l'Ovest sarebbe stato d'oro o di carbone, ma sapevano che chiunque ci sarebbe arrivato avrebbe avuto bisogno dei loro binari. Huang vende binari. E in questo momento è l'unico fornitore al mondo.

---

L'ultimo ritratto di oggi è Simon Willison. Per molti non sarà un nome familiare, ma in questo settore è una persona che andrebbe ascoltata sempre. È un programmatore inglese, ha cofondato un'azienda piccola e indipendente che si chiama Datasette, e da circa tre anni tiene un blog dove racconta in tempo reale cosa fanno davvero i modelli linguistici quando li si usa per lavorare, non quando li si descrive nei comunicati stampa.

A maggio Willison fa due cose. La prima è positiva. Rilascia un piccolo strumento che integra i modelli linguistici dentro Datasette, lasciando che chiunque possa interrogare un database parlandogli normalmente, in italiano o in inglese, senza sapere il linguaggio tecnico. È una cosa modesta, e proprio per questo importante. Significa che il livello base della tecnologia è finalmente stabile, dopo anni in cui ogni promessa veniva smentita dall'uso reale.

La seconda cosa che fa è più amara. Scrive un post che si chiama semplicemente "La pressione". Racconta una vicenda che gli ha riferito un altro programmatore famoso, Daniel Stenberg, il manutentore di una libreria di software libero scaricata centinaia di milioni di volte, che si chiama curl. Stenberg dice che le segnalazioni di vulnerabilità di sicurezza che riceve sono passate, in un anno, a essere quattro o cinque volte tante rispetto a prima. Quasi tutte fasulle, generate da programmi automatici alimentati da modelli linguistici. Persone che non hanno mai guardato il codice, ma che mandano report sperando in una taglia, in un premio, in un punteggio di reputazione. I manutentori bruciano.

Qui si chiude il cerchio di oggi. Da una parte abbiamo agenti software sempre più capaci, che promettono di fare il lavoro al posto nostro. Dall'altra abbiamo gli stessi agenti che intasano i canali di fiducia su cui il software libero si regge da trent'anni. Paul Graham nota lo stesso effetto sulle email tra fondatori e investitori: appena si capisce che il messaggio è scritto da una macchina, la persuasione svanisce. È il paradosso di cui parlavamo all'inizio. La macchina che ci dovrebbe servire ci sta rendendo più diffidenti, non più produttivi.

Ricapitoliamo un attimo dove siamo. La storia di oggi è questa: tre gruppi che vogliono raggiungere la stessa cosa per strade diverse, e sotto, un'erosione lenta della fiducia tra le persone causata dagli stessi strumenti che dovrebbero accelerare tutto. Adesso vediamo i progetti che parlano di questo.

---

Cinque progetti che vale la pena tenere d'occhio in questi giorni, raccontati come piccole storie.

Il primo si chiama nanochat. È un piccolo archivio di codice pubblicato da Karpathy, che addestra un modello simile a GPT-2 in circa due ore su otto schede grafiche di fascia alta. Sembra una cosa per addetti ai lavori, ma il messaggio è chiaro: anche un singolo ricercatore può rifare in casa qualcosa che fino a tre anni fa richiedeva un'azienda. È l'era del meno codice, più amplificazione.

Il secondo si chiama llama.cpp. È un programma scritto in linguaggio C che permette di far girare modelli linguistici grandi sul proprio computer, senza passare da nessun servizio in rete. Non è nuovo, ma è diventato la base di tutta una scena che vuole l'intelligenza artificiale sovrana, locale, ispezionabile. Vitalik Buterin lo cita come parte dello stack ideale per chi non vuole dipendere dal cloud di nessuno.

Il terzo si chiama Omarchy. È una versione di Linux curata personalmente da David Heinemeier Hansson, il fondatore di Basecamp. L'ha pensata per convincere chi usa Mac o Windows a passare a un sistema operativo davvero modificabile. Centocinquantamila installazioni nei primi mesi. È il manifesto di chi vuole computer più semplici, più aperti, meno proprietari.

Il quarto è ARC-AGI, il test costruito da François Chollet. Centinaia di piccoli rompicapi interattivi. Gli esseri umani li risolvono tutti. I migliori modelli linguistici di oggi risolvono meno dell'uno per cento. È il misuratore con cui Chollet vuole rimettere in discussione cosa significa davvero intelligenza, prima di inseguirla.

Il quinto si chiama claude-context. È uno strumento che indicizza il codice di un'azienda e lo rende disponibile agli agenti software come contesto. È un piccolo segnale di come il valore si stia spostando dal modello in sé al modo in cui lo si usa. Da chi costruisce il cervello, a chi costruisce la memoria che gli serve per lavorare.

---

Resta in testa, alla fine di una giornata così, l'immagine di Karpathy che lavora sedici ore al giorno con uno sciame di agenti e non scrive più una riga di codice a mano. È una scena nuova. Non sappiamo se sia un'anteprima del futuro o un eccesso isolato. Ma è successa, e qualcuno la sta guardando con attenzione. È stato Signal Brief. Alla prossima.
