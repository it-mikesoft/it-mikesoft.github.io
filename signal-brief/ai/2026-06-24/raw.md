# Gli architetti dello scaling fanno marcia indietro

> Chi ha costruito la strada dei modelli giganti adesso dice che è finita. Dati esauriti, autorità che si sparpaglia, e un nuovo confine: chi definisce il problema.

---

Giugno 2026. Per anni il racconto dell'intelligenza artificiale è andato in una direzione sola: più dati, più calcolo, modelli sempre più grandi. Questa settimana è successo qualcosa di curioso. Le persone che quella strada l'hanno disegnata hanno cominciato, una dopo l'altra, a dire che era arrivata in fondo. Non i critici di sempre: proprio gli architetti. Da San Francisco a Pechino, lo stesso gesto, chi correva davanti che si volta indietro. È Signal Brief. Si parte da una frase detta in un podcast, che ha il tono di una resa.

---

La frase è di Ilya Sutskever, e suona così: i dati sono finiti, c'è un solo internet, il pre-training come lo conosciamo è finito. La dice seduto a parlare con Dwarkesh Patel, con la calma di chi non sta provocando ma constatando. E pesa, perché Sutskever non è un osservatore esterno. È uno degli uomini che hanno costruito il metodo che adesso dichiara esaurito: prendi una rete enorme, dalle in pasto mezzo mondo scritto, aspetta che diventi brava. Quel mezzo mondo, dice, l'abbiamo già dato tutto.

C'è un'immagine che aiuta. Per quindici anni l'industria ha pescato in un oceano che sembrava infinito: bastava una rete più grande per tirare su più pesce. Sutskever adesso dice che il mare è stato svuotato. Non si pesca di più costruendo pescherecci più grossi, quando non è rimasto niente da pescare. Il problema torna a essere un altro, più antico: avere un'idea migliore. Lui periodizza la storia recente in tre tempi, ricerca fino al 2020, scaling fino al 2025, e adesso di nuovo ricerca. Siamo tornati al punto di partenza, ma con vent'anni di esperienza in più.

E non è il solo a dirlo, ed è questa la cosa che conta. Nello stesso periodo Yann LeCun ripete che i modelli linguistici sono un vicolo cieco: scrivono codice, passano esami, dimostrano teoremi, e poi inciampano su cose che un gatto capisce al volo. Demis Hassabis, da Google DeepMind, ammette che prima dell'intelligenza vera servono ancora una o due svolte tecniche che oggi non abbiamo. E persino Andrej Karpathy, che un anno fa raccontava il futuro come una cosa già scritta, è tornato a interessarsi proprio al pre-training, la fase che molti davano per chiusa.

Quando le stesse persone che hanno costruito l'autostrada cominciano a dire che l'autostrada finisce qui, vale la pena fermarsi ad ascoltare. È già successo, del resto. Negli anni Settanta gli ingegneri che avevano fatto volare l'aviazione a reazione si accorsero che spingere ancora sui motori non dava più i salti di prima, e l'innovazione si spostò altrove, nell'elettronica, nei materiali. La tecnologia non muore: cambia il punto in cui si gioca la partita.

E qui sta il secondo filo della giornata, più silenzioso ma forse più importante. Se generare testo, codice, immagini costa ormai pochissimo, il valore si sposta da chi produce a chi sa dire cosa serve e verificare se è giusto. Simon Willison lo riassume con una formula asciutta: il collo di bottiglia non è più scrivere, è specificare. La macchina sforna risposte a getto continuo. La domanda diventa chi decide quali sono le domande, e chi controlla che la risposta regga.

Tenete insieme questi due movimenti, perché raccontano la stessa storia da due lati. Da una parte gli architetti che dicono basta scaling. Dall'altra il potere che scivola via dal calcolo puro e va verso chi definisce e chi controlla. Restano due tensioni vecchie, che continuano a correre sotto: l'intelligenza artificiale distruggerà lavoro o lo moltiplicherà, e chi terrà davvero in mano i tempi di tutto questo. Le ritroveremo nei volti di oggi.

---

Cominciamo da Sutskever, perché la sua è la parabola più netta. Cofondatore di OpenAI, per anni l'apostolo numero uno dell'idea che bastasse aggiungere potenza di calcolo per avvicinarsi all'intelligenza. Era la sua scommessa, e per un po' ha avuto ragione lui: i modelli che usiamo tutti i giorni nascono da quella convinzione.

Adesso quella stessa persona, nel lungo dialogo con Dwarkesh Patel, dichiara chiuso il proprio playbook. Non lo fa con tono drammatico, ed è questo che colpisce. Spiega che il problema più profondo non è la potenza ma la generalizzazione: i modelli, dice, generalizzano molto peggio di un essere umano. Un bambino impara una cosa da pochi esempi; il modello ne ha bisogno di milioni, e fuori da quei milioni si perde. La svolta, secondo lui, verrà da un principio di apprendimento ancora da scoprire, non da un capannone pieno di schede grafiche in più.

C'è un dettaglio che racconta tutto meglio di mille parole. Il suo laboratorio, Safe Superintelligence, ha raccolto qualcosa come sei miliardi a una valutazione di trentadue. È il laboratorio di intelligenza artificiale più valutato al mondo senza avere un solo prodotto da vendere. Nessuna app, nessun abbonamento, niente. Solo la promessa di ricerca pura. È una scommessa che ha il sapore dell'altro secolo, quando un mecenate finanziava un matematico per anni senza chiedergli cosa avrebbe prodotto entro il trimestre.

Per i tempi, Sutskever resta prudente: un sistema capace di imparare come un buon apprendista umano, e poi di superarci, lo colloca in una finestra ampia, dai cinque ai vent'anni. Vaga, certo. Ma è il tipo di vaghezza onesta di chi ha appena ammesso di aver sbagliato una previsione e non vuole rifarlo.

La cosa più interessante, per me, è il significato di questo dietrofront. Non è una sconfitta. È il momento in cui una disciplina smette di credere alla propria fede e torna a fare domande. Era successo con la fisica all'inizio del Novecento, quando i conti che funzionavano da duecento anni hanno smesso di tornare e tutto è stato ripensato da capo. Quei momenti, di solito, non sono la fine di niente. Sono l'inizio della parte interessante.

---

Se Sutskever chiude una porta, Yann LeCun ne sta aprendo un'altra, e l'ha fatto col gesto più concreto che esista: ha messo i soldi e il proprio nome.

LeCun è uno dei padri delle reti neurali moderne, per anni la voce scettica dentro Meta, quello che frenava gli entusiasmi mentre tutti correvano. Per mesi ha ripetuto la stessa cosa, che i modelli linguistici sono un binario morto verso l'intelligenza vera. Bravissimi col testo, che è ordinato e fatto di parole nette, e ciechi davanti al mondo fisico, che è continuo, rumoroso, pieno di cose mai viste prima. Un bambino capisce che un oggetto lasciato cade prima di saper parlare. Un modello linguistico, tutto quel sapere lì, non ce l'ha.

La novità è che LeCun ha smesso di criticare dal di dentro e ha cambiato vita. Ha lasciato Meta e ha fondato un laboratorio nuovo, AMI Labs, raccogliendo poco più di un miliardo di dollari in un primo giro di finanziamenti. Un miliardo, per costruire quello che chiama world models: sistemi che provano a prevedere come si comporta il mondo, non come prosegue una frase. È il passaggio dalla critica al capitale che la sostiene. Una cosa è dire che la strada è sbagliata; un'altra è scendere dall'auto e mettersi a costruirne una tua.

Sul piano tecnico il suo gruppo ha pubblicato a fine maggio due lavori su un'architettura chiamata JEPA, che è il suo modo di provare a far imparare a una macchina un modello fedele del mondo. Sono i primi inquadramenti seri della cosa, lui stesso ammette che i risultati di oggi sono ancora fragili. Ma è un inizio dichiarato come tale, senza promesse gonfiate.

Torniamo un attimo sul filo di oggi, perché qui si lega tutto. LeCun e Sutskever partono da diagnosi diverse — uno dice che mancano i dati, l'altro che manca il senso del mondo fisico — ma arrivano alla stessa conclusione: i modelli di oggi hanno un tetto, e per superarlo serve un'idea nuova, non un capannone più grande. È raro vedere due rivali storici annuire sulla stessa cosa. Quando succede, di solito vuol dire che hanno ragione tutti e due.

---

E poi c'è Andrej Karpathy, che in questa storia è il personaggio più interessante, perché incarna il ripensamento in diretta.

Karpathy è uno dei divulgatori più seguiti del settore, è passato da OpenAI, da Tesla, e si era lanciato in un progetto tutto suo sull'educazione. Un anno fa raccontava il presente con una formula che aveva fatto il giro del mondo, il software che si scrive da solo, e sembrava guardare avanti, verso gli strumenti e l'insegnamento, lontano dalla ricerca di base.

Il 19 maggio ha annunciato che entra in Anthropic, e non in un ruolo qualsiasi: nel gruppo che si occupa di pre-training, cioè proprio quei grandi addestramenti che danno ai modelli la conoscenza di fondo. La fase che mezzo settore dava per superata. Lui ci torna dentro. Dopo l'educazione e gli strumenti, rientra nella sala macchine. È il gesto che dà corpo a tutto il discorso di oggi: se persino chi guardava avanti torna a occuparsi delle fondamenta, vuol dire che il manuale è davvero in revisione.

In parallelo ha continuato a limare la sua idea di software che automatizza ciò che gli umani sanno verificare. Il ragionamento è semplice e ha una conseguenza enorme: se la risposta giusta la puoi controllare — con un test, con un punteggio, con una prova formale — allora la macchina può imparare a darla. Se invece non sai dire quando è giusta, la macchina non può aiutarti granché. La verificabilità diventa il confine di cosa si automatizza e cosa no. Ed è esattamente lo stesso confine che disegnava Willison parlando di specifica.

Tra le cose che ha pubblicato nei mesi scorsi ce n'è una che resta in mente: uno strumento di poche centinaia di righe che fa lavorare un agente in autonomia per migliorare un addestramento. In un paio di giorni, da solo, ha trovato una ventina di accorgimenti e tagliato di circa un decimo il tempo di lavoro su un test classico. Un assaggio, piccolo e concreto, di quella ricerca che si accelera da sola di cui parlano in molti, con un misto di entusiasmo e di inquietudine.

---

Spostiamoci dall'altra parte del mondo, a Pechino, dove la stessa partita si gioca con un'altra posta: non come si costruisce un modello, ma chi lo tiene in mano.

Liang Wenfeng guida DeepSeek, il laboratorio cinese che in un anno è passato da sorpresa a protagonista. Fino a poco fa era un caso quasi unico: si autofinanziava grazie a un fondo d'investimento di proprietà, e Liang aveva sempre rifiutato capitali esterni per non perdere l'indipendenza della ricerca. Il 16 giugno quella linea si è incrinata: DeepSeek ha chiuso il suo primo giro di finanziamento, qualcosa come sette miliardi e mezzo di dollari, con una valutazione che sfiora i sessanta.

Ma il numero non è la notizia. La notizia è come è stato costruito il giro. Liang ha messo di tasca propria quasi metà della somma, restando il singolo investitore più grande. Gli altri — colossi come Tencent, come il produttore di batterie CATL — sono entrati senza diritto di voto e con i soldi bloccati per cinque anni. Mettono l'oro, ma le chiavi restano a lui. È il vecchio mestiere del mercante che accetta i finanziatori a patto che non comandino, lo stesso istinto che spinse certi fondatori del secolo scorso a quotare l'azienda tenendosi però il pacchetto che decide.

C'è una sola eccezione, e dice molto: un fondo statale cinese è entrato con diritti pieni, voto e niente vincoli. Il capitale privato resta muto, lo Stato no. È la fotografia di come funziona oggi il potere sull'intelligenza artificiale in Cina.

Questo è il terzo emergente di oggi, e lega Liang a personaggi lontanissimi da lui. Vitalik Buterin, nel mondo delle criptovalute, ha appena tagliato del quaranta per cento il budget della sua fondazione per renderla più sobria e duratura. Jack Clark, da Anthropic, confessa di temere di perdere il controllo dei tempi, di una corsa che va più veloce di chi dovrebbe governarla. Sono gesti diversi, ma raccontano la stessa cosa: l'autorità sull'intelligenza artificiale non si concentra in poche mani, si sparpaglia. Ognuno cerca di tenere stretto il suo pezzo. E nessuno, oggi, è davvero sicuro di poter verificare dove sta andando la cosa che ha in mano.

---

Qualche progetto da osservare, sotto la superficie dei grandi nomi.

Nanochat, di Karpathy, continua a crescere settimana dopo settimana: è un modello linguistico minuscolo, fatto apposta per essere capito riga per riga. Serve a chi vuole vedere come funziona davvero la macchina, smontandola sul tavolo come un orologio. Vicino a lui cresce ancora autoresearch, lo strumento che fa fare esperimenti a un agente in autonomia — esattamente quella ricerca che si accelera da sola di cui si parlava prima.

Resta in tendenza llama.cpp, il progetto che permette di far girare modelli potenti su un computer normale, senza data center: da una parte fabbriche di calcolo grandi come città, dall'altra qualcuno che fa girare tutto sul portatile in cucina. E nello stesso spirito tiene bene anche llm, lo strumento di Simon Willison per parlare con i modelli dalla riga di comando, mescolando senza fatica servizi a pagamento e modelli che ti tieni in casa.

Continua a salire ARC-AGI, l'insieme di test ideato da François Chollet per misurare non quanto un modello sa, ma quanto sa ragionare su cose mai viste. Curioso che proprio questo banco di prova cresca adesso, mentre tutti tornano a dire che la vera sfida è ragionare, non ricordare.

E sul fronte di chi smanetta per gusto, resta saldo Omarchy, il sistema Linux curato da David Heinemeier Hansson, e cresce di pari passo Obsidian, lo strumento per prendere appunti e collegarli tra loro. Due cose lontane dal clamore dei miliardi, che però raccontano un desiderio preciso: tenersi i propri strumenti in mano, semplici e propri, mentre tutto intorno diventa enorme e lontano.

---

Resta l'immagine di partenza: gli uomini che hanno costruito l'autostrada, fermi sul ciglio a dire che finisce qui. Non è una brutta notizia, e nemmeno una bella. È il momento in cui una tecnologia smette di credere alla propria leggenda e torna a fare domande. Chi le farà meglio, e saprà controllare le risposte, deciderà i prossimi anni. È stato Signal Brief. Alla prossima.
