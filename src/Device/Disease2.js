import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';

function Disease2() {
    const [bp1, setBp1] = useState('');
    const [bp2, setBp2] = useState('');
    const [cholestrol, setCholestrol] = useState('');
    const [smoke, setSmoke] = useState('');
    const [drink, setDrink] = useState('');
    const [exercise, setExercise] = useState('');

    return ( 
        <div className="row">
        <div className="col-md-3" />
        <div className="text-center col-md-6">
        <h2 style={{ color: '#535461' }}>Fill out the form</h2>
        <div className="shadow-sm p-3 round-boarder gb-white">
            <form>
                <div className="bp1">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Systolic Blood Pressure in mm Hg</label><br />
                    <div className="input-group flex-nowrap mb-1">
                        <input 
                            className="form-control" 
                            type="text"   
                            required
                            value={bp1}
                            onChange={(e) => {
                            setBp1(e.target.value);
                            }} />
                    </div>
                </div>
                <div className="bp2">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Diastolic Blood Pressure in mm Hg </label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="text" 
                        className="form-control"  
                        required
                        value={bp2}
                        onChange={(e) => {
                        setBp2(e.target.value);
                        }} />
                    </div>
                </div> 
                <div className="cholestrol">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Cholesterol Level (Normal/ Above Normal/ Very High )</label><br />
                    <div className="input-group flex-nowrap mb-1">
                    <input  
                        type="text" 
                        className="form-control"  
                        required
                        value={cholestrol}
                        onChange={(e) => {
                        setCholestrol(e.target.value);
                        }} />
                    </div>
                </div>
                
                <div className="row">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Do you regularly exercise?</label><br />
                    <div className="col-a">
                      <input
                        required
                        type="radio"
                        name="type-1"
                        value="Yes"
                        onClick={(e) => { setExercise(e.target.value); }}
                      />
                      {' '}
                      <label htmlFor="radio" className="form-label__v2">Yes</label>
                    </div>
                    <div className="col-b">
                      <input
                        type="radio"
                        name="type-1"
                        value="No"
                        onClick={(e) => { setExercise(e.target.value); }}
                      />
                      {' '}
                      <label htmlFor="radio" className="form-label__v2">No</label>
                    </div>
                    
                </div>

                <div className="row">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Do you smoke?</label><br />
                    <div className="col-a">
                      <input
                        required
                        type="radio"
                        name="type-2"
                        value="Yes"
                        onClick={(e) => { setSmoke(e.target.value); }}
                      />
                      {' '}
                      <label htmlFor="radio" className="form-label__v2">Yes</label>
                    </div>
                    <div className="col-b">
                      <input
                        type="radio"
                        name="type-2"
                        value="No"
                        onClick={(e) => { setSmoke(e.target.value); }}
                      />
                      {' '}
                      <label htmlFor="radio" className="form-label__v2">No</label>
                    </div>
                    
                </div>

                <div className="row">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Do you drink?</label><br />
                    <div className="col-a">
                      <input
                        required
                        type="radio"
                        name="user-type"
                        value="Yes"
                        onClick={(e) => { setDrink(e.target.value); }}
                      />
                      {' '}
                      <label htmlFor="radio" className="form-label__v2">Yes</label>
                    </div>
                    <div className="col-b">
                      <input
                        type="radio"
                        name="user-type"
                        value="No"
                        onClick={(e) => { setDrink(e.target.value); }}
                      />
                      {' '}
                      <label htmlFor="radio" className="form-label__v2">No</label>
                    </div>
                    
                </div>
                
                <button className="btn purple-btn btn-signin" type="submit">Submit</button>
            </form>
            
        </div>  
        </div>
        </div>);
}


export default Disease2;