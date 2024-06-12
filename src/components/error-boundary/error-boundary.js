import { Component } from "react";
import ErrorMessage from "../error-message/error-message";
import './error-boundary.scss';

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return (
                <div className="boundary">
                    <ErrorMessage />
                </div>
            ) 
        }

        return this.props.children;
    }
}

export default ErrorBoundary;