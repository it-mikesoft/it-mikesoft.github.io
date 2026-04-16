# Musica Podcast — Prompt per Suno.com

Sottofondo per episodi da ~20 minuti. Due famiglie di stili disponibili per ogni mood:
- **Stile A — Energetico**: techno, IDM, synthwave, broadcast. Più elettronico e ritmato.
- **Stile B — Soft/Narrativo**: acustico, ambient, jazz. Caldo, contemplativo, mai urgente.

Lo script `generate-podcast.sh` ruota tra TUTTE le varianti (`bg-tech.mp3`, `bg-tech1.mp3`, ...) indipendentemente dallo stile, quindi puoi mescolare A e B nella stessa pool.

## Regole generali

1. **Più varianti per ogni mood** — lo script ruota automaticamente.
2. Ogni traccia almeno **2 minuti** (Custom Mode) con sezioni interne.
3. Tutte **strumentali**, nessuna voce.
4. Volume in produzione: -22dB sotto la voce (`musicVolume: 0.08`).

## Workflow Suno

- **Custom Mode** → "Instrumental" ON.
- **Style**: copia il blocco STYLE.
- **Lyrics/Description**: copia il blocco STRUCTURE.
- Genera 2-3 varianti per stile, scegli le migliori, rinomina.

---

# INTRO — sigla iniziale (15 secondi)

### intro — stile A "cinematic tech"
**STYLE:** cinematic tech podcast intro, hybrid orchestral electronic, rising synth arpeggios over pulsing 4-on-the-floor sub bass, glitchy percussion fills, bright filtered saw lead, confident futuristic news-broadcast vibe, BPM 124, analog warmth, side-chain pumping, builds tension then resolves on a clean stinger, mastered loud, no vocals

**STRUCTURE:** 0-4s ambient pad swell with reversed cymbal, 4-10s arpeggio enters and builds with rising filter sweep and snare roll, 10-13s drop with full kick-bass-arpeggio combo, 13-15s clean tonic stinger with reverb tail, instrumental only

### intro — stile B "libro che si apre"
**STYLE:** warm acoustic podcast intro, gentle nylon guitar arpeggio, soft felt piano chord, subtle string swell, intimate studio recording feel, like opening a favourite book, BPM 80, Nils Frahm meets Khruangbin, analog tape warmth, no drums no percussion, no vocals, no tension

**STRUCTURE:** 0-5s solo nylon guitar arpeggio with room reverb, 5-10s felt piano joins with a simple chord progression, 10-13s strings swell gently underneath, 13-15s everything resolves on a warm tonic with long reverb tail, instrumental only

---

# OUTRO — chiusura (20 secondi)

### outro — stile A "emotional ambient"
**STYLE:** emotional ambient outro, warm felt piano with tape hiss, lush analog string section, soft Rhodes electric piano, slow swelling pads, hopeful melancholic resolution, sparse soft kick at half time, BPM 70, vinyl crackle texture, cinematic Olafur Arnalds meets Nils Frahm, gentle reverb tail, no vocals

**STRUCTURE:** 0-6s solo felt piano motif with rubato, 6-12s strings enter and harmonize underneath, 12-18s Rhodes layer adds counter-melody, 18-20s long fadeout with reverb tail, instrumental only

### outro — stile B "giornata che finisce"
**STYLE:** intimate ambient piano outro, solo felt piano, gentle tape hiss, distant field recordings of birds or rain, sense of a day ending peacefully, Ryuichi Sakamoto meets Hania Rani, rubato timing, BPM free, fading to silence, no drums no beats, no vocals

**STRUCTURE:** 0-8s solo felt piano playing a simple descending motif with rubato, 8-14s distant field recording enters softly underneath, 14-18s piano plays last note and holds, 18-20s fadeout to silence with tape hiss, instrumental only

---

# BG-TECH — capitoli thinker

## Stile A — Energetico

### bg-tech — "minimal techno"
**STYLE:** minimal techno podcast bed, deep dub-techno chord stabs, soft kick on 4, ride cymbal shimmer, modular synth bleeps, restrained and hypnotic, evolving filter movement, warm sub bass, BPM 118, Berlin Panorama Bar after-hours mood, instrumental, loopable

**STRUCTURE:** 0-30s sparse intro with chord stabs and pad only, 30-60s soft kick enters with hi-hats, 60-90s modular bleep arpeggio layer joins, 90-120s breakdown removes kick, 120-150s full mix returns, 150-180s gradual fadeout, no drops or breaks louder than -8dB, no vocals

### bg-tech — "ambient idm"
**STYLE:** ambient IDM beat science, glitchy chopped percussion, granular synth textures, melodic bell tones, deep warm sub bass, intricate hi-hat patterns, Boards of Canada meets Jon Hopkins, dusty analog warmth, BPM 96, cerebral and forward-looking, instrumental, loopable

**STRUCTURE:** 0-20s atmospheric pad and bell intro, 20-50s glitch beat enters with sub bass, 50-80s granular texture layer, 80-110s rhythm strips back to just bells and pad, 110-140s full beat returns with new bell counter-melody, 140-180s slow fade, no vocals

### bg-tech — "synthwave / cyberpunk"
**STYLE:** dark synthwave cyberpunk underscore, gated reverb snare, analog Juno pads, FM bass, distant arpeggio, neon Tokyo night vibe, restrained no shred guitar, slow burn tension, BPM 100, Blade Runner 2049 meets Com Truise, instrumental, loopable

**STRUCTURE:** 0-25s pad and arp build, 25-60s gated snare and FM bass enter, 60-90s lead pluck melody on top, 90-120s breakdown to pad only with rain ambience, 120-150s rebuild with full kit, 150-180s fade, no vocals

## Stile B — Soft/Narrativo

### bg-tech — "studio notturno"
**STYLE:** warm ambient study music, soft Rhodes electric piano chords, gentle tape saturation, distant upright bass plucking occasional low notes, no drums, subtle analog synth pad, late night quiet room, Nils Frahm meets Bill Evans, BPM 72, intimate and reflective, no tension no urgency, instrumental, loopable

**STRUCTURE:** 0-30s solo Rhodes chords with tape hiss, 30-60s upright bass enters with sparse low notes, 60-90s analog pad layer joins very softly, 90-120s Rhodes plays a different voicing as a breath, 120-150s bass and pad return, 150-180s gradual fade to Rhodes alone, no vocals

### bg-tech — "passeggiata mattutina"
**STYLE:** gentle acoustic fingerpicking guitar, light brushed snare with broom stick, warm upright bass, Sunday morning walk feeling, folk meets jazz trio, Khruangbin acoustic side meets Iron and Wine, BPM 82, sun through trees not neon lights, no electronic sounds, no synths, no urgency, instrumental, loopable

**STRUCTURE:** 0-25s solo fingerpicking guitar pattern, 25-55s brushed snare and bass enter gently, 55-85s guitar varies the picking pattern slightly, 85-115s breakdown to guitar and bass only, 115-145s full trio returns with a warmer feel, 145-180s slow fade, no vocals

### bg-tech — "pioggia leggera"
**STYLE:** ambient piano with rain field recording, soft felt piano playing slow minimal chords, light rain and distant thunder recorded from a window, occasional low cello drone, contemplative melancholic but warm, Ólafur Arnalds meets Ludovico Einaudi, BPM 66, no drums no beats, no tension, instrumental, loopable

**STRUCTURE:** 0-30s rain ambience with single piano note, 30-60s piano plays gentle chord progression, 60-90s cello drone enters very low, 90-120s piano rests and only rain and cello remain, 120-150s piano returns with a new motif, 150-180s slow fade to rain only, no vocals

---

# BG-GEO — capitolo apertura

## Stile A — Energetico

### bg-geo — "documentary tension"
**STYLE:** cinematic documentary score, deep cello drone, low brass swells, sparse felt piano notes, distant timpani hits, subtle granular texture, news investigation gravitas, slow building tension without resolving, BPM 70, Hans Zimmer meets Trent Reznor, no vocals, loopable

**STRUCTURE:** 0-20s solo cello drone, 20-50s brass swell enters with felt piano accents, 50-80s timpani pulse joins distantly, 80-110s strings harmonize tension chord, 110-140s breakdown to drone only, 140-180s slow rebuild, no climax

### bg-geo — "geopolitical broadcast"
**STYLE:** modern news broadcast underscore, pulsing analog synth bass, sparse marimba accents, urgent muted strings, ticking clock percussion, Reuters and AP wire room atmosphere, restrained urgency, BPM 90, no vocals, loopable

**STRUCTURE:** 0-20s ticking clock and pad intro, 20-50s synth bass pulse enters, 50-80s marimba motif on top, 80-110s muted string layer, 110-140s strip down to clock and bass, 140-180s gradual fade, no vocals

## Stile B — Soft/Narrativo

### bg-geo — "orizzonte aperto"
**STYLE:** wide ambient landscape, gentle analog synth pad, distant acoustic guitar harmonics, subtle field recordings of wind or sea, spacious reverb, sense of standing on a hilltop looking at the world, Brian Eno Ambient 1 meets Sigur Rós, BPM 60, no drums no percussion, no tension, pastoral and curious, instrumental, loopable

**STRUCTURE:** 0-30s analog pad swell with wind field recording, 30-60s distant guitar harmonics enter, 60-90s pad shifts chord slowly, 90-120s guitar rests and wind fills the space, 120-150s pad and guitar return together, 150-180s slow fade to wind, no vocals

### bg-geo — "caffè del mattino"
**STYLE:** warm lo-fi jazz morning, soft muted trumpet playing long notes, gentle Rhodes chords, barely audible brushed cymbal, coffee shop field recording at very low volume, Chet Baker meets Nujabes morning side, BPM 70, intimate and relaxed, no urgency, no tension, instrumental, loopable

**STRUCTURE:** 0-20s Rhodes chord with coffee shop ambience barely audible, 20-50s muted trumpet enters with a long warm note, 50-80s trumpet plays a simple phrase, 80-110s trumpet rests and Rhodes plays alone, 110-140s trumpet returns with variation, 140-180s fade, no vocals

---

# BG-SOFT — synthesis e riflessioni

## Stile A — Energetico

### bg-soft — "introspective rhodes"
**STYLE:** warm jazz Rhodes piano introspection, soft brushed drum loop, upright bass walking sparingly, vinyl crackle, lo-fi tape saturation, Nujabes meets Bill Evans, contemplative late-night studio vibe, BPM 78, no vocals, loopable

**STRUCTURE:** 0-25s solo Rhodes chord progression, 25-60s upright bass enters walking, 60-90s brushed drums join softly, 90-120s breakdown to Rhodes only with vinyl crackle, 120-150s full trio returns, 150-180s fade

### bg-soft — "neoclassical ambient"
**STYLE:** neoclassical ambient piano with field recordings, soft felted piano, distant cello pad, subtle rain ambience, tape hiss warmth, contemplative reflective mood, Olafur Arnalds and Hania Rani influence, BPM 65, no vocals, loopable

**STRUCTURE:** 0-30s solo piano motif with rain ambience, 30-60s cello pad enters underneath, 60-90s second piano counter-melody, 90-120s breakdown to ambience only, 120-150s rebuild with both piano layers, 150-180s slow fade

## Stile B — Soft/Narrativo

### bg-soft — "biblioteca la sera"
**STYLE:** solo felt piano, very soft and slow, intimate close-mic recording, gentle tape hiss and vinyl texture, sense of reading in a quiet library at dusk, Hania Rani meets Erik Satie Gymnopédies, BPM 58, rubato feel, no drums no bass no other instruments, the simplest warmest thing, instrumental, loopable

**STRUCTURE:** 0-40s solo piano playing a simple three-note motif, 40-80s motif develops with one additional note, 80-120s pause to just tape hiss, 120-160s piano returns with the original motif transposed, 160-180s fade with long sustain pedal, no vocals

### bg-soft — "finestra aperta"
**STYLE:** ambient strings and field recordings, solo violin playing very long sustained notes, distant birdsong field recording, gentle analog pad, sense of an open window in spring, Max Richter Sleep meets Jóhann Jóhannsson, BPM free, no drums no rhythm no beats, just breath and strings, instrumental, loopable

**STRUCTURE:** 0-30s birdsong field recording alone, 30-60s violin enters with a single sustained note, 60-90s analog pad joins underneath, 90-120s violin shifts to a second note, 120-150s pad swells and violin holds, 150-180s everything fades to birdsong, no vocals

---

# BG-UPBEAT — progetti da osservare

## Stile A — Energetico

### bg-upbeat — "tech startup energy"
**STYLE:** uplifting electronic pop instrumental, plucky synth arpeggio, snappy clap percussion, warm bass, claps on 2 and 4, optimistic major key, modern indie electronica, ODESZA meets Tycho, BPM 112, no vocals, loopable

**STRUCTURE:** 0-25s arpeggio and pluck intro, 25-55s clap and bass enter, 55-85s lead synth melody on top, 85-115s breakdown to arp only with reverb wash, 115-145s full mix with new layered countermelody, 145-180s fade

### bg-upbeat — "future garage"
**STYLE:** future garage podcast bed, syncopated 2-step shuffle drums, warm sub bass, chopped vocal-like pad textures (no real vocals), bright filter sweeps, optimistic forward momentum, Bonobo meets Mount Kimbie, BPM 130, no vocals, loopable

**STRUCTURE:** 0-25s shuffle drums and sub bass intro, 25-55s pad layer enters, 55-85s filter sweep build with extra percussion, 85-115s breakdown to pad only, 115-145s drums return with new bass riff, 145-180s fade

## Stile B — Soft/Narrativo

### bg-upbeat — "pomeriggio in giardino"
**STYLE:** gentle bossa nova, soft nylon guitar, light shaker percussion, warm upright bass, major key, quiet Saturday afternoon in a garden, Antônio Carlos Jobim meets Khruangbin, BPM 86, relaxed and optimistic without excitement, no electronic sounds, no synths, instrumental, loopable

**STRUCTURE:** 0-25s solo nylon guitar bossa pattern, 25-55s shaker and bass enter, 55-85s guitar plays a gentle melody on top, 85-115s breakdown to guitar and shaker, 115-145s bass returns and guitar plays closing phrase, 145-180s fade, no vocals

### bg-upbeat — "workshop del pomeriggio"
**STYLE:** warm marimba and acoustic guitar, gentle marimba playing a simple optimistic melody, acoustic guitar comping softly, subtle tambourine, craft workshop feeling, positive but calm, Penguin Cafe Orchestra meets Beirut acoustic side, BPM 92, handmade not machine-made, no electronic production, no synths, instrumental, loopable

**STRUCTURE:** 0-25s marimba plays melody alone, 25-55s guitar enters comping, 55-85s tambourine joins lightly, 85-115s marimba rests and guitar plays alone, 115-145s marimba returns with variation, 145-180s fade, no vocals

---

## Note pratiche

- **Lunghezza minima**: 2 minuti. Tracce più lunghe = meno loop udibili.
- **Volume**: in `data/podcast-config.json` regola `musicVolume` (default 0.08 = -22dB sotto la voce).
- **Quanti file generare**: 2-3 varianti per stile × mood bastano.
- **Test rapido**: `npm run podcast` e ascolta.
- **Mood mapping**: lo script assegna i mood ai capitoli via `[CHAPTER mood=tech|geo|soft|upbeat]`.
- **Naming**: `bg-tech.mp3`, `bg-tech1.mp3`, `bg-tech2.mp3`, ... — il file senza numero è la variante "0". Lo script raccoglie tutto.
- **Mix & match**: puoi avere bg-tech.mp3 (minimal techno) e bg-tech1.mp3 (studio notturno) nella stessa pool. La rotazione li alterna tra i capitoli.
