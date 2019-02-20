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
            this.prmMap('speed');
            /* init config */
            this.speed(700);
            this.value([1, 0]);
            
            /* opacity setting */
            this.beforeEvent(
                (bf_eff, bf_eid, bf_prm) => {
                    try {
                        bf_eff.component().adom().style({
                            'opacity' : (0 === bf_eff.value()[bf_eid]) ? 1 : 0
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
    
    contents (eid, cmp) {
        try {
console.log("fade");
            let val = this.value()[eid];
            if (undefined === val) {
                return;
            }
            cmp.adom().style({'opacity' : val});
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (prm) {
        try { return this.execConfig('value', 'number', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    valueIndex (prm, idx) {
        try { return this.execConfig('value', 'number', prm, idx); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Fade;
/* end of file */
