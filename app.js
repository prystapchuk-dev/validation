const App = {
    data() {
        return {
            firstname:'',
            lastname:'',
            gender:'male',
            phone:'',
            nik:'',
            errors: [],
            pattern:{
                 required: /\W+|\w+/,
                 phone: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                 nik: '',
            },
            isColor: false,
        }
    },
    methods: {
        validate(e) {
        let el = e.target;
            console.log(this[el.name]);
           if (!this.getPattern(el).test(this[el.name])) {
               const names = this.errors.map(el => el.name);
               if(!names.includes(el.name)) {
                this.errors.push({name: el.name, message: `Помилка в полі ${el.name}`}); 
               } 
            } else {
                
                this.errors = this.errors.filter(function (val) {
                    return val.name !== el.name;
                })
   
           }   
        },
        getPattern(el) {
            return this.pattern[el.dataset.validate];
        },
        changeColor() {
           this.isColor = !this.isColor;
        }
    }
}

Vue.createApp(App).mount('#app')