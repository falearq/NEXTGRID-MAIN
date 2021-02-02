import React from 'react'
import footerMenu from '../data/footerMenu'

export default function FooterMenu() {

    return (
        <ul className='footer-menu'>
           {footerMenu.map((item, i ) => {
               return <li key={i}> 
                  <a href={item.url}> {item.title} </a>
               </li>
           })}
        </ul>
    )
}
