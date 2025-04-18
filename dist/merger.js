import merge from 'lodash/merge.js';
export default (options) => {
    const { palettes, components, layer = false } = options;
    // Define exception components that should not be in the layer
    const exceptions = ['chart'];
    // Initialize rule objects
    const rules = {};
    const exceptionRules = {};
    const layerRules = {};
    // Process components
    for (const key in components) {
        if (Object.prototype.hasOwnProperty.call(components, key)) {
            // Check if component is an exception
            if (exceptions.includes(key)) {
                merge(exceptionRules, components[key]);
            }
            else {
                merge(layerRules, components[key]);
            }
        }
    }
    // Combine rules based on layer option
    if (layer) {
        // Structure for layered output
        rules['@layer components'] = layerRules;
        return { ...palettes, ...exceptionRules, ...rules };
    }
    else {
        // No layering - use original behavior
        return { ...palettes, ...exceptionRules, ...layerRules };
    }
};
