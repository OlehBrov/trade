import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 75%;
  height: 30rem;
  position: relative;
  margin-left: 30px;
  overflow: hidden;
`;
export const SlideElement = styled.li`
 /* position: absolute; */
    width: 100%; 
    height: 100%;
    display: grid;
    place-items: center;
    z-index: 0;
`

export const ButtonsWrap = styled.div`
position: absolute;
`