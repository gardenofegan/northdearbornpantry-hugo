import React from "react";

export default class ContactPreview extends React.Component {
  render() {
    const {widgetFor} = this.props;
    return <div className="ph3 bg-off-white">
      <div className="center mw6 pv3">
        { widgetFor("body") }
      </div>
    </div>;
  }
}
