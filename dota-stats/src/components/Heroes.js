import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router,  Link } from 'react-router-dom'

let marginRight = {
  marginRight: '2px'
}

let marginStyle = {
  marginBottom: "10px"
};

class Heroes extends Component {
  constructor () {
    super()
    this.state = {
      heroes: []
    }
  }

  render () {
    return (
        <div className="row">
          {
            this.state.heroes.map((hero) => {
              let img = 'https://api.opendota.com' + hero.img
              return (
                <div className="col-sm-4 col-md-3" style={marginStyle} key={hero.id}>
                  <div className="card text-center">
                    <img className="card-img-top" src={img} alt="Card image cap"/>
                    <div className="card-body">
                      <h4 className="card-title">{hero.localized_name}</h4>
                      {
                        hero.roles.map((role, index) => {
                          return (
                            <span key={index} style={marginRight} className="badge badge-danger">{role}</span>
                          )
                        })
                      }
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                       <Link to={{
                           pathname: `/hero/${hero.id}`,
                           state: { hero: hero }
                         }}>
                         <a href="" className="btn btn-primary ">Details</a>
                       </Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    )
  }

  componentDidMount() {
    const self = this
    axios.get('https://api.opendota.com/api/heroStats')
    .then(response => {
      let data = response.data
      console.log(data);
      self.setState({
        heroes: data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export default Heroes
