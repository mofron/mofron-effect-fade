/**
 * @file mofron-effect-fade/index.js
 * @author simpart
 */

/**
 * @class Fade
 * @brief fade effect class
 */
mofron.effect.Fade = class extends mofron.Effect {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('Fade');
            if ( (undefined === prm_opt) &&
                 ( ('object'  === typeof prm_opt) &&
                   (undefined === typeof prm_opt.speed) ) ) {
                this.speed(0.7);
            }
            this.prmOpt(prm_opt);
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
