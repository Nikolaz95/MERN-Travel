import React from 'react'
import titleName from '../../hooks/useTitle';

const Header = () => {
    titleName('Home Page');
    return (
        <div>Header</div>
    )
}

export default Header