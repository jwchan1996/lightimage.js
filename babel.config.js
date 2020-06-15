const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '14',
        firefox: '43',
        chrome: '38',
        safari: '8',
        opera: '32',
        ie: '10'
      }
    },
  ],
];

module.exports = { 
  presets 
}