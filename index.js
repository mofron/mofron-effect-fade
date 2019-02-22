/**
 * @file mofron-effect-fade/index.js
 * @brief fade effect for mofron
 * @author simpart
 */
const mf = require('mofron');
mf.effect.Fade = class extends mf.Effect {
    /**
     * initialize fade effect
     *
     * @param p1 (number) effect speed (second)
     * @param p1 (object) effect option
     */
    constructor (po) {
        try {
            super(po);
            this.name('Fade');
            this.prmMap('value');
            /* init config */
            this.speed(700);
            
            /* opacity setting */
            this.beforeEvent(
                (bf_eff, bf_prm) => {
                    try {
                        bf_eff.component().adom().style({
                            'opacity' : (true === bf_eff.value()) ? 0 : 1
                        });
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );
            
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (cmp) {
        try { cmp.adom().style({ 'opacity' : (true === this.value()) ? 1 : 0 }); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (prm) {
        try { return this.member('value', 'boolean', prm, true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Fade;
/* end of file */
