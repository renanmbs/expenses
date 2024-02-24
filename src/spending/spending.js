import React from "react";
import './spending.css';
import { data } from "./spending_obj";


export class Spending extends React.Component{
    render(){
        
        return(
            <div className="titulo" id="spending">

                <h2>{this.props.month}</h2>

                <div>
                    
                    {data.map((data,key) => {
                        if (this.props.month === data.month){
                            return (
                                <div>
                                    
                                    <hr/>
                                    
                                    <div className="titulo" id="cards">
                                        <h3>Credit Cards</h3>
                                        <p key={key} className="data">Chase: ${data.chase}</p>
                                        <p key={key} className="data">Amex: ${data.amex}</p>
                                        <p key={key} className="data">Total Credit Card Expense: ${data.totalCards}</p>
                                    </div>
                                    
                                    <hr/>

                                    <div className="titulo" id="person">
                                        <h3>Person</h3>
                                        <p key={key} className="data">Renan: ${data.renan}</p>
                                        <p key={key} className="data">Abbie: ${data.abbie}</p>
                                    </div> 

                                    <hr/>

                                    <div className="titulo" id="bills">
                                        <h3>Bills</h3>
                                        <p key={key} className="data">Rent: ${data.rent}</p>
                                        <p key={key} className="data">Abbie: ${data.abbie_fun}</p>
                                        <p key={key} className="data">Groceries: ${data.groceries}</p>
                                    </div>
                                    
                                    <hr/>

                                    <div className="titulo" id="savings">
                                        <h3>Savings</h3>
                                        <p key={key} className="data">Savings 1/2: ${data.savings_first}</p>
                                        <p key={key} className="data">Savings 2/2: ${data.savings_second}</p>
                                        <p key={key} className="data">Total Savings: ${data.savings_total}</p>
                                    </div>
    
                                    <hr/>
                                    
                                    <div className="titulo" id="calculations">
                                        <h3>Calculations</h3>
                                        <p key={key} className="data">Total Money In: ${data.moneyIn}</p>
                                        <p key={key} className="data">Total Money Out: ${data.moneyOut}</p>
                                        <p key={key} className="data">Total Monthly Money: ${data.moneyTotal}</p>
                                    </div>

                                    <div className="titulo" id="calculations">
                                        <h3>Notes</h3>
                                        <ul>
                                            {data.notes.map((note,key) => (
                                                <li key={key}>{note}</li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            )
                        }
                        return null;
                    })}
                    
                </div>
                 
            </div>
        )
    }
}