import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { FaTrash, FaPlus} from "react-icons/fa";

class TableItems extends React.Component{

    lineTotal() {
        var { price, amount } = this.props;
        var itemPrice = parseFloat(price);
        var itemAmount = parseFloat(amount);
        return isNaN(itemPrice) || isNaN(itemAmount) ? 0 : itemPrice * itemAmount;
      }
        render() {
            var {
                
                price,
                priceChanged,
                amount,
                amountChanged,
                
              } = this.props;
            return (
             
              <tr>
                <td>
                  1.
                </td>
                <td>
                  <input name="item-name" className="form-control" />
                </td>
                <td>
                  <div className="input-group">
                    <div className="input-group-addon">$</div>
                        <input name="price" className = "form-control" value = {price} onChange={priceChanged}/>
                    </div>
                </td>
                <td>
                    <input name="amount" className="form-control" value = {amount} onChange={amountChanged}/>
                </td>
                <td>
                  <h4>
                    ${this.lineTotal()}
                  </h4>
                </td>
                <td>
                  <button className="btn btn-danger">
                   <FaTrash/>
                  </button>
                </td>
              </tr>
            );
        
        }
    }



class InvoiceTable extends React.Component{
    constructor(props) {
        super(props);
        this.state = { table_items: [{ price: "", amount: "" }] };
        this.priceChanged = this.priceChanged.bind(this);
        this.amountChanged = this.amountChanged.bind(this);
    }

    priceChanged(event) {
        var { table_items } = this.state;
        this.setState({ table_items });
      }
    
      amountChanged(event) {
        var { table_items } = this.state;
        
        this.setState({ table_items });
      }
  tableHeader() {
    return (
      <thead>
        <tr>
          <th width="5%">Nr</th>
          <th width="40%">Name</th>
          <th width="20%">Price</th>
          <th width="20%">Amount</th>
          <th width="10%">Total</th>
          <th width="5%">Action</th>
        </tr>
      </thead>
    );
  }


  tableFooter() {
    return (
      <tfoot>
        <tr>
          <td colSpan="6" />
          <th>
            <h4>
             Grand Total
            </h4>
          </th>
          <td>
            <button className="btn btn-success">
              <FaPlus />
            </button>
          </td>
        </tr>
      </tfoot>
    );
  }

render(){

    return (
        <div>
          <h1>Invoice Application</h1>
          <p>This is a simple invoice application.  Fill out the information such as item name, price, and quantity to get a total price.  You can use the green button
            to add a new item row.  You can also use the red button to delete a row.  Each row's price total will be added to a grand total at the bottom of the table.
          </p>
          <table className="app-table">
          
            {this.tableHeader()}
            <tbody>
                <TableItems 
                    price = {this.state.price}
                    amount = {this.state.amount}
                    priceChanged={this.priceChanged}
                    amountChanged={this.amountChanged}
                />

            </tbody>
            {this.tableFooter()}
         </table>
        </div>
      );
    }
}
  


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
