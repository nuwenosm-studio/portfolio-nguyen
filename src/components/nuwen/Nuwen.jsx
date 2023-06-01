import Box from './Box';
import { AboutContent, ContactContent, ExperienceContent, PositionContent } from '../../data/InfoData';

const Nuwen = () => {
  const infoArray = [
    {label:"about me",  title:"hello.",  content:<AboutContent />},
    {label:"year exp",  title:"05+",     content:<ExperienceContent />},
    {label:"contact",   title:"nuwen.",  content:<ContactContent />},
    {label:"position",  title:"role.",   content:<PositionContent />}
  ]
  return (
    <section className="nuwen_section" id="nuwen">
      <div className="nuwen_info">
          <Box items={infoArray} />
        </div>

        <div className="nuwen_img">
          <img src="https://i.pinimg.com/originals/59/72/96/597296d8e5b716ed204d21cbb71d4589.png" alt="" />
        </div>
    </section>
  )
}

export default Nuwen
