(function(){
  {
    var a = 10;
    function A(){
      a = 5;
      console.log(a);
      console.log(this.a);
    }
    A()
  }
})()