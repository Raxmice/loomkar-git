import React, { useState, useEffect, useContext } from 'react'
import Context from '../context/Context';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import $ from 'jquery'

import ProductsCard from './landingpage/ProductsCard';

export default function Stoles() {
    const {loading, setLoading, loadingStyle2} = useContext(Context)
  

    document.title='Stoles'
  
    const [currentpage, setcurrentpage] = useState(1)//this is for pagination
    const [totalitems, setTotalitems] = useState(1)
    const [filter, setFilter] = useState('All')
    const [trendingList, setProducts] = useState([])
    const[grid, setGrid]=useState(3)
    const [getproduct, setGetproduct] = useState(false)
  
    //get all notes
    const getallproducts = async ()=>{
      const responce = await fetch(`https://loomkar-bk.vercel.app/api/pro/fatchallproduct/:${currentpage}/:stole`,{
        method:'GET',
        headers:{
          'content-Type':'application/json',
        }
      })
  
      const allproduct = await responce.json()
    //   console.log(allproduct)
      setProducts(allproduct.products)
      setTotalitems(allproduct.totalp)
      
    setLoading(false)
  }
  
  if(getproduct===true){
    getallproducts()
    setGetproduct(false)
  }
  
  useEffect(()=>{
    setLoading(true)
    setGetproduct(true)
  },[setLoading])
  
      
      let resetgrid = ()=>{
          $('.grid-box div').css({"background":"#666666"})
      }
  
      let settinggrid = (g)=>{
          switch(g) {
              case 6:
                  resetgrid()
                $('.grid-2').css({"background":"#2a2927"})
                setGrid(g)
                break;
              case 4:
                  resetgrid()
                  $('.grid-3').css({"background":"#2a2927"})
                  setGrid(g)
                break;
              case 3:
                  resetgrid()
                  $('.grid-4').css({"background":"#2a2927"})
                  setGrid(g)
                break;
              case 12:
                  resetgrid()
                  $('.grid-0').css({"background":"#2a2927"})
                  setGrid(g)
                break;
              default:
                console.log("not selected")
            }
      }
  
  
      
      let handelfilter = (e)=>{
        setFilter(e.target.value)
      }
  
    /*sorting*/
    let all = ()=>{
      return trendingList;
    }
    let sorting = (trendingList)=>trendingList.tag===filter;
  
  
    //pagination
    let prevpage = ()=>{
      if(currentpage > 1){
        setcurrentpage(currentpage-1)
        setGetproduct(true)
        $(".sec-heading").get(0).scrollIntoView({behavior: 'smooth'});
      }
    }
     var inpage = Math.floor(totalitems/8);
    inpage = inpage+1;
  
    let nextpage = ()=>{
      if(currentpage < inpage){
        setcurrentpage(currentpage+1)
        setGetproduct(true)
        $(".sec-heading").get(0).scrollIntoView({behavior: 'smooth'});
      }
    }
    return (
      <div>
      {loading?
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
            <section className='sec-t-30'>
            <div className='container'>
              <h3 className='sec-heading'>Handloom Sarees</h3>
              <hr/>
              <p className='para'>Elegance, femininity, uniqueness, and beauty - all these are definitely synonyms of a Saree. Sarees are not only the most loved outfit for Indian women, but also a favorite of females across the globe! Loomkar’s handloom sarees embellished and crafted by the most talented weavers totally justify these definitions of a saree. Projecting the modern Indian woman as strong and progressive, who’s also conscious of her roots and traditions, these handwoven sarees wrap you in their elegance, while caressing your poise! Find a variety of internationally loved handloom sarees here, like Chanderi, Chanderi Pochampally, Kalamkari, Bengal handloom sarees, and many more.</p>
            </div>
  
            <div className='container'>
                <div className='view-sort'>
                    <div className='view-grid'>
                        <div><p className='para no-mr'>View As:</p></div>
  
                        <div className='grid-boxs'>
                            <div className='grid-box' onClick={()=>settinggrid(6)}>
                                <div className='grid-2'></div>
                                <div className='grid-2'></div>
                            </div>
  
                            <div className='grid-box' onClick={()=>settinggrid(4)}>
                                <div className='grid-3'></div>
                                <div className='grid-3'></div>
                                <div className='grid-3'></div>
                            </div>
  
                            <div className='grid-box' onClick={()=>settinggrid(3)}>
                                <div className='grid-4'></div>
                                <div className='grid-4'></div>
                                <div className='grid-4'></div>
                                <div className='grid-4'></div>
                            </div>
                        </div>
  
                    </div>
                    <div className='sort-items'>
                        <div className='sort-by'><p className='para no-mr'>Sort By:</p></div>
                        <div className=''>
                            <select className="filter-box" onChange={handelfilter} aria-label="Default select example" defaultValue={filter}>
                                <option value="All">All</option>
                                <option value="Featured">Featured</option>
                                <option value="Best-Selling">Best selling</option>
                            </select>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
          </section>
  
        <section className='sec-t-30'>
          <div className='container'>
              <div className='row'>
              {
                (trendingList.filter(filter==="All" ? all : sorting)).map((element)=>{
                    return <div className={`col-md-${grid} ${element.tag}`} key={element._id}>
                      <ProductsCard id={element._id} purl={element.product_url} avail={element.avail} img1={element.imgs[0]} img2={element.imgs[1]} pname={element.product_name} discount={element.discount} price={element.main_price} link={element.plink}/>
                    </div>
                  })
                }
              </div>    
          </div>
        </section>
  
        <section className='sec-b-space sec-t-30'>
                <div className='container all-center'>
                  <div className='pagination'>
                    <button className='page-btn prev-page' onClick={prevpage}>Prev</button>
                      <div className='active-page-box'>
                        <p className='para no-mr'> {currentpage} To {inpage}</p>
                      </div>
                    <button className='page-btn next-page' onClick={nextpage}>Next</button>
                  </div>
                </div>
        </section>
        </div>
      }
      
      
  
      </div>
    )
  }
  