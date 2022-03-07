const app = new Vue({

    el: '#app',
    data: {
        numero:3,
        color:true,
        subrallar:true,
        titulo: 'hola mundo con vue',
        frutas: ['manzana', 'pera', 'platano'],
        frutas1: [
            { nombre: 'pera', cantidad: 10 },
            { nombre: 'manzana', cantidad: 19 },
            { nombre: 'limon', cantidad: 8 },
            { nombre: 'platano', cantidad: 18 },
            { nombre: 'naranja', cantidad: 7 },
            { nombre: 'melocoton', cantidad: 10 },
            { nombre: 'mandarina', cantidad: 12 },
            { nombre: 'aguacate', cantidad: 5 },
            { nombre: 'piña', cantidad: 1 },
            { nombre: 'melon', cantidad: 10 },
            { nombre: 'pera', cantidad: 10 },
            { nombre: 'manzana', cantidad: 9 },
            { nombre: 'limon', cantidad: 18 },
            { nombre: 'platano', cantidad: 18 },
            { nombre: 'naranja', cantidad: 7 },
            { nombre: 'melocoton', cantidad: 10 },
            { nombre: 'mandarina', cantidad: 2 },
            { nombre: 'aguacate', cantidad: 5 },
            { nombre: 'piña', cantidad: 1 },
            { nombre: 'melon', cantidad: 10 }

        ],
        nuevaFruta: '',
        cantidad: "",
        total: 0
    },
    methods: {

        agregarFruta () {

            console.log(this.nuevaFruta);
            

            this.frutas1.push({
                nombre: this.nuevaFruta,
                cantidad : this.cantidad
            })
            this.nuevaFruta=""
            this.cantidad=""

        },
       

    },
    computed:{
        sumarFrutas(){
            this.total=0
            for (const fruta of this.frutas1) {
                this.total += fruta.cantidad
                console.log(this.total);
            }

            return this.total;
        }

    }
}


)