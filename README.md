 # TWAIN AND COMPANY 
<br>For the love of books. 📚
<br>30 Samuel Road, Clemens Town 😉

<br>
Live site: [TWAIN & COMPANY](https://twain-and-company.netlify.app/)
<br>
<br>This is the first comprehensive React site that I designed and developed after completing Scrimba's Advanced React course and Packt's React the Complete Guide.

## The Goals: 
1. learn how to employ `useReducer` to add a shopping cart feature
2. make the shopping cart fully accessible

## The How

1. **React Hooks**: useState (cartIsShown), useContext (for cart data), useReducer (state management of the cart)

2. **Shopping Cart Modal** component implemented using ReactDOM.createPortal to display the cart items and total amount when the cart icon is clicked. The modal is appended to the DOM directly outside the main app root to overlay content. It also facilitates saving cart data to Firebase. Features quantity adjustment options for each book. 

3. **Firebase Backend Integration**: The application employs Firebase's Realtime Database to house a JSON object containing all the book data. Currently, it displays just 8 books. I used Firebase's Storage to host book cover images.

4. **Event Handling**:  onClick and onSubmit handlers for adding items to the cart or adjusting the quantity of items, confirming the order.

5. **Responsive Design**: I used Grid layout to create a responsive design.

6. **CSS Modules**: I used local scoping for CSS styles to ensure that styles do not interfere with other components. This way the code is also more maintainable and organized. 

7. **BEM Naming Convention**: With my latest projects, I've been converting to the BEM naming convention for CSS classes because it promotes better readability and maintainability of the code.

8. **Deployment**: The application is deployed via Netlify at https://twain-and-company.netlify.app/

9. **Accessibility Features**: I designed the application to be fully accessible. This is the status of the main accessibility features (working to fix those in red).
<br>✔️ Skip-to-content button
<br>✔️ Color contrast
<br>✔️ Button Focus
<br>✔️ Focus outline
<br>✔️ Access modal via keyoard
<br>✔️ Aria-live to cart on first read
<br>✔️ Cart update trigger aria-live
<br>❌ "read" pronounced as "red" not "reed" (onbikes section)

## The Challenges
The feature I struggled the most with was bringing focus to the cart. I was successful after a few tries with the `useRef` hook.


## Nice-to-have features that I plan to add
- Search bar
- Filter book by content, genre, author, season, poetry, audio
- Extend book database to 100
- Add bookstore events
- Add book inventory data to Firebase
- Navigation to each book/author's individual page (cover/photo, description/bio, 
links to similar books/other books by same author)
- Display low stock/out of stock/arriving soon labels
- Sign up/Login features/User account with contact info, lists, past orders
<br>

## Screenshot of front page
<br>
<br>
![Screenshot of Twain and Company complete front page](https://github.com/CorinaMurg/twain-and-company/assets/115652409/c31094f6-b4b0-4c83-b0a6-fb5970ee3763)

