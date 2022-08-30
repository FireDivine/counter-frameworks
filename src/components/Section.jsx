import React from 'react'

const Section = () => {
  return (
    <div>
      <div>
      <h3>Lists Display</h3>
      <ul>
        <li>Task Item one</li>
        <li>Task Item Two</li>
        <li>Task Item three</li>
        <li>Task Item four</li>
      </ul>
      </div>
      <div>
        <h3>Input Display</h3>
        <div>
          <div>
          <input type="text" placeholder='Enter random Word' />
          </div>
        <div>
        <select name="bob" id="bob">
            <option>Bob and Mary</option>
            <option>Mary and Bob</option>
          </select>
        </div>
     
          <div>
          <label htmlFor="radio1"><input type="radio" name="radio1" id="" />Radio one</label>
          
          <label htmlFor="radio2"><input type="radio" name="radio2" id="" />Radio Two</label>
          </div>
          <div>
            <label htmlFor="box1">Checkbox one</label>
          <input type="checkbox" name="box1" id="" />
          <label htmlFor="box1">Checkbox Two</label>
          <input type="checkbox" name="box2" id="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Section