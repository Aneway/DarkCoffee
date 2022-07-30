import './style.css'

export default function Footer() {
    let image = [
        {
            img: "/img/teste1.jpg",
        },
        {
            img: "/img/cupofcoffee.jpg",
        },
        {
            img: "/img/darthDrink.jpg",
        },
        {
            img: "/img/yodaD.jpg",
        },
        {
            img: "/img/darthJuice.jpg",
        },
        {
            img: "/img/darthBolo2.jpg",
        },
        {
            img: "/img/darthDrink.jpg",
        },
        {
            img: "/img/cupofcoffee.jpg",
        },
        {
            img: "/img/teste1.jpg",
        }
      ]

    return (
        <div class="div-footer">
            <div>
                <h1 class="h2_obs"><br></br>Tratamento especial</h1>
                    <p class="h2_obs"><br></br>O “Vader’s Dark Side Roast Coffee” é um blend de três grãos diferentes em dois diferentes tipos de torra.
                        O produto é devidamente produzido pelos leais Stormtroopers e conta com cafés vindos da África e Indonésia. 
                        São 340gr para você aproveitar e se deliciar! Perfeito para horas de sono enquanto explora a galáxia.
                        Quer levar o café para a Estrela da Morte… digo, para casa? Ele está à venda aqui por US$ 14,99 (cerca de R$ 30).</p>
            </div>
            <div>
                <ul class="div-card">
                    {
                        image.map(function(card){
                              
                            return <div>
                                        <img class="card-edit" src={card.img}></img>
                                    </div>
                            }
                        )
                    }
                </ul>
            </div>
            <footer class="Footer2">
                <img class="icon" src="/img/iconD.png"></img>
                    <nav>
                        <h2>Fique conectado !</h2>
                        <ul>
                            <li><a href="#">Email</a></li>
                                <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Youtube</a></li>
                                        <li><a href="#">Facebook</a></li>
                        </ul>
                    </nav>
            </footer>
        </div>
    )
}

