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
            loadKey: true,
            loadKey2: true,
            openKey: 0,
        }
    }

    userSubmit = async () => {
        if(!this.state.userName){
            alert("不能为空")
            return 
        }
        this.setState(
            {
                loadKey: false
            }
        )
        await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName}&order=desc&sort=stars`)
            .then(res => {
                // console.log(res)
                if (this.state.loadKey) {
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
            })
            .catch(err => {
                // console.log(err);
                alert("API Wrong!")
                this.setState(
                    {
                        loadKey: true
                    }
                )
            })
        this.props.getChildData(this.state)
    }

    userSubmit2 = async () => {
        if(!this.state.userName2){
            alert("不能为空")
            return 
        }
        this.setState(
            {
                loadKey2: false
            }
        )
        await axios.get(`https://api.github.com/search/repositories?q=${this.state.userName2}&order=desc&sort=stars`)
            .then(res => {
                // console.log(res)
                if (this.state.loadKey2) {
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
            })
            .catch(err => {
                // console.log(err);
                alert("API Wrong!")
                this.setState(
                    {
                        loadKey2: true
                    }
                )
            })
        this.props.getChildData(this.state)
    }

    selKey = () => {
         this.setState({
            key: 0
        })
    }

    selKey2 =  () => {
         this.setState({
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

    render() {
        return (
            <div className="container">
                <div className="instrutions">
                    <h1>Instrutions</h1>
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
                                : <div>{this.state.loadKey ? <div className="playerCard"><input className="playerInput" type="text" placeholder="Github UserName" value={this.state.userName} onChange={this.userChange} onKeyDown={() => { if (window.event.keyCode === 13) { this.userSubmit() } }} />
                                    {this.state.userName!==""?<input type="button" className="playerButton" value="Submit" onClick={this.userSubmit} />:<div></div>}
                                    </div> : <div><h5 style={{ textAlign: 'center' }} className=""><FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '30px' }} />
                                        <span className="sr-only">Loading...</span>
                                    </h5><FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selLoadkey} /></div>}</div>}
                        </Col>
                        <Col>
                            {this.state.key2 ?
                                <div className="playerCard"><img src={0 ? `${this.state.userItem2.owner.avatar_url}?size=50` : `https://github.com/${this.state.userName2}.png?size=50`} alt="" />
                                    <span>{this.state.userName2}</span>
                                    <FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selKey2} /></div>
                                : <div>{this.state.loadKey2 ? <div className="playerCard"><input className="playerInput" type="text" placeholder="Github UserName" value={this.state.userName2} onChange={this.userChange2} onKeyDown={() => { if (window.event.keyCode === 13) { this.userSubmit2() } }} />
                                    {this.state.userName2!==""?<input type="button" className="playerButton" value="Submit" onClick={this.userSubmit2} />:<div></div>}
                                    </div> : <div><h5 style={{ textAlign: 'center' }} className=""><FontAwesomeIcon icon={faSpinner} spin style={{ fontSize: '30px' }} />
                                        <span className="sr-only">Loading...</span>
                                    </h5><FontAwesomeIcon className="b" icon={faWindowClose} onClick={this.selLoadkey2} /></div>}</div>}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
export default Battle;