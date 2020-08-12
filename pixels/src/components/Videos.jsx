import React from 'react'
import axios from 'axios'

class Videos extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            value:"",
            page_no:2
        }
    }
    handleChange=(e)=>{
        this.setState({value:e.target.value})
    }
    handleClick =()=>{
        axios.get(`https://api.pexels.com/videos/search`,{
            headers: {
              authorization: "563492ad6f917000010000017ac4d10c0e0d4706a292add299fbf410"
            },
            params:{
                query:this.state.value,
                per_page:this.state.page_no
            }
            }).then(res=>console.log(res))
    }

    render(){
       
        return(
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.value}></input>
                <input type="button" onClick={this.handleClick} value="Search"></input>
            </div>
        )
    }
}
export default Videos