<template>
  <div>
    <b-container id="top" fluid>
      <b-row class ="justify-content-center">
        <h3>Research Topics </h3>
      </b-row>
    </b-container>
    <b-container>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
        enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </b-container>
        <b-container @click="imsrgShown = !imsrgShown" class="topics" fluid>
      <b-row>
        <b-container>
          <h5>
            IM-SRG
            <font-awesome-icon v-if="!imsrgShown" class="fas fa-angle-down fa-1x" icon="angle-down" />
            <font-awesome-icon v-if="imsrgShown" class="fas fa-angle-up fa-1x" icon="angle-up" />
          </h5>
        </b-container>
      </b-row>
    </b-container>
    <b-container @click="nuLessShown = !nuLessShown" class="topics" fluid>
      <b-row>
        <b-container>
          <h5>
            Neutrinoless Double Beta Decay
            <font-awesome-icon v-if="!nuLessShown" class="fas fa-angle-down fa-1x" icon="angle-down" />
            <font-awesome-icon v-if="nuLessShown" class="fas fa-angle-up fa-1x" icon="angle-up" />
          </h5>
        </b-container>
      </b-row>
    </b-container>
    <b-collapse v-model="nuLessShown">
      <b-container id="research_text">
        <b-row>
          <b-col cols="3">
            <b-img fluid src="../../nuless.png"/>
          </b-col>
          <b-col cols="9">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: {
    msg: String
  },
  data() {
    return {
      nuLessShown: false,
      imsrgShown: false
    }
  }
}
</script>

<style scoped>
  h3 {
    text-align:left;
    margin-bottom: 30px;
    margin-top: 70px;
  }
  .topics {
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);
    background-color: #ffffff;
    text-align:left;
    margin-top: 10px;
    cursor: pointer;
  }
  #research_text{
    margin-top: 20px;
    text-align: left;
  }
</style>
