import axios from "axios";
import { useState } from "react";



const Addproduct=()=>{

    const [pname, setPname] = useState('');
    const [pprice, setPprice] = useState('');
    const [pqty, setPqty] = useState('');
    
    const [message, setMessage] = useState('');
    const [pic, setImage] = useState('');

     const Addproduct111=()=>{
      var formData = new FormData();
        formData.append("pname", pname);
        formData.append("pprice", pprice);
        formData.append("pqty", pqty);
        
        formData.append("pic", pic)
    axios.post("http://localhost:5000/product-add",formData)
    .then(result=>{
        console.log(result.data.message)
        if(result.data.message){
            setMessage(" Product Added succsessfullly!!")
    }
})
.catch()
     }
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2 className="custom-heading-h2">ADD PRODUCT</h2>
                    <p>{message}</p>

                    
                    <form>

                    <div className="form-group">
                            <label>Upload image</label>
                            <input type="file" className="form-control"
                            
                            onChange={(e)=>setImage(e.target.files[0])}
                            
                            />
                        </div>


                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" className="form-control"
                            value={pname}
                            onChange={(e)=>setPname(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" className="form-control"
                            value={pprice}
                            onChange={(e)=>setPprice(e.target.value)}
                            />
                        </div>

                        

                        <div className="form-group">
                            <label>Product Quantity</label>
                            <input type="text" className="form-control"
                            value={pqty}
                            onChange={(e)=>setPqty(e.target.value)}
                            />
                        </div>
                        <input type="submit" className="btn btn-dark" 
                        onClick={Addproduct111}
                        />
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}
export default Addproduct;

    
