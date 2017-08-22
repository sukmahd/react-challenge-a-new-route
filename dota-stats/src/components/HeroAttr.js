import React from 'react'

function HeroAttr(props) {
  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th><img className="rounded mx-auto d-block" src="https://www.dotabuff.com/assets/hero_agi-693306f455235ff5628c3429a80f2dc7e7795c013c540832dbba61ab691a73b5.png" /></th>
          <th><img className="rounded mx-auto d-block" src="https://www.dotabuff.com/assets/hero_str-eac64b6191e66b593d7f1ac81bb262afed6565794d8f9014d66b0cbc99fa3d01.png" /></th>
          <th><img className="rounded mx-auto d-block" src="https://www.dotabuff.com/assets/hero_int-76ea2af3bdf60a1c92d82a1fc0845d47a071cfacfca111aa2d5e43fbae01b580.png" /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.hero.base_agi} + {props.hero.agi_gain}</td>
          <td>{props.hero.base_str} + {props.hero.str_gain}</td>
          <td>{props.hero.base_int} + {props.hero.int_gain}</td>
        </tr>
        <tr>
          <td colSpan="3"> Movement Speed : {props.hero.move_speed}</td>
        </tr>
        <tr>
          <td colSpan="3">Base Attack : {props.hero.base_attack_min} - {props.hero.base_attack_max}</td>
        </tr>
        <tr>
          <td colSpan="3">Base Armor : {props.hero.base_armor}</td>
        </tr>
        <tr>
          <td colSpan="3">Attack Range : {props.hero.attack_range}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default HeroAttr
