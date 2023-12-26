import styled from "styled-components";
export const Container = styled.div`
    background: yellow;
`
export const Img = styled.img`
    width: 300px;
    border-radius: 10%;
    height:200px;
`
export const Name = styled.h2`
    display:flex;
    justify-content:center;
`
export const Ul = styled.ul`
    list-style:none;
    display:flex;
    justify-content:center;
    background:white;
    border-radius:20%
`
export const Li = styled.li`
    &:not(:last-child){
        margin-right:20px
    }
`
export const H2 = styled.h2`
    color:white;
    margin:0;
    padding:10px;
`
export const Ul0 = styled.ul`
    display:flex;
    justify-content:center;
    list-style:none;
`
export const Li0 = styled.li`
    &:not(:last-child){
        margin-right:20px
    }
`
export const Div = styled.div`
    display:flex;
    justify-content:center;
    background:red;
`