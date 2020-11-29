import M from 'materialize-css'
import '../../styles/ActionPage.scss';


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 
 




function ActionPage() {
  useEffect(()=>{
    M.AutoInit();
  }, []);


  const [title, setTitle] = useState('');
  const [rank, setRank] = useState('bronze');
  const [ description, setDescription] = useState('');



  const handleSubmit = async (e)=>{
    e.preventDefault();

    console.log(`Submit fired!`);
  }



  
  return (
    <div className="container" >
      <form onSubmit= { handleSubmit } className="myDefaultForm" >
        <h4 className="myDefaultFormName" >Gamify Housework</h4>






        <div className="myInputHolder">            
          <label htmlFor="title">Title <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix far fa-address-card"></i>
            <input type="text" name="contactTitle" value={ title } onChange={ e=> setTitle(e.target.value) } required />
          </div>
        </div>







        <div className="myInputHolder">
        <label htmlFor="content">Rank of the task <span className="grey-text">(Optional)</span></label>
          <div>
            <i className="myPrefix fa fa-edit">Rank</i>
            

                       
            <select>              
              <option value="bronze" selected>Bronze</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
            </select>
            <label>Materialize Select</label>

          </div>
        </div>





        {/* <div className="myInputHolder">
        <label htmlFor="content">Description <span className="grey-text">(Optional)</span></label>
          <div>
            <i className="myPrefix fa fa-edit"></i>
            <textarea name="content" className= "materialize-textarea" value={ description } onChange={ e=> setDescription(e.target.value) } required ></textarea>
          </div>
        </div> */}






        <div className="input-field right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light" id= "myDownloadBtn">
            Gamify <i className="fa fa-gamepad"></i>
          </button>
        </div>


        {/* <div className="myDefaultFormFooter">
          <p>Wanna know more about me?</p>
          
          <p>
            <a target="_blank" rel="noopener noreferrer" href="https://silvenleaf.github.io" className="myThemeColorText">SilvenLEAF.github.io</a>
          </p>
        </div> */}




        
      </form>
    </div>
  )
}

export default ActionPage
