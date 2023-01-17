import React from "react";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
        };
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            };
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            };
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <>
            <div className="container_form">
                <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                        <div className="character-limit">
                            <p id="char">Sisa Karakter : {50 - this.state.title.length}</p>
                        </div>
                        <input type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                        <input type="text" placeholder="Isi Catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler}/>
                    <button type="submit">Tambah</button>
                </form>
            </div>
            </>
        );
    }
}


NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}
export default NoteInput;