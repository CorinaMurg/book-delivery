
This is the first comprehensive React site that I designed and developed after completing  
Scrimba's Advanced React course and Packt's React the Complete Guide.

📚 TWAIN AND COMPANY 
For the love of books.

A bookstore app built in React. 


TECHNICAL DETAILS

1. **React Hooks**: useState (cartIsShown), useContext (for cart data), useReducer (state management of the cart)

2. **Shopping Cart Modal** component implemented using ReactDOM.createPortal to display the cart items and total amount when the cart icon is clicked. The modal is appended to the DOM directly outside the main app root to overlay content. It also facilitates saving cart data to Firebase. Features quantity adjustment options for each book. 

3. **Firebase Backend Integration**: The application employs Firebase's Realtime Database to house a JSON object containing all the book data. Currently, it displays just 8 books. I used Firebase's Storage to host book cover images.

4. **Event Handling**:  onClick and onSubmit handlers for adding items to the cart or adjusting the quantity of items, confirming the order.

5. **Accessibility Features**: I designed the application to be fully accessible. Please note, accessibility features for the cart modal are under development and will be available soon.

6. **Responsive Design**: I used Grid layout to create a responsive design.

7. **CSS Modules**: I like to use local scoping for CSS styles to ensure that styles do not interfere with other components. This way the code is also more maintainable and organized. 

8. **BEM Naming Convention**: With my latest projects, I've been converting to the BEM naming convention for CSS classes because it promotes better readability and maintainability of the code.

9. **Deployment**: The application is deployed via Netlify at https://twain-and-company.netlify.app/



For Corina
Things to FIX:
- Accessibility (INCOMPLETE: in development for cart modal)
- Book button: change from add to added! when book in cart
- adjust for longer titles/author name

Things to TWEAK:
- center book list for tablet view (for real, not with the extra left margin!)
- change font style + letter spacing
- local storage for cart (until user account feature is added)
- FOOTER IS BORING. DO SOMETHING ABOUT IT
- Improve responsiveness for onbikes (maybe create its own component)

Features to ADD:
- Search bar
- Filter book by content, genre, author
- Extend book database to 100
- Add book inventory data to Firebase
- Navigation to each book/author's individual page (cover/photo, description/bio, 
links to similar books/other books by same author)
- Display low stock/out of stock/arriving soon labels
- Sign up/Login features/User account with contact info, lists, past orders