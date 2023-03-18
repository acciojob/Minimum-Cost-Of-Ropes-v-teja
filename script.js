function calculateMinCost() {
  var inputData = document.querySelector("input").value;
var inputArray = inputData.split(",");

	for(let i=0;i<inputArray.length;i++){
		inputArray[i] = Number(inputArray[i]);
	}
	var cost =0;

	while(inputArray.length>1){
		inputArray.sort(function (a,b){return a-b;});
		var newRope = inputArray[0]+inputArray[1];
		cost+=newRope;
		inputArray.splice(0,2);
		inputArray.push(newRope);
	}
	//alert(cost);
	document.querySelector("#result").textContent = cost;
}  

