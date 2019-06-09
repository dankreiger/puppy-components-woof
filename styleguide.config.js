const path = require('path');

const {
  createConfig,
  babel,
  css,
  sass,
  setOutput,
  match,
  file
} = require('webpack-blocks');

const pkg = require('./package.json');

module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/lib/components/**/[A-Z]*.js',
  moduleAliases: {
    [pkg.name]: path.resolve(__dirname, 'src/lib')
  },
  ribbon: {
    url: 'https://github.com/dankreiger/puppy-components-woof',
    text: 'Puppy Again'
  },
  showSidebar: true,
  usageMode: 'expand',
  skipComponentsWithoutExample: true,
  theme: {
    color: {
      link: '#00ABE7',
      linkHover: '#70CFF3',
      sidebarBackground: 'white'
    },
    font: ['Verdana', 'sans-serif']
  },
  styles: {
    Ribbon: {
      root: {
        backgroundImage:
          'url("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")',
        backgroundSize: '50px 50px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right top'
      },
      link: {
        backgroundColor: '#00ABE7'
      }
    },
    Heading: {
      heading2: {
        fontSize: 26
      }
    },
    ReactComponent: {
      root: {
        marginBottom: 20
      },
      header: {
        marginBottom: 0
      },
      tabs: {
        marginBottom: 0
      }
    },
    StyleGuide: {
      '@global body': {
        fontFamily: 'Verdana'
      }
    }
  },
  webpackConfig: createConfig([
    setOutput('./build/bundle.js'),
    babel(),
    css(),
    match(
      ['*.scss', '!*node_modules*'],
      [css(), sass(/* node-sass options */)]
    ),
    match(
      ['*.gif', '*.jpg', '*.jpeg', '*.png', '*.svg', '*.webp', '*.woff'],
      [file()]
    )
  ]),
  getExampleFilename(componentPath) {
    return componentPath.replace(/\.js?$/, '.examples.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js');

    return `import { ${name} } from '${pkg.name}';`;
  },
  require: [path.resolve(__dirname, 'styleguide/assets/css/globals.css')]
};
