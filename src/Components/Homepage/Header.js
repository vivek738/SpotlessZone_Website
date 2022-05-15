import React from 'react'

const Header = () => {
    return (
        <>
            <div className="container-fluid bg-white shadow fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid col-md-10 col-14">
                        <a className="navbar-brand" href="home/">
                            SPOTLESS ZONE
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item mx-3">
                                    <a className="nav-link " href="home/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href='/services'>
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href='/products'>
                                        Products
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href='/blog'>
                                        Blogs
                                    </a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href='/contacts'>
                                        Contacts
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input
                                    className="form-control mx-0 rounded-pill"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                {
                                    <>

                                        <a href="/login" className="btn btn-link text-decoration-none">Login</a>
                                       


                                    </>
                                }



                            </form>
                        </div>
                    </div>
                </nav>

            </div>
        </>



    )
}

export default Header