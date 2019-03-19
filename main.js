var app = new Vue({
    el: '#app',
    data: {
        product: 'Boots',
        description: 'This is what we love doing since time imemorial doing',
        image:'./assets/socks-green.png',
        link: 'https://youtube.com',
        inventory:3,
        onSale: true,
        details: ["40% cotton", "20% polyester", "40% silicon"],
        variants: [
            {
                variantId: 2256,
                variantColor: "green"
            },
            {
                variantId: 22655,
                variantColor: " blue"
            }
        ],
        sizes: ["lg", "xl", "xxl"],
        cart: 0,
    },
    methods: {
        addToCart: function () {
            this.cart +=1
        }
    }
})