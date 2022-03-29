import React from 'react';
import { Link } from 'react-router-dom'

function HowItWorks() {

    return (

        <section className="adoption-area-two pt-110 pb-50">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-9">
                        <div className="section-title text-center mb-65">
                            <h2 className="title">How It Works ?</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row'>
                    <div className="col-xl">
                        <div className="adoption-item">
                            <div className="adopt-thumb">
                                <Link to="/breeder-details"><img src="https://assets.rumsan.com/esatya/exchange.png" alt="" /></Link>
                            </div>
                            <div className="adopt-content">
                                <h3 className="title"><Link to="/breeder-details">Animal NFTs <br/> Campaign</Link></h3>
                                <p>We create NFTs of your animals and a platform for your animal lovers to purchase and trade. With every NFT being traded you will receive a royalty.  </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl">
                        <div className="adoption-item">
                            <div className="adopt-thumb">
                                <Link to="/breeder-details"><img src="https://assets.rumsan.com/esatya/house.png" alt="" /></Link>
                            </div>
                            <div className="adopt-content">
                                <h3 className="title"><Link to="/breeder-details">Adopt an Animal Campaigns </Link></h3>
                                <p>Create or add animal NFTs to your existing adopt an animal campaign.  These NFTs will help adopters build a personal relationship with individual animals through special updates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl">
                        <div className="adoption-item">
                            <div className="adopt-thumb">
                                <Link to="/breeder-details"><img src="https://assets.rumsan.com/esatya/building.png" alt="" /></Link>
                            </div>
                            <div className="adopt-content">
                                <h3 className="title"><Link to="/breeder-details">Visit<br/>Memorabilia</Link></h3>
                                <p>Turn visits to your sanctuary or zoo into permanent memorabilia for your visitors! They can keep a virtual track of all their visits as a permanent memory in blockchain.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;
