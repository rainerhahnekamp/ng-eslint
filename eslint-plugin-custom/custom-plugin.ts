import {ESLintUtils} from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(name => '');

const capitalizeClasses = createRule({
  name: 'capitalize-class',
  defaultOptions: [],
  meta: {
    type: 'problem',
    docs: {description: 'Capitalize classes'},
    messages: {
      capitalizeClass: 'Class names have to be capitalized'
    },
    schema: []
  },

  create(context) {
    return {
      ClassDeclaration(node) {
        if (node.id?.name.match(/^[a-z]/)) {
          context.report({
            node,
            messageId: 'capitalizeClass'
          })
        }
      }
    };
  }
})

const plugin = {
  configs: {
    recommended: {
      plugins: {
        custom: {
          rules: {
            'capitalized-classes': capitalizeClasses
          }
        }
      },
      rules: {
        'custom/capitalized-classes': 'error',
        '@typescript-eslint/no-unused-vars': 'off'
      }

    }
  }
}

export = plugin
