import React, { useState, useEffect } from 'react';
import Lay from '../components/Layout/Lay';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { Button, Checkbox, Radio } from 'antd';
import axios from 'axios';
import { Prices } from '../components/Prices';
import { useCart } from '../context/cart';
import { useFavorites } from '../context/favourite';
import SearchInput from '../components/Form/SearchInput';
import BannerPage from './BannerPage';

import CategoryDropDown from '../components/Layout/CategoryDropdown/CategoryDropDown';
import './../css/Homepage.css';
import banner from './image/banner.jpg';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { FaInfoCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const HomePage = () => {
  const [cart, setCart] = useCart();
  const [favorites, setFavorites] = useFavorites();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [banners, setBanners] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get('/api/v1/category/get-category');
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getTotal = async () => {
    try {
      const { data } = await axios.get('/api/v1/product/product-count');
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    getAllProducts();
  }, [page]);

  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  const filterProduct = async () => {
    try {
      const { data } = await axios.post('/api/v1/product/product-filters', {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const chunkArray = (myArray, chunk_size) => {
    const results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(c => c._id === categoryId);
    return category ? category.name : 'Unknown Category';
  };

  const handleAddToFavorites = (product) => {
    const updatedFavorites = [...favorites, product];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    toast.success('Item Added to Favorites');
  };

  const getAllBanners = async () => {
    try {
      const { data } = await axios.get('/api/v1/banner/get-banner');
      setBanners(data.banners);
      toast.success("Banners fetched successfully");
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong while fetching banners');
    }
  };
  useEffect(() => {
    getAllBanners();
  }, []);

  
  return (
    <Lay title={'All Products - Best Offers'}>
      <div className="container-fluid row mt-3">
        <div className="col-md-2">
          <CategoryDropDown categories={categories} handleFilter={handleFilter} />
        </div>
        <div className="col-md-9 mt-2">
          <center>
            <div
              className="sea text-center"
              id="SearchBar"
              style={{ padding: isMobile ? '0%' : '0%', width: isMobile ? '100%' : '70%' }}
            >
              <SearchInput />
            </div>
          </center>
        </div>
        <div className="shop">
          <div className="left"></div>
          <div className="right">
            <h5>FRUIT FRESH</h5>
            <h1>Vegetable</h1>
            <h1>100% Organic</h1>
            <button onClick={()=>{navigate('/shop')}}>SHOP</button>
          </div>
        </div>
                {/* ==============Categories Product END============= */}
        <div className='ct' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',marginTop:'5%'}}>
          <div><h1 style={{fontWeight: 'bolder',borderBottom:'3px solid #7fad39',marginBottom:'15%'}}>Categories</h1></div>

          <div className="container">
            <div className="row scrollBox">
              <div id="carouselExampleControls" className="carousel slide custom-carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {chunkArray([...products], isMobile ? 1 : 6).map((productChunk, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <div className="row g-2">
                        {productChunk.map((p) => (
                          <div className={`col ${isMobile ? 'col-12' : 'col-2'}`} key={p._id}>
                            <div className="card h-100">
                              <img
                                src={`/api/v1/product/product-photo/${p._id}`}
                                className="card-img-top custom-img"
                                alt={p.name}
                              />
                              <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{p.name.substring(0, 30)}</h5>
                                <div className="mt-auto">
                                  <button
                                    className="btn btn-primary w-100 mb-2"
                                    onClick={() => navigate(`/product/${p.slug}`)}
                                    style={{ backgroundColor: 'white', color: 'green' }}
                                  >
                                    {getCategoryName(p.category)}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span style={{ backgroundColor: '#7fad39', position: 'absolute', left: 0 }}><GrPrevious /></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span style={{ backgroundColor: '#7fad39', position: 'absolute', right: 0 }}><GrNext /></span>
                </button>
              </div>
            </div>
          </div>
        </div>
  {/* ==============Categories Product END============= */}

        {/* ==============Feature Product ============= */}
        <div className='ct' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' ,marginTop:'5%'}}>
          <div><h1 style={{ fontWeight: 'bolder',borderBottom:'3px solid #7fad39',marginBottom:'15%'}}>Feature Products</h1></div>

          <div className="container">
            <div className="row scrollBox">
              <div id="carouselExampleControls2" className="carousel slide custom-carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                  {chunkArray([...products], isMobile ? 1 : 6).map((productChunk, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                      <div className="row g-2">
                        {productChunk.map((p) => (
                          <div className={`col ${isMobile ? 'col-12' : 'col-2'}`} key={p._id}>
                            <div className="card h-100 productcard">
                              <img
                                src={`/api/v1/product/product-photo/${p._id}`}
                                className="card-img-top custom-img"
                                alt={p.name}
                              />
                              <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{p.name.substring(0, 30)}</h5>
                                <hr></hr>
                                <h5 className="card-title" style={{ color: 'grey', fontSize: '13px' }}>{p.description.substring(0, 30)}</h5>
                                <h6 style={{ color: '#7fad39', fontSize: '13px', fontWeight: 'bolder' }}>Rs.{p.price}</h6>
                                <div className="mt-auto">
                                  <div className='grp_btn' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <button
                                      className="m-3"
                                      onClick={() => {
                                        setCart([...cart, p]);
                                        localStorage.setItem('cart', JSON.stringify([...cart, p]));
                                        toast.success('Item Added to Cart');
                                      }}
                                      style={{ border: 'none', padding: 0, background: 'none' }}
                                    >
                                      <IoMdCart size={25} />
                                    </button>
                                    <button
                                      className="mb-2"
                                      onClick={() => navigate(`/product/${p.slug}`)}
                                      style={{ border: 'none', padding: 0, background: 'none' }}
                                    >
                                      <FaInfoCircle size={25} />
                                    </button>
                                    <button
                                      className="mb-2"
                                      onClick={() => handleAddToFavorites(p)}
                                      style={{ border: 'none', padding: 0, background: 'none' }}
                                    >
                                      <FaHeart size={25} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span style={{ backgroundColor: '#7fad39', position: 'absolute', left: 0 }}><GrPrevious /></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span style={{ backgroundColor: '#7fad39', position: 'absolute', right: 0 }}><GrNext /></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="m-2 p-3">
          {products && products.length < total && (
            <button
              className="btn btn-warning"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? 'Loading ...' : 'Loadmore'}
            </button>
          )}
        </div>
        {/* ==============Feature Product END============= */}

        {/* =========Banner========== */}
 
        <div className="banner-container m-6" style={{display:'flex',flexDirection:'column', alignItems: 'center'}}>
        <div><h1 style={{fontWeight: 'bolder',borderBottom:'3px solid #7fad39', textAlign:'center'}}>Special Offer</h1></div>
          <div className="rows" style={{display:'flex',justifyContent:'space-evenly'}}>
            {banners?.slice(0, 2).map((p, index) => (
              <div key={index} className='ban w-100 m-4' >
                <img
                  src={`/api/v1/banner/banner-photo/${p._id}`}
                  className="img-fluid"
                  style={{
                    height: '40vh',
                    width: '100%',
                    objectFit: 'fill',
                    marginBottom: '10px'
                  }}
                  alt={`Banner ${index}`}
                />
              </div>
            ))}
          </div>
        </div>
           {/* =========Banner End========== */}
        
      </div>
    </Lay>
  );
};

export default HomePage;
