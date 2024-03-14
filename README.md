# Book Library System 📖 with using React js

- Introduction 🐱‍🏍

This is a simple library system web site , with interesting functions: 

1) Top 10 Books 
2) View All Books
3) View Book
4) Download Book "pdf format"
5) Add Comment to Book

Also you can navigate to admin panel, "http://localhost:5173/admin", where you can:

1) View All Books
2) Add new Book
3) Update selected Book
4) Delete selected Book

- Usage ⌨

Before starting, install the libraries

$ npm i

but if you have errors, just install all of them by one

$ npm i axios
$ npm i react
$ npm i react-dom
$ npm i react-router-dom
$ npm i uuid4
$ npm i @emotion/styled
$ npm i @fortawesome/fontawesome-svg-core
$ npm i @fortawesome/free-brands-svg-icons
$ npm i @fortawesome/free-solid-svg-icons
$ npm i @fortawesome/react-fontawesome
$ npm i @mui/x-data-grid

Also write this command, it's to start a json-server 

$ npx json-server --watch db.json --port 3001

Now you can start

$ npm run dev


# Some Logic Errors 😅

- Add Book
Errors with Adding new Book, i don't know how to add input for file, because 
all the books source "pdf file" is store in public/books_source, So if needed
to add file, i have to download it, then put it in books_source, and then copy
the Path, but it very long and need backend, So Sorry 

- CSS
Not real error, but because of by navigation bar, i must to add margin-top to all my pages


# Conclusion

Despite all errors, it very useful project, so in feature i can built more complex project,
It Is Just Start 🦾
