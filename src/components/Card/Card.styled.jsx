import styled from 'styled-components';
import popup from '../../images/popup.png';

export const Container = styled.div`
  margin: 0 auto;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  height: 460px;
  background-image: url(${popup}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: top 28px right 36px, top 0 right 0;

  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const ImageWrapper = styled.div`
  display: block;
  margin: 20px;
  padding: 0;
`;
export const LogoImage = styled.img`
  display: block;
`;
export const WrapperBoy = styled.div`
  position: relative;
  margin-top: 116px;
  margin-bottom: 20px;
  /* top: 110px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BoyImage = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  z-index: 100;

  border: 8px solid #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;
export const Line = styled.div`
  position: absolute;
  top: 40%;
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Tweets = styled.p`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const Followers = styled.p`
  margin-bottom: 26px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 50px;
  border: none;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;
`;
