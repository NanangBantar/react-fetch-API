import styled from "styled-components";

const Styling = styled.div`
   display: flex;
   border: 1px solid #1DB9C3;
   padding: 10px 10px;
   margin: 10px 0;
   border-radius: 5px;
   div{
       width: 100%;
    display: flex;
    align-items: center;
    img{
        height: 50px;
    }
   }
`;

const List = ({ name, image, price }) => {
    return (
        <Styling>
            <div>
                <img src={image} />
            </div>
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <p>
                    {price}
                </p>
            </div>
        </Styling>
    );
};

export default List;