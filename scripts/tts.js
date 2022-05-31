window.ttsTrig = false; 


function runTts(){
	
	  
	 if(!('speechSynthesis' in window)){
	  	
	  	  return  window.alert('your browser does not support Text to Speech!')
	  	
	  }
	  
 const msg = new SpeechSynthesisUtterance()
 
  msg.text = `${question[0]}+${question[1]}`
  
  
  window.speechSynthesis.speak(msg);
	
	
}

function ttsCheck(box){
	
	   ttsTrig = box.checked
	   
   console.log(ttsTrig)
	   
	   if(ttsTrig) runTts();
	
}