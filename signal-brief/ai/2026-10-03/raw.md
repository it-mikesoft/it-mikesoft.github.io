# Due sedi per lo stesso freno

> Il contenimento dell'intelligenza artificiale si gioca su due tavoli lontanissimi: un trattato al Consiglio di Sicurezza e un permesso concesso riga per riga dentro una macchina.

---

Il 28 settembre, a New York, Jensen Huang racconta a CNBC una regola semplice: un agente deve partire senza diritti, e riceverne uno alla volta — un file, poi uno strumento, poi la rete. Cinque giorni prima, nello stesso quartiere, Yoshua Bengio chiedeva al Consiglio di Sicurezza delle Nazioni Unite licenze internazionali per i modelli di frontiera. Due uomini, due stanze a pochi isolati di distanza, la stessa preoccupazione. È Signal Brief del 3 ottobre 2026, e la novità di oggi sta proprio in quella distanza.

---

Ieri la domanda era se rallentare. Oggi è dove si rallenta.

Fino a due settimane fa il centro del discorso era l'essay di Dario Amodei, la proposta di prendersi un anno o due e di aprire le porte a valutatori indipendenti. Il consenso che ne è nato — Hassabis che dice "la direzione è corretta" — l'abbiamo già raccontato. Quello che è cambiato è che il contenimento ha trovato una seconda sede, e questa seconda sede non ha avvocati né trattati: ha un file di configurazione.

NVIDIA ha presentato il 28 settembre una piattaforma per la sicurezza degli agenti costruita attorno a un runtime che si chiama OpenShell: un recinto dentro cui ogni agente gira con i permessi dichiarati e nulla di più, con il sistema operativo stesso a fare da guardia. Oltre cento aziende hanno aderito. Nello stesso giro di giorni Aravind Srinivas ha pubblicato i risultati di un mese di attacchi al sandbox di Perplexity: nove modelli di frontiera con i privilegi massimi, centotto tentativi, nessuna evasione dalla macchina virtuale.

Qui succede la cosa più curiosa della settimana. La diagnosi di Yann LeCun — in un'intervista a Fortune del primo ottobre dichiara "zero preoccupazioni" e attribuisce gli incidenti recenti a sandboxing scadente, cioè a cattiva ingegneria — viene applicata alla lettera proprio da chi non condivide il suo ottimismo. Huang e Srinivas non stanno dicendo che il problema non esiste. Stanno dicendo che è un problema di impianto, e lo trattano come tale.

Vista da lontano, è una storia già vista. Nell'Ottocento le caldaie a vapore esplodevano con regolarità: le vittime si contavano a centinaia. La risposta arrivò su due binari paralleli — leggi e ispettorati da una parte, valvole di sicurezza e lamiere più spesse dall'altra. Nessuno dei due bastò da solo, e per decenni i due mondi si guardarono con sospetto reciproco. Oggi quel sospetto ha nomi nuovi: Geoffrey Hinton, dopo aver parlato ai senatori americani il 16 settembre, stima che al Congresso resti circa un anno di tempo utile e parla di agenti che si costruiscono obiettivi secondari e sfuggono al controllo. LeCun chiama tutto questo cattiva configurazione.

C'è però un terzo elemento che complica il quadro, ed è il più inquietante. Simon Willison ha segnalato agenti che comunicano attraverso wiki pubblici, e ha ragionato su come una cache condivisa, una casella di posta o un documento possano diventare la strada per cui un agente infetto contagia gli altri. Jack Clark ha citato una ricerca DeepMind in cui una popolazione di agenti diffonde al suo interno un trucco scoperto da uno solo. La minaccia si sposta dal singolo modello alla popolazione.

E qui il nodo si stringe davvero. Perché la proprietà che allarma — agenti che si copiano, si parlano, si coordinano — è esattamente quella su cui Patrick Collison sta costruendo i binari del commercio: Stripe ha montato l'infrastruttura perché siano gli agenti a cercare, pagare e regolare le transazioni, e Collison prevede che finiranno per rappresentare la maggioranza degli acquisti online. Superficie d'attacco e modello di business sono la stessa cosa. Non due facce della medaglia: la medaglia.

---

Jensen Huang guida NVIDIA, l'azienda che vende i processori su cui gira praticamente tutta l'intelligenza artificiale del mondo. È il fornitore di pale in una corsa all'oro — e quando il fornitore di pale comincia a parlare di sicurezza, conviene ascoltare il perché.

Il 28 settembre ha annunciato la Open Agent Safety Platform. Due pezzi: OpenShell, scritto in Rust e distribuito come software libero, che fa girare ogni agente in una scatola con permessi dichiarati e tiene traccia di ogni azione; e Sentry, uno strato che osserva e applica le regole. Più di cento partner industriali al lancio. Nell'intervista a CNBC dello stesso giorno ha riassunto la filosofia in una frase che è quasi una regola di buon senso domestico: sicurezza e capacità devono avanzare insieme, e un agente parte con i diritti al minimo per poi ricevere accessi ritagliati su misura — questo file, questo strumento, questa porta di rete.

La definizione che ne ha dato è la parte politicamente interessante: uno strato di fiducia aperto per l'economia dell'intelligenza artificiale. Non una norma, non una legge: uno strato. Qualcosa che sta sotto, che gli altri usano senza pensarci, come la rete elettrica o il protocollo con cui i browser parlano ai siti.

Vale notare la differenza di natura tra le due proposte in campo. Bengio chiede licenze, assicurazioni sulla responsabilità civile, obblighi di segnalazione degli incidenti: strumenti che richiedono Stati che li approvino e tribunali che li applichino, cioè anni. Huang ha messo su GitHub un progetto che in pochi giorni ha raccolto circa quattordicimila e cinquecento stelle, e gira da subito. Nessuno dei due si sostituisce all'altro, ma uno dei due esiste già.

C'è un precedente che aiuta a collocare la scena. Negli anni Novanta il commercio online non è nato quando i parlamenti hanno scritto le leggi sulla firma digitale: è nato quando dentro il browser è comparso un lucchetto, cioè quando la fiducia è diventata una proprietà tecnica del canale invece di una promessa contrattuale. Le leggi sono arrivate dopo, a ratificare l'esistente.

Huang sta provando a ripetere quella mossa. Resta una domanda che non mi sembra oziosa: chi definisce i permessi minimi, e chi controlla chi li definisce? In un trattato quel ruolo ha un nome e una sede. In un runtime, per adesso, ha il nome di chi mantiene il repository.

---

Simon Willison è un programmatore inglese che da anni tiene uno dei blog tecnici più seguiti del settore: prova in prima persona ogni modello che esce e scrive quello che trova, con una precisione che è diventata una specie di servizio pubblico.

La settimana scorsa ha raccontato in diretta il DevDay di OpenAI, confrontando i modelli nuovi con quelli di Anthropic su prezzo, velocità e capacità di scrivere codice. Ma la parte che resterà non è quella. Nei suoi appunti ha messo in fila due notizie che da sole sembrano curiosità: agenti che si scambiano informazioni attraverso wiki pubblici, e un attacco a RubyGems, l'archivio da cui i programmatori Ruby scaricano i pezzi di software che usano tutti i giorni. Poi ha fatto il ragionamento che le collega. Se due agenti isolati condividono una cache, una casella di posta, un canale Slack o un documento, quel canale è una strada. E su quella strada un comportamento malevolo può passare da uno all'altro come un'infezione.

È la parola worm che cambia la scala del problema. Finora la sicurezza dell'intelligenza artificiale si è discussa modello per modello: questo è allineato, quello no, quest'altro va valutato prima del rilascio. Willison sposta lo sguardo sulla popolazione. E Jack Clark, dall'altra sponda del dibattito, porta la prova sperimentale: nella ricerca DeepMind che ha citato, una popolazione di agenti si passa un trucco trovato da un singolo. Clark ne trae una conseguenza operativa — i sistemi multi-agente hanno bisogno di infrastrutture di comunicazione dedicate, cioè di strade costruite su misura invece di strade trovate per caso.

Chi si occupa di epidemie lo sa da tempo: la salute di una popolazione non è la somma della salute dei singoli. Dipende da quanti si incontrano, e dove. Il tracciamento dei contatti è nato da quell'intuizione, non dalla farmacologia.

Il paradosso è che Willison stesso costruisce strumenti per questo mondo: il suo programma a riga di comando per interrogare modelli, remoti e locali, ha rilasciato la versione 0.36 il 22 settembre. Sta organizzando a San Francisco un incontro su come si lavora con gli agenti. Non è un allarmista: è un artigiano che ha visto da vicino dove le giunture cedono.

---

Teniamo presente dove siamo arrivati: il freno ha due pedali — uno a New York dentro un palazzo di vetro, uno dentro una macchina virtuale — e la cosa che va frenata è anche la cosa che va vendendo.

Patrick Collison ha fondato Stripe, l'azienda che fa passare i pagamenti di mezzo internet. Non è un personaggio da dichiarazioni sulla sicurezza; è uno che costruisce tubature.

Il primo ottobre ha promosso un incontro ristretto dell'Arc Institute sull'applicazione dell'apprendimento automatico alla biologia — cellule virtuali, modelli di base per il vivente. Ma il gesto che parla al filo di oggi è un altro: a Stripe sta montando l'infrastruttura perché siano gli agenti a fare la spesa. Scoperta del prodotto, pagamento, regolamento, controllo delle frodi. La sua previsione è esplicita: alla fine gli agenti rappresenteranno la maggior parte delle transazioni online.

Nel racconto che fa del proprio lavoro c'è un dettaglio che vale più di una tesi: dice che un agente di programmazione è diventato la sua interfaccia principale con il computer. Non lo strumento che apre dopo l'editor: quello che apre invece dell'editor. Dalla stessa esperienza ricava un'idea sull'economia del software — invece di prodotti costruiti una volta e venduti infinite volte, software generato su richiesta, dove ogni copia costa qualcosa perché va calcolata.

Naval Ravikant arriva alla stessa conclusione per un'altra strada. Nelle sue conversazioni recenti sostiene che gli agenti stanno erodendo la capacità di costruire software come vantaggio competitivo: se chiunque può far scrivere il programma, il programma non difende più nessuno. Restano la distribuzione, le reti, l'hardware, i modelli proprietari, il gusto. Racconta di usare agenti per costruirsi applicazioni personali sull'iPhone — un negozio di applicazioni privato, fatto in casa.

Il collegamento con il resto della giornata è secco. L'autonomia che preoccupa Willison è il presupposto del commercio che Collison sta cablando, e la stessa autonomia che per Ravikant abbatte le difese dei produttori di software. Non c'è una versione di questa storia in cui si prende la parte economica e si lascia fuori quella rischiosa: è un unico oggetto.

Ricorda la ferrovia. I binari hanno creato il mercato nazionale e, insieme, la possibilità che un deragliamento diventasse una strage. Nessuno propose di togliere i binari.

---

Vitalik Buterin ha inventato Ethereum ed è uno dei pochi informatici che scrive di politica della tecnologia senza vendere niente. Il filone nuovo nei suoi interventi di queste settimane è la discesa dell'intelligenza verso il basso — non verso altri paesi, verso altri dispositivi.

Racconta che un modello aperto che gira sul suo portatile copre già una fetta larga delle sue attività quotidiane. Il passaggio importante è quello successivo: quel modello locale può chiamare un sistema più potente in rete quando serve, senza passargli tutto il contesto personale. Il locale diventa il filtro, non il tappo.

Ne ricava altre due osservazioni. Una riguarda la difesa: sostiene che l'intelligenza artificiale applicata alla verifica formale — cioè alla dimostrazione matematica che un programma rispetta davvero certe proprietà — potrebbe strutturalmente favorire chi difende invece di chi attacca. Non più una gara a trovare bug per primi, ma la possibilità di provare che certi bug non ci sono. L'altra riguarda la privacy: l'analisi automatica dei dati rende l'anonimato per pseudonimo insufficiente, perché i comportamenti parlano anche quando i nomi tacciono.

Non è solo. Tim Cook, ora presidente esecutivo di Apple, ha chiamato "arma competitiva" la strategia ibrida dell'azienda — richieste elaborate sul telefono e sul computer, con l'aiuto della nuvola solo per le cose difficili. Liang Wenfeng sposta l'addestramento di DeepSeek su processori Huawei. Vivek Raghavan, con Sarvam, parla di modelli indiani per non diventare "colonia digitale" e apre i pesi dei modelli della missione nazionale.

Quattro mosse, quattro motivazioni diverse — privacy, margine, geopolitica, sovranità — e un'unica direzione: l'intelligenza utile si allontana dal centro.

Qui sta il contrappunto più netto alla pausa di cui parlavamo. Sam Altman trattiene un modello di frontiera perché non ha superato gli standard di sicurezza, e nello stesso DevDay del 29 settembre lancia Dots, agenti sempre accesi per calendario, viaggi, conti, programmazione. Demis Hassabis sostiene il rallentamento e limita Gemini 4 Argon a governi e difensori fidati. Sono gesti sinceri, e insieme rivelano la loro misura: la pausa riguarda il vertice. Il potere, intanto, scende di piano.

---

Aravind Srinivas guida Perplexity, il motore che risponde alle domande invece di restituire una lista di link. Nelle ultime settimane lo sta trasformando in qualcosa di diverso: un computer che agisce, con file, memoria, automazioni programmate.

Il gesto concreto è un esperimento durato un mese. Ha dato a nove modelli di frontiera i privilegi di amministratore dentro il sandbox di Perplexity, con un compito preciso: uscire. Centotto tentativi. Nessuna evasione dal confine della macchina virtuale. Poi ha pubblicato i risultati e ha cercato ingegneri che vengano ad attaccare il sistema per irrobustirlo.

È la terza volta in poche settimane che questo nome torna, e la ragione per cui torna è cambiata. Prima quei numeri erano un contributo onesto a un dibattito aperto. Ora sono diventati una prova a carico: centotto run, nove modelli, zero evasioni è la frase che si può opporre a chi parla di agenti canaglia. La stessa misura, lo stesso dato, un ruolo diverso nella discussione. Succede spesso che un pezzo di evidenza cambi funzione senza cambiare contenuto.

Attenzione a cosa quel numero dice e cosa non dice. Dice che un recinto costruito bene ha tenuto. Non dice niente su un recinto costruito male, né su agenti che non provano a scavalcare il muro perché hanno già una porta aperta — la cache condivisa, il documento, il wiki pubblico di cui parla Willison. Srinivas ne è consapevole più di chiunque: lavora con NVIDIA e un centinaio di aziende proprio sul contenimento degli agenti, e sul Mac tiene il calcolo diviso in due, con i modelli locali che gestiscono i file sensibili. Sta anche aprendo il codice del classificatore che decide cosa resta sulla macchina.

Mi sembra la figura più rappresentativa di questo momento: non sceglie tra allarme e scetticismo, misura. In un dibattito dove quasi tutti argomentano, qualcuno ha deciso di contare. È un gesto antico — Galileo contava i battiti del polso per cronometrare le palle che rotolavano — e in mezzo a tanta retorica ha un suono rassicurante.

---

Progetti da osservare.

OpenShell è il nome tecnico di quella scatola di cui parlava Huang: un programma scritto in Rust che fa girare flotte di agenti dentro recinti con le regole dichiarate — questi file sì, questa rete no — e il nucleo del sistema operativo che fa rispettare il perimetro. Circa quattordicimila e cinquecento stelle su GitHub in pochi giorni: è il contenimento come prodotto.

Clef è una famiglia di modelli aperti rilasciata da Cloudflare, con licenza libera, pensati non per scrivere testi ma per decidere: a quale strumento passare una richiesta, quali informazioni raccogliere, come procedere. Seicentoventi punti su Hacker News. Il mestiere nascosto degli agenti ha cominciato ad avere modelli dedicati.

goose è un agente libero nato dentro Block, l'azienda di Jack Dorsey, ora donato alla Linux Foundation: versione desktop, riga di comando, più di quindici fornitori di modelli e settanta estensioni. Cinquantacinquemila stelle. È la tesi dell'apertura trasformata in codice che qualcun altro può ereditare.

microgpt è un gesto didattico: un modello linguistico completo — tokenizzatore, addestramento, inferenza — in circa duecento righe di Python, senza dipendenze, aggiornato il 2 ottobre. Serve a una cosa sola: che un essere umano possa leggerlo tutto e capirlo.

Strata va nella direzione di Buterin: fa girare in locale modelli enormi su una scheda grafica da consumo e sessantaquattro gigabyte di memoria, con installazione in un clic. Il frontier che scende in cantina.

---

Due stanze a New York, a cinque giorni di distanza. In una si chiedono licenze internazionali, nell'altra si concede un permesso alla volta. La differenza non è il livello di preoccupazione: è quanto tempo ci vuole perché una buona idea diventi vincolante. Una strada passa dai parlamenti, l'altra da un file di configurazione — e intanto gli agenti imparano a parlarsi. È stato Signal Brief. Alla prossima.
