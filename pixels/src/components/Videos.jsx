import React from 'react'
import axios from 'axios'
import Styles from './Videos.module.css'

class Videos extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            value:"",
            page_no:15,
            data:"",
            isOpen: false
        }
    }
    openModal = ()=> {
        this.setState({isOpen: true})
      }

    handleChange=(e)=>{
        this.setState({value:e.target.value})
    }
    handleClick =()=>{
        axios.get(`https://api.pexels.com/videos/search`,{
            headers: {
              authorization: "563492ad6f91700001000001a4beb2375b2b461fb9c852f78e1f8df5"
            },
            params:{
                query:this.state.value,
                per_page:this.state.page_no
            }
            })

            .then(res=>res.data.videos)
            .then(res=>this.setState({data:res}))
            .catch(err=>console.log(err))
    }
    componentDidMount(){
        axios.get(`https://api.pexels.com/videos/search`,{
            headers: {
              authorization: "563492ad6f91700001000001a4beb2375b2b461fb9c852f78e1f8df5"
            },
            params:{
                query:"engineering",
                per_page:this.state.page_no
            }
            })

            .then(res=>res.data.videos)
            .then(res=>this.setState({data:res}))
            .catch(err=>console.log(err))
    }

  

    render(){
        console.log(this.state.data)

        const {data} = this.state
        return(
            
            <div className={Styles.main}>

                <div className={Styles.input_container}>

                    <h1>Pexels Videos</h1>
                    <input type="text" onChange={this.handleChange} value={this.state.value} placeholder="Search for Videos"></input>
                    <button type="button" onClick={this.handleClick} >Search</button>
                    <button type="button" style={{backgroundColor:"#EC407A"}} onClick={()=>this.props.handleChange("buttons")}>Home</button>

                </div>

                <div className={Styles.video_container}>

                    {data!=="" && data.map((item,i)=>(

                        <div key={i}>
                            <a href={item.video_files[1].link} target="_blank" rel="noopener noreferrer">

                                <img  className={Styles.img} src = {item.video_pictures[2].picture} alt="img">
                                </img>  
                                <img className ={ Styles.logo}src='https://image.flaticon.com/icons/svg/3039/3039386.svg' width="50px" alt="img"></img>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        )
    }
}
export default Videos