import React, { useEffect } from "react";

const BasicTabItem = ({ tabName, id}) => {
  const openTab = e => {
    const links = document.querySelectorAll('.tabLinks');
    links.forEach( link => {
      link.classList.remove("active");
      const tabContent = link.getAttribute('data-tabcontent');
      document.getElementById(tabContent).classList.remove('active');
    });

    const tabContent = e.currentTarget.getAttribute('data-tabcontent');
    document.getElementById(tabContent).classList.add("active");
    e.currentTarget.classList.add("active");
  };

  useEffect(() => {
    const initialTabActive = () => {
      const links = document.querySelectorAll('.tabLinks');
      const tabContent = links[0].getAttribute('data-tabcontent');
      links[0].classList.add('active');
      document.getElementById(tabContent).classList.add("active");
    }

    initialTabActive();
  }, [])
  return (
    <div className="tabItem">
      <button data-tabcontent={id} className="tabLinks" onClick={openTab}>
        {tabName}
      </button>
    </div>
  );
};

export default BasicTabItem;
