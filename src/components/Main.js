import React, {useContext, useEffect, useState } from 'react'
import "./main.css"
import axios from 'axios';
import { MyContext } from './MyContext'
function Main() {
  const { text} = useContext(MyContext);
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false);
  const [postId, setPostId] = useState(null)
console.log(text);
  const LogPost = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
  });
  const fetchProducts = async () => {
    setLoading(true)


    const res = await LogPost.get('?_limit=100')
    const data = await res.data
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setLoading(false)
    setProducts(data)
    console.log(data);
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const selecePage = (selectedPage) => {

    setPage(selectedPage)

  }

  function DeletPost(postId) {
    setPostId(postId);

    setProducts(products.filter(post => post.id !== postId));
    setPostId(null);

  }
  return (

    <div>
      {
        loading ? (<div class="loader"></div>) : (
          products.length > 0 && <div className='products'>
            {

              products.slice(page * 6 - 6, page * 6).map((items) => {
                return (
                  <span className='products__single' key={items.id}> <p className='deletIcon' onClick={() => { DeletPost(items.id) }}>❌</p>{items.title}
                    {/* <img src={smile} alt={items.id} /> */}
                    <span>{items.body}</span>
                  </span>
                
                )
              })
            }

          </div>
        )
      }
      {
        products.length > 0 && <div className='pagination'>

          {
            [...Array(Math.ceil(products.length / 6))].map((_, i) => {
              return <span className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selecePage(i + 1)} key={i}>{i + 1}</span>
            })
          }

          <span onClick={() => selecePage(page + 1)}>➡️</span>

        </div>
      }
    </div>
  )
}

export default Main