Vue.component("button-tag", {
  props: ["tag"],

  data() {
    return {};
  },

  methods: {
    print(tag) {
      console.log(`тук тук ${tag}`);
    },
  },

  template: `
    <button
     class="blogDetailsContent__rightBlock__tags__button"
     @click="print(tag)">{{ tag }}</button>`,
});
