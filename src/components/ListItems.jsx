import { BsFillSquareFill } from "react-icons/bs";

const ListItemsHor = ({info}) => {
    return (
        <div className="listItem_container">
            <div className="listItem_header">
                <div className="square_icon">
                    <BsFillSquareFill fontSize="8px"/>
                </div>
                <div className="listItem_title">{info.title}</div>
            </div>
            <div className="colon_symbol">:</div>
            <div className="listItem_content">{info.content}</div>
        </div>
    )
}
export default ListItemsHor



