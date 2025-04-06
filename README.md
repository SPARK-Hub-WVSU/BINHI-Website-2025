# BINHI-Website-2025
This repository is for developing and maintaining of the WVSU - BINHI Website for 2025

## A couple notes from your backend developer (Rei)
For standardization purposes, I prefer **enforcing specific rules** para lang maging consistent kita tanan on where to place our components and global styling (if custom css is needed). 

Bal an naman naton nga ang previous nga codebase has its flaws, where indi gid naton ya maintindihan ang codebase due to the inconsistent coding styles and unmaintainability of the website. 

So, to ensure that it does not happen to us as well, I propose the following rules for consistency in terms of codebase, file placements, and naming schemes: 

1. If a component is used for a single route only (e.g. `Header.jsx` is used only for `layout.js`), place it on the same folder where the route it is used in is placed. Only use `/src/components/` for generic components such as `LinkButton.jsx` and the like. 

2. Whenever possible, apply the **DRY Principle** (Don't Repeat Yourself). Do not copy-paste the elements multiple times **especially when it is used in multiple files**. 

3. Whenever possible, use icon libraries such as [Phosphor Icons](https://phosphoricons.com) and web font managers such as [Fontsource](https://fontsource.org) or [Google Fonts](https://fonts.google.com). Only use SVGs when using *custom* icons or assets, and local font files **only when needed**. 

4. All images, SVGs, and other assets must be placed under `/src/assets`. If custom font files are used, place them under `/public` as they need to be used directly.  

5. Components must end in `.jsx`. Only use `.js` for page and layout files. 

6. Theme colors must be placed in `/src/styles/globals.css`, and specify the theme according to this example: 

*globals.css*
```css
@import "tailwindcss";

:root {
    --custom-color: #012345;
}

@theme inline {
    --color-custom-color: var(--custom-color);
}
```
and use it like this in your components: 

*page.js*
```js
function YourRoute() {
    return (
        <div className="bg-your-custom-color hover:text-your-custom-color">
            {/* some content here... */}
        </div>
    );
}
``` 

### A Note
Some of the rules I specified above are highly opinionated and may not resonate with how some of you code. However, there is a need for us all to be consistent on how we code, so that nga ma make sure naton that we are all on the same page and indi magka conflicts later on (especially on pull request reviews). 

And yes, of course indi pa ni sya final kay need pa ni i review ni Kirk. However, I believe that this is a good baseline for our project. I hope that this proposal be checked as soon as possible para nga indi na ta magka issues later on. 

Best wishes to everyone and code your best! 😉

P.S. please don't vibe code your way into this. It just won't help everybody here. 