Add Clientside, if you dont have:

```ts
import * as alt from 'alt-client'

const pingEvery = 5000;

function init() {
    alt.setInterval(handlePing, pingEvery);
}

/**
 * Pings the server every 5 minutes.
 */
function handlePing() {
    alt.emitServer('player:Tick');
}

init();
```

If you want add clientside, with alt.setInterval
```ts
    const food = alt.getLocalMeta('food');
    const water = alt.getLocalMeta('water')
    if (typeof food === 'number' && food <= 10 || typeof water === 'number' && water <= 10) {
        native.disableControlAction(0, 21, true);
    }
```


!!!Requires!!!

You must have these plugins installed to use this plugin.

https://github.com/Stuyk/rebar-chat      //because of the commands

!!!Features!!!

- /setfood id amount
- /setwater id amount
- /setneeds id amount
