import React from 'react';


class SearchBar extends React.Component {
    state = {value: ''};

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.value)

    };

    render() {
        return (<div className={"ui segment"}>
            <form onSubmit={this.onFormSubmit} className={"ui form"}>
                <div className="ui fluid icon input">
                    <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})}
                           placeholder="Search..."/>
                    <i className="search icon"/>
                </div>

            </form>
        </div>)
    }
}

export default SearchBar;