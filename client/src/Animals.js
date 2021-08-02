function Animals() {
    return (
        <>
            <div class="col-12 text-center mt-5">
                <h1 class="text-dark pt-4"> Find the right pet for you!</h1>
                <div class="border-top border-primary w-25 mx-auto my-3"></div>
                <p class="lead"> Click the type of pet you are looking for!</p>
            </div>


            <div class = "container-fluid padding">
                <a href="dogs.html">
                <img src="img/dog.jpg" class="petSelector" alt="Dog Image"/>
                </a>

                <a href="cats.html">
                <img src="img/cat.jpg" class="petSelector" alt="Cat Image"/>
                </a>
            </div>
           
        </>
    );
  }
  
  export default Animals;