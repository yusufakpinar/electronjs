//if (process.env.NODE_ENV === 'development') {
    const electronHot = require('electron-hot-loader');
    electronHot.install();
    electronHot.watchJsx(['src/**/*.jsx']);
    electronHot.watchCss(['src/static/**/*.scss']);
//}

require('./index.jsx');