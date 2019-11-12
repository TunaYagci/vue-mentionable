<template>
  <div id="app">
    <a style="position:absolute;top:5px;right:5px;margin:0;padding:5px 3px;"
       href="https://github.com/TunaYagci/vue-mentionable"><h3>Repository</h3></a>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/docs">Docs</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
