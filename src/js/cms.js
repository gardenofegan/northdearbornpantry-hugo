import React from "react";
import CMS from "netlify-cms";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import EventsPreview from "./cms-preview-templates/events";
import ContactPreview from "./cms-preview-templates/contact";
import GenericPreview from "./cms-preview-templates/generic";


// Example of creating a custom color widget
class ColorControl extends React.Component {
  render() {
    return <input
        style={{height: "80px"}}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
    />;
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("events", EventsPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("donate", GenericPreview);
CMS.registerPreviewTemplate("about", GenericPreview);
CMS.registerPreviewTemplate("need", GenericPreview);
CMS.registerPreviewTemplate("how-to-help", GenericPreview);
CMS.registerWidget("color", ColorControl);
