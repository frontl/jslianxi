$('.box-2').on('click',function(){
		$('.box').css('display','none');
		$('.box-1').html("");
})

// 构造函数法
function Cat() {
	　　　　this.name = "构造函数法";
	}
	var cat1 = new Cat();
	　Cat.prototype.makeSound = function(){
　　　　alert("喵喵喵");
　　}
// alert(cat1.name);
	$('.jslianxi .js-ul1').on('click','li:nth-child(2)',function(){
	$('.box').css('display','inline-block');
	$('.box-1').html(cat1.name);
	cat1.makeSound();
})

// Object.create()法
	var Dog = {
　　　　name: "小毛",
　　　　makeSound: function(){ alert("Object.create()法"); }
　　};
　var dog10 = Object.create(Dog);
	$('.jslianxi .js-ul1').on('click','li:nth-child(3)',function(){
	$('.box').css('display','inline-block');
	$('.box-1').html(dog10.name);
　　dog10.makeSound(); // Object.create()法

})

// 极简主义法
	var Mouse = {
	　　　　createNew: function(){
	　　　　　　var cat = {};
	　　　　　　cat.name = "大小毛";
	　　　　　　cat.makeSound = function(){ alert("极简主义法"); };
	　　　　　　return cat;
	　　　　}
	};

　　var mouse1 = Mouse.createNew();
	$('.jslianxi .js-ul1').on('click','li:nth-child(4)',function(){
	$('.box').css('display','inline-block');
	$('.box-1').html(mouse1.name);
　　mouse1.makeSound(); // 极简主义法

})

    // 继承
var Animal = {
　　　　createNew: function(){
　　　　　　var animal = {};
　　　　　　animal.sleep = function(){ alert("睡懒觉"); };
　　　　　　return animal;
　　　　}
　　};
　　var Wenzi = {
　　　　createNew: function(){
　　　　　　var cat = Animal.createNew();
　　　　　　cat.name = "毛";
　　　　　　cat.makeSound = function(){ alert("继承"); };
　　　　　　return cat;
　　　　}
　　};
　var wenzi = Wenzi.createNew();
	$('.jslianxi .js-ul1').on('click','li:nth-child(5)',function(){
	$('.box').css('display','inline-block');
	$('.box-1').html(wenzi.name);
　　wenzi.sleep(); 

})

	 // 私有属性和私有方法
	 //为完成
	 var Cat0 = {
　　　　createNew: function(){
　　　　　　var cat = {};
　　　　　　var sound = "私有属性和私有方法/未完成";
　　　　　　cat.makeSound = function(){
   $('.box').css('display','inline-block');
	        $('.box-1').html(sound);
 };
　　　　　　return cat;
　　　　}
　　};
    var cat2 = Cat0.createNew();
　
	$('.jslianxi .js-ul1').on('click','li:nth-child(6)',function(){
　console.log(cat2.makeSound()); // undefined
})
	// 数据共享
	　var 	Io = {
　　　　sound : "数据共享",
　　　　createNew: function(){
　　　　　　var io = {};
　　　　　　io.makeSound = function(){
	        $('.box').css('display','inline-block');
	        $('.box-1').html(Io.sound); };
　　　　　　io.changeSound = function(x){ Io.sound = x; };
　　　　　　return io;
　　　　}
　　};
　var io12 = Io.createNew();
　var io21 = Io.createNew();
　
	$('.jslianxi .js-ul1').on('click','li:nth-child(7)',function(){
　　io12.makeSound(); // 数据共享
})


	// 10.21
	// 1
		$('.jslianxi .js-ul2').on('click','li:nth-child(1)',function(){
　　var x=$(this).text();
		x   =   x.replace(/\s+/g,"");
		console.log('abcdefg'.substring(4));
		console.log(x.substring(4))
			$('.box').css('display','inline-block');
			$('.box-1').html(x.substring(4));
	})
		// 2
  $('.jslianxi .js-ul2').on('click','li:nth-child(2)',function(){
		var str = 'aasdfssaaasasasasaa';
		var json = {};
		for (var i = 0; i < str.length; i++) {
		        if(!json[str.charAt(i)]){
		                json[str.charAt(i)] = 1;
		        }else{
		                json[str.charAt(i)]++;
		        }
		};
		var iMax = 0;
		var iIndex = '';
		for(var i in json){
		        if(json[i]>iMax){
		                iMax = json[i];
		                iIndex = i;
		        }
		}
			$('.box').css('display','inline-block');
			$('.box-1').html('出现次数最多的是:'+iIndex+'出现'+iMax+'次');
	})
// 3
var str = '122两是';
function getStrlen(str){
        var json = {len:0};
        var re = /[\u4e00-\u9fa5]/;
        for (var i = 0; i < str.length; i++) {
                if(re.test(str.charAt(i))){
                        json['len']++;
                }
        };
        return json['len']+str.length;
}
		$('.jslianxi .js-ul2').on('click','li:nth-child(3)',function(){
			$('.box').css('display','inline-block');
			$('.box-1').html(getStrlen(str));
	})
		// 4
		var arr = [1,2,43];
		var json = {a:6,b:4,c:[1,2,3]};
		var str = 'sdfsdf';
		function clone(obj){
		        var oNew = new obj.constructor(obj.valueOf());
		        if(obj.constructor == Object){
		                for(var i in obj){
		                        oNew[i] = obj[i];
		                        if(typeof(oNew[i]) == 'object'){
		                                clone(oNew[i]);
		                        }
		                }
		        }
		        return oNew;
		    }
		var json2 = clone(json);
				$('.jslianxi .js-ul2').on('click','li:nth-child(4)',function(){
			$('.box').css('display','inline-block');
			$('.box-1').html(json['a']);
	})
				// 5
				var x=
		'事件： 如onclick  this->发生事件的对象</br>'+
		'构造函数          this->new 出来的object</br>'+
		'call/apply        改变this'

     		var json2 = clone(json);
	$('.jslianxi .js-ul2').on('click','li:nth-child(5)',function(){
			$('.box').css('display','inline-block');
			$('.box-1').html(x);
	})
				// 6
    var    inArray = function(arr, elt) {
            for(var i = 0, len = arr.length; i < len; i++) {
                if(arr[i] === elt) {
                    return true;
                }
            }
            return false;
        };
    var    unique = function(arr) {
            if(arr.length < 2) return arr;
            var i = 0, len = arr.length; re = [];
            for(; i < len; i++) {
                if(!this.inArray(re, arr[i])) {
                    re.push(arr[i]);
                }
            }
            return re;
        };
	var arr = [9,1,'3',8,7,7,6,6,5,7,8,8,7,4,3,1]; // 这里的3 和 '3' 类型是不一致的,.,
		$('.jslianxi .js-ul2').on('click','li:nth-child(6)',function(){
			$('.box').css('display','inline-block');
			$('.box-1').html(unique(arr));
	})
		// 7
		var uniq = function (arr) {    
var a = [],        
    o = {},        
    i,        
    v,        
    len = arr.length;    
    if (len < 2) {        
        return arr;    
    }    
    for (i = 0; i < len; i++) {        
        v = arr[i];        
        if (o[v] !== 1) {            
            a.push(v);            
            o[v] = 1;       
        }    
    }    
    return a;
}
	var arr = [9,1,'3',8,7,7,6,6,5,7,8,8,7,4,3,1]; 
	var arr = [9,1,'3',8,7,7,6,6,5,7,8,8,7,4,3,1]; // 这里的3 和 '3' 类型是不一致的,.,
		$('.jslianxi .js-ul2').on('click','li:nth-child(7)',function(){
			$('.box').css('display','inline-block');
			$('.box-1').html(uniq(arr));
	})
		// 8
