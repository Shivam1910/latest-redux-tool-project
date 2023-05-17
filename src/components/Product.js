/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './store/cartSlice';
import { getProducts } from './store/productSlice';
const Product = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    useEffect(() => {
        dispatch(getProducts());

    }, [])


    const addToCart = (product) => {
        // dispatch an add action
        dispatch(add(product))
    }
    const cards = products?.map(product => (
        <div className="col-md-3 " style={{ marginBottom: '10px' }}>
            <Card key={product.id} className='h-100' >
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width: '100px', height: '130px' }} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR:{product.price}
                    </Card.Text>

                </Card.Body>
                <Card.Footer>
                    <Button variant="primary" onClick={() => addToCart(product)}>Add To Cart</Button>

                </Card.Footer>
            </Card>

        </div>
    ))
    return (
        <div>
            <h1>Product Dasboard</h1>
            <div className='row'>
                {cards}
            </div>
        </div>
    )
}

export default Product
