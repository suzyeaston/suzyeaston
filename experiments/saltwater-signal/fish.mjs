#!/usr/bin/env node
/**
 * SALTWATER // FISH STUDY 001
 *
 * A fixed, hand-drawn ASCII creature. This is intentionally not a bitmap,
 * algorithmic contribution graph, random texture, or remote image.
 *
 * Run from the repository root:
 *   node experiments/saltwater-signal/fish.mjs
 */
const FISH = "                                      ___\n                 ________         ___/   )\n         _______/        \\_______/      _)\n    ____/                              _)\n   /T                                 )\n  <  \\    (O)          \\~             )\n   \\  \\                >}~~~          /\n    \\  \\       /       >>}}~~~~       /\n     \\  \\_____/        >>>}}}~~~~    /\n      \\________        >>>}}~~~~    /\n         /     \\         }~~~~~    /\n        /       \\=        ~~~~    /\n       (-\\)      \\\\             /\n       (\\\\)      (\\\\\\)          /\n        \\V        \\V)          /_________\n                    \\V)    \\_\\          \\______\n                            \\_)  \\\\\\\\           \\___\n                                  \\\\\\\\\\        /)))\\\n                                    \\\\)))    /))))))\n                                      )))\\__/\\\\\\\\\\\\\n                                        ((\\  \\////\n                                         (\\\\)";
process.stdout.write(FISH + "\n");
