import React, { Component } from 'react';

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title || ""
        };
    }

    save(event) {
        event.preventDefault();

        if (this.state.title !== this.props.title) {
            this.props.onChange({
                title: this.state.title
            });
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.title !== this.state.title) {
            this.setState({
                title: newProps.title
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Example form</div>

                            <div className="panel-body">
                                <form onSubmit={this.save.bind(this)}>
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.title}
                                            onChange={(e) => this.setState({title: e.target.value})} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


