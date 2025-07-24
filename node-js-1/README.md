# Folder 1 for experimental NodeJS project

Note:

In past there was a basic JavaScript test with Jest aka `jest test.js` which was executed within adjacent npm script `npm test`. But when I normalized to NodeJS v24 in July-2025, `jest` still couldn't handle ESM without `jest.config.js`.

I didn't want to install additional NodeJS packages I gave it up, and used `node:test` tool.

So to test basic JavaScript function directly with NodeJS:

- `node --test ./test.js`

or

- `npm test`
