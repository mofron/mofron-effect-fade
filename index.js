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
            super();
            this.name('Fade');
            
            this.prmOpt(po);
            if (null !== this.param()) {
                this.speed(po);
            }
            
            /* set default speed */
            if (0 === this.speed()) {
                this.speed(0.7);
            }
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
            tgt.vdom().style({'opacity' : '1'});
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
            tgt.vdom().style({'opacity' : '0'});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Fade;
