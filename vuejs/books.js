const books = Vue.createApp({
    data(){
        return {
            showBooks: true,
            btitle: 'The Ledger',
            bauthor: 'Earn Laxamana',
            year:2008
        }
    },
    method:{
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

books.mount('#books')