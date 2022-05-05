import React, {useState, useEffect} from 'react'


function WelcomeFunction(props){ 
	const[loginForm, setLoginForm] = useState(initializeLoginForm());
	const[flg, setFlg] = useState(false);	
	const[registerForm, setRegisterForm] = useState({email:'abcd@gmail.com'});
	function initializeLoginForm(){
		return {
			userName:'Rajesh',
			passWord:'adafasdf'
		}
	}
	//oninit - oniniatial loading only
	useEffect(()=>{
		setLoginForm({ ...loginForm,  ['userName']:'Hari' })
	},[])
	//componentDidUpate
	useEffect(()=>{
		if(loginForm.userName === 'Kumar'){
		 setLoginForm({ ...loginForm,  ['userName']:'' })
	   }
	},[loginForm])
	function handleOnClick(){
		setLoginForm({ ...loginForm,  ['userName']:'Rajesh' })
	}
    return( <div> 	
		<h1>Hello Vivek</h1>
		<h2>Functional Programming{loginForm.userName}</h2>	
			{registerForm.email}
			
		<button onClick={handleOnClick}>	onClickHooksBtn </button>	
	</div>);
  
}
export default WelcomeFunction
