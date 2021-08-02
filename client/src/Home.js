import background from "./img/bg1.jpeg";

function Home() {
    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
            <link rel="stylesheet" href="https://m.w3newbie.com/you-tube.css"/>

            {/* <!--- Image Slider --> */}
            <div id = "slides" class = "carousel slide" data-ride = "carousel">
                <ul class = "carousel-indicators">
                    <li data-target = "#slides" data-slide-to = "0" class = "active"></li>
                    <li data-target = "#slides" data-slide-to = "1"></li>
                    <li data-target = "#slides" data-slide-to = "2"></li>
                </ul>
                <div class = "carousel-inner">
                    <div class = "carousel-item active">
                        <img src={ background }/>
                        <div class = "carousel-caption">
                            <h1 class="display-2">Pet Connect Animal Organization</h1>
                            <h3> Connect with a pet in need!</h3>
                            <a href = "Home.html"><button type = "button" class = "btn btn-outline-light btn-lg"> ADOPT NOW </button></a>
                            <a href = "Animals.html"><button type = "button" class = "btn btn-primary-light btn-lg"> View Animals</button></a>
                        </div>
                    </div>
                    <div class = "carousel-item">
                        <img src = "img/AnimalShelterbackground1.jpeg"/>
                        <div class = "carousel-caption">
                            <h1 class="display-2">Pet Connect Animal Organization</h1>
                            <h3> Donate or advertise to local animal shelters!</h3>
                            <a href = "Donate.html"><button type = "button" class = "btn btn-outline-light btn-lg"> DONATE NOW </button></a>
                            <a href = "Donate.html"><button type = "button" class = "btn btn-primary-light btn-lg"> Advertise Animal Shelters</button></a>
                        </div>
                    </div>
                    <div class = "carousel-item">
                        <img src = "img/AnimalShelterbackground2.jpeg"/>
                        <div class = "carousel-caption">
                            <h1 class="display-2">Pet Connect Animal Organization</h1>
                            <h3> Learn more about how to take care of pets!</h3>
                            <a href = "Animals.html"><button type = "button" class = "btn btn-outline-light btn-lg"> LEARN NOW </button></a>
                            <a href = "Animals.html"><button type = "button" class = "btn btn-primary-light btn-lg"> Resources on Pet Care</button></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--- Jumbotron --> */}
                <div class = "container-fluid">
                    <div class = "row jumbotron">
                        <div class = "col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                            <p class = "lead"> If you have any questions or inquires about anything such as how to help or how the adoption process works. Please do not hesistate and reach out to us!
                            </p>
                        </div>
                        <div class = "col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
                            <a href = "Contact.html"><button type = "button" class =  "btn btn-outline-secondary btn-lg"> View Contact Info</button></a>
                    </div>
                </div>
            </div>
            {/* <!--- Welcome Section --> */}
            <div class = "container-fluid padding">
                <div class = "row welcome text-center">
                    <div class = "col-12">
                        <h1 class =  "display-4"> Give your heart to a pet in need.</h1>
                    </div>
                    <div class="col-12">
                        <p class="lead"> Welcome to Heart & Home Animal Shelter! We are an organization that are in contact with animal shelters around the Maryland Area in which we provide information of animals that each animal shelter has to give an opprotunity for animals to find a home.</p>
                </div>
            </div>

            {/* <!--- Three Column Section --> */}
            <div class = "container-fluid padding">
                <div class = "row welcome text-center">
                <div class = "col-12">
                    <h1 class =  "display-4"> Our Three Goals.</h1>
                </div>
            </div>
            <div class = "row text-center padding">
                <div class = "col-xs-12 col-sm-6 col-md-4">
                    <img class = "goals" src = "img/Connect.png"/>
                    <h3>Connect</h3>
                    <p> Connecting people and pets. </p>
                </div>
                <div class = "col-xs-12 col-sm-6 col-md-4">
                    <img class = "goals" src = "img/support.jpeg"/>
                    <h3>Support</h3>
                    <p> Donating and supporting animal shelters across the nation. </p>
                </div>
                <div class = "col-sm-12 col-md-4">
                    <img class = "goals" src = "img/Awareness.jpeg"/>
                    <h3>Awareness</h3>
                    <p> Raising awareness for animal care.</p>
                </div>
            </div>
            <hr class = "my-4"/>
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
        </div>
           
        </>
    );
  }
  
  export default Home;