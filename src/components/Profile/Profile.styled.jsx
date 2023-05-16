import styled from 'styled-components';
export const UserProfileCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
ter;
    margin: 0 auto;
    margin-bottom: 5px;
    padding: 4px;

    max-width: 100%;
    width: 360px;

    border-radius: 8px;
    box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
    background-color: '#627cf3';
`;

export const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 4px;
    background-color: '#627cf3';
`;

export const UserPhoto = styled.img`
    display: flex;
    align-items: cen
    justify-content: center;
    height: 150px;
    width: 150px;

    border-radius: 50%;
    box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

    &:hover {
      background: #ecf0f3;
      box-shadow: inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ceced1;
    }
`;

export const UserInfo = styled.p`
   font-family:'Roboto';
   font-size: 16px;
   color:'#9e0202';
   text-shadow: 1px 1px 1px '#aca5a5'; 
`;

export const UserName = styled(UserInfo)`
   font-weight: 500;
   font-size: 32px;
   color:'#9e0202';  
`;

export const Tag = styled(UserInfo)`
   color: '#2b3162';   
`;

export const Location = styled(UserInfo)`
  color: '#1a236a;';
`;

export const UserMediaStatsList = styled.ul`
    display: flex;
    width: 100%;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 4px;
`;

export const MediaStastsListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
        &:not(:last-child){
        border-right: 1px dotted #2b3162;
        }
`;

export const MediaStastsListInfo = styled.span`
    margin: 0px 5px;
    color: #2b3162;
    font-size: 16px;
`;

export const Label = styled(MediaStastsListInfo)`
  font-weight: 400;
`;

export const Quantity = styled(MediaStastsListInfo)`
  color: '#1a236a;';
  text-shadow: 1px 1px 1px #fff;
  font-weight: 700;
`;