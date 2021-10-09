import React from 'react';
import Logo from '../components/Logo'
import GroupPhoto from '../assets/friend4evaaa.png'
import IntroCard from '../components/IntroCard'

const Home = () => {
    return <>
        <h1>Okay fine</h1>
        <div className="row mx-0" >
            <div className="col-8">
                <div className="d-flex justify-content-center my-5">
                    <Logo />
                </div>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">8/10</div>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <img src={GroupPhoto} />
                </div>
            </div>
            <div className="col-4 d-flex justify-content-center">
                <IntroCard />
            </div>
        </div>


    </>
}

export default Home