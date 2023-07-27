import "./Help.css";

import React from "react";

const Help = () => {
  return (
    <div className="help-wrap">
      <h2>About the Project</h2>
      <ul>
        <li>
          This is a minimum viable product created based on the idea of a form
          builder
        </li>
        <li>Other complex input types could be extended later on</li>
        <li>
          User specific /user based segregation could be achived easily with a
          login
        </li>
      </ul>

      <h2>How to use</h2>
      <ul>
        <li>Click on create form in the navbar</li>
        <li>Enter the same in the side bar</li>
        <li>
          Add a header image link if you want to [since i don't have access to
          image hosting I am just taking links to online images]
        </li>
        <li>Click on the component that you want to add</li>
        <li>Use up down arrow to move the component</li>
        <li>Use trash can to delete component</li>
        <li>
          Use edit to edit the Name, placeholder and question header image
        </li>
        <li>
          A seperate menu opens on the sidebar after making changes click on
          save to save or discard to discard
        </li>
      </ul>
      <ul>
        <h2>Viewing forms and responses</h2>
        <li>
          Click on view forms on the navbar you will see the list of all forms{" "}
        </li>
        <li>
          You can here view responses, go to the link to fill the specific form
          or delete the form
        </li>
      </ul>
    </div>
  );
};

export default Help;
