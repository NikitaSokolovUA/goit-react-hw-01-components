import styled from "@emotion/styled";

export const Table = styled.table`
    margin-right: auto;
    margin-left: auto;
    border-radius: 4px;
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    `
export const TableHead = styled.thead`
    background-color: #00FFFF;
    color: white;
`

export const TableHeadElement = styled.th`
    width: 100px;
    padding: 20px;

    font-size: 20px;
    line-height: 1.19;
`
export const TableBody = styled.tbody`
    text-align: center;
`
export const TableElements = styled.tr`
    color: #2E8B57;
    background-color:white;

    :nth-of-type(2n){
        background-color: #D3D3D3;
    }
`

export const OneTableElement = styled.td`
    padding: 20px;
    width: 100px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.19;
`