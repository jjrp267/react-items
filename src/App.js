import React, { useState, Fragment } from "react";
import AddItemForm from "./forms/AddItemForm";
import ItemTable from "./tables/UserTable";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  // Data
  const itemData = [
    { id: 1, name: "item 1" },
    { id: 2, name: "item 2" },
    { id: 3, name: "item 3" },
  ];

  const initialFormState = { id: null, name: "" };

  // Setting state
  const [items, setItems] = useState(itemData);
  const [currentItem, setCurrentItem] = useState(initialFormState);
  const [adding, setAdding] = useState(false);

  // CRUD operations
  const addItem = (item) => {
    console.log("item", item);
    setAdding(false);
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setAdding(false);

    setItems(items.filter((item) => item.id !== id));
  };

  const setAddMode = (item) => {
    setAdding(true);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="myclassBackground">
      <div className="container mt-5">
        <div className="row">
          {adding ? (
            <AddItemForm addItem={addItem} isModeAdd={adding} />
          ) : (
            <div className="card">
              <div className="card-header">
                <div className="container-fluid text-center">
                  <h2 className="myclassBackgroundH2">
                    This is a tecnical proof
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </p>
                </div>
              </div>
              <div className="card-body">
                <ItemTable items={items} deleteItem={deleteItem} />
              </div>
            </div>
          )}
        </div>
        {!adding && (
          <div className="row myclassBackground">
            <div className="col-sm-12">
              <div className="btn-group">
                <button className="btn btn-primary" onClick={refreshPage}>
                  Refresh
                </button>
              </div>
              <div className="btn-group">
                <button className="btn btn-primary" onClick={setAddMode}>
                  Add
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
