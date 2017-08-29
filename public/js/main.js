var myRouter = new VueRouter({
    routes: [
        {
            path: '/',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: function(resolve, reject){
                $.get('/html/home.html', function(htmlFromServer){
                    resolve({
                        template: htmlFromServer
                    })
                })
            }
        },
        {
            path: '/about',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: function(resolve, reject){
                $.get('/html/about.html', function(htmlFromServer){
                    resolve({
                        template: htmlFromServer
                    })
                })
            }
        },
        {
            path: '/skills',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: function(resolve, reject){
                $.get('/html/skills.html', function(htmlFromServer){
                    resolve({
                        template: htmlFromServer
                    })
                })
            }
        },
        {
            path: '/clients',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: function(resolve, reject){
                $.get('/html/clients.html', function(htmlFromServer){
                    resolve({
                        template: htmlFromServer
                    })
                })
            }
        },
        {
            path: '/portfolio',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: function(resolve, reject){
                $.get('/html/portfolio.html', function(htmlFromServer){
                    resolve({
                        template: htmlFromServer
                    })
                })
            }
        },
        {
            path: '/interests',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: function(resolve, reject){
                $.get('/html/interests.html', function(htmlFromServer){
                    resolve({
                        template: htmlFromServer
                    })
                })
            }
        },
        {
            path: '/contact',
            // because we don't have the component initially, we write a function that defines how to get it, using AJAX
            // when we finally have the component, we RESOLVE it. if we fail to retrieve the component, we REJECT.
            component: function(resolve, reject){
                $.get('/html/contact.html', function(htmlFromServer){
                    resolve({
                        template: htmlFromServer
                    })
                })
            }
        },
    ]
})

var mainVm = new Vue({
    el: '#app',
    router: myRouter,
})
