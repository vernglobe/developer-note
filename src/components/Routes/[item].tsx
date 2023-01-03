import { Link } from "react-router-dom";
import { ArrowBackIcon } from "../Icons";

const Item = (props: any) => {
  const { page } = props;
  //console.log("here")
  //console.log({page})
  if (page === "homepage") {
    return <div id="page">{page}
    </div>;
  } else {
    return (
      <>
        <div id="page">
          <a href="/">
            <button className="btn">
              <ArrowBackIcon /> Back to Home
            </button>
          </a>
          {page}
          
        </div>
        <a href="#gitRepoAfter"> Upload local project to github</a>
        <div id="gitRepoAfter">here my story goes</div>
      </>
    );
  }
};

export default Item;
