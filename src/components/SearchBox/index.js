import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: ''
        };
    }
    _searchFieldChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        const { searchFieldChange } = this.props;
        searchFieldChange(value);

    }
    render() {
        const { searchField } = this.state;
        const { isSearching } = this.props;
        return (
            <div className="searchBox">
                <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-search1"></use>
                </svg>
                <input 
                    type="text"
                    name="searchField"
                    value={isSearching ? searchField : ''}
                    placeholder="搜索用户/群"
                    onChange={this._searchFieldChange} />
            </div>
        )
    }
}

export default SearchBox;
SearchBox.propTypes = {
    searchFieldChange: PropTypes.func,
    isSearching: PropTypes.bool,
  };
  
  SearchBox.defaultProps = {
    searchFieldChange: undefined,
    isSearching: false,
  };