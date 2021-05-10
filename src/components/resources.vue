<template>
  <b-container>
    <div class="resources">
      <h3 class=text-left>Textbooks</h3>

      <ul class=text-left>
          <li><pdf src="./assets/Wong.pdf">Wong</pdf></li>
          <li>2</li>
          <li>3</li>
      </ul> 

      <h3 class=text-left>IMSRG</h3>

      <ul class=text-left>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul> 

      <h3 class=text-left>Chiral EFT</h3>

      <ul class=text-left>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul> 

      <h3 class=text-left>Others</h3>

      <ul class=text-left>
          <li>1</li>
          <li>2</li>
          <li>3</li>
      </ul> 

    </div>
  </b-container>
</template>

<script>
export default {
  name: 'resources',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin-bottom: 10px;
}
a {
  color: #42b983;
}
.text-left{
    margin-left: 20px;
}

</style>
