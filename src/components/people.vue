<template>
  <div>
    <b-container id="top" fluid>
      <b-row class ="justify-content-center">
        <h3>People </h3>
      </b-row>
    </b-container>
    <b-container style="margin-top:50px;">
      <b-row style="margin-bottom:15px;" v-for="peopleChunk in peopleChunks" :key=peopleChunk>

        <b-col cols="12" md="6" v-for="person in peopleChunk" :key=person.image>
          <b-row>
            <b-col cols="4">
              <b-img :src=person.image fluid/>
            </b-col>
            <b-col  cols="8">
              <p style="text-align:left"><b>{{ person.name }}</b></p>
              <p style="text-align:left">
                {{ person.type }}<br>
                <a :href=person.emailLink>{{ person.email }}</a>
              </p>
            </b-col>
          </b-row>
        </b-col>

      </b-row>
    </b-container>
  </div>
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
          name:'Person 1',
          image:"../../default2.jpg",
          type: "Postdoc",
          email: "example@outlook.com"
        },
        {
          name:'Person 2',
          image:"../../default3.jpg",
          type: "Ph.D student",
          email: "example2@outlook.com"
        },
        {
          name:'Mathieu Bruneault',
          image:"../../default.jpg",
          type: "Master's student",
          email:"mbruneault@phas.ubc.ca"
        },
        {
          name:'Person 1',
          image:"../../default2.jpg",
          type: "Postdoc",
          email: "example@outlook.com"
        },
        {
          name:'Person 2',
          image:"../../default3.jpg",
          type: "Ph.D student",
          email: "example2@outlook.com"
        },
        {
          name:'Mathieu Bruneault',
          image:"../../default.jpg",
          type: "Master's student",
          email:"mbruneault@phas.ubc.ca"
        },
        {
          name:'Mathieu Bruneault',
          image:"../../default.jpg",
          type: "Master's student",
          email:"mbruneault@phas.ubc.ca"
        },
      ]
    }
  },
  created() {
    for (var i = 0; i < this.people.length; i++){
      this.people[i]['emailLink'] = "mailto:" + this.people[i]['email']
    }
    return
  },
  computed: {
      peopleChunks(){
        return _.chunk(Object.values(this.people), 2);
      }
    },
  
}
</script>

<style scoped>
  h3 {
    text-align:left;
    margin-bottom: 30px;
    margin-top: 70px;
  }
</style>
