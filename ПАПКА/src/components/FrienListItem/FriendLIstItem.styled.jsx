import styled from "@emotion/styled";

export const ListItem = styled.li`
    width: 400px;
    height: 80px;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid grey;
    border-radius: 5px;
    cursor: pointer;


    &:not(:last-child){
        margin-bottom: 10px;
    };

    &:hover, &:focus {
        box-shadow: 0 1px 3px rgb(0 0 0 / 20%), 0 1px 1px rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
    }
`

export const OnlineIcon = styled.span`
    display:flex;
    align-items: center;
    margin-left: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => {
    switch (props.isOnline) {
        case true:
            return 'green';
        case false:
            return 'red';
        default:
            return 'grey';
        }
    }
    };
`
export const Avatar = styled.img`
    margin-left: 30px;
`

export const FriendName = styled.p`
    margin-left: 20px;
    font-size: 30px;
`