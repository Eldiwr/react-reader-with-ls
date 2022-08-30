import { Component } from "react";
import { ReaderControls } from "./ReaderControls";
import { Progress } from "./Progress";
import { Publication } from "./Publication";

const LS_KEY = 'reader_item_index';

export class Reader extends Component {

    state = {
        index: 0,
    };

    changeIndex = (value) => {
        this.setState(state => ({ index: state.index + value }));
    };

    componentDidMount() {
        const savedState = localStorage.getItem(LS_KEY);
        if (savedState) {
            this.setState({ index: Number(savedState) });
        };
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.index !== this.state.index) {
            localStorage.setItem(LS_KEY, this.state.index);
        };
    };

    // onNext = () => {
    //     this.setState(state => ({ index: state.index + 1 }));
    // };

    // onPrev = () => {
    //     this.setState(state => ({ index: state.index - 1 }));
    // };

    render() {
        const { index } = this.state;
        const { data } = this.props;
        const currentItem = data[index];
        const totalItems = data.length;

        return (
            <div>
                <ReaderControls current={index + 1} total={totalItems} onChange={this.changeIndex} />

                <Progress total={totalItems} current={index + 1} />
                
                <Publication item={currentItem} />
            </div>
        );
    };
};