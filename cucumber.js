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
          'stepDefinitions/*.js', // Path to your step definitions
          'support/**/*.js' // Path to your support files (optional)
      ],
      format: ['progress', 'json:reports/cucumber-report.json'],
      paths: ['features/userRegistration.feature'] // Path to your feature files
  }
};
