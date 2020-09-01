import moment from 'moment';
export const formateDate = (data) =>
    data.data.map((singleData) => {

        let formattedDate = "";

        if (singleData.Date) {
            formattedDate = moment(singleData.Date).format("MMM DD YYYY");
        }

        return {
            ...singleData,
            Date: formattedDate
        }
    })
