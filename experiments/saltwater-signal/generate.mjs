#!/usr/bin/env node
/**
 * SALTWATER / FIELD 001
 *
 * A tiny, dependency-free terminal interference study.
 * Four detuned waves, an elliptical falloff, and a deliberate
 * low-resolution alphabet. This is not a GitHub contribution chart.
 *
 * Usage:
 *   node experiments/saltwater-signal/generate.mjs
 *   node experiments/saltwater-signal/generate.mjs 1.5
 *
 * Phase changes the image while retaining the score's structure.
 * Text-only. No network, randomness, telemetry or third-party packages.
 */
const WIDTH = 69;
const HEIGHT = 23;
const PALETTE = "  ..--~~::==++**##%%@@";
const phase = Number(process.argv[2] ?? "0");

if (!Number.isFinite(phase)) {
  console.error("Phase must be a finite number.");
  process.exitCode = 1;
} else {
  for (let row = 0; row < HEIGHT; row++) {
    const y = ((row - HEIGHT / 2) / (HEIGHT / 2)) * Math.PI;
    let line = "";

    for (let col = 0; col < WIDTH; col++) {
      const x = ((col - WIDTH / 2) / (WIDTH / 2)) * Math.PI;

      const interference =
        Math.sin(5.5 * x + 1.7 * Math.cos(3 * y) + phase) +
        Math.sin(4 * y - 0.75 * Math.sin(3 * x) - phase * 0.5) +
        0.5 * Math.sin(3 * y + 8 * x + phase * 0.27);

      const falloff = Math.exp(-0.5 * (x * x / 8 + y * y / 3));
      const amplitude = ((interference + 2.5) / 5) * falloff;
      const index = Math.max(
        0,
        Math.min(PALETTE.length - 1, Math.round(amplitude * (PALETTE.length - 1)))
      );

      line += PALETTE[index];
    }

    console.log(line.trimEnd());
  }
}
