import React from 'react'
import { Nav } from 'react-bootstrap'
import Battle from '../pages/Battle'
import Popular from '../pages/Popular'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            route: 'Battle'
        }
    }
    handleMenu(key) {
        console.log('key', key)
        this.setState({
            route: key
        })
    }
    render() {
        const menuItems = [
            "Popular",
            "Battle"
        ]
        const { route } = this.state
        let page = null
        switch (route) {
            case 'Battle':
                console.log('battle')
                page = <Battle></Battle>
                break;
            case 'Popular':
                console.log('popular')
                page = <Popular></Popular>
                break;
        }
        return (
            <div><Nav variant="pills" onSelect={(selectedKey) => this.handleMenu(selectedKey)}>
                {menuItems.map((item, key) => <Nav.Item key={key}><Nav.Link eventKey={item}>{item}</Nav.Link></Nav.Item>)}
            </Nav>{page}</div>)
    }
}