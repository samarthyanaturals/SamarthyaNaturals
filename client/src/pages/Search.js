import { Layout } from 'antd'
import React from 'react'
import { useSearch } from '../context/search'
import Lay from '../components/Layout/Lay'
import { useCart } from '../context/cart'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [values,setValues]=useSearch()
    const [cart, setCart] = useCart()
    const navigate=useNavigate()
  return (
    <Lay title={"Search Results"}>
        <div className='container'>
            <div className='text-center'>
                <h1>Search Results</h1>
                <h6>
                    {values?.results.length<1
                    ?"No Products Found"
                : `Found ${values?.results.length}`}
                </h6>
                <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={{ width: "18rem" }}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">
                    {p.description.substring(0, 30)}...
                  </p>
                  <p className="card-text"> Rs. {p.price}</p>
                  <button class="btn btn-primary ms-1" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                  <button class="btn btn-secondary ms-1"
                                      onClick={() => {
                                        setCart([...cart, p]);
                                        localStorage.setItem("cart", JSON.stringify([...cart, p]))
                                        toast.success("Item Added to Cart")
                                      }
                                      }
                  >ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
            </div>
        </div>
    </Lay>
  )
}

export default Search