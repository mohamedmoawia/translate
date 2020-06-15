import React from 'react';

import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component{
    static contextType = LanguageContext;
    render(){
        const text = this.context.language === 'english'? 'Name:': 'Naam:'
        return(
            <React.Fragment>
                <label>{text}</label>
                <input className='form-control' /> 
            </React.Fragment>
        )
    }
}

export default Field