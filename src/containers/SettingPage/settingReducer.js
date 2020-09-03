import { SET_GLOBAL_SETTINGS } from './settingAction';

const GLOBAL_SETTINGS = {
    NOTIFICATION: 'notification'
};

const initialSetting = {
    [GLOBAL_SETTINGS.NOTIFICATION]:  true
}

const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const previousSettings = userInfo && JSON.parse(localStorage.getItem(`settings-${userInfo.user_id}`));

const setGlobalSettingsReducer = (previousState = previousSettings || initialSetting, action) => {
    switch (action.type) {
        case SET_GLOBAL_SETTINGS:
            if (userInfo) {
                localStorage.setItem(
                    `settings-${userInfo.user_id}`,
                    JSON.stringify({...previousState, ...action.data })
                );
            }
            return {
                ...previousState,
                ...action.data
            }
        default:
            return previousState
    }
}

export {
    setGlobalSettingsReducer,
    GLOBAL_SETTINGS
}
       
