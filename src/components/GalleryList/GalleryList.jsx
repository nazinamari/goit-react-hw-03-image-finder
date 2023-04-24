import { Component } from 'react';
import { fetchData } from 'services/api';
import { StyledList } from './GalleryList.styled';
import { ItemGallery } from './ItemGallery/ItemGallery';


const Status =  {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
    };

export class GalleryList extends Component {
    state = {
        imagesData: [],
        error: null,
        status: Status.IDLE,
        totalHits: null,
        page: 1,
    };

    async componentDidUpdate(prevProps, prevState) {
        if (prevProps.query !== this.props.query) {
            this.setState({ status: Status.PENDING, page: 1 });
            fetchData(this.props.query)
                .then(({ data }) => {
                    this.setState({
                        data: data.hits,
                        status: Status.RESOLVED,
                        totalHits: data.totalHits,
                    });
                }).catch((error) => this.setState({ error, status: Status.REJECTED }))
        }
        if (prevState.page !== this.state.page) {
            fetchData(this.props.query, this.state.page)
                .then(({ data }) => {
                    this.setState((prevState) => ({
                        data: [...prevState.data, ...data.hits],
                        status: Status.RESOLVED,
                        totalHits: data.totalHits,
                    }));
                }).catch((error) => this.setState({ error, status: Status.REJECTED }));
        }
    };

    handleLoadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1}))
    };


    render() {
        const { status, imagesData } = this.state;

        if (status === 'idle') {
            return 
        };
        
        if (status === 'pending') {
            return <div>Loading...</div>
        };

        if (status === 'rejected') {
            return <p>Not found</p>
        };

        if (status === 'resolved') {
            return (
                <StyledList>
                    {imagesData && imagesData.map(picture =>
                        <ItemGallery key={picture.id} {...picture}
                        />)}
                </StyledList>

            )
        }
    }
};

