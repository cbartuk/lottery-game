import PropTypes from "prop-types";

OrderCard.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  // orderNo: PropTypes.number.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  orderNo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
  address: PropTypes.shape({
    title: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
  }),
};

OrderCard.defaultProps = {
  isLoggedIn: false,
  address: {
    title: "Ankara",
    zip: `06000`,
  },
};

function OrderCard({ orderNo, name, surname, content }) {
  return (
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
  );
}

export default OrderCard;
