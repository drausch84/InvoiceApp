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
  table() {
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
    
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
