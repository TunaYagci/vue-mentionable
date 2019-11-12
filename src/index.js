import MentionableTextarea from "./MentionableTextarea";

const autosize = require('autosize');

export default {
    install(Vue) {
        Vue.use(autosize);
        Vue.component('mentionable-textarea', MentionableTextarea)
    }
}
