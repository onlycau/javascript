var vm = new Vue({
  el:'#example',
  data:{
    message:'Hello'
  },
  computed:{
    //计算属性的 getter
    reversedMessage:function(){
      //this 指向vm实例
      return this.message.split('').reverse().join('')
    }
  },
  methods:{
  now : function(){
    return Date()
  }
}
})
//计算属性基于响应式依赖进行缓存 相关响应式依赖发生改变时才会重新求值
//每当触发重新渲染时 调用方法总会再次执行函数
/*
var vm = new Vue({
  el:'#example',
  data:{
    message:'Hello'
  },
  methods: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})
*/
//侦听属性
var vm2 = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed:{
    fullName:{
      get:function(){
        return this.firstName + ' ' + this.lastName
      },
      set:function(newValue){
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length-1]
      }
    }
  }
})