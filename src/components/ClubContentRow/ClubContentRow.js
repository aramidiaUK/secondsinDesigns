import React from "react";

const ClubContentRow = ({
  header,
  subHeader,
  parentClass,
  classAddin,
  children
}) => {
  return (
    <div className={`${parentClass} ${classAddin && classAddin}`}>
      <div className={`${parentClass}-content`}>
        {header &&
          <header className={`${parentClass}-content-header`}>
            <h1>
              {header}{" "}
              {subHeader &&
                <span>
                  {subHeader}
                </span>}
            </h1>
          </header>}
        <div className={`${parentClass}-content-cards`}>
          {children}
        </div>
      </div>
    </div>
  );
};

ClubContentRow.defaultProps = {
  parentClass: "news"
};

export default ClubContentRow;
