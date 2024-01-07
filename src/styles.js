import styled from 'styled-components'

export const Container = styled.div`
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const ToDoList = styled.div`
background: white;
padding: 30px 20px;
border-radius: 5px;

ul {
    padding: 0;
    margin-top: 60 px;
}
`

export const Input = styled.input`
border: 2px solid rgba(209, 211, 212, 0.4);
border-radius: 5px;
height: 40px;
margin-right: 10px;
width: 340px;
margin-right: 40px;

`
export const Button = styled.button`
background: rgba(128, 82, 236, 1);
width: 130px;
height: 40px;
border-radius: 5px;
border: none;



font-size: 17px;
font-weight: 900;
line-height: 3px;
color: white;
`

export const ListItem = styled.div`
width: 500px;
height: 60px;
border-radius: 5px;
background: ${props => props.isFinished ? '#E8FF8B' : ' #E4E4E4'};
box-shadow: 1px 4px 10px 0px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
padding: 0 10px;
width: 500px;

li{
    list-style: none;
}

`


