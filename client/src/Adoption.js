function Adoption() {
    return (
        <>

            <div class="col-12 text-center mt-5">
                <h1 class="text-dark pt-4"> Adoption Inquiry Form</h1>
                <div class="border-top border-primary w-25 mx-auto my-3"></div>
                <p class="lead"> Fill out this form if you are interested in adopting a pet!</p>
            </div>

            <div class="container">
                <h2>Please fill out our preliminary adoption application below!</h2>
                <form className="contact" action="received.html" method="POST">
                <label for="fname">First Name</label> <br/>
                <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>
                <br/>

                <label for="lname">Last Name</label> <br/>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
                
                <br/>

                <label for="petID">The ID of the pet you are interested in adopting</label> <br/>
                <input type="text" id="petID" name="petID" placeholder="Pet ID Number.."/>
                
                <br/>

                <label for="subject">Please let us know more about you in the space provided</label><br/>
                <textarea id="subject" name="subject" placeholder="About you.."></textarea>

                <br/>

                <input type="submit" value="Submit"/>
                </form>
            </div>
           
        </>
    );
  }
  
  export default Adoption;