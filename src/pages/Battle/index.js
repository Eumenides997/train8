import React from "react"
import axios from "axios"
import { HashRouter as Router, Link } from 'react-router-dom'
import '@/styles/index.less'
import BattleA from '@/pages/Battle/Battle'

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
            this.getNewDate1()
            this.getNewDate2()
        }
    }

    getNewData1 = () => {
        axios.get(`https://api.github.com/search/repositories?q=${this.state.userName}&order=desc&sort=stars`)
            .then(res => {
                this.setState({
                    userItem: res.data.items[0],
                })
            })
            .catch(err => {
                console.error(err);
                // alert("API调用失败，重新刷新试试")
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
                console.error(err);
                // alert("API调用失败，重新刷新试试")
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
    render(){
        return(<div>{this.state.openKey? 
            <div></div>
             : <BattleA getChildData={this.getData} />}
        </div>)
    }
}
export default index