import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { FaTrash, FaPlus} from "react-icons/fa";

class TableItems extends React.Component{
        render() {
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
                        <input name="price" className = "form-control" />
                    </div>
                </td>
                <td>
                    <input name="amount" className="form-control" />
                </td>
                <td>
                  <h4>
                   
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
            <TableItems />
          </tbody>
          {this.tableFooter()}
        </table>
        </div>
      );
    }
}
  


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
