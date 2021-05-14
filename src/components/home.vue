<template>
  <b-container>
    <div class="home">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
        controls
        no-flip
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="Welcome!"
          text="Our group focuses on first-principles calculations of nuclei, as well as their implications of beyond-the-standard-model physics."
          img-src="./../vancouver.jpg"
        >
        </b-carousel-slide>

        <b-carousel-slide 
          img-src="https://www.hellobc.com/content/uploads/2018/03/2-7131-2100x1000.jpg"
        >
          <h2><a style="color:white" href=/people>About us</a> </h2>
        </b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide 
          caption="Our research topics include the following:"
          img-src="https://www.hellobc.com/content/uploads/2018/03/2-7131-2100x1000.jpg"
        >
          <a style="color:white" href=#> IM-SRG <br /></a>
          <a style="color:white" href=#> Neutrinoless Double Beta Decay <br /></a>
          <a style="color:white" href=#> Atoms <br /></a>
          <a style="color:white" href=#> Muon Capture <br /></a>
          <a style="color:white" href=#> Dark Matter</a>
        </b-carousel-slide>

        <b-carousel-slide 
          img-src="https://picsum.photos/1024/480/?image=54"
        >
          <h2><a style="color:white" href=/publications>See our latest publications</a> </h2>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#carousel-1 {
  margin-top: 100px;
}
</style>
