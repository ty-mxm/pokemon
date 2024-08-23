// stores/cart.js
import { defineStore } from 'pinia'

const KEY = "cart"
const FAVORITES_KEY = "favorites"

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      panier: JSON.parse(localStorage.getItem(KEY)) || [{id:25, isRare: false}, {id:225, isRare: true}, {id:151, isRare: false}],
      favorites: JSON.parse(localStorage.getItem(FAVORITES_KEY)) || []
    }
  },
  actions: {
    removeLastItem() {
      this.panier.pop()
      localStorage.setItem(KEY, JSON.stringify(this.panier))
    },
    addPokemonID(id, isRare) {
      this.panier.push({id, isRare})
      localStorage.setItem(KEY, JSON.stringify(this.panier))
    },
    addFavorite(id) {
      if (!this.favorites.includes(id)) {
        this.favorites.push(id)
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.favorites))
      }
    },
    removeFavorite(id) {
      this.favorites = this.favorites.filter(favId => favId !== id)
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(this.favorites))
    }
  }
})
