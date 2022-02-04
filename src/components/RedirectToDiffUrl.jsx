import React, { Component } from "react";

function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
      return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
  }

  return "unknown";
}
export class Redirect extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  
  
  componentWillMount(){
    const device=getMobileOperatingSystem();
    if(device==="Android"){
    window.location = "https://play.google.com/store/apps/details?id=io.epns.epns";
    }
    else if(device==="iOS"){
      window.location = "https://apps.apple.com/app/ethereum-push-service-epns/id1528614910";
    }
    else{
      window.location = "https://chrome.google.com/webstore/detail/epns-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg";
      
    }
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default Redirect;