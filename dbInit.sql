CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    published_date DATE
);


INSERT INTO books (title, author, published_date) VALUES
('1984', 'George Orwell', '1949-06-08'),
('Brave New World', 'Aldous Huxley', '1932-01-01'),
('To Kill a Mockingbird', 'Harper Lee', '1960-07-11'),
('The Great Gatsby', 'F. Scott Fitzgerald', '1925-04-10'),
('Catch-22', 'Joseph Heller', '1961-11-10'),
('The Catcher in the Rye', 'J.D. Salinger', '1951-07-16'),
('Pride and Prejudice', 'Jane Austen', '1813-01-28'),
('Wuthering Heights', 'Emily Brontë', '1847-12-01'),
('One Hundred Years of Solitude', 'Gabriel García Márquez', '1967-06-05'),
('War and Peace', 'Leo Tolstoy', '1869-01-01');
