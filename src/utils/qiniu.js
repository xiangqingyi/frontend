import * as qiniu from 'qiniu-js';

async function upload(file, uploadToken, completeEvent) {
    const observer = {
        next(res) {
            
        },
        error(err) {
            return err;
        },
        complete(res) {
            const fileUrl = `https://cdn.aermin.top/${res.key}`;
            completeEvent(fileUrl);
        }
    }

    const config = { 
        useCdnDomain: true
    }
    const putExtra = {};
    const { user_id } = JSON.parse(localStorage.getItem('userInfo'));
    const key = `${user_id}_${new Date().getTime()}_${file.name}`;
    const observable = qiniu.upload(file, key, uploadToken, putExtra, config)
    const subscription = observable.subscribe(observer)
}


export default upload;