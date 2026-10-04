# Project mission control

_Last audited: 2026-10-04 · Vancouver_

This is the public status map for Suzy Easton's current GitHub universe.

The goal is not to pretend every experiment is equally active. It is to make the state legible: **what is live, what is urgent, what is research, what is maintenance, and what is allowed to sleep**.

Private repositories are summarized here at a high level only. Raw personal notes, private memory, credentials, and unpublished material do not belong in this public repo.

## Hard dates

| Date | What |
| --- | --- |
| **Oct 5, 2026** | Futureproof speaker outreach window closes. |
| **Oct 28–30, 2026** | Futureproof Festival of AI, H.R. MacMillan Space Centre, Vancouver. |
| **Oct 29, 2026 · 13:25** | **The Appliance Latent Space** performance. Current plan is a ~15 minute reset set after lunch. |

## Priority stack

### P0 · ship the performance

The festival version of **The Appliance Latent Space** does not need to solve the entire research program. It needs to be a reliable, strange, playable instrument.

Current public issues point to the shortest path:

1. [Make the laptop instrument feel playable](https://github.com/suzyeaston/appliance-latent-space-live/issues/4)
2. [Make arrangement blocks genuinely editable](https://github.com/suzyeaston/appliance-latent-space-live/issues/5)
3. [Add dependable audio export and performance capture](https://github.com/suzyeaston/appliance-latent-space-live/issues/6)
4. [Define Suzy's personal sound corpus](https://github.com/suzyeaston/appliance-latent-space-live/issues/7)
5. [Build a non-neural personal sample engine](https://github.com/suzyeaston/appliance-latent-space-live/issues/8)
6. [Freeze the semantic control contract](https://github.com/suzyeaston/appliance-latent-space-live/issues/11)
7. [Add Web MIDI input](https://github.com/suzyeaston/appliance-latent-space-live/issues/12)
8. [Prototype the ESP32 BLE controller bridge](https://github.com/suzyeaston/appliance-latent-space-live/issues/13)
9. [Map toaster lever and browning control](https://github.com/suzyeaston/appliance-latent-space-live/issues/14)

**Performance rule:** software instrument first, own-sound engine second, **wireless ESP32 toaster controller third**. The Mac remains the compute/audio brain; the toaster becomes a Bluetooth performance surface. Neural/AI layers only make the show if they add something musically real rather than jeopardizing the set.

### P1 · keep the nervous system coherent

- **SUZY//AI**: local-first core, event/timeline protocol, localhost server and private world-model teaching surface exist. Next architectural milestones are app adapters, a replaceable local model runtime, retrieval/memory, and provenance-aware research.
- **SUZY//WORLD**: public WordPress knowledge layer exists with entity/review/versioning infrastructure and an album editor. Current real-world test is importing recovered album writing and letting actual use pressure-test the schema.
- **SUZY//LIFE** (private): continuity/capture system is active. The local bridge is installed; the remaining job is the end-to-end smoke test and reliable approved capture flow.
- **BASECAMP//FIELD NOTES** (private): active residency notebook. Capture first, publish deliberately.

### P2 · research without stealing the show deadline

- **POP//CONTEXT**: v0.1 local evidence pipeline is working at the transcript + representative-frame layer. Next research step is scene-aware sampling, then non-speech audio and visual-language perception.
- **suzyeaston.ca public lab**: keep useful production systems healthy, but avoid turning every side quest into a P0 before Futureproof.

## Repository map

| Repository | Visibility | State | What it is | Next |
| --- | --- | --- | --- | --- |
| [suzyeaston](https://github.com/suzyeaston/suzyeaston) | public | **active** | GitHub profile + project mission control | Keep this page and the dated audit notes current. |
| [appliance-latent-space-live](https://github.com/suzyeaston/appliance-latent-space-live) | public | **P0 / active** | Canonical public performance instrument | Rehearse, tune playability, own-sound engine, MIDI, then ESP32 Bluetooth toaster control. |
| appliance-latent-space | private | reference | Earlier private prototype/scaffold | Treat the public live repo as the canonical performance branch; preserve this as reference. |
| [suzy-ai](https://github.com/suzyeaston/suzy-ai) | public | **active** | Local-first intelligence core / shared nervous system | App adapters, model interface/runtime, memory + retrieval. |
| [suzy-world](https://github.com/suzyeaston/suzy-world) | public | **active** | Deliberately public knowledge layer / WordPress plugin | Publish a small real corpus of recovered reviews and refine schema from use. |
| [pop-context](https://github.com/suzyeaston/pop-context) | public | research | Local audiovisual evidence pipeline | Scene-aware sampling, semantic audio, multimodal timeline. |
| suzy-life | private | **active** | Personal continuity, capture and agent-routing infrastructure | Finish local bridge smoke test and approved sync path. |
| basecamp-field-notes | private | **active** | Residency field notes / lab notebook | Keep chronological capture going; separate raw notes from public drafts. |
| [suzyeastonca](https://github.com/suzyeaston/suzyeastonca) | public | **active** | Main public site and creative-technology lab | Maintain live systems; resolve selected open PRs; spotlight current work. |
| [skywhale-airways](https://github.com/suzyeaston/skywhale-airways) | public | maintenance | Finished immersive film/web world with live production site | Maintain, submit/showcase when useful, avoid unnecessary churn. |
| [city-space-adventure](https://github.com/suzyeaston/city-space-adventure) | public | archive | 2024 Pygame music-video experiment | Preserve as an artifact. |
| [budgetinvancity](https://github.com/suzyeaston/budgetinvancity) | public | archive | 2024 Bash budget tracker | Preserve unless a new reason to revive it appears. |
| terraawesome | private | dormant | Test repository | Leave dormant or delete later after confirming nothing depends on it. |

## The public lab inside suzyeastonca

The main website repo contains several projects that are substantial enough to track even though they are not separate repositories.

| Project | Current state |
| --- | --- |
| **Lousy Outages** | Live operational project. Recent work hardened alert delivery, retries, subscriber matching and first-load performance. |
| **Vancouver Tech Events** | Live public event aggregation surface. |
| **Salish Sea / YVR radar** | Recently moved to a free OpenFreeMap-based scope and tuned the Vancouver/Whidbey/Puget Sound view. |
| **Loop Lab** | Browser music tool with safer restart behaviour and client-side WAV export. |
| **Gastown Simulator** | Active experimental world. Open PRs currently cover audio/TTS/environment systems and cinematic HUD work. |
| **Track Analyzer** | Public AI-assisted feedback tool for musicians. |
| **MACHINE VISIONS** | Public AI-art exhibition layer. |
| **Resume system** | An open PR contains a two-page resume redesign and PDF build. |

Current notable open PRs:

- [#655 · Resume redesign](https://github.com/suzyeaston/suzyeastonca/pull/655)
- [#387 · Gastown audio subsystems](https://github.com/suzyeaston/suzyeastonca/pull/387)
- [#389 · Gastown cinematic HUD](https://github.com/suzyeaston/suzyeastonca/pull/389)

## Project boundaries

```text
SUZY//AI
private intelligence + local protocols
        |
        | explicit publication
        v
SUZY//WORLD
public knowledge + stable API

The Appliance Latent Space
actor / instrument

POP//CONTEXT
observer / evidence

SUZY//LIFE
private continuity + capture

suzyeaston.ca
public surface / lab
```

The point is **not** to merge everything into one mega-app.

The point is to make the boundaries understandable enough that the projects can talk to each other without becoming a bowl of software spaghetti.

## Update rhythm

When a project changes meaningfully:

1. update its own README / handoff first;
2. update the status row here;
3. add a dated note under [`notes/`](notes/) when a broader re-prioritization happens;
4. include hard public deadlines only when they are actually confirmed;
5. do not copy private raw context into this public repository;
6. use **Canadian English** in public prose: centre, colour, behaviour, licence, etc. Preserve product names, code identifiers and quoted source text exactly.
