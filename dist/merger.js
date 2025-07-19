import merge from 'lodash/merge.js';
export default (options) => {
    const { palettes, components, pluginOptions = {} } = options;
    const { layer = false, layerExceptions = [] } = pluginOptions;
    // Define exception components that should not be in the layer
    let exceptions = ['utility'];
    // Initialize rule objects
    const rules = {};
    const layers = {
        components: {}
    };
    // Process components
    for (const key in components) {
        if (Object.prototype.hasOwnProperty.call(components, key)) {
            if (layerExceptions.includes(key)) {
                merge(rules, components[key]);
            }
            else if (!exceptions.includes(key)) {
                merge(layers.components, components[key]);
            }
        }
    }
    // Combine rules based on layer option
    if (layer) {
        // Structure for layered output
        const result = {};
        result['@layer theme'] = palettes;
        result['@layer components'] = layers.components;
        result['@layer utilities'] = components.utility;
        merge(result, rules);
        return result;
    }
    else {
        // No layering - use original behavior
        return merge({}, palettes, layers.components, components.utility, rules);
    }
};
