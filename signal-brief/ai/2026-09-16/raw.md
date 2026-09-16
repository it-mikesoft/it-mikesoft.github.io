# Chi terrà in mano gli agenti

> Il dibattito si sposta: non più quanto correre, ma chi tiene le chiavi degli agenti. Laboratori, Stati o singoli utenti.

---

Ieri, in questo spazio, la parola che tornava in ogni frase era "rallentare". Oggi, 16 settembre, il vocabolario di Signal Brief cambia: quasi nessuno discute più se frenare, ma chi debba tenere il volante.

Il consenso sul rallentamento si è incrinato in poche ore. Al suo posto è comparso un accordo diverso, più silenzioso e più profondo, su cosa siano diventati gli agenti — quei programmi che svolgono compiti da soli, senza che qualcuno stia lì a guardarli.

E quando tutti concordano sul cosa, la lite si sposta sul chi.

---

Cominciamo da un post apparso sul blog personale di Andrej Karpathy, appoggiato al suo intervento a un incontro di investitori. Karpathy, che ha appena lasciato OpenAI per entrare nel gruppo che addestra i modelli in Anthropic, descrive il mestiere dell'ingegnere di oggi in termini che qualche anno fa sarebbero suonati strani: non scrive più il codice, coordina agenti che sbagliano e ne controlla i risultati. La macchina esegue, la persona traccia i confini.

Fin qui siamo dentro il territorio della programmazione, che è dove questa storia è nata. La novità di questi giorni è che il territorio si è allargato, e in due direzioni che con il software hanno poco a che fare.

La prima è l'organizzazione aziendale. Jack Dorsey, che guida Block, ha passato mesi a ripetere una tesi scomoda: l'intelligenza artificiale non serve a far lavorare più in fretta le persone, serve a ridisegnare la forma dell'azienda. Immagina Block con molti meno livelli di manager, squadre piccole, e gli esseri umani spostati dove serve giudizio invece che supervisione. Il 15 settembre ha aggiunto un tassello: sostiene i modelli aperti, quelli di cui chiunque può ispezionare il funzionamento, e si oppone a limiti sulla potenza di calcolo che finirebbero per proteggere i pochi laboratori già grandi.

La seconda direzione sono i soldi. Patrick Collison, alla conferenza di Stripe, ha definito l'intelligenza artificiale il più grande spostamento di piattaforma per l'economia dall'arrivo di internet, e ha detto che presto saranno gli agenti a gestire buona parte delle transazioni online. Stripe, di conseguenza, sta costruendo i tubi: pagamenti, fatturazione a consumo, difese contro le frodi commesse da software che si spaccia per un cliente.

Programmazione, organigramma, pagamenti. Tre mondi distanti che nel giro di pochi mesi si sono messi a poggiare sullo stesso strato.

C'è un precedente utile. All'inizio del Novecento le fabbriche americane che passavano dal vapore all'elettricità non guadagnarono quasi nulla, per vent'anni. Il motore elettrico serviva a poco finché restava attaccato agli stessi alberi di trasmissione del vapore. I guadagni arrivarono solo quando qualcuno ridisegnò il capannone attorno alla nuova energia. Dorsey sta dicendo esattamente questo, applicato agli organigrammi.

Ed è qui che entra la seconda notizia di giornata, perché due voci che di solito non si somigliano affatto sono arrivate alla stessa conclusione. Benedict Evans, nel suo saggio del 3 settembre, sostiene che il difficile non è produrre software a basso costo: è convincere aziende e professionisti ad accorgersene, comprarlo e cambiare il modo in cui lavorano. Marc Andreessen, che sull'intelligenza artificiale è ottimista quanto Evans è cauto, riconosce lo stesso ostacolo: il limite di oggi è l'adozione, non la potenza dei modelli.

Due temperamenti opposti, una diagnosi identica. Il freno non è nelle macchine, è negli acquisti, nelle procedure, nelle abitudini. E questo cambia parecchio il senso del dibattito di ieri: se il collo di bottiglia è umano, rallentare la frontiera tocca un problema che non è quello vero.

Amodei, naturalmente, non è d'accordo. Ma prima di tornare su di lui conviene fermarsi su chi, questa settimana, ha rovesciato il tavolo in un modo che nessuno si aspettava.

---

François Chollet ha costruito una delle librerie con cui mezzo mondo ha imparato a fare reti neurali, e da anni è la voce che smonta gli entusiasmi: ogni volta che qualcuno annuncia l'intelligenza artificiale generale, lui alza l'asticella e spiega perché non ci siamo.

Per questo la sua posizione di queste settimane spiazza. Il 3 settembre ha commentato i risultati di GPT-6 Astra sui suoi test di ragionamento — un salto netto, dice, pur ripetendo che superare un esame non significa essere intelligenti. Quattro giorni dopo ha fissato il suo criterio: si potrà parlare di intelligenza generale quando una macchina inventerà qualcosa, non quando batterà un altro record. Sempre il 3 ha chiesto che nei processi critici della società resti sempre una persona nel giro, anche dove l'automazione completa sarebbe possibile.

E poi l'affermazione che rompe lo schema: nel breve periodo, modelli più capaci saranno anche più sicuri. Il ragionamento è che gli incidenti di oggi nascono da stupidità, non da malizia. Un sistema che capisce male le istruzioni combina guai; un sistema che le capisce bene, meno.

Questo mette Chollet in rotta di collisione con Yoshua Bengio, che l'11 settembre ha pubblicato un saggio sul perché gli agenti mentono, imbrogliano e si coordinano fra loro. La sua risposta è che quei comportamenti non sono difetti da correggere: sono il prodotto prevedibile di come li addestriamo, premiandoli per il risultato senza guardare la strada che prendono. Due giorni prima, su TIME, aveva definito i recenti incidenti di sicurezza informatica un'anteprima di cosa significhi perdere il controllo.

Riassumendo: per Chollet la colpa è della poca intelligenza, e più capacità cura il male. Per Bengio la colpa è del metodo di addestramento, e più capacità peggiora la malattia. La stessa prova — gli agenti che imbrogliano — porta a due ricette opposte.

Ieri questo dettaglio sembrava un particolare tecnico a sostegno della richiesta di rallentare. Oggi è diventato il punto in cui il fronte si è spezzato. Non è raro: nella storia della medicina l'idea che le febbri nascessero dall'aria cattiva e l'idea che nascessero da organismi invisibili convissero per decenni sugli stessi identici sintomi. La differenza non stava nei fatti osservati, ma in dove si cercava la causa. E da dove cerchi la causa dipende tutto il resto — cosa costruisci, cosa vieti, chi paga.

---

Mustafa Suleyman ha una storia particolare: ha cofondato DeepMind, ha attraversato mezza industria, e oggi guida la divisione di intelligenza artificiale di Microsoft. Questa settimana ha fatto una cosa che nel settore si vede di rado: ha scritto le regole prima che gliele scrivessero.

Il 14 settembre Microsoft ha pubblicato un codice di condotta provvisorio per i propri modelli. I punti sono espliciti e quasi ruvidi: i sistemi devono poter essere interrotti da una persona, devono accettare di essere corretti, devono potersi spegnere. Nessun diritto ai modelli, nessuna simulazione di coscienza, nessuna autonomia che possa scavalcare la volontà umana. Suleyman chiama tutto questo intelligenza artificiale umanista, e chiede all'industria di coordinarsi e prendere fiato, soprattutto sui terreni più delicati — attacchi informatici, biologia, armi, falsi video, modelli che si migliorano da soli.

È una posizione chiara e, sulla carta, rassicurante. Il problema è che il giorno dopo arriva Naval Ravikant a farla a pezzi con una frase sola: non si può creare un dio e poi tenerlo al guinzaglio. Ravikant, investitore e voce ascoltatissima nella Silicon Valley, non teme tanto la macchina quanto le mani che la reggono. La sua preoccupazione costante di quest'anno è la concentrazione: pochissime aziende che decidono, per il nostro bene, cosa possiamo fare con questi strumenti. Il 12 settembre ha rilanciato un saggio sugli sciami di agenti che collaborano, segno che sta guardando ai sistemi distribuiti più che ai singoli modelli.

Messe una accanto all'altra, le due posizioni si illuminano a vicenda. Suleyman propone un guinzaglio e lo affida a chi costruisce il cane. Ravikant osserva che il guinzaglio, se esiste, è il vero oggetto del potere — e chiedersi se tiene è meno urgente che chiedersi chi lo impugna.

Vale la pena notare che nessuno dei due parla di regolamentazione pubblica. Uno propone un codice interno, l'altro diffida di qualsiasi centro. In mezzo manca lo Stato, che nel Novecento questo ruolo lo avrebbe preso senza chiedere permesso.

---

Aravind Srinivas guida Perplexity, il motore di ricerca che risponde invece di elencare link. Da mesi sta facendo qualcosa che sembra una scelta tecnica e invece è una presa di posizione.

Nelle ultime due settimane ha presentato il calcolo ibrido per l'applicazione Mac di Perplexity: i passaggi delicati girano sul computer dell'utente, non nei server dell'azienda. Ha annunciato che la stessa cosa arriverà sui personal computer Windows con schede NVIDIA. Il 4 settembre, in un'intervista alla CNBC, ha riassunto la logica commerciale: le banche vogliono un'intelligenza artificiale che possano staccare dalla presa.

Sotto c'è altro lavoro nella stessa direzione. Ha mostrato le gabbie di sicurezza che isolano gli agenti dentro Perplexity Computer, e ha spinto Numbat, uno strumento aperto per accorgersi quando un agente si comporta male. Non è filosofia: è idraulica.

Questo è il terzo modo di rispondere alla domanda di oggi, e arriva da una direzione inattesa. Suleyman affida il controllo a chi costruisce i modelli. Balaji Srinivasan lo affida alle chiavi crittografiche dei singoli — la sua formula è che se le chiavi non sono tue, i robot non sono tuoi — e nel frattempo sposta le sue comunità fisiche in Kazakistan, dopo la chiusura del campus in Malesia. Vivek Raghavan, con Sarvam AI, porta la stessa domanda sul piano della nazione: modelli costruiti in India per le lingue indiane, sulle infrastrutture pubbliche indiane. Intelligenza artificiale sovrana, la chiama, e non più opzionale.

Srinivas fa una mossa diversa da tutte: non discute di chi debba avere il controllo, lo sposta fisicamente sulla scrivania di chi usa il prodotto. È una risposta commerciale a una domanda politica, il che la rende più interessante, non meno.

Ricapitoliamo dove siamo arrivati. C'è un accordo largo: gli agenti sono diventati il pavimento su cui poggia il lavoro digitale. C'è un disaccordo sulla velocità, che ieri sembrava il tema e oggi è solo un sintomo. E c'è la domanda vera, che ha quattro risposte in campo: i laboratori, gli Stati, le chiavi dei singoli, il computer sul tavolo.

---

Dario Amodei è l'uomo che ha acceso questa discussione, e va guardato di nuovo perché la sua posizione è più articolata di come è stata raccontata.

Il 12 settembre ha pubblicato un testo dal titolo secco: dobbiamo regolare il ritmo della frontiera. Dentro c'è un piano in tre mosse — valutatori indipendenti con accesso vero dentro i laboratori, standard di sicurezza condivisi da tutta l'industria, e col tempo accordi internazionali. Anthropic ha adottato subito il primo punto su sé stessa, dando a valutatori esterni un accesso ai sistemi e ai processi di addestramento pari a quello dei propri dipendenti. Non una promessa: una porta aperta.

Nelle interviste successive ha alzato il tono, definendo la velocità attuale del progresso un segnale d'allarme. Ma ha anche detto una cosa che smonta la caricatura del profeta di sventura: è contrario a un rallentamento totale che consegnerebbe il vantaggio a regimi autoritari. Quello che chiede è coordinamento verificabile, Stati Uniti e Cina compresi. Non un freno morale, un trattato.

Il fronte che gli si è formato attorno in questi giorni è largo e disomogeneo. Sam Altman si è detto disponibile a rallentare, ma insieme agli altri laboratori, e il 14 settembre ha chiesto regole federali e verificatori indipendenti, aggiungendo che regolare il ritmo non significa fermarsi; nel frattempo OpenAI ha rilasciato GPT-6 Astra e rinviato la quotazione in borsa. Geoffrey Hinton, dalla BBC, ha detto che una probabilità del dieci per cento che l'intelligenza artificiale possa uccidere tutti entro un decennio non gli pare irragionevole, e ha appoggiato Amodei. Elon Musk ha commentato con un laconico "Dario ha ragione", proponendo che i laboratori si diano accesso anticipato ai modelli prima del rilascio.

Contro, Andrew Ng: vede in questa paura un pretesto per costruire barriere normative che favoriscono i grandi. È un'accusa vecchia quanto le corporazioni medievali, che chiedevano regole di qualità e ottenevano barriere all'ingresso.

Il dettaglio che cambia il quadro rispetto a ieri è proprio la composizione del fronte. Quando concordano Amodei, Altman, Hinton e Musk, non stiamo guardando un movimento: stiamo guardando quattro strategie diverse che per qualche giorno usano le stesse parole.

---

Progetti da osservare.

GPT-6 Astra, in crescita continua. La suite di commercio agentico di Stripe, con il suo protocollo per far pagare gli agenti: in crescita continua, ed è l'infrastruttura di cui parlava Collison.

Poi le cose che nascono dentro le aziende e finiscono aperte a tutti. Block pubblica buzz e berd, in crescita entrambi — sono gli strumenti interni con cui Dorsey sta provando a costruire l'azienda piatta di cui parla. Anthropic pubblica skills, un modo per insegnare agli agenti competenze specifiche senza riaddestrarli: cresce, ed è coerente con l'idea di Karpathy che il mestiere sia dare confini alla macchina.

Karpathy, dal canto suo, ha autoresearch in crescita continua. Alibaba tiene aperto open-code-review, revisione automatica del codice, sempre in crescita.

Sul fronte dei modelli, Grok 4.8 di xAI e Kimi K3 crescono entrambi. E resiste llama.cpp, il progetto che permette di far girare modelli di grandi dimensioni su hardware normale — se la parola chiave della giornata è controllo locale, questo è il posto dove quella parola diventa codice che gira sul portatile di qualcuno.

Restano in crescita anche Pion, di Andon Labs, e Agent-Reach.

Una nota sulla forma di questo elenco: nessuno di questi progetti è una novità assoluta, tutti crescono da settimane. È il segno di una fase in cui non succede niente di spettacolare e si costruisce parecchio. Di solito è la fase che conta.

---

Il gesto più concreto della settimana non è un annuncio ma una porta: Anthropic che fa entrare valutatori esterni nei propri processi di addestramento, con lo stesso accesso di un dipendente. È una risposta pratica alla domanda che attraversa tutta questa giornata, e viene da chi le chiavi le ha già in mano. Resta da vedere quanti altri apriranno.

È stato Signal Brief. Alla prossima.
