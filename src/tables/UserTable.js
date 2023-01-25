import React from 'react'

const ItemTable = props => (
  // <table class="table table-hover">
  //   <thead>
  //     <tr>
  //       <th>Name</th>
  //       <th>Actions</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {props.items.length > 0 ? (
  //       props.items.map(item => (
  //         <tr key={item.id}>
  //           <td>{item.name}</td>
  //           <td>
  //             <button
  //               onClick={() => props.deleteItem(item.id)}
  //               className="button muted-button"
  //             >
  //               Delete
  //             </button>
  //           </td>
  //         </tr>
  //       ))
  //     ) : (
  //       <tr>
  //         <td colSpan={3}>No items</td>
  //       </tr>
  //     )}
  //   </tbody>
  // </table>

<table className="table table-hover">
    <thead>
      <tr>
      <th>Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.items.length > 0 ? (
        props.items.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <button
                onClick={() => props.deleteItem(item.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ItemTable;
