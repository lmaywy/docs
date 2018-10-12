appendCounter()
var myVar = setInterval(function(){displayCounts()}, 500);
function displayCounts() {
    var tests=document.getElementsByTagName("p")
    var passTests=0;
	var failedTests=0
    for(i=0;i<tests.length;i++)
        if(tests[i].innerText.indexOf("Passed   ")>=0)
            passTests++;
	else if(tests[i].innerText.indexOf("Scenario Outline")>0)
            passTests++;
	else if(tests[i].innerText.indexOf("Failed    ")>0)
            failedTests++;
    document.getElementById("tests-counter").innerText=(passTests+failedTests);
}
function appendCounter(){
    var iDiv = document.createElement('div');
    iDiv.id = 'tests-counter';
    iDiv.className = 'block';
	if(iDiv.innerText>50)
		iDiv.style="text-align:right; color:yellow; font-size:35px; display:block; height:50px; width:250px; top:200px; right:80px; position:absolute;"
    else
		iDiv.style="text-align:right; color:yellow;font-size:35px; display:block; height:50px; width:250px; top:10px; right:80px; position:absolute;"
    iDiv.innerText=1
    document.getElementsByClassName('log-header__section selected')[0].appendChild(iDiv);
}
