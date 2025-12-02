// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello world from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
<div id= "parent">
    <div id= "child">
        <h1>Iam first tag</h1>
        <h2>Iam first tag</h2>
    </div>   
    <div id= "child2">
        <h1>Iam first tag</h1>
        <h2>Iam first tag</h2>
    </div>  
</div>

*/

const parent = React.createElement("div", { id: "parent" },
 [React.createElement("div", { id: "child" }, 
 [React.createElement("h1", {}, "Iam first tag"),React.createElement("h2", {}, "Iam second tag")]),React.createElement("div", { id: "child2" }, 
 [React.createElement("h1", {}, "Iam new one tag"),React.createElement("h2", {}, "Iam new second tag")])]);

//parexnt is object we need to render in root element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);