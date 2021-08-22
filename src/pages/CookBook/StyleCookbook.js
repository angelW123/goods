import styled from "styled-components";

export const HeaderWrap = styled.div `
  height: .88rem;
  background-color: orange;
  text-align: center;
  line-height: .88rem;
  color: #fff;
  font-size: .4rem;
`

export const SwipperWrap = styled.div `
  height: 4rem;  
`

export const SearchWrap = styled.div `
  margin: .2rem;
  border: solid 1px orange; 
  height: .8rem;
  font-size: .3rem;
  background-color: #fff;
  display:flex;
  justify-content:center;
  align-items:center;
  svg{
    color: orange;
  }
`

export const HotCateWrap = styled.div `
  background-color:#fff;
  padding-bottom: 1rem;
  header{
    padding: .3rem;
    border-bottom: solid 1px #ccc;
  }
  .item{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    img{
      width: 1.5rem;
      height: 1.5rem;
    }
    span{
      margin-top: 0.28rem;
    }
  }
`