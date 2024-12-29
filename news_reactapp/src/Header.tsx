import "./App.css";
const Header = () => {
  // Function to handle button click
  const openModal = () => {
    console.log("Sign in button clicked"); // Replace this with your modal logic
  };

  return (
    <header>
      <div className="wrapper">
        <nav className="flex">
          <div className="home-btn">
            <img src="img1.jpeg" alt="Website Logo" className="logo" />
          </div>

          <div className="search flex">
            <input
              id="search-text"
              placeholder="Search the internet..."
              type="text"
              name="text"
              className="input"
            />
            <button id="search-button" className="search-button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="rounded-button" onClick={openModal}>
              Sign in
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
