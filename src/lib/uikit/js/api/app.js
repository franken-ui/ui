import * as util from 'uikit-util';
import { init } from './state';

const App = function (options) {
    init(this, options);
};

App.util = util;
App.options = {};
App.version = "3.21.6";

export default App;
