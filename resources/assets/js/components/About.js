import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">About page</div>

                            <div className="panel-body">
                                The current state of title is "{this.props.title}"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};