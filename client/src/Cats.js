function Cats() {
    return (
        <>

            <div class="grid-container">
                <div class="item1">Cats near you!</div>

                <div class="item2"><h1><strong>Cat Filter</strong></h1>
                    <br/>

                    <h3>Filter your search below!</h3>  

                    <form action="cats.html" method="get">
                    <label for="br/eed">Br/eed:</label><br/>
                    <select name="br/eed" id="br/eed">
                        <option value="none" selected disabled hidden>Any</option>
                        <option value="domesticShorthair">Domestic Shorthair</option>
                        <option value="americanShorthair">American Shorthair</option>
                        <option value="domesticLonghair">Domestic Longhair</option>
                        <option value="maineCoon">Maine Coon</option>
                        <option value="siamese">Siamese</option>
                        <option value="other">Other Br/eed</option>
                    </select>
                    <br/>
                    <label for="age">Age</label><br/>
                    <select name="age" id="age">
                        <option value="none" selected disabled hidden>Any</option>
                        <option value="kitten">Kitten (under 1 year old)</option>
                        <option value="young">Young (1 to 2 years old)</option>
                        <option value="adult">Adult (2 to 5 years old)</option>
                        <option value="senior">Senior (5+ years old)</option>
                    </select>
                    <br/>
                    <label for="gender">Gender</label><br/>
                    <select name="gender" id="gender">
                        <option value="none" selected disabled hidden>Any</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <br/>
                    <label for="weight">Weight range</label><br/>
                    <select name="weight" id="weight">
                        <option value="none" selected disabled hidden>Any</option>
                        <option value="small">Under 6 pounds</option>
                        <option value="medium">6 to 11 pounds</option>
                        <option value="large">12 to 18 pounds</option>
                        <option value="xl">Over 18 pounds</option>
                    </select>
                    <br/>
                    <label for="color">Color</label><br/>
                    <select name="color" id="color">
                        <option value="none" selected disabled hidden>Any</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="br/own">Br/own</option>
                        <option value="other">Other</option>
                    </select>
                    <br/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
                    </form>

                </div>

                <div class="item3">
                    <div class="grid">
                        <div class="columns">
                                <div class="card">
                                    <h3>Pet name here</h3>
                                    <img src ="http://placekitten.com/200/300" class="petPlaceholder"/>
                                    <p>Pet Description/Tags here</p>
                                </div>
                            </div>
                        
                            <div class="columns">
                                <div class="card">
                                    <h3>Pet name here</h3>
                                    <img src="http://placekitten.com/200/300" class="petPlaceholder"/>
                                    <p>Pet Description/Tags here</p>
                                </div>
                            </div>
                            
                            <div class="columns">
                                <div class="card">
                                    <h3>Pet name here</h3>
                                    <img src="http://placekitten.com/200/300" class="petPlaceholder"/>
                                    <p>Pet Description/Tags here</p>
                                </div>
                            </div>
                        
                            <div class="columns">
                                <div class="card">
                                    <h3>Pet name here</h3>
                                    <img src="http://placekitten.com/200/300" class="petPlaceholder"/>
                                    <p>Pet Description/Tags here</p>
                                </div>
                            </div>
                            
                            <div class="columns">
                                <div class="card">
                                    <h3>Pet name here</h3>
                                    <img src="http://placekitten.com/200/300" class="petPlaceholder"/>
                                    <p>Pet Description/Tags here</p>
                                </div>
                            </div>
                            
                            <div class="columns">
                                <div class="card">
                                    <h3>Pet name here</h3>
                                    <img src ="http://placekitten.com/200/300" class="petPlaceholder"/>
                                    <p>Pet Description/Tags here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           
        </>
    );
  }
  
  export default Cats;