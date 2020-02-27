export default {
  mode: 'spa',
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    ...meta(),
    ...link()
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    publicPath: buildPublicPath(),
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
    loaders: {
      cssModules: {
        modules: true
      }
    }
  }
}

export function isDev() {
  return (process.env.NODE_ENV !== 'production')
}

function meta() {
  let metas = [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
    // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
  ]

  return {
    meta: (isDev()) ? metas : []
  }
}

function link() {
  var links = [
    { rel: 'stylesheet', href: 'https://www.hillsboroughcounty.org/assets/css/vendor?v=QID2bUIAtfWCxxWSwQ2j26PN-OBNmTBYAoJNGdkM9t81' },
    { rel: 'stylesheet', href: 'https://www.hillsboroughcounty.org/bundles/appstyles?v=Dz6rEMZ2aIZYN0-YR8-9lfgng6egbGxEdxUUiuVXYb41' }
    // { rel: 'stylesheet', href: 'https://www.hillsboroughcounty.org/library/web/css/fixes.css' }
  ]

  return {
    link: (isDev()) ? links : []
  }
}

function buildPublicPath() {
  return (isDev()) ? undefined : 'https://commbocc.github.io/hc-mosi-redevelopment/dist/'
}