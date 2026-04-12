# Musica Podcast — Prompt per Suno.com

Sottofondo per episodi da ~20 minuti. L'obiettivo è **variabilità**: una loop singolo
ripetuto per minuti diventa noioso, quindi:

1. Genera **più varianti per ogni mood** (vedi sotto). Lo script `generate-podcast.sh`
   ruota automaticamente tra `bg-tech.mp3`, `bg-tech1.mp3`, `bg-tech2.mp3`, ecc.
2. Ogni traccia Suno deve essere **lunga** (almeno 2 min in Custom Mode) e contenere
   **sezioni interne** (build, breakdown, drop-out) — così anche un loop singolo non
   suona piatto.
3. Tutte **strumentali**, basse al -10/-15 dB rispetto alla voce, no parti vocali.

## Workflow Suno

- Modalità: **Custom Mode**, "Instrumental" ON.
- **Style**: il blocco "STYLE" qui sotto, copia-incollalo nel campo style.
- **Lyrics/Description**: il blocco "STRUCTURE" qui sotto, copialo nel campo descrizione.
- Genera 2-3 varianti per ogni mood, scegli quelle più movimentate, rinomina come indicato.

---

## intro.mp3 — sigla iniziale (15 secondi)

**STYLE:** cinematic tech podcast intro, hybrid orchestral electronic, rising synth arpeggios over pulsing 4-on-the-floor sub bass, glitchy percussion fills, bright filtered saw lead, confident futuristic news-broadcast vibe, BPM 124, analog warmth, side-chain pumping, builds tension then resolves on a clean stinger, mastered loud, no vocals

**STRUCTURE:** 0-4s ambient pad swell with reversed cymbal, 4-10s arpeggio enters and builds with rising filter sweep and snare roll, 10-13s drop with full kick-bass-arpeggio combo, 13-15s clean tonic stinger with reverb tail, instrumental only

---

## outro.mp3 — chiusura (20 secondi)

**STYLE:** emotional ambient outro, warm felt piano with tape hiss, lush analog string section, soft Rhodes electric piano, slow swelling pads, hopeful melancholic resolution, sparse soft kick at half time, BPM 70, vinyl crackle texture, cinematic Olafur Arnalds meets Nils Frahm, gentle reverb tail, no vocals

**STRUCTURE:** 0-6s solo felt piano motif with rubato, 6-12s strings enter and harmonize underneath, 12-18s Rhodes layer adds counter-melody, 18-20s long fadeout with reverb tail, instrumental only

---

## bg-tech.mp3 / bg-tech1.mp3 / bg-tech2.mp3 — capitoli tech & AI (3 varianti)

Tre tracce diverse, lo script le ruota tra i pensatori per rompere la monotonia.

### bg-tech.mp3 — versione "minimal techno"
**STYLE:** minimal techno podcast bed, deep dub-techno chord stabs, soft kick on 4, ride cymbal shimmer, modular synth bleeps, restrained and hypnotic, evolving filter movement, warm sub bass, BPM 118, Berlin Panorama Bar after-hours mood, instrumental, loopable

**STRUCTURE:** 0-30s sparse intro with chord stabs and pad only, 30-60s soft kick enters with hi-hats, 60-90s modular bleep arpeggio layer joins, 90-120s breakdown removes kick, 120-150s full mix returns, 150-180s gradual fadeout, no drops or breaks louder than -8dB, no vocals

### bg-tech1.mp3 — versione "ambient idm"
**STYLE:** ambient IDM beat science, glitchy chopped percussion, granular synth textures, melodic bell tones, deep warm sub bass, intricate hi-hat patterns, Boards of Canada meets Jon Hopkins, dusty analog warmth, BPM 96, cerebral and forward-looking, instrumental, loopable

**STRUCTURE:** 0-20s atmospheric pad and bell intro, 20-50s glitch beat enters with sub bass, 50-80s granular texture layer, 80-110s rhythm strips back to just bells and pad, 110-140s full beat returns with new bell counter-melody, 140-180s slow fade, no vocals

### bg-tech2.mp3 — versione "synthwave / cyberpunk"
**STYLE:** dark synthwave cyberpunk underscore, gated reverb snare, analog Juno pads, FM bass, distant arpeggio, neon Tokyo night vibe, restrained no shred guitar, slow burn tension, BPM 100, Blade Runner 2049 meets Com Truise, instrumental, loopable

**STRUCTURE:** 0-25s pad and arp build, 25-60s gated snare and FM bass enter, 60-90s lead pluck melody on top, 90-120s breakdown to pad only with rain ambience, 120-150s rebuild with full kit, 150-180s fade, no vocals

---

## bg-geo.mp3 / bg-geo1.mp3 — capitolo apertura geopolitica (2 varianti)

### bg-geo.mp3 — versione "documentary tension"
**STYLE:** cinematic documentary score, deep cello drone, low brass swells, sparse felt piano notes, distant timpani hits, subtle granular texture, news investigation gravitas, slow building tension without resolving, BPM 70, Hans Zimmer meets Trent Reznor, no vocals, loopable

**STRUCTURE:** 0-20s solo cello drone, 20-50s brass swell enters with felt piano accents, 50-80s timpani pulse joins distantly, 80-110s strings harmonize tension chord, 110-140s breakdown to drone only, 140-180s slow rebuild, no climax

### bg-geo1.mp3 — versione "geopolitical broadcast"
**STYLE:** modern news broadcast underscore, pulsing analog synth bass, sparse marimba accents, urgent muted strings, ticking clock percussion, Reuters and AP wire room atmosphere, restrained urgency, BPM 90, no vocals, loopable

**STRUCTURE:** 0-20s ticking clock and pad intro, 20-50s synth bass pulse enters, 50-80s marimba motif on top, 80-110s muted string layer, 110-140s strip down to clock and bass, 140-180s gradual fade, no vocals

---

## bg-soft.mp3 / bg-soft1.mp3 — synthesis e riflessioni (2 varianti)

### bg-soft.mp3 — versione "introspective rhodes"
**STYLE:** warm jazz Rhodes piano introspection, soft brushed drum loop, upright bass walking sparingly, vinyl crackle, lo-fi tape saturation, Nujabes meets Bill Evans, contemplative late-night studio vibe, BPM 78, no vocals, loopable

**STRUCTURE:** 0-25s solo Rhodes chord progression, 25-60s upright bass enters walking, 60-90s brushed drums join softly, 90-120s breakdown to Rhodes only with vinyl crackle, 120-150s full trio returns, 150-180s fade

### bg-soft1.mp3 — versione "neoclassical ambient"
**STYLE:** neoclassical ambient piano with field recordings, soft felted piano, distant cello pad, subtle rain ambience, tape hiss warmth, contemplative reflective mood, Olafur Arnalds and Hania Rani influence, BPM 65, no vocals, loopable

**STRUCTURE:** 0-30s solo piano motif with rain ambience, 30-60s cello pad enters underneath, 60-90s second piano counter-melody, 90-120s breakdown to ambience only, 120-150s rebuild with both piano layers, 150-180s slow fade

---

## bg-upbeat.mp3 / bg-upbeat1.mp3 — progetti & novità (2 varianti)

### bg-upbeat.mp3 — versione "tech startup energy"
**STYLE:** uplifting electronic pop instrumental, plucky synth arpeggio, snappy clap percussion, warm bass, claps on 2 and 4, optimistic major key, modern indie electronica, ODESZA meets Tycho, BPM 112, no vocals, loopable

**STRUCTURE:** 0-25s arpeggio and pluck intro, 25-55s clap and bass enter, 55-85s lead synth melody on top, 85-115s breakdown to arp only with reverb wash, 115-145s full mix with new layered countermelody, 145-180s fade

### bg-upbeat1.mp3 — versione "future garage"
**STYLE:** future garage podcast bed, syncopated 2-step shuffle drums, warm sub bass, chopped vocal-like pad textures (no real vocals), bright filter sweeps, optimistic forward momentum, Bonobo meets Mount Kimbie, BPM 130, no vocals, loopable

**STRUCTURE:** 0-25s shuffle drums and sub bass intro, 25-55s pad layer enters, 55-85s filter sweep build with extra percussion, 85-115s breakdown to pad only, 115-145s drums return with new bass riff, 145-180s fade

---

## Note pratiche

- **Lunghezza minima**: 2 minuti. Tracce più lunghe = meno loop udibili.
- **Volume**: in `data/podcast-config.json` regola `musicVolume` (default 0.08 = -22dB sotto la voce).
- **Quanti file generare**: 2-3 varianti per ogni mood bastano per un episodio da 20 min.
- **Test rapido**: dopo aver salvato i nuovi file, lancia `npm run podcast` e ascolta.
- **Mood mapping**: lo script assegna i mood ai capitoli via `[CHAPTER mood=tech|geo|soft|upbeat]`.
