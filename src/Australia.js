import React, { Component } from "react";


class Australia extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
      fetch("https://randomuser.me/api/?results=8&nat=AU")
        .then(res => res.json())
        .then(parsedJSON => parsedJSON.results.map(data => (
          {
            id: `${data.id.name}`,
            firstName: `${data.name.first}`,
            lastName: `${data.name.last}`,
            location: `${data.location.state}, ${data.nat}`,
            thumbnail: `${data.picture.large}`,
            email: `${data.email}`,
            username:`${data.login.username}`,
            password: `${data.login.password}`,
            
          }
        )))
        .then(items => this.setState({
          items,
          isLoaded: false
        }))
        .catch(error => console.log('parsing failed', error))
    }

    render() {
      const {items } = this.state;
        return (
          <div className="boxWhite">
            <h2>Random User</h2>
            {
              items.length > 0 ? items.map(item => {
              const {id, firstName, lastName, thumbnail, email, username, password} = item;
               return (

               <div key={id} className="bgCircle">
               <center><img src={thumbnail} alt={firstName} className="circle"/> </center><br />
               <div className="ctr">
                  {firstName} {lastName}<br />
                  {email}<br />
                  {username}<br />
                  {password}<br />
                </div>

              </div>
              );
            }) : null
          }
          </div>
        );

    }
  }

export default Australia;