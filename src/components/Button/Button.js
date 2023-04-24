import * as React from "react";
import Button from "@mui/material/Button";
import { AiOutlineSearch } from "react-icons/ai";
import { StyledSearchBtn, SearchFormButtonLabel } from './Button.styled';

// import HourglassBottomTwoToneIcon from '@mui/icons-material/HourglassBottomTwoTone';

export const LoadMoreBtn = ({ onClick, isLoading }) => {
    return <Button
        variant="contained"
        size='large'
        onClick={onClick}>
        {isLoading ? 'Loading...': 'Load More'}
    </Button>;
};

export const SearchBtn = () => (
    <StyledSearchBtn type='submit'>
        <SearchFormButtonLabel />
        <AiOutlineSearch size="24px" />
    </StyledSearchBtn>
);
