console.log('working')

const app = new Vue({//se debe crear una instancia de veu, asi se llama toda la libreria
    el: '#app', 
    data: {
        titulo: 'hola mundo con vue',
        frutas: ['peras', 'manzanas'],
        fruit:[
            {nombre:'pera', cantidad: 10 },
            {nombre:'banano', cantidad: 15 },
            {nombre:'manzana', cantidad: 0 }
        ]
    }

})