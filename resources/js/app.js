import './bootstrap';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {createInertiaApp} from "@inertiajs/inertia-vue3";
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import {createApp, h} from "vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-select/dist/vue-select.css';
import vSelect from 'vue-select';
import 'vue-toastification/dist/index.css';
import Toast, {POSITION} from 'vue-toastification';

library.add(faPhone);

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .component('v-select', vSelect)
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(Toast, {
                position: POSITION.BOTTOM_CENTER,
                timeout: 3000,
            })
            .mount(el);
    },
}).then(r => {
});
