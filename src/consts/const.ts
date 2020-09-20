import moment from 'moment';
import useSWR from 'swr';
//export const CurrentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
export const CurrentTime = moment().format();
export const MomentTime = moment().format("MMMM Do YYYY, h:mm:ss a");

//Server Library
export const DEFAULT_MOBILE_THRESHOLD = 800;
export const WEDDING_API_URL = 'http://test.weddingpencil.com/';
export const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

//SyntheticEvent LIBRARY
export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;

//MOMENT.js LIBRARY
var date = moment('2020-12-25 11:31:23 PM', 'YYYY-MM-DD hh:mm:ss a', true).format()
export const WeddingTimeMonth = moment(date).format('MM');
export const WeddingTimeDate = moment(date).format('DD');
export const WeddingTimeHour = moment(date).format('HH');

//SWR LIBRARY
export const fetcher = (endpointUrl: string) => fetch(PROXY_URL+WEDDING_API_URL+endpointUrl).then(res => res.json());


//SWR LIBRARY FORSTATE
export const useSharedState = (key: import("swr").keyInterface, initial: any) => {
    const { data: state, mutate: setState } = useSWR(key, {
        initialData: initial
    })
    return [state, setState]
}