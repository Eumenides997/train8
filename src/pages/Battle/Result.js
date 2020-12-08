import React from 'react'

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
            <div>
                <div>
                    <div className="playerCard2"><img src={0 ? `${this.props.userItem.owner.avatar_url}?size=200` : `https://github.com/${this.props.userName}.png?size=200`} alt="" />
                        <span>{this.props.userName}</span></div>
                    <h2>player1{one}</h2>
                </div>
                <div>
                    <div className="playerCard2"><img src={0 ? `${this.props.userItem2.owner.avatar_url}?size=200` : `https://github.com/${this.props.userName2}.png?size=200`} alt="" />
                        <span>{this.props.userName2}</span></div>
                    <h2>player2{two}</h2>
                </div>
            </div>
        )
    }
}
export default Result