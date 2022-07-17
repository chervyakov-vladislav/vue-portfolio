<template lang="pug">
section.parallax(ref="parallax")
  .parallax__layer(v-for="image in images")
    picture.parallax__pic
      source.parallax__image(
        media="(min-width:768px)",
        :srcset="image.src"
      )
      img.parallax__image(
        :srcset="image.src"
        alt=`pic`
      )
</template>

<script>
export default {
  data() {
    return {
      images: []
    };
  },
  methods: {
    loadImages() {
      for (let i = 1; i<=7; i++) {
        this.images.push({
          src: require(`./../images/content/parallax-hello/${i}.png`)
        })
      }
    },
    moveLayers(layers, wScroll, exclude) {
      Array.from(layers).forEach((layer, index) => {
        const transformY = `${wScroll / (-(index+1) * 70)}%`;
        if (!exclude.includes(index)) {
          layer.style.transform = `translateY(${transformY})`;
        }  else if (index == 2) {
          layer.style.transform = `translateX(${transformY})`;
        }       
      })
    }
  },
  created() {
    this.loadImages();
  },
  mounted() {
    const parallax = this.$refs.parallax;
    const parallaxLayers = parallax.children;
    const windowWidth = document.body.clientWidth;
    const exeptionLayer = [6, 2];

    if (windowWidth > 768) {
      window.addEventListener('scroll', () => this.moveLayers(parallaxLayers, window.scrollY, exeptionLayer))
    }
  }
};
</script>

<style lang="postcss">
@import "../styles/mixins.pcss";

.parallax,
.parallax__layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @include tablets {
    display: none;
  }
}

.parallax__layer {
  &:nth-child(1) {
    .parallax__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(2) {
    left: initial;
    top: initial;
  }

  &:nth-child(3) {
    top: 30%;
    left: 50%;
    margin-left: 15%;

    .parallax__image {
      width: 35%;
    }
  }

  &:nth-child(4) {
    top: 40%;

    @include desktop {
      top: 75%;
    }
  }

  &:nth-child(5) {
    top: initial;
    right: initial;
    width: 75%;
  }

  &:nth-child(6) {
    top: initial;
    left: initial;
    width: 70%;
  }

  &:nth-child(7) {
    top: initial;
    // bottom: -4%;
  }
}
</style>
