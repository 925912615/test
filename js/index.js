let vm=new Vue({
    el:'#app',
    data:{
        show: '在线',
        loginClass:'login',
        activeClass:'',
        hideClass:'',
        inputClass:'',
        inputClass1:''
    },
    methods:{
        login1(){
            this.hideClass='';
            this.activeClass='';
            if (this.show==='消失')
                this.activeClass='login_active';
             else
                this.activeClass='';
            // this.show='在线';
        },
        login2(){
            this.activeClass='';
            if (this.show==='在线' || this.hideClass==='')
                this.hideClass='login_active1';
            // else
            this.show='消失';
            //     this.hideClass='';
        },
        login3(){
            this.hideClass='';
            this.activeClass='';
            this.hideClass='login_active2';
            this.show='消失';
        },
        login4(){
            this.hideClass='';
            this.activeClass='';
            if (this.show==='消失'){
                this.login1();
                this.show='在线';
            } else{
                this.login3();
            }
        },
        focusfns(){
            this.inputClass = 'inputclass';
        },
        blurfns(){
            this.inputClass='';
        },
        focusfns1(){
            this.inputClass1 = 'inputclass1';
        },
        blurfns1(){
            this.inputClass1='';
        }
    }
});