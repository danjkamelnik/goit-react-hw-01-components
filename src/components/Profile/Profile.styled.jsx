import styled from '@emotion/styled'

export const ProfileCard = styled.div`
    margin: 25px;
    width: 300px;
`;

export const Description = styled.div`
    padding: 25px;
    border: 1px solid #e4e9f0;
`;

export const ProfileImg = styled.img`
    display: block;
    margin: 0 auto;
    width: 100px;
    border-radius: 50%;
    border: 1px solid #a1abb6;
    padding: 7px;
`;

export const Name = styled.p`
    margin-top: 30px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: #122236;
`;

export const Tag = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #768696;
`;

export const Location = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #768696;
`;

export const Stats = styled.ul`
    display: flex;
    height: 80px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis: 33.333%;
    gap: 10px;
    background-color: #f3f6f9;
    border: 1px solid #e4e9f0;
`;

export const Label = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #768696;
`;

export const Quantity = styled.span`
    font-weight: 500;
    color: #1f3349;
`;