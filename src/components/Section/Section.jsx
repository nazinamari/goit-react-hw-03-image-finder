// import { Box } from '../utils/Box';
import { Title, SectionStyled } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return(
        <SectionStyled>
                { title && <Title>{title}</Title>}
                {children}
        </SectionStyled>
    );
};

Section.propTypes = {
    title: PropTypes.string,
};
