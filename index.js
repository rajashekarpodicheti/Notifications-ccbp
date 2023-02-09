const Notification = (props) => {
  const { classs, url, name } = props;
  return (
    <li className={classs}>
      <img src={url} />
      <p>{name}</p>
    </li>
  );
};

const element = (
  <div className="bg">
    <h1>Notifications</h1>
    <ul>
      <Notification
        classs="box1"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        name="information message"
      />
      <Notification
        classs="box2"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        name="Success message"
      />

      <Notification
        classs="box3"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        name="Warning message"
      />

      <Notification
        classs="box4"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        name="Error message"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
