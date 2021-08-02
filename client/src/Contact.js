function Contact() {
    return (
        <>

            {/* <!-- Main Page Heading --> */}
            <div class="col-12 text-center mt-5">
                <h1 class="text-dark pt-4"> Contact Us </h1>
                <div class="border-top border-primary w-25 mx-auto my-3"></div>
                <h2> Main Office - Contact Info: </h2> 
                <p class="lead"> E-mail: heartandhomeanimalshelter@gmail.com</p>
                <p class="lead"> Phone Number: 012-345-6789</p>
                <p class="lead"> Address: 2001 York Rd, Towson, MD, 21252</p> 
                <h2> New York City Office - Contact Info: </h2> 
                <p class="lead"> E-mail: heartandhomeanimalshelterNY@gmail.com</p>
                <p class="lead"> Phone Number: 607-261-4896</p>
                <p class="lead"> Address: 10 Manor St., New York, NY 10002</p> 
                <br/>
                <h2> Phoenix Office - Contact Info: </h2> 
                <p class="lead"> E-mail: heartandhomeanimalshelterAZ@gmail.com</p>
                <p class="lead"> Phone Number: 602-268-5225</p>
                <p class="lead"> Address: 1807 W Carson Rd, Phoenix, AZ, 85041</p> 
                <br/>
                <h2> Los Angeles Office - Contact Info: </h2> 
                <p class="lead"> E-mail: heartandhomeanimalshelterLA@gmail.com</p>
                <p class="lead"> Phone Number: 323-751-1829</p>
                <p class="lead"> Address: 7609 Mckinley Ave, Los Angeles, CA, 90001</p> 
                <br/>
            </div>

            {/* <!--- Emoji Section --> */}
            <a class = "navbar bg-primary sticky-top emoji" href = "#emoji" role = "button" data-toggle = "collapse"><i class= "fas fa-paw"></i></a>
            <div class = "collapse" id="emoji">
                <div class="container">
                    <div class="row">
                        <div class = "col-lg-6 col-md-3"><img class = "gif" src = "img/gif/animal1.gif"/></div>
                        <div class = "col-lg-6 col-md-3"><img class = "gif" src = "img/gif/animal2.gif"/></div>
                        <div class = "col-lg-6 col-md-3"><img class = "gif" src = "img/gif/animal3.gif"/></div>
                        <div class = "col-lg-6 col-md-3"><img class = "gif" src = "img/gif/animal4.gif"/></div>
                    </div>
                </div>
            </div>

            {/* <!--- Connect --> */}
            <div class = "container-fluid padding">
            <div class = "row text-center padding">
                <div class = "col-12">
                    <h2>Connect</h2>
                </div>
                <div class ="col-12 social padding">
                    <a href = "https://www.facebook.com/"><i class = "fab fa-facebook"></i></a>
                    <a href = "https://twitter.com/"><i class = "fab fa-twitter"></i></a>
                    <a href = "https://www.instagram.com/"><i class = "fab fa-instagram"></i></a>
                    <a href = "https://www.youtube.com/"><i class = "fab fa-youtube"></i></a>
                </div>
            </div>
            </div>
           
        </>
    );
  }
  
  export default Contact;