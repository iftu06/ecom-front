import React from "react";

const SocialIcons = () => {
  return (
    <React.Fragment>
      <button type="button" className="btn btn-social-icon btn-facebook btn-rounded me-1">
        <i className="fa-brands fa-facebook-f"></i>
      </button>
      <button type="button" className="btn btn-social-icon btn-gmail btn-rounded me-1">
        <i className="fa-brands fa-google"></i>
      </button>
      <button type="button" className="btn btn-social-icon btn-linkedin btn-rounded">
        <i className="fa-brands fa-linkedin"></i>
      </button>
    </React.Fragment>
  );
};

export default SocialIcons;
