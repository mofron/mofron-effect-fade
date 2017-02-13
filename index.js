/**
 * @file mofron-effect-fade/index.js
 * @author simpart
 */

mofron.effect.Fade = class extends mofron.Effect {
    
    initEffect (flg, eff) {
        try {
            if (true === flg) {
                eff.target.vdom().style('opacity', '0');
            } else {
                eff.target.vdom().style('opacity', '1');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    effectConts (flg, eff) {
        try {
            if (true === flg) {
                eff.target.vdom().style('opacity', '1');
            } else {
                eff.target.vdom().style('opacity', '0');
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
