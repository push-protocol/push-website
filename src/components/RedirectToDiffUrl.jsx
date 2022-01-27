import React, { Component } from "react";

export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = "https://epns.notion.site/Push-Grants-Program-8c9f7934f7e5418faf96e7a5bdcaac4a";
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default Redirect;