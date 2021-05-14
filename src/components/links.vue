<template>
  <div>
    <b-container id="top" fluid>
      <b-row class ="justify-content-center">
        <h3>Useful Links </h3>
      </b-row>
    </b-container>
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
  </div>
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
    text-align:left;
    margin-bottom: 30px;
    margin-top: 70px;
  }
  .text-left{
    margin-left: 20px;
  }

</style>
