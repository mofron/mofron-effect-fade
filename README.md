# mofron-effect-fade
fade in/out effect for mofron component

# Install
fade dependencies mofron.
please see [here](https://github.com/simpart/mofron) about mofron overview.

```bash
npm install mofron-effect-fade
```

# Sample

```javascript
require('mofron');
let Text = require('mofron-comp-text');
let Fade = require('mofron-effect-fade');

let f_in = new Text({
    param : 'Fade In',
    size  : 30
});
f_in.visible(true, new Fade());

let f_out = new Text({
    param   : 'Fade Out',
    size    : 30,
    visible : true
});
f_out.visible(false, new Fade());
```
