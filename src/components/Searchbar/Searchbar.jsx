import { Formik } from 'formik';
import { SearchBtn } from '../Button/Button';
import { SearchBarHeader, StyledForm, Label, Input } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {

    const handleSubmit = (values, actions) => {
        onSubmit(values);
        // actions.resetForm();
    };
    
    return (
        <SearchBarHeader>
            <Formik
                initialValues={{ searchQuery: '' }}
                onSubmit={handleSubmit}
            >
                <StyledForm autoComplete="off">
                    <SearchBtn type="submit"/>
                    <Label htmlFor="searchQuery" />
                    <Input
                        name="searchQuery"
                        id="searchQuery"
                        type="text"
                        placeholder="Search images and photos"
                        autoFocus
                    />
                </StyledForm>
            </Formik>
        </SearchBarHeader>
    );
}