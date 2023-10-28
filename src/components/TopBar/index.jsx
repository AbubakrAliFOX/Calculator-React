import "./style.css";

export default function TopBar() {
  return (
    <div className="top-bar">
      <section className="d-flex px-4 py-2">
        <div className="me-auto ms-2">
          <span className="text-white fw-bold">9:45</span>
        </div>
        <div className="">
          <img
            className="net"
            src="cellular-svgrepo-com.svg"
            alt="Battery Icon"
          />
          <img
            className="net"
            src="network-wireless-signal-good-svgrepo-com.svg"
            alt="Battery Icon"
          />
          <img src="battery2-svgrepo-com.svg" alt="Battery Icon" />
        </div>
      </section>
    </div>
  );
}
