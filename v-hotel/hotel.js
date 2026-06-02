let carrData = [
    {
        name:'Пляжі',
        model:'Чистий пісок',
        year:'Тип пляжу: приватний',
        color:'Довжина пляжу: 500 м',
        price:'Пляжні рушники',
    },
    { name: 'Басейни', model: 'Критий басейн', year: 'Парасольки', price: 'Рушники', color: 'Шезлонг',  },
    { name: 'Спорт', model: 'Пляжний волейбольний майданчик', year: 'Мінігольф', price: 'Спортзал', color: 'Настільний теніс',  },
    { name: 'Послуги готелю', model: 'Wi-Fi у вестибюлі', year: 'Банкомат', price: 'Обмін валют', color: 'Лікар', },
    { name: 'Діти', model: 'Водна гірка', year: 'Міні-диско', price: 'Ресторанні стільці', color: 'Програми анімації', },
    { name: 'Краса', model: 'Сауна', year: 'Хамам', price: 'Масаж', color: 'Догляд за тілом', },

]

let carrApp = {
    data() {
        return {
            cars: carrData,
            currentCar: carrData[0],
            currentIndex: 0,
        }
    },
    methods: {
        showCar(index) {
            this.currentCar = carrData[index];
            this.currentIndex = index;
        }
    },
}
Vue.createApp(carrApp).mount('#vue-cont')



// ----------------

ScrollReveal().reveal('.anim-right', {
    origin: 'right',
    distance: '1000px',
    duration: 2000,
    delay: 1000,
});

ScrollReveal().reveal('.anim-left', {
    origin: 'left',
    distance: '1000px',
    duration: 2000,
    delay: 1000,

});

ScrollReveal().reveal('.plavnist', {
    origin: 'top',
    distance: '100px',
    duration:1000,
    // delay: 1000,
    interval:500,
    reset:'true',
});