import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faSpinner, faPeopleArrows, faBalanceScale, faTrophy } from '@fortawesome/free-solid-svg-icons';

class BattleAgo extends React.Component {
    render() {
        return (
            <main>
                <div className="instrutions">
                    <h2>Instrutions</h2>
                    <ul>
                        <li>
                            <h5>Enter Two Users</h5>
                            <div><FontAwesomeIcon className='a' style={{ color: "#e06c75" }} icon={faPeopleArrows} /></div>
                        </li>
                        <li>
                            <h5>Battle</h5>
                            <div><FontAwesomeIcon className="a" style={{ color: "#ec981d" }} icon={faBalanceScale} /></div>
                        </li>
                        <li>
                            <h5>See The Winner</h5>
                            <div><FontAwesomeIcon className="a" style={{ color: "#e06c75" }} icon={faTrophy} /></div>
                        </li>
                    </ul>
                    <h2>Players</h2>
                </div>
                <div className="players">
                    <div className="player1">
                        <input type="text" placeholder="Github UserName"></input>
                    </div>
                    <div className="player2"></div>
                </div>
            </main>
        )
    }
}
export default BattleAgo;