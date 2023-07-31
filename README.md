
This is the first comprehensive React site that I designed and developed after completing  
Scrimba's Advanced React course and Packt's React the Complete Guide.

📚 TWAIN AND COMPANY 
For the love of books.
30 Samuel Road, Clemens Town 😉

A bookstore app built in React. 
Main goal: learn how to use useReducer to add shopping cart feature

TECHNICAL DETAILS

1. **React Hooks**: useState (cartIsShown), useContext (for cart data), useReducer (state management of the cart)

2. **Shopping Cart Modal** component implemented using ReactDOM.createPortal to display the cart items and total amount when the cart icon is clicked. The modal is appended to the DOM directly outside the main app root to overlay content. It also facilitates saving cart data to Firebase. Features quantity adjustment options for each book. 

3. **Firebase Backend Integration**: The application employs Firebase's Realtime Database to house a JSON object containing all the book data. Currently, it displays just 8 books. I used Firebase's Storage to host book cover images.

4. **Event Handling**:  onClick and onSubmit handlers for adding items to the cart or adjusting the quantity of items, confirming the order.

5. **Responsive Design**: I used Grid layout to create a responsive design.

6. **CSS Modules**: I like to use local scoping for CSS styles to ensure that styles do not interfere with other components. This way the code is also more maintainable and organized. 

7. **BEM Naming Convention**: With my latest projects, I've been converting to the BEM naming convention for CSS classes because it promotes better readability and maintainability of the code.

8. **Deployment**: The application is deployed via Netlify at https://twain-and-company.netlify.app/

9. **Accessibility Features**: I designed the application to be fully accessible. This is the status of the main accessibility features (working to fix those in red).
✔️ Skip-to-content button
✔️ Color contrast
✔️ Button Focus
✔️ Focus outline
❌ Access modal via keyoard
✔️ Aria-live to cart on first read
❌ Cart update trigger aria-live
❌ Add pronounciation to "read" for onbikes


<!-- not sure how to fix yet -->
Lighthouse report:
❌ Error:  <li> elements are not contained within a <ul> element (see AvailableBooks, Books components)

axeDevTools report:
❌ Missing landmark elements


**POUR MOI**
Things to FIX:
- Remove bg on mouse focus for Header cart button (in Firefox)
- Create OnBikes component (Header is getting too big!)
- Change bgColor of cover (maybe a glassy look, or 2 lighter shades of gray)

**Things to TWEAK:**
- center book list for tablet view (for real, not with the extra left margin!)
- local storage for cart (until user account feature is added)
- FOOTER IS BORING. DO SOMETHING ABOUT IT

**Thinking about adding the following features:**
- Search bar
- Filter book by content, genre, author, season, poetry, audio
- Extend book database to 100
- Add bookstore events
- Add book inventory data to Firebase
- Navigation to each book/author's individual page (cover/photo, description/bio, 
links to similar books/other books by same author)
- Display low stock/out of stock/arriving soon labels
- Sign up/Login features/User account with contact info, lists, past orders