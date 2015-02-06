# Is es6

Check `ES6` support. You could use `ES6` when it's accessible and if not, just use good old `ES5`.

## Install

`npm i is-es6 --save`
`bower i is-es6 --save`

## Hot to use?

```js
var someModule,
    
    isEs6           = require('is-es6'),
    
    isGenerators    = isEs6.generators(),
    isTemplates     = isEs6.templates(),
    isConst         = isEs6.const(),
    
    is              = isEs6([
        'generators',
        'templates',
        'const'
    ]);
    
    if (is)
        someModule  = require('es6-module');
    else
        someModule  = require('es5-module');
```

## License

MIT
