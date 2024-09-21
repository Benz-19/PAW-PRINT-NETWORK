import React from 'react';
import '../../styles/Hero.css';
import Header from '../Header/Header.js';
import HeroBackgroundImage from '../../images/hero-background-image.jpg';
import searchButton from '../../images/search-button.png';
import google from '../../images/google.png';
import macApple from '../../images/ic_baseline-apple.png';
import facebook from '../../images/facebook.png';

const Hero = () => {
    return (
        <>
            <div id='hero-section'>
                <div className='hero-img-cont'>
                    <img src={HeroBackgroundImage} alt='Hero Background' className='background-img' />
                </div>
                {/* Including the header section */}
                <Header />

                <div className='hero-content'>
                    <form for='' method='post'>
                        <input type='text' placeholder='&nbsp;&nbsp;Search your thoughts' />
                        <button type='submit' name='submit'>
                            <img src={searchButton} alt='Search Button' className='search-btn' />
                        </button>
                    </form>

                    {/* '&nbsp;' the html entity for the 'space' btw words */}
                    <div className='header-tagline'>

                        <div className='tagline-top'>
                            <p>You</p>
                            <p>&nbsp;love your pets, &nbsp;</p><br />
                        </div>
                        <div className='tagline-buttom'>
                            <p>so do&nbsp;</p>
                            <p>we</p>
                        </div>
                        <div className='welcome'>
                            <p>Welcome to our one stop solution to all your pet’s needs.</p>
                            <p>We believe your pets are ours too and we take care of</p>
                            <p>them as you do.</p>
                        </div>

                        <div className='sign-in'>
                            <p>Enter your number to get started</p>
                            <form for='' method='post'>
                                <p id='country-code'>+91</p>
                                <input type='text' placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0000 0000 0000' />
                                <div className='sig-in-btn'>
                                    <button type='submit' name='submit'>Get Started</button>
                                </div>
                                <p className='option'>Or Login Using</p>
                            </form>

                            <div className='login-acc-opt'>
                                <img src={google} alt='Google img' className='login-acc-img' />
                                <img src={facebook} alt='Facebook img' className='login-acc-img' />
                                <img src={macApple} alt='Apple img' className='login-acc-img' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
            <p>lorem js;gdgnffjdfnfjdk</p>
        </>

    );
};

export default Hero;