import Vue from "vue";


const skillsCircle = {
  template: "#skills-circle",
  props: ["skillName", "skillPercent"],
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue('stroke-dasharray')
      );
      const percent = (dashArray/100)*(100-this.skillPercent);
      circle.style.strokeDashoffset = percent;
      }
  },
  mounted() {
    this.drawCircle();
  }
}

const skillsRow = {
  template: "#skills-row",
  components: {
    skillsCircle
  },
  props: ["skill"]
}

new Vue({
  el: "#competences-component",
  template: "#skills-list",
  data: () => ({
    skills: []
  }),
  components: {
    skillsRow
  },
  created() {
    this.skills = require('../data/skills.json');
  }
})