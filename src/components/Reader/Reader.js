import { Component } from "react";

export class Reader extends Component {

    state = {
        index: 0,
    }

    changeIndex = (value) => {
        this.setState(state=> ({index: state.index + value}))
    }

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

        return (
            <div>
                <section>
                    <button type="button"
                        disabled={index === 0} 
                        onClick={() => this.changeIndex(-1)}>Назад
                    </button>
                    <button type="button"
                        disabled={index + 1 === data.length}
                        onClick={() => this.changeIndex(1)}>Вперед
                    </button>
                </section>

                <p>{index + 1}/{ data.length}</p>

                <article>
                    <h2>{ currentItem.title}</h2>
                    <p>{ currentItem.text }</p>
                </article>
            </div>
        )
    }
}