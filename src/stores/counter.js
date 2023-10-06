import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

  const menu = ref([
    { name: '🍹 Clover Club ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/hfkgymnekx3s.jpg', price: 110 },
    { name: ' 🍹 Manhattan ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/9hsiebq212lk.jpg', price: 100 },
    { name: ' 🍹Martini ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/njsqd9lerkng.jpg', price: 230 },
    { name: ' 🍹 Old Fashioned ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/3mybstglo8sk.jpg', price: 290 },
    { name: ' 🍹 Sidecar ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/fgdi3gxzug3r.jpg', price: 180 },
    { name: ' 🍹 Gin Sling ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/lpnewhdaobvw.jpg', price: 200 },
    { name: ' 🍹 White Russian ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/4ihjfvym9wjm.jpg', price: 280 },
    { name: ' 🍹 Screwdriver ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/tfndymucyc4x.jpg', price: 240 },
    { name: ' 🍹 Bloody Mary ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/hlhvg78lkdrj.jpg', price: 120 },
    { name: ' 🍹 Long Island ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/kgodrrkxhsoi.jpg', price: 300 },
    { name: ' 🍹 Pina Colada ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/gt08pryohk9q.jpg', price: 90 },
    { name: ' 🍹 Kamikaze ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/hnvf5iw2pznt.jpg', price: 300 },
    { name: ' 🍹 Pink Lady ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/vzygdqingjtn.jpg', price: 200 },
    { name: ' 🍹 Sex on the beach ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/pybn1whufs5t.jpg', price: 300 },
    { name: ' 🍹 Maitai ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/wphil0lhdkzo.jpg', price: 100 },
    { name: ' 🍹 B52 ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/fqxcmcp46bnz.jpg', price: 130 },
    { name: ' 🍹 Blue Hawaii ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/fews9k9l5bar.jpg', price: 190 },
    { name: ' 🍹 Mojito ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/3ireorft6moo.jpg', price: 140 },
    { name: ' 🍹 Margarita ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/yg4brqeneqez.jpg', price: 270 },
    { name: ' 🍹 Cosmopolitan ', img: 'https://img.proxumer.com/p/1200x0/2019/11/01/zzyjsztww8xh.jpg', price: 300 }
  ])
    
  
  
  return { menu}
})
export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    cartList: [], 
    orderList:[],
  }),
  actions: {
    addToCart(item) {
      this.cartList.push(item);
    },
    addOrderList() {
      this.orderList.push(...this.cartList);
    
     this.cartList = [];
    },

  },
});
