const Parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "children" }, [
    React.createElement("h1", { id: "heading" }, "Nested"),
    React.createElement("h2", { id: "heading" }, "Sibling"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hi from react"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
