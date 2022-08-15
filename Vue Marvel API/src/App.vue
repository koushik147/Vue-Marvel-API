<template>
  <div id="App">
      <header id='App-header'>
        <img :src= "logo" id='App-logo' alt='logo' />
        <h1 className='App-title'>Welcome to the MARVEL API </h1>
            <router-link  to='/Characters/page/0' class='text'>
              CHARACTERS
            </router-link>
            <router-link  to='/Comics/page/0' class='text'>
              COMICS
            </router-link>
            <router-link  to='/Series/page/0' class='text'>
              SERIES
            </router-link>
      </header>
      <br/>
      <br/>
      <router-view>
      </router-view>
  </div>
</template>

<script>
  import logo from './img/logo.webp';
  export default {
    data: function(){
      return{
        name: "App",
        logo : logo
      }
    }
  };
</script>

<style>
#App {
  text-align: center;
}
#App-logo {
  height: 80px;
}
#App-header {
  background-color: #000000;
  height: 200px;
  padding: 20px;
  color: rgb(255, 255, 255);
}

#App-title {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}
.text
  {
    text-decoration:none; 
    color:rgb(0, 0, 0); 
    background-color:rgb(255, 255, 255); 
    padding-left:30px; 
    padding-right:30px; 
    padding-top:10px; 
    padding-bottom:10px; 
    border-radius:5px;
    margin-right: 40px;
    margin-right: 40px;
  }
</style>
