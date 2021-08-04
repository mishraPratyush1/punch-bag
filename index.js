new Vue({
    el:'#vue-app', //root element
    data:{
        health:100,
        ended:false
    },
    methods:{
        Punch:function () 
        {
            this.health-=10;
            if (this.health <= 0) 
            {
                this.ended=true;
            }
            
        },

        Restart:function () 
        {
            this.health=100;
            this.ended=false;
        }
    }
})