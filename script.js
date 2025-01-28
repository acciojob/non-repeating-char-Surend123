function firstNonRepeatedChar(str) {
 // Write your code here
	let map = new Map();
	for(let ch of str){
		if(!map.has(ch)){
			map.set(ch,1);
		}else{
			map.set(ch,map.get(ch)+1);
		}
	}
	for(let ch of str){
		if(map.get(ch)==1){
			return ch;
		}
	}
	
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
