function Petcare() {
    return (
        <>

            <div class="col-12 text-center mt-5">
                <h1 class="text-dark pt-4"> PetCare Resources</h1>
                <div class="border-top border-primary w-25 mx-auto my-3"></div>
                <p class="lead"> A list of resources on how to take care of your pet!</p>
            </div>

            {/* <!-- Resources --> */}
            <div class="col-12 text-center mt-5">
                <a href="https://veterinary.rossu.edu/blog/guide-for-taking-care-of-animals">Guide For Taking Care Of Animals</a><br/>
                <a href="https://www.avma.org/resources-tools/pet-owners/petcare">AVMA Pet care</a><br/>
                <a href="https://www.friendshiphospital.com/veterinary-social-work-services/pet-care-financial-resources/">Pet-Care Financial Resources</a><br/>
                <a href="https://www.dkfindout.com/us/animals-and-nature/pet-care/">Taking Care of Different Pets</a><br/>
                <a href="https://www.hillspet.com/pet-care/routine-care/10-responsible-pet-care-tips">HillsPet: 10 Responsible Pet Care Tips</a><br/>
                <a href="https://www.cdc.gov/healthypets/health-benefits/index.html">CDC: Healthy Pets, Healthy People</a><br/>
                <a href="https://vetsource.com/news/top-10-ways-to-keep-your-pet-happy-and-healthy/">Vetcourse: Top 10 Ways to Keep Your Pet Happy and Healthy</a><br/>
                <a href="https://www.wellnesspetfood.com/blog/are-you-doing-these-6-things-keep-your-pet-healthy">Are You Doing These 6 Things to Keep Your Pet Healthy?</a><br/>
                <a href="https://www.sgu.edu/blog/veterinary/tips-on-taking-care-of-animals/">Taking Care of Animals: Pro Tips for Pet Owners</a><br/>
                <a href="https://www.tutorialspoint.com/how-to-take-care-of-pets-at-home">How to Take Care of Pets at Home?</a><br/>
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
           
        </>
    );
  }
  
  export default Petcare;