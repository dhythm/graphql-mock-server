export const resolvers = {
  Query: {
    books: () =>
      books.map((book) => ({
        title: book.title,
        author: authors.find((author) => author.id === book.authorId),
      })),
    getAuthor: (parent, args, context) => {
      return context.authors.find((author) => author.id === args.id);
    },
  },
};

export const context = () => ({
  authors,
});

const books = [
  {
    title: "The Awakening",
    authorId: "1",
  },
  {
    title: "City of Glass",
    authorId: "2",
  },
];

const authors = [
  {
    id: "1",
    name: "Kate Chopin",
  },
  {
    id: "2",
    name: "Paul Auster",
  },
];
