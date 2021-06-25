import React, { useState,useEffect } from "react";
import axios from 'axios';

const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi,setYaziDetayi] = useState({});

    useEffect(() => {
 axios.get(`http://react-yazi-yorum.herokuapp.com/post/${id}`)

 .then(response => {
     setYaziDetayi(response.data);
 })
 .catch(error => {
     console.log(error)

 })
    },[])
 
    return(
        <React.Fragment>
     <h2 classsName="ui header">{yaziDetayi.title}</h2>
     <p>{yaziDetayi.created_at}</p>
<p>{yaziDetayi.content}  </p>
     </React.Fragment>
    );
};
export default YaziDetayi;