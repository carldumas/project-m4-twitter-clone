// Libraries
import React from 'react';
import styled from 'styled-components';
// Constants
import { COLORS } from '../constants';

class UserTweetInput extends React.Component {
    state = {
        content: '',
        charLimit: 280,
    };

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleOnSubmit = (e) => {
        e.preventDefault();
        const userTypedInText = document.getElementById('userInputText').value;
        if (this.state.content.length <= this.state.charLimit) {
            document.getElementById(
                'userTextContent'
            ).innerHTML = userTypedInText;
        } else {
            alert(
                'Please remove ' +
                    (userTypedInText.length - this.state.charLimit) +
                    ' characters'
            );
        }
        this.setState({ content: '' });
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleOnSubmit}>
                    <UserInputField
                        id="userInputText"
                        type="text"
                        name="content"
                        placeholder="What's happening!"
                        value={this.state.content}
                        onChange={this.handleOnChange}
                    />
                    <div style={{ display: 'inlineBlock', float: 'right' }}>
                        <p id="charactersCount" style={{ display: 'inline' }}>
                            {this.state.charLimit - this.state.content.length}
                        </p>{' '}
                        <MeowButton
                            id="submitFeedButton"
                            type="submit"
                            value="Meow"
                            disabled={
                                this.state.content.length > 0 ? false : true
                            }
                        />
                    </div>
                </form>
            </>
        );
    }
}

const UserInputField = styled.textarea`
    width: 650px;
    height: 150px;
    text-align: top;
    font-size: 26px;
    border: none;
    outline: none;
    resize: none;
`;

const MeowButton = styled.input`
    align-self: flex-end;
    height: 40px;
    width: 80px;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    text-align: center;
    outline: none;
    background-color: ${COLORS.primary};
    color: white;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        border: none;
        color: white;
        cursor: not-allowed;
    }
`;

export default UserTweetInput;
