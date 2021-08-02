function Donate() {
    return (
        <>

            <div class="col-12 text-center mt-5">
                <h1 class="text-dark pt-4"> Donate to Animal Shelters</h1>
                <div class="border-top border-primary w-25 mx-auto my-3"></div>
                <p class="lead"> Pet Connect is a not for profit service that is maintained stricly though community donations and ad revenue. You can help fund our service by donating directly to our paypal with the link below!</p>
            </div>



            {/* <!--- Donation Section--> */}
            <div class = "container-fluid padding">
                <div class = "row welcome text-center">
                        <a href="https://www.paypal.com">
                        <img border="0" alt="Paypal Donation Link" src="img/paypal.png"/>
                        </a>
                </div>
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
  
  export default Donate;