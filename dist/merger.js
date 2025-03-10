import merge from 'lodash/merge.js';
export default (options) => {
    const { palettes, components } = options;
    const rules = {};
    for (const key in components) {
        if (Object.prototype.hasOwnProperty.call(components, key)) {
            merge(rules, components[key]);
        }
    }
    return { ...palettes, ...rules };
};
