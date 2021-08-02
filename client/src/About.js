function About() {
    return (
        <>
            {/* <!-- Main Page Heading --> */}
            <div class="col-12 text-center mt-5">
                <h1 class="text-dark pt-4"> Connect with a pet that is in need!</h1>
                <div class="border-top border-primary w-25 mx-auto my-3"></div>
                <p class="lead"> Welcome to Pet Connect! We are an organization that are in contact with animal shelters around the Maryland Area in which we provide information of animals that each animal shelter has to give an opprotunity for animals to find a home!</p>
            </div>

            {/* <!--- Two Column Section --> */}
            <div class = "container-fluid padding">
                <div class = "row padding">
                    <div class = "col-lg-6">
                        <h2>Our Goal</h2> 
                        <p> According to a study regarding online resources available to Maryland residents looking to adopt a new animal, there seems to be no centralized website for placing pets throughout the state. Instead many different organizations have their own, often antiquated, websites. This causes many adoptees the inconvenience of going around to different shelters just to not find what they are seeking. This steers away many potential adopters. 
                            In order for more shelter pets to be seen and adopted there needs to be a single site in which many different organizations statewide can upload and update available pet information. Our goal is to build a website that accomplishes these goals making pet adoption much more efficient for all involved. 				
                            Our as an organization goal is to develop a web-based application that compiles state-wide shelter information into one source and allow the user to see what animals that are in the animal shelters. This will allow users to see and view the details about each animal in which they can have the option to adopt them. Also it will allow users the option to donate to the website to support the animal shelters. 
                        </p> 
                    </div>
                    <div class = "col-lg-6">
                        <img src= "img/OurGoal.jpeg" class ="img-fluid"/> 
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


            {/* <!--- Meet the team --> */}
            <div class = "container-fluid padding">
                <div class = "row welcome text-center">
                    <div class = "col-12">
                        <h1 class = "display-4"> Meet the Team</h1>
                    </div>
                    <hr/>
                </div>
            </div>	

            {/* <!--- Cards --> */}
            <div class = "container-fluid padding">
                <div class = "row padding">
                    <div class ="col-md-4">
                        <div class = "card">
                            <img class = "card-img-top" src ="img/team2.png"/>
                            <div class = "card-body">
                                <h4 class = "card-title"> Alexander Bautista </h4>
                                <p class="card-text"> Position: Web Master, Front-End Developer </p>
                                <p class="card-text"> University: Towson University</p>	
                                <p class="card-text"> Major: Computer Science</p>	
                            </div>
                        </div>
                    </div>
                    <div class ="col-md-4">
                        <div class = "card">
                            <img class = "card-img-top" src ="img/team2.png"/>
                            <div class = "card-body">
                                <h4 class = "card-title"> Brandon Bagby </h4>
                                <p class="card-text"> Position: Project Manager, Back-End Developer</p>
                                <p class="card-text"> University: Towson University</p>	
                                <p class="card-text"> Major: Computer Science</p>	
                            </div>
                        </div>
                    </div>
                    <div class ="col-md-4">
                        <div class = "card">
                            <img class = "card-img-top" src ="img/team2.png"/>
                            <div class = "card-body">
                                <h4 class = "card-title"> Oluwasanjo Okeowo </h4>
                                <p class="card-text"> Tester, Back-End Developer</p>
                                <p class="card-text"> University: Towson University</p>	
                                <p class="card-text"> Major: Computer Science</p>		
                            </div>
                        </div>
                    </div>
                    <div class ="col-md-4">
                        <div class = "card">
                            <img class = "card-img-top" src ="img/team2.png"/>
                            <div class = "card-body">
                                <h4 class = "card-title"> Matt Saxton </h4>
                                <p class="card-text"> Documenter, Front-End Developer</p>
                                <p class="card-text"> University: Towson University</p>	
                                <p class="card-text"> Major: Computer Science</p>	
                                {/* <!--- <a href = "#" class = "btn btn-outline-secondary">See Profile </a>	-->	 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default About;