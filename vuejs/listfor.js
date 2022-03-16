const ListRendering = {
    data() {
        return {
            todos:[
                {text: 'Clean the house'},
                {text: 'Prepare breakfast'},
                {text: 'Attend WCSERVER Class'}
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendring')