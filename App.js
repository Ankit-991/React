/*
    <div id= parent>
        <div id = child1>
            <h1>Hello i am h1 tag</h1>
            <h2>hello i am h2 tag</h2>
        </div>
         <div id = child2>
            <h1>Hello i am h1 tag</h1>
            <h2>hello i am h2 tag</h2>
        </div>
    </div>
*/








const parent = React.createElement("div",{id:"parent"},
              [ 
                React.createElement("div", {id:"child1"},
                [React.createElement("h1",{},"hello i am H1 tag"),
                React.createElement("h2" ,{},"hello i am h2 tag!")],
              ),
              React.createElement("div", {id:"child2"},
                [React.createElement("h1",{},"hello i am H1 tag"),
                React.createElement("h2" ,{},"hello i am h2 tag!")]
            )   
               
            ] );





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);