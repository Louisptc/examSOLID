document.addEventListener('DOMContentLoaded', function() {

fetch('/api/books')
.then(response => response.json())
.then(data => {
    const bookList = document.getElementById('booksTable');
    console.log(data);
    data.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>ID: ${book.id}</th>
            <td>Title: ${book.title}</td>
            <td>Author: ${book.author}</td>
            <td>Published Date: ${book.publishedDate}</td>

        `;
        bookList.appendChild(row);
    });
})

document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('addTitle').value;
    const author = document.getElementById('addAuthor').value;
    const publishedDate = document.getElementById('addPublishedDate').value;
    fetch('/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, publishedDate })
    })
    .then(response => response.json())
    .then(data => {
        alert('Book added successfully!');
        console.log(data);
    })
    .catch(error => console.error('Error adding book:', error));
});

document.getElementById('updateBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('updateId').value;
    const title = document.getElementById('updateTitle').value;
    const author = document.getElementById('updateAuthor').value;
    const publishedDate = document.getElementById('updatePublishedDate').value;
    fetch(`/api/books/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, publishedDate })
    })
    .then(response => response.json())
    .then(data => {
        alert('Book updated successfully!');
        console.log(data);
    })
    .catch(error => console.error('Error updating book:', error));
});

document.getElementById('deleteBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const id = document.getElementById('deleteId').value;
    fetch(`/api/books/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Book deleted successfully!');
            return response.json();
        }
        throw new Error('Error deleting book');
    })
    .catch(error => console.error('Error deleting book:', error));
});

});
