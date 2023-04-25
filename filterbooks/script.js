let books = [
    { title: "The Hunger Games", author: "suzanne collins", year: 2018 },
    { title: "Harry Potter and the Deathly Hallows", author: "j.k. rowling", year: 2017 },
    { title: "To Kill a Mockingbird", author: "harper lee", year: 1960 },
    { title: "2084", author: "george orwell", year: 1949 },
    { title: "The Catcher in the Rye", author: "j.d. salinger", year: 1951 }
  ];
  
  let filteredBooks = books.filter(book => book.year >= 2010);
  let capitalizedAuthors = filteredBooks.map(book => {
    return {
      title: book.title,
      author: book.author.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      year: book.year
    }
  });
  
  console.log(capitalizedAuthors);
  