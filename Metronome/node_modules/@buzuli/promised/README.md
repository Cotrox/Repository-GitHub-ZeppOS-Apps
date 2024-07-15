# @buzuli/promised

Very simple node-style (callback) async function to Promise translator.

```
const promised = require('@buzuli/promised')
const data = await promised(h => fs.readFile('package.json', h))
```
