<template>
  <div id="app">
    <div id="header">
      <h1> This is an amazing header that stays when you switch tabs, you can probably have a cool pic of some math on a blackboard that sticks here or something </h1>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
              <b-nav-item v-bind:active="$route.name === 'home'" href="/home">Home</b-nav-item>
              <b-nav-item v-bind:active="$route.name === 'resources'" href="/resources">Resources</b-nav-item>
              <b-nav-item v-bind:active="$route.name === 'about'" href="/about">About</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
    <router-view/>
    <div id=footer>
      <h1> This is an amazing footer that stays when you switch tabs. Not sure if needed </h1>
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
  margin-top: 60px;
}
#header {
  margin-bottom: 60px;
}
#footer {
  margin-top: 60px;
}
</style>
