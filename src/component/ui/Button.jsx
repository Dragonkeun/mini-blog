import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size:16px;
    border-width:1px;
    cursor:pointer;
    margin-bottom:8px;
`;

function Button(props) {
    const { title, onClick } = props;
    return <StyledButton onClick={onClick}>{title || 'button'}</StyledButton>
}

export default Button;