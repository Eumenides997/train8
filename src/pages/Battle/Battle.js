import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faSpinner, faPeopleArrows, faBalanceScale, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { Col, Form, Row } from 'react-bootstrap'
import '@/styles/index.less'
import Result from '@/pages/Battle/Result'
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
            loadKey: true,
            loadKey2: true,
            openKey: 0,
            winner: null
        }
    }

    userSubmit = async () => {
        this.setState(
            {
                loadKey: false
            }
        )
        console.log(this.state.loadKey)
        await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName}&order=desc&sort=stars`)
            .then(res => {
                console.log(res)
                console.log(this.state.loadKey)
                if(this.state.loadKey){
                    return
                }
                this.setState(
                    {
                        userItem: res.data.items[0],
                        TotalCount: res.data.total_count,
                        key: 1,
                        loadKey: true
                    }
                )
                console.log(this.state.TotalCount)
                console.log(this.state.loadKey)
            })
            .catch(err => {
                console.log(err);
            })
    }

    userSubmit2 = async () => {
        this.setState(
            {
                loadKey2: false
            }
        )
        await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName2}&order=desc&sort=stars`)
            .then(res => {
                console.log(res)
                if(this.state.loadKey2){
                    return
                }
                this.setState(
                    {
                        userItem2: res.data.items[0],
                        TotalCount2: res.data.total_count,
                        key2: 1,
                        loadKey2: true
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

    selLoadkey = () => {
        this.setState({
            loadKey: true
        })
    }

    selLoadkey2 = () => {
        this.setState({
            loadKey2: true
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
        if (this.state.TotalCount > this.state.total_count2) {
            this.setState({ winner: 1 })
        } else if (this.state.total_count === this.state.total_count2) {
            this.setState({ winner: 0 })
        } else {
            this.setState({ winner: 2 })
        }
        this.setState(
            {
                openKey: 1
            }
        )
    }
    
    fightAgain = (ev) => {
        ev.persist();
        this.setState(
            {
                openKey: 0
            }
        )
    }

    render() {
        return (
            <div className="container">
                {this.state.openKey ?
                <div><Result userName={this.state.userName} userName2={this.state.userName2} userItem={this.state.userItem} userItem2={this.state.userItem2} />
                <input type="button" value="fight again" onClick={this.fightAgain} /></div>
                    
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
                                        <div className="playerCard"><img src={0 ? `${this.state.userItem.owner.avatar_url}?size=50` : `https://github.com/${this.state.userName}.png?size=50`} alt="" />
                                            <span>{this.state.userName}</span>
                                            <FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selKey} /></div>
                                        : <div>{this.state.loadKey ? <div className="playerCard"><input type="text" placeholder="Github UserName" value={this.state.userName} onChange={this.userChange} />
                                            <input type="button" value="Submit" onClick={this.userSubmit} /></div> : <div><h5 style={{ textAlign: 'center' }} className=""><FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '30px' }} />
                                                <span className="sr-only">Loading...</span>
                                            </h5><FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selLoadkey} /></div>}</div>}
                                </Col>
                                <Col>
                                    {this.state.key2 ?
                                        <div className="playerCard"><img src={0 ? `${this.state.userItem2.owner.avatar_url}?size=50` : `https://github.com/${this.state.userName2}.png?size=50`} alt="" />
                                            <span>{this.state.userName2}</span>
                                            <FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selKey2} /></div>
                                        : <div>{this.state.loadKey2 ? <div className="playerCard"><input type="text" placeholder="Github UserName" value={this.state.userName2} onChange={this.userChange2} />
                                            <input type="button" value="Submit" onClick={this.userSubmit2} /></div> : <div><h5 style={{ textAlign: 'center' }} className=""><FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '30px' }} />
                                                <span className="sr-only">Loading...</span>
                                            </h5><FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selLoadkey2} /></div>}</div>}
                                </Col>
                            </Row>
                        </div>
                        <div className="input">
                            {this.state.key && this.state.key2 && this.state.loadKey && this.state.loadKey2 ?
                                <div><Row>
                                    <Col><input type="button" value="fight" onClick={this.fight} /></Col>
                                </Row></div>
                                : <div></div>}
                        </div>
                    </div>}
            </div>
        )
    }
}
export default Battle;