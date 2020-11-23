import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faSpinner, faPeopleArrows, faBalanceScale, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, Row } from 'react-bootstrap'
import '@/styles/index.less'
import axios from 'axios'

class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "freeCodeCamp",
            userName2: "996icu",
            TotalCount: "",
            TotalCount2: "",
            userItem: [],
            userItem2: [],
            key: 0,
            key2: 0,
            openKey: 0
        }
    }

    userSubmit = async () => {
        await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName}&order=desc&sort=stars`)
            .then(res => {
                console.log(res)
                this.setState(
                    {
                        userItem: res.data.items[0],
                        TotalCount: res.data.total_count,
                        key: 1
                    }
                )
                console.log(this.state.TotalCount)
            })
            .catch(err => {
                console.log(err);
            })
    }

    userSubmit2 = async () => {
        await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName2}&order=desc&sort=stars`)
            .then(res => {
                console.log(res)
                this.setState(
                    {
                        userItem2: res.data.items[0],
                        TotalCount2: res.data.total_count,
                        key2: 1
                    }
                )
                console.log(this.state.TotalCount2)
            })
            .catch(err => {
                console.log(err);
            })
    }

    selKey = async () => {
        await this.setState({
            key: 0
        })
    }

    selKey2 = async () => {
        await this.setState({
            key2: 0
        })
    }

    userChange = (ev) => {
        ev.persist();
        this.setState(
            {
                userName: ev.target.value
            }
        )
    }

    userChange2 = (ev) => {
        ev.persist();
        this.setState(
            {
                userName2: ev.target.value
            }
        )
    }

    fight = (ev) => {
        ev.persist();
        this.setState(
            {
                openKey: 1
            }
        )
    }

    render() {
        return (
            <div className="container">
                {this.state.openKey ?
                    <div>
                        
                    </div>
                    : <div>
                        <div className="instrutions">
                            <h2>Instrutions</h2>
                            <Row>
                                <Col>
                                    <h5>Enter Two Users</h5>
                                    <FontAwesomeIcon className='a' style={{ color: "#e06c75" }} icon={faPeopleArrows} />
                                </Col>
                                <Col>
                                    <h5>Battle</h5>
                                    <FontAwesomeIcon className="a" style={{ color: "#ec981d" }} icon={faBalanceScale} />
                                </Col>
                                <Col>
                                    <h5>See The Winner</h5>
                                    <div><FontAwesomeIcon className="a" style={{ color: "#e06c75" }} icon={faTrophy} /></div>
                                </Col>
                            </Row>
                        </div>
                        <div className="palyers">
                            <h2>Players</h2>
                            <Row>
                                <Col>
                                    {this.state.key ?
                                        <div className="playerCard"><img src={0 ? `${this.state.userItem.owner.avatar_url}?size=200` : `https://github.com/${this.state.userName}.png?size=200`} alt="" />
                                            <span>{this.state.userName}</span>
                                            <FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selKey} /></div>
                                        : <div className="playerCard">{'wait for palyer1'}</div>}
                                </Col>
                                <Col>
                                    {this.state.key2 ?
                                        <div className="playerCard"><img src={0 ? `${this.state.userItem2.owner.avatar_url}?size=200` : `https://github.com/${this.state.userName2}.png?size=200`} alt="" />
                                            <span>{this.state.userName2}</span>
                                            <FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selKey2} /></div>
                                        : <div className="playerCard">{'wait for palyer2'}</div>}
                                </Col>
                            </Row>
                        </div>
                        <div className="input">
                            {this.state.key && this.state.key2 ?
                                <div><Row>
                                    <Col><input type="button" value="fight" onClick={this.fight} /></Col>
                                </Row></div>
                                : <div><Row>
                                    <Col>
                                        <input type="text" placeholder="Github UserName" value={this.state.userName} onChange={this.userChange} />
                                        <input type="button" value="Submit" onClick={this.userSubmit} />
                                    </Col>
                                    <Col>
                                        <input type="text" placeholder="Github UserName" value={this.state.userName2} onChange={this.userChange2} />
                                        <input type="button" value="Submit" onClick={this.userSubmit2} />
                                    </Col>
                                </Row></div>}
                        </div>
                    </div>}
            </div>
        )
    }
}
export default Battle;