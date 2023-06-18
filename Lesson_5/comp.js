Vue.component("new-component", {
  props: ["title"],

  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    increase(step) {
      this.counter += step;
    },
  },

  template: `
  <div>
    <h3>{{title}}</h3>
      <p> counter click {{ counter }}</p>
      <button @click="increase(2)">+2</button>
    </div>`,
});

Vue.component("change-one", {
  template: `
  <div>
    <h2>Info change component</h2>
    <p>Новый текстовый блок</p>
  </div>`,
});

Vue.component("change-two", {
  template: `
  <div>
    <h2>Info change component</h2>
    <p>Другой текстовый блок</p>
  </div>`,
});

Vue.component("change-tree", {
  template: `
  <ul>
    <li>list item 1</li>
    <li>list item 2</li>
    <li>list item 3</li>
  </ul>
  `,
});
