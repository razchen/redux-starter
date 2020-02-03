import React from "react";
import List from "./List";
import Form from "./Form";
import Post from "./Posts";
import Transaction from "./Transactions";
import Counter from "./Counter";

const App = () => (
  <>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
    <div>
      <h2>API posts</h2>
      <Post />
    </div>

    <div>
      <h2>Transactions</h2>
      <Transaction />
    </div>

    <div>
      <h2>Counter</h2>
      <Counter />
    </div>
  </>
);
export default App;
