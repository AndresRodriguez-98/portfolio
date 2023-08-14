import React from "react";
import { Dropdown } from "semantic-ui-react";
const languageOptions = [
   { key: "English", text: "English", value: "EN" },
   { key: "Spanish", text: "Spanish", value: "ES" }
];
const LanguageToggle = props => {
   return (
      <Dropdown
         button
         className='icon'
         floating
         labeled
         icon='world'
         options={languageOptions}
         search
         text='Select Language'
         onChange={handleChange}
      />
   );
};
export default LanguageToggle;