<template>
  <div>
    <b-container id="top" fluid>
      <b-row class ="justify-content-center">
        <h3>Publications </h3>
      </b-row>
    </b-container>
    <b-container>
      <div v-for="article_year in articles_year" :key=article_year.year> 
        <h3> {{article_year.year}} </h3>
        <div v-for="article in article_year.articles" :key=article>
          <p style="text-align:left;"> {{article}} </p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: {
    msg: String
  },
  data() {
    return{
      articles: [
        {
          text: 'Barrett, B. R., Navrátil, P., & Vary, J. P. (2013). Ab initio no core shell model. Progress in Particle and Nuclear Physics, 69, 131-181.',
          year: '2013'
        },
        {
          text: 'Article 2',
          year: '2019'
        },
        {
          text: 'Article 3',
          year: '2019'
        },
        {
          text: 'Barrett, B. R., Navrátil, P., & Vary, J. P. (2013). Ab initio no core shell model. Progress in Particle and Nuclear Physics, 69, 131-181.',
          year: '2015'
        }
      ],
      articles_year: []
    }
  },
  created() {
    var years = []
    for (var i = 0; i < this.articles.length; i++){
      if (!years.includes(this.articles[i]['year'])){
        years.push(this.articles[i]['year'])
      }
    }
    years.sort()
    years.reverse()
    for (i = 0; i < years.length; i++){
      var article_list = []
      for (var j = 0; j < this.articles.length; j++){
        if (this.articles[j]['year'] == years[i]){
          article_list.push(this.articles[j]['text'])
        }
      }
      this.articles_year.push(
        {
          'year': years[i],
          'articles': article_list
        }
      )
    }
    return
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