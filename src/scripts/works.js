import Vue from "vue";


const tags = {
  template: "#works-tags",
  props: ['tags']
}

const thumbs = {
  template: "#works-thumbs",
  props: ['works', 'currentWork']
}

const buttons = {
  template: "#works-controls"
}

const display = {
  template: "#works-display",
  components: { 
    thumbs,
    buttons
  },
  props: ['works', 'currentWork']
}


const info = {
  template: "#works-info",
  components: {
    tags
  },
  props: ['currentWork'],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ')
    }
  }
}


new Vue ({
  el: "#works-component",
  template: "#works-container",
  components: { display, info },
  data: () => ({
    works: [],
    currentIndex: 0
  }),
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      this.makeInfiniteSlider(value);
    }
  },
  methods: {
    makeInfiniteSlider(value) {
      if (value < 0) this.currentIndex = this.works.length - 1;
      if (value > this.works.length - 1) this.currentIndex = 0;
    },
    makeArrayWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      })
    },
    handleSlide(direction) {
      switch(direction) {
        case "prev" :
          this.currentIndex--;
          break;
        case "next" : 
          this.currentIndex++;
          break;
      }
      console.log(direction)
    }
  },
  created() {
    const data = require('../data/works.json');
    this.works = this.makeArrayWithRequiredImages(data);
  }

})