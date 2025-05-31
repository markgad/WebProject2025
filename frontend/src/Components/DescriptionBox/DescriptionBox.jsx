import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  cursus nec eros. Praesent tristique sollicitudin tempor. Proin bibendum nisi id faucibus convallis. Curabitur sollicitudin, elit at ornare porttitor, enim odio consectetur augue, et tincidunt tortor sapien ac orci. Maecenas ut magna at eros convallis eleifend nec iaculis dolor. Duis in sapien quam. Curabitur sed pulvinar erat. Donec rhoncus urna eu eros dapibus laoreet at eget leo. Sed sed eros ut tortor feugiat tincidunt non vel nunc. Nulla facilisi. Curabitur pharetra sem neque, quis rutrum ipsum pretium vitae. Nam nec ullamcorper sapien. Aliquam tempus volutpat magna id imperdiet. Vivamus consequat ante sed posuere dignissim. Curabitur scelerisque commodo eros, id porttitor lectus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Vivamus consequat ante sed posuere dignissim. Curabitur scelerisque commodo eros, id porttitor lectus.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
