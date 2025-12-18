import Books from './components/Books';
import BooksByTitle from './components/BooksByTitle';
import BooksByAuthor from './components/BooksByAuthor';
import AddBookForm from './components/AddBookForm';
import './App.css';

function App() {
  return (
    <div>
      <AddBookForm />
      <Books />
      <BooksByTitle title="Shoe Dog" />
      <BooksByAuthor author="Harper Lee" />
    </div>
  );
}

export default App;
