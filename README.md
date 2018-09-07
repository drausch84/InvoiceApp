This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

#Invoice Generator Application

##Technology Used
React.js
CSS
Bootstrap
React-Icons npm

##What does it do?
This application is a basic invoice generator where a user can input information such as an item's name, price, and quantity.  The application will calculate the total of the item based on it's price and quantity.  The user can also add another item row by pressing the green "add" button and add the name, price, and quantity for a total to be added to another item's total to calculate an invoice grand total.  Users can also delete a row of information by pressing the red "delete" button.

##Screenshots

![image](https://user-images.githubusercontent.com/35150986/45240626-89bd4d00-b2a6-11e8-8441-590b48632fcf.png)
![image](https://user-images.githubusercontent.com/35150986/45240681-b83b2800-b2a6-11e8-97d3-27ff16999e99.png)

##Thought Process Behind The Application
Considering this is an application that uses a single invoice to take rows of information in order to process a total $ amount, I knew that this application would require a parent component that would take children components in order to calculate that total.  I began the coding process by creating the single child component, "TableItems" which would take in information from the user to be calculated such as the item's price and amount.  In order to calculate this amount for the single row, I created a method that would multiply the item's price and amount by each other in order to come up with a total amount.  I then moved on to creating the parent component, "InvoiceTable", which would take this child component in order to calculate a grand total if multiple items were added by the user.  With both components created, it was a matter of giving state to the parent component so that props could be passed to the child component(defining the price and amount of an item so that the total could be calculated).  To add more functionality to this application I also created different methods such as when the price or amount is changed within an item.  These methods were coded within the parent component and passed down to the child component.  With everything in place to take a single item, I added code to the parent component to make its state an array of structures instead of a single structure in order to calculate multiple lines of information.  I also added an index variable to the child component in order to point the child's data in the parent's state array.  Considering I wanted the application to be capable of taking in multiple lines of information, I created a for loop of the child's properties in the parent array to avoid a manual call and instead make an invocation based on the parent component's state array.  Now that the parent component was capable of taking in an array of items, I created another method within the parent component to be able to calculate the grand total of the invoice based on multiple totals.  The last processes involved in this application was adding functionality to the onClick events for adding and deleting a line from the invoice.  It was a matter of creating an addLine and deleteLine handler function and passing it as a TableItems property.