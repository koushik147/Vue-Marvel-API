<template>
<span v-if="Characters.length !== 0">
  <div>

    <h1>{{this.Characters.name}}</h1>

    <br />

    <img
      :src="this.Characters.thumbnail.path+ '.' +this.Characters.thumbnail.extension" alt="Image description"
    />

    <br />

    <span v-html="this.Characters.summary"></span>

    <br />

    <h2>Name:</h2>
    <span>
        {{this.Characters.name}}
    </span>
    <h2>Description:</h2>
    <span>
        {{this.Characters.description}}
    </span>
  </div>
  </span>
  <span v-else>
    <h1>404 Not Found!</h1>
  </span>
</template>

<script>

import axios from "axios"; 

const md5 = require("blueimp-md5"); 
const publickey ="225da753373af06439f2707bae90051d"; 
const privatekey = "de460172ba9f3af8774c537de0c43750a370661e";
const ts = new Date().getTime(); 
const stringToHash = ts + privatekey + publickey;
const hash = md5(stringToHash); 
const baseUrl = "https://gateway.marvel.com:443/v1/public/characters/";
const url = "?ts=" + ts + "&apikey=" + publickey + "&hash=" + hash; 

export default 
  { name: "Characters", data() 
    { return { id: this.$route.params.id, 
    Characters: {
        name: null, 
        thumbnail: {path:null, extension:null}, 
        summary: null 
        } 
      }; 
    }, 
      methods:
        { getCharacters(id) { axios .get(baseUrl + `/${id}` + url) .then(({ data }) => (this.Characters = data.data.results[0])); 
        } 
      }, 
        created() { this.getCharacters(this.$route.params.id);
        }, 
        watch: { $route() { this.getCharacters(this.$route.params.id); 
        } 
     } 
  };

</script>

<style scoped>
img{
    max-width:300px; 
    max-height:300px; 
    margin-left:auto; 
    margin-right:auto; 

  } 
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
span {
  text-align: center;
  max-width: 50%;
}
div {
  max-width: 50%;
  margin: 0 auto;
}
</style>