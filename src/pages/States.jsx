import React from 'react';
import states from '../models/StatesLinks';
import FindATheatreNav from '../components/FindATheatreNav';

function States() {
  return (
    <div className="find-a-theatre">
      <div className="content">
        <FindATheatreNav/>
        <div className="states">
          <div className="states-div">
            <div className="state">
              <p>Alabama</p>
              <ul>
                {states[0].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Arizona</p>
              <ul>
                {states[1].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Arkansas</p>
              <ul>
                {states[2].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>California</p>
              <ul>
                {states[3].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Colorado</p>
              <ul>
                {states[4].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Connecticut</p>
              <ul>
                {states[5].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Delaware</p>
              <ul>
                {states[6].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>District Of Columbia</p>
              <ul>
                {states[7].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Florida</p>
              <ul>
                {states[8].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Georgia</p>
              <ul>
                {states[9].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Idaho</p>
              <ul>
                {states[10].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="state">
              <p>Illinois</p>
              <ul>
                {states[11].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Indiana</p>
              <ul>
                {states[12].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Iowa</p>
              <ul>
                {states[13].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Kansas</p>
              <ul>
                {states[14].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Kentucky</p>
              <ul>
                {states[15].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Louisiana</p>
              <ul>
                {states[16].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Maryland</p>
              <ul>
                {states[17].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Massachusetts</p>
              <ul>
                {states[18].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Michigan</p>
              <ul>
                {states[19].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Minnesota</p>
              <ul>
                {states[20].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="states-div">
            <div className="state">
              <p>Missouri</p>
              <ul>
                {states[21].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Montana</p>
              <ul>
                {states[22].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Nebraska</p>
              <ul>
                {states[23].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Nevada</p>
              <ul>
                {states[24].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>New Hampshire</p>
              <ul>
                {states[25].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>New Jersey</p>
              <ul>
                {states[26].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>New Mexico</p>
              <ul>
                {states[27].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>New York</p>
              <ul>
                {states[28].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>North Carolina</p>
              <ul>
                {states[29].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>North Dakota</p>
              <ul>
                {states[30].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Ohio</p>
              <ul>
                {states[31].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Oklahoma</p>
              <ul>
                {states[32].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="state">
              <p>Oregon</p>
              <ul>
                {states[33].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Pennsylvania</p>
              <ul>
                {states[34].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>South Carolina</p>
              <ul>
                {states[35].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>South Dakota</p>
              <ul>
                {states[36].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Tennessee</p>
              <ul>
                {states[37].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Texas</p>
              <ul>
                {states[38].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Utah</p>
              <ul>
                {states[39].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Virginia</p>
              <ul>
                {states[40].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Washington</p>
              <ul>
                {states[41].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>West Virginia</p>
              <ul>
                {states[42].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
              <p>Wisconsin</p>
              <ul>
                {states[43].map((state) => {
                  return (
                    <li>
                      <a href={state.href}>{state.name} </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default States;
