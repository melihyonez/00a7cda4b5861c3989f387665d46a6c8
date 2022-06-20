module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'implicit-arrow-linebreak': 0,
    'react/forbid-prop-types': [0],
    'react/destructuring-assignment': 'off', // const {} = this.state;
    'no-plusplus': 'off', // ++ işaretinin kullanımı i += 1
    'linebreak-style': 0,
    'no-nested-ternary': 'off', // ? : ard ardına kullanma false ? true : false ? true : false gibi
    'max-len': 'off', // satır uzunlugu sınırı kapalı ama ayarlanabilir istenirse.
    'no-underscore-dangle': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/href-no-hash': 'off',
    camelcase: 'off',
    'no-script-url': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'import/prefer-default-export': 'off', // herhangi bir class veya component olmadıgında hata veriyor.
    'import/no-cycle': 'off', // iki sınıf arasında birbirinin fonksiyonlarını kullanınca verilen hata
    'react/jsx-props-no-spreading': 'off', // {...props}
    failOnError: 0,
    emitWarning: 0,
    'import/no-unresolved': 0,
    'default-param-last': 0,
    'react/function-component-definition': [1, { namedComponents: ['arrow-function', 'function-declaration'] }],
  },
  globals: {
    window: true,
    document: true,
    sessionStorage: true,
    localStorage: true,
    fetch: true,
  },
};
