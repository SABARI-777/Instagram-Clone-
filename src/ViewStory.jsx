import React,{useState,useEffect} from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'

function ViewStory() {

    const {id,tot} = useParams();
    const [story,setstory] = useState();

    useEffect(()=>{
        fetch(`http://localhost:3000/story/${id}`)
        .then((res)=>res.json())
        .then((data)=>setstory(data))
        .catch((error)=>console.error("Error fetching story data:",error.message));
    },[id]);
    
    const navigate = useNavigate();

    if(id<=0){
        navigate("/");
    }
    if(id>=tot){
        navigate("/");
    }
    // console.log(story);
    if(!story){
        return <div>Loading...</div>
    }
    return (
    <div className='d-flex justify-content-center align-items-center vh-100 position-relative'>
        <Link to={`http://localhost:5173/story/${Number(id) - 1}/${tot}`}><i className="bi bi-arrow-left-circle-fill"></i></Link>
        <img className="vh-100 " src={story.image} alt={story.title} />
       <Link to={`http://localhost:5173/story/${Number(id) + 1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
    </div>
  )
}

export default ViewStory