// console.log('Loading cucumber.js configuration')
// module.exports =
// {
//     "default": {
//       "require": ["step_definitions/*.js"],
//       //"format": ["pretty"]
//     }
//   }
module.exports = {
  default: {
      require: [
          'stepDefinitions/*.js',
          'support/**/*.js' 
      ],
      format: ['progress', 'json:reports/cucumber-report.json'],
      paths: ['features/upload.feature'] 
  }
};
