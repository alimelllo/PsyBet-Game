import styled from 'styled-components';
import tw from 'twin.macro';
const Style = styled.div`
    .footer-icon{
        transform: scale(0.7);
    }
    .footer-icon:hover{
        circle{
            ${tw`transition-all duration-150`}
            stroke:#FA2F6C;

        }
        path{
            ${tw`transition-all duration-150`}
            fill:#FA2F6C;
        }
    }

  

`;

export default Style;