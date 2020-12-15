import React from "react"
import axios from "axios"
import { HashRouter as Router, Link } from 'react-router-dom'
import Battle from '@/pages/Battle/Battle'
import Result from '@/pages/Battle/Result'
import '@/styles/index.less'

class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "freeCodeCamp",
      userName2: "996icu",
      userItem: [],
      userItem2: [],
      key: 0,
      key2: 0,
      openKey: 0,
    }
  }

  async componentDidMount() {
    if (this.props.match.params.user) {
      const arr = this.props.match.params.user.split("&")
      await this.setState({
        userName: arr[0],
        userName2: arr[1],
        openKey: 1,
        key: 1,
        key2: 1
      })
      this.getNewData1();
      this.getNewData2()
    }
    // console.log(this.props.match.params.user)
  }

  getNewData1 = () => {
    axios.get(`https://api.github.com/search/repositories?q=${this.state.userName}&order=desc&sort=stars`)
      .then(res => {
        this.setState({
          userItem: res.data.items[0],
        })
      })
      .catch(err => {
        // console.error(err);
        alert("API Wrong!")
      })
  }

  getNewData2 = () => {
    axios.get(`https://api.github.com/search/repositories?q=${this.state.userName2}&order=desc&sort=stars`)
      .then(res => {
        this.setState({
          userItem2: res.data.items[0],
        })
      })
      .catch(err => {
        // console.error(err);
        alert("API Wrong!")
      })
  }

  getData = (data) => {
    const { userName, userName2, userItem, userItem2, key, key2 } = data
    this.setState({
      userName,
      userName2,
      userItem,
      userItem2,
      key,
      key2
    })
  }

  openBattle = () => {
    // console.log(this.state.key + "" + this.state.key2)
    if (this.state.openKey) {
      this.setState({
        openKey: 0,
        key: 0,
        key2: 0
      })
    } else {
      this.setState({
        openKey: 1,
      })
    }
  }

  render() {
    return (<div>{this.state.openKey ?
      <div>
        <Result userName={this.state.userName} userName2={this.state.userName2} userItem={this.state.userItem} userItem2={this.state.userItem2} /></div>
      : <div><Battle getChildData={this.getData} /></div>}
      <Router>
        {this.state.key && this.state.key2 ? (<Link to={{ pathname: this.state.openKey ? `/Battle` : `/Battle/${this.state.userName}&${this.state.userName2}` }}><h2><button type="button" onClick={this.openBattle}>{this.state.openKey ? "GOBACK" : "BATTLE"}</button></h2></Link>) : null}
      </Router></div>)
  }
}
export default index