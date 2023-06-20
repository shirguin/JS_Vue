Vue.component('Counter', {
  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increase(step) {
      this.counter += step;
    },

    decrease(step) {
      this.counter -= step;
    },
  },

  template: `
  <div>
    <h3>{{counter}}</h3>
    <button @click="increase(1)">+</button>
    <button @click="decrease(1)">-</button>
  </div>
    `,
});


