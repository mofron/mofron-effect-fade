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
            this.speed(700);
            
            /* opacity setting */
            this.beforeExec(
                (bf_eff, bf_flg, bf_prm) => {
                    try {
                        bf_eff.component().adom().style({
                            'opacity' : (true === bf_flg) ? '0' : '1'
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
    
    /**
     * fade in target component
     *
     * @note private method
     */
    enable (tgt) {
        try { tgt.adom().style({'opacity' : '1'}); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * fade out target component
     *
     * @note private method
     */
    disable (tgt) {
        try { tgt.adom().style({'opacity' : '0'}); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Fade;
/* end of file */
