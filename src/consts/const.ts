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

export const PRIMARY_COLOR = '#F26E22';
export const SECONDARY_COLOR = '#2678BF';
export const ITEM_COLOR ='rgb(38, 120, 191)';

export const LOGO_BLUE_DARK_COLOR ='#048ABF';
export const LOGO_BLUE_DARK_NORMAL_COLOR ='#079CD8';
export const LOGO_BLUE_NORMAL_COLOR ='#00B1D8';
export const LOGO_BLUE_LIGHT_NORMAL_COLOR ='#4EC6E0';
export const LOGO_BLUE_LIGHT_COLOR ='#6ACCE8';