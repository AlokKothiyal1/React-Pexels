import React from 'react';
import Photos from './components/Photos'
import Videos from './components/Videos'
import Styles from './App.module.css'

class App extends React.Component {
  constructor(props){
    super(props)
      this.state ={

        buttons:true,
        photos:false,
        videos:false

      }
  }

  handleChange = (val)=>{
    console.log(val)
    if(val==="photos"){
      this.setState({photos:true,buttons:false,videos:false})
    }
    else if(val==="videos"){
      this.setState({videos:true,buttons:false,photos:false})
    }
   
  }

  render(){
    const {buttons,photos,videos}= this.state
    console.log(this.state)
      return (    
        <div>
          {buttons&&

          <div className={Styles.main}>

            <div className={Styles.Wrapper}>
                <p> Explore stock photos & videos <br></br>shared by talented creators.</p>
                <div className={Styles.flexBox}>
                    <div className={ Styles.btn} onClick={()=>this.handleChange("photos")}>Photos</div>
                    <div className={ Styles.btn} onClick={()=>this.handleChange("videos")}>Videos</div>
                </div>
            </div>
          </div>
          }

        {videos && <Videos/>}
        {photos && <Photos/>}
      </div>
    );
  }
}

export default App;
