/**
 * @file mofron-effect-fade/index.js
 * @author simpart
 */

/**
 * @class Fade
 * @brief fade effect class
 */
mofron.effect.Fade = class extends mofron.Effect {
    
    /**
     * fade in
     */
    enable () {
        try {
            this.target().vdom().style('opacity', '1');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * fade out
     */
    disable () {
        try {
            this.target().vdom().style('opacity', '0');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Fade;
