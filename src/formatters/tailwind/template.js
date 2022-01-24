module.exports = ({ theme, plugin }) => {
  return `const plugin = require('tailwindcss/plugin')

  module.exports = {
      darkMode: "class",
      prefix: "tw-",
      theme: ${JSON.stringify(theme)},
      plugins: [
      plugin(function({ addComponents}) { 
        const components = ${JSON.stringify(plugin)}; 
        addComponents(components); 
        })
      ]
  }`;
};
