# Local libraries

- jQuery 4.0.0: `jquery/jquery-4.0.0.min.js`, from https://code.jquery.com/jquery-4.0.0.min.js.
- Tailwind CSS 4.3.3: `tailwindcss/tailwind-4.3.3.css`, compiled from `assets/css/tailwind.input.css` with the official standalone compiler: https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.3.3.
- Bootstrap Icons 1.13.1: `bootstrap-icons/bootstrap-icons.min.css` plus both font files in `bootstrap-icons/fonts/`, downloaded from https://github.com/twbs/icons/tree/v1.13.1/font. The MIT license is included as `bootstrap-icons/LICENSE`.

Both implemented pages load these local files. No CDN or package manager is required. See the root README for rebuild instructions.

Keep the Bootstrap Icons CSS and `fonts/` folder together: the stylesheet loads its fonts with relative paths. The complete icon font is included so additional icons need no download or build.
