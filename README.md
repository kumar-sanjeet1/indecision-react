# indecision-react
A React application 


## Webpack setup

`webpack.config.js`
``` 
module.exports = {
entry:'./src/app.js',
mode: 'development',
output:{
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules:[{
      test:/\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules'
    },
    {
      test:/\.scss$/,
      use: ['style-loader',
            'css-loader',
          'sass-loader'],
      exclude: '/node_modules'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}

```

## babel setup 

`.babelrc`
```
{
    "presets": ["env", "react"],
    "plugins": ["transform-class-properties"]

}
```

## Yarn run scripts

  $ start -> webpack-dev-server
  $ serve -> live-server public
  $ build -> webpack
