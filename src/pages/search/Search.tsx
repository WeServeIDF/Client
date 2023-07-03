import React from "react";
import SwipeableEdgeDrawer from "./components/SwipeableEdgeDrawer/SwipeableEdgeDrawer";

function SearchPage() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SwipeableEdgeDrawer />
    </div>
  );
}

export default SearchPage;
