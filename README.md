# Alex Maingi — portfolio

One HTML file. No framework, no build step, no dependencies, no `node_modules`.

That is a deliberate choice, not a shortcut. The previous version of this
repository — and several others — shipped scaffold residue: 54 declared
dependencies to run on 4, and 40 of 101 components that nothing imported.
A portfolio is the one site that should not need explaining.

## Run it

Open `index.html`. That is the whole instruction.

For a local server:

```bash
npx serve .
```

## Structure

- `index.html` — the site. Styles and script inline, deliberately.
- `archive/` — the March 2026 version, kept for reference.

## Notes

- Type is Fraunces (variable) and JetBrains Mono, loaded from Google Fonts.
- The name in the hero drifts along the font's weight and optical-size axes
  as you scroll, so the letterforms change shape rather than just fading.
- Every external link on the page was checked live before it was added.
