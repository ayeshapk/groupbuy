import useSWR from 'swr';

//Server Library
export const DEFAULT_MOBILE_THRESHOLD = 800;
export const LOBANG_API_URL = '';
export const PROXY_URL = "";

//SyntheticEvent LIBRARY
export type UpdateMessageParam = React.SyntheticEvent<{ value: string }>;

//SWR LIBRARY
export const fetcher = (endpointUrl: string) => fetch(PROXY_URL+LOBANG_API_URL+endpointUrl).then(res => res.json());


//SWR LIBRARY FORSTATE
export const useSharedState = (key: import("swr").keyInterface, initial: any) => {
    const { data: state, mutate: setState } = useSWR(key, {
        initialData: initial
    })
    return [state, setState]
}

//COLOR CODE
export const DESCRIPTION_COLOR = '#D2D2D2';
export const TEXT_COLOR = '#F26E22';
export const PRICE_COLOR = '#ED2939';
export const MainText = '#A60321';
export const SubText = '#2678BF';
export const ListText = '#D2D2D2';
export const DescriptionText = '#F26E22';
export const ICON_COLOR = '#2678BF';
export const LOGO_COLOR = '#A60321';
