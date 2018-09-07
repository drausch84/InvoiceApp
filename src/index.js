import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaTrash, FaPlus} from "react-icons/fa";

class TableItems extends React.Component{

    lineTotal() {
        var { price, amount } = this.props;
        var itemPrice = parseFloat(price);
        var itemAmount = parseFloat(amount);
        return isNaN(itemPrice) || isNaN(itemAmount) ? 0 : itemPrice * itemAmount;
      }

      itemNumber() {
        return parseInt(this.props.index) + 1;
      }
        render() {
            var {
                index,
                price,
                priceChanged,
                amount,
                amountChanged,
                deleteLine
                
              } = this.props;
            return (
             
              <tr>
                <td>
                  {this.itemNumber()}
                </td>
                <td>
                  <input name="item-name" className="form-control" />
                </td>
                <td>
                  <div className="input-group">
                    <div className="input-group-addon">$</div>
                        <input name="price" className = "form-control" value = {price} onChange={priceChanged.bind(null, index)}/>
                    </div>
                </td>
                <td>
                    <input name="amount" className="form-control" value = {amount} onChange={amountChanged.bind(null, index)}/>
                </td>
                <td>
                  <h4>
                    ${this.lineTotal()}
                  </h4>
                </td>
                <td>
                  <button className="btn btn-danger"  onClick={deleteLine.bind(null, index)}>
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
        this.addLine = this.addLine.bind(this);
        this.deleteLine = this.deleteLine.bind(this);
    }

    priceChanged(index, event) {
        var { table_items } = this.state;
        table_items[index].price = event.target.value;
        this.setState({ table_items });
      }
    
      amountChanged(index, event) {
        var { table_items } = this.state;
        table_items[index].amount = event.target.value;
        this.setState({ table_items });
      }

      totalPrice(price, amount) {
        var itemPrice = parseFloat(price);
        var itemAmount = parseFloat(amount);
        return isNaN(itemPrice) || isNaN(itemAmount) ? 0 : itemPrice * itemAmount;
      }
      lineTotal() {
        var { table_items } = this.state;
        return table_items
          .map(i => this.totalPrice(i.price, i.amount))
          .reduce((pv, cv) => pv + cv, 0);
      }
    
      addLine(event) {
        var { table_items } = this.state;
        table_items.push({ price: "", amount: "" });
        this.setState({ table_items });
      }
      deleteLine(index, event) {
        var { table_items } = this.state;
        table_items.splice(index, 1);
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
            <button className="btn btn-success" onClick={this.addLine} >
              <FaPlus />
            </button>
          </td>
        </tr>
      </tfoot>
    );
  }

render(){
  
        var table_items = [];
        for (var index in this.state.table_items) {
          table_items.push(
            <TableItems
              index={index}
              price={this.state.table_items[index].price}
              amount={this.state.table_items[index].amount}
              priceChanged={this.priceChanged}
              amountChanged={this.amountChanged}
              deleteLine = {this.deleteLine}
            />
          );
        }
    return (
        <div>
          <h1>Invoice Application</h1>
          <p>This is a simple invoice application.  Fill out the information such as item name, price, and quantity to get a total price.  You can use the green button
            to add a new item row.  You can also use the red button to delete a row.  Each row's price total will be added to a grand total at the bottom of the table.
          </p>
          <table className="table table-bordered table-hover">
          
            {this.tableHeader()}
            <tbody>
                {table_items}
            </tbody>
            {this.tableFooter()}
         </table>
        </div>
      );
    }
}
  


ReactDOM.render(<InvoiceTable />, document.getElementById('root'));

