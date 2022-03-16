const { VueElement } = require("vue")

const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    }
}

Vue.createApp(ConditionalRendering).mount('#Conditional-rendering')