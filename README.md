# Title

    Shopping Cart

## Objective

    The objective of this assignment is to build a shopping cart with the following functionalities:
    Add to Cart
    Remove from Cart
    Calculate Total Price
    Calculate Average Price
    (Bonus) Filter Products
    Sort Cart
    Clear Cart

## Psuedo code

    Define productsList as an array of products with id, name, image, price, and quantity properties

    Define currentSortOrder variable and set it to "ascending"
    Define shoppingCart variable and set it to an empty array

    Define addToCart function that takes a product as input:
        Check if the product already exists in the shopping cart:
            If yes, increase its quantity by 1
            If no, add a new entry for the product to the shopping cart
        Log the updated shopping cart
        Call updateCart function to refresh the cart display

    Define removeFromCart function that takes a productId as input:
        Remove the product with the given productId from the shopping cart
        Call updateCart function to refresh the cart display

    Define calculateTotalPrice function:
        Reduce the shopping cart array to calculate the total price by summing up the price * quantity of each item

    Define calculateAveragePrice function:
        Calculate the average price of the products in the shopping cart by dividing the total price by the number of items

    Define clearCart function:
        Empty the shopping cart array
        Call updateCart function to refresh the cart display

    Define updateCart function:
        Clear the cart container
        If the shopping cart is empty:
            Display a message indicating that the cart is empty
        Else:
            Create and append elements to display cart details:
                - Total price
                - Average price
                - Clear cart button
                - Select element for sorting
                - Cart items with details (name, price, quantity, remove button)

    Define productItem function that takes a product as input:
        Create elements to represent a product item including image, name, price, quantity, and add to cart button
        Append these elements to the product container in the HTML

    Define displayCart function:
        Get the cart container element
        Clear its content
        If the shopping cart is empty:
            Display a message indicating that the cart is empty
        Else:
            Create and append elements to display cart details:
                - Total price
                - Average price
                - Clear cart button
                - Select element for sorting
                - Cart items with details (name, price, quantity, remove button)

    Define sortCart function that takes an order as input:
        Get the select element for sorting
        If the order is "ascending":
            Sort the shopping cart array by price in ascending order
            Set the select element's value to "ascending"
        Else if the order is "descending":
            Sort the shopping cart array by price in descending order
            Set the select element's value to "descending"
        Call updateCart function to refresh the cart display after sorting

    Call the displayCart function to initially display the cart
