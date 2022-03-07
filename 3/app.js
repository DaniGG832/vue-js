const app = new Vue ({

    el:'#app',

    data:{

        mensaje:'hola mundo',

        contador: 0


    },
    computed:{

        invertido(){
            return this.mensaje.split(' ').reverse().join('  ');
        },
        color(){
            return {
                'bg-red-500': this.contador <101,
                'bg-yellow-500': this.contador <75,
                'bg-green-600': this.contador <50,
                'bg-green-400': this.contador <25,
                'bg-green-200': this.contador <10,
            }
        }

    }



})