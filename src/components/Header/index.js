import './style.css'
import { Comp } from './styled'

export default function Header() {
    let links = [
        {
          link: 'https://google.com',
          text: 'Home'
        },
        {
          link: 'https://google.com',
          text: 'Nossa história'
        },
        {
          link: 'https://google.com',
          text: 'Rede'
        },
        {
          link: 'https://google.com',
          text: 'Trabalhe conosco'
        },
        {
          link: 'https://google.com',
          text: 'Menu'
        }
      ]

    return (
        <div>
            <Comp bColor='#2d2e2d' className="header-container">
                        {
                            links.map(function(element){
                              
                                return <div className="header-item">
                                        <Comp href={element.link} aColor="white"> {element.text} </Comp>
                                    </div>
                                }
                            )
                        }
                    </Comp>
        </div>
        
    )
}