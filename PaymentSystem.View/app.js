//фронтенд код

//тестовые данные
const App = {
    data() {
        return {
            users: []
        }
    },
    async mounted(){
        //обратиться к роутеру и вызовет обработчик по адресу /api/server
        const res = await fetch(/api/server);
        //парсит полученый ответ (так по этому адресу роутер вернет json)
        this.users = await res.json();
    }
};


//создание обьекта App в Vue.js 
Vue.createApp(App).mount("#app");