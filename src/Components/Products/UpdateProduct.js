import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Update =()=>{
    const {_id}  = useParams();

    const [prodata, setProdata] = useState([]);
    const [pname, setPnamedata] = useState("");
    const [pdesc, setPdesc] = useState("");
    const [pqty, setPquantity] = useState("");
    const [pprice, setPprice] = useState("");
   

     //pid is javascript variable so is not used on url
    useEffect(()=>{

        axios.get("http://localhost:5000/update-product"+_id)
        .then(result=>{
            console.log(result.data)
            setProdata(result.data);
            setPnamedata(result.data.pname);
            setPdesc(result.data.pdesc);
            setPprice(result.data.pprice);
            setPquantity(result.data.pty)
        })
        .catch()
        
        },[])


const UpdateProduct =(e)=>{
    e.preventDefault();
    const formdata={
        _id,
        pname,
        pprice,pqty,pdesc
    }
    axios.put("http://localhost:5000/user/update", formdata).then(result=>{
        //console.log(result.data);

    })
}

    return(
        <div className="container"   >
            <div className="row">
                <form>
                    <div  className="form-group">
                        <label>Product Name</label>
                        <input type= "text"   className="form-control" value={pname} onChange={e=>{setPnamedata(e.target.value)}}></input>
                    </div>
                    <div  className="form-group">
                        <label>Product Description</label>
                        <input type=   "text"   className="form-control" value={pdesc} onChange={e=>{setPdesc(e.target.value)}}></input>
                    </div>
                    <div  className="form-group">
                        <label>Product Quantity</label>
                        <input type=   "text"   className="form-control" value={pquantity} onChange={e=>{setPquantity(e.target.value)}}></input>
                    </div>
                    <div  className="form-group">
                        <label>Product Price</label>
                        <input type=   "text"   className="form-control" value={pprice} onChange={e=>{setPprice(e.target.value)}}></input>
                    </div>
                    <input type="submit" onClick={UpdateProduct}></input>
                </form>
            </div>
        </div>
    )
}

export default Update;