import styled from "@emotion/styled";


export const Card = styled.div`
    display: flex;
    justify-content: center;
`;

export const Profiler = styled.div`
    width: 400px;
    border-radius: 10px;
    border: 1px solid black;
    overflow: hidden;
`;

export const Description = styled.div`
    padding: 30px;
`

export const Avatar = styled.img`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid black;
`;

export const Name = styled.p`
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 30px;
    color: black;
`;

export const Tag = styled.p`
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
    font-size: 16px;
    color: grey;
`;

export const Location = styled.p`
    margin: 0;
    text-align: center;
    font-size: 18px;
    color: grey;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    list-style: none;
    padding-left: 0;

`;

export const StatsItem = styled.li`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% / 3);
    border-top: 1px solid grey;
    border-bottom: none;
    background-color: #d4d4d4; 
    padding: 10px;

    &:not(:last-child){
        border-right: 1px solid grey;
    }
`;

export const StatsLabel = styled.span`
display: block;
    text-align: center;
    font-size: 20px;
    color: black
`;

export const StatsQuantity = styled.span`
    display: block;
    margin-top: 10px;    
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: green
`;