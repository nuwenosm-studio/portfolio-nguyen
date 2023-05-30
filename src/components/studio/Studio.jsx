import ProjectSlider from './ProjectSlider';

const Studio = () => {
  return (
    <section className="studio_section" id="studio">
      
      <div className="studio_info">
        <div className="studio_title">
          <div className="title_upper">Spring</div>
          <div className="title_lower">
            <span className="text_highlight">Collection </span>
            - 2023 
          </div>
        </div>
        <div className="studio_subtitle">
          [ sustainable - fyoo-cher]
        </div>
      </div>

      <div className="studio_projects">
        <ProjectSlider />
      </div>
    </section>
  )
}

export default Studio