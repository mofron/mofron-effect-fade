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
            this.prmMap('speed');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    execute (flg) {
        try {
            if ( (true === this.status()) &&
                 ('0' !== this.component().style('opacity')) ) {
                this.component().style({ 'opacity' : '0' });
            }
            super.execute(flg);
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
console.log(tgt);
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
    
    speed (prm) {
        try {
            if (undefined === prm) {
                return (0 === super.speed()) ? 0.7 : super.speed();
            }
            super.speed(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Fade;
/* end of file */
