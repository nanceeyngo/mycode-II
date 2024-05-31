// ReactDOM.render(
//     <h1>Hello React World</h1>, document.getElementById('tom')

// );

// const root = ReactDOM.createRoot(document.getElementById('tom'));
// root.render(
//     <h1>Hello React World</h1>, 

// )

// const elementSample = (
    
//     <div>
//         <h1>Hello React World</h1>
//     <div>
//         <h1>Welcome to React</h1>
//         <h2>It's an interesting place to be!</h2>
//     </div>
//     </div>
// );
// const root = ReactDOM.createRoot(document.getElementById('tom'));
// root.render(
//     elementSample
// )

function Employee(data) {
    return<div>
        <div>
        <h1>Hello React World</h1>
        <h1>Welcome to React</h1>
        <h2>It's an interesting place to be!</h2>
        </div>
        <p>Name : {data.name}</p>
      <p>Salary : {data.salary}</p>
      </div>;
  }

  const element = <Employee name="Sara" salary="12345" />;
  const root = ReactDOM.createRoot(document.getElementById('tom'));
  root.render(
    element
  );
