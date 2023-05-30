import './styles.css';
import NavBar from './components/NavBar';
import Nuwen from './components/nuwen/Nuwen';
import Studio from './components/studio/Studio';
import Gallery from './components/gallery/Gallery';


function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Nuwen />
        <Studio />
        <Gallery />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
