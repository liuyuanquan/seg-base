module.exports = {
  presets: [
    [
      '@vue/babel-preset-app', 
      { 
        modules: 'commonjs',
        useBuiltIns: 'usage',
        loose: true,
        decoratorsLegacy: true
      }
    ]
  ],
  plugins: []
}