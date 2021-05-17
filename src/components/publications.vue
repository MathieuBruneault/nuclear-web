<template>
  <div>
    <b-container id="top" fluid>
      <b-row class ="justify-content-center">
        <h3>Publications </h3>
      </b-row>
    </b-container>
    <div>
      <div v-for="article_year in articles_year" :key=article_year.year> 
        <h3 class="year_title"> 
          <b-container>
            {{article_year.year}}
          </b-container>
        </h3>
        <b-container v-for="article in article_year.articles" 
                     :key=article
                     @mouseover="article['isHovering'] = true" 
                     @mouseleave="article['isHovering'] = false"
                     :class="{ hovering: article['isHovering']}"
                     fluid>
          <b-container style="text-align:left;"> {{article}} </b-container>
        </b-container>
      </div>
    </div>
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
          text: 'Stroberg, S. R., Holt, J. D., Schwenk, A., & Simonis, J. (2021). Ab initio limits of atomic nuclei. Physical Review Letters, 126(2), 022501.',
          year: '2021',
          isHovering: 'false'
        },
        {
          text: 'Article 2',
          year: '2019',
          isHovering: 'false'
        },
        {
          text: 'Article 3',
          year: '2015',
          isHovering: 'false'
        },
        {
          text: 'Stroberg, S. R., Holt, J. D., Schwenk, A., & Simonis, J. (2021). Ab initio limits of atomic nuclei. Physical Review Letters, 126(2), 022501.',
          year: '2021',
          isHovering: 'false'
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
  .year_title {
    border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  }
  .hovering{
    color: red
  }
</style>