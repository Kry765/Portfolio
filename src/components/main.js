import { IconMenu2 } from '@tabler/icons-react';
import React from 'react'
import '../style/main.scss';
export default class Main extends React.Component{
    render(){
        const viewMenu = () => {
            const x = document.querySelector('toggle-mobile-nav')
            const y = document.querySelector('.nav__mobile-menu-items')
            console.log(x)
        }

        return(
            <div>
                <nav className='nav'>
                    <button onClick={viewMenu}>
                    <IconMenu2 className='nav__burger-icon' />    
                    </button>
                    <div className='nav__mobile-menu-items'>
                        <div className='nav__mobile-menu-item'>About Me</div>
                        <div className='nav__mobile-menu-item'>Skills</div>
                        <div className='nav__mobile-menu-item'>Certyfication</div>
                        <div className='nav__mobile-menu-item'>Concact me</div>
                    </div>               
                </nav>
                
            </div>
        );
    }
}