const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Petgram - Tu app de fotos de mascotas',
      short_name: 'Petgram',
      description: 'Con Petgram puedes encontrar fotos de animales domesticos muy facilmente',
      background_color: '#fff',
      theme_color: '#b1a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'), // icono a resolver
          sizes: [96, 128, 144, 192, 256, 384, 512], // tamaños en los que este puede estar (son tamaños que estan regularmente en moviles)
          purpose: 'maskable'
        }
      ]
    })
  ]
}
