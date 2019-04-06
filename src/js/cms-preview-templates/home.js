import React from "react";

import Jumbotron from "./components/jumbotron";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    return <div>

        <div class="mw6 center ph3 pv4">
          <div class="cms mw6">
            <h2 class="tc">{entry.getIn(["data", "title"])}</h2>
            <p class="tc small-caps">{entry.getIn(["data", "subtitle"])}</p>
            { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
          </div>
        </div>

        <div className="bg-off-white pv4">
          <div className="ph3 mw7 center">
            <h2 className="f2 b lh-title mb2">{entry.getIn(["data", "intro", "heading"])}</h2>
            <p className="mb4 mw6">{entry.getIn(["data", "intro", "text"])}</p>

            <div className="flex-ns mhn2-ns mb3">
              {(entry.getIn(["data", "values"]) || []).map((value, i) => <div className="ph2-ns w-50-ns" key={i}>
                <img src={getAsset(value.get("image"))} alt="" className="center db mb3" style={{width: "240px"}}/>
                <p>{value.get("text")}</p>
              </div>)}
            </div>
          </div>
        </div>

    </div>
  }
}