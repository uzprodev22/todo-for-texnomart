import DateFactory from '@/factories/dateFactory'

export default class NewTaskService extends DateFactory{
     Create(id, tit, txt) {
        let idPush = id
        let titlePush = tit.innerHTML
        let textPush = txt.innerHTML
        let createPush =  DateFactory.BuildDate(new Date())
        let hourPush =  DateFactory.BuildTime(new Date())
        let concludedPush = false

        return {
            idPush,
            titlePush,
            textPush,
            createPush,
            hourPush,
            concludedPush
        }
    }
}

// export default NewTaskService;
// module.exports = new NewTaskService;