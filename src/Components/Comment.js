import { useState, useEffect } from 'react';
import { FaStar} from 'react-icons/fa';

var colors = {
    yellow : "yellow",
    gray : "gray"
}

function Comment() {

    let [data, usedata] = useState([]);
    var [likedComments, setLikedComments] = useState([]);
    let [currentValue,setcurrentValue] = useState(0);
    let [setMouseValue,setMouse] = useState(0);
    let color = '';

    const stars = Array(5).fill(0);


    useEffect(() => {
        let localRecord = JSON.parse(localStorage.getItem('comment'));
        let likee = JSON.parse(localStorage.getItem('LikedComments'))
        if (localRecord == null) {
            usedata([]);
        }
        else {
            usedata(localRecord)
        }
        setLikedComments(likee);

    }, usedata);


    let formsubmit = (e) => {
        e.preventDefault();
        let obj = {
            name: e.target.name.value,
            nameChar : e.target.name.value.charAt(0),
            comment: e.target.comment.value,
            id : Math.round(Math.random()*1000)
        }
        let data1 = ([...data, obj]);
        usedata(data1);

        localStorage.setItem('comment', JSON.stringify(data1));
        e.target.name.value = "";
        e.target.comment.value = "";

    }

    let deletecomment = (comme) => {
        let posi = data.findIndex(v => v.nameChar == comme);
        console.log(data[posi]);
        data.splice(posi, 1);
        usedata(data);

        localStorage.setItem('comment', JSON.stringify(data));
        let local = JSON.parse(localStorage.getItem('comment'))
        usedata(local);

    }

    var likeUnlike = (id) => {
        if (likedComments.includes(id)) {
            var updateLike = likedComments.filter(commentId => commentId !== id);
            setLikedComments(updateLike);
        } else 
        {
            var updateLike = [...likedComments, id];
            setLikedComments(updateLike);
        }
        localStorage.setItem('LikedComments', JSON.stringify(updateLike));
    };

    let handleclick = (pos)=>{
        setcurrentValue(pos);
        setcurrentValue(0);
    }
    let handelMouse = (pos)=>
    {
        setMouse(pos);
    }

    return (

        <>


            <h1 style={{color:"#305399"}}>Comments:</h1>
            <h4 style={{fontFamily:"serif",fontSize:"19px"}}>say something about 4.0 Tecnologies</h4>
            <div className="form">
                <form method="post" onSubmit={(e) => formsubmit(e)}>
                    <input type="text" placeholder="Your Name" className="name" name="name"></input><br /><br />
                    <textarea placeholder="Your Comments" name='comment'></textarea><br /><br />
                    <button type="submit">Add Comment</button>
                </form>
                <div>
                    <img src={require('../images/img1.png')}></img>
                </div>
                <br /><br />
            </div>
            <hr style={{ color: "black" }} />
            <div className="comment-section">
                <div className="counter-class">
                    <h4 className="counter">{data.length}</h4>
                    <p>Comments</p>
                </div>
            </div>

            {data.map((v, i) => {
                return (
                    <>
                        <div>
                            <span style={{ display: "none" }}>
                                {
                                    v.nameChar == "A" ?
                                        color = "#003366"
                                        :
                                        v.nameChar == "B" ?
                                            color = "#ff9933"
                                            :
                                            v.nameChar == "C" ?
                                                color = "#ff3300"
                                                :
                                                v.nameChar == "D"  ?
                                                    color = "#ff66cc"
                                                    :
                                                    v.nameChar == "E" ?
                                                        color = "#6699ff"
                                                        :
                                                        v.nameChar == "F" ?
                                                            color = "#006600"
                                                            :
                                                            v.nameChar == "G" ?
                                                                color = "#0066ff"
                                                                :
                                                                v.nameChar == "H" ?
                                                                    color = "#669999"
                                                                    :
                                                                    v.nameChar == "I" ?
                                                                        color = "#3bb300"
                                                                        :
                                                                        v.nameChar == "J" ?
                                                                            color = "#000099"
                                                                            :
                                                                            v.nameChar == "K" ?
                                                                                color = "#3d3d5c"
                                                                                :
                                                                                v.nameChar == "L" ?
                                                                                    color = "#4d4d4d"
                                                                                    :
                                                                                    v.nameChar == "M" ?
                                                                                        color = "#661400"
                                                                                        :
                                                                                        v.nameChar == "N" ?
                                                                                            color = "#800060"
                                                                                            :
                                                                                            v.nameChar == "O" ?
                                                                                                color = "#e69900"
                                                                                                :
                                                                                                v.nameChar == "P" ?
                                                                                                    color = "#004d00"
                                                                                                    :
                                                                                                    v.nameChar == "Q" ?
                                                                                                        color = "#006666"
                                                                                                        :
                                                                                                        v.nameChar == "R" ?
                                                                                                            color = "#4d2600"
                                                                                                            :
                                                                                                            v.nameChar == "S" ?
                                                                                                                color = "#800080"
                                                                                                                :
                                                                                                                v.nameChar == "T" ?
                                                                                                                    color = "#4d0099"
                                                                                                                    :
                                                                                                                    v.nameChar == "U" ?
                                                                                                                        color = "#00997a"
                                                                                                                        :
                                                                                                                        v.nameChar == "V" ?
                                                                                                                            color = "#0088cc"
                                                                                                                            :
                                                                                                                            v.nameChar == "W" ?
                                                                                                                                color = "#660066"
                                                                                                                                :
                                                                                                                                v.nameChar == "X" ?
                                                                                                                                    color = "#47476b"
                                                                                                                                    :
                                                                                                                                    v.nameChar == "Y" ?
                                                                                                                                        color = "#b32400"
                                                                                                                                        :
                                                                                                                                        v.nameChar == "Z" ?
                                                                                                                                            color = "#333300"
                                                                                                                                            :
                                                                                                                                            color = "aqua"
                                }
                            </span>


                            <div className='comment1'>
                                <div className='round-name'>
                                    <h4 className='round' style={{ backgroundColor: color }}>{v.nameChar}</h4>
                                    <h3 className='form-name'>{v.name}</h3>
                                    <h5 style={{ marginLeft: "12px", color: "#646458",marginTop:"26px" }}>2 minutes ago</h5>
                                </div>
                                <h4 className='comment'> {v.comment}</h4>
                                <button onClick={() => likeUnlike(v.id)} className='likebutton'>{likedComments.includes(v.id) ? ' 💔 ' : ' 🤍 '}    </button>
                                <span style={{ float: "right" }} onClick={(e) => deletecomment(v.nameChar)}><img style={{width:"21px",marginRight:"13px",cursor:"pointer"}} src={require('../images/pngwing.com.png')}></img></span>
                                <div style={styles.stars}> 
                                    {stars.map((v,index)=>
                                    {
                                        return(
                                            <FaStar 
                                            key = {index} size={23} color={currentValue || setMouseValue > index ? colors.yellow : colors.gray}
                                            onClick={()=>handleclick(index+1)}
                                            onMouseOver={()=>handelMouse(index+1)}
                                            style={{cursor:"pointer"}}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <hr />
                        </div>
                    </>
                )
            })}

        </>
    )
}

const styles = {
    container : {
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
    }
}
export default Comment;