function TjzLoad(id){
		this.id = id;
		this.load = document.getElementById(this.id);
		this.cssName = 'tjz_load';
		this.show = function(){
			this.load.className = this.cssName;
		}
		this.close = function(){
			this.load.className = '';
		}
}
function use(argument){
	var file = argument; 
	if (file.match(/.*\.js$/)){
		   document.write('<script type="text/javascript" src="' + file + '"></script>'); 
	}else if(file.match(/.*\.css$/)){
		   document.write('<link rel="stylesheet" href="'+file+'" type="text/css" />'); 
	}
}