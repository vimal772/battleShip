const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 8192, // Convert images < 8kb to base64 strings
      //         name: '[name].[ext]',
      //         outputPath: 'images', // Specify the output directory for images
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(jpeg|jpg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader', // or 'url-loader'
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'images/', // or any other path where you want your images to be copied
      //       },
      //     },
      //   ],
      // },
    ],
  },
};