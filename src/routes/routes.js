"use strict";

class AppRouter{
    constructor(app,router){
        this.router=router;
    }
    loadRouters(){
        this.router.get('/login',res.send('congrats'))
    }
}