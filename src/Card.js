import React from "react";

function Card() {
    return (
        <div class="container-fluid">
            <div class="row justify-content-md-center">
                <div class="col-3">
                    <div class="card text-white bg-primary mb-3">
                        <div class="card-header">
                            <h5 class="card-title">Card 1</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card text-white bg-danger mb-3">
                        <div class="card-header">
                            <h5 class="card-title">Card 2</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card text-white bg-success mb-3">
                        <div class="card-header">
                            <h5 class="card-title">Card 3</h5>
                        </div>
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
