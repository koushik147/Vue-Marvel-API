<template>
<span v-if="Comics.length !== 0">
  <div>

    <h1>{{this.Comics.title}}</h1>

    <br />

    <img
      :src="this.Comics.thumbnail.path+ '.' +this.Comics.thumbnail.extension" alt="Image description"
    />

    <br />

    <span v-html="this.Comics.summary"></span>

    <br />

    <h2>Title:</h2>

    <span>
        {{this.Comics.title}}
  </span>

    <h2> Description: </h2>
    <span>
        {{this.Comics.description}}
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
const baseUrl = "https://gateway.marvel.com:443/v1/public/comics/";
const url = "?ts=" + ts + "&apikey=" + publickey + "&hash=" + hash; 

export default 
  { name: "Comics", data() 
    { return { id: this.$route.params.id, 
    Comics: {
        title: null, 
        thumbnail: {path:null, extension:null}, 
        summary: null 
        } 
      }; 
    }, 
      methods:
        { getComics(id) { axios.get(baseUrl + `/${id}` + url) .then(({ data }) => { 
          this.Comics = data.data.results[0]
        }); 
        } 
      }, 
        created() { this.getComics(this.$route.params.id);
        }, 
        watch: { $route() { this.getComics(this.$route.params.id); 
        } 
     } 
  };

</script>

<style scoped>
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