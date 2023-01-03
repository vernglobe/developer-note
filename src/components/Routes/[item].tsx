import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";
import ArrowForward from "@mui/icons-material/ArrowForward";

const Item = (props: any) => {
  const { page, content } = props;
  //console.log("here")
  //console.log({page})
  console.log({content})
  if (page === "homepage") {
    return <div id="page">{page}
    </div>;
  } else {
    return (
      <>
        <div id="page">
          <a href="/">
            <button className="btn">
            Back to Home <ArrowForward />
            </button>
          </a>
          {page}
          
        </div>
        {content}
      </>
    );
  }
};

export default Item;
