# nextjs-toucan-typescript-error
Repo demonstrating a typescript error with Toucan.

To reproduce the issue:

1. Run `npm install`
2. Run `npm run tsc`
3. Notice that there's an error in page.tsx, `Argument of type 'HTMLScriptElement' is not assignable to parameter of type 'string'` - this happens because due to https://github.com/robertcepa/toucan-js/issues/204, any file which imports Toucan is treated as having cloudflare runtime types, even though this is not the case in e.g. a Next JS react component. (The HTMLScriptElement API having different types is one of many inconsistencies between cloudflare workers runtime types and the normal typescript `DOM` types.)
