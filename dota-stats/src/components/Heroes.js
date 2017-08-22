import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

let marginRight = {
  marginRight: '2px',
  backgroundColor: "#b52517"
}

let marginStyle = {
  marginBottom: "10px"
};


let removeBorder = {
  borderColor: "#242F39"
}

let warnaCard = {
  backgroundColor: "#242F39",
  color: "white"
}

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
                <div className="col-sm-3 col-md-2" style={marginStyle} key={hero.id}>
                  <div className="card text-center" style={removeBorder}>
                    <img className="card-img-top" src={img} alt="Card image cap"/>
                  <div className="card-body" style={warnaCard}>
                      <h5 className="card-title">{hero.localized_name}</h5>
                      {
                        hero.roles.map((role, index) => {
                          return (
                            <span key={index} style={marginRight} className="badge">{role}</span>
                          )
                        })
                      }
                    </div>
                    <div  style={warnaCard} className="card-footer">
                      <Link to={{
                          pathname: `/hero/${hero.id}`,
                          state: { hero: hero }
                        }}>
                        <a href="" className="btn btn-primary btn-sm">Details</a>
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
