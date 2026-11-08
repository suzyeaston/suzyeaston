# SALTWATER // FISH STUDY 001

*A terminal fish, built from the same humble alphabet as the first signal study.*

```text
                                      ___
                 ________         ___/   )
         _______/        \_______/      _)
    ____/                              _)
   /T                                 )
  <  \    (O)          \~             )
   \  \                >}~~~          /
    \  \       /       >>}}~~~~       /
     \  \_____/        >>>}}}~~~~    /
      \________        >>>}}~~~~    /
         /     \         }~~~~~    /
        /       \=        ~~~~    /
       (-\)      \\             /
       (\\)      (\\\)          /
        \V        \V)          /_________
                    \V)    \_\          \______
                            \_)  \\\\           \___
                                  \\\\\        /)))\
                                    \\)))    /))))))
                                      )))\__/\\\\\\
                                        ((\  \////
                                         (\\)
```

The fish is intentionally hand-drawn, rather than converted to a bitmap. Plain ASCII keeps the eye, gills, fins and odd sweeping tail readable inside GitHub's monospace code block.

To print it in a terminal (no dependencies):

```sh
node experiments/saltwater-signal/fish.mjs
```

The fish is fixed so its outline doesn't dissolve into noise; the earlier, mathematical wave-interference experiment remains available as `generate.mjs`:

```sh
node experiments/saltwater-signal/generate.mjs
node experiments/saltwater-signal/generate.mjs 1.5
```

Both programs are local, deterministic and free of network calls, telemetry or third-party packages.

**Suzy Easton / Vancouver / 2026**

*Music // machines // saltwater.*
