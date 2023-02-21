import React,{useEffect, useContext} from 'react'
import Context from '../context/Context';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import fb from '../includes/fb.svg';
import insta from '../includes/insta.svg';

export default function Contact() {
    const {loading, setLoading, loadingStyle2} = useContext(Context)

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
          setLoading(false)
        },500)
      },[setLoading])

    document.title='Contact us'
  return (
    <div>
    {loading ? 
        <div className='loader-sec'>
        <ClimbingBoxLoader
        style={loadingStyle2}
        loading={loading}
        aria-label="Loading Spinner"
        data-testid="loader"
        />
        </div>

        : 
    
        <div>
        <section className='sec-b-space sec-t-30'>
            <div className='container'>
            <h3 className='center sec-heading'>Contact Us</h3>
                <div className='row'>
                <h2 className="heading-h2">GET IN TOUCH</h2>
                <p className='peragraph-h2'>We'd Love to Hear From You, Lets Get In Touch!</p>
                <div className='col-md-6'>
                    <h6 className='topic-head'>Address</h6>
                    <p className='topic-para'>Shop no, 359 - B, Main Rd, beside Natural Icecream, Samta Colony, India</p>
                </div>

                <div className='col-md-6'>
                        <h6 className='topic-head'>Phone</h6>
                        <p className='topic-para'>9630560356</p>
                    </div>

                <div className='col-md-6'>
                    <h6 className='topic-head'>Email</h6>
                    <p className='topic-para'>hello@loomkar.com</p>
                </div>

                <div className='col-md-6'>
                    <h6 className='topic-head'>Additional Information</h6>
                    <p className='topic-para'>We are open: Monday - Saturday, 10AM - 5PM and closed on sunday sorry for that.</p>
                </div>

                <div className='col-md-6'>
                    <h6 className='topic-head'>Social</h6>
                    <div className='foot-social'>
                        <a href='/'><img className='social-icon circul' src={fb} alt="facebook"/></a>
                        <a href='/'><img className='social-icon circul' src={insta} alt="instagram"/></a>
                    </div>
                </div>

                    
                </div>
            </div>
        </section>

        <section className='loomkar-map sec-b-space'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29749.07993760775!2d81.623451!3d21.246318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a5d211243bf2d01!2sLOOMKAR!5e0!3m2!1sen!2sin!4v1675681669737!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="loomkarmap"></iframe>
        </section>

        <section className='sec-b-space'>
            <div className='container'>
                <h2 className="heading-h2 center">LEAVE US A MESSAGE</h2>
                <p className='peragraph-h2 center'>-Good For Nature, Good For You-</p>
                <form>
                    <div className='row'>
                        <div className='col-md-4'>
                        <input className='input-box bg-white' type='text' placeholder='name'/>
                        </div>
                        <div className='col-md-4'>
                        <input className='input-box bg-white' type='email' placeholder='Email*'/>
                        </div>
                        <div className='col-md-4'>
                        <input className='input-box bg-white' type='text' placeholder='Phone'/>
                        </div>
                        <div className='col-md-12'>
                        <textarea className='input-box bg-white' rows={6} type='text' placeholder='Comment'></textarea>
                        </div>
                    </div>

                    <div className='all-center'><a href='/'><div className='action-btn'>SEND</div></a></div>
                </form>
            </div>
        </section>
        </div>
    }
   
    </div>
  )
}
