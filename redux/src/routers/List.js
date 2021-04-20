import React from 'react';
import Items from '../jsons/fishes.json';
import styled from 'styled-components';
import { IoCartOutline } from "react-icons/io5";
import { CartAction } from '../actions';
import { useDispatch } from 'react-redux';

function List() {
    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch(CartAction.addToCart(item));
    }

    return (
        <Container>
            <h1>List Component</h1>
            <section>
                {Items.map((item) => (
                    <article key={`ITEMS${item.id}`}>
                        <img src={item.src}/>
                        <h1> {item.name} </h1>
                        <h3> {item.price} </h3>
                        <button onClick={() => addToCart(item)}> <IoCartOutline/> </button>
                    </article>
                ))}
            </section>
        </Container>
    )
}

export default List;

const Container = styled.div`
    width : 1000px;
    margin : 50px auto;
    
    & > section {
        display : flex;
        flex-wrap : wrap;

        & > article {
            width : calc((100% - 20px * 2) / 3);
            margin-bottom : 20px;
            box-sizing : border-box;
            border : 1px solid #ddd;
            box-shadow : 0 0 15px rgba(0, 0, 0, .2);

            &:not(:nth-child(3n)) {
                margin-right : 20px;
            }
            img {
                width : 100%;
            }
            h1 {
                font-size : 20px;
                font-weight : 600p;
            }
            button {
                width: 100%;
                background : rgba(70, 43, 103, 1);
                color : #fff;
                height : 50px;
                cursor : pointer;
                font-size : 20px;
                transition: 0.3s;
                &:hover {
                    color: yellow;
                }
                &:active {
                    transform: scale(.96);
                }
            }
        }
    }

`;