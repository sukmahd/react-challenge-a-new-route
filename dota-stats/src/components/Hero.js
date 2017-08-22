import React, { Component } from 'react'
import HeroAttr from '../components/HeroAttr'
import { Link } from 'react-router-dom'

let marginRight = {
  marginRight: '2px'
}

class Hero extends Component {
  constructor (props) {
      super(props)
      this.state = {
        heroId: props.match.params.id,
        hero: props.location.state.hero
      }
  }

  render () {
    let hero = this.state.hero
    console.log(hero)
    return (
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card mb-3">
            <img className="card-img-top" src={`https://api.opendota.com${hero.img}`} alt="Card image cap"/>
            <div className="card-body">
              <h4 className="card-title">{hero.localized_name}</h4>
              {
                hero.roles.map((role, index) => {
                  return (
                    <span style={marginRight} key={index}  className="badge badge-danger">{role}</span>
                  )
                })
              }
              <hr/>
              <h5>Primary Attribute <span  className="badge badge-danger">{hero.primary_attr}</span></h5>
              <HeroAttr hero={hero}></HeroAttr>
              <Link to={{
                  pathname: `/`,
                }}>
                <a href="" className="btn btn-primary ">Back</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
