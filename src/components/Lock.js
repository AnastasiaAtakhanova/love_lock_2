import React, {Component} from 'react';
import '../style/auth.css';
import {sendLockData} from "../api/SendLockData";

class Lock extends Component {
    clickHandler() {
        const username = localStorage.getItem('username');
        const person = document.getElementById("person").value;
        const design = document.getElementById("design").value;
        const size = document.getElementById("size").value;
        const message = document.getElementById("message").value;
        sendLockData(username, person, design, size, message);
    }
    
    render() {
        return (
            <div className="answer_container">
                <div className="answer_content">
                <div class="l-Title">
                    <p>Выбери дизайн замочка</p>
                </div>
                <div>
                <table>             
                    <tr>
                        <td>
                            <img className="image" src={require('../style/img/замок.png')}/>
                            <p>Красный</p>                         
                        </td>
                        <td>
                            <img className="image" src={require('../style/img/замок2.png')}/>
                            <p>Синий</p>                         
                        </td>
                        <td>
                            <img className="image" src={require('../style/img/замок3.png')}/>
                            <p>Жёлтый</p>                           
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                        <select id = "design" class="form-control">
                            <option value="red">Красный</option>
                            <option value="blue">Синий</option>
                            <option selected value="yellow">Жёлтый </option>
                        </select>
                        </td>
                        <td> 
                        </td>
                    </tr>
                </table>
                </div>
                <div class="l-Title">
                    <p>Выбери размер замочка</p>
                </div>
                <div>
                    <table>
                    <tr>
                        <td>
                           <p> Маленький </p>
                        </td>
                        <td>
                            <p>Средний</p>                     
                        </td>
                        <td>
                            <p>Большой</p>               
                        </td>
                    </tr>
                    <tr>
                        <td>
                        </td>
                        <td>
                        <select id = "size" class="form-control">
                            <option value="little">Маленький</option>
                            <option value="middle">Средний</option>
                            <option selected value="big">Большой </option>
                        </select>
                        </td>
                        <td> 
                        </td>
                    </tr>
                    </table>
                </div>
                <div class="l-Title">
                    <p>Введи имя человека, вместе с которым вы хотите повесить замочек</p>
                </div>
                <p>
                <input type="text" class="form-control" id="person"></input>
                </p>
                <div class="l-Title">
                    <p>Оставь сообщение</p>
                </div>
                <p>
                <input type="text" class="form-control" id="message"></input>
                </p>
                <button class="button2" onClick={this.clickHandler}>Повесить замок на мост</button>
                </div>
            </div>
        );
    }    
}

export default Lock;
