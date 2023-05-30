import PuzzleSearch from "./PuzzleSearch";

const Gallery = () => {
    return (
        <section className="gallery_section" id="gallery">
          <div className="gallery_info">
            <div className="gallery_title">
              Artstation <br/>@Spring 2023
            </div>
            <div className="gallery_subtitle">
              Discover the 
              <span className="text_highlight"> images </span> 
              by hovering
              the key word inside the puzzle.
            </div>
          </div>
          <PuzzleSearch />
        </section>
      )
}
export default Gallery