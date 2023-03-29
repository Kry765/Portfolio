import { IconMenu2 } from '@tabler/icons-react';
import React from 'react'
import '../style/main.scss';
export default class Main extends React.Component{
    render(){
        return(
            <div>
                <nav className='nav'>
                    <IconMenu2 className='nav__burger-icon'/>                    
                </nav>
                <div className='menu-items'>
                    
                </div>
            </div>
        );
    }
}