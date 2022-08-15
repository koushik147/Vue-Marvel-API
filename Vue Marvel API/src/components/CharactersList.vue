<template>
  <span v-if="Characters.length !== 0">
    <span>
      <router-Link
              :to="{ path: `/characters/page/${page - 1}` }"
              class="text1"
            >PREVIOUS
      </router-Link>
    </span>
    <span>
      <router-Link
        :to="{ path: `/characters/page/${page + 1}` }"
        class="text1"
        >NEXT
      </router-Link>
    </span>
    <br/>
    <br/>
    <div>
    <ul>
      <li v-for="(Characters,index) in Characters" :key="index">

        <img
          :src="Characters.thumbnail.path+ '.' + Characters.thumbnail.extension" alt="Image description"
        /> 
        <br/><br/>

        <router-link :to="{name: 'Characters', params: {id: Characters.id}}" class="text">
           {{Characters.name}}
        </router-link>

      </li>

    </ul>

  </div>
  </span>
  <span v-else>
    <h1>404 Not Found!</h1>
  </span>

</template>

<script>
  
import axios from "axios"; 

const md5 = require("blueimp-md5");
const publickey = "225da753373af06439f2707bae90051d"; 
const privatekey = "de460172ba9f3af8774c537de0c43750a370661e";
const ts = new Date().getTime(); 
const stringToHash = ts + privatekey + publickey;
const hash = md5(stringToHash); 
const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
const url = baseUrl + "?ts=" + ts + "&apikey=" + publickey + "&hash=" + hash;
const limit = 20; 

export default 
  { name: "CharactersList", 
  data() { 
    return { Characters: [] ,
    page: parseInt(this.$route.params.pageNum)
    }; 
  }, 
    created()
    { 
      const pageNum = this.$route.params.pageNum;
      let page = parseInt(pageNum);
      this.page = page;
      let offset = limit * page;
      axios.get(url + "&limit=" + limit + "&offset=" + offset)
    .then(({ data }) => {this.Characters = data.data.results});
    },
    watch:{
      $route()
      {
        const pageNum = this.$route.params.pageNum;
        let page = parseInt(pageNum);
        this.page = page;
        let offset = limit * page;
        axios.get(url + "&limit=" + limit + "&offset=" + offset)
        .then(({ data }) => {this.Characters = data.data.results});
      }
    }
  };

</script>

<style scoped>
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #ffffff;
    margin-bottom: 2px;
    color: #3e5252; 
    margin-left:auto; 
    margin-right:auto; 
    margin-bottom: 15px; 
    border-radius: 15px;
  }

  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  } 

  img{
    max-width:300px; 
    max-height:300px; 
    margin-left:auto; 
    margin-right:auto; 

  } 

  .text
  {
    text-decoration:none; 
    color:rgb(0, 0, 0); 
    background-color:rgb(255, 255, 255); 
    padding-left:10px; 
    padding-right:10px; 
    padding-top:10px; 
    padding-bottom:10px; 
    border-radius:10px;
    margin-left: 40px;
  }
.text1
  {
    text-decoration:none; 
    color:rgb(255, 255, 255); 
    background-color:rgb(0, 0, 0); 
    padding-left:20px;
    padding-right:20px; 
    padding-top:10px; 
    padding-bottom:10px; 
    border-radius:10px;
    margin-left: 40px;
  }
</style>