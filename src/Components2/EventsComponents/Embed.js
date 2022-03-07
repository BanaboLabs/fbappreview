import React from "react";
import PropTypes from "prop-types";

export default function Example() {
  var Example = React.createClass({
    componentDidMount: function () {
      var setState = this.setState;
      const myIframe = this.refs.myIframe;
      fetch("http://example.com/example.html", {
        method: "GET",
        headers: {
          "Content-Type": "text/html",
          Authorization: "Basic xyz",
        },
      })
        .then(function (response) {
          return response.text();
        })
        .then(function (text) {
          setState({ child: <iframe srcDoc={text}></iframe> });
        });
    },
    getInitialState: function () {
      return { child: <div> hello </div> };
    },
    render: function () {
      return <div>{this.state.child}</div>;
    },
  });

  React.render(<Example />, document.getElementById("mount-point"));
}
