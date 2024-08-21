"use strict";
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator(name => '');
const capitlizeClasses = createRule({
    create(context) {
        return {
            ClassDeclaration(node) {
                const className = node.id?.name || '';
                if (className.match(/^[a-z]/)) {
                    context.report({ node, messageId: 'capitalize-class' });
                }
            }
        };
    },
    name: 'capitalize-classes',
    defaultOptions: [],
    meta: {
        type: 'problem',
        docs: {
            description: 'Class names should be capitalized'
        },
        schema: [],
        messages: { 'capitalize-class': 'Class names need to be capitalized' }
    }
});
const plugin = {
    configs: {
        recommended: {
            plugins: {
                custom: {
                    rules: {
                        'capitalize-classes': capitlizeClasses
                    }
                }
            },
            rules: { 'custom/capitalize-classes': 'error' }
        }
    }
};
module.exports = plugin;
//# sourceMappingURL=custom-plugin.js.map