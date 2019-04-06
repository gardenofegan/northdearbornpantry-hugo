import React from "react";

const MediaBlock = ({heading, text, imageUrl, reverse}) => {
  const imageContainerClassName = reverse
    ? "ph3-m w-40-m"
    : "ph3-m w-40-m order-last-m";
  return <div className="flex-m mhn3-m mb4">
    <div className={imageContainerClassName}>
      <img src={imageUrl} alt="" className="db mb2" />
    </div>
    <div className="ph3-m w-60-m">
      <h3 className="f3 b lh-title mb1">{heading}</h3>
      <p>{text}</p>
    </div>
  </div>;
};

export default class EventsPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }
    
    const entryEvents = entry.getIn(["data", "values"]);
    const events = entryEvents ? entryEvents.toJS() : [];
    
    return <div className="mw6 center ph3 pv4">
      <div className="cms mw6">
        <div className="bg-off-white pv4">
          <div className="mw7 center ph3 pt4">
            {events.map(({text, heading, imageUrl}, i) =>
              <MediaBlock key={i} text={text} heading={heading} imageUrl={imageUrl} reverse={i % 2 === 0} />
            )}
          </div>
        </div>
      </div>
    </div>;
  }
}
