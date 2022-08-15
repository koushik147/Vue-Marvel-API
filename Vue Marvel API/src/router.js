import Vue from 'vue';
import Router from 'vue-router';
import CharactersList from './components/CharactersList.vue';
import Characters from './components/Characters.vue';
import ComicsList from './components/ComicsList.vue';
import Comics from './components/Comics.vue';
import SeriesList from './components/SeriesList.vue';
import Series from './components/Series.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/Characters/page/:pageNum',
      name: 'CharactersList',
      component: CharactersList
    },
    {
      path: '/Characters/:id',
      name: 'Characters',
      component: Characters
    },
    {
      path: '/Comics/page/:pageNum',
      name: 'ComicsList',
      component: ComicsList
    },
    {
      path: '/Comics/:id',
      name: 'Comics',
      component: Comics
    },
    {
      path: '/Series/page/:pageNum',
      name: 'SeriesList',
      component: SeriesList
    },
    {
      path: '/Series/:id',
      name: 'Series',
      component: Series
    }
  ]
});
