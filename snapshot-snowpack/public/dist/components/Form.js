import React, {useState} from "../../_snowpack/pkg/react";
const Form = ({handleSubmit, history}) => {
  const [searchEntry, setSearchEntry] = useState("");
  const updateSearchInput = (e) => {
    setSearchEntry(e.target.value);
  };
  return /* @__PURE__ */ React.createElement("form", {
    className: "search-form",
    onSubmit: (e) => handleSubmit(e, history, searchEntry)
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "search",
    placeholder: "Search...",
    onChange: updateSearchInput,
    value: searchEntry
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: `search-button ${searchEntry.trim() ? "active" : null}`,
    disabled: !searchEntry.trim()
  }, /* @__PURE__ */ React.createElement("svg", {
    height: "32",
    width: "32"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z",
    fill: "#ffffff",
    fillRule: "evenodd"
  }))));
};
export default Form;
