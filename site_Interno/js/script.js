new Vue({
  el: "#app",
  data: {
    articles: [
      {
        id: 0,
        imgSrc: "./img/Photo_6.png",
        imgAlt: "Photo_6",
        style: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022",
        href: "blog_details.html",
      },
      {
        id: 1,
        imgSrc: "./img/Photo_7.png",
        imgAlt: "Photo_7",
        style: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022",
        href: "blog_details.html",
      },
      {
        id: 2,
        imgSrc: "./img/Photo_8.png",
        imgAlt: "Photo_8",
        style: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        href: "blog_details.html",
      },
      {
        id: 3,
        imgSrc: "./img/Photo_11.png",
        imgAlt: "Photo_11",
        style: "Kitchan Design",
        title: "Let’s Get Solution For Building Construction Work",
        date: "26 December,2022 ",
        href: "blog_details.html",
      },
      {
        id: 4,
        imgSrc: "./img/Photo_12.png",
        imgAlt: "Photo_12",
        style: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022 ",
        href: "blog_details.html",
      },
      {
        id: 5,
        imgSrc: "./img/Photo_13.png",
        imgAlt: "Photo_13",
        style: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        href: "blog_details.html",
      },
    ],
    detailedArticles: [
      {
        id: 0,
        tag: "Kitchen",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "./img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "./img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 1,
        tag: "Bedroom",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "./img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "./img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 2,
        tag: "Arhitecture",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "./img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "./img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 3,
        tag: "Building",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "./img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "./img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 4,
        tag: "Architecture",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "./img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "./img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 5,
        tag: "Kitchen Planning",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "./img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "./img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 6,
        tag: "Kitchen",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "./img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "./img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
      {
        id: 7,
        tag: "Bedroom",
        title_1: "Let’s Get Solution for Building Construction Work",
        img_1_src: "./img/Photo_15.png",
        img_1_alt: "Photo_15",
        date: "26 December,2022",
        text_1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
        text_2:
          "Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        title_2: "Design sprints are great",
        text_3:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        img_2_src: "./img/Photo_16.png",
        img_2_alt: "Photo_16",
        text_4:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_5:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_6:
          "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text_7:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      },
    ],
    filter_flag: false,
    filter_tag:"",
    tags: [
      "Kitchen",
      "Bedroom",
      "Building",
      "Architecture",
      "Kitchen Planning",
    ],
  },

  methods:{
    filter (tag){
      this.filter_flag = true;
      this.filter_tag = tag;
    }
  },

  computed: {
    filterList: function () {
      if (this.filter_flag) {
        return this.detailedArticles.filter((article) => article.tag === this.filter_tag);
      } else {
        return this.detailedArticles;
      }
    },
  },
});
