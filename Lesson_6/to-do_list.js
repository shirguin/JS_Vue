Vue.component('to-do_list', {
    props: {  },

    data() {
        return {
            element:"",
            elements:[],
        }
    },

    methods: {
        addElement() {
            this.elements.push(this.element);
            this.element="";
        },

        deleteElement(element){
            let index = this.elements.indexOf(element);
            this.elements.splice(index, 1);
        }
    },

    template: `
    <div>
        <input 
            type="text" 
            placeholder="Добавить элемент"
            v-model="element" >
        <button @click="addElement">Добавить</button>
        <ul>
            <li v-for="element in elements" :key="element.id">{{element}} 
            <button @click="deleteElement(element)">Удалить</button>
            </li>   
        </ul>
    </div>
    `,
});