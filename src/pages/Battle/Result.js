import React from 'react'
import RepoCard from "@/Components/RepoCard"
import { Container, Col, Row } from 'react-bootstrap'

class Result extends React.Component {
    render() {
        let one = ""
        let two = ""
        const win = () => {
            if (this.props.userItem.stargazers_count && this.props.userItem2.stargazers_count) {
                if (this.props.userItem.stargazers_count > this.props.userItem2.stargazers_count) {
                    one = "Winning"
                    two = "Failed"
                } else {
                    two = "Winning"
                    one = "Failed"
                }
            }
        }
        win()
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <RepoCard userItem={this.props.userItem} type={one}/>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <RepoCard userItem={this.props.userItem2} type={two} />
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default Result