import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    recipes: [
      {
        slug:'katsu-chicken-noodle-soup',
        title: 'Katsu Chicken Noodle Soup',
        description: 'A soup made with chicken, vegetables, and noodles.',
        ingredients: [
          '1/2 cup water',
          '1/2 cup vegetable oil',
          '1/2 cup soy sauce',
          '1/2 cup brown sugar'],
          method: [
            '1. Heat oil in a large pot over medium heat. Add chicken and cook until golden brown, about 5 minutes.',
            '2. Add vegetables and cook until tender, about 5 minutes.',
            '3. Add noodles and cook until heated through, about 5 minutes.'
          ]
      },
      {
        slug:'dumpling-soup',
        title: 'Dumpling Soup',
        description: 'A soup made with dumplings, vegetables, and noodles.',
        ingredients: [
          '1/2 cup water',
          '1/2 cup vegetable oil',
          '1/2 cup soy sauce',
          '1/2 cup brown sugar'],
          method: [
            '1. Heat oil in a large pot over medium heat. Add chicken and cook until golden brown, about 5 minutes.',
            '2. Add vegetables and cook until tender, about 5 minutes.',
            '3. Add noodles and cook until heated through, about 5 minutes.'
          ]
      },

    ],
    users:[]
  },
  mutations: {
    addRecipe(state, recipe) {
      state.recipes.push(recipe)
    },
    setUsers(state, users) {
      state.users = users
    }


    
  },
  actions: {
    fetchUsers({commit}) {
			axios.get('https://jsonplaceholder.typicode.com/posts')
				.then((result) => {commit('setUsers', result.data)
        console.log(result.data)}
        )
		}

  },
  modules: {
  }
})
