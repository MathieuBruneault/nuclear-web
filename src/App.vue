<template>
  <div id="app">
    <div id="header"> 
      <!--<h1> This is a header that stays when you switch tabs </h1> -->
        <b-navbar toggleable="lg" variant="light" id="navbar" fixed="top">
          <b-container>
            <b-navbar-brand v-bind:active="$route.name === 'home'" href="/home">Home</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <!--
                <b-nav-item-dropdown v-bind:active="$route.name === 'about'" href="#" text="About Us">
                  <b-dropdown-item href="/people">People</b-dropdown-item>
                  <b-dropdown-item href="/research">Research</b-dropdown-item>
                  <b-dropdown-item href="/publications">Publications </b-dropdown-item>
                </b-nav-item-dropdown>
                -->
                <b-nav-item v-bind:active="$route.name === 'people'" href="/people"> People </b-nav-item>
                <b-nav-item v-bind:active="$route.name === 'research'" href="/research"> Research </b-nav-item>
                <!--
                <b-nav-item-dropdown v-bind:active="$route.name === 'research'" href="/research" text="Research">
                  <b-dropdown-item href="#">IM-SRG</b-dropdown-item>
                  <b-dropdown-item href="#">Neutrinoless Double Beta Decay</b-dropdown-item>
                  <b-dropdown-item href="#">Atoms</b-dropdown-item>
                  <b-dropdown-item href="#">Muon Capture</b-dropdown-item>
                  <b-dropdown-item href="#">Dark Matter</b-dropdown-item>
                </b-nav-item-dropdown>
                -->
                <b-nav-item v-bind:active="$route.name === 'publications'" href="/publications">Publications</b-nav-item>
                <b-nav-item v-bind:active="$route.name === 'links'" href="/links">Links</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
        </b-navbar>
    </div>
    <router-view/>
    <div id=footer>
      <b-container id="logos" fluid>
        <b-img fluid id="ubc" width=400 src=../../ubc_logo.png></b-img>
        <b-img fluid width=400 src=../../TRIUMF_Logo_Black.jpg></b-img>
      </b-container>
      <b-container id="bottom" fluid>
        <b-container>
          <b-row>
            <b-col cols="1"></b-col>
            <b-col cols="1">
              <font-awesome-icon class="fas fa-location-arrow fa-2x" style="margin-top:30px;" icon="location-arrow" />
            </b-col>
            <b-col cols="7">
              <p style="text-align: left">
                TRIUMF<br>
                4004 Wesbrook Mall <br>
                Vancouver, BC V6T 2A3 <br>
                Canada
              </p>
            </b-col>
            <b-col cols="1">
              <font-awesome-icon class="fas fa-phone fa-2x" style="margin-top:30px;" icon="phone" />
            </b-col>
            <b-col cols="1" style="text-align: left">
              Some<br>
              contact <br>
              info <br>
              maybe?
            </b-col>
            <b-col cols="1"></b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
  #footer {
  margin-top: 60px;
  }
  #ubc {
  margin-top: 18px;
  }
  #navbar {
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  background-color: white;
  }
  #top{
    background-color: #557A95;
    text-align: center;
    color: white;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  #bottom{
    background-color: #7395AE;
    text-align: center;
    color: white;
    margin: auto;
    padding-top: 20px;
    padding-bottom: 120px;
  }
  #logos{
    margin-bottom: 20px;
  }
</style>
