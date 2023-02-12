// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Input, Label, Span } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
    const filterInputId = nanoid();
    return (
        <Form>
            <Label htmlFor={filterInputId}>
                <Span>Find contacts by name</Span>
                <Input
                    type="text"
                    onChange={onChange}
                    Value={value}
                />
            </Label>
        </Form>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}.isRequired;