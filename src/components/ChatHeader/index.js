import React from 'react'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

class ChatHeader extends React.Component {
    clickToBack = () => {
        this.props.history.push('/');
    }
    _clickChatInfo = () => {
        const { showGroupChatInfo, showPersonalInfo,chatType,hasShowed } = this.props
        if (chatType === 'group') {
            showGroupChatInfo(!hasShowed);
        } else if (chatType === 'private') {
            showPersonalInfo();
        }
    }
    _showShareModel = () => {
        this.props._showShareModel();
    }

    render() {
        const { title, chatType, showShareIcon } = this.props;
        const icon = chatType === 'group' ? '#icon-group' : '#icon-people';
        const isRobotChat = chatType === 'robot';
        return (
            <div className="chat-header-wrapper">
                <svg onClick={this.clickToBack} className="icon back-icon" aria-hidden="true">
                    <use xlinkHref="#icon-share"></use>
                </svg>
                <div className="chat-title">{title}</div>
                {showShareIcon && (
                    <svg onClick={this._showShareModel} className="icon shareIcon" aria-hidden="true">
                        <use xlinkHref="#icon-share"></use>
                    </svg>
                )}
                {
                    !isRobotChat&& (
                        <svg onClick={this._clickChatInfo} className="icon infomation-icon" aria-hidden="true">
                            <use xlinkHref={icon}></use>
                        </svg>
                    )
                }
            </div>
        )
    }
}

export default withRouter(ChatHeader);

ChatHeader.propTypes = {
    title: PropTypes.string,
    history: PropTypes.object,
    chatType: PropTypes.string.isRequired,
    showGroupChatInfo: PropTypes.func,
    hasShowed: PropTypes.bool,
    showShareIcon: PropTypes.bool
}

ChatHeader.defaultProps = {
    title: '',
    history: undefined,
    showGroupChatInfo: undefined,
    showPersonalInfo: undefined,
    hasShowed: false,
    showShareIcon: false
}