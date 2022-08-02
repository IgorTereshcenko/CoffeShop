import { Component } from 'react';
import './searchPanel.scss';


class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        return (
            <div className="search">
                <div className="container">
                    <div className="search__wrappInput">
                    <div className="search__inputText">Lookiing for</div>
                    <input className='search__input' 
                        type="text"
                        value={this.state.term}
                        placeholder='start typing here...'
                        onChange={this.onUpdateSearch} />
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchPanel;