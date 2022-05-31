/* constants */

const maxNum = 99
let question = []

window.onload = setup


function setup(n){
	
	
	  const q = document.querySelector('#question')
	
	  const msg = document.querySelector('#msg')
	 
	  const input = document.querySelector('#input')
	  
	  
	  question = generateQuestion()
	  
	  q.innerHTML = question.join(' + ')
	  msg.innerHTML = ''
	  
	  input.value = ''
	  
	  resetTimer()
	  startTimer()
	  
	 if(ttsTrig) runTts();
	  	 
	
}

function checkup(){

	
	  const input = document.querySelector('#input').value
	  
	  const answer = findAnswer()
	  
	  if(answer == -1) return; 
	  
	  
	 const msg = document.querySelector('#msg')
	 
	 
	  if(input == answer) return msg.innerHTML = '<img src="https://media.discordapp.net/attachments/741678530936701038/981190585597702184/372103860_CHECK_MARK_400px.gif" alt="Correct!">'; 
	  	
	   return msg.innerHTML = '<img src="https://media.discordapp.net/attachments/741678530936701038/981189954300444752/red-cross.gif" alt="Wrong!">'; 
	   
	   
	  
	   
}

function show(){
	
	   const msg = document.querySelector('#msg')
	 
	  msg.innerHTML = findAnswer(); 
	
}


function generateQuestion(){
	
	  const n1 = Math.floor(Math.random() * maxNum)
	  const n2 = Math.floor(Math.random() * maxNum)
	  
	  return [n1, n2]
	
}

function findAnswer(){
	
	 if(!question.length) return -1;
	
	 return question[0] + question[1]
	
}