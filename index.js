/**
 * @file mofron-effect-fade/index.js
 * @author simpart
 */

/**
 * @class Fade
 * @brief fade effect class
 */
mofron.effect.Fade = class extends mofron.Effect {
    
    constructor (po) {
        try {
            super(po);
            this.name('Fade');
            this.speed(0.7);
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * fade in
     */
    enable (tgt) {
        try {
            tgt.adom().style({'opacity' : '1'});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * fade out
     */
    disable (tgt) {
        try {
            tgt.adom().style({'opacity' : '0'});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Fade;
