import React from "react";
import {ListRenderItemInfo, Text} from 'react-native'
import {HotelListType} from './model/hotel_list_data'


interface Props{
    data: ListRenderItemInfo<HotelListType>;
}

const HotelListItem : React.FC<Props> = ({data}) => {

    return(
        <Text>HotelListItem</Text>
    );
}

export default HotelListItem;
