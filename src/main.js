import './js/index.js'
// import './commpents/menu/index'
import menu from "./commpents/menu/menu.js";
// const menu = require("html-loader!./commpents/menu/index.html");
export function test() {
    const app = document.getElementById('app');
    app.innerHTML = menu;
    return {
        name: 'app',
        template: app
    }
}

test();
