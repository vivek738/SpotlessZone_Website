import axios from 'axios';
import React, { useEffect, useState } from 'react';
import First from '../../Images/first.png';
import Header from '../Homepage/Header';
import KhaltiCheckout from "khalti-checkout-web";
import { useLocation } from 'react-router-dom';
import {toast} from 'react-toastify'

const Checkout = () => {
    function parseJwt(token) {
        if (!token) { return; }
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    }

    const [pdata, setProductData] = useState()
    // get user form the token
    const token_data = localStorage.getItem("token")
    const token = parseJwt(token_data)
    const user = token?.user._id
    const [totalprice, setTotalPrice] = useState("");
    const [firstname, setFirstname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [points, setPoints] = useState(0)

    // khalti payment integration
    let config = {
        publicKey: "test_public_key_881f535efbb040ee885f85e52aff77aa",
        productIdentity: "12345",
        productName: "foods",
        productUrl: "http://localhost:3000",
        eventHandler: {
            onSuccess(payload) {
                axios
                    .post("http://localhost:5000/order", {
                        products: pdata,
                        total: totalprice,
                        user: user,
                        points: points,
                        firstname,
                        phone,
                        address_detail: {
                            address: address,
                            state: state,
                            city: city
                        }
                    })
                    .then((res) => {
                        console.log(res.data);
                    });
                console.log(payload);
            },
            onError(error) {
                console.log(error);
            },
            onClose() {
                console.log("widget is closing");
            },
        },
        paymentPreference: [
            "KHALTI",
            "EBANKING",
            "MOBILE_BANKING",
            "CONNECT_IPS",
            "SCT",
        ],
    };
    let checkout = new KhaltiCheckout(config);

    const headers = [
        { key: "pic", label: "Product Image" },
        { key: "pname", label: "Product Name" },
        { key: "pqty", label: "Quantity" },
        { key: "pprice", label: "Price Per Qty" },
        { key: "tprice", label: "Total Price" },
        { key: "action", label: "Action" },
    ];


    React.useEffect(() => {
        axios
            .get("http://localhost:5000/get-products-cart/" + user)
            .then((result) => {
                setProductData(result.data);
    
                const items = result.data
                items.map((val, ind)=>{
                    const total = val.productId.pprice*val.productQuantity
                    setTotalPrice(totalprice+total)
                })
            })
            .catch((err) => {
                console.log(err);
            });
        
    }, [])
    console.log(city)

    const discount = ()=>{
        const wallet = token?.user.points
        if(points> wallet){
            toast.error("Insufficient Points!", {position: toast.POSITION.TOP_RIGHT})
        }else{
            var discountPrice = points/10
            const tprice = totalprice - discountPrice
            setTotalPrice(tprice)
        }
    }

    return (
        <>

            <div className="container-fluid homeImg py-3" style={{ paddingTop: 70, backgroundColor: "#ebebeb", background: `url(${First})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "50vh", backgroundSize: "cover", position: "relative" }}>
                <Header></Header>

                <div className="bread-crumb-section d-flex justify-content-center align-items-center">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href="/" className='text-decoration-none fs-5 text-success'>Home</a>
                            </li>
                            <li className="breadcrumb-item active fs-5 text-white" aria-current="page">
                                Checkout
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="container-fluid bg-light py-4">
                <div className="container col-md-11">
                    <div className="row my-3">
                        <div className="col-md-9">
                            <div className="px-4 bg-white py-3">
                                <form>
                                    <div className='bg-white'>
                                        <p className="text text-start text-dark">Delivery Information</p>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>First Name</label>
                                                    <input onChange={e => setFirstname(e.target.value)} type="text" className="form-control" style={{ borderRadius: '0px' }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>State</label>
                                                    <select onChange={e => setState(e.target.value)} className="form-select" aria-label="Default select example" style={{ borderRadius: '0px' }}>
                                                        <option selected="">Please select your state</option>
                                                        <option value='Bagmati'>Bagmati</option>
                                                        <option value='Lumbini'>Lumbini</option>
                                                        <option value='Karnali'>Karnali</option>
                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>Phone no</label>
                                                    <input onChange={e => setPhone(e.target.value)} type="text" className="form-control" style={{ borderRadius: '0px' }} />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>City</label>
                                                    <select onChange={e => setCity(e.target.value)} className="form-select" aria-label="Default select example" style={{ borderRadius: '0px' }}>
                                                        <option selected="">Please select your City</option>
                                                        <option value='Kathmandu'>Kathmandu</option>
                                                        <option value='Lalitpur'>Lalitpur</option>
                                                        <option value='Bhaktapur'>Bhaktapur</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>Area</label>
                                                    <select className="form-select" aria-label="Default select example" style={{ borderRadius: '0px' }}>
                                                        <option selected="">Area</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="p-1">
                                                    <label htmlFor="" className='mb-2'>Address</label>
                                                    <select onChange={e => setAddress(e.target.value)} className="form-select" aria-label="Default select example" style={{ borderRadius: '0px' }}>
                                                        <option selected="">Address</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-3 bg-white py-3 px-4">
                            <p className="text text-dark fs-5 border-bottom border-2 mb-3">Order Summary</p>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <p className="text text-secondary mb-0">Subtotal ({pdata?.length} Items)</p>
                                <p className="text text-dark fw-bold mb-0">Rs. {totalprice}</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <p className="text text-secondary mb-0">Shipping Fee</p>
                                <p className="text text-dark fw-bold mb-0">Rs. 0</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <input onChange={(e)=>setPoints(e.target.value)} type="text" className="form-control me-2" style={{ borderRadius: '0px' }} />
                                <button onClick={discount} className="btn btn-primary px-3" style={{ borderRadius: '0px' }}>Apply</button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <p className="text text-secondary mb-0">Total:</p>
                                <div>
                                    <p className="text text-dark fw-bold text-end mb-0">Rs. {totalprice}</p>
                                    <small className="d-block text-secondary text-end">VAT Included</small>
                                </div>
                            </div>
                            <button onClick={() => checkout.show({ amount: 1000, mobile: 9861905670 })} className="btn btn-warning w-100" style={{ borderRadius: '0px' }}>
                                Processed to Pay
                            </button>
                            {/* <button onClick={checkout.show({ amount: 1000, mobile: 9861905670})} className="btn btn-secondary w-100" style={{ borderRadius: '0px' }}>Processed to Pay</button> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout