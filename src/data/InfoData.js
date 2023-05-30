import ListItems from '../components/ListItems';
import ContactData from "../data/ContactData";

const AboutContent = () => {
    const shortInfo = [
        { title:"fav-sports",  content:"' swimming '" },
        { title:"personality", content:"' enfj-t '" },
        { title:"zodiac-sign", content:"' pisces '"}
    ];
    return (
        <div>
            <div className="box_text">
                My name is Nguyen Chau, 
                an innovative Full-Stack Developer 
                with diverse skillset in web development.
            </div>

            <div className="box_listItemsHor">
                {shortInfo.map((info) => (
                    <ListItems info={info} key={info.title} />
                ))}
            </div>
        </div>
    )
}


const ContactContent = () => {
    return (
        <div className="contact_container">
            <div className="contactLinks">
                {ContactData.map((link) => (
                    <a
                        key={link.name}
                        href={link.linkUrl} 
                        target="_blank"
                        className="contact_item" 
                    >
                        <div className="contact_icon">{link.icon}</div>
                        <div className="contact_name">{link.name}</div>
                    </a>
                ))}
            </div>
            
        </div>
    )
}

const ExperienceContent = () => {
    return (
        <div>
            Since high school, I've been passionate 
            about Web Design and have sharpened my skills 
            in HTML, CSS, JavaScript, and
            <span className="text_highlight"> React </span>
            for 5 years. <br/>
            <div className="pragraph_space"></div>
            Currently, I'm building a scalable and 
            maintainable application with Next.js, 
            prioritizing intuitive design.
        </div>
    )
}

const PositionContent = () => {
    const expArr = [
        { title:"Front-end developer",content:"JavaScript _ React _ Next.Js" },
        { title:"Back-end developer", content:"Express JS _ MySQL _ MongoDB" },
        { title:"UX/ UI designer",    content:"Figma _ Illustrator _ Photoshop"}
    ];
    return (
      <div className="box_listItemsVer">
        {expArr.map((exp) => (
            <ListItems info={exp} key={exp.title} />
        ))}
    </div>
    )
}
export { AboutContent,  ContactContent, ExperienceContent, PositionContent} 