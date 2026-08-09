# Chi giudica, comanda

> La verificabilità smette di essere un principio e diventa un pezzo di infrastruttura. E intorno a quel pezzo si sta decidendo chi tiene il volante dell'AI.

---

Il 28 luglio 2026, e questa puntata di Signal Brief comincia da una parola che fino a ieri sembrava tecnica e neutrale: verifica.

Ieri l'avevamo incontrata come confine. Il limite oltre il quale l'automazione non passa. Da qualche giorno, invece, sta diventando qualcos'altro. Un oggetto. Una cosa che si costruisce, si compra, si possiede.

E quando una regola diventa un oggetto, cambia chi la controlla.

Nel giro di due settimane quattro persone che non si parlano hanno cominciato a costruire lo stesso pezzo di macchina. Da direzioni completamente diverse.

---

Cominciamo da un numero che sembra una spesa folle e invece è la notizia: centosessantacinquemila dollari.

È quanto è costato, in token, riscrivere Bun — un pezzo di infrastruttura software che milioni di sviluppatori usano ogni giorno — passando da un linguaggio di programmazione a un altro. Undici giorni. Agenti che lavoravano in parallelo, coordinati. Simon Willison lo racconta sul suo blog con l'attenzione di chi guarda un cantiere, non una demo.

Ma il dettaglio su cui si ferma non è il costo, e non è la velocità. È un altro numero: un milione di controlli automatici. Una conformance suite, la chiamano — in pratica un milione di piccole domande poste al codice per verificare che dopo la riscrittura si comporti esattamente come prima. Willison lo dice senza enfasi: non è il modello ad aver reso possibile tutto questo. È quel milione di controlli.

Ecco lo spostamento della settimana. Ieri dicevamo che il collo di bottiglia si era spostato dalla generazione al giudizio — Karpathy come legge, Willison dal cantiere, Buterin dalle prove matematiche, Bengio dalla sicurezza. Quattro strade, una casa. Adesso quella casa ha delle fondamenta di cemento: il giudice non è più un principio, è un componente. Si costruisce, si mantiene, ha un costo, e chi lo possiede decide cosa può essere automatizzato e cosa no.

Questa cosa è già successa. All'inizio del Novecento, nelle fabbriche americane, chi produceva bulloni scoprì che il problema non era produrne di più: era che il bullone di Detroit non entrava nel dado di Chicago. La partita industriale, per vent'anni, non si giocò sulle macchine utensili ma sugli standard di misura — chi definiva il calibro definiva il mercato. Il calibro sembrava una faccenda da tecnici. Era una faccenda di potere.

Siamo esattamente lì. E infatti, mentre Willison misura i suoi controlli, il discorso pubblico sull'AI sta scivolando verso la stessa domanda da un'altra porta.

Sam Altman, in un podcast del 26 luglio, ha detto una frase che un anno fa avrebbe collocato nel 2030: siamo già dentro la singolarità. Non "arriverà" — è già successa, l'abbiamo attraversata senza accorgercene. E Patrick Collison, che di mestiere guarda i pagamenti di milioni di aziende attraverso Stripe, prova a darle un numero: il primo trimestre del 2026, dice, potrebbe essere ricordato come il primo trimestre della singolarità. Non è filosofia, è un grafico di spesa.

Dall'altra parte François Chollet continua a mostrare che sui test dove bisogna davvero ricombinare idee mai viste insieme i modelli fanno zero per cento. Zero. E Yann LeCun ripete che manca l'architettura, non la scala.

La cosa più interessante per me è che hanno ragione tutti e due. Un sistema può aver superato l'intelligenza umana dove esiste un giudice automatico — la matematica, il codice, i pagamenti — e restare cieco dove quel giudice non c'è. Non è una contraddizione. È la forma stessa di questa tecnologia: bravissima dove qualcuno ha costruito il calibro, goffa dove il calibro manca.

E qui la questione smette di essere tecnica. Perché se il calibro decide dove l'intelligenza cresce, allora chi costruisce i calibri sta disegnando la mappa del prossimo decennio.

---

Yoshua Bengio è uno dei tre uomini a cui si deve, in buona parte, l'esistenza dell'AI moderna. Da qualche anno passa il tempo a preoccuparsene.

Il 2 luglio ha pubblicato un paper con un titolo che sembra un koan: sicurezza dall'onestà, in un sistema disinteressato. Dietro il titolo c'è un'idea semplice e piuttosto radicale. Bengio sostiene che un sistema addestrato a imitare gli esseri umani e a ottenere risultati sviluppa obiettivi propri anche se nessuno glieli ha dati. Non per malizia — per costruzione. Se ti alleno a riuscire, imparo a volere.

La sua contromossa non è un guardrail messo sopra. È un'architettura diversa: un sistema che non agisce e non vuole niente. Fa una cosa sola — dice quanto è probabile che il mondo sia in un certo modo. Un osservatore senza mani. Bengio lo chiama predittore disinteressato, e l'idea è che la sicurezza nasca dal fatto che non ha nulla da guadagnare mentendo.

Fermiamoci un attimo su cosa è appena successo qui. Bengio non ha proposto una regola, una moratoria o un trattato. Ha proposto un pezzo. Un componente da mettere accanto agli altri, che fa il lavoro di giudicare mentre qualcun altro fa il lavoro di agire. È esattamente la stessa mossa di Willison con il suo milione di controlli, tradotta dal linguaggio del cantiere a quello della sicurezza. Il verificatore diventa hardware concettuale.

Il 17 luglio, in collegamento con Shanghai, ha aggiunto due immagini che vale la pena tenere. Prima: l'AI abbassa la soglia per fare del male e alza il tetto del danno possibile. Due curve che si muovono insieme, verso l'alto e verso il basso, e in mezzo si allarga uno spazio. Seconda: sui modelli rilasciati apertamente in ambiti delicati — armi, attacchi informatici — dice che una volta usciti il processo è irreversibile. Nessun richiamo, come per le automobili. Non si può richiamare un file.

Quello che mi resta di Bengio in questa fase è il tono. Non è un allarmista, e ha smesso da tempo di scrivere appelli. Sta facendo la cosa più noiosa e più seria che un ricercatore possa fare quando ha paura: prova a costruire lo strumento che gli darebbe torto.

---

Mira Murati ha guidato per anni la tecnologia di OpenAI. Poi se n'è andata, ha fondato un laboratorio, e per mesi non ha detto praticamente nulla.

Il 10 luglio ha rotto il silenzio con un saggio. Il titolo — il futuro che vale la pena costruire è umano — suona come un manifesto un po' generico, e invece dentro c'è l'argomento più affilato della settimana.

Murati riprende un'idea di Friedrich Hayek, economista austriaco, formulata nel 1945 in un articolo su come la società usa la conoscenza. La tesi di Hayek era questa: la conoscenza che serve a far funzionare l'economia non sta da nessuna parte in forma completa. È sparsa in milioni di teste, è locale, e soprattutto è in gran parte tacita — l'artigiano sa fare la cosa ma non saprebbe scriverla in un manuale. Da qui la sua conclusione contro la pianificazione centralizzata: non è che i pianificatori siano stupidi o cattivi, è che quella conoscenza non arriva mai alla loro scrivania. Non può.

Murati applica lo stesso ragionamento all'intelligenza artificiale. Se il sapere produttivo è disperso e tacito, allora un unico modello onnisciente non è solo politicamente discutibile — è strutturalmente cieco. Il futuro desiderabile, scrive, ha molte AI, cresciute in contesti diversi, plasmate dalle persone che servono.

Vale la pena misurare quanto questa posizione sia scomoda. Nel 1945 Hayek scriveva contro l'entusiasmo per la pianificazione economica, in un momento in cui la pianificazione sembrava a molti la forma naturale della modernità. Murati scrive contro la corsa alla scala, in un momento in cui la corsa alla scala sembra la forma naturale del progresso. Nello stesso mese in cui Elon Musk, alla chiamata sui risultati Tesla, non smentisce una possibile fusione con SpaceX — dopo aver già sciolto xAI dentro SpaceX — e disegna un'unica azienda verticale che va dal chip alla macchina. E nello stesso mese in cui Jensen Huang non vende più schede grafiche ma fabbriche intere, con un ordinato da mille miliardi di dollari.

Da una parte chi costruisce cattedrali. Dall'altra chi dice che la conoscenza non entra in una cattedrale.

Non è la prima volta che questa partita si gioca. È la stessa forma del conflitto tra i grandi mainframe e i personal computer, tra le reti proprietarie e internet. Storicamente ha quasi sempre vinto la dispersione — ma sempre con vent'anni di ritardo rispetto a chi l'aveva annunciata.

---

Torniamo un attimo sul filo di oggi, che è facile perdere tra i nomi. Un'idea sola: il giudizio è diventato un oggetto. E ogni volta che un giudizio diventa un oggetto, qualcuno se ne intesta la proprietà. Willison lo costruisce nel codice, Bengio nella sicurezza, Murati sostiene che vada disperso e non concentrato. Restano due domande: chi lo tiene, e chi decide le regole.

Su questa seconda domanda, questa settimana, si è aperta la crepa più netta.

Demis Hassabis ha pubblicato il 14 luglio un saggio che è il documento più politico che abbia mai firmato: chiede un organismo di vigilanza globale sull'AI entro fine anno, finanziato dall'industria ma rispondente al governo americano. Chi conosce Hassabis sa quanto sia un cambio di rotta — per anni ha parlato di cooperazione internazionale sul modello del CERN. Adesso sceglie una bandiera.

Dario Amodei arriva più a fondo. Chiede che i governi abbiano il potere legale di bloccare il rilascio di un modello giudicato pericoloso, sulla base di controlli indipendenti fatti prima della pubblicazione. Il suo compreso. È l'evoluzione di cui parlavamo ieri, portata a termine: qualche mese fa Amodei osservava che il progresso era frenato dalle istituzioni, oggi chiede alle istituzioni un veto sul proprio prodotto. Dall'osservare il limite al costruirlo.

E poi c'è Andrew Ng, che rovescia il tavolo. La sua posizione è che il discorso sulla sicurezza sia spesso interessato: non una discussione sui rischi, ma uno strumento per concentrare il controllo in poche mani — quelle che possono permettersi di rispettare le regole che stanno scrivendo.

Vale la pena tenere insieme le due cose che ho appena detto, perché è raro che siano vere contemporaneamente. Geoffrey Hinton sostiene che nessun laboratorio può auto-limitarsi senza tradire i propri azionisti — la sua immagine è quella di un'auto velocissima senza volante, e la regola è il volante, non il freno. Ng sostiene che chi chiede il volante lo vuole in mano propria. Entrambe le cose possono essere vere, ed è questo che rende il momento politicamente illeggibile.

Il punto è che non stiamo assistendo a un dibattito sui fatti. Tutti i protagonisti sono d'accordo su cosa sanno fare i modelli. Litigano su chi tiene il volante. E quella lite, come ogni lite di questo tipo nella storia industriale, si deciderà su chi controlla lo strumento di misura.

---

C'è un ultimo personaggio che vale la pena portare dentro il racconto, perché sta rispondendo alla stessa domanda con un metodo opposto a tutti gli altri.

Jack Dorsey ha fondato Twitter, poi l'ha lasciato, e da anni costruisce cose che sembrano deliberatamente antipatiche al mercato. Il 24 luglio ha commentato su X un fatto piccolo e molto istruttivo: il regolatore indiano ha ordinato a GitHub di rimuovere Bitchat, la sua app di messaggistica che funziona via Bluetooth, da telefono a telefono, senza server e senza account. Il commento di Dorsey è di sei parole scarse: al governo indiano non piacciono tecnologie come Bitchat e la vuole giù.

Il contesto rende la cosa interessante. A Delhi i manifestanti la usano durante i blocchi di internet — è il primo test vero della tesi che l'app incarna. Se non c'è un server, non c'è una leva. Al massimo puoi colpire la distribuzione: l'app store, il repository. Che è esattamente quello che è successo. La censura, non trovando il centro, ha colpito la porta d'ingresso.

Tre giorni prima Dorsey aveva presentato Buzz, una specie di ufficio digitale condiviso — l'equivalente di Slack, per intenderci — costruito però su un protocollo aperto che nessuno possiede. La novità non è tecnica. È che dentro quello spazio gli agenti AI sono membri, non strumenti collegati da fuori. E l'insistenza di Dorsey sul fatto che sia indipendente da qualunque modello è una forma di sovranità: nessun lock-in su un singolo laboratorio.

Questa è la variante più concreta dell'argomento di Murati. Lei dice che l'intelligenza deve essere dispersa perché la conoscenza lo è. Dorsey non discute: costruisce cose che non hanno un centro da spegnere, e poi aspetta che qualcuno provi a spegnerle per vedere se la tesi regge.

È il vecchio principio delle infrastrutture: la resistenza non si dichiara, si collauda. E in India, questo mese, il collaudo è cominciato.

---

Progetti da osservare. Questa settimana nessuna novità assoluta, ma un elenco che continua a crescere — e che, letto tutto insieme, racconta la stessa storia dei capitoli precedenti.

nanochat, di Andrej Karpathy: in crescita continua. È un modello linguistico completo, addestrabile da zero, tenuto piccolo apposta perché una persona sola possa capirlo tutto. Il contrario delle fabbriche di calcolo di cui parlavamo prima.

llm-wiki, sempre di Karpathy: in crescita continua. E autoresearch, stesso autore, stessa tendenza.

llama.cpp, di Georgi Gerganov: in crescita continua. È il progetto che ha reso normale far girare un modello sul proprio computer, senza chiedere permesso a nessuno.

llm, di Simon Willison: in crescita continua. Uno strumento da riga di comando per parlare con i modelli — qualunque modello. Model-agnostic, la stessa parola che usa Dorsey.

ARC-AGI, di François Chollet: in crescita continua. È il test dove i modelli fanno zero per cento. Un calibro costruito apposta per misurare quello che ancora non sanno fare.

E poi Obsidian, omarchy, Hyprland, claude-context, superpowers, GOModel — tutti in crescita continua.

Guardate la lista: sono quasi tutti strumenti che una persona può tenere in mano da sola. Piccoli, ispezionabili, indipendenti. Mentre il discorso pubblico parla di fusioni fra imperi e di ordinativi da mille miliardi, la parte del mondo che scrive codice continua a votare, ogni giorno, per il laptop.

---

Resta quel milione di controlli automatici. Undici giorni di lavoro e centosessantacinquemila dollari di token, e la cosa che ha reso tutto possibile era la parte meno spettacolare: il pezzo di software che diceva sì o no.

Chi scrive quel sì o no non fa un lavoro tecnico. Sta decidendo dove l'intelligenza può crescere.

È stato Signal Brief. Alla prossima.
