// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    // Trying to change a constant, which will cause an error
    leastFavoriteCustomer = 'someone else'; // This line will throw an error
}