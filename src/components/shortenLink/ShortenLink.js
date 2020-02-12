import React from "react";

class ShortenLink extends React.Component {
  state = {
    linkText: "",
    li: []
  };

  handleChange = event => {
    this.setState({ linkText: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      li: [...this.state.li, this.state.linkText]
    });
  };
  render() {
    const { li } = this.state;
    return (
      <div className="shorten-link">
        <div className="container">
          <div className="shorten-link__form">
            <form
              className="shorten-link__form-link"
              onSubmit={this.handleSubmit}
            >
              <div>
                <input
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Shorten a link here..."
                />
                <button type="submit" className="shorten-link__form-link-btn">
                  Shorten it!
                </button>
              </div>
            </form>
          </div>
          <div className="shorten-link__list">
            <p>
              <ul>
                {li.map(e => (
                  <li>{e}</li>
                ))}
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortenLink;
