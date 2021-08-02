function Administrative() {
    return (
        <>
            <div class = "loginbox">
                <img src = "img/animalshelterlogo.png" class = "avatar"/>
                <h1 className="logintitle"> Adminstrative Log-In</h1>
                <form>
                    <p>Username</p>
                    <input type = "text" name = "" placeholder = "Enter Username"/>
                    <p>Password</p>
                    <input type = "password" name = "" placeholder = "Enter Password"/>
                    <input type = "submit" name = "" value = "Login"/>
                    <a href= "AdminForgotPassword.html"> Forgot your password?</a><br/>
                    <a href= "#"> Create Adminstrative Account?</a><br/>
                </form>
            </div>
        </>
    );
  }
  
  export default Administrative;