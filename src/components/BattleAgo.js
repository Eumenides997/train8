import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faSpinner, faPeopleArrows, faBalanceScale, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from 'react-bootstrap'

class BattleAgo extends React.Component {
    render() {
        return (
            <main>

                <div className="instrutions">
                    <h2>Instrutions</h2>
                    <Row>
                        <Col>
                            <h5>Enter Two Users</h5>
                            <div><FontAwesomeIcon className='a' style={{ color: "#e06c75" }} icon={faPeopleArrows} /></div>
                        </Col>
                        <Col>
                            <h5>Battle</h5>
                            <div><FontAwesomeIcon className="a" style={{ color: "#ec981d" }} icon={faBalanceScale} /></div>
                        </Col>
                        <Col>
                            <h5>See The Winner</h5>
                            <div><FontAwesomeIcon className="a" style={{ color: "#e06c75" }} icon={faTrophy} /></div>
                        </Col>
                    </Row>
                </div>
                <div className="players">
                    <h2>Players</h2>
                    <Row>
                        <Col>
                            <div className="player1">
                                <input type="text" placeholder="Github UserName"></input>
                                <input type="button" value="Submit"></input>
                            </div>
                        </Col>
                        <Col>
                            <div className="player2">
                                <input type="text" placeholder="Github UserName"></input>
                                <input type="button" value="Submit"></input>
                            </div>
                        </Col>
                    </Row>
                </div>
            </main>
        )
    }
}
export default BattleAgo;