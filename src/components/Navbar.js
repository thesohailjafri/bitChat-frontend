import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';

function Navbar() {
    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substr(1);
    const [activeItem, setActiveItem] = React.useState(path);

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    };


    return (
        <div>
            <Menu attached='top' tabular>
                <Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}
                    as={Link}
                    to='./'
                />
                <Menu.Item
                    name='explore'
                    active={activeItem === 'explore'}
                    onClick={handleItemClick}
                    as={Link}
                    to='./explore'
                />
                <Menu.Item
                    name='messages'
                    active={activeItem === 'messages'}
                    onClick={handleItemClick}
                    as={Link}
                    to='./messages'
                />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='login'
                        active={activeItem === 'login'}
                        onClick={handleItemClick}
                        as={Link}
                        to='./login'
                    />
                </Menu.Menu>
            </Menu>
        </div>
    );
}


export default Navbar;
