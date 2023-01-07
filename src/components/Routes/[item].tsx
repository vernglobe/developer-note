import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";
import ArrowForward from "@mui/icons-material/ArrowForward";
import { LabelUnderContruction, MSG_UNDER_CONSTRUCTION } from "../sections/Common";

const Item = (props: any) => {
  const { page, content } = props;
  //console.log("here")
  //console.log({page})
  console.log({content})
  if (page === "homepage") {
    return (
    <>
      <LabelUnderContruction>{MSG_UNDER_CONSTRUCTION}</LabelUnderContruction>
    </>);
  } else {
    return (
      <>
        <div id="page">
          <span className="page__title">{page}</span>
          { /*<a href="/">
            <button className="btn">
            Back to Home <ArrowForward />
            </button>
    </a>*/}
        </div>
        {content}
      </>
    );
  }
};

export default Item;
