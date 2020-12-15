import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/font-awesome/css/font-awesome.css'

var Card = ReactBootstrap.Card

class RepoCard extends React.Component {
    render() {
        // console.log(this.props.userItem)
        return (
            <div><Card border="success" style={{ margin: '0 auto', marginTop: '8px', marginBottom: '8px', width: '300px', height: '500px' }}>
                <Card.Header className="text-center">{this.props.type ? this.props.type : null}</Card.Header>
                <Card.Body>
                    <Card.Title className="text-center"><Card.Link href={this.props.userItem.html_url} target="_blank">{this.props.userItem.full_name}</Card.Link></Card.Title>
                    <Card.Text><i className="fa fa-user fa-lg fa-fw" style={{ color: 'red' }}></i>{this.props.userItem.name}</Card.Text>
                    <Card.Text><i className="fa fa-star fa-lg fa-fw" style={{ color: 'yellow' }}></i>{this.props.userItem.stargazers_count}</Card.Text>
                    <Card.Text><i className="fa fa-code-fork fa-lg fa-fw" style={{ color: 'lightblue' }}></i>{this.props.userItem.forks}</Card.Text>
                    <Card.Text><i className="fa fa-warning fa-lg fa-fw" style={{ color: 'purple' }}></i>{this.props.userItem.open_issues}</Card.Text>
                </Card.Body>
            </Card> </div>
        )
    }
}
export default RepoCard