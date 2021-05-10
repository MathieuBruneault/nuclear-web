<template>
  <b-container>
    <h3> People </h3>
    <b-row style="margin-bottom:15px" v-for="peopleChunk in peopleChunks" :key=peopleChunk>

      <b-col cols="12" md="6" v-for="person in peopleChunk" :key=person.image>
        <b-row>
          <b-col cols="4">
            <b-img :src=person.image fluid/>
          </b-col>
          <b-col  cols="8">
            <p style="text-align:left"><b>{{ person.name }}</b></p>
            <p style="text-align:left">{{ person.type }}</p>
            <a :href=person.emailLink><p style="text-align:left">{{ person.email }}</p></a>
          </b-col>
        </b-row>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'about',
  props: {
    msg: String
  },
  data() {
    return{
      people: [
        {
          name:'Bob',
          image:"../../default2.jpg",
          type: "Postdoc",
          email: "example@outlook.com",
          emailLink:"mailto:mbruneault@phas.ubc.ca"
        },
        {
          name:'Bob2',
          image:"../../default3.jpg",
          type: "Ph.D student",
          email: "example2@outlook.com",
          emailLink:"mailto:mbruneault@phas.ubc.ca"
        },
        {
          name:'Mathieu Bruneault',
          image:"../../default.jpg",
          type: "Master's student",
          email:"mbruneault@phas.ubc.ca",
          emailLink:"mailto:mbruneault@phas.ubc.ca"
        },
      ]
    }
  },
  computed: {
      peopleChunks(){
          return _.chunk(Object.values(this.people), 2);
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
</style>
