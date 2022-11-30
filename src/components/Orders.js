function Orders({ orderNo, name, surname, content }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Sipariş No: {orderNo}</h5>
          <p className="card-text">
            {name}, {surname} için sipariş içeriği:
          </p>
          <ul className="list-group">
            {content.map((item, index) => {
              return (
                <li className="list-group-item" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Orders;
