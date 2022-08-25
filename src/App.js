import React from "react";

import "./App.css";

function App() {

  const handleSubmit = (event) => {
    //Prevent page reload
    const loginForm = document.getElementById("login_form");
   
        const username = loginForm.username.value;
         
        const mail = loginForm.email.value;
        
         
        var setpassword = document.getElementById("pass1").value;
         
        var confirmpassword = document.getElementById("pass2").value; 

    event.preventDefault();
 
    if (username && setpassword && confirmpassword && mail) 
    {
           if(setpassword !== confirmpassword)  
           {   
               console.log(setpassword+"jkgf"+confirmpassword);
             alert("Passwords did not match");  
           }else{
            alert("You have successfully logged in.");
           window.location.reload();
           }
    } else
        if(setpassword && confirmpassword && username){
        alert(" email is needed.");
     }else
         if(setpassword && confirmpassword && mail){
        alert("username is needed.");
     }else 
         if(username && mail){
        alert("password is needed.");
     }else
     if (setpassword !== confirmpassword){
        alert("username & email is needed.");
     }else
    if(username){
        alert("email & password is needed.");
     }else 
    if(mail){
        alert("username & password is needed.");
     }
   
    else{ 
        alert("username & email & password is needed For Login.");
     }
     
  };

 
   
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit} id="login_form">
        <div className="input-container">
          <label for="username">Username </label>
          <input type="text" name="username" class="login_form_field" placeholder="Enter Username"/>
          
        </div>
        <div className="input-container">
          <label for="Email">Email </label>
          <input type="email" name="email" class="login_form_field" placeholder="Enter Email"  />
          
        </div>
        <div className="input-container">
          <label for="Set Password">Set Password </label>
          <input type="password" id="pass1" class="login_form_field" placeholder="Set a Password"  />
          
        </div>
        <div className="input-container">
          <label for="Confirm Password">Create Password </label>
          <input type="password" id="pass2" class="login_form_field" placeholder="Confirm Your Password"  />
          
        </div>
    
        <div className="button-container">
          <button type="submit" >Create</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {renderForm}
      </div>
    </div>
  );
}

export default App;