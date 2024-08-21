import { ESLintUtils } from '@typescript-eslint/utils';
declare const plugin: {
    configs: {
        recommended: {
            plugins: {
                custom: {
                    rules: {
                        'capitalize-classes': ESLintUtils.RuleModule<"capitalize-class", [], unknown, ESLintUtils.RuleListener>;
                    };
                };
            };
            rules: {
                'custom/capitalize-classes': string;
            };
        };
    };
};
export = plugin;
