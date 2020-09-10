import React from 'react';
import UserAvatar from '../UserAvatar';
import PersonalInfo from '../PersonalInfo';
import ShareModal from '../ShareModal'
import store from '../../redux/store';
import './style.scss';

class MyInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showShareModal: false,
            showPersonalInfo: false
        };
        this._userInfo = JSON.parse(localStorage.getItem('userInfo'));
    }
    _showPersonalInfo = () => {
        this.setState(state => ({
            showPersonalInfo: !state.showPersonalInfo
        }))
    }
    _showShareModal = () => {
        this.setState(state => ({
            showShareModal: !state.showShareModal,
            showPersonalInfo: false
        }))
    }
    _closeShareModal = () => {
        this.setState({
            showShareModal: false
        })
    }
    get shareLink() {
        return `${window.location.origin}/private_chat/${this._userInfo.user_id}`;
    }
    render() {
        const { name, avatar, github_id, user_id } = this._userInfo;
        const { allGroupChatsState, homePageListState } = store.getState();

        return (
            <div className="myInfo">
                <UserAvatar 
                    name={name}
                    src={avatar}
                    size="36"
                    clickAvatar={this._showPersonalInfo}
                    showLogo={!!github_id}
                />
                <PersonalInfo
                    userInfo={this._userInfo}
                    hide={this._showPersonalInfo}
                    modalVisible={this.state.showPersonalInfo}
                    showContactButton={false}
                    showShareModal={this._showShareModal}
                    showShareIcon
                />
                <ShareModal 
                    title="分享此联系人给"
                    modalVisible={this.state.showShareModal}
                    chatId={user_id}
                    cancel={this._closeShareModal}
                    allGroupChats={allGroupChatsState}
                    homePageList={homePageListState}
                    userInfo={this._userInfo}
                    shareLink={this.shareLink}
                />

            </div>
        )
    }
}

export default MyInfo;