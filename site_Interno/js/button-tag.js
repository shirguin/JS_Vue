Vue.component("button-tag", {
  props: ["tag", "filter"],

  template: `
    <button
     class="blogDetailsContent__rightBlock__tags__button"
     @click="filter(tag)">{{ tag }}</button>`,
});
