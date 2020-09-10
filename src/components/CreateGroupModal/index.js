import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import './styles.scss';
import notification from '../Notification';


class GroupModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: props.defaultGroupName,
            groupNotice: props.defaultGroupNotice
        };
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    _confirm = () => {
        const { groupName, groupNotice } = this.state;
        if (!groupName || !groupNotice) {
            notification('还有空没填！', 'error');
            return;
        }
        // 增加一个判断群名是否已经存在

        /**
         * 
         *未开发
        */

        // 确认无误之后新增
        this.props.confirm({
            groupName, 
            groupNotice
        })
    }

    render() {
        const { modalVisible, cancel, title } = this.props;
        const { groupName, groupNotice } = this.state;
        return (
            <Modal 
               title={title}
               visible={modalVisible}
               confirm={this._confirm}
               hasCancel
               hasConfirm
               cancel={cancel}
            >
                <div className="groupModalContent">
                    <div>
                        <span>群名:</span>
                        <input 
                            name="groupName"
                            value={groupName}
                            onChange={this.handleChange}
                            type="text"
                            placeholder="不能超过12个字符"
                            maxLength="12"
                        />
                    </div>
                </div>
                <div>
                    <span>群公告:</span>
                    <textarea
                       name="groupNotice"
                       value={groupNotice}
                       onChange={this.handleChange}
                       rows="3"
                       type="text"
                       placeholder="不超过60个字符"
                       maxLength="60"
                    ></textarea>
                </div>
            </Modal>
        )
    }
}


GroupModal.propTypes = {
    modalVisible: PropTypes.bool,
    confirm: PropTypes.func,
    cancel: PropTypes.func,
    title: PropTypes.string,
    defaultGroupName: PropTypes.string,
    defaultGroupNotice: PropTypes.string,
  };
  
  GroupModal.defaultProps = {
    modalVisible: false,
    confirm() {},
    cancel() {},
    title: '',
    defaultGroupName: '',
    defaultGroupNotice: '',
  };
  