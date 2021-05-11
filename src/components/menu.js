import React from 'react'

const Menu = () => {
    return (
        <>
            <div class="card">
                <img class="card-img-top" src="https://www.aerocontact.com/public/img/aviaexpo/produits/images/588/detail_antonov-an-225-mriya_900x636.jpg" alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">Antonov An-225</h5>
                        <p class="card-text">Antonov est un bureau d'études et de construction aéronautique ukrainien fondé 31 mai 1946 par Oleg Konstantinovitch Antonov, sous le nom de OKB-153. </p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Année :</strong> 2019</li>
                        <li class="list-group-item"><strong>Localité :</strong> Kinshasa</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Détails</a>
                        <a href="#" class="card-link">Favoris</a>
                        <a href="#" class="card-link">General</a>
                    </div>
            </div>
        </>
    );
}

export default Menu
