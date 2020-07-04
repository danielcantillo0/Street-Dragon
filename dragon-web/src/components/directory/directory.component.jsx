import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'


class Directory extends React.Component {
    constructor() {
        super();


        this.state = {
            sections:[
                {
                    title: 'Bolsos',
                    imageUrl:'https://i.ibb.co/ZLWKx7K/logo.png',
                    id: 1
                },
                {
                    title: 'Croptops',
                    imageUrl:'https://i.ibb.co/LYqD28P/lightmyfire.jpg',
                    id: 2
                },
                {
                    title: 'Prints',
                    imageUrl:'https://i.ibb.co/t2KXhgf/Emily.jpg',
                    id: 3
                },
                {
                    title: 'Camisas',
                    imageUrl:'https://i.ibb.co/K0c1smJ/dumb.jpg',
                    size: 'large',
                    id: 4
                },
                

            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;